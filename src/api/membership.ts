import { api } from "./client";

export type MembershipTier = {
  id: string;
  name: string;
  price: number;
  benefits: string[];
  isActive: boolean;
};

export type MembershipStatus = {
  tier: MembershipTier;
  startDate: string;
  expiresAt: string;
  isActive: boolean;
};

export const membershipApi = {
  getTiers: () => api.get<MembershipTier[]>("/membership/tiers"),

  getMyStatus: () => api.get<MembershipStatus>("/membership/status"),

  subscribe: (tierId: string) =>
    api.post<MembershipStatus>(`/membership/subscribe`, { tierId }),

  cancel: () => api.post<void>("/membership/cancel"),
};
