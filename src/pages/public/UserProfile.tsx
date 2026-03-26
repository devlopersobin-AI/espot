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
  ShoppingBag,
} from "lucide-react";

export default function UserProfile() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();

  // ── REUSABLE PROFILE SHELL ──────────────────────────────────
  const ProfileShell = ({
    data,
    roleBadge,
    accentColor,
    children,
  }: {
    data: {
      name: string;
      avatar: string;
      cover: string;
      location: string;
      joined: string;
      verified: boolean;
      about: string;
      stats: { label: string; value: string }[];
      badges: { label: string; color: string }[];
    };
    roleBadge: string;
    accentColor: string;
    children?: React.ReactNode;
  }) => (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="h-64 md:h-80 w-full relative">
        <img src={data.cover} alt="Cover" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-0 left-0 w-full p-4 sm:p-6 lg:p-8 z-20">
          <div className="max-w-[1200px] mx-auto">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm px-4 py-2 rounded-xl transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" /> Back
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200/50 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start backdrop-blur-xl bg-white/95">
          <img src={data.avatar} alt={data.name} className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] border-4 border-white shadow-2xl object-cover bg-white shrink-0" referrerPolicy="no-referrer" />
          <div className="flex-1 pt-2 w-full">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight">{data.name}</h1>
                  {data.verified && <CheckCircle2 className="w-6 h-6 text-blue-500 fill-blue-500/10" />}
                </div>
                <span className={`px-3 py-1 ${accentColor} font-bold text-[10px] uppercase tracking-widest rounded-full border`}>{roleBadge}</span>
              </div>
              <div className="flex gap-3 shrink-0">
                <button className="px-7 py-3 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:scale-105">Connect</button>
                <button className="px-7 py-3 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all shadow-md">Message</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-10 text-sm text-slate-500 font-medium mb-6">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /><span>{data.location}</span></div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400" /><span>Since {data.joined}</span></div>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">{data.about}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">{children}</div>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 text-center">Platform Impact</h3>
              <div className="space-y-8">
                {data.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl font-black mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-6"><ShieldCheck className="w-6 h-6 text-blue-500" /> E-SPOT Badges</h2>
              <div className="flex flex-wrap gap-2">
                {data.badges.map((badge, idx) => (
                  <span key={idx} className={`px-4 py-2 rounded-xl text-xs font-black border border-slate-100 shadow-sm ${badge.color}`}>{badge.label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
      products: isHospital ? [
        { id: 1, name: "Home Health Monitor Kit", price: "₹2,499", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80" },
        { id: 2, name: "Premium First Aid Station", price: "₹1,299", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80" },
      ] : [
        { id: 1, name: "Enterprise Server Rack", price: "$4,999", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
        { id: 2, name: "Network Security Appliance", price: "$1,899", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" },
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

              {/* Products Section */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                   <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                     <ShoppingBag className="w-6 h-6 text-blue-600" />
                     Products & Merchandise
                   </h2>
                   <Link to="/product" className="text-sm font-bold text-blue-600 hover:text-blue-700">View All</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {partnerData.products.map((product) => (
                    <div
                      key={product.id}
                      className="group rounded-2xl border border-slate-100 bg-white overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all"
                    >
                      <div className="aspect-video w-full overflow-hidden bg-slate-50 relative">
                        <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={product.name} />
                      </div>
                      <div className="p-5 flex flex-col items-start gap-4">
                        <div>
                           <h3 className="font-black text-slate-900 line-clamp-1">{product.name}</h3>
                           <p className="text-lg font-black text-blue-600">{product.price}</p>
                        </div>
                        <button className="w-full py-2.5 bg-slate-900 text-white text-sm font-black rounded-xl hover:bg-slate-800 transition">
                          View details
                        </button>
                      </div>
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
    const data = {
      name: "Jane Doe",
      avatar: `https://i.pravatar.cc/150?u=member${id}`,
      cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      joined: "Feb 2023",
      location: "London, UK",
      verified: true,
      about: "Jane is an active Gold-tier member of the E-SPOT community. She regularly participates in networking events, leadership workshops, and investment meetups. A passionate advocate for sustainable entrepreneurship.",
      stats: [
        { label: "Events Attended", value: "24" },
        { label: "Membership Tier", value: "Gold" },
        { label: "Connections", value: "128" },
      ],
      badges: [
        { label: "Active Member", color: "bg-green-100 text-green-700" },
        { label: "Community Helper", color: "bg-emerald-100 text-emerald-700" },
        { label: "Gold Tier", color: "bg-amber-100 text-amber-700" },
      ],
      interests: ["Entrepreneurship", "Leadership", "Investment", "Sustainability", "Networking", "Public Speaking"],
      activity: [
        { title: "Attended Entrepreneurs Arena", date: "Mar 15, 2026", type: "Event" },
        { title: "Completed Leadership Fundamentals", date: "Feb 28, 2026", type: "Training" },
        { title: "Connected with 12 new members", date: "Feb 10, 2026", type: "Networking" },
        { title: "Upgraded to Gold Tier", date: "Jan 05, 2026", type: "Milestone" },
      ],
      achievements: [
        "Attended 20+ Events",
        "Gold Tier Member",
        "Community Contributor",
        "Networking Champion",
      ],
    };
    return (
      <ProfileShell data={data} roleBadge="Member" accentColor="bg-green-50 text-green-700 border-green-100">
        {/* Activity Timeline */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-green-600" /> Recent Activity
          </h2>
          <div className="space-y-6">
            {data.activity.map((a, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-slate-200 pb-6 last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                <h3 className="text-lg font-black text-slate-900">{a.title}</h3>
                <div className="flex items-center gap-3 mt-1 text-sm text-slate-500 font-medium">
                  <span>{a.date}</span>
                  <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-bold">{a.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Achievements */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-500" /> Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.achievements.map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="font-bold text-slate-800 text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Interests */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-green-500" /> Interests
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.interests.map((interest, idx) => (
              <span key={idx} className="px-5 py-2.5 bg-green-50 text-green-700 rounded-xl text-sm font-bold border border-green-100">{interest}</span>
            ))}
          </div>
        </div>
      </ProfileShell>
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



  // ── ENTREPRENEUR PROFILE ──────────────────────────────────────
  if (type === "entrepreneur") {
    const data = {
      name: "Priya Sharma",
      avatar: `https://i.pravatar.cc/150?u=entrepreneur${id}`,
      cover: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      location: "Bangalore, India",
      joined: "Mar 2023",
      verified: true,
      about: "Founder & CEO of EcoBeauty — a sustainable cosmetics startup disrupting the beauty industry with eco-conscious, vegan-certified products. Serial entrepreneur with 2 prior exits.",
      stats: [
        { label: "Startups Founded", value: "3" },
        { label: "Employees", value: "42" },
        { label: "Funding Raised", value: "$2.1M" },
      ],
      badges: [
        { label: "Verified Entrepreneur", color: "bg-purple-100 text-purple-700" },
        { label: "Pitch Day Winner", color: "bg-amber-100 text-amber-700" },
        { label: "Seed Funded", color: "bg-emerald-100 text-emerald-700" },
      ],
      ventures: [
        { name: "EcoBeauty", status: "Active", stage: "Series A", industry: "Beauty & Wellness" },
        { name: "GreenPack Solutions", status: "Exited", stage: "Acquired", industry: "Packaging" },
        { name: "UrbanFarm.io", status: "Active", stage: "Pre-Seed", industry: "AgriTech" },
      ],
      skills: ["Product Strategy", "Fundraising", "Team Building", "Go-to-Market", "Sustainability"],
    };
    return (
      <ProfileShell data={data} roleBadge="Entrepreneur" accentColor="bg-purple-50 text-purple-700 border-purple-100">
        {/* Ventures Portfolio */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Package className="w-6 h-6 text-purple-600" /> Venture Portfolio
          </h2>
          <div className="space-y-4">
            {data.ventures.map((v, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-purple-200 hover:shadow-xl transition-all flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900">{v.name}</h3>
                  <p className="text-sm text-slate-500 font-medium">{v.industry}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{v.stage}</span>
                  <span className={`text-xs font-black px-3 py-1 rounded-full ${v.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{v.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Skills */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-amber-500" /> Core Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((s, i) => (
              <span key={i} className="px-5 py-2.5 bg-purple-50 text-purple-700 rounded-xl text-sm font-bold border border-purple-100">{s}</span>
            ))}
          </div>
        </div>
      </ProfileShell>
    );
  }

  // ── LEADER PROFILE ────────────────────────────────────────────
  if (type === "leader") {
    const data = {
      name: "David Rodriguez",
      avatar: `https://i.pravatar.cc/150?u=leader${id}`,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
      location: "Singapore",
      joined: "Jan 2022",
      verified: true,
      about: "CEO of InnovateX, keynote speaker, and leadership mentor. Passionate about building high-performance teams and transforming organizational cultures through servant leadership.",
      stats: [
        { label: "Teams Led", value: "15+" },
        { label: "Keynote Talks", value: "48" },
        { label: "Mentees", value: "120+" },
      ],
      badges: [
        { label: "Certified Leader", color: "bg-amber-100 text-amber-700" },
        { label: "Keynote Speaker", color: "bg-blue-100 text-blue-700" },
        { label: "Top Mentor", color: "bg-emerald-100 text-emerald-700" },
      ],
      expertise: ["Servant Leadership", "Strategic Planning", "Change Management", "Executive Coaching", "Conflict Resolution", "Team Building"],
      speaking: [
        { title: "The Future of Servant Leadership", event: "ESpot Global Summit 2025", date: "Nov 2025" },
        { title: "Building 10x Teams", event: "TEDx Innovation Week", date: "Sep 2025" },
        { title: "Leading Through Uncertainty", event: "World Business Forum", date: "Jun 2025" },
      ],
    };
    return (
      <ProfileShell data={data} roleBadge="Leader" accentColor="bg-amber-50 text-amber-700 border-amber-100">
        {/* Speaking Engagements */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-500" /> Speaking Engagements
          </h2>
          <div className="space-y-4">
            {data.speaking.map((s, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-amber-200 hover:shadow-xl transition-all">
                <h3 className="text-lg font-black text-slate-900">{s.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 font-medium">
                  <span>{s.event}</span>
                  <span className="text-xs bg-slate-100 px-3 py-1 rounded-full font-bold">{s.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Expertise */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-amber-500" /> Expertise Areas
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.expertise.map((e, i) => (
              <span key={i} className="px-5 py-2.5 bg-amber-50 text-amber-700 rounded-xl text-sm font-bold border border-amber-100">{e}</span>
            ))}
          </div>
        </div>
      </ProfileShell>
    );
  }

  // ── TRAINER PROFILE ───────────────────────────────────────────
  if (type === "trainer") {
    const data = {
      name: "Michael Chang",
      avatar: `https://i.pravatar.cc/150?u=trainer${id}`,
      cover: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      location: "Kathmandu, Nepal",
      joined: "Aug 2022",
      verified: true,
      about: "Certified Agile Coach and Scrum Master with 12+ years of experience. Specializes in team transformation, DevOps practices, and upskilling tech professionals for the modern workplace.",
      stats: [
        { label: "Courses Taught", value: "24" },
        { label: "Students Trained", value: "3,200+" },
        { label: "Avg Rating", value: "4.9★" },
      ],
      badges: [
        { label: "Certified Trainer", color: "bg-cyan-100 text-cyan-700" },
        { label: "Top Rated", color: "bg-amber-100 text-amber-700" },
        { label: "1000+ Students", color: "bg-emerald-100 text-emerald-700" },
      ],
      courses: [
        { name: "Agile & Scrum Mastery", students: 820, rating: 4.9, price: "₹2,999" },
        { name: "DevOps Fundamentals", students: 640, rating: 4.8, price: "₹3,499" },
        { name: "Leadership for Tech Teams", students: 380, rating: 4.7, price: "₹1,999" },
        { name: "Product Management 101", students: 510, rating: 4.8, price: "₹2,499" },
      ],
      certifications: ["Certified Scrum Master (CSM)", "AWS Solutions Architect", "PMP Certified", "Google Cloud Professional"],
    };
    return (
      <ProfileShell data={data} roleBadge="Trainer" accentColor="bg-cyan-50 text-cyan-700 border-cyan-100">
        {/* Courses */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Package className="w-6 h-6 text-cyan-600" /> Courses & Programs
          </h2>
          <div className="space-y-4">
            {data.courses.map((c, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-cyan-200 hover:shadow-xl transition-all flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900">{c.name}</h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-slate-500 font-medium">
                    <span>{c.students} students</span>
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {c.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-cyan-600">{c.price}</span>
                  <button className="block mt-2 px-5 py-2 bg-cyan-600 text-white text-xs font-black rounded-xl hover:bg-cyan-700 transition">Enroll</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Certifications */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-cyan-600" /> Certifications Held
          </h2>
          <div className="space-y-3">
            {data.certifications.map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                <span className="font-bold text-slate-800">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </ProfileShell>
    );
  }

  // ── JOBSEEKER PROFILE ─────────────────────────────────────────
  if (type === "jobseeker") {
    const data = {
      name: "Emily Chen",
      avatar: `https://i.pravatar.cc/150?u=jobseeker${id}`,
      cover: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      location: "San Francisco, USA",
      joined: "Jun 2023",
      verified: true,
      about: "Senior Frontend Developer with 6+ years of experience building scalable web applications. Proficient in React, TypeScript, and Node.js. Seeking remote-first opportunities with innovative teams.",
      stats: [
        { label: "Experience", value: "6+ yrs" },
        { label: "Projects", value: "32" },
        { label: "Certifications", value: "5" },
      ],
      badges: [
        { label: "Open to Work", color: "bg-green-100 text-green-700" },
        { label: "Verified Skills", color: "bg-blue-100 text-blue-700" },
        { label: "Remote Ready", color: "bg-purple-100 text-purple-700" },
      ],
      skills: ["React", "TypeScript", "Node.js", "GraphQL", "AWS", "Figma", "Docker", "CI/CD"],
      experience: [
        { role: "Senior Frontend Developer", company: "TechFlow Inc.", duration: "2021 – Present", desc: "Led the frontend team of 8, built a design system serving 200+ components." },
        { role: "Frontend Developer", company: "StartupHub", duration: "2019 – 2021", desc: "Built customer-facing dashboards for 50K+ users using React and Redux." },
        { role: "Junior Developer", company: "WebCraft Studio", duration: "2017 – 2019", desc: "Developed responsive websites and e-commerce platforms for SMB clients." },
      ],
      preferences: ["Remote First", "Full-Time", "$120K – $160K", "Product Teams"],
    };
    return (
      <ProfileShell data={data} roleBadge="Jobseeker" accentColor="bg-green-50 text-green-700 border-green-100">
        {/* Experience */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Package className="w-6 h-6 text-green-600" /> Work Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((e, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-slate-200 pb-6 last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                <h3 className="text-lg font-black text-slate-900">{e.role}</h3>
                <p className="text-sm font-bold text-green-600">{e.company} · {e.duration}</p>
                <p className="text-sm text-slate-500 mt-2 font-medium">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Skills */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-amber-500" /> Technical Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((s, i) => (
              <span key={i} className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold">{s}</span>
            ))}
          </div>
        </div>
        {/* Preferences */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Tag className="w-6 h-6 text-blue-600" /> Job Preferences
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.preferences.map((p, i) => (
              <span key={i} className="px-5 py-2.5 bg-green-50 text-green-700 rounded-xl text-sm font-bold border border-green-100">{p}</span>
            ))}
          </div>
        </div>
      </ProfileShell>
    );
  }

  // ── JOB GIVER PROFILE ─────────────────────────────────────────
  if (type === "jobgiver") {
    const data = {
      name: "TechCorp Innovations",
      avatar: `https://i.pravatar.cc/150?u=jobgiver${id}`,
      cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      location: "Austin, Texas, USA",
      joined: "Feb 2022",
      verified: true,
      about: "TechCorp Innovations is a leading enterprise software company building AI-powered solutions for Fortune 500 clients. We're scaling rapidly and always looking for exceptional talent.",
      stats: [
        { label: "Open Positions", value: "18" },
        { label: "Team Size", value: "350+" },
        { label: "Avg Rating", value: "4.7★" },
      ],
      badges: [
        { label: "Verified Employer", color: "bg-blue-100 text-blue-700" },
        { label: "Top Employer 2025", color: "bg-amber-100 text-amber-700" },
        { label: "Fast Growing", color: "bg-emerald-100 text-emerald-700" },
      ],
      openings: [
        { title: "Senior React Developer", type: "Full-Time · Remote", salary: "$130K – $170K" },
        { title: "Product Manager", type: "Full-Time · Hybrid", salary: "$120K – $150K" },
        { title: "DevOps Engineer", type: "Full-Time · On-site", salary: "$110K – $140K" },
        { title: "UX Designer", type: "Contract · Remote", salary: "$90K – $120K" },
      ],
      benefits: ["Remote-first culture", "Equity & stock options", "Unlimited PTO", "Health & dental insurance", "Learning budget ($2K/yr)", "Annual team retreats"],
    };
    return (
      <ProfileShell data={data} roleBadge="Job Giver / Employer" accentColor="bg-blue-50 text-blue-700 border-blue-100">
        {/* Job Openings */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Package className="w-6 h-6 text-blue-600" /> Open Positions
          </h2>
          <div className="space-y-4">
            {data.openings.map((j, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900">{j.title}</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">{j.type}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-blue-600">{j.salary}</span>
                  <button className="block mt-2 px-5 py-2 bg-blue-600 text-white text-xs font-black rounded-xl hover:bg-blue-700 transition">Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Company Benefits */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-amber-500" /> Company Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-bold text-slate-800 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </ProfileShell>
    );
  }

  // ── SCHOLAR PROFILE ───────────────────────────────────────────
  if (type === "scholar") {
    const data = {
      name: "Anika Patel",
      avatar: `https://i.pravatar.cc/150?u=scholar${id}`,
      cover: "https://images.unsplash.com/photo-1523050854058-8df90110c476?auto=format&fit=crop&w=1200&q=80",
      location: "London, UK",
      joined: "Sep 2023",
      verified: true,
      about: "PhD candidate in Computational Neuroscience at Imperial College London. ESpot Scholar Award recipient 2025. Research focuses on AI-driven brain-computer interfaces for medical applications.",
      stats: [
        { label: "Publications", value: "8" },
        { label: "Citations", value: "142" },
        { label: "GPA", value: "3.95" },
      ],
      badges: [
        { label: "ESpot Scholar", color: "bg-violet-100 text-violet-700" },
        { label: "Research Fellow", color: "bg-blue-100 text-blue-700" },
        { label: "Dean's List", color: "bg-amber-100 text-amber-700" },
      ],
      research: [
        { title: "Neural Decoding with Transformer Architectures", journal: "Nature Neuroscience", year: "2025" },
        { title: "Low-Latency BCI for Motor Control", journal: "IEEE Trans. on BME", year: "2024" },
        { title: "Federated Learning in Medical Imaging", journal: "Medical Image Analysis", year: "2024" },
      ],
      scholarships: [
        { name: "ESpot Global Scholar Award", amount: "₹5,00,000", year: "2025" },
        { name: "Imperial College Research Bursary", amount: "£12,000", year: "2024" },
        { name: "British Council STEM Scholarship", amount: "£8,000", year: "2023" },
      ],
      interests: ["AI/ML", "Neuroscience", "Brain-Computer Interfaces", "Medical Devices", "Open Source"],
    };
    return (
      <ProfileShell data={data} roleBadge="Scholar" accentColor="bg-violet-50 text-violet-700 border-violet-100">
        {/* Research Publications */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Package className="w-6 h-6 text-violet-600" /> Research & Publications
          </h2>
          <div className="space-y-4">
            {data.research.map((r, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-violet-200 hover:shadow-xl transition-all">
                <h3 className="text-lg font-black text-slate-900">{r.title}</h3>
                <div className="flex items-center gap-3 mt-2 text-sm text-slate-500 font-medium">
                  <span className="text-violet-600 font-bold">{r.journal}</span>
                  <span className="text-xs bg-slate-100 px-3 py-1 rounded-full font-bold">{r.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Scholarships Won */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-500" /> Scholarships & Awards
          </h2>
          <div className="space-y-4">
            {data.scholarships.map((s, i) => (
              <div key={i} className="flex items-center justify-between p-5 rounded-2xl border border-amber-100 bg-amber-50/30">
                <div>
                  <h3 className="font-black text-slate-900">{s.name}</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">{s.year}</p>
                </div>
                <span className="text-xl font-black text-amber-600">{s.amount}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Research Interests */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-violet-500" /> Research Interests
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.interests.map((s, i) => (
              <span key={i} className="px-5 py-2.5 bg-violet-50 text-violet-700 rounded-xl text-sm font-bold border border-violet-100">{s}</span>
            ))}
          </div>
        </div>
      </ProfileShell>
    );
  }

  // Default fallback (other types)
  return (
    <div className="min-h-screen flex items-center justify-center text-slate-500 text-lg">
      Profile type not found or not yet implemented.
    </div>
  );
}
