import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Building2,
  Search,
  Bell,
  Home,
  MessageSquare,
  UserPlus,
  Briefcase,
  GraduationCap,
  Handshake,
  Star,
  Mail,
  CheckCheck,
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

/* ── Notification system ───────────────────────────────────────────── */
type Notification = {
  id: number;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
};

const ROLE_NOTIFICATIONS: Record<string, Notification[]> = {
  Admin: [
    {
      id: 1,
      icon: UserPlus,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "New Member Sign-up",
      body: "Aarav Shrestha registered as a new member.",
      time: "5 min ago",
      read: false,
    },
    {
      id: 2,
      icon: Mail,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50",
      title: "Franchise Inquiry",
      body: "XYZ Enterprises inquired about Pokhara franchise.",
      time: "22 min ago",
      read: false,
    },
    {
      id: 3,
      icon: MessageSquare,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      title: "Contact Form Submission",
      body: "Rita Sharma submitted a general inquiry via Contact Us.",
      time: "1 hr ago",
      read: false,
    },
    {
      id: 4,
      icon: Briefcase,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      title: "Partner Application",
      body: "Global Solutions Ltd applied for a partner program.",
      time: "3 hr ago",
      read: true,
    },
    {
      id: 5,
      icon: Star,
      iconColor: "text-rose-600",
      iconBg: "bg-rose-50",
      title: "Event Registration Spike",
      body: "Nepal Talent 2026 received 45 new registrations today.",
      time: "5 hr ago",
      read: true,
    },
  ],
  Member: [
    {
      id: 1,
      icon: Star,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50",
      title: "Points Earned",
      body: "You earned 150 reward points from your latest activity.",
      time: "10 min ago",
      read: false,
    },
    {
      id: 2,
      icon: Calendar,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Event Reminder",
      body: "Nepal Talent of the Year 2026 starts in 7 days.",
      time: "1 hr ago",
      read: false,
    },
    {
      id: 3,
      icon: Handshake,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      title: "Membership Offer",
      body: "Upgrade to Gold tier and get 20% off this month.",
      time: "4 hr ago",
      read: true,
    },
  ],
  Partner: [
    {
      id: 1,
      icon: MessageSquare,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "New Client Inquiry",
      body: "A member inquired about your Business Consulting service.",
      time: "8 min ago",
      read: false,
    },
    {
      id: 2,
      icon: Handshake,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      title: "Partnership Proposal",
      body: "E-Spot Club sent you a co-marketing proposal.",
      time: "45 min ago",
      read: false,
    },
    {
      id: 3,
      icon: Calendar,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      title: "Event Collaboration",
      body: "You're invited to co-host Entrepreneurs Arena 2026.",
      time: "2 hr ago",
      read: false,
    },
    {
      id: 4,
      icon: Star,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50",
      title: "Profile Featured",
      body: "Your company was featured in the Partner Spotlight.",
      time: "1 day ago",
      read: true,
    },
  ],
  Franchisee: [
    {
      id: 1,
      icon: Mail,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Customer Inquiry",
      body: "A user inquired about services at your Kathmandu hub.",
      time: "15 min ago",
      read: false,
    },
    {
      id: 2,
      icon: UserPlus,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      title: "New Local Member",
      body: "3 new members signed up through your franchise link.",
      time: "2 hr ago",
      read: false,
    },
    {
      id: 3,
      icon: Briefcase,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      title: "HQ Update",
      body: "New brand guidelines have been published — review now.",
      time: "1 day ago",
      read: true,
    },
  ],
  Entrepreneur: [
    {
      id: 1,
      icon: MessageSquare,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Investor Message",
      body: "An investor responded to your startup pitch on the platform.",
      time: "20 min ago",
      read: false,
    },
    {
      id: 2,
      icon: GraduationCap,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      title: "Mentorship Match",
      body: "You've been matched with a mentor in FinTech.",
      time: "3 hr ago",
      read: false,
    },
    {
      id: 3,
      icon: Calendar,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      title: "Kidspreneur Camp Invite",
      body: "You're invited to mentor at Kidspreneur Camp 2026.",
      time: "1 day ago",
      read: true,
    },
  ],
  Leader: [
    {
      id: 1,
      icon: MessageSquare,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Speaking Inquiry",
      body: "College Trailblazer team invited you as a keynote speaker.",
      time: "30 min ago",
      read: false,
    },
    {
      id: 2,
      icon: UserPlus,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      title: "Mentee Request",
      body: "Suman Adhikari requested mentorship in leadership.",
      time: "2 hr ago",
      read: false,
    },
    {
      id: 3,
      icon: Star,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50",
      title: "Profile Endorsed",
      body: "Your leadership profile received 5 new endorsements.",
      time: "6 hr ago",
      read: true,
    },
  ],
  Scholar: [
    {
      id: 1,
      icon: GraduationCap,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Scholarship Update",
      body: "Your STEM scholarship application status has been updated.",
      time: "1 hr ago",
      read: false,
    },
    {
      id: 2,
      icon: Mail,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      title: "Academic Advisor",
      body: "Dr. Patel responded to your study pathway inquiry.",
      time: "4 hr ago",
      read: false,
    },
    {
      id: 3,
      icon: Calendar,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      title: "Workshop Available",
      body: "Research Methodology workshop registrations are open.",
      time: "1 day ago",
      read: true,
    },
  ],
  Jobseeker: [
    {
      id: 1,
      icon: Briefcase,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Job Match Found",
      body: "A new Frontend Developer role matches your profile.",
      time: "25 min ago",
      read: false,
    },
    {
      id: 2,
      icon: MessageSquare,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      title: "Recruiter Message",
      body: "TechCorp Innovations wants to connect about an opening.",
      time: "3 hr ago",
      read: false,
    },
    {
      id: 3,
      icon: Star,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50",
      title: "Profile Viewed",
      body: "Your profile was viewed by 4 employers this week.",
      time: "1 day ago",
      read: true,
    },
  ],
  Trainer: [
    {
      id: 1,
      icon: MessageSquare,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Training Inquiry",
      body: "A member inquired about your Agile Workshop course.",
      time: "12 min ago",
      read: false,
    },
    {
      id: 2,
      icon: UserPlus,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      title: "New Enrollment",
      body: "6 new students enrolled in Advanced Scrum Mastery.",
      time: "2 hr ago",
      read: false,
    },
    {
      id: 3,
      icon: Calendar,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      title: "Session Reminder",
      body: "Your live training session starts tomorrow at 10 AM.",
      time: "5 hr ago",
      read: true,
    },
  ],
};

export default function DashboardLayout() {
  const location = useLocation();
  const role = getAuthRole();
  const roleLabel = role ?? "Guest";
  const config = (role && DASHBOARD_CONFIG[role]) || DEFAULT_CONFIG;
  const currentPageName =
    config.nav.find((n) => n.path === location.pathname)?.name || config.title;
  const initials = roleLabel.slice(0, 2).toUpperCase();

  const [notifications, setNotifications] = useState<Notification[]>(
    () => ROLE_NOTIFICATIONS[role ?? "Member"] ?? ROLE_NOTIFICATIONS.Member,
  );
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const markRead = (id: number) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

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

            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setNotifOpen((o) => !o)}
                className="relative p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full border-2 border-white px-1">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notifOpen && (
                <div className="absolute right-0 top-full mt-2 w-[22rem] bg-white rounded-xl border border-slate-200 shadow-xl z-50 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900">
                      Notifications
                    </h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllRead}
                        className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700"
                      >
                        <CheckCheck className="w-3.5 h-3.5" /> Mark all read
                      </button>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                    {notifications.map((n) => {
                      const Icon = n.icon;
                      return (
                        <button
                          key={n.id}
                          onClick={() => markRead(n.id)}
                          className={cn(
                            "w-full flex items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-50",
                            !n.read && "bg-blue-50/40",
                          )}
                        >
                          <div
                            className={cn(
                              "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5",
                              n.iconBg,
                            )}
                          >
                            <Icon className={cn("w-4 h-4", n.iconColor)} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={cn(
                                "text-sm leading-snug",
                                n.read
                                  ? "text-slate-700"
                                  : "font-semibold text-slate-900",
                              )}
                            >
                              {n.title}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                              {n.body}
                            </p>
                            <p className="text-[11px] text-slate-400 mt-1">
                              {n.time}
                            </p>
                          </div>
                          {!n.read && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full shrink-0 mt-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {notifications.length === 0 && (
                    <div className="px-4 py-8 text-center text-sm text-slate-400">
                      No notifications
                    </div>
                  )}
                </div>
              )}
            </div>
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
