import { api } from "./client";
import type { AuthRole } from "../auth/permissions";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: AuthRole;
  avatar?: string;
  bio?: string;
  createdAt: string;
};

export const usersApi = {
  getProfile: () => api.get<UserProfile>("/users/me"),

  updateProfile: (data: Partial<UserProfile>) =>
    api.patch<UserProfile>("/users/me", data),

  getById: (id: string) =>
    api.get<UserProfile>(`/users/${encodeURIComponent(id)}`),

  list: (params?: { role?: AuthRole; page?: number; search?: string }) => {
    const query = new URLSearchParams();
    if (params?.role) query.set("role", params.role);
    if (params?.page) query.set("page", String(params.page));
    if (params?.search) query.set("search", params.search);
    const qs = query.toString();
    return api.get<UserProfile[]>(`/users${qs ? `?${qs}` : ""}`);
  },
};
