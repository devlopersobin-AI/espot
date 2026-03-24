import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Users,
  Calendar,
  DollarSign,
  Activity,
  MoreHorizontal,
  Star,
  Gem,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Trophy,
  Medal
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAuthRole, getDashboardPathForRole } from "../../auth/permissions";
import type { AuthRole } from "../../auth/permissions";
import { cn } from "../../lib/utils";

type ProfileData = {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  points: number;
  joinDate: string;
  achievements: string[];
  awards: string[];
  education: string;
  interests: string[];
};

export default function Home() {
  const navigate = useNavigate();
  const role = getAuthRole() ?? "Member";

  const dashboardBase = getDashboardPathForRole(role);

  const roleHomeConfig: Record<
    AuthRole,
    {
      title: string;
      subtitle: string;
      primaryAction: string;
      secondaryAction: string;
      metrics: Array<{
        title: string;
        value: string;
        change: string;
        trend: "up" | "down";
        icon: typeof Users;
      }>;
    }
  > = {
    Member: {
      title: "Member Overview",
      subtitle: "Track your activity, events, and membership benefits.",
      primaryAction: "Book Event Seat",
      secondaryAction: "Download Statement",
      metrics: [
        {
          title: "Points Balance",
          value: "1,240",
          change: "+8.5%",
          trend: "up",
          icon: Users,
        },
        {
          title: "Upcoming Events",
          value: "5",
          change: "+2",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Rewards Value",
          value: "$320",
          change: "+12.0%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Profile Strength",
          value: "78%",
          change: "+5.0%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Partner: {
      title: "Partner Overview",
      subtitle: "Monitor partner offers, campaigns, and lead performance.",
      primaryAction: "Launch Offer",
      secondaryAction: "Export Leads",
      metrics: [
        {
          title: "Active Offers",
          value: "18",
          change: "+3",
          trend: "up",
          icon: Users,
        },
        {
          title: "Partner Events",
          value: "9",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Offer Revenue",
          value: "$42.8k",
          change: "+14.2%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Lead Conversion",
          value: "31%",
          change: "+1.8%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Franchisee: {
      title: "Franchise Overview",
      subtitle: "Track territory operations, revenue, and launch tasks.",
      primaryAction: "Add Outlet Update",
      secondaryAction: "Download Ops Report",
      metrics: [
        {
          title: "Open Tasks",
          value: "14",
          change: "-2",
          trend: "down",
          icon: Users,
        },
        {
          title: "Local Events",
          value: "4",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Monthly Sales",
          value: "$86.2k",
          change: "+9.1%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Service Uptime",
          value: "97.4%",
          change: "+0.4%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Entrepreneur: {
      title: "Startup Overview",
      subtitle: "Follow venture milestones, investor interest, and traction.",
      primaryAction: "Update Pitch",
      secondaryAction: "Export Pipeline",
      metrics: [
        {
          title: "Investor Leads",
          value: "11",
          change: "+2",
          trend: "up",
          icon: Users,
        },
        {
          title: "Pitch Events",
          value: "3",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Committed Funds",
          value: "$120k",
          change: "+22%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Product Traction",
          value: "64%",
          change: "+6.1%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Leader: {
      title: "Leadership Overview",
      subtitle: "Review team impact, speaking events, and strategic goals.",
      primaryAction: "Create Initiative",
      secondaryAction: "Export Impact Report",
      metrics: [
        {
          title: "Mentorship Sessions",
          value: "22",
          change: "+5",
          trend: "up",
          icon: Users,
        },
        {
          title: "Leadership Events",
          value: "7",
          change: "+2",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Funding Influence",
          value: "$310k",
          change: "+11%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Global Ranking",
          value: "#42",
          change: "+3",
          trend: "up",
          icon: Trophy,
        },
      ],
    },
    Scholar: {
      title: "Scholar Overview",
      subtitle:
        "Track learning milestones, scholarships, and event participation.",
      primaryAction: "Apply Scholarship",
      secondaryAction: "Download Transcript",
      metrics: [
        {
          title: "Learning Goals",
          value: "12",
          change: "+3",
          trend: "up",
          icon: Users,
        },
        {
          title: "Academic Events",
          value: "6",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Scholarship Value",
          value: "$7.5k",
          change: "+18%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Course Progress",
          value: "82%",
          change: "+4.2%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Jobseeker: {
      title: "Career Overview",
      subtitle: "Manage applications, interviews, and profile readiness.",
      primaryAction: "Apply to Jobs",
      secondaryAction: "Export CV",
      metrics: [
        {
          title: "Active Applications",
          value: "16",
          change: "+4",
          trend: "up",
          icon: Users,
        },
        {
          title: "Interview Slots",
          value: "3",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Offer Range",
          value: "$2.8k",
          change: "+9.4%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Profile Match",
          value: "74%",
          change: "+2.7%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Trainer: {
      title: "Trainer Overview",
      subtitle: "Track sessions, attendees, and training outcomes.",
      primaryAction: "Create Session",
      secondaryAction: "Export Attendance",
      metrics: [
        {
          title: "Active Batches",
          value: "8",
          change: "+2",
          trend: "up",
          icon: Users,
        },
        {
          title: "Scheduled Classes",
          value: "12",
          change: "+3",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Training Revenue",
          value: "$9.2k",
          change: "+13%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Completion Rate",
          value: "91%",
          change: "+1.9%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Admin: {
      title: "Command Center",
      subtitle:
        "Global platform intelligence and real-time ecosystem oversight.",
      primaryAction: "Global Analytics",
      secondaryAction: "Platform Settings",
      metrics: [
        {
          title: "Network Growth",
          value: "24.5k",
          change: "+12.5%",
          trend: "up",
          icon: Users,
        },
        {
          title: "Active Gatherings",
          value: "143",
          change: "+4.2%",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Ecosystem Yield",
          value: "$842k",
          change: "+18.1%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "User Engagement",
          value: "84.2%",
          change: "-2.4%",
          trend: "down",
          icon: Activity,
        },
      ],
    },
    Trainee: {
      title: "Trainee Overview",
      subtitle: "Track your onboarding, training sessions, and progress.",
      primaryAction: "Register for Training",
      secondaryAction: "View My Profile",
      metrics: [
        {
          title: "Completed Modules",
          value: "4",
          change: "+1",
          trend: "up",
          icon: Users,
        },
        {
          title: "Upcoming Sessions",
          value: "2",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Progress",
          value: "45%",
          change: "+10%",
          trend: "up",
          icon: Activity,
        },
        {
          title: "Certification Status",
          value: "Pending",
          change: "—",
          trend: "up",
          icon: DollarSign,
        },
      ],
    },
  };


  const handlePrimaryAction = () => {
    if (role === "Admin") {
      navigate("/dashboard/events");
      return;
    }
    navigate(`${dashboardBase}/events`);
  };

  const handleSecondaryAction = () => {
    if (role === "Admin") {
      navigate("/dashboard/membership");
      return;
    }
    navigate(`${dashboardBase}/profile`);
  };

  const recentActivity = [
    {
      id: "ACT-1042",
      user: "Sarah Jenkins",
      action: "Registered for Global Tech Summit",
      time: "2 mins ago",
      status: "Completed",
    },
    {
      id: "ACT-1041",
      user: "TechCorp Global",
      action: "Posted new job: Senior Dev",
      time: "15 mins ago",
      status: "Pending Review",
    },
    {
      id: "ACT-1040",
      user: "Marcus Chen",
      action: "Upgraded to Diamond Tier",
      time: "1 hour ago",
      status: "Completed",
    },
    {
      id: "ACT-1039",
      user: "Elena Rodriguez",
      action: "Submitted Franchise Application",
      time: "3 hours ago",
      status: "In Progress",
    },
    {
      id: "ACT-1038",
      user: "Growth Agency",
      action: "Published new Partner Offer",
      time: "5 hours ago",
      status: "Completed",
    },
  ];

  const [user] = useState<ProfileData>(() => {
    const stored = localStorage.getItem(`profile-data-${role}`);
    if (stored) {
      try {
        return JSON.parse(stored) as ProfileData;
      } catch {
        return null;
      }
    }
    return null;
  });

  const initials = user?.name 
    ? user.name.split(" ").map(n => n[0]).join("").toUpperCase() 
    : "??";

  const [activeTier] = useState(() => {
    const stored = localStorage.getItem(`active-membership-tier-${role}`);
    return stored || "Bronze";
  });

  const [selectedPlans] = useState(() => {
    const stored = localStorage.getItem(`selected-membership-plan-${role}`);
    try {
      const parsed = JSON.parse(stored || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const config = roleHomeConfig[role];
  const metrics = [...config.metrics];
  
  // Dynamic Overrides
  if (user) {
    if (role === "Member") {
      metrics[0].value = user.points.toLocaleString();
    }
  }
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">{config.title}</h2>
          <p className="text-slate-500 mt-1 font-medium">{config.subtitle}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSecondaryAction}
            className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
          >
            {config.secondaryAction}
          </button>
          <button
            onClick={handlePrimaryAction}
            className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            {config.primaryAction}
          </button>
        </div>
      </div>

      {/* Role-Specific Hero Section */}
      {role === "Admin" ? (
        <div className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl border border-slate-800 group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-64 -mt-64 group-hover:bg-blue-600/30 transition-all duration-1000" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
             <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                   <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">System Intelligence Live</span>
                </div>
                <div className="space-y-4">
                   <h3 className="text-5xl font-black tracking-tight leading-tight">Platform Command</h3>
                   <p className="text-slate-400 text-lg font-medium max-w-xl">Real-time oversight of the global E-SPOT network. All systems operational across 12 infrastructure nodes.</p>
                </div>
                <div className="flex flex-wrap gap-6">
                   {[
                     { label: "Identity Load", value: "Normal", color: "text-emerald-400" },
                     { label: "Ecosystem API", value: "99.99%", color: "text-emerald-400" },
                     { label: "Security Layer", value: "AES-256 Active", color: "text-blue-400" },
                   ].map((node, i) => (
                     <div key={i} className="space-y-1">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{node.label}</p>
                        <p className={`text-sm font-black ${node.color}`}>{node.value}</p>
                     </div>
                   ))}
                </div>
             </div>
             <div className="shrink-0 w-full lg:w-80 space-y-4">
                <div className="p-8 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-2xl">
                   <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pending CMS Tasks</span>
                      <ShieldCheck className="w-5 h-5 text-amber-400" />
                   </div>
                   <div className="text-4xl font-black text-white mb-2">24</div>
                   <p className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-tighter leading-relaxed">Identity verifications and content reviews requiring your attention.</p>
                   <button 
                     onClick={() => navigate("/dashboard/members")}
                     className="w-full py-4 bg-white text-slate-900 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-all"
                   >
                     Process Queue
                   </button>
                </div>
             </div>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl border border-white/5 group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-blue-600/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -ml-48 -mb-48 group-hover:bg-indigo-600/20 transition-colors duration-700" />
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/20 rounded-xl border border-blue-400/20">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  {role === "Partner" || role === "Franchisee" || role === "Entrepreneur" ? "Business Standing" : 
                   role === "Leader" ? "Leadership Impact" : "Account Standing"}
                </span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-5xl font-black tracking-tight flex items-center gap-4">
                  {activeTier} Tier 
                  <span className="text-2xl font-medium text-slate-500">
                    {role === "Partner" ? "Partner" : role === "Franchisee" ? "Franchisee" : "Member"}
                  </span>
                </h3>
                <p className="text-slate-400 text-lg font-medium max-w-xl leading-relaxed">
                  {role === "Partner" ? "Your partner account is optimized for high-visibility offers and strategic B2B networking." :
                   role === "Franchisee" ? "Your territory operations are integrated with global brand standards and performance tracking." :
                   `Your account is in excellent standing. You have access to all ${activeTier} benefits and exclusive network opportunities.`}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedPlans.length > 0 ? (
                  selectedPlans.map((plan) => (
                    <div key={plan} className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-xs font-black tracking-tight transition-all hover:bg-white/10 shadow-lg">
                      <Gem className="w-4 h-4 text-cyan-400" />
                      {plan}
                    </div>
                  ))
                ) : (
                  <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-xs font-black text-slate-500 uppercase tracking-widest">
                    <Star className="w-4 h-4" />
                    No Active Assets
                  </div>
                )}
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-80 space-y-4">
              <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{role === "Partner" || role === "Franchisee" ? "Projected Yield" : "Portfolio Return"}</span>
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-5xl font-black text-white mb-2">
                  {selectedPlans.length > 0 ? "+14.2%" : "0.0%"}
                </div>
                <div className="text-[11px] text-slate-500 font-black uppercase tracking-[0.2em]">Est. Annual Growth</div>
              </div>
              <button 
                onClick={() => navigate(role === "Partner" || role === "Franchisee" ? "/dashboard/member/membership" : "/dashboard/membership")}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-[1.5rem] text-sm font-black transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3 group/btn"
              >
                {role === "Partner" || role === "Franchisee" || role === "Entrepreneur" ? "Boost Standing" : "Manage Portfolio"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                <metric.icon className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <span
                className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                  metric.trend === "up"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-rose-50 text-rose-600"
                }`}
              >
                {metric.change}
              </span>
            </div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
              {metric.title}
            </h3>
            <div className="text-3xl font-black text-slate-900 mt-2">
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      {/* Role-Specific Insights */}
      {(role === "Partner" || role === "Franchisee") && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="md:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase">Business Velocity</h3>
                 <span className="text-[10px] font-black p-2 bg-emerald-50 text-emerald-600 rounded-lg uppercase">Live Tracking</span>
              </div>
              <div className="space-y-6">
                 {[
                   { label: "Lead Conversion Rate", value: "31%", target: "40%", width: "77%", color: "bg-blue-600" },
                   { label: "Customer Satisfaction", value: "4.8/5", target: "5/5", width: "96%", color: "bg-emerald-500" },
                   { label: "Operational Uptime", value: "97.4%", target: "99.9%", width: "97%", color: "bg-indigo-600" },
                 ].map((stat, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                         <span className="text-slate-400 uppercase tracking-widest">{stat.label}</span>
                         <span className="text-slate-900">{stat.value}</span>
                      </div>
                      <div className="h-2.5 bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
                         <div className={`h-full ${stat.color} transition-all duration-1000 shadow-lg shadow-blue-200/50`} style={{ width: stat.width }} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="bg-slate-900 rounded-[2rem] p-8 text-white flex flex-col justify-between group shadow-2xl">
              <div>
                 <Activity className="w-8 h-8 text-blue-400 mb-6" />
                 <h4 className="text-xl font-black mb-2">Network Reach</h4>
                 <p className="text-slate-400 text-xs font-medium leading-relaxed">Your business is currently visible to 14,000+ active platform members.</p>
              </div>
              <button className="mt-8 w-full py-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/10">
                 View Heatmap
              </button>
           </div>
        </div>
      )}

      {/* Leadership Ranking & KPIs */}
      {role === "Leader" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-2xl shadow-slate-200/30">
              <div className="flex items-center justify-between mb-10">
                 <div className="space-y-1">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">Global Leadership Ranking</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Based on Skills, Achievements & Ecosystem Impact</p>
                 </div>
                 <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 shadow-inner">
                    <Trophy className="w-5 h-5 text-amber-500" />
                 </div>
              </div>
              <div className="space-y-4">
                 {[
                   { name: "Julian Alcaraz", role: "Diamond Ambassador", points: "2,490 pts", rank: 1, img: "JA", color: "text-amber-500 bg-amber-50" },
                   { name: "Sofia Zhang", role: "Platinum Catalyst", points: "2,150 pts", rank: 2, img: "SZ", color: "text-slate-400 bg-slate-50" },
                   { name: "Alexander Thorne", role: "Gold Strategist", points: "1,980 pts", rank: 3, img: "AT", color: "text-orange-400 bg-orange-50" },
                   { name: user?.name || "You", role: "Evolving Leader", points: "1,420 pts", rank: 42, img: initials, color: "text-blue-500 bg-blue-50", highlight: true },
                 ].map((leader, i) => (
                   <div key={i} className={cn(
                     "flex items-center justify-between p-5 rounded-3xl transition-all border",
                     leader.highlight ? "bg-slate-900 border-slate-800 shadow-2xl shadow-slate-200 scale-[1.02]" : "bg-white border-slate-50 hover:border-slate-100 hover:bg-slate-50/50"
                   )}>
                      <div className="flex items-center gap-5">
                         <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs shadow-sm", leader.color)}>
                            {leader.img}
                         </div>
                         <div>
                            <p className={cn("text-sm font-black tracking-tight", leader.highlight ? "text-white" : "text-slate-900")}>{leader.name}</p>
                            <p className={cn("text-[10px] font-bold uppercase tracking-widest mt-0.5", leader.highlight ? "text-slate-400" : "text-slate-400")}>{leader.role}</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <p className={cn("text-xs font-black", leader.highlight ? "text-blue-400" : "text-slate-900")}>{leader.points}</p>
                         <p className={cn("text-[9px] font-black uppercase tracking-widest mt-1 px-2 py-0.5 rounded-lg border", 
                            leader.rank === 1 ? "bg-amber-50 text-amber-600 border-amber-100" : 
                            leader.highlight ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : 
                            "bg-slate-50 text-slate-400 border-slate-100"
                         )}>
                            Rank #{leader.rank}
                         </p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-2xl shadow-slate-200/30">
              <div className="flex items-center gap-3 mb-10">
                 <div className="p-2.5 bg-blue-50 rounded-xl">
                    <Medal className="w-5 h-5 text-blue-600" />
                 </div>
                 <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] leading-none">Leadership KPI Mastery</h3>
              </div>
              <div className="space-y-10">
                 {[
                   { label: "Mentorship Yield", val: "84%", icon: Users, color: "text-blue-500", bar: "bg-blue-500" },
                   { label: "Funding Influence", val: "62%", icon: DollarSign, color: "text-amber-500", bar: "bg-amber-500" },
                   { label: "Initiative Impact", val: "91%", icon: Activity, color: "text-emerald-500", bar: "bg-emerald-500" },
                   { label: "Ecosystem Karma", val: "48%", icon: Star, color: "text-indigo-500", bar: "bg-indigo-500" },
                 ].map((kpi, i) => (
                   <div key={i} className="space-y-4">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <kpi.icon className={cn("w-4 h-4", kpi.color)} />
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{kpi.label}</span>
                         </div>
                         <span className="text-xs font-black text-slate-900">{kpi.val}</span>
                      </div>
                      <div className="h-1.5 bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
                         <div className={cn("h-full transition-all duration-1000", kpi.bar)} style={{ width: kpi.val }} />
                      </div>
                   </div>
                 ))}
              </div>
              <div className="mt-12 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                 <p className="text-[10px] font-black text-slate-400 text-center uppercase tracking-[0.2em] leading-relaxed">
                    Elevate <span className="text-blue-600">Karma</span> by 12% to reach <br /> Rank #38
                 </p>
              </div>
           </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">
              Recent Activity
            </h3>
            <button
              onClick={handlePrimaryAction}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              View all <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="data-grid">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User / Entity</th>
                  <th>Action</th>
                  <th>Status</th>
                  <th>Time</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((activity) => (
                  <tr key={activity.id}>
                    <td className="font-mono text-xs text-gray-500">
                      {activity.id}
                    </td>
                    <td className="font-medium text-gray-900">
                      {activity.user}
                    </td>
                    <td className="text-gray-600">{activity.action}</td>
                    <td>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                          activity.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20"
                            : activity.status === "Pending Review"
                              ? "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20"
                              : "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                    <td className="text-gray-500">{activity.time}</td>
                    <td>
                      <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>        {/* Quick Actions / System Status */}
        <div className="space-y-6">
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-8">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-8">
              Intelligence Actions
            </h3>
            <div className="space-y-4">
              <button
                onClick={() =>
                  navigate(
                    role === "Admin"
                      ? "/dashboard/members"
                      : `${dashboardBase}/profile`,
                  )
                }
                className="w-full flex items-center justify-between p-5 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-200/20 transition-all text-left group"
              >
                <div>
                  <div className="text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                    {role === "Admin" ? "Manage Member Access" : "Complete Profile Identity"}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 mt-1">
                    {role === "Admin" ? "12 pending identity verifications" : "Enhance your visibility by 24%"}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </button>
              
              <button
                onClick={() =>
                  navigate(
                    role === "Admin"
                      ? "/dashboard/settings"
                      : `${dashboardBase}/events`,
                  )
                }
                className="w-full flex items-center justify-between p-5 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-200/20 transition-all text-left group"
              >
                <div>
                  <div className="text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-indigo-600 transition-colors">
                    {role === "Admin" ? "Platform Overrides" : "Browse Global Events"}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 mt-1">
                    {role === "Admin" ? "Configure ecosystem global settings" : "5 new gatherings this week"}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm p-6 text-white">
            <h3 className="text-base font-semibold mb-2">System Status</h3>
            <div className="flex items-center gap-2 text-sm text-emerald-400 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              All systems operational
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">API Latency</span>
                <span className="font-mono">42ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Database Load</span>
                <span className="font-mono">12%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Active Connections</span>
                <span className="font-mono">1,204</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
