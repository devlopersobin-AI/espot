import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../../components/Hero";
import SubNav from "../../components/SubNav";
import { cn } from "../../lib/utils";
import {
  Users,
  Star,
  ArrowRight,
  Award,
  Target,
  Zap,
  Search,
  Calendar,
  TrendingUp,
  Trophy,
  Medal,
  Sparkles,
  ShieldCheck,
  Globe,
  Briefcase
} from "lucide-react";

type Leader = {
  id: number;
  name: string;
  role: string;
  expertise: string;
  rating: number;
  image: string;
  impact: string;
};

export default function Leadership() {
  const subNav = [
    "Overview",
    "Elite Rankings",
    "Skills & Mastery",
    "Leadership Styles",
    "Executive Levels",
    "Development Workshops",
  ];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const [leaderQuery, setLeaderQuery] = useState("");
  const [expertiseFilter, setExpertiseFilter] = useState<
    | "All"
    | "Strategic Vision"
    | "Agile Leadership"
    | "Change Management"
    | "Team Building"
  >("All");
  const [workshopMode, setWorkshopMode] = useState<
    "All" | "Online" | "In-person" | "Hybrid"
  >("All");
  const navigate = useNavigate();

  const topLeaders: Leader[] = [
    {
      id: 1,
      name: "Robert Johnson",
      role: "CEO, TechCorp",
      expertise: "Strategic Vision",
      rating: 4.9,
      image: "https://picsum.photos/seed/l1/150/150",
      impact: "Scaled team 4x in 18 months",
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Founder, Innovate",
      expertise: "Agile Leadership",
      rating: 4.8,
      image: "https://picsum.photos/seed/l2/150/150",
      impact: "Launched 3 global product lines",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Director, GlobalOps",
      expertise: "Change Management",
      rating: 4.9,
      image: "https://picsum.photos/seed/l3/150/150",
      impact: "Improved retention by 27%",
    },
    {
      id: 4,
      name: "Linda Brown",
      role: "VP, Marketing",
      expertise: "Team Building",
      rating: 4.7,
      image: "https://picsum.photos/seed/l4/150/150",
      impact: "Built 5 cross-functional squads",
    },
  ];

  const workshops = [
    {
      title: "Executive Presence Masterclass",
      date: "Oct 15, 2026",
      duration: "2 Days",
      type: "In-person",
      image: "https://picsum.photos/seed/ws1/400/200",
      seats: 24,
    },
    {
      title: "Leading Through Change",
      date: "Nov 02, 2026",
      duration: "4 Weeks",
      type: "Online",
      image: "https://picsum.photos/seed/ws2/400/200",
      seats: 86,
    },
    {
      title: "Strategic Decision Making",
      date: "Nov 18, 2026",
      duration: "1 Day",
      type: "Hybrid",
      image: "https://picsum.photos/seed/ws3/400/200",
      seats: 38,
    },
  ];

  const filteredLeaders = useMemo(() => {
    return topLeaders.filter((leader) => {
      const byExpertise =
        expertiseFilter === "All" || leader.expertise === expertiseFilter;
      const byQuery =
        !leaderQuery.trim() ||
        `${leader.name} ${leader.role} ${leader.expertise}`
          .toLowerCase()
          .includes(leaderQuery.toLowerCase());
      return byExpertise && byQuery;
    });
  }, [topLeaders, expertiseFilter, leaderQuery]);

  const filteredWorkshops = useMemo(() => {
    return workshops.filter(
      (workshop) => workshopMode === "All" || workshop.type === workshopMode,
    );
  }, [workshops, workshopMode]);

  const skillData = [
    { name: "Strategic Thinking", score: 84 },
    { name: "Conflict Resolution", score: 71 },
    { name: "Delegation", score: 76 },
    { name: "Mentorship", score: 81 },
    { name: "Change Management", score: 73 },
    { name: "Public Speaking", score: 79 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Hero
        label="Executive Excellence"
        title="Forge Your Legacy as a Global Leader"
        subtitle="Benchmark your performance against the world's elite operators. Master the strategic pillars of modern leadership in a unified ecosystem."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
        accentColor="text-yellow-400"
      />

      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-slate-900 border-slate-900 bg-slate-50 shadow-sm sticky top-0 z-40"
      />

      <div className="flex-1 py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {activeTab === "Overview" && (
              <motion.div
                key="Overview"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="space-y-12"
              >
                {/* PILARS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                   <motion.div variants={itemVariants} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-2xl flex flex-col justify-between">
                      <div className="space-y-4">
                         <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                            <Trophy className="w-8 h-8" />
                         </div>
                         <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">The Leadership <br/> <span className="text-yellow-600">Operating System</span></h2>
                         <p className="text-slate-500 font-medium leading-relaxed max-w-lg">
                           Track how elite habits influence team culture, execution velocity, and retention outcomes through our 12-pillar KPI telemetry.
                         </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                         {[
                            { lbl: "Vision Clarity", val: 94 },
                            { lbl: "Decision Speed", val: 88 },
                            { lbl: "Trust Anchor", val: 96 }
                         ].map((stat, i) => (
                           <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.lbl}</p>
                              <p className="text-2xl font-black text-slate-900">{stat.val}%</p>
                           </div>
                         ))}
                      </div>
                   </motion.div>

                   <motion.div variants={itemVariants} className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                      <div className="relative z-10 space-y-6">
                         <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-100">Current Cohort</span>
                         </div>
                         <h2 className="text-3xl font-black uppercase tracking-tight leading-none">2026 Strategy <br/> <span className="text-yellow-400">Mastery FOCUS</span></h2>
                         <ul className="space-y-4 pt-4">
                            {[
                               "Adaptive Decision Systems under total uncertainty",
                               "High-Fidelity cross-functional alignment rituals",
                               "Mentorship-first cultural management flow"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-4 text-slate-400 font-medium text-sm leading-relaxed">
                                 <div className="w-5 h-5 bg-yellow-400/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                                 </div>
                                 {item}
                              </li>
                            ))}
                         </ul>
                      </div>
                      <Link to="/auth?mode=signup&role=Leader" className="relative z-10 mt-12 w-full py-5 bg-yellow-500 text-slate-900 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white transition-all text-center">
                         Apply for Certification
                      </Link>
                   </motion.div>
                </div>

                {/* KPI BARS SECTION */}
                <motion.div variants={itemVariants} className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-2xl">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                      <div className="space-y-2">
                         <h3 className="text-2xl font-black text-slate-900 uppercase">Core Competency Momentum</h3>
                         <p className="text-slate-500 font-medium">Real-time benchmark of the 2026 Leadership Cohort performance.</p>
                      </div>
                      <div className="flex items-center gap-6">
                         <div className="text-right">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Global Avg</p>
                            <p className="text-xl font-black text-slate-900">79.4%</p>
                         </div>
                         <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                            <TrendingUp className="w-6 h-6" />
                         </div>
                      </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {[
                         { lbl: "Strategic Thinking", val: 84, color: "bg-blue-600" },
                         { lbl: "Conflict Resolution", val: 71, color: "bg-emerald-600" },
                         { lbl: "Team Building", val: 76, color: "bg-purple-600" },
                         { lbl: "Mentorship Yield", val: 81, color: "bg-orange-600" },
                      ].map((skill, i) => (
                        <div key={i} className="space-y-3">
                           <div className="flex items-center justify-between text-sm font-black text-slate-900 uppercase tracking-tight">
                              <span>{skill.lbl}</span>
                              <span>{skill.val}%</span>
                           </div>
                           <div className="h-2.5 bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.val}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className={`h-full ${skill.color} rounded-full`} 
                              />
                           </div>
                        </div>
                      ))}
                   </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "Elite Rankings" && (
              <motion.div
                 key="Rankings"
                 initial="hidden"
                 animate="visible"
                 exit="hidden"
                 variants={containerVariants}
                 className="space-y-12"
              >
                 <div className="text-center space-y-4 mb-16">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-50 border border-yellow-100 rounded-full shadow-sm">
                       <Award className="w-4 h-4 text-yellow-600" />
                       <span className="text-[10px] font-black text-yellow-700 uppercase tracking-widest leading-none">2026 Global Board</span>
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight uppercase">Platform <span className="text-yellow-600">Elite</span></motion.h2>
                    <motion.p variants={itemVariants} className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                       Our ranking of the top-performing operators across 12 high-fidelity KPIs. Excellence is measured by impact, not just tenure.
                    </motion.p>
                 </div>

                 <div className="space-y-6">
                    {[
                      { name: "Julian Alcaraz", role: "Diamond Ambassador", kpi: "98%", rank: 1, expertise: "Strategic Vision", img: "JA", color: "bg-yellow-50 text-yellow-600" },
                      { name: "Sofia Zhang", role: "Platinum Catalyst", kpi: "94%", rank: 2, expertise: "Change Management", img: "SZ", color: "bg-slate-100 text-slate-500" },
                      { name: "Alexander Thorne", role: "Gold Strategist", kpi: "89%", rank: 3, expertise: "Agile Leadership", img: "AT", color: "bg-orange-50 text-orange-600" },
                      { name: "Marcus Chen", role: "Elite Member", kpi: "82%", rank: 4, expertise: "Team Building", img: "MC", color: "bg-blue-50 text-blue-600" },
                    ].map((leader, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-all group overflow-hidden relative"
                      >
                         <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                            <div className="flex items-center gap-8">
                               <div className="relative">
                                  <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center font-black text-xl shadow-inner uppercase", leader.color)}>
                                     {leader.img}
                                  </div>
                                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-2xl flex items-center justify-center border border-slate-100 font-black text-slate-900 shadow-xl">
                                     #{leader.rank}
                                  </div>
                               </div>
                               <div>
                                  <h3 className="text-xl font-black text-slate-900 group-hover:text-yellow-600 transition-colors uppercase tracking-tight mb-2">
                                     {leader.name}
                                  </h3>
                                  <div className="flex flex-wrap items-center gap-4">
                                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{leader.role}</span>
                                     <div className="h-4 w-px bg-slate-100" />
                                     <span className="text-[10px] font-black text-yellow-600 uppercase tracking-widest">{leader.expertise}</span>
                                  </div>
                               </div>
                            </div>
                            <div className="flex items-center gap-12 w-full md:w-auto">
                               <div className="space-y-2">
                                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mastery Metric</p>
                                  <div className="flex items-center gap-3">
                                     <div className="w-24 h-1.5 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                                        <div className="h-full bg-yellow-500" style={{ width: leader.kpi }} />
                                     </div>
                                     <span className="text-sm font-black text-slate-900">{leader.kpi}</span>
                                  </div>
                               </div>
                               <Link to="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-yellow-600 transition-all shadow-xl shadow-slate-200">
                                  Connect Elite
                               </Link>
                            </div>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </motion.div>
            )}

            {activeTab === "Skills & Mastery" && (
              <motion.div
                key="Skills"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[
                  { title: "Emotional EQ", icon: Zap, desc: "Master the art of high-pressure neural regulation and team empathy cycles.", score: 92 },
                  { title: "Decision Tech", icon: Target, desc: "Architect strategic decision trees using platform data telemetry.", score: 88 },
                  { title: "Visionary Flow", icon: Globe, desc: "Translate complex macro-trends into actionable micro-milestones.", score: 95 },
                  { title: "Trust Design", icon: ShieldCheck, desc: "Build durable execution trust through absolute transparency and logic.", score: 98 },
                  { title: "Conflict Mastery", icon: Award, desc: "Leverage friction as a tool for innovative problem solving and growth.", score: 81 },
                  { title: "Growth Engine", icon: Briefcase, desc: "Build sustainable recruitment and retention cycles across global teams.", score: 89 },
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-2xl hover:shadow-yellow-100/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                       <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-yellow-500 group-hover:text-white transition-all mb-6">
                          <skill.icon className="w-7 h-7" />
                       </div>
                       <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">{skill.title}</h3>
                       <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{skill.desc}</p>
                    </div>
                    <div className="pt-6 border-t border-slate-50 space-y-3">
                       <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <span>Cohort AVG Mastery</span>
                          <span className="text-slate-900">{skill.score}%</span>
                       </div>
                       <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-900 group-hover:bg-yellow-500 transition-colors" style={{ width: `${skill.score}%` }} />
                       </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "Executive Levels" && (
               <motion.div
                 key="Levels"
                 initial="hidden"
                 animate="visible"
                 exit="hidden"
                 variants={containerVariants}
                 className="max-w-4xl mx-auto space-y-6"
               >
                  {[
                     { l: 1, title: "Observer", desc: "Entry level leadership focusing on personal discipline and skill foundation." },
                     { l: 2, title: "Catalyst", desc: "Developing others and leading specific initiatives with measurable impact." },
                     { l: 3, title: "Strategist", desc: "Managing multiple teams and designing high-level operational strategy." },
                     { l: 4, title: "Visionary", desc: "Directing multi-sector growth and platform-wide ecosystem initiatives." },
                     { l: 5, title: "Elite Operator", desc: "Board-level governance and global excellence benchmarking." },
                  ].map((level, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl flex items-center gap-10 hover:shadow-2xl transition-all"
                    >
                       <div className="w-16 h-16 bg-slate-900 text-yellow-500 rounded-2xl flex items-center justify-center font-black text-2xl shrink-0">
                          {level.l}
                       </div>
                       <div className="space-y-1">
                          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{level.title}</h3>
                          <p className="text-slate-500 font-medium leading-relaxed">{level.desc}</p>
                       </div>
                       <ArrowRight className="w-6 h-6 text-slate-200 ml-auto group-hover:text-yellow-600 transition-colors" />
                    </motion.div>
                  ))}
               </motion.div>
            )}
            {activeTab === "Leadership Styles" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  name: "Transformational",
                  tone: "bg-blue-50 border-blue-200 text-blue-900",
                  desc: "Inspires teams with future vision and energizes change through shared purpose.",
                },
                {
                  name: "Servant",
                  tone: "bg-emerald-50 border-emerald-200 text-emerald-900",
                  desc: "Prioritizes team growth and enables high trust through people-first leadership.",
                },
                {
                  name: "Democratic",
                  tone: "bg-purple-50 border-purple-200 text-purple-900",
                  desc: "Uses participative decision loops to improve ownership and quality of execution.",
                },
                {
                  name: "Directive",
                  tone: "bg-amber-50 border-amber-200 text-amber-900",
                  desc: "Provides decisive command in high-risk or time-critical scenarios.",
                },
              ].map((style) => (
                <article
                  key={style.name}
                  className={`border rounded-2xl p-6 ${style.tone}`}
                >
                  <h3 className="text-xl font-semibold">{style.name}</h3>
                  <p className="text-sm mt-2 leading-relaxed opacity-90">
                    {style.desc}
                  </p>
                </article>
              ))}
            </div>
          )}

          {activeTab === "Development Workshops" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto space-y-4">
              {/* Navigation to signup page replaces QuickRegisterForm */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h2 className="text-xl font-semibold text-slate-900">
                  Upcoming leadership workshops
                </h2>
                <select
                  value={workshopMode}
                  onChange={(e) =>
                    setWorkshopMode(e.target.value as typeof workshopMode)
                  }
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="All">All formats</option>
                  <option value="Online">Online</option>
                  <option value="In-person">In-person</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredWorkshops.map((workshop) => (
                  <div
                    key={workshop.title}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                  >
                    <div className="h-40 bg-slate-200 relative">
                      <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-800">
                        {workshop.type}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-semibold text-slate-900">
                        {workshop.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {workshop.date} | {workshop.duration}
                      </p>
                      <p className="text-sm text-indigo-700 mt-2 font-medium">
                        {workshop.seats} seats remaining
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          navigate("/auth?mode=signup&role=Leader")
                        }
                        className="mt-4 w-full inline-flex justify-center py-2 rounded-lg bg-indigo-50 text-indigo-700 font-semibold hover:bg-indigo-100 transition-colors text-sm"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  note,
  icon,
}: {
  label: string;
  value: string;
  note: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
            {label}
          </p>
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mt-2">
            {value}
          </p>
        </div>
        <span className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
          {icon}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-indigo-700 font-medium mt-3">
        {note}
      </p>
    </article>
  );
}

function ProgressTile({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50">
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <p className="text-lg font-semibold text-slate-900 mt-1">{value}%</p>
      <div className="h-2 rounded-full bg-slate-200 mt-2 overflow-hidden">
        <div
          className="h-full rounded-full bg-indigo-600"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

