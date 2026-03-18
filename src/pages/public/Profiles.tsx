import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Briefcase,
  Award,
  GraduationCap,
  MapPin,
  Building2,
  Star,
  TrendingUp,
  Search,
  ArrowRight,
} from "lucide-react";

export default function Profiles() {
  const [activeType, setActiveType] = useState("All");
  const [query, setQuery] = useState("");

  const profileTypes = [
    {
      name: "Members",
      icon: Users,
      desc: "Browse our community members",
      link: "/membership",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Partners",
      icon: Building2,
      desc: "Discover our business partners",
      link: "/partner",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "Entrepreneurs",
      icon: TrendingUp,
      desc: "Connect with startup founders",
      link: "/entrepreneurship",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      name: "Franchisees",
      icon: MapPin,
      desc: "Find E-SPOT franchise locations",
      link: "/franchise",
      color: "bg-orange-100 text-orange-700",
    },
    {
      name: "Leaders",
      icon: Award,
      desc: "Learn from industry leaders",
      link: "/leadership",
      color: "bg-violet-100 text-violet-700",
    },
    {
      name: "Trainers",
      icon: Star,
      desc: "Expert trainers and coaches",
      link: "/training",
      color: "bg-amber-100 text-amber-700",
    },
    {
      name: "Jobseekers",
      icon: Users,
      desc: "Talent looking for opportunities",
      link: "/careers",
      color: "bg-teal-100 text-teal-700",
    },
    {
      name: "Job Givers",
      icon: Briefcase,
      desc: "Companies hiring top talent",
      link: "/careers",
      color: "bg-rose-100 text-rose-700",
    },
    {
      name: "Scholars",
      icon: GraduationCap,
      desc: "Outstanding students and academics",
      link: "/scholar",
      color: "bg-cyan-100 text-cyan-700",
    },
  ];

  const featuredProfiles = [
    {
      id: 1,
      name: "Nisha Adhikari",
      type: "Member",
      location: "Kathmandu",
      specialty: "Community Lead",
      link: "/profile/member/1",
    },
    {
      id: 2,
      name: "Himalaya Ventures",
      type: "Partner",
      location: "Pokhara",
      specialty: "Growth Partner",
      link: "/profile/partner/2",
    },
    {
      id: 3,
      name: "Aarav Shrestha",
      type: "Entrepreneur",
      location: "Lalitpur",
      specialty: "Fintech Startup",
      link: "/profile/entrepreneur/3",
    },
    {
      id: 4,
      name: "E-SPOT Biratnagar",
      type: "Franchisee",
      location: "Biratnagar",
      specialty: "Regional Operations",
      link: "/profile/franchise/4",
    },
    {
      id: 5,
      name: "Sonia Karki",
      type: "Leader",
      location: "Chitwan",
      specialty: "Leadership Mentor",
      link: "/profile/leader/5",
    },
    {
      id: 6,
      name: "Rohit Tamang",
      type: "Trainer",
      location: "Dharan",
      specialty: "Digital Skills Coach",
      link: "/profile/trainer/6",
    },
    {
      id: 7,
      name: "Priya Basnet",
      type: "Jobseeker",
      location: "Bhaktapur",
      specialty: "UI Engineer",
      link: "/profile/jobseeker/7",
    },
    {
      id: 8,
      name: "Nova Foods Group",
      type: "Job Giver",
      location: "Butwal",
      specialty: "Hospitality Hiring",
      link: "/profile/jobgiver/8",
    },
    {
      id: 9,
      name: "Sagar Ghimire",
      type: "Scholar",
      location: "Kirtipur",
      specialty: "AI Research Scholar",
      link: "/profile/scholar/9",
    },
  ];

  const filteredProfiles = useMemo(() => {
    return featuredProfiles.filter((profile) => {
      const typeMatch = activeType === "All" || profile.type === activeType;
      const queryMatch =
        profile.name.toLowerCase().includes(query.toLowerCase()) ||
        profile.specialty.toLowerCase().includes(query.toLowerCase()) ||
        profile.location.toLowerCase().includes(query.toLowerCase());
      return typeMatch && queryMatch;
    });
  }, [activeType, query]);

  return (
    <div className="flex-1 py-8 sm:py-12 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 md:p-12 shadow-sm mb-8">
          <p className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">
            Platform Directory
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            E-SPOT Profiles
          </h1>
          <p className="text-lg text-slate-600 max-w-4xl">
            Every navigation path now connects to a discoverable profile stream.
            Explore members, partners, entrepreneurs, franchisees, leaders,
            trainers, job communities, and scholars from one searchable
            directory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {profileTypes.map((profile) => (
            <Link
              key={profile.name}
              to={profile.link}
              className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${profile.color} group-hover:scale-105 transition-transform`}
              >
                <profile.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {profile.name}
              </h3>
              <p className="text-slate-600 mb-4">{profile.desc}</p>
              <div className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                Explore <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-[24px] sm:rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Featured Directory
            </h2>
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name, location, or specialty"
                className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "All",
              "Member",
              "Partner",
              "Entrepreneur",
              "Franchisee",
              "Leader",
              "Trainer",
              "Jobseeker",
              "Job Giver",
              "Scholar",
            ].map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold border transition-colors ${
                  activeType === type
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredProfiles.map((profile) => (
              <Link
                key={profile.id}
                to={profile.link}
                className="rounded-2xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-2">
                  {profile.type}
                </p>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {profile.name}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {profile.specialty}
                </p>
                <p className="text-sm text-slate-500">{profile.location}</p>
              </Link>
            ))}
          </div>

          {filteredProfiles.length === 0 && (
            <div className="text-center py-10 text-slate-500">
              No matching profiles found for your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
