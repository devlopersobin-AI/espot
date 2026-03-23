import React from "react";
import { useParams } from "react-router-dom";

// Example descriptions for each factor (expand as needed)
const FACTOR_DESCRIPTIONS: Record<string, { title: string; description: string }> = {
  health: {
    title: "Health",
    description:
      "Health is the foundation of a successful life and business. It encompasses physical, mental, and emotional well-being. Prioritizing health leads to increased energy, resilience, and productivity, enabling you to pursue your goals with vigor.",
  },
  knowledge: {
    title: "Knowledge",
    description:
      "Knowledge empowers you to make informed decisions, innovate, and adapt to change. Lifelong learning is essential for personal and professional growth.",
  },
  prosperity: {
    title: "Prosperity",
    description: "Prosperity is more than just wealth; it's the flourishing of your personal and professional life. It's about achieving your goals and creating a legacy.",
  },
  // Add more factor descriptions here...
};

export default function FactorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const factor = FACTOR_DESCRIPTIONS[slug || ""];

  if (!factor) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4 text-red-700">Factor Not Found</h1>
        <p className="text-gray-600">Sorry, we couldn't find details for this factor.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold mb-4 text-blue-900">{factor.title}</h1>
      <p className="text-lg text-gray-700 mb-8">{factor.description}</p>
      {/* Add more details, resources, or links here as needed */}
    </div>
  );
}
