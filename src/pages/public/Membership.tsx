import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 20 Factors for Life & Business Success data
const FACTORS = [
  {
    title: "Personal Growth",
    icon: "🧠",
    items: ["Health", "Knowledge", "Training", "Scholarship"],
  },
  {
    title: "Career & Success",
    icon: "💼",
    items: ["Career", "Entrepreneurship", "Leadership", "Platform"],
  },
  {
    title: "Lifestyle",
    icon: "🌍",
    items: ["Environment", "Entertainment", "Freedom", "Event"],
  },
  {
    title: "Social & Impact",
    icon: "🌎",
    items: ["Networking", "Relationship", "Fame", "Welfare"],
  },
  {
    title: "Wealth & Influence",
    icon: "💰",
    items: ["Wealth", "Prosperity", "Power", "Fortune"],
  },
];

// 20 Factors for Life & Business Success data (3 rows, 2-3-1-2 layout, no duplicates)
const FACTORS_ROWS = [
  [
    {
      title: "Personal Growth",
      icon: "🧠",
      items: ["Health", "Knowledge", "Training", "Scholarship"],
    },
    {
      title: "Career & Success",
      icon: "💼",
      items: ["Career", "Entrepreneurship", "Leadership", "Platform"],
    },
  ],
  [
    {
      title: "Lifestyle",
      icon: "🌍",
      items: ["Environment", "Entertainment", "Freedom", "Event"],
    },
    {
      title: "Social & Impact",
      icon: "🌎",
      items: ["Networking", "Relationship", "Fame", "Welfare"],
    },
  ],
  [
    {
      title: "Wealth & Influence",
      icon: "💰",
      items: ["Wealth", "Prosperity", "Power", "Fortune"],
    },
  ],
];

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function SuccessFactorsSection() {
  const navigate = useNavigate();
  return (
    <section className="py-12 bg-gradient-to-b from-green-100 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-green-900">
          20 Factors for Life &amp; Business Success
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore the core factors that contribute to success in both life and
          business.
          <br />
          Each of these plays a vital role in personal and professional growth.
        </p>
        <div className="flex flex-col gap-8">
          {FACTORS_ROWS.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-row justify-center gap-8">
              {row.map((factor) => {
                const categorySlug = slugify(factor.title);
                return (
                  <div
                    key={factor.title + factor.icon}
                    className="bg-white rounded-2xl shadow p-8 flex flex-col items-center min-w-[260px] max-w-[320px] w-full border border-green-100 cursor-pointer hover:ring-2 hover:ring-green-300 transition"
                    onClick={() => navigate(`/factor-category/${categorySlug}`)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Go to ${factor.title}`}
                  >
                    <div className="text-5xl mb-3 drop-shadow-sm">
                      {factor.icon}
                    </div>
                    <div className="font-bold text-xl mb-3 text-green-800 text-center">
                      {factor.title}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {factor.items.map((item) => (
                        <span
                          key={item}
                          className="bg-green-50 border border-green-200 rounded px-3 py-1 text-sm text-green-700 flex items-center gap-1 cursor-pointer hover:bg-green-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/factor/${slugify(item)}`);
                          }}
                          tabIndex={0}
                          role="button"
                          aria-label={`Go to ${item}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

<div className="flex flex-col gap-8">
  {FACTORS_ROWS.map((row, rowIdx) => (
    <div key={rowIdx} className="flex flex-row justify-center gap-8">
      {row.map((factor) => (
        <div
          key={factor.title + factor.icon}
          className="bg-white rounded-2xl shadow p-8 flex flex-col items-center min-w-[260px] max-w-[320px] w-full border border-green-100"
        >
          <div className="text-5xl mb-3 drop-shadow-sm">{factor.icon}</div>
          <div className="font-bold text-xl mb-3 text-green-800 text-center">
            {factor.title}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {factor.items.map((item) => (
              <span
                key={item}
                className="bg-green-50 border border-green-200 rounded px-3 py-1 text-sm text-green-700 flex items-center gap-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  ))}
</div>;
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

// Add icons for each tier
const TIER_ICONS = {
  Bronze: "🥉",
  Silver: "🥈",
  Gold: "🥇",
  Diamond: "💎",
  Platinum: "🏆",
  Crown: "👑",
};

export const PACKAGE_TIERS = [
  {
    tier: "Bronze",
    tagline: "Entry Level - Start Your Journey",
    prices: { monthly: "$0", yearly: "$0" },
    icon: TIER_ICONS.Bronze,
    packages: [],
    upgradeTo: "Silver",
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
  },
];

// ================= COMPONENTS =================

function TierCard({ tier, planType, onSelect }) {
  // Fallback for tiers that don't have a benefits property
  const benefits = tier.benefits || [];
  return (
    <button
      onClick={() => onSelect(tier)}
      className="rounded-3xl p-8 border-2 border-blue-100 shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-all flex flex-col items-center min-h-[260px] max-w-[340px] w-full group focus:outline-none focus:ring-4 focus:ring-blue-200"
    >
      <div className="text-4xl mb-2 group-hover:scale-125 transition-transform">
        {tier.icon}
      </div>
      <h3 className="text-2xl font-extrabold mb-1 text-blue-900 tracking-wide">
        {tier.tier}
      </h3>
      <p className="text-3xl font-black mb-1 text-blue-700">
        {tier.prices[planType]}
      </p>
      <p className="text-base text-gray-600 mb-2 font-medium">{tier.tagline}</p>
      <ul className="text-xs text-gray-500 mb-2 hidden">
        {benefits.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-auto">
        {planType === "monthly" ? "Monthly" : "Yearly"} Plan
      </span>
    </button>
  );
}

function TierDetailCard({ tier, planType, onUpgrade, onBack, onInvest }) {
  const [selectedPackage, setSelectedPackage] = useState(null);

  if (!tier.packages || tier.packages.length === 0) {
    // Bronze: show upgrade or investment
    return (
      <div className="border rounded-2xl p-6 bg-gray-50 flex flex-col">
        <button
          onClick={onBack}
          className="mb-2 text-blue-600 text-sm self-start"
        >
          ← Back
        </button>
        <h2 className="text-xl font-bold mb-2">{tier.tier} Membership</h2>
        <p className="mb-2 text-gray-600">{tier.tagline}</p>
        <div className="mb-2">
          <span className="font-bold text-lg">{tier.prices[planType]}</span>
          <span className="ml-2 text-xs text-blue-600">
            {planType === "monthly" ? "Monthly" : "Yearly"} Plan
          </span>
        </div>
        <div className="mb-2">Upgrade to enjoy more benefits!</div>
        <button
          className="mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          onClick={() => onUpgrade(tier.upgradeTo)}
        >
          Upgrade to Silver
        </button>
        <button
          className="mt-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          onClick={onInvest}
        >
          Invest in E-SPOT Club
        </button>
      </div>
    );
  }

  if (!selectedPackage) {
    return (
      <div className="border-2 rounded-3xl p-8 bg-gradient-to-br from-blue-50 to-white flex flex-col shadow-xl">
        <button
          onClick={onBack}
          className="mb-4 text-blue-700 text-base font-semibold self-start hover:underline"
        >
          ← Back
        </button>
        <h2 className="text-2xl font-extrabold mb-2 text-blue-900">
          {tier.tier} Membership Packages
        </h2>
        <p className="mb-6 text-gray-700 text-base">
          Choose a package as per your need:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tier.packages.map((pkg) => (
            <button
              key={pkg.name}
              className="rounded-2xl border-2 border-blue-100 bg-white p-6 text-left shadow-md hover:shadow-xl hover:border-blue-400 hover:bg-blue-50 transition-all flex flex-col min-h-[110px] focus:outline-none focus:ring-4 focus:ring-blue-200"
              onClick={() => setSelectedPackage(pkg)}
            >
              <div className="font-bold text-lg text-blue-900 mb-1">
                {pkg.name}
              </div>
              <div className="text-sm text-blue-700 font-medium">
                {pkg.category}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Show selected package details
  return (
    <div className="border rounded-2xl p-6 bg-gray-50 flex flex-col">
      <button
        onClick={() => setSelectedPackage(null)}
        className="mb-2 text-blue-600 text-sm self-start"
      >
        ← Back to Packages
      </button>
      <h2 className="text-xl font-bold mb-2">{selectedPackage.name}</h2>
      <div className="mb-2 text-xs text-gray-500">
        {selectedPackage.category}
      </div>
      <div className="mb-2">
        <span className="font-bold text-lg">{tier.prices[planType]}</span>
        <span className="ml-2 text-xs text-blue-600">
          {planType === "monthly" ? "Monthly" : "Yearly"} Plan
        </span>
      </div>
      <div className="mb-2">
        <span className="font-semibold">What you get:</span>
        <ul className="list-disc pl-5 text-sm">
          {(planType === "monthly"
            ? selectedPackage.monthlyBenefits
            : selectedPackage.yearlyBenefits
          ).map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      {tier.upgradeTo && (
        <button
          className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          onClick={() => onUpgrade(tier.upgradeTo)}
        >
          Upgrade to {tier.upgradeTo}
        </button>
      )}
      <button
        className="mt-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        onClick={onInvest}
      >
        Invest in E-SPOT Club
      </button>
    </div>
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
      <SuccessFactorsSection />
      {!selectedTier ? (
        <section className="w-full bg-gradient-to-b from-blue-50 to-white py-12 px-2">
          <div className="max-w-6xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-900 mb-2 tracking-tight drop-shadow">
              Membership Tiers
            </h2>
            <div className="flex justify-center gap-4 mb-8">
              {PLAN_TYPES.map((pt) => (
                <button
                  key={pt.key}
                  className={`px-6 py-2 rounded-full border-2 font-semibold text-lg shadow-sm transition-all duration-150 ${planType === pt.key ? "bg-blue-700 text-white border-blue-700 scale-105" : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"}`}
                  onClick={() => setPlanType(pt.key)}
                >
                  {pt.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {PACKAGE_TIERS.map((tier) => (
                <div key={tier.tier}>
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
        <div className="max-w-2xl mx-auto">
          <TierDetailCard
            tier={selectedTier}
            planType={planType}
            onUpgrade={handleUpgrade}
            onBack={() => setSelectedTier(null)}
            onInvest={handleInvest}
          />
        </div>
      )}
    </>
  );
}
