import React, { useState } from "react";
import Hero from "../../components/Hero";
import ExclusiveBenefits from "../../components/ExclusiveBenefits";
import CommunityAchievements from "../../components/CommunityAchievements";
import Leaderboard from "../../components/Leaderboard";
import SocialProof from "../../components/SocialProof";
import MeetOurMembers from "../../components/MeetOurMembers";

import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search as SearchIcon,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Users
} from "lucide-react";

// 20 Factors for Life & Business Success data
const FACTORS = [
  {
    title: "Personal Growth",
    icon: <Globe className="w-8 h-8" />,
    items: ["Health", "Knowledge", "Training", "Scholarship"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Career & Success",
    icon: <BriefcaseIcon />,
    items: ["Career", "Entrepreneurship", "Leadership", "Platform"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Lifestyle",
    icon: <Zap className="w-8 h-8" />,
    items: ["Environment", "Entertainment", "Freedom", "Event"],
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "Social & Impact",
    icon: <Users className="w-8 h-8" />,
    items: ["Networking", "Relationship", "Fame", "Welfare"],
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Wealth & Influence",
    icon: <Award className="w-8 h-8" />,
    items: ["Wealth", "Prosperity", "Power", "Fortune"],
    color: "from-slate-700 to-slate-900"
  },
];

function BriefcaseIcon() {
  return <TrendingUp className="w-8 h-8" />;
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Section for Success Factors with Grouped Layout
function SuccessFactorsSectionWithModal() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full bg-[#fafbfc] py-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/30 -z-10 blur-3xl rounded-full translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-emerald-200"
          >
            The ESPOT Ecosystem
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            20 Factors for Life & <br /> <span className="text-emerald-600">Business Success</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-500 font-medium leading-relaxed">
            Our proprietary success model integrates twenty specialized domains into a 
            cohesive growth strategy, powered by our elite partner network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACTORS.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${factor.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-full blur-2xl`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${factor.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-900/10`}>
                {factor.icon}
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-8">
                {factor.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {factor.items.map((item) => (
                  <button
                    key={item}
                    onClick={() => navigate(`/factor/${slugify(item)}`)}
                    className="px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 text-slate-600 font-bold text-xs hover:bg-white hover:border-emerald-500 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-900/5 transition-all text-center leading-tight min-h-[50px] flex items-center justify-center"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PLAN_TYPES = [
  { label: "Monthly", key: "monthly" },
  { label: "Yearly", key: "yearly" },
];

const CATEGORIES = [
  "Equestrian",
  "Events",
  "Beauty & Spa",
  "Wellness & Fitness",
  "Tours & Travel",
  "Restaurants & Catering",
  "Multimedia Production",
  "Events & Wedding Mgmt",
  "Outsourcing",
];

const BENEFITS = [
  "Discounts",
  "Booking Access",
  "Priority",
  "Sharing",
  "Offers",
];

export const PACKAGE_TIERS = [
  {
    tier: "Bronze",
    tagline: "Entry Level - Start Your Journey",
    prices: { monthly: "$0", yearly: "$0" },
    icon: "🥉",
    packages: [],
    upgradeTo: "Silver",
  },
  {
    tier: "Silver",
    tagline: "Step Into Lifestyle Excellence",
    prices: { monthly: "$99", yearly: "$999" },
    icon: "🥈",
    packages: CATEGORIES.slice(0, 4).map((cat) => ({
      name: "Silver " + cat + " Package",
      category: cat,
      monthlyBenefits: ["Access to " + cat + " services", "10% Discount"],
      yearlyBenefits: ["VIP Access to " + cat, "15% Discount"],
    })),
    upgradeTo: "Crown",
  },
  {
    tier: "Gold",
    tagline: "Elite Performance & Access",
    prices: { monthly: "$299", yearly: "$2,999" },
    icon: "🥇",
    packages: CATEGORIES.slice(0, 6).map((cat) => ({
      name: "Gold " + cat + " Package",
      category: cat,
      monthlyBenefits: ["Full " + cat + " Access", "15% Discount"],
      yearlyBenefits: ["Direct Line to " + cat, "20% Discount"],
    })),
    upgradeTo: "Diamond",
  },
  {
    tier: "Diamond",
    tagline: "Prestige & Global Rewards",
    prices: { monthly: "$599", yearly: "$5,999" },
    icon: "💎",
    packages: CATEGORIES.slice(0, 8).map((cat) => ({
      name: "Diamond " + cat + " Package",
      category: cat,
      monthlyBenefits: ["Priority " + cat + " Desk", "20% Discount"],
      yearlyBenefits: ["Gala Access for " + cat, "25% Discount"],
    })),
    upgradeTo: "Platinum",
  },
  {
    tier: "Platinum",
    tagline: "Ultimate Network Integration",
    prices: { monthly: "$999", yearly: "$9,999" },
    icon: "🏆",
    packages: CATEGORIES.map((cat) => ({
      name: "Platinum " + cat + " Package",
      category: cat,
      monthlyBenefits: ["Unlimited " + cat + " Concierge", "25% Discount"],
      yearlyBenefits: ["Global Retreats via " + cat, "30% Discount"],
    })),
    upgradeTo: "Crown",
  },
  {
    tier: "Crown",
    tagline: "The Pinnacle of Global Influence",
    prices: { monthly: "$1,999", yearly: "$19,999" },
    icon: "👑",
    packages: CATEGORIES.map((cat) => ({
      name: "Crown " + cat + " Privilege",
      category: cat,
      monthlyBenefits: ["Executive " + cat + " Support", "35% Discount"],
      yearlyBenefits: ["Strategic Partnership via " + cat, "40% Discount"],
    })),
    upgradeTo: null,
  },
];


const TIER_STYLING: Record<string, { from: string; to: string; accent: string; bg: string }> = {
  Bronze: { from: "from-slate-400", to: "to-slate-600", accent: "text-slate-600", bg: "bg-slate-50" },
  Silver: { from: "from-blue-400", to: "to-blue-600", accent: "text-blue-600", bg: "bg-blue-50" },
  Gold: { from: "from-amber-400", to: "to-amber-500", accent: "text-amber-600", bg: "bg-amber-50/50" },
  Diamond: { from: "from-cyan-400", to: "to-cyan-600", accent: "text-cyan-600", bg: "bg-cyan-50/50" },
  Platinum: { from: "from-indigo-400", to: "to-indigo-700", accent: "text-indigo-600", bg: "bg-indigo-50/50" },
  Crown: { from: "from-slate-800", to: "to-slate-950", accent: "text-slate-900", bg: "bg-slate-100" },
};

function TierCard({ tier, planType, onSelect }) {
  const styles = TIER_STYLING[tier.tier] || TIER_STYLING.Bronze;
  
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={() => onSelect(tier)}
      className="group relative cursor-pointer h-full"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.from} ${styles.to} rounded-[2.5rem] opacity-0 group-hover:opacity-10 dark:opacity-20 blur-2xl transition-opacity duration-500`} />
      
      <div className="h-full relative bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-slate-400/10 transition-all duration-500 flex flex-col items-center text-center">
        <div className={`w-20 h-20 rounded-3xl ${styles.bg} flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner overflow-hidden relative`}>
           <div className={`absolute inset-0 bg-gradient-to-br ${styles.from} ${styles.to} opacity-0 group-hover:opacity-10`} />
           {tier.icon}
        </div>
        
        <h3 className={`text-xs font-black uppercase tracking-[0.25em] ${styles.accent} mb-4`}>
          {tier.tier} Tier
        </h3>
        
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-5xl font-black text-slate-900 leading-none">{tier.prices[planType]}</span>
          <span className="text-slate-400 font-bold text-sm tracking-widest uppercase">/{planType === "monthly" ? "mo" : "yr"}</span>
        </div>
        
        <p className="text-slate-500 font-bold text-sm leading-relaxed mb-10 flex-1 px-4">
          {tier.tagline}
        </p>

        <div className="w-full space-y-4 mb-10 text-left px-4">
           {[1, 2, 3].map(i => (
             <div key={i} className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-widest">
               <ShieldCheck className={`w-4 h-4 ${styles.accent}`} />
               <span>Exclusive {tier.tier} Perk</span>
             </div>
           ))}
        </div>

        <button className={`w-full py-5 rounded-2xl bg-gradient-to-br ${styles.from} ${styles.to} text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl group-hover:shadow-2xl group-hover:scale-[1.02] active:scale-95 transition-all`}>
          Reserve Membership
        </button>
      </div>
    </motion.div>
  );
}

function TierDetailCard({ tier, planType, onUpgrade, onBack, onInvest }) {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const navigate = useNavigate();
  const styles = TIER_STYLING[tier.tier] || TIER_STYLING.Bronze;

  const handleCheckout = () => {
    const params = new URLSearchParams({
      tier: tier.tier,
      package: selectedPackage?.name || "Standard Portfolio",
      price: tier.prices[planType],
      plan: planType
    });
    navigate(`/payment?${params.toString()}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-6xl mx-auto px-6"
    >
      <div className="bg-white rounded-[3.5rem] shadow-[0_32px_128px_-16px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 flex flex-col lg:flex-row min-h-[700px]">
        {/* Left Signature Sidebar */}
        <div className={`w-full lg:w-[420px] bg-gradient-to-br ${styles.from} ${styles.to} p-16 text-white flex flex-col items-center justify-center text-center relative overflow-hidden shrink-0`}>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative z-10 w-32 h-32 bg-white/20 backdrop-blur-3xl rounded-[2.5rem] flex items-center justify-center text-6xl mb-8 border border-white/30 shadow-2xl"
          >
            {tier.icon}
          </motion.div>
          <h2 className="relative z-10 text-5xl font-black mb-2 tracking-tight">{tier.tier}</h2>
          <p className="relative z-10 text-white/70 font-black mb-10 uppercase tracking-[0.3em] text-[10px]">Elite Access Tier</p>
          
          <p className="relative z-10 text-sm font-medium leading-relaxed mb-auto opacity-90 italic">
            "{tier.tagline}"
          </p>

          <button 
            onClick={onBack}
            className="relative z-10 mt-8 flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Switch Tier
          </button>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 min-w-0 p-8 md:p-12 relative bg-slate-50/50">
          <AnimatePresence mode="wait">
            {!selectedPackage ? (
              <motion.div
                key="package-list"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Select Your Focus</h3>
                  <p className="text-slate-500 font-medium">Choose a specialized package that fits your lifestyle objective.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {tier.packages.length > 0 ? (
                    tier.packages.map((pkg) => (
                      <button
                        key={pkg.name}
                        onClick={() => setSelectedPackage(pkg)}
                        className="p-6 bg-white rounded-2xl border border-slate-200 text-left hover:border-blue-400 hover:shadow-xl transition-all group flex items-center justify-between"
                      >
                        <div>
                          <div className="font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                            {pkg.name}
                          </div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            {pkg.category}
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))
                  ) : (
                    <div className="p-8 text-center bg-white rounded-3xl border border-dashed border-slate-300">
                      <p className="text-slate-500 font-medium">Standard {tier.tier} features included.</p>
                      <button 
                        onClick={handleCheckout}
                        className={`mt-4 w-full py-4 rounded-2xl bg-gradient-to-br ${styles.from} ${styles.to} text-white font-black shadow-lg hover:shadow-2xl transition-all`}
                      >
                        Continue to Checkout
                      </button>
                    </div>
                  )}
                </div>

                {tier.upgradeTo && (
                  <div className="pt-6 border-t border-slate-200">
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100/50 flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-sm font-black text-blue-900 mb-1">Considering {tier.upgradeTo}?</div>
                        <p className="text-xs text-blue-700 font-medium">Get 2x more rewards and exclusive global access.</p>
                      </div>
                      <button 
                        onClick={() => onUpgrade(tier.upgradeTo)}
                        className="shrink-0 px-4 py-2 bg-white text-blue-600 rounded-xl text-xs font-black shadow-sm hover:shadow-md transition-shadow"
                      >
                        View {tier.upgradeTo}
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="package-detail"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full flex flex-col"
              >
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="mb-8 flex items-center gap-2 text-slate-400 hover:text-slate-600 font-bold text-sm transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Packages
                </button>

                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
                      {selectedPackage.category}
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 leading-tight">
                      {selectedPackage.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Benefits Included</div>
                    <div className="grid gap-3">
                      {(planType === "monthly" ? selectedPackage.monthlyBenefits : selectedPackage.yearlyBenefits).map((b) => (
                        <div key={b} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                          <span className="text-sm font-bold text-slate-700">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 space-y-4">
                  <button 
                    onClick={handleCheckout}
                    className={`w-full py-5 rounded-3xl bg-gradient-to-br ${styles.from} ${styles.to} text-white font-black text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3`}
                  >
                    Confirm & Proceed to Payment
                  </button>
                  <button 
                    onClick={onInvest}
                    className="w-full py-4 text-emerald-600 font-black text-sm hover:bg-emerald-50 rounded-2xl transition-colors"
                  >
                    Interested in Investing? Learn More
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Membership() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [planType, setPlanType] = useState("monthly");

  const handleUpgrade = (nextTier) => {
    const next = PACKAGE_TIERS.find((t) => t.tier === nextTier);
    if (next) setSelectedTier(next);
  };

  const handleInvest = () => {
    window.location.href = "/investment";
  };

  return (
    <>
      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <Hero
        label="Exclusive Network"
        title="Elevate Your Success Within Our Ecosystem"
        subtitle="Experience the world's most sophisticated digital-lifestyle network. Unlock global rewards, strategic networking, and 20 pillars of professional excellence."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        accentColor="text-blue-400"
      />

      {/* EXCLUSIVE BENEFITS */}
      <div className="relative z-10">
        <ExclusiveBenefits />
      </div>

      {/* COMMUNITY ACHIEVEMENTS */}
      <div className="relative z-10">
        <CommunityAchievements />
      </div>

      {/* MEMBERSHIP TIERS */}

      <div className="relative z-10">
        <SuccessFactorsSectionWithModal />
      </div>

      <div className="relative z-10">
        <MeetOurMembers />
      </div>

      {!selectedTier ? (
        <section className="relative w-full bg-gradient-to-br from-yellow-50 via-blue-50 to-white py-16 px-2 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-40 h-40 bg-yellow-200 rounded-full opacity-30 blur-2xl animate-pulse"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute bottom-0 right-0 w-60 h-60 bg-blue-200 rounded-full opacity-20 blur-2xl animate-pulse"
            style={{ zIndex: 0 }}
          />
          <div className="max-w-6xl mx-auto space-y-10 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-4 tracking-tight drop-shadow-lg">
              Premium Membership Tiers
            </h2>
            <div className="flex justify-center gap-4 mb-10">
              {PLAN_TYPES.map((pt) => (
                <button
                  key={pt.key}
                  className={`px-8 py-3 rounded-full border-2 font-semibold text-lg shadow-md transition-all duration-200 ${planType === pt.key ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white border-blue-700 scale-110" : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"}`}
                  onClick={() => setPlanType(pt.key)}
                >
                  {pt.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {PACKAGE_TIERS.map((tier, idx) => (
                <div
                  key={tier.tier}
                  className="transition-transform hover:-translate-y-2 hover:scale-105 duration-200"
                >
                  <TierCard
                    tier={tier}
                    planType={planType}
                    onSelect={setSelectedTier}
                  />
                  {idx === 2 && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-32 h-32 bg-yellow-100 rounded-full opacity-30 blur-2xl -z-10"
                      style={{ top: "60%" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="relative w-full bg-gradient-to-br from-yellow-50 via-blue-50 to-white py-16 px-4 overflow-hidden">
          <TierDetailCard
            tier={selectedTier}
            planType={planType}
            onUpgrade={handleUpgrade}
            onBack={() => setSelectedTier(null)}
            onInvest={handleInvest}
          />
        </section>
      )}

      {/* LEADERBOARD */}
      <div className="relative z-10">
        <Leaderboard />
      </div>

      {/* SOCIAL PROOF */}
      <div className="relative z-10">
        <SocialProof />
      </div>

      {/* CTA SECTION */}
      <section className="relative py-16 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white text-center overflow-hidden">
        <div
          className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-pulse"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute bottom-0 right-0 w-60 h-60 bg-blue-400 rounded-full opacity-20 blur-2xl animate-pulse"
          style={{ zIndex: 0 }}
        />
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Ready to Unlock Your Potential?
          </h2>
          <p className="mb-8 text-lg font-medium text-blue-100">
            Join the E-Spot Club today and gain access to an exclusive network
            of professionals, strategic rewards, and global opportunities.
          </p>
          <a
            href="/register"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 font-bold text-xl shadow-lg hover:scale-105 hover:from-yellow-200 hover:to-yellow-300 transition-transform duration-200"
          >
            Start Your Journey Now
          </a>
        </div>
      </section>
    </>
  );
}

// Add data for factor details and packages
const factorDetails = {
  "Personal Growth": {
    what: "Health, Knowledge, Training, Scholarships",
    why: "The foundation of success is personal growth.",
    espot: "E-SPOT offers health and wellness programs.",
    example: "Training in mindfulness and fitness.",
  },
  "Career & Success": {
    what: "Career, Entrepreneurship, Leadership, Platform",
    why: "Success in career and business.",
    espot: "E-SPOT offers career development programs.",
    example: "Entrepreneurship training and leadership workshops.",
  },
  Lifestyle: {
    what: "Environment, Entertainment, Freedom, Event",
    why: "The lifestyle of success.",
    espot: "E-SPOT offers lifestyle and entertainment programs.",
    example: "Events and entertainment.",
  },
  "Social & Impact": {
    what: "Networking, Relationship, Fame, Welfare",
    why: "The social impact of success.",
    espot: "E-SPOT offers networking and relationship programs.",
    example: "Networking events and relationship workshops.",
  },
  "Wealth & Influence": {
    what: "Wealth, Prosperity, Power, Fortune",
    why: "The wealth and influence of success.",
    espot: "E-SPOT offers wealth and influence programs.",
    example: "Wealth management and investment opportunities.",
  },
};

const factorPackages = {
  "Personal Growth": {
    id: "personal-growth",
    name: "Personal Growth Package",
    description: "Access to health and wellness programs.",
    features: ["Health", "Knowledge", "Training", "Scholarship"],
    price: 500,
  },
  "Career & Success": {
    id: "career-success",
    name: "Career & Success Package",
    description: "Access to career development programs.",
    features: ["Career", "Entrepreneurship", "Leadership", "Platform"],
    price: 999,
  },
  Lifestyle: {
    id: "lifestyle",
    name: "Lifestyle Package",
    description: "Access to lifestyle and entertainment programs.",
    features: ["Environment", "Entertainment", "Freedom", "Event"],
    price: 599,
  },
  "Social & Impact": {
    id: "social-impact",
    name: "Social & Impact Package",
    description: "Access to networking and relationship programs.",
    features: ["Networking", "Relationship", "Fame", "Welfare"],
    price: 599,
  },
  "Wealth & Influence": {
    id: "wealth-influence",
    name: "Wealth & Influence Package",
    description: "Access to wealth and influence programs.",
    features: ["Wealth", "Prosperity", "Power", "Fortune"],
    price: 999,
  },
};

const providerLogos = {
  ESpot: "https://example.com/espot-logo.png",
  "Partner A": "https://example.com/partner-a-logo.png",
  "Partner B": "https://example.com/partner-b-logo.png",
};
