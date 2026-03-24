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
  Settings,
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
      { name: "Members CMS", path: "/dashboard/members", icon: Users },
      { name: "Platform CMS", path: "/dashboard/settings", icon: Settings },
    ],
  },
  Member: {
    title: "Member",
    nav: [
      ...buildNav("/dashboard/member"),
      { name: "Membership", path: "/dashboard/member/membership", icon: Users },
      { name: "My Rewards", path: "/dashboard/member/rewards", icon: Star },
    ],
  },
  Partner: {
    title: "Partner",
    nav: [
      ...buildNav("/dashboard/partner", "Company Profile"),
      { name: "Campaign Manager", path: "/dashboard/partner/campaigns", icon: LayoutDashboard },
      { name: "Global Leads", path: "/dashboard/partner/leads", icon: UserPlus },
      { name: "Brand Resources", path: "/dashboard/partner/assets", icon: Building2 },
    ],
  },
  Franchisee: {
    title: "Franchise",
    nav: [
      ...buildNav("/dashboard/franchise", "Franchise Profile"),
      { name: "Regional Ops", path: "/dashboard/franchise/ops", icon: Settings },
      { name: "Audits & Tasks", path: "/dashboard/franchise/audits", icon: CheckCheck },
      { name: "Staff Management", path: "/dashboard/franchise/staff", icon: Users },
    ],
  },
  Entrepreneur: {
    title: "Entrepreneur",
    nav: [
      ...buildNav("/dashboard/member"),
      { name: "Venture Portfolio", path: "/dashboard/member/venture", icon: Briefcase },
      { name: "Investor Matches", path: "/dashboard/member/investors", icon: Handshake },
      { name: "Pitch Library", path: "/dashboard/member/pitch", icon: LayoutDashboard },
    ],
  },
  Leader: {
    title: "Leader",
    nav: [
      ...buildNav("/dashboard/leader"),
      { name: "Board Insights", path: "/dashboard/leader/insights", icon: Briefcase },
      { name: "Strategic Goals", path: "/dashboard/leader/goals", icon: Star },
      { name: "Influence Graph", path: "/dashboard/leader/impact", icon: Users },
    ],
  },
  Scholar: {
    title: "Scholar",
    nav: [
      ...buildNav("/dashboard/scholar"),
      { name: "Scholarships", path: "/dashboard/scholar/funding", icon: GraduationCap },
      { name: "Research Nodes", path: "/dashboard/scholar/research", icon: LayoutDashboard },
      { name: "Academic Mentors", path: "/dashboard/scholar/mentors", icon: Users },
    ],
  },
  Jobseeker: {
    title: "Jobseeker",
    nav: [
      ...buildNav("/dashboard/member"),
      { name: "Career Path", path: "/dashboard/member/career", icon: Briefcase },
      { name: "Applications", path: "/dashboard/member/apps", icon: Mail },
      { name: "Resume Score", path: "/dashboard/member/resume", icon: CheckCheck },
    ],
  },
  Trainer: {
    title: "Trainer",
    nav: [
      ...buildNav("/dashboard/member"),
      { name: "Curriculum CMS", path: "/dashboard/member/courses", icon: GraduationCap },
      { name: "Batch Schedules", path: "/dashboard/member/batches", icon: Calendar },
      { name: "Student Analytics", path: "/dashboard/member/analytics", icon: Users },
    ],
  },
  Trainee: {
    title: "Trainee",
    nav: [
      ...buildNav("/dashboard/trainee"),
      { name: "Learning Path", path: "/dashboard/trainee/path", icon: GraduationCap },
      { name: "Certificates", path: "/dashboard/trainee/certs", icon: Star },
      { name: "Active Modules", path: "/dashboard/trainee/modules", icon: LayoutDashboard },
    ],
  },
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
const ROLE_NOTIFICATIONS: Record<AuthRole, Notification[]> = {
  Admin: [],
  Member: [],
  Partner: [
    {
      id: 1,
      icon: Mail,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Company Featured",
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
  Trainee: [
    {
      id: 1,
      icon: GraduationCap,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Course Enrollment",
      body: "You have successfully enrolled in Agile Fundamentals.",
      time: "10 min ago",
      read: false,
    },
    {
      id: 2,
      icon: Star,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50",
      title: "Certificate Awarded",
      body: "You earned a certificate for completing Digital Marketing 101.",
      time: "2 hr ago",
      read: false,
    },
    {
      id: 3,
      icon: Calendar,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      title: "Upcoming Session",
      body: "Your next training session is scheduled for tomorrow.",
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
    () => (role && ROLE_NOTIFICATIONS[role]) || [],
  );
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  const [user] = useState(() => {
    const stored = localStorage.getItem(`profile-data-${role}`);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return null;
      }
    }
    return null;
  });

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
    <div className="flex h-screen overflow-hidden bg-[#fafbfc] font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col shrink-0 z-20 transition-all duration-300">
        <div className="h-24 flex items-center px-10">
          <Link to="/" className="flex items-center gap-4 group">
             <div className="w-11 h-11 bg-slate-900 rounded-[1.2rem] flex items-center justify-center text-white text-xl font-black shadow-xl shadow-slate-200 group-hover:scale-105 transition-transform">
                E
             </div>
             <div>
                <h2 className="text-sm font-black text-slate-900 tracking-tight leading-none uppercase">E-Spot Club</h2>
                <span className="text-[9px] font-black text-blue-500 tracking-[0.2em] uppercase mt-1 block">
                   {role === "Admin" ? "Command Center" : 
                    role === "Partner" ? "Partner Portal" : 
                    role === "Franchisee" ? "Franchise Hub" : 
                    "Global Network"}
                </span>
             </div>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto pt-4 pb-8 px-6 space-y-8 hide-scrollbar">
          <div className="space-y-1.5">
            <div className="px-4 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">Platform</div>
            {config.nav.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[13px] font-black transition-all duration-300 border border-transparent",
                    isActive
                      ? "bg-slate-900 text-white shadow-2xl shadow-slate-200 border-slate-800"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900",
                  )}
                >
                  <item.icon className={cn("w-[18px] h-[18px]", isActive ? "text-blue-400" : "text-slate-300 group-hover:text-slate-500")} />
                  <span className="tracking-tight">{item.name}</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 bg-blue-400 rounded-full" />}
                </Link>
              );
            })}
          </div>

          <div className="space-y-1.5">
            <div className="px-4 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">Support</div>
             <Link to="#" className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[13px] font-black text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all border border-transparent">
                <MessageSquare className="w-[18px] h-[18px] text-slate-300" />
                <span className="tracking-tight">Help Center</span>
             </Link>
             <Link to="/dashboard/settings" className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[13px] font-black text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all border border-transparent">
                <Settings className="w-[18px] h-[18px] text-slate-300" />
                <span className="tracking-tight">Personalization</span>
             </Link>
          </div>
        </div>

        {/* User Card in Sidebar */}
        <div className="p-6 border-t border-slate-50">
           <div className="p-5 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-4 group cursor-pointer hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-xs font-black text-slate-300 shadow-sm">
                 {initials}
              </div>
              <div className="flex-1 min-w-0">
                 <p className="text-[11px] font-black text-slate-900 leading-none truncate mb-1">{user?.name || "Member"}</p>
                 <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{roleLabel}</span>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-24 px-10 flex items-center justify-between shrink-0 z-10 border-b border-white">
          <div className="flex items-center gap-8 flex-1">
             <div className="relative w-full max-w-md group">
               <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
               <input
                 type="text"
                 placeholder="Explore global documents & assets..."
                 className="w-full bg-white border border-slate-100 rounded-2xl pl-12 pr-6 py-3.5 text-xs font-bold text-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-50/50 focus:border-blue-200 transition-all shadow-sm placeholder:text-slate-300"
               />
             </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
               <div className="relative">
                  <button className="p-3.5 bg-white border border-slate-100 text-slate-400 hover:text-slate-900 rounded-2xl shadow-sm hover:shadow-md transition-all">
                     <Mail className="w-5 h-5" />
                     <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-slate-900 text-white text-[9px] font-black rounded-lg border-2 border-white">
                       2
                     </span>
                  </button>
               </div>
               
               <div className="relative" ref={notifRef}>
                  <button
                    onClick={() => setNotifOpen((o) => !o)}
                    className="p-3.5 bg-white border border-slate-100 text-slate-400 hover:text-slate-900 rounded-2xl shadow-sm hover:shadow-md transition-all"
                  >
                    <Bell className="w-5 h-5" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-blue-600 text-white text-[9px] font-black rounded-lg border-2 border-white">
                        {unreadCount}
                      </span>
                    )}
                  </button>

                  {notifOpen && (
                    <div className="absolute right-0 top-full mt-4 w-96 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl z-50 overflow-hidden ring-8 ring-slate-900/5">
                      <div className="flex items-center justify-between px-8 py-6 border-b border-slate-50 bg-slate-50/50">
                        <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">
                          Intelligence Feed
                        </h3>
                        {unreadCount > 0 && (
                          <button
                            onClick={markAllRead}
                            className="text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase"
                          >
                            Dismiss All
                          </button>
                        )}
                      </div>
                      <div className="max-h-[30rem] overflow-y-auto divide-y divide-slate-50">
                        {notifications.length > 0 ? notifications.map((n) => {
                          const Icon = n.icon;
                          return (
                            <button
                              key={n.id}
                              onClick={() => markRead(n.id)}
                              className={cn(
                                "w-full flex items-start gap-4 px-8 py-6 text-left transition-all hover:bg-slate-50",
                                !n.read && "bg-blue-50/30",
                              )}
                            >
                              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border", n.iconBg, "border-white shadow-sm")}>
                                <Icon className={cn("w-4 h-4", n.iconColor)} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={cn("text-xs leading-none mb-1.5 truncate", n.read ? "text-slate-500" : "font-black text-slate-900")}>
                                  {n.title}
                                </p>
                                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{n.body}</p>
                                <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mt-3">{n.time}</p>
                              </div>
                            </button>
                          );
                        }) : (
                          <div className="p-12 text-center">
                             <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Bell className="w-5 h-5 text-slate-200" />
                             </div>
                             <p className="text-xs font-black text-slate-300 uppercase tracking-widest">No Alerts Found</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
               </div>
            </div>

            <div className="h-12 w-px bg-slate-100 mx-2" />

            <div className="flex items-center gap-4">
               <div className="hidden lg:block text-right">
                  <p className="text-[13px] font-black text-slate-900 leading-none mb-1.5">{user?.name || "Elite Member"}</p>
                  <span className="px-2.5 py-1 bg-slate-50 text-slate-400 border border-slate-100 rounded-lg text-[9px] font-black uppercase tracking-widest">
                    ID: 29384-LX
                  </span>
               </div>
               <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-[13px] font-black text-white shadow-xl shadow-slate-200">
                  {initials}
               </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-10 hide-scrollbar">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
