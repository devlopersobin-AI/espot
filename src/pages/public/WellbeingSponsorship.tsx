import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import {
  Heart,
  Shield,
  Users,
  Smile,
  ArrowRight,
  CheckCircle2,
  Globe,
  Star,
  ChevronRight,
  Gem,
  HandHeart,
} from "lucide-react";

const PROGRAMS = [
  {
    id: "WB-001",
    title: "Mental Wellness Support Fund",
    category: "Mental Health",
    reach: "2,400+ members",
    goal: "$40,000",
    raised: "$28,500",
    pct: 71,
    icon: Smile,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    impact: "Subsidized therapy sessions and mindfulness programs.",
  },
  {
    id: "WB-002",
    title: "Physical Fitness Access Program",
    category: "Physical Health",
    reach: "3,800+ members",
    goal: "$25,000",
    raised: "$18,200",
    pct: 73,
    icon: Shield,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    impact: "Gym memberships, fitness classes, and sports equipment grants.",
  },
  {
    id: "WB-003",
    title: "Community Welfare Initiative",
    category: "Social Welfare",
    reach: "5,200+ members",
    goal: "$60,000",
    raised: "$41,900",
    pct: 70,
    icon: Users,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    impact: "Housing, food security, and emergency relief for members in need.",
  },
  {
    id: "WB-004",
    title: "Family Healthcare Access",
    category: "Healthcare",
    reach: "1,900+ members",
    goal: "$35,000",
    raised: "$12,000",
    pct: 34,
    icon: Heart,
    color: "bg-rose-50 text-rose-600 border-rose-100",
    impact: "Subsidized medical check-ups, dental, and optical care.",
  },
  {
    id: "WB-005",
    title: "Global Wellness Retreat Grant",
    category: "Mental Health",
    reach: "600+ members",
    goal: "$20,000",
    raised: "$15,800",
    pct: 79,
    icon: Globe,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    impact: "Annual retreat funding for burnout recovery and leadership restoration.",
  },
  {
    id: "WB-006",
    title: "Youth Wellbeing Accelerator",
    category: "Social Welfare",
    reach: "4,100+ members",
    goal: "$50,000",
    raised: "$38,000",
    pct: 76,
    icon: Star,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    impact: "Youth empowerment, life skills workshops, and mentoring programs.",
  },
];

const CATEGORIES = ["All", "Mental Health", "Physical Health", "Healthcare", "Social Welfare"];

const TIERS = [
  { name: "Community Supporter", amount: "$500+", perks: ["Logo on sponsor wall", "Monthly impact report", "Network badge"], color: "border-slate-200 bg-white" },
  { name: "Wellness Champion", amount: "$2,500+", perks: ["All Community perks", "Dedicated program naming", "Quarterly recognition event", "Partner spotlight"], color: "border-blue-200 bg-blue-50" },
  { name: "Elite Patron", amount: "$10,000+", perks: ["All Champion perks", "Board-level reporting", "Exclusive summit invitation", "Annual impact gala seat", "Premium logo placement"], color: "border-amber-200 bg-amber-50" },
];

export default function WellbeingSponsorship() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [commitAmount, setCommitAmount] = useState("");

  const filtered = PROGRAMS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero
        title="Wellbeing & Welfare Sponsorship"
        subtitle="Fund transformative wellness programs and social welfare initiatives that uplift every member across the global E-SPOT ecosystem."
        image="https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=1200&q=80"
        accentColor="text-emerald-400"
      />

      {/* Stats Banner */}
      <div className="bg-slate-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Lives Impacted", value: "18,000+" },
            { label: "Programs Active", value: "6" },
            { label: "Funds Raised", value: "$154k" },
            { label: "Sponsors Globally", value: "43" },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsorship Category Banner */}
      <div className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              <HandHeart className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sponsorship Category</p>
              <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Wellbeing & Welfare</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/scholar"
              className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all"
            >
              <Gem className="w-4 h-4" /> Scholarship Sponsorship
            </Link>
            <Link
              to="/auth?mode=signup"
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-emerald-200 transition-all active:scale-95"
            >
              Become a Sponsor <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="flex-1 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 space-y-14">

          {/* Filter */}
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight text-center">Fund a Wellbeing Program</h2>
            <p className="text-slate-500 font-medium text-center max-w-2xl">Choose a program to sponsor. Every contribution goes directly to supporting members' physical, mental, and social wellbeing.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200"
                      : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((program) => (
              <div key={program.id} className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden hover:scale-[1.02] transition-transform duration-300 group flex flex-col">
                <div className={`p-8 border-b border-slate-50`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${program.color}`}>
                      <program.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-black text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-lg uppercase tracking-widest">{program.category}</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 tracking-tight leading-tight mb-2 group-hover:text-blue-600 transition-colors uppercase">{program.title}</h3>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed">{program.impact}</p>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-slate-400">Progress</span>
                      <span className="text-slate-900">{program.raised} / {program.goal}</span>
                    </div>
                    <div className="h-2 bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 transition-all duration-1000"
                        style={{ width: `${program.pct}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-black">
                      <span className="text-emerald-600">{program.pct}% Funded</span>
                      <span className="text-slate-400">{program.reach}</span>
                    </div>
                  </div>
                  <Link
                    to="/auth?mode=signup"
                    className="w-full py-3.5 bg-slate-900 hover:bg-black text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-all shadow-xl shadow-slate-200 active:scale-95"
                  >
                    Sponsor This Program <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sponsorship Tiers */}
          <div className="space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Sponsorship Tiers</h2>
              <p className="text-slate-500 font-medium">Choose a contribution level that matches your impact ambition.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TIERS.map((tier, i) => (
                <div key={i} className={`rounded-[2rem] p-8 border-2 ${tier.color} relative overflow-hidden space-y-6`}>
                  {i === 2 && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg">Elite</div>
                  )}
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{tier.name}</p>
                    <p className="text-3xl font-black text-slate-900">{tier.amount}</p>
                  </div>
                  <ul className="space-y-3">
                    {tier.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/auth?mode=signup"
                    className="block w-full py-3.5 bg-slate-900 hover:bg-black text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center transition-all shadow-lg active:scale-95"
                  >
                    Commit to This Tier
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-emerald-600 rounded-[2.5rem] p-12 text-white flex flex-col items-center text-center space-y-6">
            <div className="p-4 bg-white/10 rounded-3xl backdrop-blur">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black uppercase">Partner with Us for Impact</h3>
              <p className="text-emerald-100 max-w-xl font-medium">
                Custom sponsorship packages are available for corporations, foundations, and governments. 
                Contact our partnerships team to design a tailored wellbeing investment.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-10 py-4 bg-white text-emerald-700 hover:bg-emerald-50 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl transition-all active:scale-95"
            >
              Contact Partnerships Team
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
