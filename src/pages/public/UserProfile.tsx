import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Star,
  MapPin,
  Calendar,
  Award,
  Package,
  Tag,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

export default function UserProfile() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();

  // Render different layouts for each profile type
  if (type === "partner") {
    // Specialized partner data for health/hospitals
    const isHospital = id === "11" || id === "2";
    const partnerName = id === "11" ? "Apollo Hospitals" : id === "2" ? "Fortis Health Care" : "TechCorp Solutions";
    
    const partnerData = {
      name: partnerName,
      avatar: `https://i.pravatar.cc/150?u=partner${id}`,
      cover: isHospital 
        ? "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" // hospital building
        : "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80",
      rating: 4.9,
      reviews: 128,
      location: isHospital ? "New Delhi, India" : "New York, USA",
      joined: "Jan 2022",
      verified: true,
      about: isHospital
        ? `${partnerName} is a world-class healthcare provider committed to excellence in medical services, research, and education. We partner with ESpot to provide premium wellness packages to members.`
        : "TechCorp Solutions is a leading technology partner, delivering innovative solutions and driving digital transformation for global clients.",
      stats: [
        { label: "Total Projects", value: isHospital ? "12K+" : "87" },
        { label: "Patients/Clients", value: isHospital ? "5M+" : "42" },
        { label: "Satisfaction", value: "98%" },
      ],
      awards: ["Top Provider 2025", "Innovation Award", isHospital ? "Best Healthcare 2024" : "Best B2B Service"],
      achievements: [
        {
          title: isHospital ? "JCI Accredited" : "100+ Projects Delivered",
          icon: <Package className="w-5 h-5 text-blue-500" />,
        },
        {
          title: "Global Excellence Award",
          icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />,
        },
      ],
      badges: [
        { label: "Verified Partner", color: "bg-blue-100 text-blue-700" },
        { label: "Platinum Provider", color: "bg-amber-100 text-amber-700" },
      ],
      packages: isHospital ? [
        { name: "Executive Health Checkup", price: "₹4,999", features: ["Full Blood Panel", "ECG/Stress Test", "Consultation"] },
        { name: "Cardiac Screening", price: "₹7,499", features: ["Echocardiogram", "Lipid Profile", "dietary Plan"] },
        { name: "Cancer Prevention", price: "₹9,999", features: ["Advanced Imaging", "Genetic Markers", "Specialist Review"] },
      ] : [
        { name: "Digital Transformation", price: "$2,500+", features: ["Cloud Migration", "AI Integration", "Legacy Update"] },
        { name: "Security Audit", price: "$1,500+", features: ["Firewall Test", "Penetration Test", "Compliance"] },
      ],
      offers: [
        { id: 1, title: isHospital ? "15% Off Health Screenings" : "20% Off Annual Contract", validUntil: "Dec 31, 2026" },
        { id: 2, title: "Free Initial Consultation", validUntil: "Sep 30, 2026" },
      ],
    };
    return (
      <div className="min-h-screen bg-slate-50 pb-24">
        {/* Cover Image */}
        <div className="h-64 md:h-80 w-full relative">
          <img
            src={partnerData.cover}
            alt="Cover"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full p-4 sm:p-6 lg:p-8 z-20">
            <div className="max-w-[1200px] mx-auto">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200/50 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start backdrop-blur-xl bg-white/95">
            <img
              src={partnerData.avatar}
              alt={partnerData.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] border-4 border-white shadow-2xl object-cover bg-white shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 pt-2 w-full">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                      {partnerData.name}
                    </h1>
                    {partnerData.verified && (
                      <CheckCircle2 className="w-6 h-6 text-blue-500 fill-blue-500/10" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 font-bold text-[10px] uppercase tracking-widest rounded-full border border-blue-100">
                      Top Verified Partner
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 shrink-0">
                  <button className="px-7 py-3 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:scale-105">
                    Contact Now
                  </button>
                  <button className="px-7 py-3 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all shadow-md">
                    Follow
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-10 text-sm text-slate-500 font-medium mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-black text-slate-900">
                    {partnerData.rating}
                  </span>
                  <span>({partnerData.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{partnerData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>Since {partnerData.joined}</span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {partnerData.about}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Packages Section */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <Package className="w-6 h-6 text-blue-600" />
                  Services & Packages
                </h2>
                <div className="grid gap-6">
                  {partnerData.packages.map((pkg, idx) => (
                    <div key={idx} className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-black text-slate-900">{pkg.name}</h3>
                        <span className="text-xl font-black text-blue-600">{pkg.price}</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {pkg.features.map(f => (
                          <span key={f} className="flex items-center gap-1.5 text-sm text-slate-600 font-medium px-3 py-1 bg-white rounded-lg border border-slate-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offers Section */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <Tag className="w-6 h-6 text-emerald-600" />
                  Exclusive Partner Offers
                </h2>
                <div className="grid gap-4">
                  {partnerData.offers.map((offer) => (
                    <div
                      key={offer.id}
                      className="flex items-center justify-between p-6 rounded-2xl border border-emerald-100 bg-emerald-50/30"
                    >
                      <div>
                        <h3 className="font-black text-emerald-900 tracking-tight">
                          {offer.title}
                        </h3>
                        <p className="text-sm text-emerald-700/70 font-medium">
                          Expiring: {offer.validUntil}
                        </p>
                      </div>
                      <button className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-black rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-100">
                        Claim
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
               {/* Stats Card */}
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 text-center">Platform Impact</h3>
                <div className="space-y-8">
                  {partnerData.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-4xl font-black mb-1">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards Section */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-amber-500" />
                  Certifications
                </h2>
                <div className="space-y-6">
                  {partnerData.awards.map((award, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                        <Award className="w-5 h-5 text-amber-600" />
                      </div>
                      <p className="text-sm font-bold text-slate-800 leading-tight pt-1">{award}</p>
                    </div>
                  ))}
                </div>
              </div>

               {/* Badges */}
               <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-6 h-6 text-blue-500" />
                  E-SPOT Badges
                </h2>
                <div className="flex flex-wrap gap-2">
                  {partnerData.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 rounded-xl text-xs font-black border border-slate-100 shadow-sm ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "member") {
    // Member profile layout
    const memberData = {
      name: "Jane Doe",
      avatar: `https://i.pravatar.cc/150?u=member${id}`,
      cover:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      joined: "Feb 2023",
      location: "London, UK",
      verified: true,
      about:
        "Jane is an active member of the E-SPOT community, participating in events and contributing to member discussions.",
      stats: [
        { label: "Events Attended", value: "12" },
        { label: "Membership Tier", value: "Gold" },
        { label: "Connections", value: "58" },
      ],
      interests: ["Entrepreneurship", "Leadership", "Investment"],
      achievements: [
        {
          title: "Attended 10+ Events",
          icon: <Calendar className="w-5 h-5 text-green-500" />,
        },
        {
          title: "Gold Tier Member",
          icon: <Award className="w-5 h-5 text-amber-500" />,
        },
      ],
      badges: [
        { label: "Active Member", color: "bg-green-100 text-green-700" },
        { label: "Community Helper", color: "bg-emerald-100 text-emerald-700" },
      ],
    };
    return (
      <div className="min-h-screen bg-slate-50 pb-24">
        {/* Cover Image */}
        <div className="h-64 md:h-80 w-full relative">
          <img
            src={memberData.cover}
            alt="Cover"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full p-4 sm:p-6 lg:p-8 z-20">
            <div className="max-w-[1200px] mx-auto">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
            </div>
          </div>
          {/* Achievements Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm mt-8">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-green-500" />
              Achievements
            </h2>
            <ul className="space-y-3">
              {memberData.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {ach.icon}
                  <span className="font-medium text-slate-800">
                    {ach.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Badges Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm mt-8">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Badges
            </h2>
            <div className="flex flex-wrap gap-3">
              {memberData.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold border border-slate-200 ${badge.color}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 relative z-10 overflow-hidden">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <img
              src={memberData.avatar}
              alt={memberData.name}
              className="w-28 h-28 md:w-32 md:h-32 rounded-2xl border-2 border-white shadow-lg object-cover bg-white shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 pt-2 w-full">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-slate-900">
                      {memberData.name}
                    </h1>
                    {memberData.verified && (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <p className="text-green-600 font-semibold tracking-wide uppercase text-xs">
                    Member
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="px-5 py-2 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors shadow-sm">
                    Message
                  </button>
                  <button className="px-5 py-2 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                    Connect
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-6 text-sm text-slate-600 mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{memberData.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {memberData.joined}</span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {memberData.about}
              </p>
            </div>
          </div>
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 max-w-2xl mx-auto w-full">
            {memberData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-slate-200 text-center shadow-sm"
              >
                <div className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          {/* Interests Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm mt-8">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-green-500" />
              Interests
            </h2>
            <div className="flex flex-wrap gap-3">
              {memberData.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-green-50 text-green-700 rounded-xl text-sm font-medium border border-green-100"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "franchise") {
    // Franchise profile layout
    const franchiseData = {
      name: "E-SPOT Central Hub",
      avatar: `https://i.pravatar.cc/150?u=franchise${id}`,
      cover:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
      rating: 4.8,
      reviews: 312,
      location: "Kathmandu, Nepal",
      joined: "May 2021",
      verified: true,
      about:
        "E-SPOT Central Hub is the flagship franchise location, offering premium services, events, and a vibrant member community in the heart of Kathmandu.",
      stats: [
        { label: "Monthly Revenue", value: "$180k" },
        { label: "Active Members", value: "2,400+" },
        { label: "Events Hosted", value: "34" },
      ],
      awards: ["Franchise of the Year 2025", "Best Customer Experience"],
      achievements: [
        {
          title: "Hosted 30+ Events",
          icon: <Calendar className="w-5 h-5 text-indigo-600" />,
        },
        {
          title: "2,000+ Active Members",
          icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />,
        },
      ],
      badges: [
        { label: "Flagship Franchise", color: "bg-indigo-100 text-indigo-700" },
        { label: "Customer Favorite", color: "bg-amber-100 text-amber-700" },
      ],
      offers: [
        {
          id: 1,
          title: "Free Event Space for Members",
          validUntil: "Dec 31, 2026",
        },
        { id: 2, title: "10% Off All Services", validUntil: "Sep 30, 2026" },
      ],
    };
    return (
      <div className="min-h-screen bg-slate-50 pb-24">
        {/* Cover Image */}
        <div className="h-64 md:h-80 w-full relative">
          <img
            src={franchiseData.cover}
            alt="Cover"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full p-4 sm:p-6 lg:p-8 z-20">
            <div className="max-w-[1200px] mx-auto">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 relative z-10 overflow-hidden">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <img
              src={franchiseData.avatar}
              alt={franchiseData.name}
              className="w-28 h-28 md:w-32 md:h-32 rounded-2xl border-2 border-white shadow-lg object-cover bg-white shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 pt-2 w-full">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-slate-900">
                      {franchiseData.name}
                    </h1>
                    {franchiseData.verified && (
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <p className="text-indigo-600 font-semibold tracking-wide uppercase text-xs">
                    Franchise
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm">
                    Contact
                  </button>
                  <button className="px-5 py-2 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                    Follow
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-6 text-sm text-slate-600 mb-4">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-slate-900">
                    {franchiseData.rating}
                  </span>
                  <span>({franchiseData.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{franchiseData.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {franchiseData.joined}</span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {franchiseData.about}
              </p>
            </div>
          </div>
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 max-w-2xl mx-auto w-full">
            {franchiseData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-slate-200 text-center shadow-sm"
              >
                <div className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          {/* Offers Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Tag className="w-5 h-5 text-indigo-600" />
                Franchise Offers
              </h2>
            </div>
            <div className="space-y-3">
              {franchiseData.offers.map((offer) => (
                <div
                  key={offer.id}
                  className="flex items-center justify-between p-4 rounded-xl border border-indigo-100 bg-indigo-50/50"
                >
                  <div>
                    <h3 className="font-bold text-indigo-900">{offer.title}</h3>
                    <p className="text-sm text-indigo-700 mt-0.5">
                      Valid until {offer.validUntil}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition-colors">
                    Claim
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Awards Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm mt-8">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-amber-500" />
              Awards & Recognition
            </h2>
            <ul className="space-y-4">
              {franchiseData.awards.map((award, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{award}</p>
                    <p className="text-sm text-slate-500">Verified by E-SPOT</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* Achievements Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm mt-8">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Package className="w-5 h-5 text-indigo-600" />
                Achievements
              </h2>
              <ul className="space-y-3">
                {franchiseData.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {ach.icon}
                    <span className="font-medium text-slate-800">
                      {ach.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Badges Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm mt-8">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                Badges
              </h2>
              <div className="flex flex-wrap gap-3">
                {franchiseData.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border border-slate-200 ${badge.color}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default fallback (other types)
  return (
    <div className="min-h-screen flex items-center justify-center text-slate-500 text-lg">
      Profile type not found or not yet implemented.
    </div>
  );
}
