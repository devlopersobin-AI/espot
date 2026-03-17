import React from 'react';

interface HeroProps {
  bgColor?: string;
  accentColor?: string;
  title: string;
  subtitle: string;
  label?: string;
}

const Hero: React.FC<HeroProps> = ({
  bgColor = 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
  accentColor = 'text-cyan-300',
  title,
  subtitle,
  label = 'Module',
}) => (
  <section className={`relative overflow-hidden ${bgColor} text-white`}>
    <div className="pointer-events-none absolute -top-24 left-0 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-cyan-300/20 blur-3xl"></div>
    <div className="pointer-events-none absolute -bottom-20 right-10 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-blue-500/20 blur-3xl"></div>

    <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-12 md:py-18">
      <div className="max-w-4xl">
        {label && (
          <p className={`text-[11px] sm:text-sm font-semibold tracking-[0.18em] uppercase mb-2.5 ${accentColor}`}>
            {label}
          </p>
        )}
        <h1 className="text-[1.9rem] sm:text-[2.35rem] md:text-[3.1rem] font-semibold tracking-[-0.02em] leading-[1.05] mb-3">
          {title}
        </h1>
        <p className="text-[0.97rem] sm:text-[1rem] md:text-[1.1rem] text-white/80 leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
