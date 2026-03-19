import React, { useMemo, useState } from "react";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  ArrowRight,
  Users,
  Briefcase,
  Rocket,
  Store,
  Crown,
  GraduationCap,
  Dumbbell,
  UserSearch,
  Building2,
  LayoutGrid,
  List,
} from "lucide-react";

const typeIcons: Record<string, React.ElementType> = {
  Member: Users,
  Partner: Briefcase,
  Entrepreneur: Rocket,
  Franchisee: Store,
  Leader: Crown,
  Trainer: Dumbbell,
  Jobseeker: UserSearch,
  "Job Giver": Building2,
  Scholar: GraduationCap,
};

export default function Profiles() {
  // Hero section image and text
  const heroImage =
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80";
  const [activeType, setActiveType] = useState("All");
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const profileTypes = [
    {
      name: "Members",
      desc: "Community members",
      count: 1240,
      link: "/membership",
    },
    {
      name: "Partners",
      desc: "Business partners",
      count: 86,
      link: "/partner",
    },
    {
      name: "Entrepreneurs",
      desc: "Startup founders",
      count: 312,
      link: "/entrepreneurship",
    },
    {
      name: "Franchisees",
      desc: "Franchise locations",
      count: 45,
      link: "/franchise",
    },
    {
      name: "Leaders",
      desc: "Industry leaders",
      count: 78,
      link: "/leadership",
    },
    {
      name: "Trainers",
      desc: "Trainers & coaches",
      count: 134,
      link: "/training",
    },
    { name: "Jobseekers", desc: "Talent pool", count: 520, link: "/careers" },
    {
      name: "Job Givers",
      desc: "Hiring companies",
      count: 67,
      link: "/careers",
    },
    {
      name: "Scholars",
      desc: "Students & academics",
      count: 198,
      link: "/scholar",
    },
  ];

  const featuredProfiles = [
    {
      id: 1,
      name: "Nisha Adhikari",
      type: "Member",
      location: "Kathmandu",
      specialty: "Community Lead",
      avatar: "https://picsum.photos/seed/p1/200/200",
      joined: "Jan 2024",
      link: "/profile/member/1",
    },
    {
      id: 2,
      name: "Himalaya Ventures",
      type: "Partner",
      location: "Pokhara",
      specialty: "Growth Partner",
      avatar: "https://picsum.photos/seed/p2/200/200",
      joined: "Mar 2023",
      link: "/profile/partner/2",
    },
    {
      id: 3,
      name: "Aarav Shrestha",
      type: "Entrepreneur",
      location: "Lalitpur",
      specialty: "Fintech Startup",
      avatar: "https://picsum.photos/seed/p3/200/200",
      joined: "Jul 2024",
      link: "/profile/entrepreneur/3",
    },
    {
      id: 4,
      name: "E-SPOT Biratnagar",
      type: "Franchisee",
      location: "Biratnagar",
      specialty: "Regional Operations",
      avatar: "https://picsum.photos/seed/p4/200/200",
      joined: "Nov 2023",
      link: "/profile/franchise/4",
    },
    {
      id: 5,
      name: "Sonia Karki",
      type: "Leader",
      location: "Chitwan",
      specialty: "Leadership Mentor",
      avatar: "https://picsum.photos/seed/p5/200/200",
      joined: "Feb 2024",
      link: "/profile/leader/5",
    },
    {
      id: 6,
      name: "Rohit Tamang",
      type: "Trainer",
      location: "Dharan",
      specialty: "Digital Skills Coach",
      avatar: "https://picsum.photos/seed/p6/200/200",
      joined: "Sep 2023",
      link: "/profile/trainer/6",
    },
    {
      id: 7,
      name: "Priya Basnet",
      type: "Jobseeker",
      location: "Bhaktapur",
      specialty: "UI Engineer",
      avatar: "https://picsum.photos/seed/p7/200/200",
      joined: "Dec 2024",
      link: "/profile/jobseeker/7",
    },
    {
      id: 8,
      name: "Nova Foods Group",
      type: "Job Giver",
      location: "Butwal",
      specialty: "Hospitality Hiring",
      avatar: "https://picsum.photos/seed/p8/200/200",
      joined: "Jun 2023",
      link: "/profile/jobgiver/8",
    },
    {
      id: 9,
      name: "Sagar Ghimire",
      type: "Scholar",
      location: "Kirtipur",
      specialty: "AI Research Scholar",
      avatar: "https://picsum.photos/seed/p9/200/200",
      joined: "Aug 2024",
      link: "/profile/scholar/9",
    },
    {
      id: 10,
      name: "Ritu Sharma",
      type: "Member",
      location: "Hetauda",
      specialty: "Event Coordinator",
      avatar: "https://picsum.photos/seed/p10/200/200",
      joined: "Apr 2024",
      link: "/profile/member/10",
    },
    {
      id: 11,
      name: "TechBridge Nepal",
      type: "Partner",
      location: "Kathmandu",
      specialty: "Tech Solutions Partner",
      avatar: "https://picsum.photos/seed/p11/200/200",
      joined: "Jan 2025",
      link: "/profile/partner/11",
    },
    {
      id: 12,
      name: "Binod Thapa",
      type: "Entrepreneur",
      location: "Nepalgunj",
      specialty: "AgriTech Founder",
      avatar: "https://picsum.photos/seed/p12/200/200",
      joined: "Oct 2024",
      link: "/profile/entrepreneur/12",
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

  const filters = [
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
  ];

  return (
    <>
      <Hero
        title="Our Community Profiles"
        subtitle="Browse and connect with members, partners, entrepreneurs, and more. Discover the people who make our network thrive."
        label="Profiles"
        image={heroImage}
      />
      <div className="flex-1 py-8 sm:py-12 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                E-SPOT Directory
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Browse 2,680+ members across 9 categories
              </p>
            </div>
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, role, or location…"
                className="w-full rounded-lg border border-gray-200 bg-white pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition-all"
              />
            </div>
          </div>

          {/* Category Stats Strip */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 mb-8">
            {profileTypes.map((pt) => (
              <Link
                key={pt.name}
                to={pt.link}
                className="bg-white px-3 py-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all text-center group"
              >
                <p className="text-lg font-bold text-gray-900">
                  {pt.count.toLocaleString()}
                </p>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5 group-hover:text-gray-700 transition-colors">
                  {pt.name}
                </p>
              </Link>
            ))}
          </div>

          {/* Filters + View Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <div className="flex flex-wrap gap-1.5">
              {filters.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeType === type
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5">
              <button
                onClick={() => setView("grid")}
                className={`p-1.5 rounded-md transition-colors ${
                  view === "grid"
                    ? "bg-gray-900 text-white"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-1.5 rounded-md transition-colors ${
                  view === "list"
                    ? "bg-gray-900 text-white"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results */}
          {filteredProfiles.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 text-center py-16">
              <p className="text-gray-400 text-sm">
                No matching profiles found.
              </p>
            </div>
          ) : view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProfiles.map((profile) => {
                const Icon = typeIcons[profile.type] || Users;
                return (
                  <Link
                    key={profile.id}
                    to={profile.link}
                    className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-gray-300 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="w-12 h-12 rounded-full object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 truncate group-hover:text-gray-700">
                          {profile.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {profile.specialty}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 shrink-0 mt-1 transition-colors" />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-100">
                          <Icon className="w-3 h-3" />
                          {profile.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-gray-400">
                        <MapPin className="w-3 h-3" />
                        {profile.location}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
              {filteredProfiles.map((profile) => {
                const Icon = typeIcons[profile.type] || Users;
                return (
                  <Link
                    key={profile.id}
                    to={profile.link}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors group"
                  >
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">
                        {profile.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {profile.specialty}
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-100">
                      <Icon className="w-3 h-3" />
                      {profile.type}
                    </span>
                    <span className="hidden md:flex items-center gap-1 text-xs text-gray-400">
                      <MapPin className="w-3 h-3" />
                      {profile.location}
                    </span>
                    <span className="hidden lg:inline text-xs text-gray-400">
                      {profile.joined}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 shrink-0 transition-colors" />
                  </Link>
                );
              })}
            </div>
          )}

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Showing{" "}
              <span className="font-medium text-gray-600">
                {filteredProfiles.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-gray-600">
                {featuredProfiles.length}
              </span>{" "}
              featured profiles
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
