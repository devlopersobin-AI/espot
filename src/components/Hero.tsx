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
  <section className={`relative overflow-hidden ${bgColor} text-white border-b border-slate-800/70`}>
    <img
      src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1800&h=900&fit=crop"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
    />
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.08]" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/45" />

    <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-14 md:py-20">
      <div className="max-w-5xl">
        {label && (
          <p className={`inline-flex text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase mb-3 px-3 py-1 border border-white/20 bg-white/10 ${accentColor}`}>
            {label}
          </p>
        )}
        <h1 className="text-[1.5rem] sm:text-[1.875rem] md:text-[2.25rem] font-bold tracking-[-0.02em] leading-[1.1] mb-3">
          {title}
        </h1>
        <p className="text-xs sm:text-sm md:text-[0.9375rem] text-white/85 leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
