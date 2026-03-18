import { api } from "./client";

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  image?: string;
  capacity: number;
  registered: number;
};

export const eventsApi = {
  list: (params?: { category?: string; page?: number }) => {
    const query = new URLSearchParams();
    if (params?.category) query.set("category", params.category);
    if (params?.page) query.set("page", String(params.page));
    const qs = query.toString();
    return api.get<Event[]>(`/events${qs ? `?${qs}` : ""}`);
  },

  getById: (id: string) => api.get<Event>(`/events/${encodeURIComponent(id)}`),

  create: (data: Omit<Event, "id" | "registered">) =>
    api.post<Event>("/events", data),

  update: (id: string, data: Partial<Event>) =>
    api.patch<Event>(`/events/${encodeURIComponent(id)}`, data),

  delete: (id: string) => api.delete<void>(`/events/${encodeURIComponent(id)}`),

  register: (eventId: string) =>
    api.post<void>(`/events/${encodeURIComponent(eventId)}/register`),
};
