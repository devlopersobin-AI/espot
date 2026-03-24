import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import SubNav from "../../components/SubNav";
import { cn } from "../../lib/utils";

import { useNavigate } from "react-router-dom";
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
  Medal
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
    "Essentials",
    "Skills",
    "Styles",
    "Levels",
    "Global Rankings",
    "Top Leaders",
    "Workshops",
    "Reviews",
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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero
        title="Leadership"
        subtitle="Develop modern leadership capabilities, benchmark your growth, and learn from top operators across sectors."
        image="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80"
        accentColor="text-yellow-400"
      />

      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-gray-900 border-gray-900 bg-gray-50"
      />

      <div className="flex-1 py-8 sm:py-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {activeTab === "Overview" && (
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] gap-5 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Leadership performance cockpit
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Track how leadership habits influence team culture, execution
                  speed, and retention outcomes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                  <ProgressTile label="Clarity of Vision" value={82} />
                  <ProgressTile label="Decision Velocity" value={74} />
                  <ProgressTile label="Team Trust" value={88} />
                </div>

                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">
                    Competency momentum
                  </h3>
                  {skillData.slice(0, 4).map((skill) => (
                    <div key={skill.name} className="mb-3 last:mb-0">
                      <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.score}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"
                          style={{ width: `${skill.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900 text-white rounded-2xl p-6 border border-indigo-800 shadow-sm">
                <p className="text-xs uppercase tracking-[0.16em] text-indigo-200 font-semibold">
                  Leadership Focus
                </p>
                <h3 className="text-2xl font-semibold mt-2 tracking-tight">
                  2026 Cohort Priorities
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-indigo-100/90">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 mt-0.5" /> Adaptive decision systems
                    under uncertainty
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 mt-0.5" /> Cross-functional
                    alignment rituals
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 mt-0.5" /> Coaching-first management
                    approach
                  </li>
                </ul>
                <Link
                  to="/auth?mode=signup&role=Leader"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-indigo-200"
                >
                  Become a Leader <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {activeTab === "Essentials" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Emotional Intelligence",
                  desc: "Recognize emotional signals, respond calmly, and guide teams through pressure periods.",
                },
                {
                  title: "Clear Communication",
                  desc: "Translate strategic intent into role-based execution clarity and accountability.",
                },
                {
                  title: "Decisiveness",
                  desc: "Use bounded context and data to make timely, high-quality decisions.",
                },
                {
                  title: "Integrity and Trust",
                  desc: "Build durable trust through consistency, transparency, and ethical behavior.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          )}

          {activeTab === "Skills" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
              <h2 className="text-2xl font-semibold text-slate-900 mb-5">
                Leadership skill benchmarks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillData.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white border border-slate-200 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="font-medium text-slate-900">
                        {skill.name}
                      </span>
                      <span className="font-semibold text-indigo-700">
                        {skill.score}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full"
                        style={{ width: `${skill.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Styles" && (
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

          {activeTab === "Levels" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto space-y-4">
              {[
                "Level 1: Highly Capable Individual",
                "Level 2: Contributing Team Member",
                "Level 3: Competent Manager",
                "Level 4: Effective Leader",
                "Level 5: Executive Steward",
              ].map((level, index) => (
                <div
                  key={level}
                  className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{level}</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Progress through these levels by combining capability
                      growth with measurable team outcomes.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Global Rankings" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto space-y-10">
              <div className="text-center space-y-3 mb-12">
                 <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">2026 Global Leadership Leaderboard</h2>
                 <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                    The platform's elite ranking of modern operators, categorized by skill achievement, 
                    initiative impact, and mentorship KPI mastery.
                 </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                 {[
                   { name: "Julian Alcaraz", role: "Diamond Ambassador", points: "2,490 pts", kpi: "98%", rank: 1, expertise: "Strategic Vision", img: "JA", color: "bg-amber-50 text-amber-500", award: Trophy, awardColor: "text-amber-500" },
                   { name: "Sofia Zhang", role: "Platinum Catalyst", points: "2,150 pts", kpi: "94%", rank: 2, expertise: "Change Management", img: "SZ", color: "bg-slate-50 text-slate-400", award: Medal, awardColor: "text-slate-400" },
                   { name: "Alexander Thorne", role: "Gold Strategist", points: "1,980 pts", kpi: "89%", rank: 3, expertise: "Agile Leadership", img: "AT", color: "bg-orange-50 text-orange-500", award: Medal, awardColor: "text-orange-400" },
                   { name: "Marcus Chen", role: "Elite Member", points: "1,740 pts", kpi: "82%", rank: 4, expertise: "Team Building", img: "MC", color: "bg-blue-50 text-blue-500" },
                   { name: "Elena Rodriguez", role: "Operations Lead", points: "1,550 pts", kpi: "78%", rank: 5, expertise: "Strategic Vision", img: "ER", color: "bg-indigo-50 text-indigo-500" },
                 ].map((leader, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/40 hover:scale-[1.01] transition-transform duration-500 group relative overflow-hidden">
                       {leader.rank <= 3 && (
                          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                             <leader.award className={cn("w-16 h-16", leader.awardColor)} />
                          </div>
                       )}
                       <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                          <div className="flex items-center gap-8">
                             <div className="relative">
                                <div className={cn("w-20 h-20 rounded-[2rem] flex items-center justify-center font-black text-xl shadow-inner", leader.color)}>
                                   {leader.img}
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-2xl flex items-center justify-center border border-slate-100 font-black text-slate-900 shadow-xl">
                                   #{leader.rank}
                                </div>
                             </div>
                             <div>
                                <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none mb-2 group-hover:text-blue-600 transition-colors uppercase">{leader.name}</h3>
                                <div className="flex items-center gap-4">
                                   <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">{leader.role}</p>
                                   <div className="h-4 w-px bg-slate-100" />
                                   <p className="text-[12px] font-black text-indigo-500 uppercase tracking-widest">{leader.expertise}</p>
                                </div>
                             </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
                             <div className="space-y-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Skill Mastery KPI</p>
                                <div className="flex items-center gap-3">
                                   <div className="h-2 w-24 bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
                                      <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: leader.kpi }} />
                                   </div>
                                   <span className="text-sm font-black text-slate-900">{leader.kpi}</span>
                                </div>
                             </div>
                             <div className="text-right md:text-left space-y-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Influence</p>
                                <p className="text-lg font-black text-slate-900">{leader.points}</p>
                             </div>
                             <div className="hidden md:flex flex-col items-end justify-center">
                                <Link
                                  to={`/auth?mode=signup&role=Leader`}
                                  className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200 active:scale-95"
                                >
                                   Challenge Peer
                                </Link>
                             </div>
                          </div>
                       </div>
                    </div>
                 ))}
               </div>

               {/* ─── How Rankings Work ───────────────────── */}
               <div className="space-y-12 py-4">
                  <div className="text-center space-y-3">
                     <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-4">
                        <TrendingUp className="w-4 h-4 text-indigo-600" />
                        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Ranking System Explained</span>
                     </div>
                     <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">How Do You Rank Up?</h2>
                     <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                        Your global rank is a composite of four live KPI pillars, updated monthly. 
                        Every action on the platform contributes to your score.
                     </p>
                  </div>

                  {/* KPI Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     {[
                       { 
                         label: "Skill Achievement", weight: "30%", 
                         desc: "Complete platform certifications, attend workshops, and pass skill assessments to accumulate points.",
                         actions: ["Earn certifications (+50 pts each)", "Pass skill benchmarks (+30 pts)", "Complete leadership modules (+20 pts)"],
                         color: "border-blue-100 bg-blue-50", tag: "text-blue-600 bg-blue-100", num: "01"
                       },
                       { 
                         label: "Mentorship Yield", weight: "25%", 
                         desc: "Guide other members, host sessions, and receive verified endorsements from your mentees.",
                         actions: ["Host a mentoring session (+40 pts)", "Receive a mentee endorsement (+25 pts)", "Complete a mentor pathway (+60 pts)"],
                         color: "border-emerald-100 bg-emerald-50", tag: "text-emerald-600 bg-emerald-100", num: "02"
                       },
                       { 
                         label: "Initiative Impact", weight: "25%", 
                         desc: "Create and lead ecosystem initiatives, campaigns, events, or community projects that drive measurable outcomes.",
                         actions: ["Launch a platform initiative (+80 pts)", "Drive an event with 50+ attendees (+60 pts)", "Publish a network challenge (+35 pts)"],
                         color: "border-amber-100 bg-amber-50", tag: "text-amber-600 bg-amber-100", num: "03"
                       },
                       { 
                         label: "Ecosystem Karma", weight: "20%", 
                         desc: "How you show up matters. Ratings from peers, network votes, and community contributions shape your karma score.",
                         actions: ["Receive 5-star peer review (+15 pts)", "Community upvote on contribution (+5 pts)", "Featured in ecosystem digest (+45 pts)"],
                         color: "border-indigo-100 bg-indigo-50", tag: "text-indigo-600 bg-indigo-100", num: "04"
                       },
                     ].map((pillar, i) => (
                       <div key={i} className={`rounded-[2rem] border p-8 ${pillar.color} relative overflow-hidden group hover:shadow-xl transition-all duration-300`}>
                          <div className="absolute top-6 right-6 text-6xl font-black text-black/5 group-hover:text-black/10 transition-all">{pillar.num}</div>
                          <div className="space-y-4">
                             <div className="flex items-center justify-between">
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">{pillar.label}</h3>
                                <span className={`text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest ${pillar.tag}`}>{pillar.weight}</span>
                             </div>
                             <p className="text-sm text-slate-600 font-medium leading-relaxed">{pillar.desc}</p>
                             <div className="space-y-2 pt-2 border-t border-black/5">
                                {pillar.actions.map((action, j) => (
                                   <div key={j} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                                      {action}
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>

                  {/* Rank Progression Tiers */}
                  <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-8">
                     <div className="text-center space-y-2">
                        <h3 className="text-2xl font-black uppercase tracking-tight">5-Tier Rank Progression</h3>
                        <p className="text-slate-400 font-medium text-sm">Reach higher tiers to unlock exclusive platform privileges, event access, and ecosystem influence.</p>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                        {[
                          { name: "Observer", pts: "0–499 pts", perks: "Basic profile & events", color: "bg-slate-700 border-slate-600" },
                          { name: "Initiate", pts: "500–999 pts", perks: "Mentor access & voting rights", color: "bg-blue-900 border-blue-700" },
                          { name: "Catalyst", pts: "1,000–1,749 pts", perks: "Feature on Top Leaders + initiatives", color: "bg-indigo-900 border-indigo-700" },
                          { name: "Strategist", pts: "1,750–2,299 pts", perks: "Summit invites & board reports", color: "bg-purple-900 border-purple-700" },
                          { name: "Diamond Operator", pts: "2,300+ pts", perks: "Full ecosystem governance rights", color: "bg-amber-900 border-amber-600" },
                        ].map((tier, i) => (
                           <div key={i} className={`rounded-2xl border p-5 ${tier.color} space-y-3`}>
                              <div className="text-[9px] font-black text-white/50 uppercase tracking-widest">{`Tier ${i + 1}`}</div>
                              <div className="text-sm font-black text-white uppercase leading-tight">{tier.name}</div>
                              <div className="text-[10px] font-bold text-white/60">{tier.pts}</div>
                              <div className="text-[10px] text-white/70 font-medium leading-relaxed border-t border-white/10 pt-3">{tier.perks}</div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* CTA */}
               <div className="bg-indigo-50 rounded-[2.5rem] p-12 border border-indigo-100 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 bg-white rounded-3xl shadow-xl shadow-indigo-200/40">
                     <Target className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="space-y-2">
                     <h3 className="text-2xl font-black text-slate-900 uppercase">Benchmark Your Leadership</h3>
                     <p className="text-slate-500 font-medium max-w-xl">
                        Join the global network to track your growth across 12 leadership KPIs 
                        and unlock your rank in the 2026 cohort.
                     </p>
                  </div>
                  <Link
                    to="/auth?mode=signup&role=Leader"
                    className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-indigo-200 transition-all active:scale-95"
                  >
                     Get Ranked Today
                  </Link>
               </div>
            </div>
          )}
          {activeTab === "Top Leaders" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <label className="md:col-span-2">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">
                      Search leaders
                    </span>
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        value={leaderQuery}
                        onChange={(e) => setLeaderQuery(e.target.value)}
                        placeholder="Search by name, role, expertise"
                        className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </label>
                  <label>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">
                      Expertise
                    </span>
                    <select
                      value={expertiseFilter}
                      onChange={(e) =>
                        setExpertiseFilter(
                          e.target.value as typeof expertiseFilter,
                        )
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="All">All expertise</option>
                      <option value="Strategic Vision">Strategic Vision</option>
                      <option value="Agile Leadership">Agile Leadership</option>
                      <option value="Change Management">Change Management</option>
                      <option value="Team Building">Team Building</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredLeaders.map((leader) => (
                  <Link
                    key={leader.id}
                    to={`/profile/leader/${leader.id}`}
                    className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-indigo-300 transition-all group"
                  >
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-slate-50 group-hover:ring-indigo-50 transition-all">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-medium text-indigo-600 mb-1">
                      {leader.role}
                    </p>
                    <p className="text-xs text-slate-500 mb-2">
                      {leader.expertise}
                    </p>
                    <p className="text-xs text-slate-600 mb-3">
                      {leader.impact}
                    </p>
                    <div className="flex items-center justify-center text-sm font-medium text-amber-600">
                      <Star className="w-4 h-4 mr-1 fill-amber-500" />{" "}
                      {leader.rating}
                    </div>
                  </Link>
                ))}
              </div>

              {filteredLeaders.length === 0 && (
                <div className="text-center py-10 bg-white border border-dashed border-slate-300 rounded-2xl">
                  <p className="font-semibold text-slate-700">
                    No leaders match this filter.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "Workshops" && (
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

          {activeTab === "Reviews" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto space-y-5">
              {[
                {
                  name: "Alex Turner",
                  role: "Startup Founder",
                  text: "This module gave me a practical leadership operating system. Our team decision cycle is now much faster.",
                  rating: 5,
                  image: "https://picsum.photos/seed/lrev1/100/100",
                },
                {
                  name: "Samantha Lee",
                  role: "VP of Engineering",
                  text: "The workshop content was immediately actionable, especially for leading distributed teams.",
                  rating: 5,
                  image: "https://picsum.photos/seed/lrev2/100/100",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4.5 h-4.5 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {review.name}
                      </p>
                      <p className="text-sm text-slate-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TopMetric({
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
