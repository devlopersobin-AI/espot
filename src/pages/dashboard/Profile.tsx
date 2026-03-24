import { useState, useEffect } from "react";
import { 
  Edit2, Save, X, Calendar, MapPin, Mail, Phone, Award, 
  Trophy, Star, Target, GraduationCap, Gem, TrendingUp,
  ChevronRight, ShieldCheck, Target as TargetIcon
} from "lucide-react";
import { getAuthRole, hasPermission } from "../../auth/permissions";
import type { AuthRole } from "../../auth/permissions";

type ProfileData = {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  points: number;
  joinDate: string;
  achievements: string[];
  awards: string[];
  education: string;
  interests: string[];
};

export default function Profile() {
  const role = getAuthRole() ?? "Member";
  const canEditProfile = hasPermission(role, "profile.update");
  const storageKey = `profile-data-${role}`;
  const planStorageKey = `selected-membership-plan-${role}`;

  const [activeTier] = useState<string>(() => {
    const stored = localStorage.getItem(`active-membership-tier-${role}`);
    return stored || "Bronze";
  });

  const [selectedPlans] = useState<string[]>(() => {
    const stored = localStorage.getItem(planStorageKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const profileByRole: Record<AuthRole, ProfileData> = {
    Member: {
      name: "Jordan Hamidul",
      role: "Member",
      email: "jordan.info@example.com",
      phone: "+880 1833215532",
      location: "Jordan-para USA, 3543",
      bio: "Global Network member focused on strategic investment and community growth. Exploring new opportunities in the E-SPOT ecosystem.",
      points: 1240,
      joinDate: "Feb 2026",
      achievements: ["5 Events Joined", "Profile Complete", "Referral Star"],
      awards: ["Top Communicator 2025", "Networking Ace"],
      education: "Master of Business (MBA)",
      interests: ["Networking", "Career Growth", "Investment"],
    },
    Trainee: { name: "Jordan Hamidul", role: "Trainee", email: "jordan@example.com", phone: "+880 1833215532", location: "Global Hub", bio: "Learning and growing.", points: 320, joinDate: "Mar 2026", achievements: [], awards: [], education: "BSc", interests: [] },
    Franchisee: { name: "Jordan Hamidul", role: "Franchisee", email: "jordan@example.com", phone: "+880 1833215532", location: "Global Hub", bio: "Scaling business.", points: 980, joinDate: "Oct 2025", achievements: [], awards: [], education: "BBA", interests: [] },
    Entrepreneur: { name: "Jordan Hamidul", role: "Entrepreneur", email: "jordan@example.com", phone: "+880 1833215532", location: "Global Hub", bio: "Startup enthusiast.", points: 710, joinDate: "Nov 2025", achievements: [], awards: [], education: "BEng", interests: [] },
    Leader: { name: "Jordan Hamidul", role: "Leader", email: "jordan@example.com", phone: "+880 1833215532", location: "Global Hub", bio: "Mentoring teams.", points: 1540, joinDate: "Mar 2024", achievements: [], awards: [], education: "MSc", interests: [] },
    Scholar: { name: "Jordan Hamidul", role: "Scholar", email: "jordan@example.com", phone: "+880 1833215532", location: "Global Hub", bio: "Research oriented.", points: 530, joinDate: "Dec 2025", achievements: [], awards: [], education: "PhD", interests: [] },
    Jobseeker: { name: "Jordan Hamidul", role: "Jobseeker", email: "jordan@example.com", phone: "+880 1833215532", location: "Global Hub", bio: "Seeking roles.", points: 460, joinDate: "Jan 2026", achievements: [], awards: [], education: "BCA", interests: [] },
    Trainer: { name: "Jordan Hamidul", role: "Trainer", email: "jordan@example.com", phone: "+880 1833215532", location: "Global Hub", bio: "Teaching professionals.", points: 890, joinDate: "Sep 2025", achievements: [], awards: [], education: "MEd", interests: [] },
    Partner: { name: "Jordan Hamidul", role: "Partner", email: "jordan@example.com", phone: "+880 1833215532", location: "Global Hub", bio: "Strategic alliances.", points: 1200, joinDate: "May 2025", achievements: [], awards: [], education: "MBA", interests: [] },
    Admin: { name: "Jordan Hamidul", role: "Admin", email: "jordan@example.com", phone: "+880 1833215532", location: "Global HQ", bio: "System control.", points: 2000, joinDate: "Jan 2024", achievements: [], awards: [], education: "MBA", interests: [] },
  };

  const [user, setUser] = useState<ProfileData>(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        return JSON.parse(stored) as ProfileData;
      } catch {
        return profileByRole[role] || profileByRole.Member;
      }
    }
    return profileByRole[role] || profileByRole.Member;
  });

  const [editing, setEditing] = useState(false);

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="bg-[#f8f9fa] min-h-screen -m-5 md:-m-8 p-5 md:p-8">
      {/* ── Top Info Row ───────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">{role} Profile</h1>
          <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold mt-0.5">
            <span className="hover:text-blue-600 cursor-pointer">Dashboard</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-blue-600 uppercase tracking-tighter">My Account</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {[
            { label: "VP Balance", count: user.points.toLocaleString(), color: "bg-emerald-50 text-emerald-600" },
            { label: "Active Plans", count: selectedPlans.length, color: "bg-blue-50 text-blue-600" },
            { label: "Status Tier", count: activeTier, color: "bg-indigo-50 text-indigo-600" },
          ].map((item, i) => (
            <div key={i} className={`px-4 py-1.5 border border-gray-100 rounded text-[11px] font-bold shadow-sm ${item.color}`}>
              {item.label}: {item.count}
            </div>
          ))}
        </div>
      </div>

      {/* ── Profile Content Area ────────────────────────────────────────── */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100/50 overflow-hidden">
        {/* Banner */}
        <div className="h-48 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="absolute top-1/2 right-20 -translate-y-1/2 flex gap-4 opacity-10">
             <div className="w-48 h-48 border-8 border-white rounded-full" />
             <div className="w-32 h-32 border-8 border-white rounded-full mt-12" />
          </div>
        </div>

        <div className="px-8 pb-12">
          {/* Avatar Overlay */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="relative -mt-20 shrink-0">
               <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2.5rem] bg-gray-100 border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center text-6xl font-black text-slate-300 uppercase">
                 {initials}
               </div>
               <div className="absolute bottom-4 right-4 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full shadow-lg" />
            </div>
            
            <div className="mt-4 flex-1">
              <div className="flex items-center gap-4">
                <h2 className="text-4xl font-black text-gray-900 tracking-tight">{user.name}</h2>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-lg border border-blue-100">
                  {user.role}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2 max-w-3xl leading-relaxed font-medium">
                {user.bio}
              </p>
              
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex">
                  <span className="px-5 py-2 bg-blue-600 shadow-xl shadow-blue-500/20 text-white text-[11px] font-black uppercase rounded-xl border border-blue-500">
                    {activeTier} Account Tier
                  </span>
                </div>
                
                <div className="space-y-4">
                  {selectedPlans.map((plan, i) => (
                    <div key={i} className="flex flex-col leading-tight border-l-2 border-emerald-400 pl-4 py-1">
                      <span className="text-sm font-black text-gray-900">{plan}</span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Active Verified Asset</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-8 mt-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-xl">
                    <MapPin className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-500">{user.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-xl">
                    <Phone className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-500">{user.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-xl">
                    <Mail className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-500">{user.email}</span>
                </div>
              </div>
            </div>

            <div className="md:mt-6">
              <button 
                onClick={() => setEditing(!editing)}
                className="px-8 py-3 bg-slate-900 hover:bg-black text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl transition-all active:scale-95 flex items-center gap-2"
              >
                {editing ? <Save className="w-3.5 h-3.5" /> : <Edit2 className="w-3.5 h-3.5" />}
                {editing ? "Save Profile" : "Edit Profile"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 pt-12 border-t border-gray-50">
            {/* Left Info List */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                  <h3 className="text-lg font-black text-gray-900 tracking-tight uppercase">Identity Portfolio</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { label: role === "Partner" || role === "Franchisee" ? "Business Representative" : "Account Holder", value: user.name, key: "name" },
                    { label: "Registered Email", value: user.email, key: "email" },
                    { label: "Contact Channel", value: user.phone, key: "phone" },
                    { label: "Geography Hub", value: user.location, key: "location" },
                    { label: role === "Partner" || role === "Franchisee" || role === "Entrepreneur" ? "Entity Focus" : role === "Leader" ? "Expertise" : "Academy Grade", value: user.education, key: "education" },
                    { label: "Account Tier", value: activeTier },
                    { label: "Network Since", value: user.joinDate },
                    { label: "Identity Hash", value: "GP-92384-LX" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2 group">
                      <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] group-hover:text-blue-500 transition-colors">
                        {item.label}
                      </label>
                      {editing && (item as any).key ? (
                        <input
                          type="text"
                          defaultValue={item.value}
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-100/50 transition-all border-transparent"
                        />
                      ) : (
                        <div className="pb-3 border-b border-gray-100 flex items-center justify-between group-hover:border-blue-200 transition-all">
                          <span className="text-[13px] font-bold text-gray-800">{item.value}</span>
                          <ChevronRight className="w-3 h-3 text-gray-200" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                    <h3 className="text-lg font-black text-gray-900 tracking-tight uppercase">Investment Assets</h3>
                  </div>
                  <TargetIcon className="w-5 h-5 text-indigo-600" />
                </div>
                
                {selectedPlans.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedPlans.map((plan, i) => (
                      <div key={i} className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group border-l-4 border-l-indigo-500">
                        <div className="flex items-center justify-between mb-4">
                           <ShieldCheck className="w-5 h-5 text-indigo-500" />
                           <TrendingUp className="w-4 h-4 text-emerald-500" />
                        </div>
                        <h4 className="font-black text-gray-900 text-sm mb-1">{plan}</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Active Verified Asset</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-slate-50/50 rounded-[2rem] p-12 border border-dashed border-gray-200 text-center">
                    <Gem className="w-8 h-8 text-gray-300 mx-auto mb-4" />
                    <p className="text-xs text-gray-400 font-black uppercase tracking-widest">No Active Portfolio Found</p>
                    <button className="mt-4 px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm">
                      Explore Markets
                    </button>
                  </div>
                )}
              </section>
            </div>

            {/* Right Sidebar - Restored Sections */}
            <div className="space-y-12">
               <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700" />
                  <div className="relative z-10">
                     <div className="flex items-center gap-2 mb-8">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Wealth Wallet</span>
                     </div>
                     <div className="space-y-1">
                        <p className="text-6xl font-black tracking-tighter">{user.points.toLocaleString()}</p>
                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Network Credits (NC)</p>
                     </div>
                     <div className="mt-12 space-y-3">
                        <button className="w-full py-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-white/10 hover:border-white">
                           Marketplace
                        </button>
                        <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20 transition-all">
                           Withdraw NC
                        </button>
                     </div>
                  </div>
               </section>

               <section>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
                    <h3 className="text-lg font-black text-gray-900 tracking-tight uppercase">Elite Awards</h3>
                  </div>
                  <div className="space-y-4">
                    {user.awards.map((award, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:bg-amber-50/30 transition-all border-l-4 border-l-amber-400">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center border border-amber-200">
                           <Award className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                           <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-tight leading-none mb-1">{award}</h4>
                           <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Certified 2026</span>
                        </div>
                      </div>
                    ))}
                  </div>
               </section>

               <section>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
                    <h3 className="text-lg font-black text-gray-900 tracking-tight uppercase">Network Focus</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {user.interests.map(interest => (
                       <span key={interest} className="px-4 py-2 bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-100 hover:bg-white hover:border-blue-200 hover:text-blue-600 transition-all cursor-default shadow-sm hover:shadow-md">
                          {interest}
                       </span>
                    ))}
                  </div>
               </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
