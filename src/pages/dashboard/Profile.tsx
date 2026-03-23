import { useState, useEffect } from "react";
import { Edit2, Save, X, Calendar, MapPin, Mail, Phone, Award, Trophy, Star, Target, GraduationCap } from "lucide-react";
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
  const [selectedPlans] = useState<string[]>(() => {
    const stored = localStorage.getItem(planStorageKey);
    const valid = [
      "Bronze", "Bronze Networking Package", "Bronze Community Package",
      "Silver", "Silver Equestrian Package", "Silver Events Package", "Silver Beauty & Spa Package", "Silver Wellness & Fitness Package",
      "Gold", "Gold Mentorship Package", "Gold Premium Resources", "Gold Strategy Session",
      "Diamond", "Diamond Executive Coaching", "Diamond VIP Global Access", "Diamond Private Equity",
      "Platinum", "Platinum Concierge Plus", "Platinum Lifestyle Events", "Platinum Global Forums",
      "Crown", "Crown Board Council", "Crown Lifetime Estate", "Crown Ultimate Legacy"
    ];
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed.filter(p => valid.includes(p));
        }
      } catch (e) {
        if (valid.includes(stored)) return [stored];
      }
    }
    return ["Bronze"];
  });

    const profileByRole: Record<AuthRole, ProfileData> = {
      Member: {
        name: "Mila Member",
        role: "Member",
        email: "member@demo.com",
        phone: "+977 9800000001",
        location: "Kathmandu, Nepal",
        bio: "Community member focused on networking and continuous learning opportunities.",
        points: 640,
        joinDate: "Feb 2026",
        achievements: ["5 Events Joined", "Profile Complete", "Referral Star"],
        awards: ["Top Communicator 2025", "Networking Ace"],
        education: "BSc, Tribhuvan University",
        interests: ["Networking", "Career Growth", "Workshops"],
      },
      Trainee: {
        name: "Tina Trainee",
        role: "Trainee",
        email: "trainee@demo.com",
        phone: "+977 9800000002",
        location: "Butwal, Nepal",
        bio: "Trainee focused on upskilling and certification.",
        points: 320,
        joinDate: "Mar 2026",
        achievements: ["3 Courses Completed", "Top Trainee", "Certification Earned"],
        awards: ["Rising Star 2026"],
        education: "BBS, Butwal Multiple Campus",
        interests: ["Learning", "Workshops", "Career Growth"],
      },
          Franchisee: {
            name: "Farah Franchise",
            role: "Franchisee",
            email: "franchisee@demo.com",
            phone: "+977 9800000003",
            location: "Pokhara, Nepal",
            bio: "Franchise operator focused on local expansion and operational excellence.",
            points: 980,
            joinDate: "Oct 2025",
            achievements: ["Outlet Launch", "Regional Growth", "Ops Excellence"],
            awards: ["Franchisee of the Year", "Local Impact Award"],
            education: "BBA, Kathmandu University",
            interests: ["Operations", "Retail", "Growth"],
          },
          Entrepreneur: {
            name: "Evan Entrepreneur",
            role: "Entrepreneur",
            email: "entrepreneur@demo.com",
            phone: "+977 9800000004",
            location: "Singapore",
            bio: "Startup founder connecting with mentors and investors for scale.",
            points: 710,
            joinDate: "Nov 2025",
            achievements: ["Pitch Finalist", "MVP Launch", "Investor Intro"],
            awards: ["Seed Funding Success", "Tech Innovator"],
            education: "BEng, NUS",
            interests: ["Startups", "FinTech", "Product"],
          },
          Leader: {
            name: "Lina Leader",
            role: "Leader",
            email: "leader@demo.com",
            phone: "+977 9800000005",
            location: "London, UK",
            bio: "Leadership mentor supporting strategic growth and high-impact initiatives.",
            points: 1540,
            joinDate: "Mar 2024",
            achievements: ["Global Mentor", "Keynote Speaker", "Impact Award"],
            awards: ["Visionary Leader 2024", "Excellence in Mentorship"],
            education: "MSc Leadership, LSE",
            interests: ["Mentorship", "Policy", "Innovation"],
          },
          Scholar: {
            name: "Sora Scholar",
            role: "Scholar",
            email: "scholar@demo.com",
            phone: "+977 9800000006",
            location: "Lalitpur, Nepal",
            bio: "Scholar pursuing high-impact learning opportunities and research.",
            points: 530,
            joinDate: "Dec 2025",
            achievements: ["Scholarship Recipient", "Research Presenter", "Top Attendance"],
            awards: ["Dean's List", "Research Excellence Grant"],
            education: "BSc CS, Pulchowk Campus",
            interests: ["AI", "Research", "Hackathons"],
          },
          Jobseeker: {
            name: "Jace Jobseeker",
            role: "Jobseeker",
            email: "jobseeker@demo.com",
            phone: "+977 9800000007",
            location: "Bhaktapur, Nepal",
            bio: "Jobseeker building a strong profile and preparing for high-value opportunities.",
            points: 460,
            joinDate: "Jan 2026",
            achievements: ["10 Applications", "Interview Ready", "Skills Badge"],
            awards: ["Interview Excellence", "Top Candidate"],
            education: "BCA, Pokhara University",
            interests: ["Frontend", "Remote Work", "Product"],
          },
          Trainer: {
            name: "Tara Trainer",
            role: "Trainer",
            email: "trainer@demo.com",
            phone: "+977 9800000008",
            location: "Kathmandu, Nepal",
            bio: "Professional trainer delivering practical programs across business and tech.",
            points: 890,
            joinDate: "Sep 2025",
            achievements: ["20 Sessions", "Top Rated Trainer", "Cohort Mentor"],
            awards: ["Master Trainer 2025", "Best Content Award"],
            education: "MEd, Kathmandu University",
            interests: ["Instruction Design", "Digital Skills", "Coaching"],
          },
          Partner: {
            name: "Pat Partner",
            role: "Partner",
            email: "partner@demo.com",
            phone: "+977 9800000010",
            location: "Dubai, UAE",
            bio: "Business partner collaborating on growth and innovation.",
            points: 1200,
            joinDate: "May 2025",
            achievements: ["Deal Closed", "Expo Host", "Growth Award"],
            awards: ["Global Partner Winner", "Strategy Master"],
            education: "MBA, American University in Dubai",
            interests: ["B2B", "Innovation", "Partnerships"],
          },
          Admin: {
            name: "Ari Admin",
            role: "Admin",
            email: "admin@demo.com",
            phone: "+977 9800000009",
            location: "Global HQ",
            bio: "Platform admin responsible for governance, moderation, and growth analytics.",
            points: 2000,
            joinDate: "Jan 2024",
            achievements: ["System Steward", "Policy Lead", "Ops Excellence"],
            awards: ["Platform Architect", "Governance Champion"],
            education: "MBA, Global School of Management",
            interests: ["Operations", "Analytics", "Governance"],
          },
        };

  const [user, setUser] = useState<ProfileData>(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        return JSON.parse(stored) as ProfileData;
      } catch {
        return profileByRole[role];
      }
    }
    return profileByRole[role];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProfileData>(user);

  const startEdit = () => {
    setFormData(user);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setFormData(user);
    setIsEditing(false);
  };

  const saveProfile = () => {
    const sanitize = (v: string) => v.replace(/<[^>]*>/g, "").trim();
    const next: ProfileData = {
      ...formData,
      name: sanitize(formData.name) || user.name,
      email: sanitize(formData.email) || user.email,
      phone: sanitize(formData.phone) || user.phone,
      location: sanitize(formData.location) || user.location,
      bio: sanitize(formData.bio) || user.bio,
      education: sanitize(formData.education) || user.education,
      interests: formData.interests.map((i) => sanitize(i)),
      achievements: formData.achievements.map((a) => sanitize(a)),
      awards: formData.awards.map((a) => sanitize(a)),
      points: user.points,
      role: user.role,
      joinDate: user.joinDate,
    };

    setUser(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
    setIsEditing(false);
  };

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="space-y-6">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your personal information and preferences.
          </p>
        </div>
        <div>
          {canEditProfile ? (
            isEditing ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={cancelEdit}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveProfile}
                  className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <button
                onClick={startEdit}
                className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Edit Profile
              </button>
            )
          ) : null}
        </div>
      </div>

      {/* ── Profile Card ───────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-slate-900 rounded-3xl shadow-2xl p-8 text-white group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
        
        <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
          <div className="relative group/avatar">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full blur opacity-20 group-hover/avatar:opacity-40 transition-opacity" />
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-800 border-4 border-slate-700/50 flex items-center justify-center text-3xl font-bold relative z-10 transition-transform duration-500 group-hover/avatar:scale-105">
              {initials}
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-4 border-slate-900 rounded-full z-20" />
          </div>
          
          <div className="flex-1 space-y-4">
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-2">
                <h3 className="text-3xl font-black tracking-tight">{user.name}</h3>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                  {user.role}
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                {selectedPlans.map((plan) => (
                  <span key={plan} className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/20">
                    {plan}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl font-medium">
              {user.bio}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 group/icon">
                <div className="p-2 rounded-lg bg-white/5 group-hover/icon:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm text-slate-300 font-medium">{user.email}</span>
              </div>
              <div className="flex items-center gap-2 group/icon">
                <div className="p-2 rounded-lg bg-white/5 group-hover/icon:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-sm text-slate-300 font-medium">{user.phone}</span>
              </div>
              <div className="flex items-center gap-2 group/icon">
                <div className="p-2 rounded-lg bg-white/5 group-hover/icon:bg-white/10 transition-colors">
                  <MapPin className="w-4 h-4 text-rose-400" />
                </div>
                <span className="text-sm text-slate-300 font-medium">{user.location}</span>
              </div>
              <div className="flex items-center gap-2 group/icon">
                <div className="p-2 rounded-lg bg-white/5 group-hover/icon:bg-white/10 transition-colors">
                  <Calendar className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-sm text-slate-300 font-medium font-mono text-[11px] uppercase tracking-tighter">Mem. since {user.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Row ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Reward Points", value: user.points.toLocaleString(), icon: Star, color: "amber" },
          { label: "Achievements", value: String(user.achievements.length), icon: Trophy, color: "indigo" },
          { label: "Official Awards", value: String(user.awards.length), icon: Award, color: "rose" },
          { label: "Academy Tier", value: user.education.split(",")[0], icon: GraduationCap, color: "emerald" },
        ].map((s) => {
          const colors: Record<string, string> = {
            amber: "text-amber-500 bg-amber-50",
            indigo: "text-indigo-500 bg-indigo-50",
            rose: "text-rose-500 bg-rose-50",
            emerald: "text-emerald-500 bg-emerald-50",
          };
          return (
            <div
              key={s.label}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <s.icon className="w-16 h-16" />
              </div>
              <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${colors[s.color]} font-semibold`}>
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{s.label}</h3>
              <div className="text-2xl font-black text-gray-900 mt-1">
                {s.value}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Details / Edit ───────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-base font-semibold text-gray-900">
                {isEditing ? "Edit Details" : "Personal Details"}
              </h3>
            </div>

            {isEditing ? (
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(
                    [
                      { key: "name", label: "Full Name" },
                      { key: "email", label: "Email", type: "email" },
                      { key: "phone", label: "Phone" },
                      { key: "location", label: "Location" },
                    ] as const
                  ).map((f) => (
                    <label key={f.key} className="block">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {f.label}
                      </span>
                      <input
                        type={"type" in f ? f.type : "text"}
                        value={formData[f.key]}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            [f.key]: e.target.value,
                          }))
                        }
                        className="mt-1.5 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-gray-400 transition-all"
                      />
                    </label>
                  ))}
                </div>
                <label className="block">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bio
                  </span>
                  <textarea
                    rows={3}
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, bio: e.target.value }))
                    }
                    className="mt-1.5 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-gray-400 transition-all resize-none"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Education
                  </span>
                  <input
                    value={formData.education}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        education: e.target.value,
                      }))
                    }
                    className="mt-1.5 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-gray-400 transition-all"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Interests (comma separated)
                  </span>
                  <input
                    value={formData.interests.join(", ")}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        interests: e.target.value
                          .split(",")
                          .map((item) => item.trim())
                          .filter(Boolean),
                      }))
                    }
                    className="mt-1.5 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-gray-400 transition-all"
                  />
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Achievements (comma separated)
                    </span>
                    <input
                      value={formData.achievements.join(", ")}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          achievements: e.target.value
                            .split(",")
                            .map((item) => item.trim())
                            .filter(Boolean),
                        }))
                      }
                      className="mt-1.5 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-gray-400 transition-all"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Awards (comma separated)
                    </span>
                    <input
                      value={formData.awards.join(", ")}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          awards: e.target.value
                            .split(",")
                            .map((item) => item.trim())
                            .filter(Boolean),
                        }))
                      }
                      className="mt-1.5 w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-gray-400 transition-all"
                    />
                  </label>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="data-grid">
                  <tbody>
                    <tr>
                      <td className="text-gray-500 font-medium w-40">
                        Full Name
                      </td>
                      <td className="text-gray-900">{user.name}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 font-medium">Email</td>
                      <td className="text-gray-900">{user.email}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 font-medium">Phone</td>
                      <td className="text-gray-900">{user.phone}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 font-medium">Location</td>
                      <td className="text-gray-900">{user.location}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 font-medium">Education</td>
                      <td className="text-gray-900">{user.education}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 font-medium">Interests</td>
                      <td>
                        <div className="flex flex-wrap gap-1.5">
                          {user.interests.map((interest) => (
                            <span
                              key={interest}
                              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-200"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Achievements Cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-indigo-500" />
              <h3 className="text-xl font-black text-slate-900">Latest Accomplishments</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.achievements.map((achievement, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-none mb-1">{achievement}</h4>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Verified Milestone</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-500" />
                <h3 className="text-xl font-black text-slate-900">Elite Recognition</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {user.awards.map((award, i) => (
                <div key={i} className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-white group hover:scale-[1.01] transition-transform">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                    <Star className="w-12 h-12" />
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="p-3 bg-amber-500/20 rounded-2xl border border-amber-500/20">
                      <Award className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black tracking-tight">{award}</h4>
                      <p className="text-slate-400 text-xs font-medium mt-1">Presented {new Date().getFullYear()} • Strategic Excellence Program</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────── */}
        <div className="space-y-6">
          {/* Points Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 fill-white" />
              Wealth Points
            </h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black">{user.points.toLocaleString()}</span>
              <span className="text-sm font-medium text-white/60 uppercase tracking-widest">VP</span>
            </div>
            <button className="w-full py-3 bg-white text-indigo-600 rounded-2xl text-sm font-bold shadow-lg shadow-indigo-900/20 hover:bg-slate-50 transition-colors">
              Marketplace
            </button>
          </div>

          {/* Account Summary Card */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xl shadow-slate-200/40 relative group">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Core Identity</h3>
            <div className="space-y-6">
              {[
                { label: "Designation", value: user.role, icon: Target },
                { label: "Status Tier", value: selectedPlans[0], icon: Award },
                { label: "Joined", value: user.joinDate, icon: Calendar },
                { label: "Location", value: user.location, icon: MapPin },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-colors">
                    <item.icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.label}</p>
                    <p className="font-bold text-slate-900 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
