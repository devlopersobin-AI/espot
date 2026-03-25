import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface HeroProps {
  bgColor?: string;
  accentColor?: string;
  title: React.ReactNode;
  subtitle: string;
  label?: string;
  image?: string;
  overlayOpacity?: number;
  onSearch?: (query: string) => void;
  searchPlaceholder?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  bgColor = "bg-slate-950",
  accentColor = "text-blue-400",
  title,
  subtitle,
  label,
  image,
  overlayOpacity = 0.7,
  onSearch,
  searchPlaceholder = "Search...",
  children,
}) => (
  <section className={`relative min-h-[500px] flex items-center overflow-hidden ${bgColor} text-white`}>
    {/* Background Image & Overlays */}
    {image && (
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
        style={{ 
          backgroundImage: `url(${image})`,
          filter: "brightness(0.8)"
        }}
      />
    )}
    <div 
      className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent pointer-events-none"
      style={{ opacity: overlayOpacity }}
    />
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl space-y-8"
      >
        {label && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className={`h-[2px] w-12 ${accentColor.replace('text-', 'bg-')}`} />
            <span className={`text-xs font-black uppercase tracking-[0.4em] ${accentColor}`}>
              {label}
            </span>
          </motion.div>
        )}
        
        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tight leading-[1.05]">
          {title}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl border-l-4 border-white/10 pl-8">
          {subtitle}
        </p>

        {onSearch && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative max-w-xl group pt-4"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-3xl -z-10 group-focus-within:bg-white/20 transition-all border border-white/20" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-white transition-colors" />
            <input 
              type="text"
              placeholder={searchPlaceholder}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full h-16 bg-transparent pl-16 pr-6 rounded-3xl text-sm font-bold text-white placeholder-white/40 focus:outline-none"
            />
          </motion.div>
        )}

        {children && (
          <div className="pt-4">
            {children}
          </div>
        )}
      </motion.div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none hidden lg:block">
       <div className="w-96 h-96 border-[40px] border-white rounded-full translate-x-1/2 translate-y-1/2" />
    </div>
  </section>
);

export default Hero;
