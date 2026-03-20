import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  BadgeCheck,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  Handshake,
  Landmark,
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
                {/* Insource and Outsource Venture Section */}
                <div className="rounded-2xl border border-emerald-200 bg-white p-4 sm:p-6 mb-6">
                  <h2 className="text-xl font-bold text-emerald-900 mb-2">
                    Venture Types
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      to="/investment/insource"
                      className="bg-emerald-50 rounded-xl p-4 hover:shadow-lg transition-shadow block"
                    >
                      <h3 className="text-lg font-semibold text-emerald-800 mb-1">
                        Insource Venture
                      </h3>
                      <p className="text-sm text-emerald-900">
                        Venture projects and investments managed, operated, and
                        executed within the E-SPOT platform and its core team.
                        Full support, resources, and oversight are provided by
                        our in-house experts.
                      </p>
                    </Link>
                    <Link
                      to="/investment/outsource"
                      className="bg-cyan-50 rounded-xl p-4 hover:shadow-lg transition-shadow block"
                    >
                      <h3 className="text-lg font-semibold text-cyan-800 mb-1">
                        Outsource Venture
                      </h3>
                      <p className="text-sm text-cyan-900">
                        Venture projects and investments where E-SPOT acts as a
                        facilitator, connecting external founders, teams, or
                        partners to our investor network. Execution and
                        management are handled by the external party with E-SPOT
                        support.
                      </p>
                    </Link>
                  </div>
                </div>

                {/* Investment Models Section */}
                <div className="rounded-2xl border border-emerald-200 bg-white p-4 sm:p-6 mb-6">
                  <h2 className="text-xl font-bold text-emerald-900 mb-2">
                    Investment Models
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-emerald-900">
                    <li>
                      <span className="font-semibold">
                        Standard Membership & Partnership Investment (SMPI):
                      </span>{" "}
                      Entry-level investment for standard members and partners,
                      offering access to curated opportunities and basic
                      support.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Elite Membership & Partnership Investment (EMPI):
                      </span>{" "}
                      Enhanced investment model for elite members and partners,
                      with priority access, higher ticket sizes, and advanced
                      support services.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Premium Membership & Partnership Investment (PMPI):
                      </span>{" "}
                      Top-tier investment model for premium members and
                      partners, featuring bespoke deal flow, personal advisory,
                      and maximum flexibility.
                    </li>
                  </ul>
                </div>
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
