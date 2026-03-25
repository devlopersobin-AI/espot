import React from "react";

const benefits = [
  {
    label: "Community",
    title: "Exclusive Network",
    description:
      "Access private communities, curated introductions, and high-value member circles.",
    color: "blue",
  },
  {
    label: "Skill Development",
    title: "80+ Workshops Yearly",
    description: "No description available.",
    color: "purple",
  },
  {
    label: "Rewards",
    title: "Member Perks",
    description:
      "Unlock partner discounts, marketplace credits, and invite-only offers from 860+ brands.",
    color: "yellow",
  },
  {
    label: "Recognition Program",
    title: "Earn 5000+ Points",
    description: "No description available.",
    color: "green",
  },
];

export default function ExclusiveBenefits() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xs font-semibold text-blue-700 uppercase tracking-widest text-center mb-2">
          Exclusive Benefits
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-blue-900">
          More Than Just
          <br />A Membership.
        </h3>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Unlock a world of strategic networking, skill development, and premium
          rewards designed for the modern professional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-start border border-blue-100 min-h-[180px]"
            >
              <span
                className={`text-xs font-semibold mb-1 ${
                  b.color === "blue"
                    ? "text-blue-600"
                    : b.color === "purple"
                      ? "text-purple-600"
                      : b.color === "yellow"
                        ? "text-yellow-600"
                        : "text-green-600"
                }`}
              >
                {b.label}
              </span>
              <div className="font-bold text-lg mb-1 text-blue-900">
                {b.title}
              </div>
              <div className="text-sm text-gray-700 mb-2">{b.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
