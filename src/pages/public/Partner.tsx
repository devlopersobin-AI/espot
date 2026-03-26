import React, { useMemo, useState } from "react";
import Hero from "../../components/Hero";
import { Link, useNavigate } from "react-router-dom";
import {
  Star,
  ArrowRight,
  CheckCircle2,
  Target,
  Calendar,
  Users,
  Award,
  Search,
  TrendingUp,
  MapPin,
  Megaphone,
} from "lucide-react";

export default function Partner() {
  const [partnerQuery, setPartnerQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState<
    | "All"
    | "Technology"
    | "Supply Chain"
    | "Education"
    | "Energy"
    | "Healthcare"
    | "Finance"
  >("All");
  const navigate = useNavigate();

  const topPartners = [
    {
      id: 1,
      name: "TechCorp Solutions",
      rating: 4.9,
      reviews: 128,
      type: "Technology",
      image: "https://picsum.photos/seed/p1/400/300",
      growth: "+21%",
      campaigns: 34,
    },
    {
      id: 2,
      name: "Global Logistics Inc",
      rating: 4.8,
      reviews: 95,
      type: "Supply Chain",
      image: "https://picsum.photos/seed/p2/400/300",
      growth: "+14%",
      campaigns: 22,
    },
    {
      id: 3,
      name: "EduFirst Academy",
      rating: 4.9,
      reviews: 210,
      type: "Education",
      image: "https://picsum.photos/seed/p3/400/300",
      growth: "+26%",
      campaigns: 41,
    },
    {
      id: 4,
      name: "GreenEnergy Co",
      rating: 4.7,
      reviews: 84,
      type: "Energy",
      image: "https://picsum.photos/seed/p4/400/300",
      growth: "+17%",
      campaigns: 19,
    },
    {
      id: 5,
      name: "HealthPlus Clinics",
      rating: 4.9,
      reviews: 340,
      type: "Healthcare",
      image: "https://picsum.photos/seed/p5/400/300",
      growth: "+24%",
      campaigns: 57,
    },
    {
      id: 6,
      name: "FinServe Partners",
      rating: 4.6,
      reviews: 112,
      type: "Finance",
      image: "https://picsum.photos/seed/p6/400/300",
      growth: "+11%",
      campaigns: 29,
    },
  ];

  const filteredPartners = useMemo(() => {
    return topPartners.filter((partner) => {
      const byType =
        industryFilter === "All" || partner.type === industryFilter;
      const byQuery =
        !partnerQuery.trim() ||
        `${partner.name} ${partner.type}`
          .toLowerCase()
          .includes(partnerQuery.toLowerCase());
      return byType && byQuery;
    });
  }, [industryFilter, partnerQuery, topPartners]);

  const events = [
    {
      title: "Partner Growth Summit",
      date: "Apr 12, 2026",
      format: "Hybrid",
      city: "Kathmandu",
      seats: 64,
    },
    {
      title: "Joint Campaign Studio",
      date: "Apr 27, 2026",
      format: "In person",
      city: "Pokhara",
      seats: 28,
    },
    {
      title: "Revenue Playbook Workshop",
      date: "May 10, 2026",
      format: "Online",
      city: "Remote",
      seats: 120,
    },
  ];

  const criteria = [
    {
      title: "Business Legitimacy",
      detail: "Registered entity, compliance documents, and tax records.",
      weight: "30%",
    },
    {
      title: "Service Quality",
      detail: "Operational quality benchmark and customer support consistency.",
      weight: "25%",
    },
    {
      title: "Brand Alignment",
      detail: "Ability to execute co-branded campaigns and value messaging.",
      weight: "20%",
    },
    {
      title: "Scalability",
      detail: "Capacity to deliver across regions with stable fulfillment.",
      weight: "25%",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Partnership"
        subtitle="Join as a partner and grow your business within the ESPOT ecosystem. Earn points through sales, sponsorships, and event hosting."
        label="Module"
        image="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80"
        accentColor="text-blue-400"
      />

      {/* Founding Partner Highlight & Partner Types */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
            {/* Flying Horse Nepal Highlight */}
            <div className="bg-white rounded-2xl border border-green-200 shadow-md p-8 flex flex-col justify-center items-start">
              <span className="inline-block bg-green-100 text-green-700 font-bold text-xs px-3 py-1 rounded-full mb-3">Founder Partner</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Flying Horse Nepal</h3>
              <p className="text-slate-700 mb-4">Flying Horse is a leading company in Nepal that blends tradition, culture, and modern horse activities. Known for promoting horse riding and related adventures, it's a popular destination for horse enthusiasts, thrill-seekers, event organizers, and tourists.</p>
              <span className="text-xs text-slate-400">Founding Partner</span>
            </div>
            {/* Partner Types Card Grid */}
            <div className="grid grid-cols-1 gap-5">
              <h4 className="text-lg font-bold text-slate-900 mb-4">Types of Partners</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Corporate/Collaborative Partner */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col shadow-sm">
                  <span className="font-bold text-green-800 mb-2">Type 1: Corporate/Collaborative</span>
                  <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
                    <li>Own or run their own business</li>
                    <li>Involved to expand or boost their business</li>
                  </ul>
                </div>
                {/* Equity/Shareholders Partner */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col shadow-sm">
                  <span className="font-bold text-green-800 mb-2">Type 2: Equity/Shareholders</span>
                  <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
                    <li>Direct investors of e-spot</li>
                    <li>Partners in profit and loss</li>
                    <li>Gain fixed profit share</li>
                  </ul>
                </div>
                {/* Founder Partner */}
                <div className="bg-green-100 border border-green-300 rounded-2xl p-6 flex flex-col shadow-md">
                  <span className="font-bold text-green-900 mb-2">Type 3: Founder Partner</span>
                  <ul className="text-sm text-slate-800 list-disc list-inside space-y-1">
                    <li>Direct investment in e-spot</li>
                    <li>Main shareholders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_380px] gap-5 sm:gap-6">
          {/* Partnership performance cockpit metrics removed as requested */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white p-6 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-cyan-200">
              Partner Spotlight
            </p>
            <h3 className="text-2xl font-semibold mt-2 tracking-tight">
              HealthPlus Clinics
            </h3>
            <p className="text-sm text-cyan-100/85 mt-2 leading-relaxed">
              Scaled preventive care campaigns to 18 cities through co-branded
              health drives and referral programs.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-5">
              <GlassMetric label="Cities" value="18" />
              <GlassMetric label="Members Served" value="72k" />
              <GlassMetric label="NPS" value="4.9/5" />
              <GlassMetric label="Retention" value="81%" />
            </div>
            <Link
              to="/partner"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-cyan-200"
            >
              Explore partnership playbook <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section (5 Ps) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            The 5 Ps of Partnership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {/* Product */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-5 flex flex-col items-center shadow-sm hover:shadow-md transition">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-blue-900 text-lg mb-1">Product</h4>
              <p className="text-slate-700 text-sm text-center">
                Offer compelling solutions that meet member and market needs.
              </p>
            </div>
            {/* Price */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 rounded-2xl p-5 flex flex-col items-center shadow-sm hover:shadow-md transition">
              <Award className="w-8 h-8 text-cyan-600 mb-3" />
              <h4 className="font-bold text-cyan-900 text-lg mb-1">Price</h4>
              <p className="text-slate-700 text-sm text-center">
                Deliver value through competitive and transparent pricing
                models.
              </p>
            </div>
            {/* Place */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-5 flex flex-col items-center shadow-sm hover:shadow-md transition">
              <MapPin className="w-8 h-8 text-emerald-600 mb-3" />
              <h4 className="font-bold text-emerald-900 text-lg mb-1">Place</h4>
              <p className="text-slate-700 text-sm text-center">
                Ensure your offerings are accessible across key channels and
                regions.
              </p>
            </div>
            {/* Promotion */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-2xl p-5 flex flex-col items-center shadow-sm hover:shadow-md transition">
              <Megaphone className="w-8 h-8 text-pink-600 mb-3" />
              <h4 className="font-bold text-pink-900 text-lg mb-1">
                Promotion
              </h4>
              <p className="text-slate-700 text-sm text-center">
                Amplify your brand through joint campaigns and targeted
                outreach.
              </p>
            </div>
            {/* People */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl p-5 flex flex-col items-center shadow-sm hover:shadow-md transition">
              <Users className="w-8 h-8 text-yellow-600 mb-3" />
              <h4 className="font-bold text-yellow-900 text-lg mb-1">People</h4>
              <p className="text-slate-700 text-sm text-center">
                Empower teams to drive partnership growth and deliver
                exceptional experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Partnership Qualification Scorecard
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Every application is assessed on operational quality, compliance
            readiness, and growth contribution potential.
          </p>
          <div className="space-y-3">
            {criteria.map((criterion) => (
              <div
                key={criterion.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-slate-900">
                    {criterion.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wide text-blue-700 bg-blue-100 px-2 py-1 rounded">
                    Weight {criterion.weight}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  {criterion.detail}
                </p>
              </div>
            ))}
          </div>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
              Minimum 2 years operational history.
            </li>
            <li className="flex items-start gap-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
              Dedicated partner success contact required.
            </li>
            <li className="flex items-start gap-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
              Compliance and identity documents must be verifiable.
            </li>
          </ul>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Shared Growth Roadmap
          </h2>
          <ul className="space-y-4">
            <li className="rounded-xl border border-slate-200 bg-white p-4 flex items-start gap-4">
              <span className="inline-block w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
                1
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">
                  Q2 2026
                </p>
                <h3 className="text-base font-semibold text-slate-900">
                  Regional onboarding sprint
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Onboard new partners in key regions with dedicated support and
                  compliance checks.
                </p>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4 flex items-start gap-4">
              <span className="inline-block w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
                2
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">
                  Q3 2026
                </p>
                <h3 className="text-base font-semibold text-slate-900">
                  Cross-sector campaign bundles
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Launch bundled campaigns with trusted partners to drive member
                  engagement and value.
                </p>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4 flex items-start gap-4">
              <span className="inline-block w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
                3
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">
                  Q4 2026
                </p>
                <h3 className="text-base font-semibold text-slate-900">
                  Partner-led retention initiatives
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Empower partners to lead retention programs, focusing on
                  long-term member trust and satisfaction.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <Target className="w-5 h-5 text-blue-600 shrink-0" />
            <p className="text-sm text-blue-900">
              Top objective: increase high-quality member referrals by 22%
              through joint campaign orchestration and partner enablement.
            </p>
          </div>
        </div>
      </section>

      {/* Top Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Top Partners
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <label className="md:col-span-2">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">
                  Search partners
                </span>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    value={partnerQuery}
                    onChange={(e) => setPartnerQuery(e.target.value)}
                    placeholder="Search by partner name or industry"
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </label>
              <label>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">
                  Industry
                </span>
                <select
                  value={industryFilter}
                  onChange={(e) =>
                    setIndustryFilter(e.target.value as typeof industryFilter)
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All">All industries</option>
                  <option value="Technology">Technology</option>
                  <option value="Supply Chain">Supply Chain</option>
                  <option value="Education">Education</option>
                  <option value="Energy">Energy</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                </select>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.length === 0 ? (
              <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
                <p className="font-semibold text-slate-700">
                  No partners match your filter.
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Try changing industry or using a broader search term.
                </p>
              </div>
            ) : (
              filteredPartners.map((partner) => (
                <Link
                  key={partner.id}
                  to={`/profile/partner/${partner.id}`}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="h-48 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                        {partner.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-bold text-amber-700">
                          {partner.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm mb-4">
                      {partner.type} • {partner.reviews} reviews
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span>Growth {partner.growth}</span>
                      <span>{partner.campaigns} campaigns</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-bold text-sm">
                      View Profile{" "}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Upcoming Partner Events
          </h2>
          <div className="space-y-4">
            {events.map((event, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-full md:w-48 h-32 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={`https://picsum.photos/seed/event${i}/400/300`}
                    alt="Event"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-2">
                    {event.format} • {event.city} • {event.seats} seats left
                  </p>
                  <p className="text-slate-600 mb-4">
                    Join top partners for networking, strategy sharing, and
                    upcoming campaign previews.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate("/auth?mode=signup&role=Partner")}
                    className="text-blue-600 font-bold hover:text-blue-700 flex items-center text-sm"
                  >
                    Register Now <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to become a Partner?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-8">
            Submit your profile, get scored by our partner success team, and
            start your first campaign in as little as 14 days.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="rounded-xl bg-white/15 border border-white/25 p-3 text-sm text-white">
              1. Application review
            </div>
            <div className="rounded-xl bg-white/15 border border-white/25 p-3 text-sm text-white">
              2. Onboarding sprint
            </div>
            <div className="rounded-xl bg-white/15 border border-white/25 p-3 text-sm text-white">
              3. Campaign launch
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate("/auth?mode=signup&role=Partner")}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-blue-600 bg-white hover:bg-blue-50 transition-colors shadow-lg"
          >
            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

function MetricCard({
  label,
  value,
  trend,
  icon,
}: {
  label: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
            {label}
          </p>
          <p className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-2">
            {value}
          </p>
        </div>
        <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
          {icon}
        </span>
      </div>
      <p className="text-xs sm:text-sm font-medium text-blue-700 mt-3">
        {trend}
      </p>
    </article>
  );
}

function ProgressTile({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50">
      <p className="text-xs text-slate-500 font-semibold">{label}</p>
      <p className="text-lg font-semibold text-slate-900 mt-1">{value}%</p>
      <div className="h-2 rounded-full bg-slate-200 mt-2 overflow-hidden">
        <div
          className="h-full rounded-full bg-blue-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function GlassMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-3">
      <p className="text-[11px] uppercase tracking-wide text-cyan-100">
        {label}
      </p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}
