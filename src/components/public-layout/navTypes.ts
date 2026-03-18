import type { LucideIcon } from "lucide-react";

export type MegaMenuId = "services" | "events" | "discover" | null;

export type NavItem = {
  name: string;
  path: string;
};

export type ServiceItem = {
  name: string;
  path: string;
};

export type ServiceCategory = {
  icon: LucideIcon;
  desc: string;
  image: string;
  services: ServiceItem[];
};

export type ServiceCategories = Record<string, ServiceCategory>;

export type UpcomingEvent = {
  name: string;
  path: string;
  date: string;
  type: string;
};

export type EventType = {
  name: string;
  desc: string;
  icon: LucideIcon;
  path: string;
  image: string;
};

export type DiscoveryGroup = {
  title: string;
  items: NavItem[];
  image: string;
  desc: string;
};
