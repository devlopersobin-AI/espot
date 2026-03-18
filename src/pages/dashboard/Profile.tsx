import { useState } from "react";
import { Edit2, Save, X, Calendar, MapPin, Mail, Phone } from "lucide-react";
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
  education: string;
  interests: string[];
};

export default function Profile() {
  const role = getAuthRole() ?? "Member";
  const canEditProfile = hasPermission(role, "profile.update");
  const storageKey = `profile-data-${role}`;

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
      education: "BSc, Tribhuvan University",
      interests: ["Networking", "Career Growth", "Workshops"],
    },
    Partner: {
      name: "Parker Partner",
      role: "Partner",
      email: "partner@demo.com",
      phone: "+977 9800000002",
      location: "Dubai, UAE",
      bio: "Business partner growing brand visibility through offers and collaborations.",
      points: 1250,
      joinDate: "Jan 2025",
      achievements: ["Top Partner Q1", "Campaign Leader", "50+ Sales"],
      education: "MBA, Hult International",
      interests: ["B2B Deals", "Branding", "Investments"],
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
      achievements: [
        "Scholarship Recipient",
        "Research Presenter",
        "Top Attendance",
      ],
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
      education: "MEd, Kathmandu University",
      interests: ["Instruction Design", "Digital Skills", "Coaching"],
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
      achievements: user.achievements,
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
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white text-xl font-semibold shrink-0">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                {user.role}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Joined {user.joinDate}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-3 max-w-2xl">{user.bio}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4 pt-4 border-t border-gray-100">
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <Mail className="w-3.5 h-3.5" /> {user.email}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <Phone className="w-3.5 h-3.5" /> {user.phone}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <MapPin className="w-3.5 h-3.5" /> {user.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Row ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[
          { label: "Points", value: user.points.toLocaleString() },
          { label: "Achievements", value: String(user.achievements.length) },
          { label: "Interests", value: String(user.interests.length) },
          { label: "Education", value: user.education.split(",")[0] },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-sm font-medium text-gray-500">{s.label}</h3>
            <div className="text-2xl font-bold text-gray-900 mt-1">
              {s.value}
            </div>
          </div>
        ))}
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

          {/* Achievements */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-base font-semibold text-gray-900">
                Achievements
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="data-grid">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Achievement</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {user.achievements.map((achievement, i) => (
                    <tr key={i}>
                      <td className="font-mono text-xs text-gray-500">
                        {String(i + 1).padStart(2, "0")}
                      </td>
                      <td className="font-medium text-gray-900">
                        {achievement}
                      </td>
                      <td>
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                          Earned
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────── */}
        <div className="space-y-6">
          {/* Points */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm p-6 text-white">
            <h3 className="text-base font-semibold mb-2">Reward Points</h3>
            <p className="text-3xl font-bold tracking-tight">
              {user.points.toLocaleString()}
            </p>
            <p className="text-sm text-slate-400 mt-1">Available to redeem</p>
            <button className="mt-4 w-full py-2.5 bg-white text-slate-900 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
              Redeem Points
            </button>
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Account
            </h3>
            <div className="space-y-3">
              {[
                { label: "Role", value: user.role },
                { label: "Joined", value: user.joinDate },
                { label: "Location", value: user.location },
                { label: "Badges", value: String(user.achievements.length) },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-sm">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="font-medium text-gray-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
