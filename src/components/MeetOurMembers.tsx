import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, ExternalLink } from "lucide-react";

const MEMBERS = [
  {
    name: "Dr. Arjan Shrestha",
    role: "Impact Investor",
    location: "Kathmandu",
    image: "https://i.pravatar.cc/400?u=arjan",
    rating: 5.0,
    impact: "$2.4M",
  },
  {
    name: "Elena Rodriguez",
    role: "Fintech Founder",
    location: "Singapore",
    image: "https://i.pravatar.cc/400?u=elena",
    rating: 4.9,
    impact: "$800K",
  },
  {
    name: "Marcus Thorne",
    role: "Strategic Partner",
    location: "London",
    image: "https://i.pravatar.cc/400?u=marcus",
    rating: 5.0,
    impact: "$1.2M",
  },
  {
    name: "Sita Gurung",
    role: "Education Reformer",
    location: "Pokhara",
    image: "https://i.pravatar.cc/400?u=sita",
    rating: 4.8,
    impact: "$450K",
  },
  {
    name: "Kenji Sato",
    role: "Tech Innovator",
    location: "Tokyo",
    image: "https://i.pravatar.cc/400?u=kenji",
    rating: 5.0,
    impact: "$3.1M",
  },
  {
    name: "Aisha Khan",
    role: "Venture Partner",
    location: "Dubai",
    image: "https://i.pravatar.cc/400?u=aisha",
    rating: 4.9,
    impact: "$1.5M",
  },
];

interface MeetOurMembersProps {
  searchTerm?: string;
}

export default function MeetOurMembers({ searchTerm = "" }: MeetOurMembersProps) {
  const navigate = useNavigate();

  const filteredMembers = MEMBERS.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayMembers = searchTerm ? filteredMembers : [...MEMBERS, ...MEMBERS, ...MEMBERS];

  return (
    <section className="py-32 bg-slate-950 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-4">
              <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em]">Elite Community</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Meet Our Distinguished <br /> <span className="text-blue-400">Network Members</span></h2>
           </div>
           <p className="max-w-md text-slate-400 font-medium font-bold">
             Join 12,000+ visionaries, founders, and leaders who are 
             shaping the future of their industries through the E-SPOT ecosystem.
           </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              }
            }}
            className="flex gap-8 px-4 w-max"
          >
            {displayMembers.map((member, i) => (
              <div 
                key={`${member.name}-${i}`}
                onClick={() => navigate(`/profile/member/${member.name.toLowerCase().replace(/\s+/g, "-")}`)}
                className="w-[340px] group relative cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative border border-white/10 shadow-2xl bg-slate-900">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full space-y-4">
                     <div className="flex justify-between items-end">
                        <div className="space-y-1">
                           <h4 className="text-xl font-black text-white leading-none">{member.name}</h4>
                           <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">{member.role}</p>
                        </div>
                        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg">
                           <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                           <span className="text-[10px] font-black text-white">{member.rating}</span>
                        </div>
                     </div>
                     
                     <div className="flex items-center justify-between pt-4 border-t border-white/10 text-slate-400">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold">
                           <MapPin className="w-3 h-3 text-blue-500" />
                           {member.location}
                        </div>
                        <div className="text-[10px] font-black text-white uppercase tracking-tighter">
                           Impact: {member.impact}
                        </div>
                     </div>
                  </div>

                  <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-3xl rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                     <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-20 text-center">
         <button className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95">
            View Elite Registry
         </button>
      </div>
    </section>
  );
}
