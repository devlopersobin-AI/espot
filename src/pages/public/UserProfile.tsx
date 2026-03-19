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
} from "lucide-react";

export default function UserProfile() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();

  // Render different layouts for each profile type
  if (type === "partner") {
    // Partner profile layout
    const partnerData = {
      name: "TechCorp Solutions",
      avatar: `https://i.pravatar.cc/150?u=partner${id}`,
      cover:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80",
      rating: 4.9,
      reviews: 128,
      location: "New York, USA",
      joined: "Jan 2022",
      verified: true,
      about:
        "TechCorp Solutions is a leading technology partner, delivering innovative solutions and driving digital transformation for global clients.",
      stats: [
        { label: "Total Projects", value: "87" },
        { label: "Clients", value: "42" },
        { label: "Avg Deal Size", value: "$24,000" },
      ],
      awards: ["Top Partner 2025", "Innovation Award", "Best B2B Service"],
      offers: [
        { id: 1, title: "20% Off Annual Contract", validUntil: "Dec 31, 2026" },
        { id: 2, title: "Free Consultation", validUntil: "Sep 30, 2026" },
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 relative z-10 overflow-hidden">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <img
              src={partnerData.avatar}
              alt={partnerData.name}
              className="w-28 h-28 md:w-32 md:h-32 rounded-2xl border-2 border-white shadow-lg object-cover bg-white shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 pt-2 w-full">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-slate-900">
                      {partnerData.name}
                    </h1>
                    {partnerData.verified && (
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <p className="text-blue-600 font-semibold tracking-wide uppercase text-xs">
                    Partner
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
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
                    {partnerData.rating}
                  </span>
                  <span>({partnerData.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{partnerData.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {partnerData.joined}</span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {partnerData.about}
              </p>
            </div>
          </div>
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 max-w-2xl mx-auto w-full">
            {partnerData.stats.map((stat, idx) => (
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
                <Tag className="w-5 h-5 text-emerald-600" />
                Partner Offers
              </h2>
            </div>
            <div className="space-y-3">
              {partnerData.offers.map((offer) => (
                <div
                  key={offer.id}
                  className="flex items-center justify-between p-4 rounded-xl border border-emerald-100 bg-emerald-50/50"
                >
                  <div>
                    <h3 className="font-bold text-emerald-900">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-emerald-700 mt-0.5">
                      Valid until {offer.validUntil}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-lg hover:bg-emerald-700 transition-colors">
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
              {partnerData.awards.map((award, idx) => (
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
