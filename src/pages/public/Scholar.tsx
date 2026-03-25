import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  MapPin,
  Calendar,
  ArrowRight,
  Award,
  Building2,
  Handshake,
} from "lucide-react";
import SubNav from "../../components/SubNav";

import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";

export default function Scholar() {
  const subNav = [
    "Scholarships",
    "Scholars",
    "Universities",
    "Donors",
    "Reviews",
  ];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const navigate = useNavigate();

  const scholarships = [
    {
      id: 1,
      title: "Global Tech Excellence Scholarship",
      provider: "TechCorp Foundation",
      amount: "$10,000",
      deadline: "2026-05-15",
      type: "Merit-based",
      seats: 18,
    },
    {
      id: 2,
      title: "Women in STEM Grant",
      provider: "InnovateHer",
      amount: "$5,000",
      deadline: "2026-06-01",
      type: "Need-based",
      seats: 40,
    },
    {
      id: 3,
      title: "Future Leaders Fellowship",
      provider: "Global Leaders Org",
      amount: "Full Tuition",
      deadline: "2026-04-30",
      type: "Merit-based",
      seats: 12,
    },
    {
      id: 4,
      title: "Rural Scholars Access Fund",
      provider: "E-SPOT Education Cell",
      amount: "$3,500",
      deadline: "2026-05-28",
      type: "Need-based",
      seats: 55,
    },
  ];

  const topScholars = [
    {
      id: 1,
      name: "Emily Chen",
      field: "Computer Science",
      university: "MIT",
      image: "https://picsum.photos/seed/s1/150/150",
      achievement: "Published 2 papers in AI",
    },
    {
      id: 2,
      name: "David Smith",
      field: "Mechanical Engineering",
      university: "Stanford",
      image: "https://picsum.photos/seed/s2/150/150",
      achievement: "Robotics Competition Winner",
    },
    {
      id: 3,
      name: "Aisha Patel",
      field: "Medicine",
      university: "Johns Hopkins",
      image: "https://picsum.photos/seed/s3/150/150",
      achievement: "Top 1% of class",
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      field: "Economics",
      university: "LSE",
      image: "https://picsum.photos/seed/s4/150/150",
      achievement: "National Debate Champion",
    },
  ];

  const universities = [
    {
      name: "Stanford University",
      location: "Stanford, CA",
      programs: 12,
      image: "https://picsum.photos/seed/uni1/400/200",
    },
    {
      name: "MIT",
      location: "Cambridge, MA",
      programs: 8,
      image: "https://picsum.photos/seed/uni2/400/200",
    },
    {
      name: "Oxford University",
      location: "Oxford, UK",
      programs: 15,
      image: "https://picsum.photos/seed/uni3/400/200",
    },
    {
      name: "University of Melbourne",
      location: "Melbourne, AU",
      programs: 9,
      image: "https://picsum.photos/seed/uni4/400/200",
    },
    {
      name: "University of Tokyo",
      location: "Tokyo, JP",
      programs: 7,
      image: "https://picsum.photos/seed/uni5/400/200",
    },
    {
      name: "IIT Delhi",
      location: "Delhi, IN",
      programs: 6,
      image: "https://picsum.photos/seed/uni6/400/200",
    },
  ];

  const donors = [
    { name: "TechCorp Foundation", type: "Corporate", total: "$500k+" },
    { name: "Global Education Trust", type: "Non-Profit", total: "$1.2M+" },
    { name: "InnovateHer", type: "Organization", total: "$250k+" },
    { name: "The Smith Family", type: "Private", total: "$100k+" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        label="Global Scholarships"
        title="Empowering the Next Generation"
        subtitle="Access world-class funding opportunities and connect with top-tier universities. We help you bridge the gap between ambition and academic excellence."
        image="https://images.unsplash.com/photo-1541339907198-e08759df9a73?auto=format&fit=crop&w=1600&q=80"
        accentColor="text-emerald-400"
      />

      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-emerald-700 border-emerald-600 bg-emerald-50"
      />

      {/* Content Section */}
      <div className="flex-1 py-8 sm:py-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {activeTab === "Scholarships" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
              {/* Navigation to signup page replaces QuickRegisterForm */}
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Available Scholarships
              </h2>
              {scholarships.map((scholarship) => (
                <div
                  key={scholarship.id}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        {scholarship.title}
                      </h3>
                      <div className="text-slate-500 text-sm mt-1 flex flex-wrap gap-x-4 gap-y-1">
                        <span className="font-medium text-slate-700">
                          {scholarship.provider}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" /> Deadline:{" "}
                          {scholarship.deadline}
                        </span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-xs">
                          {scholarship.type}
                        </span>
                        <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-xs">
                          {scholarship.seats} seats
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-3">
                    <div className="font-semibold text-lg text-emerald-600">
                      {scholarship.amount}
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate("/auth?mode=signup&role=Scholar")}
                      className="text-emerald-600 font-bold text-sm hover:underline"
                    >
                      Start Application
                    </button>
                  </div>
                </div>
              ))}

              <div className="bg-emerald-950 text-emerald-50 rounded-2xl p-5 sm:p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">Application Roadmap</h3>
                <p className="text-emerald-100 mb-5">
                  A complete scholarship flow from profile completion to final
                  award confirmation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm font-medium">
                  {[
                    "Create profile",
                    "Submit documents",
                    "Interview and review",
                    "Award and onboarding",
                  ].map((step) => (
                    <div
                      key={step}
                      className="rounded-xl bg-white/10 border border-white/15 px-4 py-3"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "Scholars" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Featured Scholars
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topScholars.map((scholar) => (
                  <Link
                    key={scholar.id}
                    to={`/profile/scholar/${scholar.id}`}
                    className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-emerald-300 transition-all group"
                  >
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-slate-50 group-hover:ring-emerald-50 transition-all">
                      <img
                        src={scholar.image}
                        alt={scholar.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {scholar.name}
                    </h3>
                    <p className="text-sm font-medium text-emerald-600 mb-1">
                      {scholar.field}
                    </p>
                    <div className="flex items-center justify-center text-slate-500 text-sm mb-3">
                      <MapPin className="w-3 h-3 mr-1" /> {scholar.university}
                    </div>
                    <p className="text-xs text-slate-500 italic">
                      "{scholar.achievement}"
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Universities" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Partner Universities
                  </h2>
                  <p className="text-slate-600">
                    Explore top institutions offering scholarships through
                    E-SPOT.
                  </p>
                </div>
                <button className="text-emerald-600 font-bold hover:underline flex items-center gap-1">
                  View All <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities.map((uni, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <div className="h-32 bg-slate-200 relative overflow-hidden">
                      <img
                        src={uni.image}
                        alt={uni.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-slate-900 mb-1">
                        {uni.name}
                      </h3>
                      <div className="flex items-center text-slate-500 text-sm mb-4">
                        <MapPin className="w-4 h-4 mr-1" /> {uni.location}
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                        <span className="text-sm font-medium text-slate-600">
                          {uni.programs} Active Programs
                        </span>
                        <button className="text-emerald-600 font-bold text-sm hover:underline">
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2 mb-3 text-slate-900 font-bold">
                  <Building2 className="h-5 w-5 text-emerald-600" /> Enrollment
                  Support Desk
                </div>
                <p className="text-slate-600 text-sm">
                  Compare programs, shortlist universities, and schedule
                  counselor calls directly from the scholarship dashboard.
                </p>
              </div>
            </div>
          )}

          {activeTab === "Donors" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
              <div className="bg-emerald-50 border border-emerald-100 rounded-[24px] sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center mb-10 sm:mb-12">
                <h2 className="text-2xl font-bold text-emerald-900 mb-3">
                  Empower the Next Generation
                </h2>
                <p className="text-sm text-emerald-700 max-w-2xl mx-auto mb-6">
                  Join our network of generous donors and organizations making
                  education accessible to talented individuals worldwide.
                </p>
              </div>

              {/* Navigation to signup page replaces QuickRegisterForm for Donors */}
              {/* You may add a donor-specific role if needed, e.g., role=Scholar */}
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Featured Contributors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {donors.map((donor, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 bg-slate-100">
                      <div className="w-full h-full flex items-center justify-center">
                        <Handshake className="h-8 w-8 text-emerald-600" />
                      </div>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      {donor.name}
                    </h4>
                    <p className="text-xs font-medium text-emerald-600 mb-3 uppercase tracking-wider">
                      {donor.type}
                    </p>
                    <div className="text-sm text-slate-500">
                      Total Contribution
                    </div>
                    <div className="font-bold text-lg text-slate-900">
                      {donor.total}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Success Stories
              </h2>
              <div className="space-y-6">
                {[
                  {
                    name: "Michael Chang",
                    role: "Data Science Scholar",
                    text: "The E-SPOT scholarship program completely changed my trajectory. The funding allowed me to focus entirely on my research, leading to a breakthrough publication.",
                    rating: 5,
                    image: "https://picsum.photos/seed/rev1/100/100",
                  },
                  {
                    name: "Sarah Jenkins",
                    role: "Engineering Fellow",
                    text: "Beyond the financial support, the mentorship I received through the donor network was invaluable. I connected with industry leaders who guided my career choices.",
                    rating: 5,
                    image: "https://picsum.photos/seed/rev2/100/100",
                  },
                  {
                    name: "David Okafor",
                    role: "Medical Student",
                    text: "Navigating the scholarship application process was seamless. The platform matched me with opportunities I wouldn't have found otherwise.",
                    rating: 4,
                    image: "https://picsum.photos/seed/rev3/100/100",
                  },
                ].map((review, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-sm relative"
                  >
                    <div className="absolute top-8 right-8 text-emerald-100">
                      <svg
                        className="w-12 h-12"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, j) => (
                        <svg
                          key={j}
                          className="w-5 h-5 text-amber-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-700 text-lg italic mb-6 relative z-10">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="font-bold text-slate-900">
                          {review.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          {review.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fallback for other tabs */}
          {!subNav.includes(activeTab) && (
            <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <GraduationCap className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-400 mb-2">
                {activeTab} Section
              </h2>
              <p className="text-slate-500">
                Content for {activeTab} is being updated.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
