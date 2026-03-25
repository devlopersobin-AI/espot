import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "The networking quality here is truly world-class. Connected with more high-value clients in 3 months than a whole year.",
    name: "David Lee",
    tier: "Gold member",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=david",
  },
  {
    quote: "The strategic rewards system actually pays for the membership itself. A no-brainer for any serious founder.",
    name: "Sarah Jenkins",
    tier: "Diamond member",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: "Combining deep learning with real-world connections. E-SPOT delivered exactly that and more.",
    name: "Michael Chen",
    tier: "Silver member",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
  {
    quote: "Exclusive events and access to top-tier leaders have transformed my business strategy. Elite tier is unique.",
    name: "Anita Thapa",
    tier: "Platinum member",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=anita",
  },
  {
    quote: "The ecosystem is perfectly designed for growth. The partner benefits are unparalleled in this market.",
    name: "Marcus Thorne",
    tier: "Crown member",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center space-y-4">
        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em]">Testimonials</span>
        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Voice of the Community</h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1030] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            }
          }}
          className="flex gap-8 px-4 w-max"
        >
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div 
              key={`${t.name}-${i}`}
              className="w-[420px] bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col gap-6"
            >
               <div className="flex justify-between items-start">
                  <div className="flex gap-1">
                     {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < t.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"}`} />
                     ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-100" />
               </div>
               
               <p className="flex-1 text-slate-700 font-medium leading-relaxed italic">
                 "{t.quote}"
               </p>
               
               <div className="flex items-center gap-4 pt-6 border-t border-slate-200/60">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-lg" />
                  <div>
                     <h4 className="font-black text-slate-900 leading-tight">{t.name}</h4>
                     <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{t.tier}</p>
                  </div>
               </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 text-center">
         <div className="inline-flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Live Community Feedback
         </div>
      </div>
    </section>
  );
}
