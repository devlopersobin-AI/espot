import { useState } from "react";
import { 
  Settings, Globe, Shield, MessageSquare, Bell, 
  Save, Layout, Smartphone, Database, Lock,
  Users, UserPlus, GraduationCap, Briefcase, 
  Terminal, RefreshCw
} from "lucide-react";
import { getAuthRole } from "../../auth/permissions";

export default function CmsSettings() {
  const role = getAuthRole();
  const [activeTab, setActiveTab] = useState("Platform");

  if (role !== "Admin") {
    return <div className="p-10 text-center font-black text-red-500 uppercase tracking-widest bg-red-50 rounded-2xl border border-red-100 italic">Access Denied: Admin Personnel Only</div>;
  }

  const tabs = ["Platform", "Security", "Simulation", "Messaging", "Storage"];

  const handleSimulateRole = (newRole: string) => {
    localStorage.setItem("auth_role", newRole);
    window.location.href = "/dashboard";
  };

  const simulationRoles = [
    { role: "Admin", icon: Shield, desc: "Full system oversight and CMS access." },
    { role: "Member", icon: Users, desc: "Portfolio management and network access." },
    { role: "Partner", icon: Briefcase, desc: "B2B campaigns and lead generation." },
    { role: "Franchisee", icon: Globe, desc: "Regional operations and brand assets." },
    { role: "Trainer", icon: GraduationCap, desc: "Curriculum and student analytics." },
    { role: "Trainee", icon: GraduationCap, desc: "Learning paths and certifications." },
    { role: "Scholar", icon: GraduationCap, desc: "Grants and research milestones." },
    { role: "Jobseeker", icon: UserPlus, desc: "Career matching and applications." },
  ];

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Platform CMS</h2>
          <p className="text-slate-500 mt-1 font-medium">Global configuration and platform-wide feature controls.</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl transition-all active:scale-95">
          <Save className="w-4 h-4" /> Save Global Changes
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-slate-200/40 overflow-hidden flex flex-col md:flex-row min-h-[650px]">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 bg-slate-50/50 border-r border-gray-50 p-8 space-y-2">
           {tabs.map(tab => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`w-full text-left px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                 activeTab === tab ? "bg-white text-blue-600 shadow-lg shadow-blue-100/50 border border-blue-100" : "text-slate-400 hover:bg-white hover:text-slate-600"
               }`}
             >
               {tab}
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-12">
           <div className="max-w-3xl space-y-12">
              {activeTab === "Simulation" ? (
                <section className="space-y-8">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100">
                        <Terminal className="w-6 h-6 text-indigo-600" />
                     </div>
                     <div>
                        <h3 className="text-xl font-black text-slate-900 uppercase">Simulation Environment</h3>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 text-indigo-500/80">Dev-Only Preview Tools</p>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {simulationRoles.map((sim, i) => (
                       <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all group">
                          <div className="flex items-start justify-between gap-4 mb-4">
                             <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all">
                                <sim.icon className="w-5 h-5" />
                             </div>
                             <button 
                               onClick={() => handleSimulateRole(sim.role as any)}
                               className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg active:scale-95"
                             >
                                <RefreshCw className="w-3 h-3" /> Simulate
                             </button>
                          </div>
                          <p className="text-sm font-black text-slate-900 mb-1">{sim.role}</p>
                          <p className="text-xs font-medium text-slate-400 leading-relaxed">{sim.desc}</p>
                       </div>
                     ))}
                  </div>
                </section>
              ) : activeTab === "Platform" ? (
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                     <Globe className="w-5 h-5 text-blue-600" />
                     <h3 className="text-lg font-black text-slate-900 uppercase">Core Ecosystem</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {[
                       { label: "Public Registration", desc: "Allow new users to create accounts.", active: true },
                       { label: "Wealth Point Withdrawals", desc: "Enable NC to USD conversions.", active: false },
                       { label: "Cross-Role Messaging", desc: "Members can talk to Partners directly.", active: true },
                       { label: "Global Search Index", desc: "Real-time indexing of all profiles.", active: true },
                     ].map((feature, i) => (
                       <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <div>
                             <p className="text-sm font-black text-slate-900 mb-1">{feature.label}</p>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter leading-relaxed">{feature.desc}</p>
                          </div>
                          <div className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${feature.active ? "bg-blue-600" : "bg-slate-200"}`}>
                             <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${feature.active ? "right-1" : "left-1"}`} />
                          </div>
                       </div>
                     ))}
                  </div>
                </section>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-4 opacity-50">
                   <Settings className="w-12 h-12 text-slate-200" />
                   <p className="text-xs font-black text-slate-300 uppercase tracking-widest">{activeTab} Modules Under Review</p>
                </div>
              )}

              {activeTab !== "Simulation" && (
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                     <Lock className="w-5 h-5 text-indigo-600" />
                     <h3 className="text-lg font-black text-slate-900 uppercase">Security Protocols</h3>
                  </div>
                  <div className="space-y-4">
                     <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-6">
                        <Shield className="w-8 h-8 text-slate-200" />
                        <div className="flex-1">
                           <p className="text-sm font-black text-slate-900">Multi-Factor Authentication</p>
                           <p className="text-xs font-bold text-slate-400 mt-0.5">Enforce MFA for all Diamond tier and higher accounts.</p>
                        </div>
                        <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Enforce</button>
                     </div>
                  </div>
                </section>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
