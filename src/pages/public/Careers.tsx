import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Search,
  Users,
  Award,
  TrendingUp,
  Cpu,
  Globe,
  Star,
  Zap,
  ChevronRight,
  Monitor,
  Building2,
  UserPlus
} from "lucide-react";

import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";
import SEO from "../../components/SEO";
import SubNav from "../../components/SubNav";

export default function Careers() {
  const subNav = [
    "Internal Roles",
    "Partner Careers",
    "Internship Hub",
    "Post a Job",
    "Talent Pool"
  ];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const internalJobs = [
    {
      id: "esp-1",
      title: "Senior Platform Architect",
      department: "Engineering",
      location: "Kathmandu / Remote",
      type: "Full-time",
      salary: "$140k - $180k",
      description: "Shape the technical future of the E-SPOT global ecosystem.",
    },
    {
      id: "esp-2",
      title: "Global Community Lead",
      department: "Operations",
      location: "Singapore",
      type: "Full-time",
      salary: "$90k - $120k",
      description: "Scale our member engagement across 40+ international hubs.",
    },
    {
      id: "esp-3",
      title: "Product Designer (E-Spot Next)",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $140k",
      description: "Define the visual language of the next-generation venture platform.",
    }
  ];

  const partnerJobs = [
    {
      id: "prt-1",
      title: "Marketing Director",
      company: "InnovateHer",
      location: "London, UK",
      type: "Full-time",
      salary: "£85k - £100k",
      description: "Lead global marketing efforts for our premiere venture partner.",
    },
    {
      id: "prt-2",
      title: "Fintech Lead Developer",
      company: "DataSys",
      location: "Dubai, UAE",
      type: "Contract",
      salary: "$12k - $15k/mo",
      description: "Build core banking infrastructure for a high-growth fintech partner.",
    }
  ];

  const internships = [
    {
      id: "int-1",
      title: "Digital Ecosystem Intern",
      area: "Strategy",
      duration: "6 Months",
      conversionRate: "85%",
      description: "Learn how global networks operate. High potential for full-time conversion.",
    },
    {
      id: "int-2",
      title: "Venture Capital Analyst Intern",
      area: "Finance",
      duration: "4 Months",
      conversionRate: "70%",
      description: "Analyze startup pitches and assist in due diligence processes.",
    }
  ];

  const filteredInternal = internalJobs.filter(j => 
    j.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    j.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPartner = partnerJobs.filter(j => 
    j.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    j.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    j.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInternships = internships.filter(j =>
    j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    j.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* SEO Integration */}
      <SEO 
        title="Careers & Talent Hub" 
        description="Join the E-SPOT global team or discover opportunities within our verified partner network. From internships to executive roles."
      />

      {/* HERO SECTION */}
      <Hero
        label="Talent & Opportunity"
        title="Shape the Future of Global Networks"
        subtitle="Join the core E-SPOT team or explore high-impact roles at our verified global partners. Your journey from intern to industry leader starts here."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        accentColor="text-blue-400"
      />

      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-blue-700 border-blue-600 bg-blue-50"
      />

      <div className="flex-1 py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* DEDICATED SEARCH BAR SECTION */}
          <div className="mb-12 relative max-w-2xl mx-auto">
             <div className="absolute inset-0 bg-white rounded-3xl shadow-xl shadow-slate-200/50 -z-10 border border-slate-100" />
             <div className="flex items-center gap-4 px-8 py-4">
                <Search className="w-5 h-5 text-slate-400" />
                <input 
                   type="text" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="Search for roles, companies, or skills..."
                   className="flex-1 bg-transparent text-slate-900 font-bold placeholder-slate-300 focus:outline-none"
                />
                <button className="px-6 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">Filter</button>
             </div>
          </div>
          
          {activeTab === "Internal Roles" && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                 <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                       <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Global Reach</h3>
                    <p className="text-sm text-slate-500">Work with teams across 20+ countries on world-class infrastructure.</p>
                 </div>
                 <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                       <Zap className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Rapid Growth</h3>
                    <p className="text-sm text-slate-500">We prioritize merit-based advancement and internal leadership tracks.</p>
                 </div>
                 <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                       <Award className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Total Reward</h3>
                    <p className="text-sm text-slate-500">Competitive global compensation with comprehensive benefit packages.</p>
                 </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <h2 className="text-2xl font-black text-slate-900 tracking-tight">E-SPOT Core <span className="text-blue-600">Openings</span></h2>
                   <span className="text-sm font-bold text-slate-400">{filteredInternal.length} Available</span>
                </div>
                
                {filteredInternal.length > 0 ? filteredInternal.map((job) => (
                  <div key={job.id} className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">{job.department}</span>
                         <span className="text-slate-300">•</span>
                         <span className="text-slate-500 text-xs font-bold flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                      </div>
                      <h4 className="text-2xl font-black text-slate-900">{job.title}</h4>
                      <p className="text-slate-500 text-sm max-w-xl font-medium">{job.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-3 shrink-0">
                      <div className="text-lg font-black text-slate-900">{job.salary}</div>
                      <button onClick={() => navigate("/auth?mode=signup&role=Jobseeker")} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-2 group/btn">
                         Apply Direct <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )) : (
                  <div className="py-20 text-center bg-white border border-dashed border-slate-200 rounded-[2rem] text-slate-400 font-bold uppercase tracking-widest">
                     No matching internal roles found.
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "Partner Careers" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-[2.5rem] p-12 text-white overflow-hidden relative mb-12">
                 <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-black mb-4">The Global Partner Network</h2>
                    <p className="text-indigo-100 text-lg font-medium mb-8">E-SPOT verifies and connects you with high-growth companies in our ecosystem. One profile, a thousand opportunities.</p>
                    <div className="flex gap-4">
                       <button className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-all">Upload Your CV</button>
                       <button className="px-8 py-4 bg-white/10 backdrop-blur-3xl border border-white/20 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">How it works</button>
                    </div>
                 </div>
                 <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                    <Briefcase className="w-80 h-80 rotate-12" />
                 </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredPartner.length > 0 ? filteredPartner.map((job) => (
                  <div key={job.id} 
                    onClick={() => navigate(`/profile/partner/${job.company.toLowerCase().replace(/\s+/g, '-')}`)}
                    className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:border-indigo-300 transition-all flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                         <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-400 text-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">{job.company.charAt(0)}</div>
                         <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full">Verified Partner</div>
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-2">{job.title}</h4>
                      <p className="text-blue-600 font-bold mb-4">{job.company}</p>
                      <p className="text-slate-500 text-sm mb-6 font-medium">{job.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                       <div className="text-slate-900 font-black">{job.salary}</div>
                       <div className="text-slate-900 font-black text-xs uppercase tracking-widest group-hover:text-indigo-600 flex items-center gap-2">
                          Company Profile <ChevronRight className="w-4 h-4" />
                       </div>
                    </div>
                  </div>
                )) : (
                  <div className="col-span-full py-20 text-center bg-white border border-dashed border-slate-200 rounded-[2rem] text-slate-400 font-bold uppercase tracking-widest">
                     No matching partner roles found.
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "Internship Hub" && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div className="space-y-8">
                    <div className="space-y-4">
                       <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em]">The Journey</span>
                       <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Intern to <span className="text-blue-600">Employee</span> <br /> Roadmap</h2>
                       <p className="text-slate-500 font-medium text-lg leading-relaxed">Our internship program is designed for conversion. We treat interns as future leaders, providing structured learning and high-stakes projects.</p>
                    </div>
                    
                    <div className="space-y-6">
                       {[
                         { step: "Phase 1: Immersion", desc: "1 month of intense training on E-SPOT ecosystem and core technologies." },
                         { step: "Phase 2: Project Ownership", desc: "Take charge of a specific business or technical module with a dedicated mentor." },
                         { step: "Phase 3: Performance Review", desc: "High-level assessment of impact, culture fit, and technical proficiency." },
                         { step: "Phase 4: Full-Time Offer", desc: "Successful interns transition into permanent roles with full benefits." }
                       ].map((item, i) => (
                         <div key={i} className="flex gap-6 group">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shrink-0 relative z-10">
                               {i + 1}
                               {i < 3 && <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-slate-200 -z-10 group-hover:bg-blue-200 transition-colors" />}
                            </div>
                            <div className="pt-1">
                               <h4 className="font-black text-slate-900 mb-1">{item.step}</h4>
                               <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="space-y-6">
                    <h3 className="text-xl font-black text-slate-900 mb-6">Current Intern Openings</h3>
                    {filteredInternships.length > 0 ? filteredInternships.map((int) => (
                      <div key={int.id} className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-300 transition-all shadow-sm">
                         <div className="flex justify-between items-start mb-6">
                            <div>
                               <h4 className="text-xl font-black text-slate-900 mb-1">{int.title}</h4>
                               <p className="text-blue-600 font-bold text-xs uppercase tracking-widest">{int.area} • {int.duration}</p>
                            </div>
                            <div className="text-center">
                               <div className="text-2xl font-black text-emerald-600">{int.conversionRate}</div>
                               <div className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">Conversion</div>
                            </div>
                         </div>
                         <p className="text-slate-500 text-sm mb-6 font-medium">{int.description}</p>
                         <button onClick={() => navigate("/auth?mode=signup&role=ITIntern")} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">Start Application</button>
                      </div>
                    )) : (
                      <div className="py-20 text-center bg-white border border-dashed border-slate-200 rounded-[2rem] text-slate-400 font-bold uppercase tracking-widest">
                         No matching internships found.
                      </div>
                    )}
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-center gap-4">
                       <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">
                          <Users className="w-5 h-5 text-blue-600" />
                       </div>
                       <p className="text-xs text-blue-800 font-bold italic">"85% of our current engineering team started as interns." — Head of Talent</p>
                    </div>
                 </div>
              </div>
            </div>
          )}

          {activeTab === "Post a Job" && (
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 max-w-4xl mx-auto text-center space-y-12 py-12">
               <div className="space-y-4">
                  <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em]">For Companies</span>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Access the Elite <span className="text-blue-600">Talent Pool</span></h2>
                  <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Verified professionals, pre-screened graduates, and industry veterans are all part of the E-SPOT ecosystem. Hire with confidence.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="bg-white border border-slate-200 rounded-[2rem] p-10 space-y-8 hover:shadow-2xl transition-all">
                     <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                        <UserPlus className="w-8 h-8 text-blue-600" />
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-2xl font-black text-slate-900">Register as a <span className="text-blue-600">Company</span></h3>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">Create a business profile, showcase your culture, and start posting roles to the entire E-SPOT global network.</p>
                        <ul className="space-y-2">
                           {["Global visibility", "Verified candidates only", "Automated screening", "direct messaging"].map(f => (
                             <li key={f} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                <ChevronRight className="w-4 h-4 text-blue-600" /> {f}
                             </li>
                           ))}
                        </ul>
                     </div>
                     <button onClick={() => navigate("/auth?mode=signup&role=Jobgiver")} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">Create Hiring Profile</button>
                  </div>

                  <div className="bg-slate-900 text-white rounded-[2rem] p-10 space-y-8 hover:shadow-2xl transition-all border border-white/5">
                     <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Monitor className="w-8 h-8 text-blue-400" />
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-2xl font-black">Post a <span className="text-blue-400">Single Job</span></h3>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">Need to hire fast? Post a single role without a full business registration and reach thousands of verified applicants.</p>
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                           <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-bold text-slate-400">Standard Post</span>
                              <span className="text-xl font-black">$49</span>
                           </div>
                           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">30 Days Visibility</p>
                        </div>
                     </div>
                     <button onClick={() => navigate("/auth?mode=signup&role=Jobgiver")} className="w-full py-4 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all">Quick Post Role</button>
                  </div>
               </div>
            </div>
          )}

          {activeTab === "Talent Pool" && (
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-12">
               <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">E-SPOT <span className="text-blue-600">High-Performers</span></h2>
                  <p className="text-slate-500 font-medium">Browse verified top-tier talent currently available in the network. (Employers only)</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { id: "suman-t", name: "Suman Thapa", role: "Full Stack Engineer", exp: "5 Years", img: "https://i.pravatar.cc/400?u=suman", skill: "React, Node, Go" },
                    { id: "priya-s", name: "Priya Sharma", role: "Product Manager", exp: "8 Years", img: "https://i.pravatar.cc/400?u=priya", skill: "Strategy, Agile, Figma" },
                    { id: "rahul-k", name: "Rahul Kohli", role: "Data Scientist", exp: "4 Years", img: "https://i.pravatar.cc/400?u=rahul", skill: "Python, AI/ML, SQL" },
                    { id: "neha-g", name: "Neha Gurung", role: "UI/UX Designer", exp: "6 Years", img: "https://i.pravatar.cc/400?u=neha", skill: "Figma, Design Systems" }
                  ].filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.role.toLowerCase().includes(searchQuery.toLowerCase()) || t.skill.toLowerCase().includes(searchQuery.toLowerCase())).map((talent, i) => (
                    <div key={i} 
                      onClick={() => navigate(`/profile/member/${talent.name.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-2xl hover:border-blue-300 transition-all group cursor-pointer overflow-hidden"
                    >
                       <div className="relative mb-6">
                          <img src={talent.img} alt={talent.name} className="w-20 h-20 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                          <div className="absolute top-0 right-0 p-2 bg-blue-50 rounded-xl">
                             <TrendingUp className="w-4 h-4 text-blue-600" />
                          </div>
                       </div>
                       <h4 className="font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{talent.name}</h4>
                       <p className="text-xs font-bold text-slate-400 mb-4">{talent.role} • {talent.exp}</p>
                       <div className="pt-4 border-t border-slate-50">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-2">Primary Skills</p>
                          <p className="text-xs font-bold text-slate-700">{talent.skill}</p>
                       </div>
                    </div>
                  ))}
               </div>
               
               <div className="bg-slate-950 rounded-3xl p-10 flex flex-col items-center text-center space-y-6">
                  <div className="flex -space-x-4 mb-4">
                     {[1,2,3,4,5].map(j => <img key={j} src={`https://i.pravatar.cc/100?u=${j}`} className="w-12 h-12 rounded-full border-4 border-slate-950" />)}
                  </div>
                  <h3 className="text-2xl font-black text-white">Unlock Full Talent Access</h3>
                  <p className="text-slate-400 max-w-xl">Register as a verified employer to view full portfolios, contact details, and career histories of 12,000+ network members.</p>
                  <button onClick={() => navigate("/auth?mode=signup&role=Jobgiver")} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all">Verify My Company</button>
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
