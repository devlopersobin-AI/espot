import React from "react";

interface HeroProps {
  bgColor?: string;
  accentColor?: string;
  title: string;
  subtitle: string;
  label?: string;
}

const Hero: React.FC<HeroProps> = ({
  bgColor = "bg-slate-900",
  accentColor = "text-slate-300",
  title,
  subtitle,
  label = "Module",
}) => (
  <section
    className={`relative overflow-hidden ${bgColor} text-white border-b border-slate-800/70`}
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-12">
      {/* Back to Home link for mobile/smaller screens */}
      <div className="mb-3 block sm:hidden">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-blue-200 hover:text-white text-xs font-semibold px-2 py-1 rounded transition-colors bg-blue-800/60 hover:bg-blue-700/80"
          style={{ textDecoration: "none" }}
        >
          <span style={{ fontSize: "16px", lineHeight: 1 }}>&#8592;</span> Back
          to Home
        </a>
      </div>
      <div className="max-w-3xl">
        {label && (
          <p
            className={`inline-flex text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase mb-2 ${accentColor}`}
          >
            {label}
          </p>
        )}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight mb-2">
          {title}
        </h1>
        <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
