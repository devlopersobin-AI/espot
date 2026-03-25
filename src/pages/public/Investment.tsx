import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  BadgeCheck,
  Briefcase,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Landmark,
  Percent,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import Hero from "../../components/Hero";
import SubNav from "../../components/SubNav";
import { investmentOpportunities } from "./investmentContent";

export default function Investment() {
  const subNav = [
    "Opportunities",
    "Funding Stages",
    "Investor Network",
    "Revenue Ecosystem",
    "Investment Models",
    "Advisory",
  ];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const [query, setQuery] = useState("");
  const [sectorFilter, setSectorFilter] = useState<
    | "All"
    | "Equestrian"
    | "Events"
    | "Beauty & Spa"
    | "Wellness & Fitness"
    | "Tours & Travel"
    | "Restaurants & Catering"
    | "Multimedia Production"
    | "Events & Wedding Management"
  >("All");

  const filteredOpportunities = useMemo(() => {
    return investmentOpportunities.filter((opportunity) => {
      const matchesSector =
        sectorFilter === "All" || opportunity.sector === sectorFilter;
      const text =
        `${opportunity.title} ${opportunity.sector} ${opportunity.stage} ${opportunity.location}`.toLowerCase();
      const matchesQuery = !query.trim() || text.includes(query.toLowerCase());
      return matchesSector && matchesQuery;
    });
  }, [query, sectorFilter]);

  const stageBlocks = [
    {
      stage: "Seed",
      description:
        "Validate product-market fit, lock in a repeatable use case, and prove first revenue loops.",
      focus: "MVP launch, founder-market fit, and early customer proof.",
      metrics: [
        "3-6 month runway planning",
        "Pilot revenue milestones",
        "Core hiring blueprint",
      ],
    },
    {
      stage: "Series A",
      description:
        "Scale distribution channels, improve retention, and establish predictable growth economics.",
      focus: "Regional expansion and revenue engine standardization.",
      metrics: [
        "CAC and LTV discipline",
        "Ops playbooks for growth",
        "Partner-led acquisition",
      ],
    },
    {
      stage: "Growth",
      description:
        "Strengthen governance, optimize margins, and prepare for strategic capital and market expansion.",
      focus: "Systemized growth and board-level investor readiness.",
      metrics: [
        "Enterprise risk controls",
        "Cross-market expansion",
        "Strategic M&A positioning",
      ],
    },
  ];

  const investorNetwork = [
    {
      name: "Himalayan Venture Circle",
      thesis: "Early-stage FinTech and digital infrastructure",
      members: "42 active investors",
      checkSize: "$75k - $300k",
      speed: "Avg. decision in 18 days",
    },
    {
      name: "Impact Growth Alliance",
      thesis: "Climate, AgriTech, and social impact ventures",
      members: "31 active investors",
      checkSize: "$120k - $500k",
      speed: "Avg. decision in 24 days",
    },
    {
      name: "Scale Nepal Capital",
      thesis: "Series A/B growth-stage companies",
      members: "24 active investors",
      checkSize: "$400k - $2M",
      speed: "Avg. decision in 29 days",
    },
  ];

  const statCards = [
    {
      label: "Live Opportunities",
      value: "68",
      delta: "+12 this month",
      icon: Sparkles,
    },
    {
      label: "Capital Matched",
      value: "$8.2M",
      delta: "Across 2026 cohorts",
      icon: Banknote,
    },
    {
      label: "Active Investors",
      value: "97",
      delta: "Verified and onboarding",
      icon: Users,
    },
    {
      label: "Success Rate",
      value: "74%",
      delta: "Reached due diligence",
      icon: BadgeCheck,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero
        bgColor="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"
        accentColor="text-cyan-200"
        title="Investment"
        subtitle="Discover high-potential ventures, connect with active investors, and move from pitch to growth with structured support."
        label="Module"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      />

      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-emerald-700 border-emerald-500 bg-emerald-50"
      />

      <div className="flex-1 bg-slate-50 py-8 sm:py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {activeTab === "Opportunities" && (
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] gap-5 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-5">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                    <label className="md:col-span-2">
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-400 mb-2">
                        Search opportunities
                      </span>
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Search by venture, sector, stage, or city"
                          className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    </label>

                    <label>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-400 mb-2">
                        Sector
                      </span>
                      <select
                        value={sectorFilter}
                        onChange={(e) =>
                          setSectorFilter(e.target.value as typeof sectorFilter)
                        }
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="All">All sectors</option>
                        <option value="Equestrian">Equestrian</option>
                        <option value="Events">Events</option>
                        <option value="Beauty & Spa">Beauty and Spa</option>
                        <option value="Wellness & Fitness">
                          Wellness and Fitness
                        </option>
                        <option value="Tours & Travel">Tours and Travel</option>
                        <option value="Restaurants & Catering">
                          Restaurants and Catering
                        </option>
                        <option value="Multimedia Production">
                          Multimedia Production
                        </option>
                        <option value="Events & Wedding Management">
                          Events and Wedding Management
                        </option>
                      </select>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {filteredOpportunities.map((opportunity) => {
                    const progress = Math.max(
                      8,
                      Math.min(
                        100,
                        Math.round(
                          (opportunity.raised / opportunity.target) * 100,
                        ),
                      ),
                    );

                    return (
                      <article
                        key={opportunity.id}
                        className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-3 gap-3">
                          <span className="text-xs font-bold uppercase tracking-wide text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                            {opportunity.sector}
                          </span>
                          <span
                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${opportunity.fit === "High" ? "text-cyan-700 bg-cyan-50" : "text-amber-700 bg-amber-50"}`}
                          >
                            {opportunity.fit} fit
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                          {opportunity.title}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1.5">
                          {opportunity.stage} | {opportunity.location}
                        </p>
                        <p className="text-sm text-slate-700 mt-3">
                          {opportunity.traction}
                        </p>

                        <div className="mt-4">
                          <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1.5">
                            <span>Round progress</span>
                            <span>{progress}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <p className="text-xs text-slate-500 mt-2">
                            Raised ${opportunity.raised}k of $
                            {opportunity.target}k target
                          </p>
                        </div>

                        <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">
                          Ticket Size: {opportunity.ticket}
                        </div>

                        <Link
                          to={`/investment/${opportunity.slug}`}
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                        >
                          View details <ArrowRight className="w-4 h-4" />
                        </Link>
                      </article>
                    );
                  })}
                </div>

                {filteredOpportunities.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
                    <p className="text-lg font-semibold text-slate-700">
                      No opportunities match your filters.
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                      Try a broader keyword or switch sector to All.
                    </p>
                  </div>
                )}
              </div>

              <aside className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm h-fit">
                <div className="p-5 sm:p-6 bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 text-white">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-200">
                    Live Deal Room
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight mt-2">
                    Investor Match Pulse
                  </h3>
                  <p className="text-sm text-cyan-100/85 mt-2 leading-relaxed">
                    Weekly-ranked opportunities based on traction quality,
                    documentation score, and investor intent.
                  </p>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      This Week
                    </p>
                    <div className="mt-2 space-y-2">
                      <MetricRow label="New investor intros" value="31" />
                      <MetricRow label="Due diligence started" value="14" />
                      <MetricRow label="Term sheets drafted" value="6" />
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-3.5">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Upcoming sessions
                    </p>
                    <div className="mt-2.5 space-y-2.5 text-sm text-slate-700">
                      <p className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-slate-400" /> Seed
                        Round Clinic - Mar 21
                      </p>
                      <p className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-slate-400" />{" "}
                        Investor Q and A - Mar 24
                      </p>
                      <p className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-slate-400" /> Due
                        Diligence Sprint - Mar 29
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 text-white px-4 py-3 text-sm font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Book Investment Desk <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </aside>
            </div>
          )}

          {activeTab === "Funding Stages" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Each stage includes a structured checklist, capital readiness
                  score, and timeline support so founders avoid random
                  fundraising and enter investor meetings with clear narratives.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {stageBlocks.map((block) => (
                  <article
                    key={block.stage}
                    className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {block.stage}
                    </h3>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {block.description}
                    </p>
                    <p className="text-sm text-emerald-700 mt-4 font-medium">
                      Focus: {block.focus}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {block.metrics.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-slate-700 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Capital Readiness Trend
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Average cohort score progression over the last three cycles.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <TrendBar label="Cycle 1" value={61} />
                  <TrendBar label="Cycle 2" value={74} />
                  <TrendBar label="Cycle 3" value={83} />
                </div>
              </div>
            </div>
          )}

          {activeTab === "Investor Network" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {investorNetwork.map((network) => (
                <article
                  key={network.name}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {network.name}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {network.thesis}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full">
                        <Users className="w-3.5 h-3.5" />
                        {network.members}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                        <Banknote className="w-3.5 h-3.5" />
                        {network.checkSize}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                        <ChartNoAxesCombined className="w-3.5 h-3.5" />
                        {network.speed}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />{" "}
                      Verified profiles
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Handshake className="w-4 h-4 text-cyan-600" /> Curated
                      match process
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BadgeCheck className="w-4 h-4 text-blue-600" /> Feedback
                      in every cycle
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

          {activeTab === "Revenue Ecosystem" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
               {/* VENTURE TYPES FOCUS */}
               <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full">
                           <ShieldCheck className="w-4 h-4 text-blue-400" />
                           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-100">Core Strategy</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">Insource <br/> <span className="text-blue-400">Ventures</span></h2>
                        <p className="text-slate-400 font-medium text-lg leading-relaxed">
                          Venture projects and investments managed, operated, and executed within the E-SPOT platform and its core team. Full support, resources, and oversight are provided by our in-house experts to ensure maximum delivery fidelity.
                        </p>
                        <div className="flex items-center gap-4">
                           <div className="px-6 py-3 bg-white/10 border border-white/10 rounded-2xl">
                              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</p>
                              <p className="text-sm font-bold text-white uppercase">Primary Focus</p>
                           </div>
                           <div className="px-6 py-3 bg-white/10 border border-white/10 rounded-2xl">
                              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Oversight</p>
                              <p className="text-sm font-bold text-white uppercase">100% In-House</p>
                           </div>
                        </div>
                     </div>
                     <div className="bg-white/5 backdrop-blur-3xl rounded-[2rem] p-8 border border-white/10 space-y-6">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                              <TrendingUp className="w-6 h-6 text-white" />
                           </div>
                           <div>
                              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Growth Vector</p>
                              <p className="text-lg font-black uppercase tracking-tight">Ecosystem Synergy</p>
                           </div>
                        </div>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">
                          By keeping ventures in-house, we leverage the full strength of our 10 user personas and unified membership model to drive recurring revenue and cross-platform value.
                        </p>
                     </div>
                  </div>
               </div>

               {/* OUTSOURCE VENTURES FOCUS */}
               <div className="bg-white border border-slate-200 rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px] -mr-48 -mt-48" />
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full">
                           <Handshake className="w-4 h-4 text-emerald-600" />
                           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-700">Strategic Partnerships</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-slate-900">Outsource <br/> <span className="text-emerald-500">Ventures</span></h2>
                        <p className="text-slate-500 font-medium text-lg leading-relaxed">
                          Partner-led ventures where E-SPOT provides capital, platform reach, or infrastructure, but daily operations are managed by external founders and companies under joint agreements.
                        </p>
                        <div className="flex items-center gap-4">
                           <div className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
                              <p className="text-sm font-bold text-slate-900 uppercase">Growth Engine</p>
                           </div>
                           <div className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Oversight</p>
                              <p className="text-sm font-bold text-slate-900 uppercase">Joint/Franchise</p>
                           </div>
                        </div>
                     </div>
                     <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 space-y-6">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                              <TrendingUp className="w-6 h-6 text-white" />
                           </div>
                           <div>
                              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Growth Vector</p>
                              <p className="text-lg font-black text-slate-900 uppercase tracking-tight">Ecosystem Scale</p>
                           </div>
                        </div>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed">
                          By partnering with proven operators globally, we rapidly scale the E-SPOT brand and diversify the investor revenue base without adding operational bottlenecks.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                     <div className="space-y-2">
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Platform Profitability</h2>
                        <p className="text-slate-500 font-medium max-w-2xl">E-SPOT generates sustainable yields through a diversified ecosystem of high-premium services. Every sector below operates as a strategic revenue engine.</p>
                     </div>
                     <Link to="/services" className="px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200">View Catalog</Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { name: "Equestrian", path: "/services/equestrian", color: "from-amber-500/10 to-transparent", count: "12 Services", yield: "+18.2%", icon: Building2 },
                      { name: "Beauty & Spa", path: "/services/beauty-spa", color: "from-rose-500/10 to-transparent", count: "08 Services", yield: "+22.4%", icon: Sparkles },
                      { name: "Wellness & Fitness", path: "/services/wellness", color: "from-emerald-500/10 to-transparent", count: "15 Services", yield: "+14.8%", icon: Users },
                      { name: "Tours & Travel", path: "/services/travel", color: "from-blue-500/10 to-transparent", count: "10 Services", yield: "+19.1%", icon: Landmark },
                      { name: "Restaurants & Catering", path: "/services/restaurants", color: "from-orange-500/10 to-transparent", count: "06 Services", yield: "+15.5%", icon: Building2 },
                      { name: "Multimedia Production", path: "/services/multimedia", color: "from-indigo-500/10 to-transparent", count: "04 Services", yield: "+28.2%", icon: Sparkles },
                      { name: "Events & Wedding", path: "/services/events", color: "from-fuchsia-500/10 to-transparent", count: "09 Services", yield: "+24.6%", icon: CalendarDays },
                      { name: "Global Outsourcing", path: "/services/outsourcing", color: "from-slate-500/10 to-transparent", count: "05 Services", yield: "+31.0%", icon: Handshake },
                      { name: "Training Academy", path: "/training", color: "from-cyan-500/10 to-transparent", count: "50+ Courses", yield: "+12.4%", icon: GraduationCap },
                    ].map((sector, i) => (
                      <Link 
                        key={i}
                        to={sector.path}
                        className="group relative overflow-hidden bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-500 hover:-translate-y-2"
                      >
                         <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                         <div className="relative z-10 space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                               <sector.icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                            </div>
                            <div>
                               <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">{sector.name}</h3>
                               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sector.count}</p>
                            </div>
                            <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                               <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Yield: {sector.yield}</span>
                               <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                            </div>
                         </div>
                      </Link>
                    ))}
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-emerald-950 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-emerald-500/20 transition-all duration-1000" />
                     <div className="relative z-10 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                           <TrendingUp className="w-3 h-3 text-emerald-400" />
                           <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">High Yield Asset</span>
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tight">Equestrian Mastery</h3>
                        <p className="text-emerald-100/70 text-sm font-medium leading-relaxed">Our flagship Equestrian division projects a 35% growth in elite memberships and stable management services over the next 18 months.</p>
                        <button className="px-6 py-3 bg-white text-emerald-950 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-50 transition-all">Explore Asset</button>
                     </div>
                  </div>
                  <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-blue-500/20 transition-all duration-1000" />
                     <div className="relative z-10 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                           <ShieldCheck className="w-3 h-3 text-blue-400" />
                           <span className="text-[9px] font-black uppercase tracking-widest text-blue-400">Core Infrastructure</span>
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tight">Tech & Outsourcing</h3>
                        <p className="text-blue-100/70 text-sm font-medium leading-relaxed">Platform-wide multimedia production and outsourcing services form the backbone of our recurring B2B service revenue model.</p>
                        <button className="px-6 py-3 bg-white text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-all">Review Portfolio</button>
                     </div>
                  </div>
               </div>

               {/* TRAINING ACADEMY HIGHLIGHT */}
               <div className="grid grid-cols-1 mt-8">
                  <div className="bg-cyan-950 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-cyan-500/20 transition-all duration-1000" />
                     <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="space-y-6 max-w-2xl">
                           <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                              <GraduationCap className="w-3 h-3 text-cyan-400" />
                              <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400">Yield Generator</span>
                           </div>
                           <h3 className="text-3xl font-black uppercase tracking-tight">Training Academy Revenue</h3>
                           <p className="text-cyan-100/70 text-sm font-medium leading-relaxed">The training E-SPOT provides is fully monetized, serving as a primary revenue generator. Advanced curriculums, investor certifications, and upskilling pathways form a high-margin business segment driving organic growth.</p>
                        </div>
                        <button className="px-8 py-4 bg-cyan-500 text-cyan-950 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-900">View Curriculum</button>
                     </div>
                  </div>
               </div>
            </div>
          )}

          {activeTab === "Investment Models" && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
              {/* SMPI */}
              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110" />
                <div className="relative z-10 space-y-10">
                  <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                        <BadgeCheck className="w-4 h-4 text-blue-600" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-900">Tier: Entry to Professional</span>
                      </div>
                      <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">Standard Membership & <br/> Partnership Investment (SMPI)</h2>
                      <p className="text-slate-500 font-medium max-w-2xl text-lg">Available for Silver, Gold, Diamond, Platinum, and Crown tiers.</p>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Duration</p>
                       <p className="text-3xl font-black text-slate-900">5-YEAR EXIT</p>
                    </div>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { title: "Be Healthy", icon: Sparkles, items: ["Membership Included", "5-Year Wellness Package"] },
                      { title: "Be Wealthy", icon: Banknote, items: ["One-time Investment", "Partnership Ownership", "Estimated returns by tier"] },
                      { title: "Be Successful", icon: TrendingUp, items: ["Life & Business Ecosystem", "Entrepreneur Participation", "Elite Arena Access"] },
                    ].map((feature, i) => (
                      <div key={i} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-blue-200 transition-all">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                           <feature.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4">{feature.title}</h3>
                        <ul className="space-y-3">
                           {feature.items.map((item, j) => (
                             <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                {item}
                             </li>
                           ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* EMPI & PMPI GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 {/* EMPI */}
                 <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-emerald-500/20 transition-all duration-1000" />
                    <div className="relative z-10 space-y-8">
                       <header className="space-y-4">
                          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/20 backdrop-blur-md rounded-full border border-emerald-500/30">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-100">Tier: High Level Engagement</span>
                          </div>
                          <h3 className="text-3xl font-black uppercase tracking-tight leading-tight">Elite Membership & <br/> Partnership (EMPI)</h3>
                          <p className="text-emerald-100/60 font-medium">Strategic/business involvement, equity ownership, and maximum exit flexibility.</p>
                       </header>

                       <div className="space-y-4">
                          {[
                            { role: "Full-Time Partner", desc: "Active in daily business", discount: "45% OFF membership", ext: "35% OFF family/friends" },
                            { role: "Part-Time Partner", desc: "Strategic oversight", discount: "45% OFF membership", ext: "35% OFF family/friends" },
                            { role: "Silent Partner", desc: "Capital participation only", discount: "45% OFF membership", ext: "35% OFF family/friends" },
                          ].map((partner, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                               <div className="flex items-center justify-between mb-3">
                                  <h4 className="font-black uppercase tracking-tight text-emerald-400">{partner.role}</h4>
                                  <div className="px-3 py-1 bg-emerald-500/20 rounded-lg text-[9px] font-black text-emerald-400 uppercase tracking-widest">{partner.desc}</div>
                               </div>
                               <div className="flex flex-wrap gap-4 mt-4">
                                  <div className="flex items-center gap-2">
                                     <Percent className="w-3.5 h-3.5 text-slate-500" />
                                     <span className="text-xs font-bold text-slate-300">{partner.discount}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                     <Users className="w-3.5 h-3.5 text-slate-500" />
                                     <span className="text-xs font-bold text-slate-300">{partner.ext}</span>
                                  </div>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 {/* PMPI */}
                 <div className="bg-white border border-slate-200 rounded-[3.rem] p-10 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 group-hover:bg-slate-100 transition-all duration-1000" />
                    <div className="relative z-10 space-y-8">
                       <header className="space-y-4">
                          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                            <Briefcase className="w-4 h-4 text-blue-600" />
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-900">Tier: Management Participation</span>
                          </div>
                          <h3 className="text-3xl font-black uppercase tracking-tight leading-tight text-slate-900">Premium Membership & <br/> Partnership (PMPI)</h3>
                          <p className="text-slate-500 font-medium">Lower entry investment, management roles, and profit-based returns with 5-year exit.</p>
                       </header>

                       <div className="space-y-4">
                          {[
                            { role: "Full-Time Partner", desc: "Active management role", discount: "40% OFF annual", ext: "30% OFF family/friends" },
                            { role: "Part-Time Partner", desc: "Part-time management", discount: "35% OFF annual", ext: "30% OFF family/friends" },
                            { role: "Advisory Partner", desc: "Advisory role only", discount: "25% OFF annual", ext: "15% OFF family/friends" },
                          ].map((partner, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-all">
                               <div className="flex items-center justify-between mb-3">
                                  <h4 className="font-black uppercase tracking-tight text-blue-600">{partner.role}</h4>
                                  <div className="px-3 py-1 bg-blue-500/10 rounded-lg text-[9px] font-black text-blue-600 uppercase tracking-widest">{partner.desc}</div>
                               </div>
                               <div className="grid grid-cols-2 gap-4 mt-4 text-xs font-bold text-slate-500">
                                  <div className="flex items-center gap-2"><Percent className="w-3.5 h-3.5" /> {partner.discount}</div>
                                  <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5" /> {partner.ext}</div>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          )}

          {activeTab === "Advisory" && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <InfoCard
                  icon={<Landmark className="w-5 h-5" />}
                  title="Deal Structuring"
                  text="Define valuation range, dilution boundary, and clean term-sheet framing before investor outreach."
                />
                <InfoCard
                  icon={<Building2 className="w-5 h-5" />}
                  title="Investor Readiness"
                  text="Refine pitch narrative, financial model depth, and due diligence packaging for investor confidence."
                />
                <InfoCard
                  icon={<Banknote className="w-5 h-5" />}
                  title="Capital Planning"
                  text="Build 18-24 month runway scenarios tied to hiring velocity, burn controls, and growth milestones."
                />
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-emerald-50/70 p-5 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Ready for an investment readiness audit?
                    </h3>
                    <p className="text-sm text-slate-600 mt-1.5">
                      Get a tailored 45-minute review of traction metrics,
                      investor fit, and round strategy.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 text-white px-5 py-3 text-sm font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Schedule Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 mt-3 leading-relaxed">{text}</p>
      <Link
        to="/contact"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
      >
        Talk to advisory team <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm text-slate-700">
      <span>{label}</span>
      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}

function TrendBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50">
      <div className="h-24 rounded-lg bg-white border border-slate-100 p-2 flex items-end">
        <div
          className="w-full rounded bg-gradient-to-t from-emerald-500 to-cyan-500"
          style={{ height: `${value}%` }}
        />
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-semibold text-emerald-700">{value}%</span>
      </div>
    </div>
  );
}
