import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import {
  GraduationCap,
  Heart,
  ArrowRight,
  Users,
  Globe,
  Star,
  CheckCircle2,
} from "lucide-react";

const CATEGORIES = [
  {
    id: "scholarship",
    title: "Scholarship Sponsorship",
    subtitle: "Empower Academic Excellence",
    desc: "Support talented scholars across the E-SPOT ecosystem. Fund full and partial scholarships, research grants, and academic mentorship programs that unlock potential for the next generation.",
    path: "/sponsorship/scholarship",
    icon: GraduationCap,
    stats: [
      { label: "Scholars Supported", value: "1,200+" },
      { label: "Active Programs", value: "8" },
      { label: "Funds Raised", value: "$210k" },
    ],
    perks: [
      "Scholar profile feature on platform",
      "Direct mentorship with funded scholars",
      "Annual impact report",
      "Recognition at academic summits",
    ],
    accent: "from-indigo-950 via-indigo-900 to-blue-900",
    badge: "text-blue-300 bg-blue-500/10 border-blue-500/20",
    cta: "bg-white text-indigo-900 hover:bg-indigo-50",
    tag: "Academic",
  },
  {
    id: "wellbeing",
    title: "Wellbeing & Welfare",
    subtitle: "Champion Human Wellness",
    desc: "Invest in the physical, mental, and social wellbeing of E-SPOT members. From mental health funding to community welfare initiatives — your contribution transforms lives directly.",
    path: "/sponsorship/wellbeing",
    icon: Heart,
    stats: [
      { label: "Lives Impacted", value: "18,000+" },
      { label: "Active Programs", value: "6" },
      { label: "Funds Raised", value: "$154k" },
    ],
    perks: [
      "Program naming rights available",
      "Sponsor wall recognition",
      "Quarterly wellness report",
      "Exclusive patron events",
    ],
    accent: "from-emerald-950 via-emerald-900 to-teal-900",
    badge: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
    cta: "bg-white text-emerald-900 hover:bg-emerald-50",
    tag: "Welfare",
  },
];

export default function Sponsorship() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero
        title="Sponsorship"
        subtitle="Choose your sponsorship category and make a lasting impact — from funding academic excellence to championing human wellbeing across the E-SPOT ecosystem."
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80"
        accentColor="text-blue-400"
      />

      {/* Global Stats */}
      <div className="bg-slate-900 text-white py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Total Sponsors", value: "43" },
            { label: "Lives Impacted", value: "19,200+" },
            { label: "Total Funds Raised", value: "$364k" },
            { label: "Active Programs", value: "14" },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Cards */}
      <div className="flex-1 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 space-y-10">

          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Choose Your Sponsorship Category</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              Two distinct pathways to make a meaningful difference. Both are supported by full impact reporting, recognition, and our global network.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${cat.accent} text-white p-10 flex flex-col justify-between shadow-2xl group hover:scale-[1.01] transition-all duration-500`}
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-white/10 transition-all duration-700" />

                <div className="relative space-y-8">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <span className={`inline-block text-[10px] font-black px-3 py-1 rounded-lg border uppercase tracking-widest ${cat.badge}`}>
                        {cat.tag}
                      </span>
                      <h3 className="text-2xl font-black tracking-tight uppercase leading-tight">{cat.title}</h3>
                      <p className="text-sm font-bold text-white/60 uppercase tracking-widest">{cat.subtitle}</p>
                    </div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-all">
                      <cat.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/80 font-medium leading-relaxed">{cat.desc}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {cat.stats.map((stat, j) => (
                      <div key={j} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center space-y-1">
                        <div className="text-xl font-black text-white">{stat.value}</div>
                        <div className="text-[9px] font-black text-white/50 uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Perks */}
                  <div className="space-y-2.5">
                    {cat.perks.map((perk, k) => (
                      <div key={k} className="flex items-center gap-3 text-xs font-bold text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-white/50 shrink-0" />
                        {perk}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={cat.path}
                  className={`relative mt-10 flex items-center justify-center gap-3 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl transition-all active:scale-95 ${cat.cta}`}
                >
                  Explore {cat.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Custom Sponsorship</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Need a Bespoke Package?</h3>
              <p className="text-slate-500 font-medium max-w-xl">
                Corporations, foundations, and governments can work with our team to create a fully custom sponsorship structure tailored to your values and impact goals.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 px-10 py-4 bg-slate-900 hover:bg-black text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-slate-200 transition-all active:scale-95 flex items-center gap-3"
            >
              Contact Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
