import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Check, ArrowRight, Shield, Zap, Star, Trophy, Crown, Gem, Award, Users, Globe, TrendingUp, Sparkles, Building2 } from "lucide-react";
import Hero from "../../components/Hero";

// 20 Factors for Life & Business Success data
const SUCCESS_FACTORS_DETAILED = [
  {
    title: "Personal Growth",
    category: "Mind & Body",
    icon: "🧠",
    description: "Personal growth is the continuous process of understanding and developing oneself in order to achieve one's fullest potential.",
    items: [
      { name: "Health", desc: "Vitality is the foundation of all success. Focus on physical and mental well-being." },
      { name: "Knowledge", desc: "Continuous learning and intellectual curiosity power innovation and growth." },
      { name: "Training", desc: "Practical skill-building and disciplined practice for mastery." },
      { name: "Scholarship", desc: "Deep academic achievement and research to lead your field." }
    ],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Career & Success",
    category: "Professional Path",
    icon: "💼",
    description: "Building a meaningful career and achieving success through strategic execution and visionary leadership.",
    items: [
      { name: "Career", desc: "Crafting a path that aligns with your passions and professional goals." },
      { name: "Entrepreneurship", desc: "The bold pursuit of opportunities to create value and innovation." },
      { name: "Leadership", desc: "Inspiring others and guiding organizations toward excellence." },
      { name: "Platform", desc: "Leveraging tools and networks to amplify your professional impact." }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Lifestyle",
    category: "Living Excellence",
    icon: "🌍",
    description: "Designing a life of freedom, joy, and meaningful experiences that transcend the ordinary.",
    items: [
      { name: "Environment", desc: "Surrounding yourself with settings that inspire and sustain you." },
      { name: "Entertainment", desc: "Curated experiences that bring joy and cultural enrichment." },
      { name: "Freedom", desc: "The autonomy to live on your own terms and pursue what matters." },
      { name: "Event", desc: "Memorable gatherings and milestones that celebrate life's journey." }
    ],
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Social & Impact",
    category: "Global Connection",
    icon: "🌎",
    description: "Creating positive change and building deep relationships that leave a lasting legacy.",
    items: [
      { name: "Networking", desc: "Building authentic connections that open doors to new possibilities." },
      { name: "Relationship", desc: "Cultivating meaningful bonds with family, friends, and peers." },
      { name: "Fame", desc: "Managing your reputation and influence for greater social reach." },
      { name: "Welfare", desc: "Contributing to the well-being of others and the community." }
    ],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Wealth & Influence",
    category: "Financial Mastery",
    icon: "💰",
    description: "Achieving financial freedom and leveraging resources to drive global influence.",
    items: [
      { name: "Wealth", desc: "Total financial independence and the mastery of asset creation." },
      { name: "Prosperity", desc: "A state of thriving across all areas of financial and personal life." },
      { name: "Power", desc: "The capacity and influence to affect change on a grand scale." },
      { name: "Fortune", desc: "Attracting luck and opportunity through readiness and strategy." }
    ],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80"
  }
];

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function SuccessFactorsSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl mb-24">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Core Philosophy</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            20 Factors for <br />
            <span className="text-slate-400">Life & Business Success</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
            Explore the core pillars that define excellence in the E-SPOT ecosystem. 
            Each factor is a stepping stone toward personal mastery and professional legacy.
          </p>
        </div>

        <div className="space-y-32 sm:space-y-48">
          {SUCCESS_FACTORS_DETAILED.map((factor, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={factor.title}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 group relative">
                  <div className="aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                    <img 
                      src={factor.image} 
                      alt={factor.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 text-white">
                       <span className="text-4xl mb-3 block">{factor.icon}</span>
                       <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">{factor.category}</p>
                       <h3 className="text-2xl font-black tracking-tight">{factor.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                   <div className="max-w-xl">
                      <div className="w-8 h-1 bg-blue-600 mb-6" />
                      <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{factor.title}</h3>
                      <p className="text-base text-slate-500 leading-relaxed font-medium mb-10">{factor.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                        {factor.items.map((item) => (
                          <div key={item.name} className="group">
                            <h5 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                              {item.name}
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </h5>
                            <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>

                      <button 
                        onClick={() => navigate(`/factor-category/${slugify(factor.title)}`)}
                        className="mt-12 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors border-b-2 border-slate-100 pb-1"
                      >
                        Explore Dimension <ArrowRight className="w-4 h-4" />
                      </button>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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

const TIER_ICONS = {
  Bronze: Users,
  Silver: Globe,
  Gold: Star,
  Diamond: Gem,
  Platinum: Trophy,
  Crown: Crown,
};

export const PACKAGE_TIERS = [
  {
    tier: "Bronze",
    tagline: "Entry Level - Start Your Journey",
    prices: { monthly: "$0", yearly: "$0" },
    icon: TIER_ICONS.Bronze,
    packages: [],
    upgradeTo: "Silver",
    color: "from-slate-400 to-slate-500"
  },
  {
    tier: "Silver",
    tagline: "Step Into Lifestyle",
    prices: { monthly: "$99", yearly: "$999" },
    icon: TIER_ICONS.Silver,
    packages: CATEGORIES.slice(0, 4).map((cat) => ({
      name: `Silver ${cat} Package`,
      category: cat,
      monthlyBenefits: [
        `Access to ${cat} services (monthly)`,
        "Up to 10% discount",
        "Basic offers",
      ],
      yearlyBenefits: [
        `Access to ${cat} services (yearly)`,
        "Up to 15% discount",
        "Priority booking",
        "Exclusive yearly offers",
      ],
    })),
    upgradeTo: "Gold",
    color: "from-blue-500 to-blue-600"
  },
  {
    tier: "Gold",
    tagline: "Upgrade Your Experience",
    prices: { monthly: "$299", yearly: "$2,999" },
    icon: TIER_ICONS.Gold,
    packages: CATEGORIES.slice(0, 6).map((cat) => ({
      name: `Gold ${cat} Package`,
      category: cat,
      monthlyBenefits: [
        `Full access to ${cat} (monthly)`,
        "Up to 15% discount",
        "Priority booking",
        "Special gold offers",
      ],
      yearlyBenefits: [
        `Full access to ${cat} (yearly)`,
        "Up to 20% discount",
        "VIP support",
        "Annual gold rewards",
      ],
    })),
    upgradeTo: "Diamond",
    color: "from-amber-400 to-amber-500"
  },
  {
    tier: "Diamond",
    tagline: "Elite Access & Privileges",
    prices: { monthly: "$599", yearly: "$5,999" },
    icon: TIER_ICONS.Diamond,
    packages: CATEGORIES.slice(0, 7).map((cat) => ({
      name: `Diamond ${cat} Package`,
      category: cat,
      monthlyBenefits: [
        `Elite access to ${cat} (monthly)`,
        "Up to 20% discount",
        "Diamond-only events",
        "Priority support",
      ],
      yearlyBenefits: [
        `Elite access to ${cat} (yearly)`,
        "Up to 25% discount",
        "Diamond annual gala invite",
        "Exclusive diamond rewards",
      ],
    })),
    upgradeTo: "Platinum",
    color: "from-cyan-400 to-cyan-500"
  },
  {
    tier: "Platinum",
    tagline: "Premium Lifestyle & Rewards",
    prices: { monthly: "$999", yearly: "$9,999" },
    icon: TIER_ICONS.Platinum,
    packages: CATEGORIES.slice(0, 8).map((cat) => ({
      name: `Platinum ${cat} Package`,
      category: cat,
      monthlyBenefits: [
        `Premium access to ${cat} (monthly)`,
        "Up to 25% discount",
        "Platinum-only offers",
        "Concierge support",
      ],
      yearlyBenefits: [
        `Premium access to ${cat} (yearly)`,
        "Up to 30% discount",
        "Platinum annual retreat",
        "Exclusive platinum rewards",
      ],
    })),
    upgradeTo: "Crown",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    tier: "Crown",
    tagline: "Ultimate Club Experience",
    prices: { monthly: "$1,999", yearly: "$19,999" },
    icon: TIER_ICONS.Crown,
    packages: CATEGORIES.map((cat) => ({
      name: `Crown ${cat} Package`,
      category: cat,
      monthlyBenefits: [
        `Ultimate access to ${cat} (monthly)`,
        "Up to 35% discount",
        "Crown-only privileges",
        "Personal club manager",
      ],
      yearlyBenefits: [
        `Ultimate access to ${cat} (yearly)`,
        "Up to 40% discount",
        "Crown annual summit",
        "Lifetime rewards",
      ],
    })),
    upgradeTo: null,
    color: "from-slate-800 to-black"
  },
];

function TierCard({ tier, planType, onSelect }: any) {
  const Icon = tier.icon;
  return (
    <button
      onClick={() => onSelect(tier)}
      className="group relative flex flex-col w-full h-full rounded-2xl overflow-hidden bg-white border border-slate-200 transition-all hover:shadow-2xl hover:-translate-y-1"
    >
      <div className={`h-2 w-full bg-gradient-to-r ${tier.color}`} />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
            <Icon className="w-6 h-6 text-slate-900 group-hover:text-blue-600" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            {planType}
          </span>
        </div>
        
        <h3 className="text-2xl font-black text-slate-900 mb-1 tracking-tight">
          {tier.tier}
        </h3>
        <p className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">
          {tier.tagline}
        </p>
        
        <div className="mb-8">
           <span className="text-4xl font-black text-slate-900 tracking-tighter">
             {tier.prices[planType]}
           </span>
           <span className="text-xs font-bold text-slate-400 ml-1">
             /{planType === 'monthly' ? 'mo' : 'yr'}
           </span>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-50">
           <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:gap-3 transition-all">
             View Packages <ArrowRight className="w-4 h-4" />
           </span>
        </div>
      </div>
    </button>
  );
}

function TierDetailCard({ tier, planType, onUpgrade, onBack, onInvest }: any) {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  if (!tier.packages || tier.packages.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-100 max-w-2xl mx-auto">
        <button onClick={onBack} className="mb-8 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 flex items-center gap-2">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Tiers
        </button>
        <div className="flex items-center gap-4 mb-8">
           <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center">
             <tier.icon className="w-8 h-8 text-slate-900" />
           </div>
           <div>
              <h2 className="text-3xl font-black text-slate-900 leading-none">{tier.tier}</h2>
              <p className="text-sm font-bold text-slate-400 mt-2 uppercase tracking-wide">{tier.tagline}</p>
           </div>
        </div>
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 mb-10">
           <p className="text-slate-600 font-medium mb-2">Membership Fee</p>
           <span className="text-5xl font-black text-slate-900">{tier.prices[planType]}</span>
           <span className="ml-2 text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">
             {planType === "monthly" ? "Per Month" : "Per Year"}
           </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <button
             className="py-4 bg-slate-900 text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2"
             onClick={() => onUpgrade("Silver")}
           >
             Upgrade to Silver <ArrowRight className="w-4 h-4" />
           </button>
           <button
             className="py-4 bg-white border-2 border-emerald-600 text-emerald-600 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
             onClick={onInvest}
           >
             Invest <TrendingUp className="w-4 h-4" />
           </button>
        </div>
      </div>
    );
  }

  const handleSelectPackage = (pkg: any) => {
    localStorage.setItem(`active-membership-tier-Member`, tier.tier);
    localStorage.setItem(`selected-membership-plan-Member`, JSON.stringify([pkg.name]));
    alert(`${pkg.name} selected!`);
    window.location.href = "/auth";
  };

  if (!selectedPackage) {
    return (
      <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-100 w-full">
        <button onClick={onBack} className="mb-8 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 flex items-center gap-2">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Tiers
        </button>
        <div className="mb-12">
           <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{tier.tier} Packages</h2>
           <p className="text-slate-500 font-medium">Select a category-specific package to unlock tailored benefits and privileges.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tier.packages.map((pkg: any) => (
            <button
              key={pkg.name}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-left hover:shadow-xl hover:border-blue-600 transition-all"
              onClick={() => setSelectedPackage(pkg)}
            >
              <div className="h-1 w-8 bg-blue-600/20 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500 mb-4" />
              <h4 className="font-black text-slate-900 mb-2">{pkg.name}</h4>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{pkg.category}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-100 w-full max-w-3xl mx-auto">
      <button onClick={() => setSelectedPackage(null)} className="mb-10 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 flex items-center gap-2">
        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Packages
      </button>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-12 border-b border-slate-100">
         <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-3">{tier.tier} Tier · {selectedPackage.category}</p>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">{selectedPackage.name}</h2>
         </div>
         <div className="text-right">
            <span className="text-4xl font-black text-slate-900">{tier.prices[planType]}</span>
            <span className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-widest">/{planType === 'monthly' ? 'Month' : 'Year'}</span>
         </div>
      </div>

      <div className="mb-16">
        <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Premium Benefits</h5>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          {(planType === "monthly" ? selectedPackage.monthlyBenefits : selectedPackage.yearlyBenefits).map((b: string) => (
            <li key={b} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                 <Check className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm font-semibold text-slate-600 leading-tight">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
         <button
           className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3"
           onClick={() => handleSelectPackage(selectedPackage)}
         >
           Confirm Selection <ArrowRight className="w-5 h-5" />
         </button>
         <button
           className="w-full py-4 text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] hover:text-slate-900 transition-colors"
           onClick={onInvest}
         >
           Interested in Investment? Learn More
         </button>
      </div>
    </div>
  );
}

export default function Membership() {
  const [selectedTier, setSelectedTier] = useState<any>(null);
  const [planType, setPlanType] = useState<string>("monthly");

  const handleUpgrade = (nextTier: string) => {
    const next = PACKAGE_TIERS.find((t) => t.tier === nextTier);
    if (next) setSelectedTier(next);
  };

  const handleInvest = () => {
    window.location.href = "/investment";
  };

  return (
    <div className="bg-white">
      <Hero
        bgColor="bg-slate-900"
        accentColor="text-blue-400"
        title="Membership"
        subtitle="Access an exclusive global network of entrepreneurs, partners, and club facilities tailored to your lifestyle and growth."
        label="E-SPOT CLUB"
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
      />

      <SuccessFactorsSection />
      
      {!selectedTier ? (
        <section className="w-full bg-slate-50 py-32 px-4">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Pricing Models</p>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  Membership Tiers
                </h2>
                <p className="text-lg text-slate-500 font-medium mt-6">
                  Select the tier that best fits your regional or global ambitions. Each level unlocks deeper access and greater rewards.
                </p>
              </div>

              <div className="bg-white p-1 rounded-2xl shadow-xl flex border border-slate-100">
                {["monthly", "yearly"].map((pt) => (
                  <button
                    key={pt}
                    className={`px-10 py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${planType === pt ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-600"}`}
                    onClick={() => setPlanType(pt)}
                  >
                    {pt}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {PACKAGE_TIERS.map((tier) => (
                <div key={tier.tier} className="h-full">
                  <TierCard
                    tier={tier}
                    planType={planType}
                    onSelect={setSelectedTier}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-32 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <TierDetailCard
              tier={selectedTier}
              planType={planType}
              onUpgrade={handleUpgrade}
              onBack={() => setSelectedTier(null)}
              onInvest={handleInvest}
            />
          </div>
        </section>
      )}
    </div>
  );
}
