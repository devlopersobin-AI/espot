import React, { useMemo, useState } from "react";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import SubNav from "../../components/SubNav";

import { useNavigate } from "react-router-dom";
import {
  Star,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Award,
  Building,
  Search,
  Wallet,
  Clock3,
  Store,
  TrendingUp,
} from "lucide-react";

export default function Franchise() {
  const subNav = [
    "Overview",
    "New Franchise",
    "Top Franchise",
    "Franchisee of Year",
    "Eligibility",
    "Process",
  ];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const [newQuery, setNewQuery] = useState("");
  const [region, setRegion] = useState<"All" | "East" | "Central" | "West">(
    "All",
  );
  const navigate = useNavigate();

  const topFranchises = [
    {
      id: 1,
      name: "E-SPOT Central Hub",
      rating: 4.9,
      reviews: 312,
      location: "Kathmandu",
      image: "https://picsum.photos/seed/f1/400/300",
      monthlyRevenue: "$180k",
      growth: "+22%",
    },
    {
      id: 2,
      name: "E-SPOT Pokhara",
      rating: 4.8,
      reviews: 145,
      location: "Pokhara",
      image: "https://picsum.photos/seed/f2/400/300",
      monthlyRevenue: "$112k",
      growth: "+16%",
    },
    {
      id: 3,
      name: "E-SPOT Lalitpur",
      rating: 4.7,
      reviews: 89,
      location: "Lalitpur",
      image: "https://picsum.photos/seed/f3/400/300",
      monthlyRevenue: "$95k",
      growth: "+13%",
    },
  ];

  const newFranchises = [
    {
      name: "E-SPOT Butwal",
      date: "March 10, 2026",
      owner: "Sita Sharma",
      region: "West",
      image: "https://picsum.photos/seed/nf1/400/300",
    },
    {
      name: "E-SPOT Dharan",
      date: "February 28, 2026",
      owner: "Ram Thapa",
      region: "East",
      image: "https://picsum.photos/seed/nf2/400/300",
    },
    {
      name: "E-SPOT Biratnagar",
      date: "February 15, 2026",
      owner: "Hari Gurung",
      region: "East",
      image: "https://picsum.photos/seed/nf3/400/300",
    },
    {
      name: "E-SPOT Hetauda",
      date: "January 20, 2026",
      owner: "Gita Rai",
      region: "Central",
      image: "https://picsum.photos/seed/nf4/400/300",
    },
  ];

  const filteredNewFranchises = useMemo(() => {
    return newFranchises.filter((item) => {
      const byRegion = region === "All" || item.region === region;
      const byQuery =
        !newQuery.trim() ||
        `${item.name} ${item.owner}`
          .toLowerCase()
          .includes(newQuery.toLowerCase());
      return byRegion && byQuery;
    });
  }, [newFranchises, newQuery, region]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Franchise"
        subtitle="Expand the E-SPOT network by opening a franchise in your city. Benefit from our proven business model and global brand recognition."
        label="Module"
        image="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
        accentColor="text-yellow-400"
        overlayOpacity={0.7}
      />

      {/* Sub Navigation */}
      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-indigo-600 border-indigo-600"
      />

      {/* Content Section */}
      <div className="flex-1 pb-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-7">
            <StatCard
              label="Active Franchises"
              value="120+"
              note="Across 15 countries"
              icon={<Store className="w-4.5 h-4.5" />}
            />
            <StatCard
              label="Avg Rating"
              value="4.8"
              note="From 10k+ reviews"
              icon={<Star className="w-4.5 h-4.5" />}
            />
            <StatCard
              label="Support SLA"
              value="24/7"
              note="Dedicated franchise desk"
              icon={<Clock3 className="w-4.5 h-4.5" />}
            />
            <StatCard
              label="Median ROI"
              value="19 mo"
              note="Payback timeline"
              icon={<TrendingUp className="w-4.5 h-4.5" />}
            />
          </div>

          {activeTab === "Overview" && (
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] gap-5 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Franchise growth dashboard
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Evaluate market readiness, launch capacity, and revenue
                  potential with location-specific support insights.
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <PillProgress label="Site readiness" value={72} />
                  <PillProgress label="Hiring readiness" value={65} />
                  <PillProgress label="Launch compliance" value={84} />
                </div>

                <div className="mt-6 rounded-xl border border-slate-200 p-4">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">
                    Revenue potential by city tier
                  </h3>
                  <ScaleRow
                    label="Tier 1 Metro"
                    value="$120k-$220k"
                    progress={87}
                  />
                  <ScaleRow
                    label="Tier 2 City"
                    value="$75k-$140k"
                    progress={68}
                  />
                  <ScaleRow
                    label="Tier 3 Emerging"
                    value="$45k-$95k"
                    progress={52}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
                  Launch Readiness
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mt-2">
                  Franchise Starter Kit
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Get location vetting, brand setup, and staff training
                  templates in one onboarding track.
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5" />{" "}
                    City demand and competitor scan
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5" />{" "}
                    Budget and cash flow model
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5" />{" "}
                    30-day pre-launch checklist
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
                >
                  Talk to launch advisor <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {activeTab === "Top Franchise" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {topFranchises.map((franchise) => (
                <Link
                  key={franchise.id}
                  to={`/profile/franchise/${franchise.id}`}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="h-48 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={franchise.image}
                      alt={franchise.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                        {franchise.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-bold text-amber-700">
                          {franchise.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                      <MapPin className="w-4 h-4" /> {franchise.location} •{" "}
                      {franchise.reviews} reviews
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <span>Revenue {franchise.monthlyRevenue}</span>
                      <span>{franchise.growth}</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-bold text-sm">
                      View Profile{" "}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {activeTab === "Eligibility" && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Franchise eligibility matrix
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Applications are evaluated by capital readiness, operational
                discipline, and local market strategy.
              </p>
              <ul className="space-y-4">
                {[
                  "Minimum investment capital of $50,000.",
                  "Prime commercial location with at least 1,000 sq ft.",
                  "Prior experience in retail or business management.",
                  "Commitment to E-SPOT brand guidelines and operational standards.",
                  "Pass background and financial checks.",
                ].map((criterion, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 text-base sm:text-lg">
                      {criterion}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 flex items-start gap-3">
                <Wallet className="w-5 h-5 text-indigo-600 shrink-0" />
                <p className="text-sm text-slate-700">
                  Applicants with a clear 18-month working capital plan and
                  local hiring pipeline are prioritized in fast-track review.
                </p>
              </div>
            </div>
          )}

          {activeTab === "Process" && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Navigation to signup page replaces QuickRegisterForm */}
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                How to Start
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {[
                  {
                    step: 1,
                    title: "Application",
                    desc: "Submit your initial franchise application online.",
                    eta: "Day 1-3",
                  },
                  {
                    step: 2,
                    title: "Review & Interview",
                    desc: "Our team reviews your profile and schedules an interview.",
                    eta: "Day 4-10",
                  },
                  {
                    step: 3,
                    title: "Location Approval",
                    desc: "We help you select and approve the perfect location.",
                    eta: "Day 11-22",
                  },
                  {
                    step: 4,
                    title: "Training",
                    desc: "Complete our comprehensive franchise training program.",
                    eta: "Day 23-35",
                  },
                  {
                    step: 5,
                    title: "Grand Opening",
                    desc: "Launch your E-SPOT franchise with our marketing support.",
                    eta: "Day 36-45",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                      {item.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">
                          {item.title}
                        </div>
                        <div className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                          {item.eta}
                        </div>
                      </div>
                      <div className="text-slate-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate("/auth?mode=signup&role=Franchisee")}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
                >
                  Become a Franchisee <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}

          {activeTab === "New Franchise" && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 mb-8">
                <Building className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">
                  Recently Opened Franchises
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                <label className="md:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">
                    Search franchise
                  </span>
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      value={newQuery}
                      onChange={(e) => setNewQuery(e.target.value)}
                      placeholder="Search by location or owner"
                      className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </label>

                <label>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">
                    Region
                  </span>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value as typeof region)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All">All regions</option>
                    <option value="East">East</option>
                    <option value="Central">Central</option>
                    <option value="West">West</option>
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredNewFranchises.map((newFranchise, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={newFranchise.image}
                        alt={newFranchise.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1">
                        {newFranchise.name}
                      </h3>
                      <p className="text-sm text-slate-500 mb-2">
                        Opened: {newFranchise.date}
                      </p>
                      <p className="text-sm font-medium text-slate-700">
                        Owner: {newFranchise.owner}
                      </p>
                      <p className="text-xs text-blue-700 mt-1">
                        Region: {newFranchise.region}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {filteredNewFranchises.length === 0 && (
                <div className="text-center py-12 mt-4 rounded-2xl border border-dashed border-slate-300">
                  <p className="font-semibold text-slate-700">
                    No newly opened franchises found.
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Try another region or broader search term.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "Franchisee of Year" && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 md:p-12 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award className="w-64 h-64 text-amber-500" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0">
                  <img
                    src="https://picsum.photos/seed/foy/400/400"
                    alt="Franchisee of the Year"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-bold text-sm mb-4">
                    <Award className="w-4 h-4" /> 2025 Winner
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Rajesh Shrestha
                  </h2>
                  <h3 className="text-xl font-bold text-slate-700 mb-4">
                    E-SPOT Central Hub, Kathmandu
                  </h3>
                  <p className="text-slate-600 text-lg mb-6 max-w-2xl leading-relaxed">
                    "Rajesh has demonstrated exceptional leadership and
                    commitment to the E-SPOT vision. Under his guidance, the
                    Central Hub achieved record-breaking growth and set a new
                    standard for customer service excellence."
                  </p>
                  <div className="grid grid-cols-3 gap-4 border-t border-amber-200/50 pt-6">
                    <div>
                      <div className="text-2xl font-bold text-amber-600">
                        150%
                      </div>
                      <div className="text-sm font-medium text-slate-600">
                        Revenue Growth
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-600">
                        4.9/5
                      </div>
                      <div className="text-sm font-medium text-slate-600">
                        Customer Rating
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-600">
                        12k+
                      </div>
                      <div className="text-sm font-medium text-slate-600">
                        Members Served
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  note,
  icon,
}: {
  label: string;
  value: string;
  note: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
            {label}
          </p>
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mt-2">
            {value}
          </p>
        </div>
        <span className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
          {icon}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-indigo-700 font-medium mt-3">
        {note}
      </p>
    </article>
  );
}

function PillProgress({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-900">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 mt-2 overflow-hidden">
        <div
          className="h-full rounded-full bg-indigo-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function ScaleRow({
  label,
  value,
  progress,
}: {
  label: string;
  value: string;
  progress: number;
}) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
