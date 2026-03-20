import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import SubNav from "../../components/SubNav";

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
                      <option value="Change Management">
                        Change Management
                      </option>
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
