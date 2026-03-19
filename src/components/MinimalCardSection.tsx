import React from "react";
import { Link } from "react-router-dom";

export interface MinimalCardSectionProps {
  sectionLabel?: string;
  heading: string;
  subheading?: string;
  items: Array<{
    title: string;
    description: string;
    image?: string;
    provider?: { name: string; link: string };
    link?: string;
    linkLabel?: string;
  }>;
  dark?: boolean;
}

const MinimalCardSection: React.FC<MinimalCardSectionProps> = ({
  sectionLabel,
  heading,
  subheading,
  items,
  dark = true,
}) => {
  return (
    <section
      className={
        dark
          ? "bg-[#111215] text-white py-16 px-2"
          : "bg-white text-slate-900 py-16 px-2"
      }
    >
      <div className="max-w-6xl mx-auto">
        {sectionLabel && (
          <div className="text-center text-sm font-bold tracking-widest mb-2 text-red-400 uppercase">
            {sectionLabel}
          </div>
        )}
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-4">
          {heading}
        </h2>
        {subheading && (
          <p className="text-center text-base sm:text-lg mb-12 text-slate-300 max-w-2xl mx-auto">
            {subheading}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {items.map((item, idx) => {
            const CardContent = (
              <>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-md mb-4 shadow-sm"
                    style={{ background: "#f3f4f6" }}
                  />
                )}
                <h3 className="text-lg font-bold mb-2 leading-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-700 flex-1 mb-3">
                  {item.description}
                </p>
                {item.provider && (
                  <Link
                    to={item.provider.link}
                    className="text-xs text-blue-700 font-semibold hover:underline mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Provided by: {item.provider.name}
                  </Link>
                )}
              </>
            );
            return item.link ? (
              <Link
                key={idx}
                to={item.link}
                className={
                  (dark
                    ? "bg-[#18191c] border border-[#232428] rounded-xl p-8 flex flex-col h-full"
                    : "bg-white rounded-xl p-8 flex flex-col h-full shadow-md") +
                  " transition hover:shadow-lg hover:ring-2 hover:ring-emerald-200 focus:outline-none"
                }
                style={{ minHeight: 340 }}
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={idx}
                className={
                  dark
                    ? "bg-[#18191c] border border-[#232428] rounded-xl p-8 flex flex-col h-full"
                    : "bg-white rounded-xl p-8 flex flex-col h-full shadow-md"
                }
                style={{ minHeight: 340 }}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MinimalCardSection;
