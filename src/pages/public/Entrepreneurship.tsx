import React, { useState } from "react";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Lightbulb,
  Target,
  Star,
  ArrowRight,
  TrendingUp,
  Users,
  Banknote,
  PlayCircle,
  Heart,
  X,
  CheckCircle,
  Zap,
  Shield,
  Crown,
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  Database,
  Smartphone,
  Globe,
  GraduationCap,
  ChevronRight,
  BarChart2,
  Sparkles,
  Clock,
  DollarSign,
} from "lucide-react";

// ── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

// ── Types ─────────────────────────────────────────────────────────────────────
type Startup = {
  id: number;
  name: string;
  founder: string;
  category: string;
  tier: "Silver" | "Gold" | "Crown";
  raised: number;
  goal: number;
  description: string;
  roi: string;
  liked: boolean;
};

// ── Data ──────────────────────────────────────────────────────────────────────
const STARTUPS: Startup[] = [
  {
    id: 1,
    name: "EcoGrid AI",
    founder: "Priya Sharma",
    category: "Clean Energy",
    tier: "Crown",
    raised: 840000,
    goal: 1000000,
    description:
      "AI-powered smart grid management for renewable energy distribution across South Asia.",
    roi: "28–35% annually",
    liked: false,
  },
  {
    id: 2,
    name: "MedSync Pro",
    founder: "Rafael Torres",
    category: "HealthTech",
    tier: "Gold",
    raised: 210000,
    goal: 400000,
    description:
      "Real-time patient data synchronization between hospitals, clinics and pharmacies.",
    roi: "18–24% annually",
    liked: false,
  },
  {
    id: 3,
    name: "AgriBlock",
    founder: "Amina Hassan",
    category: "AgriTech",
    tier: "Silver",
    raised: 65000,
    goal: 150000,
    description:
      "Blockchain supply chain traceability for farm-to-fork transparency in emerging markets.",
    roi: "12–18% annually",
    liked: false,
  },
  {
    id: 4,
    name: "SkillForge",
    founder: "James Okubo",
    category: "EdTech",
    tier: "Gold",
    raised: 320000,
    goal: 500000,
    description:
      "AI-driven micro-learning platform that adapts to individual learner pace and career goals.",
    roi: "20–28% annually",
    liked: false,
  },
  {
    id: 5,
    name: "UrbanMobility X",
    founder: "Leila Nazari",
    category: "Transport",
    tier: "Crown",
    raised: 920000,
    goal: 1200000,
    description:
      "Electric micro-mobility fleet management for last-mile logistics in congested urban centres.",
    roi: "30–40% annually",
    liked: false,
  },
  {
    id: 6,
    name: "FinReach",
    founder: "David Mensah",
    category: "FinTech",
    tier: "Silver",
    raised: 45000,
    goal: 120000,
    description:
      "Digital banking onboarding solution for unbanked populations across Sub-Saharan Africa.",
    roi: "15–22% annually",
    liked: false,
  },
];

// ── Helper Components ─────────────────────────────────────────────────────────
const TierBadge = ({ tier }: { tier: "Silver" | "Gold" | "Crown" }) => {
  const cfg = {
    Silver: { bg: "bg-slate-100", text: "text-slate-600", icon: "🥈" },
    Gold: { bg: "bg-amber-50", text: "text-amber-700", icon: "🥇" },
    Crown: { bg: "bg-purple-50", text: "text-purple-700", icon: "👑" },
  }[tier];
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.text}`}
    >
      {cfg.icon} {tier}
    </span>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500 mb-2">
    {children}
  </p>
);

// ── Main Component ────────────────────────────────────────────────────────────
export default function Entrepreneurship() {
  const [startups, setStartups] = useState<Startup[]>(STARTUPS);
  const [activeModal, setActiveModal] = useState<Startup | null>(null);

  const toggleLike = (id: number) =>
    setStartups((prev) =>
      prev.map((s) => (s.id === id ? { ...s, liked: !s.liked } : s)),
    );

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <Hero
        label="Venture Ecosystem"
        title="Turn Your Ideas Into Funded Startups"
        subtitle="A complete digital ecosystem connecting entrepreneurs and investors—from initial validation to global funding in one seamless journey."
        image="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80"
        accentColor="text-orange-400"
      />

      {/* ── ENTREPRENEURIAL PATHWAYS ────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Growth Pathways</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight"
            >
              Strategic Evolution <br/> <span className="text-orange-600">to Leadership</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 font-medium max-w-2xl mx-auto mt-4">
              We provide formal structured bridges for talent to evolve into venture owners through two high-fidelity corporate tracks.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Internship to Entrepreneur",
                subtitle: "The Intern-Founder Track",
                icon: GraduationCap,
                desc: "Designed for high-potential scholars and trainees to transition from academic learning to venture execution.",
                steps: [
                  "Immersion in platform operations",
                  "Founder-matching & mentorship",
                  "Venture validation during training",
                  "Seed funding bridge upon graduation"
                ],
                color: "orange",
                bg: "bg-orange-50 border-orange-100",
                iconBg: "bg-orange-500",
                path: "intern-track"
              },
              {
                title: "Employee to Entrepreneur",
                subtitle: "The Corporate Intrapreneur Track",
                icon: Briefcase,
                desc: "Empowering our core staff and corporate partners to evolve into owners of their own spin-off ventures.",
                steps: [
                  "Performance-based venture slots",
                  "Operational equity accumulation",
                  "In-house incubation & resource access",
                  "Full venture spin-off with E-SPOT backing"
                ],
                color: "blue",
                bg: "bg-blue-50 border-blue-100",
                iconBg: "bg-blue-600",
                path: "corporate-track"
              }
            ].map((path, i) => (
              <motion.div
                key={path.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${path.bg} border rounded-[3rem] p-8 lg:p-12 relative group hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 ${path.color === 'orange' ? 'bg-orange-500/5' : 'bg-blue-500/5'} rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 ${path.iconBg} rounded-2xl flex items-center justify-center text-white shadow-xl mb-8`}>
                    <path.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-4 mb-8">
                     <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${path.color === 'orange' ? 'text-orange-600' : 'text-blue-600'}`}>
                        {path.subtitle}
                     </span>
                     <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
                        {path.title}
                     </h3>
                     <p className="text-slate-600 font-medium leading-relaxed">
                        {path.desc}
                     </p>
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    {path.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full ${path.color === 'orange' ? 'bg-orange-500/10 text-orange-600' : 'bg-blue-500/10 text-blue-600'} flex-shrink-0 flex items-center justify-center text-[10px] font-bold`}>
                          {idx + 1}
                        </div>
                        <span className="text-sm font-bold text-slate-700">{step}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/auth?mode=signup&role=${path.color === 'orange' ? 'Trainee' : 'Employee'}`}
                    className={`inline-flex items-center justify-center gap-2 w-full py-5 rounded-2xl text-xs font-black uppercase tracking-widest ${path.color === 'orange' ? 'bg-slate-900 text-white hover:bg-orange-600' : 'bg-slate-900 text-white hover:bg-blue-600'} transition-all shadow-xl`}
                  >
                    Enroll in Pathway <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PLATFORM JOURNEY ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-orange-950 via-slate-900 to-purple-950 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Platform Journey</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Your Path from Idea to Funded
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 relative"
          >
            {/* Connector line */}
            <div className="hidden lg:block absolute top-[44px] left-[12.5%] w-3/4 h-px bg-gradient-to-r from-orange-500/0 via-orange-500/60 to-orange-500/0" />
            {[
              {
                step: "Learn",
                icon: BookOpen,
                desc: "Access curated startup playbooks, live mentorship, and courses.",
                color: "from-blue-500 to-blue-600",
              },
              {
                step: "Build",
                icon: Cpu,
                desc: "Validate your idea with tools, community support and advisors.",
                color: "from-orange-500 to-amber-500",
              },
              {
                step: "Pitch",
                icon: Rocket,
                desc: "Present your startup in live pitch events.",
                color: "from-purple-500 to-purple-600",
              },
              {
                step: "Fund",
                icon: Banknote,
                desc: "Connect with Silver, Gold & Crown investors for real funding.",
                color: "from-emerald-500 to-green-600",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="flex flex-col items-center text-center px-4 relative z-10"
              >
                <div
                  className={`w-[88px] h-[88px] rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-xl shadow-black/30`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Step {i + 1}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.step}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. FEATURES ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Platform Features</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-slate-900"
            >
              Everything You Need to Succeed
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              {
                icon: BarChart2,
                title: "Startup Listings",
                desc: "Browse and list startups with verified metrics, stage tracking, and public visibility.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: PlayCircle,
                title: "Pitch Video System",
                desc: "Record and submit your 3-minute pitch video reviewed by real investors and mentors.",
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
              {
                icon: TrendingUp,
                title: "Investment System",
                desc: "Structured investment flow with milestone-based releases and transparent ROI reporting.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                icon: Crown,
                title: "Investor Levels",
                desc: "Silver, Gold & Crown tiers give investors access to exclusive deals and priority pitches.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: Zap,
                title: "Live Events & Programs",
                desc: "Monthly pitch nights, hackathons, and mentorship programs broadcast live on-platform.",
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
              {
                icon: Shield,
                title: "Verified Profiles",
                desc: "KYC-backed founder and investor profiles ensure trust at every stage of the journey.",
                color: "text-slate-600",
                bg: "bg-slate-100",
              },
            ].map((feat) => (
              <motion.div
                key={feat.title}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)",
                }}
                className="border border-slate-200 rounded-2xl p-7 bg-white transition-all cursor-default"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feat.bg} flex items-center justify-center mb-5`}
                >
                  <feat.icon className={`w-6 h-6 ${feat.color}`} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6 & 7. STARTUPS / PITCH CARDS ────────────────────────────────────── */}
      <section
        id="startups"
        className="py-20 bg-slate-50 border-y border-slate-200"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <motion.div variants={fadeUp}>
                <SectionLabel>Live Pitch Days</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-slate-900"
              >
                Featured Startups
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link
                to="/auth?mode=signup&role=Entrepreneur"
                className="text-sm font-semibold text-orange-600 flex items-center gap-1 hover:gap-2 transition-all"
              >
                Submit Your Startup <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {startups.map((startup) => {
              const pct = Math.round((startup.raised / startup.goal) * 100);
              return (
                <motion.div
                  key={startup.id}
                  variants={fadeUp}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-all"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <TierBadge tier={startup.tier} />
                        <h3 className="text-lg font-bold text-slate-900 mt-2">
                          {startup.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          by {startup.founder} · {startup.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                      {startup.description}
                    </p>
                    {/* Funding bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                        <span>
                          ${(startup.raised / 1000).toFixed(0)}K raised
                        </span>
                        <span className="font-semibold text-orange-600">
                          {pct}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                        />
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Goal: ${(startup.goal / 1000).toFixed(0)}K
                      </p>
                    </div>
                    {/* Actions */}
                    <div className="flex gap-2 pt-3 border-t border-slate-100">
                      <button
                        onClick={() => setActiveModal(startup)}
                        className="flex-1 py-2 bg-orange-500 text-white text-xs font-bold rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-1.5"
                      >
                        <PlayCircle className="w-3.5 h-3.5" /> Watch Pitch
                      </button>
                      <button
                        onClick={() => toggleLike(startup.id)}
                        className={`px-3 py-2 rounded-lg border text-xs font-bold transition-all ${startup.liked ? "bg-red-50 border-red-200 text-red-600" : "border-slate-200 text-slate-500 hover:border-red-200 hover:text-red-500"}`}
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${startup.liked ? "fill-current" : ""}`}
                        />
                      </button>
                      <button
                        onClick={() => setActiveModal(startup)}
                        className="flex-1 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5"
                      >
                        <DollarSign className="w-3.5 h-3.5" /> Invest
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 7. STARTUP DETAIL MODAL ──────────────────────────────────────────── */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
            >
              {/* Video placeholder */}
              <div className="h-52 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-orange-500/10" />
                <button className="w-16 h-16 bg-white/10 border border-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                  <PlayCircle className="w-8 h-8 text-white" />
                </button>
                <div className="absolute top-4 left-4">
                  <TierBadge tier={activeModal.tier} />
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-bold text-slate-900">
                  {activeModal.name}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Founded by {activeModal.founder} · {activeModal.category}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mt-4">
                  {activeModal.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                    <p className="text-xs text-orange-600 font-semibold uppercase tracking-wider mb-1">
                      Funding Required
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      ${(activeModal.goal / 1000).toFixed(0)}K
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {Math.round(
                        (activeModal.raised / activeModal.goal) * 100,
                      )}
                      % funded
                    </p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                    <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-1">
                      Expected ROI
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      {activeModal.roi.split(" ")[0]}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">annually</p>
                  </div>
                </div>
                <Link
                  to="/auth?mode=signup&role=Investor"
                  onClick={() => setActiveModal(null)}
                  className="mt-6 w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-200 transition-all text-sm"
                >
                  <DollarSign className="w-4 h-4" /> Invest Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 9. PROGRAMS & EVENTS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Programs & Events</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-slate-900"
            >
              Built to Accelerate Growth
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Zap,
                title: "Live Pitch Events",
                desc: "Monthly pitch events where startups present live to a panel of verified investors.",
                tag: "Live",
                color: "text-orange-500 bg-orange-50 border-orange-100",
                cta: "Join Next Event",
              },
              {
                icon: BookOpen,
                title: "Training & Mentorship",
                desc: "Structured bootcamps and 1-on-1 mentorship sessions from experienced founders and business leaders.",
                tag: "Ongoing",
                color: "text-blue-500 bg-blue-50 border-blue-100",
                cta: "Explore Programs",
              },
              {
                icon: TrendingUp,
                title: "Investment Programs",
                desc: "Curated investment rounds with transparent terms, milestone-based disbursements and ROI tracking.",
                tag: "Open",
                color: "text-emerald-500 bg-emerald-50 border-emerald-100",
                cta: "View Rounds",
              },
            ].map((prog) => (
              <motion.div
                key={prog.title}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)",
                }}
                className={`border rounded-2xl p-7 bg-white transition-all cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${prog.color.split(" ").slice(1).join(" ")} flex items-center justify-center`}
                  >
                    <prog.icon
                      className={`w-6 h-6 ${prog.color.split(" ")[0]}`}
                    />
                  </div>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${prog.color.split(" ").slice(1).join(" ")} ${prog.color.split(" ")[0]}`}
                  >
                    {prog.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {prog.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {prog.desc}
                </p>
                <span className="text-sm font-semibold text-orange-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  {prog.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 14. FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8"
            >
              <Rocket className="w-3.5 h-3.5" /> Ready to Launch?
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Start Your Entrepreneurial
              <br />
              Journey Today
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-orange-100 text-lg max-w-2xl mx-auto mb-12"
            >
              Join thousands of founders and investors already building the
              future on E-Spot. Your idea deserves funding.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                to="/auth?mode=signup&role=Entrepreneur"
                className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-900/40 transition-all text-sm flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" /> Join Now
              </Link>
              <Link
                to="/auth?mode=signup&role=Investor"
                className="px-8 py-4 bg-white/10 backdrop-blur border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm flex items-center gap-2"
              >
                <Crown className="w-4 h-4" /> Become Investor
              </Link>
            </motion.div>
            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              className="mt-14 flex flex-wrap items-center justify-center gap-6 text-orange-100/70"
            >
              {[
                "No hidden fees",
                "Verified startups",
                "Transparent ROI",
                "24/7 support",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-200" /> {t}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
