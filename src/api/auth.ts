import { api } from "./client";
import type { AuthRole } from "../auth/permissions";

export type LoginRequest = {
  email: string;
  password: string;
  role: AuthRole;
};

export type LoginResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: AuthRole;
  };
};

export type SignupRequest = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: Exclude<AuthRole, "Admin">;
};

export const authApi = {
  login: (data: LoginRequest) => api.post<LoginResponse>("/auth/login", data),

  signup: (data: SignupRequest) =>
    api.post<LoginResponse>("/auth/signup", data),

  logout: () => api.post<void>("/auth/logout"),

  me: () => api.get<LoginResponse["user"]>("/auth/me"),
};
