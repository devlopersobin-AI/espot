import React from "react";
import { useNavigate } from "react-router-dom";
import { PACKAGE_TIERS } from "../public/Membership";

const FACTORS = [
  {
    title: "Personal Growth",
    icon: "🧠",
    description:
      "Unlock your full potential with resources for health, knowledge, training, and scholarships.",
    packages: PACKAGE_TIERS.map((tier) => ({
      tier: tier.tier,
      tagline: tier.tagline,
      price: tier.prices,
      benefits:
        tier.packages.find((p) => p.category === "Wellness & Fitness")
          ?.monthlyBenefits || [],
    })),
  },
  {
    title: "Career & Success",
    icon: "💼",
    description:
      "Advance your career with entrepreneurship, leadership, and platform opportunities.",
    packages: PACKAGE_TIERS.map((tier) => ({
      tier: tier.tier,
      tagline: tier.tagline,
      price: tier.prices,
      benefits:
        tier.packages.find((p) => p.category === "Events")?.monthlyBenefits ||
        [],
    })),
  },
  {
    title: "Lifestyle",
    icon: "🌍",
    description:
      "Enjoy a vibrant lifestyle with access to exclusive events, entertainment, and freedom.",
    packages: PACKAGE_TIERS.map((tier) => ({
      tier: tier.tier,
      tagline: tier.tagline,
      price: tier.prices,
      benefits:
        tier.packages.find((p) => p.category === "Tours & Travel")
          ?.monthlyBenefits || [],
    })),
  },
  {
    title: "Social & Impact",
    icon: "🌎",
    description:
      "Make a difference through networking, relationships, fame, and welfare initiatives.",
    packages: PACKAGE_TIERS.map((tier) => ({
      tier: tier.tier,
      tagline: tier.tagline,
      price: tier.prices,
      benefits:
        tier.packages.find((p) => p.category === "Events & Wedding Mgmt")
          ?.monthlyBenefits || [],
    })),
  },
  {
    title: "Wealth & Influence",
    icon: "💰",
    description:
      "Grow your wealth and influence with prosperity, power, and fortune opportunities.",
    packages: PACKAGE_TIERS.map((tier) => ({
      tier: tier.tier,
      tagline: tier.tagline,
      price: tier.prices,
      benefits:
        tier.packages.find((p) => p.category === "Outsourcing")
          ?.monthlyBenefits || [],
    })),
  },
];

export default function FactorCategoryPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
        Success Factors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FACTORS.map((factor) => (
          <div
            key={factor.title}
            className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-2xl transition cursor-pointer"
            onClick={() =>
              navigate(
                `/factor-category/${factor.title.toLowerCase().replace(/\s+/g, "-")}`,
              )
            }
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{factor.icon}</span>
              <span className="font-bold text-2xl text-blue-800">
                {factor.title}
              </span>
            </div>
            <div className="text-gray-700 mb-4">{factor.description}</div>
            <div className="grid grid-cols-1 gap-2">
              {factor.packages.map((pkg) => (
                <div
                  key={pkg.tier}
                  className="bg-blue-50 rounded-lg p-4 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-blue-700">{pkg.tier}</span>
                    <span className="text-xs text-blue-500">{pkg.tagline}</span>
                  </div>
                  <div className="text-xs text-blue-900 mb-1">
                    {pkg.price.monthly} / {pkg.price.yearly}
                  </div>
                  <ul className="text-xs text-blue-700 list-disc pl-5">
                    {pkg.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
