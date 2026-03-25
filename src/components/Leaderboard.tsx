import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, ShieldCheck, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

const eliteMembers = [
  { id: "1", type: "member", name: "Anita Thapa", points: 8000, role: "Global Ambassador", avatar: "https://i.pravatar.cc/150?u=a" },
  { id: "2", type: "member", name: "Bikash Gurung", points: 6170, role: "Premium Partner", avatar: "https://i.pravatar.cc/150?u=b" },
  { id: "3", type: "member", name: "Nisha Rai", points: 5720, role: "Strategy Mentor", avatar: "https://i.pravatar.cc/150?u=c" },
  { id: "4", type: "member", name: "Pratik KC", points: 5485, role: "Community Leader", avatar: "https://i.pravatar.cc/150?u=d" },
  { id: "5", type: "member", name: "Suman Shahi", points: 5240, role: "Growth Hacker", avatar: "https://i.pravatar.cc/150?u=e" },
  { id: "6", type: "member", name: "Rita Sharma", points: 5110, role: "Elite Member", avatar: "https://i.pravatar.cc/150?u=f" },
  { id: "7", type: "member", name: "Ajay Karki", points: 4900, role: "Innovator", avatar: "https://i.pravatar.cc/150?u=g" },
  { id: "8", type: "member", name: "Kabita Magar", points: 4730, role: "Serial Founder", avatar: "https://i.pravatar.cc/150?u=h" },
];

export default function Leaderboard() {
  const navigate = useNavigate();
  const [scrollX, setScrollX] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("member-carousel");
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-400 font-black uppercase tracking-[0.2em] text-xs">
              <Trophy size={16} />
              Elite Leaderboard
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Meet Our Elite Members
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl font-medium">
              The most active and influential visionaries across our global professional network.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-all active:scale-95"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/40 active:scale-95"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div 
          id="member-carousel"
          className="flex gap-6 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory"
        >
          {eliteMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(`/profile/${member.type}/${member.id}`)}
              className="min-w-[300px] md:min-w-[340px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 border border-white/5 shadow-2xl snap-start group hover:border-blue-500/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="relative">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-20 h-20 rounded-[1.5rem] object-cover ring-4 ring-slate-800 group-hover:ring-blue-500/20 transition-all"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-lg p-1.5 shadow-lg">
                    <ShieldCheck size={14} className="text-white" />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-blue-400">#{idx + 1}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Rank</div>
                </div>
              </div>

              <div className="space-y-1 mb-8">
                <h3 className="text-2xl font-black tracking-tight">{member.name}</h3>
                <p className="text-blue-500/80 font-bold text-sm uppercase">{member.role}</p>
              </div>

              <div className="bg-slate-950/50 rounded-2xl p-4 flex items-center justify-between border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <div className="text-lg font-black">{member.points.toLocaleString()}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Growth Points</div>
                  </div>
                </div>
                <div className="text-emerald-400 font-bold text-sm">+{(Math.random() * 10).toFixed(1)}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
