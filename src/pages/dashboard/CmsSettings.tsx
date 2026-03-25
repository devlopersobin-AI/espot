import React, { useState, useEffect } from "react";
import { 
  Settings, Globe, Shield, MessageSquare, Bell, 
  Save, Layout, Smartphone, Database, Lock,
  Users, UserPlus, GraduationCap, Briefcase, 
  Terminal, RefreshCw, Search, Eye, Share2, 
  CheckCircle2, AlertCircle, TrendingUp, Chrome,
  BarChart3, Image as ImageIcon
} from "lucide-react";
import { getAuthRole } from "../../auth/permissions";

export default function CmsSettings() {
  const role = getAuthRole();
  const [activeTab, setActiveTab] = useState("Platform");
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success">("idle");

  const [seoSettings, setSeoSettings] = useState({
    globalTitle: "E-SPOT | Global Network Platform",
    globalDescription: "The premier global ecosystem for entrepreneurs, professionals, and visionaries. Secure, scalable, and built for growth.",
    globalKeywords: "global network, entrepreneurship, venture capital, professional growth, E-SPOT",
    googleVerification: "google-1234567890",
    bingVerification: "bing-0987654321",
    ogImage: "https://global-network-platform.com/og-image.jpg",
    indexingEnabled: true,
    sitemapActive: true,
    analyticsId: "UA-999999-01"
  });

  useEffect(() => {
    const stored = localStorage.getItem("platform_seo_settings");
    if (stored) {
      setSeoSettings(JSON.parse(stored));
    }
  }, []);

  if (role !== "Admin") {
    return <div className="p-10 text-center font-black text-red-500 uppercase tracking-widest bg-red-50 rounded-2xl border border-red-100 italic">Access Denied: Admin Personnel Only</div>;
  }

  const tabs = ["Platform", "SEO", "Security", "Simulation", "Messaging", "Storage"];

  const handleSaveAll = () => {
    setIsSaving(true);
    localStorage.setItem("platform_seo_settings", JSON.stringify(seoSettings));
    
    setTimeout(() => {
      setIsSaving(false);
      setSaveStatus("success");
      setTimeout(() => setSaveStatus("idle"), 3000);
    }, 800);
  };

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
    <div className="space-y-8 pb-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Global <span className="text-blue-600">Ecosystem Control</span></h2>
          <p className="text-slate-500 mt-1 font-bold text-sm tracking-wide uppercase italic">System Version: 4.2.0-Production</p>
        </div>
        <button 
           onClick={handleSaveAll}
           disabled={isSaving}
           className={`flex items-center gap-2 px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl transition-all active:scale-95 ${
             saveStatus === "success" ? "bg-emerald-600 text-white" : "bg-slate-900 hover:bg-black text-white"
           }`}
        >
          {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : saveStatus === "success" ? <CheckCircle2 className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          {isSaving ? "Synchronizing..." : saveStatus === "success" ? "Network Updated" : "Save Global Changes"}
        </button>
      </div>

      <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row min-h-[750px] relative">
        <div className="bg-blue-600 absolute bottom-0 left-0 w-full h-1 z-50 animate-pulse opacity-20"></div>

        {/* Sidebar Tabs */}
        <div className="w-full lg:w-72 bg-slate-50/70 border-r border-gray-50 p-10 space-y-3 shrink-0">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Master Hub</p>
           {tabs.map(tab => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`w-full text-left px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all relative overflow-hidden group ${
                 activeTab === tab ? "bg-white text-blue-600 shadow-xl shadow-blue-100/50 border border-blue-50" : "text-slate-500 hover:bg-white hover:text-slate-800"
               }`}
             >
               <span className="relative z-10 flex items-center gap-3">
                  {tab === "SEO" && <Search className="w-4 h-4" />}
                  {tab === "Platform" && <Layout className="w-4 h-4" />}
                  {tab === "Security" && <Shield className="w-4 h-4" />}
                  {tab === "Simulation" && <Terminal className="w-4 h-4" />}
                  {tab === "Messaging" && <MessageSquare className="w-4 h-4" />}
                  {tab === "Storage" && <Database className="w-4 h-4" />}
                  {tab}
               </span>
               {activeTab === tab && <div className="absolute left-0 top-0 w-1 h-full bg-blue-600"></div>}
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-14 overflow-y-auto">
            
            {activeTab === "SEO" && (
               <div className="space-y-16 animate-in fade-in slide-in-from-right-1 duration-500">
                  <header className="space-y-4">
                     <div className="flex items-center gap-3 text-blue-600">
                        <TrendingUp className="w-6 h-6" />
                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Search Engine Optimization <span className="text-blue-600">CMS</span></h3>
                     </div>
                     <p className="text-slate-500 font-medium max-w-xl text-sm leading-relaxed">Manage global indexability, meta-data protocols, and social graph previews for the entire E-SPOT domain from this centralized terminal.</p>
                  </header>

                  <div className="grid grid-cols-1 xl:grid-cols-5 gap-16">
                     <div className="xl:col-span-3 space-y-10">
                        {/* Global Config */}
                        <section className="space-y-6">
                           <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                              <Globe className="w-3 h-3" /> Global Meta Protocol
                           </h4>
                           <div className="space-y-6">
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-slate-900 uppercase">Focus Site Title</label>
                                 <input 
                                    value={seoSettings.globalTitle}
                                    onChange={(e) => setSeoSettings({...seoSettings, globalTitle: e.target.value})}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all" 
                                    placeholder="Enter Site Title"
                                 />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-slate-900 uppercase">Master Description (155-160 characters optimal)</label>
                                 <textarea 
                                    value={seoSettings.globalDescription}
                                    onChange={(e) => setSeoSettings({...seoSettings, globalDescription: e.target.value})}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all h-32 resize-none" 
                                    placeholder="Site description for search results..."
                                 />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-slate-900 uppercase">Target Index Keywords</label>
                                 <input 
                                    value={seoSettings.globalKeywords}
                                    onChange={(e) => setSeoSettings({...seoSettings, globalKeywords: e.target.value})}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all" 
                                    placeholder="Comma separated: global, network, entrepreneur..."
                                 />
                              </div>
                           </div>
                        </section>

                        {/* Search Verification */}
                        <section className="space-y-6">
                           <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                              <Shield className="w-3 h-3" /> Search Verification Protocols
                           </h4>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl space-y-3">
                                 <div className="flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase">
                                    <Chrome className="w-4 h-4 text-orange-500" /> Google Search Console
                                 </div>
                                 <input 
                                    value={seoSettings.googleVerification}
                                    onChange={(e) => setSeoSettings({...seoSettings, googleVerification: e.target.value})}
                                    className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2 font-black text-[10px] text-slate-500 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-orange-500/20" 
                                 />
                              </div>
                              <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl space-y-3">
                                 <div className="flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase">
                                    <BarChart3 className="w-4 h-4 text-emerald-500" /> Bing Webmaster
                                 </div>
                                 <input 
                                    value={seoSettings.bingVerification}
                                    onChange={(e) => setSeoSettings({...seoSettings, bingVerification: e.target.value})}
                                    className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2 font-black text-[10px] text-slate-500 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500/20" 
                                 />
                              </div>
                           </div>
                        </section>
                     </div>

                     {/* Previews Sidebar */}
                     <div className="xl:col-span-2 space-y-12">
                        <section className="space-y-6">
                           <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                              <Eye className="w-3 h-3" /> Real-world Simulation
                           </h4>
                           
                           {/* Google Preview */}
                           <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-lg space-y-3 max-w-[400px]">
                              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium border-b border-slate-50 pb-3 mb-2">
                                 <Search className="w-3 h-3" /> Google Mobile Preview
                              </div>
                              <div className="flex items-center gap-1 text-[#202124] text-[11px] font-medium opacity-70">
                                 <span>global-network-platform.com</span>
                                 <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                 <span>Index</span>
                              </div>
                              <div className="text-[#1a0dab] text-xl font-normal leading-tight hover:underline cursor-pointer">
                                 {seoSettings.globalTitle}
                              </div>
                              <div className="text-[#4d5156] text-sm leading-relaxed">
                                 <span className="text-[#70757a] font-normal mr-1">Mar 25, 2026 —</span>
                                 {seoSettings.globalDescription.slice(0, 160)}...
                              </div>
                           </div>

                           {/* Social Gallery Preview */}
                           <div className="p-0 bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-lg max-w-[400px]">
                              <div className="p-6 border-b border-slate-50 bg-slate-50/50">
                                 <div className="flex items-center gap-2 text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">
                                    <Share2 className="w-3 h-3" /> Social Graph Preview
                                 </div>
                              </div>
                              <div className="relative group">
                                 <img src={seoSettings.ogImage} className="w-full aspect-[1.91/1] object-cover" alt="OG Preview" />
                                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="px-6 py-2 bg-white text-slate-900 rounded-xl font-black text-[9px] uppercase tracking-widest flex items-center gap-2">
                                       <ImageIcon className="w-3 h-3" /> Swap Asset
                                    </button>
                                 </div>
                              </div>
                              <div className="p-6 space-y-2">
                                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">GLOBAL-NETWORK-PLATFORM.COM</p>
                                 <p className="text-sm font-black text-slate-900 line-clamp-1">{seoSettings.globalTitle}</p>
                                 <p className="text-xs font-medium text-slate-500 line-clamp-2 leading-relaxed">{seoSettings.globalDescription}</p>
                              </div>
                           </div>
                        </section>

                        <section className="bg-blue-600 rounded-3xl p-8 text-white space-y-6 shadow-xl shadow-blue-200">
                           <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                              <BarChart3 className="w-6 h-6 text-blue-200" />
                           </div>
                           <div className="space-y-2">
                              <h5 className="font-black uppercase tracking-tighter text-xl leading-none">Intelligence Engine</h5>
                              <p className="text-xs font-medium text-blue-100 leading-relaxed uppercase tracking-wide italic">"Dynamic SEO modules are currently optimizing 14 public-facing pages in real-time."</p>
                           </div>
                           <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                              <div className="text-center">
                                 <div className="text-lg font-black">94%</div>
                                 <div className="text-[8px] font-bold uppercase tracking-widest text-blue-200/80">Health</div>
                              </div>
                              <div className="text-center">
                                 <div className="text-lg font-black">2.1k</div>
                                 <div className="text-[8px] font-bold uppercase tracking-widest text-blue-200/80">Backlinks</div>
                              </div>
                              <div className="text-center">
                                 <div className="text-lg font-black">88</div>
                                 <div className="text-[8px] font-bold uppercase tracking-widest text-blue-200/80">Keywords</div>
                              </div>
                           </div>
                        </section>
                     </div>
                  </div>
               </div>
            )}

            {activeTab === "Simulation" && (
                <section className="space-y-8 animate-in fade-in duration-500">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100 text-indigo-600">
                        <Terminal className="w-8 h-8" />
                     </div>
                     <div>
                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Environment Control</h3>
                        <p className="text-[10px] font-black text-indigo-500/80 uppercase tracking-widest tracking-widest mt-1 italic">Authorized Simulated Access Protocol</p>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                     {simulationRoles.map((sim, i) => (
                       <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all group relative overflow-hidden">
                          <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                             <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all">
                                <sim.icon className="w-6 h-6" />
                             </div>
                             <button 
                               onClick={() => handleSimulateRole(sim.role as any)}
                               className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl active:scale-95"
                             >
                                <RefreshCw className="w-3 h-3" /> Switch
                             </button>
                          </div>
                          <p className="text-lg font-black text-slate-900 mb-2 relative z-10">{sim.role}</p>
                          <p className="text-xs font-medium text-slate-400 leading-relaxed uppercase tracking-wide relative z-10">{sim.desc}</p>
                          {/* Background Decoration */}
                          <div className="absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none">
                             <sim.icon className="w-40 h-40 rotate-12" />
                          </div>
                       </div>
                     ))}
                  </div>
                </section>
            )}

            {activeTab === "Platform" && (
                <section className="space-y-12 animate-in fade-in duration-500">
                  <header className="space-y-4">
                     <div className="flex items-center gap-3 text-blue-600">
                        <Globe className="w-6 h-6" />
                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Core Ecosystem <span className="text-blue-600">Features</span></h3>
                     </div>
                     <p className="text-slate-500 font-medium max-w-xl text-sm leading-relaxed">Global configuration for public registration, financial triggers, and cross-role communication protocols.</p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {[
                       { label: "Public Registration", desc: "Allow new users to create accounts natively.", active: true },
                       { label: "Withdrawal Hub", desc: "Enable Wealth Point to USD conversions.", active: false },
                       { label: "Inter-Role Messaging", desc: "Members talk to Partners directly.", active: true },
                       { label: "Global Sync Index", desc: "Real-time indexing of all member data.", active: true },
                       { label: "AI Matchmaking", desc: "Smart job-talent alignment algorithm.", active: true },
                       { label: "Diamond Gate", desc: "Exclusive areas reserved for top-tier only.", active: true }
                     ].map((feature, i) => (
                       <div key={i} className="group flex items-center justify-between p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:bg-white transition-all">
                          <div className="flex-1 pr-6">
                             <p className="text-sm font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{feature.label}</p>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed italic">{feature.desc}</p>
                          </div>
                          <div className={`w-14 h-7 rounded-full relative transition-all duration-300 cursor-pointer ${feature.active ? "bg-blue-600" : "bg-slate-200"}`}>
                             <div className={`absolute top-1.5 w-4 h-4 bg-white rounded-full transition-all duration-300 ${feature.active ? "right-1.5" : "left-1.5"}`} />
                          </div>
                       </div>
                     ))}
                  </div>
                </section>
            )}

            {!["SEO", "Simulation", "Platform"].includes(activeTab) && (
              <div className="flex flex-col items-center justify-center h-[500px] text-center space-y-6 animate-in fade-in zoom-in-95 duration-700">
                 <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center border border-slate-100 shadow-xl">
                    <Settings className="w-10 h-10 text-slate-200 animate-[spin_10s_linear_infinite]" />
                 </div>
                 <div className="space-y-2">
                    <p className="text-xl font-black text-slate-300 uppercase tracking-tighter italic">Module Decryption In Progress</p>
                    <p className="text-xs font-black text-blue-500/40 uppercase tracking-[0.5em]">{activeTab} Interface Locked</p>
                 </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
