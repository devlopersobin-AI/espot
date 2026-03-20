import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const outsourcingSectors = [
  {
    label: "Finance, Accounting & CFO Operations",
    slug: "finance-accounting",
  },
  {
    label: "Human Capital, HR Operations & Workforce Solutions",
    slug: "human-capital-hr",
  },
  {
    label: "Technology, Software Engineering & IT Operations",
    slug: "technology-it",
  },
  {
    label: "Digital Marketing, Brand Strategy & Revenue Growth",
    slug: "digital-marketing",
  },
  {
    label: "AI, Automation & Data Intelligence",
    slug: "ai-automation",
  },
  {
    label: "Global Trade, Operations & Supply Chain Management",
    slug: "global-trade-supply-chain",
  },
  {
    label: "Creative, Design & Media Production",
    slug: "creative-design-media",
  },
  {
    label: "Investment, Venture Building & Business Platforms",
    slug: "investment-venture-building",
  },
];

export default function Outsource() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-cyan-900">
        Outsource Investment Ventures
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {outsourcingSectors.map((sector, i) => (
          <motion.div
            key={sector.slug}
            className="rounded-xl border border-cyan-200 bg-white p-4 flex flex-col items-start shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 60 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(6, 182, 212, 0.15)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="w-full h-32 bg-gradient-to-br from-cyan-100 to-cyan-200 border border-cyan-300 rounded-lg flex items-center justify-center text-cyan-700 font-bold text-lg mb-3"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{
                delay: i * 0.08 + 0.1,
                type: "spring",
                stiffness: 80,
              }}
            >
              Profit Sharing Diagram
            </motion.div>
            <div className="font-semibold text-cyan-800 mb-2">
              {sector.label}
            </div>
            <Link
              to={`/investment/outsourcing/${sector.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-900 mt-auto"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
