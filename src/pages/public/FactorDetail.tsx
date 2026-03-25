import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { factorDetails } from "../../data/factorDetails";
import { factorPackages } from "../../data/factorPackages";
import { providerLogos } from "../../data/providerLogos";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
  Target,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function FactorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const details = factorDetails[slug || ""];

  // Handle inconsistent data structure in factorPackages
  const rawPackages = factorPackages[slug || ""];
  let espotPackages: any[] = [];
  let partnerPackages: any[] = [];

  if (Array.isArray(rawPackages)) {
    espotPackages = rawPackages.filter((p: any) => p.provider === "ESpot");
    partnerPackages = rawPackages.filter((p: any) => p.provider !== "ESpot");
  } else if (rawPackages && typeof rawPackages === "object") {
    espotPackages = rawPackages.espotPackages || [];
    partnerPackages = rawPackages.partnerPackages || [];
  }

  if (!details) {
    return (
      <div className="max-w-2xl mx-auto py-24 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-red-600">Factor Not Found</h1>
        <p className="text-lg text-gray-600">
          Sorry, we couldn't find details for this factor.
        </p>
        <Link
          to="/membership"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-bold"
        >
          Back to Factors
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24 selection:bg-emerald-500 selection:text-white">
      {/* ── CINEMATIC HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[520px] flex items-end overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        {/* Floating Accent */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 md:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to 20 Factors
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-2xl rounded-[1.5rem] flex items-center justify-center text-5xl border border-white/10 shadow-2xl">
                {details.icon || "✨"}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-[2px] w-10 bg-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">
                    Success Factor
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
                  {details.title}
                </h1>
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-300 max-w-3xl font-medium leading-relaxed border-l-4 border-white/10 pl-8"
            >
              Discover how mastering {details.title.toLowerCase()} shapes your journey to ultimate
              success, personal growth, and sustainable prosperity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 space-y-16 relative z-20">
        {/* Info Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-[2rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 hover:shadow-3xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                What is {details.title}?
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">{details.what}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-white rounded-[2rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 hover:shadow-3xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Why is it Important?
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">{details.why}</p>
          </motion.div>
        </motion.div>

        {/* Impact + Benefits Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          {/* Impact Card */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-3 bg-slate-900 rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
                    ESpot Advantage
                  </p>
                  <h2 className="text-2xl font-black tracking-tight">Impact on Success</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Benefits of Mastery
                  </h3>
                  <p className="text-slate-300 leading-relaxed font-medium">{details.espot}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-amber-400 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    Real-World Insight
                  </h3>
                  <p className="text-slate-300 leading-relaxed font-medium">
                    {details.example || "Proactive engagement ensures long-term growth."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Checklist */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Key Benefits</h2>
            </div>
            <div className="space-y-4">
              {(details.benefits || []).map((benefit: string, i: number) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-100 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* What Should You Do? */}
        {details.actions && details.actions.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-2">
                Take Action
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                What Should You Do?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {details.actions.map((action: string, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-black text-white">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight">
                    Step {i + 1}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{action}</p>
                  <div className="mt-6 pt-4 border-t border-slate-50">
                    <button className="text-sm font-bold text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all">
                      Get Started <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── ESPOT EXCLUSIVE PACKAGES ──────────────────────────────────── */}
        {espotPackages.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="w-2 h-10 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                  Platform Exclusive
                </p>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  ESpot Premium Package
                </h2>
              </div>
            </motion.div>

            <div className="grid gap-8">
              {espotPackages.map((pkg: any) => (
                <motion.div
                  key={pkg.id}
                  variants={fadeUp}
                  className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 p-10 md:p-14 text-white space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/20">
                          <Zap className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                            ESpot Exclusive
                          </p>
                          <h3 className="text-3xl font-black tracking-tight">{pkg.name}</h3>
                        </div>
                      </div>
                      <p className="text-blue-100/80 text-lg max-w-xl font-medium leading-relaxed">
                        {pkg.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {pkg.features.map((f: string) => (
                          <div key={f} className="flex items-center gap-3 text-blue-50">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                            <span className="font-medium text-sm">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md p-10 md:p-14 flex flex-col justify-center items-center border-t lg:border-t-0 lg:border-l border-white/10 min-w-[300px]">
                      <span className="text-blue-300 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                        Investment
                      </span>
                      <span className="text-6xl font-black text-white mb-2">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <span className="text-blue-300/60 text-sm font-bold mb-8">per year</span>
                      <button className="w-full py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-black rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest">
                        Choose This Package
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── PARTNER PACKAGES ─────────────────────────────────────────── */}
        {partnerPackages.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="w-2 h-10 bg-gradient-to-b from-emerald-600 to-emerald-400 rounded-full" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">
                  Verified Partners
                </p>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Partner & Provider Packages
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerPackages.map((pkg: any) => (
                <motion.div
                  key={pkg.id}
                  variants={fadeUp}
                  className="group bg-white rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-500 flex flex-col overflow-hidden"
                >
                  {/* Card top accent */}
                  <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 group-hover:scale-110 transition-transform">
                        {providerLogos[pkg.provider] ? (
                          <img
                            src={providerLogos[pkg.provider]}
                            alt={pkg.provider}
                            className="w-full h-full object-contain p-2.5"
                          />
                        ) : (
                          <ShieldCheck className="w-7 h-7 text-slate-400" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-tight text-lg">
                          {pkg.name}
                        </h4>
                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                          {pkg.provider}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-500 text-sm mb-6 flex-1 leading-relaxed font-medium">
                      {pkg.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {(pkg.features || []).map((f: string) => (
                        <div
                          key={f}
                          className="flex items-center gap-2.5 text-sm text-slate-700 font-medium"
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                          Starting from
                        </span>
                        <span className="text-2xl font-black text-slate-900">
                          ₹{pkg.price?.toLocaleString()}
                        </span>
                      </div>
                      <Link
                        to={pkg.providerId ? `/profile/partner/${pkg.providerId}` : `/profiles`}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-colors"
                      >
                        View <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── CTA BANNER ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-950 to-teal-900 rounded-[2.5rem] p-12 md:p-16 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                <Star className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-300">
                  Start Today
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Ready to Master {details.title}?
              </h2>
              <p className="text-emerald-100/70 font-medium text-lg leading-relaxed">
                Join 300,000+ members who are actively building their success across all 20 factors.
                Your journey starts with a single step.
              </p>
            </div>
            <div className="flex flex-col gap-4 shrink-0">
              <Link
                to="/auth?mode=signup&role=Member"
                className="px-10 py-5 bg-white text-emerald-950 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-xl text-center"
              >
                Join ESpot Now
              </Link>
              <Link
                to="/membership"
                className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-white/20 transition-all text-center"
              >
                View All Factors
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
