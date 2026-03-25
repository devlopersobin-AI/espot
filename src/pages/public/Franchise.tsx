import React from "react";
import Hero from "../../components/Hero";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Award, 
  Building, 
  Search, 
  ShieldCheck, 
  Target, 
  Briefcase,
  Zap,
  Globe,
  Stars
} from "lucide-react";

export default function Franchise() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfc]">
      {/* Hero Section */}
      <Hero
        label="Global Expansion"
        title="Scale Your Local Vision Globally"
        subtitle="Export our proven ecosystem success model to your city. Lead the digital-lifestyle revolution with E-SPOT's elite franchise network."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        accentColor="text-indigo-400"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        
        {/* Section 1: Overview */}
        <section id="overview" className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-indigo-600 font-black text-xs uppercase tracking-[0.3em]">The Opportunity</span>
              <h2 className="text-5xl font-black text-slate-900 leading-tight">Empowering Visionaries <br /> To Lead Locally</h2>
            </div>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              E-SPOT is not just a platform; it's a global movement redefining success. 
              Our franchise model provides a turn-key solution for ambitious leaders to 
              deploy world-class infrastructure, business tools, and networking assets 
              in their local markets.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
               <FeatureMini icon={<Globe className="w-5 h-5" />} title="Global Brand" desc="Instant recognition and authority." />
               <FeatureMini icon={<Zap className="w-5 h-5" />} title="Turn-key Tech" desc="Pre-integrated software ecosystem." />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative group"
          >
            <img 
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
               alt="Collaboration" 
               className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-white text-center">
                  <Stars className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <p className="font-bold">E-SPOT Certification</p>
                  <p className="text-xs opacity-60">Verified Business Standard</p>
               </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: New Franchise Openings (Rising Ecosystems) */}
        <section id="new-franchise" className="space-y-12">
           <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Rising Ecosystems</h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto">Join our rapidly expanding global footprint of certified hubs.</p>
           </div>
           
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "E-SPOT Butwal", date: "March 2026", img: "https://picsum.photos/seed/n1/400/500", owner: "Sita Sharma", id: "butwal" },
                { name: "E-SPOT Dharan", date: "Feb 2026", img: "https://picsum.photos/seed/n2/400/500", owner: "Ram Thapa", id: "dharan" },
                { name: "E-SPOT Biratnagar", date: "Jan 2026", img: "https://picsum.photos/seed/n3/400/500", owner: "Hari Gurung", id: "biratnagar" },
                { name: "E-SPOT Hetauda", date: "Jan 2026", img: "https://picsum.photos/seed/n4/400/500", owner: "Gita Rai", id: "hetauda", spotlight: true }
              ].map((loc, i) => (
                <motion.div 
                  key={loc.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 relative shadow-xl">
                     <img src={loc.img} alt={loc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 space-y-4">
                        <button 
                          onClick={() => navigate(`/profile/franchise/${loc.id}`)}
                          className="w-full py-4 bg-white text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-slate-50 transition-colors"
                        >
                           {loc.spotlight ? "View Profile" : "View Facility"}
                        </button>
                     </div>
                  </div>
                  <div className="px-2">
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">{loc.name}</h4>
                    <p className="text-[10px] font-black text-slate-400 mt-1 uppercase tracking-[0.2em]">{loc.date} • {loc.owner}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Section 3: Top Franchise Leaders */}
        <section id="top-franchise" className="bg-slate-900 rounded-[3.5rem] p-12 lg:p-24 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/10 -z-0 blur-[120px] rounded-full translate-x-1/2" />
           <div className="relative z-10 grid lg:grid-cols-[1fr_400px] gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                   <h2 className="text-4xl lg:text-5xl font-black leading-tight text-white">The Gold Standard <br /> of Franchise <span className="text-indigo-400">Excellence</span></h2>
                   <p className="text-slate-400 font-medium">Meet the market leaders who have maximized the E-SPOT potential to drive unprecedented community growth.</p>
                </div>

                <div className="space-y-6">
                   <TopLeaderRow name="E-SPOT Central Hub" rating="4.9" city="Kathmandu" growth="+150%" />
                   <TopLeaderRow name="E-SPOT Pokhara" rating="4.8" city="Pokhara" growth="+88%" />
                   <TopLeaderRow name="E-SPOT Lalitpur" rating="4.7" city="Lalitpur" growth="+74%" />
                </div>
              </div>
              
              <div className="hidden lg:block">
                 <div className="p-10 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 text-center">
                   <Award className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
                   <h3 className="text-2xl font-black mb-4 uppercase">Elite Tier Hubs</h3>
                   <p className="text-sm text-slate-400 leading-relaxed mb-8">Participate in global strategy meetings and receive priority allocation for international investment rounds.</p>
                   <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-500 transition-all">
                      Review Benchmarks
                   </button>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 4: Franchisee of the Year Spotlight */}
        <section id="spotlight" className="relative group p-12 lg:p-20 bg-emerald-900 rounded-[3.5rem] overflow-hidden text-white">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973cf0f32e7?auto=format&fit=crop&w=1600&q=80')] opacity-5 scale-110 group-hover:scale-100 transition-transform duration-700 object-cover" />
           <div className="relative z-10 grid md:grid-cols-[280px_1fr] gap-12 items-center">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20">
                 <img src="https://picsum.photos/seed/winner/400/400" alt="Winner" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6">
                 <span className="inline-block px-4 py-1.5 bg-yellow-400 text-emerald-900 text-[10px] font-black uppercase tracking-widest rounded-full">2025 Global Franchisee of the Year</span>
                 <h2 className="text-5xl font-black leading-tight">Rajesh Shrestha</h2>
                 <p className="text-xl text-emerald-100 font-medium italic leading-relaxed">
                   "Deploying the E-SPOT model in Kathmandu was the most significant business decision of my career. The structured support and global clout allowed us to scale 4x faster than a traditional retail business."
                 </p>
                 <div className="flex gap-12 pt-6 border-t border-white/10">
                    <div>
                       <div className="text-3xl font-black">12,000+</div>
                       <div className="text-[10px] uppercase font-black text-emerald-400 tracking-widest">Active Members</div>
                    </div>
                    <div>
                       <div className="text-3xl font-black">4.9 / 5.0</div>
                       <div className="text-[10px] uppercase font-black text-emerald-400 tracking-widest">Market Rating</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 5: Eligibility & Matrix */}
        <section id="eligibility" className="space-y-16">
           <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-slate-900">Entrance Standards</h2>
              <p className="text-slate-500 font-medium">We maintain high standards to ensure the prestige and success of the global network.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              <EligibilityCard 
                title="Capital Readiness" 
                criteria="Minimum investment of $50k - $200k depending on city tier and hub capacity."
                icon={<WalletIcon />}
              />
              <EligibilityCard 
                title="Operational Excellence" 
                criteria="Proven track record in leadership, retail, or strategic management workflows."
                icon={<Building className="w-8 h-8" />}
              />
              <EligibilityCard 
                title="Brand Alignment" 
                criteria="Commitment to E-SPOT standard operating procedures and global design guidelines."
                icon={<ShieldCheck className="w-8 h-8" />}
              />
           </div>
        </section>

        {/* Section 6: Expansion Process */}
        <section id="process" className="space-y-20 pb-20">
           <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Deployment Roadmap</h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto">From initial screening to grand opening, we provide a structured path to operational success.</p>
           </div>

           <div className="grid md:grid-cols-5 gap-4 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 hidden md:block -z-10" />
              <ProcessStep step="01" title="Inquiry" desc="Initial contact and NDA signing." />
              <ProcessStep step="02" title="Analysis" desc="Local market viability report." />
              <ProcessStep step="03" title="Vetting" desc="Interview with global hub leaders." />
              <ProcessStep step="04" title="Onboarding" desc="30-day intensive hub training." />
              <ProcessStep step="05" title="Launch" desc="Global marketing reveal." />
           </div>

           <div className="mt-20 p-12 bg-indigo-600 rounded-[3rem] text-white text-center space-y-8 shadow-2xl shadow-indigo-900/40">
              <h3 className="text-4xl font-black leading-tight">Ready to Command Your Territory?</h3>
              <p className="text-indigo-100 font-medium max-w-xl mx-auto italic">Applications for the Q3 2026 Expansion Cycle are now open for verified business leaders.</p>
              <button 
                 onClick={() => navigate("/auth?mode=signup&role=Franchisee")}
                 className="px-12 py-6 bg-white text-indigo-600 rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-2xl"
              >
                 Begin Application Protocol
              </button>
           </div>
        </section>
      </div>
    </div>
  );
}

function FeatureMini({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">{title}</h4>
        <p className="text-xs text-slate-400 font-bold">{desc}</p>
      </div>
    </div>
  );
}

function TopLeaderRow({ name, rating, city, growth }) {
  return (
    <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
       <div className="flex items-center gap-6">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 font-black">
             {rating}
          </div>
          <div>
             <h4 className="font-black text-lg group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{name}</h4>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{city}</p>
          </div>
       </div>
       <div className="text-right">
          <div className="text-emerald-400 font-black text-lg">{growth}</div>
          <p className="text-[10px] font-black uppercase text-slate-600 tracking-widest">Growth</p>
       </div>
    </div>
  );
}

function EligibilityCard({ title, criteria, icon }) {
  return (
    <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-500">
       <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-8">
          {icon}
       </div>
       <h4 className="text-2xl font-black text-slate-900 mb-4">{title}</h4>
       <div className="h-1.5 w-12 bg-indigo-500 rounded-full mb-6" />
       <p className="text-slate-500 font-medium leading-relaxed">{criteria}</p>
    </div>
  );
}

function WalletIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <path d="M22 10.5V13" />
    </svg>
  );
}

function ProcessStep({ step, title, desc }) {
  return (
    <div className="text-center group p-6 relative">
       <div className="w-16 h-16 bg-white border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10 group-hover:border-indigo-500 group-hover:text-indigo-600 transition-all font-black text-lg">
          {step}
       </div>
       <h4 className="font-black text-slate-900 uppercase tracking-tight mb-2 text-sm">{title}</h4>
       <p className="text-xs text-slate-400 font-bold leading-relaxed">{desc}</p>
    </div>
  );
}
