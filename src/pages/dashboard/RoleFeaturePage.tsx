import { useLocation, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, LayoutDashboard, ShieldCheck, 
  MoreHorizontal, Plus, Download, Mail, 
  CheckCircle2, Clock, Zap, TrendingUp,
  Gem, Globe, Briefcase, GraduationCap,
  Layout, BarChart3, Search
} from "lucide-react";
import { getAuthRole } from "../../auth/permissions";
import { cn } from "../../lib/utils";

type FeatureData = {
  title: string;
  description: string;
  stats: { label: string; value: string; trend: string }[];
  items: { id: string; label: string; sub: string; status: string; date: string }[];
};

const FEATURE_INTEL: Record<string, FeatureData> = {
  campaigns: {
    title: "Campaign Manager",
    description: "Orchestrate and track high-impact marketing initiatives across the global network.",
    stats: [
      { label: "Active Spend", value: "$4.2k", trend: "+12%" },
      { label: "Reach", value: "85k", trend: "+24%" },
      { label: "ROAS", value: "3.4x", trend: "+0.5x" },
    ],
    items: [
      { id: "CMP-01", label: "Spring Luxury Showcase", sub: "Global Reach • Multi-Channel", status: "Active", date: "Mar 2026" },
      { id: "CMP-02", label: "Wealth Point Blitz", sub: "Member Exclusive • Incentivized", status: "Planning", date: "Apr 2026" },
      { id: "CMP-03", label: "Elite Summit Promo", sub: "B2B Outreach • High Priority", status: "Active", date: "Feb 2026" },
    ]
  },
  leads: {
    title: "Global Lead Intelligence",
    description: "AI-curated high-net-worth lead generation and relationship tracking.",
    stats: [
      { label: "New Leads", value: "142", trend: "+18%" },
      { label: "Qualified", value: "34", trend: "+5%" },
      { label: "Conversion", value: "12%", trend: "+1.2%" },
    ],
    items: [
      { id: "LD-902", label: "Marcus Chen", sub: "VC Founder • Singapore", status: "High Priority", date: "2 hr ago" },
      { id: "LD-903", label: "Sarah Jenkins", sub: "CTO • London Hub", status: "Nurturing", date: "5 hr ago" },
      { id: "LD-904", label: "Elena Rodriguez", sub: "Real Estate Mogul • Madrid", status: "Contacted", date: "1 day ago" },
    ]
  },
  funding: {
    title: "Scholarship & Research Funding",
    description: "Manage academic grants, endowment applications, and research milestones.",
    stats: [
      { label: "Available Grants", value: "18", trend: "+4" },
      { label: "Applied", value: "$120k", trend: "+$25k" },
      { label: "Awarded", value: "$45k", trend: "+$10k" },
    ],
    items: [
      { id: "SCH-01", label: "Global Innovation Grant", sub: "STEM • Fully Funded", status: "Open", date: "Deadline Apr 15" },
      { id: "SCH-02", label: "Leadership Fellowship", sub: "MBA • Partial Scholarship", status: "Awarded", date: "Applied Mar 02" },
      { id: "SCH-03", label: "Network Research Fund", sub: "AI/Web3 • Milestone Based", status: "Review", date: "In Progress" },
    ]
  },
  career: {
    title: "Career Pathway & Opportunities",
    description: "Strategize your professional trajectory with premium placements and recruitment insights.",
    stats: [
      { label: "Open Roles", value: "482", trend: "+54" },
      { label: "Matches", value: "12", trend: "High Fit" },
      { label: "Interviews", value: "3", trend: "Next Week" },
    ],
    items: [
      { id: "JOB-42", label: "Senior Growth Lead", sub: "FinTech Hub • Remote/Singapore", status: "Matching", date: "Posted Today" },
      { id: "JOB-43", label: "Operations Director", sub: "Global Network • London", status: "Applied", date: "3 days ago" },
      { id: "JOB-44", label: "Strategy Consultant", sub: "Elite Partners • New York", status: "Interviewing", date: "Apr 04, 2026" },
    ]
  },
  path: {
    title: "Learning Intelligence Path",
    description: "Personalized certification journey and skill acquisition roadmap.",
    stats: [
      { label: "Completed", value: "4", trend: "75%" },
      { label: "In Progress", value: "2", trend: "High Velocity" },
      { label: "Certification", value: "Gold", trend: "Verified" },
    ],
    items: [
      { id: "MOD-01", label: "Global Markets 101", sub: "Core Module • Essential", status: "Completed", date: "Feb 20, 2026" },
      { id: "MOD-02", label: "Strategic Asset Mgmt", sub: "Advanced • High Yield", status: "Active", date: "Due Apr 10" },
      { id: "MOD-03", label: "Ecosystem Leadership", sub: "Elite Tier • Capstone", status: "Locked", date: "Requires Silver+" },
    ]
  },
  venture: {
    title: "Entrepreneurial Venture Hub",
    description: "Launch, scale, and manage your startup ecosystem integrations.",
    stats: [
      { label: "Venture Score", value: "84/100", trend: "+5" },
      { label: "Active Tractions", value: "11", trend: "+2" },
      { label: "Funding Goal", value: "65%", trend: "+12%" },
    ],
    items: [
      { id: "VNT-01", label: "Project Phoenix", sub: "AI SaaS • Seed Stage", status: "In Hub", date: "Active" },
      { id: "VNT-02", label: "Eco-Connect Hub", sub: "Green Energy • MVP", status: "Scaling", date: "Live" },
      { id: "VNT-03", label: "WealthNode Alpha", sub: "FinTech • Series A", status: "Refining", date: "Internal" },
    ]
  }
};

const DEFAULT_INTEL: FeatureData = {
  title: "Intelligence Workspace",
  description: "Advanced role-specific module for strategic platform operations.",
  stats: [
    { label: "Module Load", value: "Normal", trend: "Syncing" },
    { label: "Access Level", value: "Verified", trend: "Secured" },
    { label: "Latency", value: "2.4ms", trend: "Optimized" },
  ],
  items: [
    { id: "INTEL-01", label: "Global Sync Node", sub: "System Process", status: "Active", date: "Real-time" },
    { id: "INTEL-02", label: "Feature Initialization", sub: "Workspace Update", status: "Processing", date: "In Progress" },
  ]
};

export default function RoleFeaturePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const role = getAuthRole();
  const featurePath = location.pathname.split("/").pop() || "unknown";
  
  const intel = FEATURE_INTEL[featurePath] || DEFAULT_INTEL;

  return (
    <div className="space-y-10 pb-20 fade-in">
       {/* Header */}
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <button 
                  onClick={() => navigate(-1)}
                  className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 shadow-sm transition-all"
                >
                   <ArrowLeft className="w-4 h-4" />
                </button>
                <div className="px-3 py-1 bg-blue-50 border border-blue-100/50 rounded-lg text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">
                   {role} Environment
                </div>
             </div>
             <div className="space-y-1">
                <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none">{intel.title}</h1>
                <p className="text-slate-500 font-medium max-w-2xl text-lg">{intel.description}</p>
             </div>
          </div>
          <div className="flex gap-3">
             <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                <Download className="w-4 h-4" /> Export Intelligence
             </button>
             <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-slate-200 transition-all active:scale-95">
                <Plus className="w-4 h-4" /> Initiate Command
             </button>
          </div>
       </div>

       {/* Metrics Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {intel.stats.map((stat, i) => (
             <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Zap className="w-12 h-12 text-blue-600" />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">{stat.label}</p>
                <div className="flex items-end gap-3">
                   <h3 className="text-4xl font-black text-slate-900 leading-none">{stat.value}</h3>
                   <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded mb-1">{stat.trend}</span>
                </div>
             </div>
          ))}
       </div>

       {/* Content Section */}
       <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Activity Registry</h3>
                <div className="h-4 w-px bg-slate-100" />
                <span className="text-xs font-bold text-slate-400">{intel.items.length} Intelligence Nodes Linked</span>
             </div>
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-300" />
                <input 
                  type="text" 
                  placeholder="Filter data..." 
                  className="bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-2 text-[10px] font-black uppercase text-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-100/30 transition-all"
                />
             </div>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full text-left">
                <tbody>
                   {intel.items.map((item) => (
                      <tr key={item.id} className="group hover:bg-slate-50/50 transition-all border-b border-gray-50 last:border-0 cursor-pointer">
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                               <div className="w-11 h-11 bg-slate-50 border border-slate-100 text-slate-300 rounded-2xl flex items-center justify-center font-black text-[10px] group-hover:bg-white group-hover:text-blue-500 transition-all">
                                  {item.id}
                               </div>
                               <div>
                                  <p className="text-sm font-black text-slate-900 leading-none mb-1.5 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.label}</p>
                                  <p className="text-[11px] font-bold text-slate-400 mt-1">{item.sub}</p>
                               </div>
                            </div>
                         </td>
                         <td className="px-8 py-6">
                            <div className={cn(
                               "px-3 py-1.5 rounded-xl border flex items-center gap-2 w-fit",
                               item.status === "Active" || item.status === "High Priority" || item.status === "Completed" ? "bg-emerald-50 text-emerald-600 border-emerald-100/50" :
                               item.status === "Planning" || item.status === "Review" || item.status === "Matching" ? "bg-blue-50 text-blue-600 border-blue-100/50" :
                               "bg-slate-50 text-slate-400 border-slate-100/50"
                            )}>
                               <div className={cn("w-1.5 h-1.5 rounded-full", 
                                  item.status === "Active" || item.status === "High Priority" || item.status === "Completed" ? "bg-emerald-500" :
                                  item.status === "Planning" || item.status === "Review" || item.status === "Matching" ? "bg-blue-500" :
                                  "bg-slate-400"
                               )} />
                               <span className="text-[10px] font-black uppercase tracking-widest">{item.status}</span>
                            </div>
                         </td>
                         <td className="px-8 py-6 text-right">
                            <div className="flex items-center justify-end gap-8">
                               <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.date}</p>
                               <button className="p-2 hover:bg-white hover:shadow-lg rounded-xl transition-all">
                                  <MoreHorizontal className="w-4 h-4 text-slate-300" />
                                </button>
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>

       {/* Footer / System Status */}
       <div className="flex items-center justify-center gap-12 pt-10 border-t border-slate-50">
          {[
            { label: "Core Sync", icon: BarChart3, status: "Normal" },
            { label: "Role Identity", icon: ShieldCheck, status: "Verified" },
            { label: "Ecosystem Lag", icon: Zap, status: "< 1ms" },
          ].map((status, i) => (
             <div key={i} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default">
                <status.icon className="w-4 h-4 text-slate-400" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{status.label}: <span className="text-slate-900">{status.status}</span></span>
             </div>
          ))}
       </div>
    </div>
  );
}
