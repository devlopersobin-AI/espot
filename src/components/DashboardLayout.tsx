import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Building2,
  Search,
  Bell,
  Home,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import logoWithText from "../assets/espotclub_logo_withtext.png";
import { getAuthRole, type AuthRole } from "../auth/permissions";
import { cn } from "../lib/utils";

type NavItem = { name: string; path: string; icon: LucideIcon };

function buildNav(base: string, profileLabel = "My Profile"): NavItem[] {
  return [
    { name: "Overview", path: base, icon: LayoutDashboard },
    {
      name: profileLabel,
      path: `${base}/profile`,
      icon:
        base.includes("partner") || base.includes("franchise")
          ? Building2
          : Users,
    },
    { name: "Events", path: `${base}/events`, icon: Calendar },
  ];
}

const DASHBOARD_CONFIG: Record<string, { title: string; nav: NavItem[] }> = {
  Admin: {
    title: "Admin",
    nav: [
      ...buildNav("/dashboard"),
      { name: "Membership", path: "/dashboard/membership", icon: Users },
    ],
  },
  Member: { title: "Member", nav: buildNav("/dashboard/member") },
  Partner: {
    title: "Partner",
    nav: buildNav("/dashboard/partner", "Company Profile"),
  },
  Franchisee: {
    title: "Franchise",
    nav: buildNav("/dashboard/franchise", "Franchise Profile"),
  },
  Entrepreneur: { title: "Member", nav: buildNav("/dashboard/member") },
  Leader: { title: "Leader", nav: buildNav("/dashboard/leader") },
  Scholar: { title: "Scholar", nav: buildNav("/dashboard/scholar") },
  Jobseeker: { title: "Member", nav: buildNav("/dashboard/member") },
  Trainer: { title: "Member", nav: buildNav("/dashboard/member") },
};

const DEFAULT_CONFIG = { title: "Dashboard", nav: buildNav("/dashboard") };

export default function DashboardLayout() {
  const location = useLocation();
  const role = getAuthRole();
  const roleLabel = role ?? "Guest";
  const config = (role && DASHBOARD_CONFIG[role]) || DEFAULT_CONFIG;
  const currentPageName =
    config.nav.find((n) => n.path === location.pathname)?.name || config.title;
  const initials = roleLabel.slice(0, 2).toUpperCase();

  return (
    <div className="flex h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_#f3f9ff_0%,_#f8fafc_38%,_#f8fafc_100%)] font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-72 bg-white/95 border-r border-slate-200/80 backdrop-blur-sm flex flex-col shrink-0 z-20 shadow-[0_10px_35px_-30px_rgba(15,23,42,0.9)]">
        <div className="h-20 flex items-center px-6 border-b border-slate-200/80">
          <img
            src={logoWithText}
            alt="E-Spot Club"
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 hide-scrollbar">
          <Link
            to="/"
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors mb-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.16em] mb-3 px-3 mt-4">
            {config.title}
          </div>
          {config.nav.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-sky-50 to-cyan-50 text-slate-900 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.35)]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                )}
              >
                <item.icon
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isActive
                      ? "text-sky-600"
                      : "text-slate-400 group-hover:text-slate-600",
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-200/80">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-semibold text-xs shadow-sm">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 truncate">
                Workspace User
              </p>
              <p className="text-xs text-slate-500 truncate">{roleLabel}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white/90 border-b border-slate-200/80 backdrop-blur-sm flex items-center justify-between px-6 md:px-8 shrink-0 z-10">
          <div>
            <h1 className="text-lg font-bold text-slate-900 tracking-tight">
              {currentPageName}
            </h1>
            <div className="text-xs text-slate-500">
              {config.title} Dashboard
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative w-48 md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-14 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-sky-500 transition-all"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <kbd className="hidden sm:inline-block border border-slate-200 rounded px-1.5 text-[10px] font-mono text-slate-400 bg-white">
                  Ctrl
                </kbd>
                <kbd className="hidden sm:inline-block border border-slate-200 rounded px-1.5 text-[10px] font-mono text-slate-400 bg-white">
                  K
                </kbd>
              </div>
            </div>

            <button className="relative p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-5 md:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
