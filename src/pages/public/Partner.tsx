import React, { useMemo, useState } from "react";
import Hero from "../../components/Hero";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ArrowRight,
  CheckCircle2,
  Target,
  Calendar,
  Users,
  Award,
  Search,
  TrendingUp,
  MapPin,
  Megaphone,
  ChevronRight,
  ShieldCheck,
  Zap,
  Briefcase
} from "lucide-react";

const PARTNER_TYPES = [
  {
    type: "Corporate",
    title: "Collaborative Partner",
    description: "Scale your existing business with our massive member network and strategic tools.",
    benefits: ["Expansion Support", "Strategic Branding", "Lead Generation"],
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-blue-600 to-indigo-600",
    light: "bg-blue-50"
  },
  {
    type: "Equity",
    title: "Shareholder Partner",
    description: "Invest directly in the ecosystem and share in the collective success and profits.",
    benefits: ["Profit Sharing", "Fixed Growth Hub", "Direct Influence"],
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-emerald-600 to-teal-600",
    light: "bg-emerald-50"
  },
  {
    type: "Founder",
    title: "Elite Founder Partner",
    description: "Join the inner circle of visionaries shaping the future of global commerce.",
    benefits: ["Core Decision Rights", "Maximum Equity", "Legacy Tier"],
    icon: <Award className="w-8 h-8" />,
    color: "from-amber-500 to-orange-600",
    light: "bg-amber-50"
  }
];

const FIVE_PS = [
  { title: "Product", desc: "Crafting indispensable solutions", icon: <ShieldCheck /> },
  { title: "Price", desc: "Value-optimized models", icon: <Zap /> },
  { title: "Place", desc: "Omnichannel accessibility", icon: <MapPin /> },
  { title: "Promotion", desc: "Algorithmic brand amplification", icon: <Megaphone /> },
  { title: "People", desc: "Elite human-centric culture", icon: <Users /> }
];

export default function Partner() {
  const [partnerQuery, setPartnerQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("All");
  const navigate = useNavigate();

  const topPartners = [
    { id: 1, name: "TechCorp Solutions", rating: 4.9, reviews: 128, type: "Technology", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", growth: "+21%", campaigns: 34 },
    { id: 2, name: "Global Logistics Inc", rating: 4.8, reviews: 95, type: "Supply Chain", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", growth: "+14%", campaigns: 22 },
    { id: 3, name: "EduFirst Academy", rating: 4.9, reviews: 210, type: "Education", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", growth: "+26%", campaigns: 41 },
    { id: 4, name: "HealthPlus Clinics", rating: 4.9, reviews: 340, type: "Healthcare", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", growth: "+24%", campaigns: 57 },
  ];

  const filteredPartners = useMemo(() => {
    return topPartners.filter((p) => {
      const byType = industryFilter === "All" || p.type === industryFilter;
      const byQuery = !partnerQuery || p.name.toLowerCase().includes(partnerQuery.toLowerCase());
      return byType && byQuery;
    });
  }, [industryFilter, partnerQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfc]">
      <Hero
        title="Forge Strategic Partnerships"
        subtitle="Unify your vision with the ESPOT global network. Drive massive growth, share in ecosystem profits, and lead the future of collaborative business."
        label="Partnership Ecosystem"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=90"
        accentColor="text-emerald-400"
      />

      {/* Founder Spotlight - Extremely High End */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/30 -z-10 blur-3xl rounded-full translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-16 items-center bg-white rounded-[3.5rem] p-12 lg:p-20 shadow-2xl shadow-emerald-900/5 border border-emerald-100"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full text-emerald-700 font-black text-xs uppercase tracking-widest border border-emerald-200">
                <Star className="w-3.5 h-3.5 fill-emerald-600" />
                Founding Partner Specialist
              </div>
              <h2 className="text-5xl font-black text-slate-900 leading-[1.1]">
                Flying Horse <br />
                <span className="text-emerald-600">Equestrian Nepal</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Our legacy foundation partner. Redefining modern horse activities through 
                a fusion of traditional Nepalese heritage and world-class luxury adventure. 
                A true pioneer in the ESPOT ecosystem.
              </p>
              <div className="flex gap-10">
                <div className="space-y-1">
                  <div className="text-3xl font-black text-slate-900">20+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Regions</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-slate-900">4.9/5</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Member Rating</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-black text-slate-900">Elite</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Growth Tier</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-600 rounded-[2.5rem] rotate-3 -z-10 group-hover:rotate-0 transition-transform duration-500 blur-2xl opacity-10" />
              <img 
                src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1000&q=80" 
                className="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover" 
                alt="Flying Horse" 
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black italic">
                    FH
                  </div>
                  <div>
                    <div className="font-black text-slate-900">Heritage Excellence</div>
                    <div className="text-xs font-bold text-slate-400">Nepal's Leading Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Types - Glassmorphism Grid */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-slate-900">The Partnership Tiers</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto tracking-tight">Select the path that aligns with your operational capacity and investment goals.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {PARTNER_TYPES.map((tier, i) => (
              <motion.div 
                key={tier.type}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} rounded-[2.5rem] opacity-0 group-hover:opacity-5 blur-2xl transition-opacity`} />
                
                <div className="relative h-full bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl group-hover:border-transparent transition-all overflow-hidden flex flex-col">
                  {/* Background Icon Watermark */}
                  <div className="absolute -top-10 -right-10 text-slate-50 group-hover:text-slate-100/50 transition-colors pointer-events-none">
                    <div className="scale-[4] opacity-20">{tier.icon}</div>
                  </div>

                  <div className={`w-16 h-16 rounded-2xl ${tier.light} flex items-center justify-center mb-8 shadow-inner`}>
                    <div className={`text-transparent bg-clip-text bg-gradient-to-br ${tier.color}`}>
                      {tier.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{tier.type} Partner</h3>
                  <h4 className="text-2xl font-black text-slate-900 mb-6 leading-tight">{tier.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed mb-10 flex-1">{tier.description}</p>
                  
                  <div className="space-y-4 mb-10">
                    {tier.benefits.map(b => (
                      <div key={b} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        {b}
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-4 rounded-2xl border-2 border-slate-100 group-hover:border-transparent group-hover:bg-gradient-to-br ${tier.color} group-hover:text-white font-black transition-all active:scale-95`}>
                    Start Qualification
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Ps Framework - Modern Dark Interactive section */}
      <section className="py-28 bg-[#0a1128] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
            <h2 className="text-5xl font-black tracking-tight leading-tight">The <span className="text-emerald-400">5 Ps</span> of Systematic Success</h2>
            <p className="text-slate-400 font-medium text-lg leading-relaxed">Our proprietary framework ensures that every partner integrated into the ecosystem is positioned for exponential revenue growth and brand longevity.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {FIVE_PS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square"
              >
                <div className="absolute inset-0 bg-white/5 rounded-[2rem] border border-white/10 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all flex flex-col items-center justify-center p-6 text-center" />
                <div className="relative flex flex-col items-center justify-center h-full p-6 text-center">
                  <div className="w-12 h-12 text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <h3 className="font-black text-xl mb-2">{p.title}</h3>
                  <p className="text-xs font-bold text-slate-500 group-hover:text-slate-300 uppercase tracking-widest transition-colors leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Roadmap */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6">
           <div className="flex items-center gap-6 mb-16">
             <div className="w-20 h-20 bg-emerald-600 rounded-[2rem] flex items-center justify-center text-white text-3xl shadow-xl shadow-emerald-900/40">
               <Target />
             </div>
             <div>
                <h2 className="text-4xl font-black text-slate-900">Partner Qualification Scorecard</h2>
                <p className="text-slate-500 font-medium">Transparent benchmarks for entry into our Global Network.</p>
             </div>
           </div>

           <div className="space-y-6">
             {[
               { t: "Business Integrity", d: "Documented history of reliability and tax compliance.", w: "30%" },
               { t: "Service Velocity", d: "Ability to scale fulfillment across multiple regions.", w: "25%" },
               { t: "Ecosystem Alignment", d: "Synergy with existing member values and brand aesthetics.", w: "20%" },
               { t: "Fiscal Stability", d: "Proof of cash flow health for long-term campaign stability.", w: "25%" }
             ].map((c, i) => (
               <motion.div 
                 key={c.t}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 bg-white rounded-3xl border border-slate-100 shadow-lg flex items-center justify-between gap-6 group hover:border-emerald-500/30 transition-all"
               >
                 <div className="flex-1">
                   <h3 className="text-xl font-black text-slate-900 mb-1">{c.t}</h3>
                   <p className="text-slate-500 font-bold text-sm leading-relaxed">{c.d}</p>
                 </div>
                 <div className="text-right">
                    <div className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Weight</div>
                    <div className="text-2xl font-black text-emerald-600">{c.w}</div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Top Gallery - Masonry-ish Grid */}
      <section className="py-28 bg-[#f8f9fc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-4">Market Leaders</h2>
              <p className="text-slate-500 font-medium">Top-performing partners in our ecosystem by member rating and revenue.</p>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 font-bold" />
                <input 
                  type="text" 
                  placeholder="Find a partner..." 
                  className="pl-12 pr-6 py-4 rounded-2xl border-none shadow-lg focus:ring-2 focus:ring-emerald-500 text-sm font-bold w-64 transition-all"
                  value={partnerQuery}
                  onChange={(e) => setPartnerQuery(e.target.value)}
                />
              </div>
              <select 
                className="px-6 py-4 rounded-2xl border-none shadow-lg focus:ring-2 focus:ring-emerald-500 text-sm font-black bg-white"
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
              >
                <option value="All">All Sectors</option>
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredPartners.map((p) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 hover:-translate-y-2 transition-all"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.name} />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur rounded-lg text-xs font-black text-slate-900 border border-slate-100">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      {p.rating}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-2">{p.type}</div>
                    <h3 className="text-xl font-black text-slate-900 mb-6 line-clamp-1">{p.name}</h3>
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-50">
                      <div className="text-center">
                        <div className="text-sm font-black text-slate-900">{p.growth}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-black text-slate-900">{p.campaigns}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active</div>
                      </div>
                    </div>
                    <Link to={`/profile/partner/${p.id}`} className="flex items-center justify-between group/link font-black text-xs uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">
                      View Performance Portfolio
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.2),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-black text-white mb-8">Ready to Scale Your Legacy?</h2>
          <p className="text-emerald-50 font-medium text-xl mb-12 max-w-2xl mx-auto leading-relaxed">Join the most advanced partnership ecosystem in the world and start your onboarding sprint today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate("/auth?mode=signup&role=Partner")}
              className="px-12 py-5 bg-white rounded-3xl text-emerald-700 font-black text-lg shadow-2xl hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
            >
              Apply to Partner Hub
            </button>
            <button className="px-12 py-5 bg-emerald-500 rounded-3xl text-white font-black text-lg border border-emerald-400 hover:bg-emerald-400 transition-all w-full sm:w-auto">
              Download Manifesto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function GlassMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-3">
      <p className="text-[11px] uppercase tracking-wide text-cyan-100">
        {label}
      </p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}
