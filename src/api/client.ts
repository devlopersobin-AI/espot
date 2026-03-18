import { config } from "../config/env";

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public data: unknown,
  ) {
    super(`${status} ${statusText}`);
    this.name = "ApiError";
  }
}

function clearAuth() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("authRole");
  window.location.href = "/auth";
}

async function request<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { body, headers: customHeaders, ...rest } = options;

  // Validate endpoint to prevent SSRF — must start with /
  if (!endpoint.startsWith("/")) {
    throw new Error("API endpoint must be a relative path starting with /");
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    ...(customHeaders as Record<string, string>),
  };

  const token = localStorage.getItem("authToken");
  if (token) {
    // Basic token format validation — reject if it looks tampered
    if (token.length > 4096 || /[<>"']/.test(token)) {
      clearAuth();
      throw new Error("Invalid auth token detected");
    }
    headers["Authorization"] = `Bearer ${token}`;
  }

  const url = `${config.apiBaseUrl}${endpoint}`;
  const init: RequestInit = {
    headers,
    credentials: "same-origin",
    ...rest,
  };
  if (body !== undefined) {
    init.body = JSON.stringify(body);
  }

  const response = await fetch(url, init);

  // Auto-logout on authentication failure
  if (response.status === 401) {
    clearAuth();
    throw new ApiError(response.status, response.statusText, null);
  }

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    throw new ApiError(response.status, response.statusText, data);
  }

  if (response.status === 204) return undefined as T;
  return response.json();
}

export const api = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: "GET" }),

  post: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: "POST", body }),

  put: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: "PUT", body }),

  patch: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: "PATCH", body }),

  delete: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: "DELETE" }),
};

export { ApiError };
