import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Globe,
  TrendingUp,
  Star,
  Award,
  GraduationCap,
  Building2,
  Handshake,
  Zap,
  BookOpen,
  Tent,
  Trophy,
  Heart,
  Sparkles,
  Plane,
  UtensilsCrossed,
  Camera,
  Calendar,
  Briefcase,
  MapPin,
} from "lucide-react";
import Carousel from "../../components/Carousel";
import MinimalCardSection from "../../components/MinimalCardSection";
import { products } from "../../data/products";
import heroBanner from "../../assets/hero-banner.mp4";
import bodybanner from "../../assets/hero-banner.jpg";

type SpotlightItem = {
  title: string;
  subtitle: string;
  badge: string;
  initials: string;
};

export default function Home() {
  // ── Data helpers ────────────────────────────────────────────────────────
  const makeItems = (
    titles: string[],
    subtitles: string[],
    badgeFn: (i: number) => string,
    initials: string[],
  ): SpotlightItem[] =>
    Array.from({ length: 10 }, (_, i) => ({
      title: titles[i % titles.length],
      subtitle: subtitles[i % subtitles.length],
      badge: badgeFn(i),
      initials: initials[i % initials.length],
    }));

  // ── 3 trust stats ────────────────────────────────────────────────────────
  const stats = [
    {
      value: "300,000+",
      label: "Active Members",
      icon: Users,
      iconCls: "text-slate-900",
      bgCls: "bg-slate-100",
    },
    {
      value: "2.4M",
      label: "Points Earned",
      icon: TrendingUp,
      iconCls: "text-slate-900",
      bgCls: "bg-slate-100",
    },
    {
      value: "860+",
      label: "Partners Worldwide",
      icon: Globe,
      iconCls: "text-slate-900",
      bgCls: "bg-slate-100",
    },
  ];

  // ── Platform modules ─────────────────────────────────────────────────────
  const modules = [
    {
      title: "Membership",
      desc: "Join 300K+ members, earn reward points, and access exclusive perks, events, and services.",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // group of people
      path: "/membership",
      cta: "Explore Membership",
    },
    {
      title: "Partner Program",
      desc: "Build strategic business alliances, co-market services, and grow revenue together.",
      icon: Handshake,
      image:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80", // handshake
      path: "/partner",
      cta: "Become a Partner",
    },
    {
      title: "Franchise",
      desc: "Own an E-Spot Club franchise in your city with proven systems and brand support.",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // building
      path: "/franchise",
      cta: "Own a Franchise",
    },
    {
      title: "Training",
      desc: "Access certified courses, skill workshops, and career acceleration programs.",
      icon: GraduationCap,
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80", // classroom
      path: "/training",
      cta: "Start Learning",
    },
    {
      title: "Investment",
      desc: "Early Bird, Premium & Elite investment tiers across 8 venture categories worldwide.",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // finance
      path: "/investment",
      cta: "View Investment",
    },
    {
      title: "Entrepreneurship",
      desc: "Launch and scale your startup with mentorship, funding connects, and community.",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", // startup
      path: "/entrepreneurship",
      cta: "Start Growing",
    },
    {
      title: "Leadership",
      desc: "Develop leadership skills through structured programs, workshops, and mentors.",
      icon: Award,
      image:
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80", // leader
      path: "/leadership",
      cta: "Lead Better",
    },
    {
      title: "Scholar",
      desc: "Connect with academic programs, scholarships, and international study pathways.",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // books
      path: "/scholar",
      cta: "Explore Scholar",
    },
  ];

  // ── Service categories (all 8) ────────────────────────────────────────────
  const serviceCategories = [
    {
      name: "Equestrian",
      icon: Tent,
      path: "/services/equestrian",
      count: 8,
      desc: "Horse riding, sports & tourism",
    },
    {
      name: "Events",
      icon: Trophy,
      path: "/events",
      count: 9,
      desc: "Nepal Talent, Kidspreneur & more",
    },
    {
      name: "Beauty & Spa",
      icon: Heart,
      path: "/services/beauty-spa",
      count: 8,
      desc: "Facial, bridal & massage",
    },
    {
      name: "Wellness & Fitness",
      icon: Sparkles,
      path: "/services/wellness",
      count: 8,
      desc: "Yoga, meditation & coaching",
    },
    {
      name: "Tours & Travel",
      icon: Plane,
      path: "/services/travel",
      count: 8,
      desc: "Domestic, international & adventure",
    },
    {
      name: "Restaurants & Catering",
      icon: UtensilsCrossed,
      path: "/services/restaurants",
      count: 8,
      desc: "Fine dining to corporate catering",
    },
    {
      name: "Multimedia Production",
      icon: Camera,
      path: "/services/multimedia",
      count: 8,
      desc: "Photography, video & drone",
    },
    {
      name: "Events & Wedding Mgmt",
      icon: Calendar,
      path: "/services/events",
      count: 8,
      desc: "Corporate, social & weddings",
    },
    {
      name: "Outsourcing",
      icon: Briefcase,
      path: "/services/outsourcing",
      count: 8,
      desc: "Finance, IT, HR & business services",
    },
  ];

  // ── Upcoming events ──────────────────────────────────────────────────────
  const events = [
    {
      title: "Nepal Talent of the Year 2026",
      type: "Competition",
      date: "Mar 25, 2026",
      time: "10:00 AM",
      location: "Kathmandu",
      path: "/events/nepal-talent-2026",
    },
    {
      title: "College Trailblazer Nepal 2026",
      type: "Competition",
      date: "Apr 15, 2026",
      time: "9:00 AM",
      location: "Kathmandu",
      path: "/events/trailblazer-2026",
    },
    {
      title: "MR. & Miss E-spot",
      type: "Show",
      date: "May 10, 2026",
      time: "6:00 PM",
      location: "Pokhara",
      path: "/events/mr-miss-espot",
    },
    {
      title: "Kidspreneur Camp",
      type: "Workshop",
      date: "Jun 01, 2026",
      time: "8:00 AM",
      location: "Lalitpur",
      path: "/events/kidspreneur-camp",
    },
    {
      title: "Entrepreneurs Arena",
      type: "Networking",
      date: "Jun 20, 2026",
      time: "5:00 PM",
      location: "Kathmandu",
      path: "/events/entrepreneurs-arena",
    },
    {
      title: "Wedding Expo 2026",
      type: "Expo",
      date: "Jul 25, 2026",
      time: "11:00 AM",
      location: "Bhaktapur",
      path: "/events/wedding-expo",
    },
  ];

  const eventTypeCls: Record<string, string> = {
    Competition: "bg-blue-50 text-blue-700",
    Show: "bg-purple-50 text-purple-700",
    Workshop: "bg-emerald-50 text-emerald-700",
    Networking: "bg-amber-50 text-amber-700",
    Expo: "bg-rose-50 text-rose-700",
  };

  // ── Top highlights ────────────────────────────────────────────────────────
  const topSections = [
    {
      title: "Top 10 Offers of the Month",
      type: "offer",
      items: makeItems(
        [
          "50% Off Smart Watch",
          "BOGO Wireless Earbuds",
          "30% Off Designer Bag",
          "Free Shipping Deal",
          "20% Home Appliances",
        ],
        ["Gadgets", "Audio", "Fashion", "Electronics", "Home"],
        (i) => `${(i + 1) * 10} pts`,
        ["OA", "OB", "OC", "OD", "OE"],
      ),
    },
    {
      title: "Top 10 Products of the Month",
      type: "product",
      items: makeItems(
        [
          "Smart Watch Pro X",
          "Wireless Earbuds Elite",
          '4K Smart TV 55"',
          "Air Purifier Max",
          "Mechanical Keyboard",
        ],
        [
          "Gadgets · $199",
          "Gadgets · $249",
          "Electronics · $299",
          "Home · $149",
          "Tech · $129",
        ],
        () => "Trending",
        ["SW", "WE", "TV", "AP", "MK"],
      ),
    },
    {
      title: "Top 10 Partners of the Month",
      type: "partner",
      items: makeItems(
        [
          "Global Tech Partners",
          "Brand Solutions Ltd",
          "Green Valley Foods",
          "Alpha Holdings",
          "NanoTech Solutions",
        ],
        ["Technology", "Marketing", "F&B", "Finance", "IT Services"],
        (i) => `${500 - i * 20} pts`,
        ["GT", "BS", "GV", "AH", "NT"],
      ),
    },
    {
      title: "Top 10 Members of the Month",
      type: "member",
      items: makeItems(
        [
          "Suresh Tamang",
          "Anita Maharjan",
          "Bikash Rana",
          "Priya Singh",
          "Ram Adhikari",
        ],
        [
          "Diamond Member",
          "Gold Member",
          "Silver Member",
          "Diamond Member",
          "Gold Member",
        ],
        (i) => `${1200 - i * 50} pts`,
        ["ST", "AM", "BR", "PS", "RA"],
      ),
    },
    {
      title: "Top 10 Franchise of the Month",
      type: "franchise",
      items: makeItems(
        [
          "XYZ Enterprises",
          "ABC Group",
          "Tech Solutions Ltd",
          "QuickServe Nepal",
          "Green Valley",
        ],
        ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar", "Chitwan"],
        (i) => `${800 - i * 30} pts`,
        ["XE", "AG", "TS", "QN", "GV"],
      ),
    },
  ];

  // ── Testimonials ─────────────────────────────────────────────────────────
  const testimonials = [
    {
      quote:
        "E-Spot Club helped us grow our partner network faster than any offline channel we have tried.",
      name: "Rita Sharma",
      role: "Partner Brand Lead",
      tier: "Partner",
    },
    {
      quote:
        "The events and member ecosystem created direct business opportunities for our franchise within 3 months.",
      name: "Bikash Gurung",
      role: "Franchise Operator",
      tier: "Franchisee",
    },
    {
      quote:
        "The platform experience is clean, the quality of opportunities is excellent, and the rewards are real.",
      name: "Anita Thapa",
      role: "Premium Member",
      tier: "Member",
    },
  ];

  // ── Carousel render helper ───────────────────────────────────────────────
  const renderTopSection = (
    title: string,
    items: SpotlightItem[],
    type: string,
  ) => (
    <div key={title}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-6 bg-blue-600 rounded-full" />
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>
      <Carousel
        title={title}
        items={items}
        renderItem={(item, index) => (
          <Link
            key={index}
            to={`/profile/${type}/${index + 1}`}
            className="min-w-[200px] sm:min-w-[220px] border border-slate-200 rounded-xl p-4 flex flex-col cursor-pointer hover:shadow-md transition-all bg-white"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-blue-600">
                #{String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg">
                {item.badge}
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center mb-4 gap-2">
              <img
                src={`https://picsum.photos/seed/highlight${type}${index}/80/80`}
                alt="Highlight"
                className="w-16 h-16 object-cover rounded-xl mb-1"
                style={{ background: "#f1f5f9" }}
              />
              <div className="w-14 h-6 bg-slate-100 rounded-xl flex items-center justify-center text-slate-800 font-semibold text-xs">
                {item.initials}
              </div>
            </div>
            <div className="text-center">
              <p className="font-semibold text-slate-900 text-sm truncate">
                {item.title}
              </p>
              <p className="text-xs text-slate-500 mt-0.5 truncate">
                {item.subtitle}
              </p>
            </div>
          </Link>
        )}
      />
    </div>
  );

  // Video ref for playback speed
  const videoRef = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="flex flex-col bg-white text-slate-900">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 overflow-hidden">
        <video
          ref={videoRef}
          src={heroBanner}
          className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none sharpened-lg"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/main_page_espot_club.jpg"
        >
          <img
            src="/assets/main_page_espot_club.jpg"
            alt="E-Spot Club — Global Network Platform"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full mb-5">
              <Star className="w-3.5 h-3.5" /> E-Spot Club · Global Network
              Platform
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
              Build your network, business, and growth on one trusted platform.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
              Connecting members, partners, entrepreneurs, and franchisees with
              premium services, real events, and global investment
              opportunities.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/auth?mode=signup&role=Member"
                className="px-6 py-3 bg-white text-slate-900 text-sm font-semibold rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                Join Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/auth?mode=signup&role=Partner"
                className="px-6 py-3 bg-white/10 backdrop-blur text-white border border-white/20 text-sm font-semibold rounded-xl hover:bg-white/20 transition-all flex items-center gap-2"
              >
                Become a Partner
              </Link>
            </div>
          </div>

          {/* Trust stats inline */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-white/50 font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore Platform Modules ──────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                What We Offer
              </p>
              <h2 className="text-xl font-semibold text-slate-900 mt-2 tracking-tight">
                Explore the Platform
              </h2>
              <p className="text-slate-500 mt-2 text-sm max-w-xl">
                Each module is built for a specific role and goal — from members
                earning rewards to entrepreneurs raising capital.
              </p>
            </div>
          </div>

          {/* Featured pair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            {modules.slice(0, 2).map((mod) => {
              return (
                <Link
                  key={mod.title}
                  to={mod.path}
                  className="group rounded-xl p-0 flex flex-col transition-all hover:shadow-lg relative overflow-hidden"
                  style={{
                    background: `linear-gradient(rgba(20,20,30,0.7), rgba(20,20,30,0.7)), url(${mod.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                      <mod.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {mod.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed flex-1">
                      {mod.desc}
                    </p>
                    <span className="mt-5 text-sm font-semibold text-white/90 group-hover:text-white flex items-center gap-1.5 transition-colors">
                      {mod.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Rest in grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {modules.slice(2).map((mod) => {
              return (
                <Link
                  key={mod.title}
                  to={mod.path}
                  className="group border border-slate-200 rounded-xl p-0 flex flex-col transition-all hover:shadow-md overflow-hidden"
                  style={{
                    background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${mod.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="p-4 flex flex-col flex-1">
                    <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center mb-3">
                      <mod.icon className="w-4 h-4 text-slate-700" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1 tracking-tight">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed flex-1 line-clamp-2">
                      {mod.desc}
                    </p>
                    <span className="mt-3 text-xs font-semibold text-slate-700 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                      {mod.cta} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Services
              </p>
              <h2 className="text-xl font-semibold text-slate-900 mt-2 tracking-tight">
                Premium Services You Can Access Today
              </h2>
            </div>
            <Link
              to="/services"
              className="flex-shrink-0 text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 mt-2 transition-colors"
            >
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  to={cat.path}
                  className="group bg-white border border-slate-200 rounded-xl p-4 text-center transition-all hover:shadow-md hover:border-slate-300"
                >
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-4.5 h-4.5 text-slate-700" />
                  </div>
                  <p className="font-semibold text-slate-900 text-xs leading-tight mb-1">
                    {cat.name}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {cat.count} services
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ─────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                What's On
              </p>
              <h2 className="text-xl font-semibold text-slate-900 mt-2 tracking-tight">
                Upcoming Events
              </h2>
            </div>
            <Link
              to="/events"
              className="flex-shrink-0 text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 mt-2 transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4">
            {/* Featured event */}
            {events[0] && (
              <Link
                to={events[0].path}
                className="bg-slate-900 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-lg group"
              >
                <div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white/10 text-white/80">
                    {events[0].type}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-4 tracking-tight">
                    {events[0].title}
                  </h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <Calendar className="w-3.5 h-3.5" />
                      {events[0].date} · {events[0].time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <MapPin className="w-3.5 h-3.5" />
                      {events[0].location}
                    </div>
                  </div>
                </div>
                <span className="mt-6 text-sm font-semibold text-white/70 group-hover:text-white flex items-center gap-1.5 transition-colors">
                  Register now <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )}

            {/* Remaining events */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {events.slice(1).map((event) => (
                <Link
                  key={event.path}
                  to={event.path}
                  className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-all flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${eventTypeCls[event.type] ?? "bg-slate-100 text-slate-600"}`}
                    >
                      {event.type}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm tracking-tight leading-tight">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-auto">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── Top Monthly Highlights ─────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MinimalCardSection
            sectionLabel="Monthly Highlights"
            heading="Top 10 Products of the Month"
            subheading="Our most popular and trending products, handpicked for you."
            items={products.slice(0, 10).map((product) => ({
              title: product.name,
              description: product.description,
              image: product.image,
              provider: product.provider,
              link: `/products/${product.slug}`,
            }))}
            dark={false}
          />

          {/* Render the rest as before, except Top 10 Products */}
          {topSections
            .filter((_, i) => i !== 1)
            .map((sec) => renderTopSection(sec.title, sec.items, sec.type))}

          {/* Top 10 Lucky Draws */}
          {renderTopSection(
            "Top 10 Lucky Draws",
            Array.from({ length: 10 }, (_, i) => ({
              title: [
                "Win a Dream Vacation!",
                "iPhone 15 Pro Max Winner!",
                "Luxury Spa Weekend",
                "MacBook Air Giveaway",
                "Dinner for Two at Hyatt",
                "Adventure Trekking Pass",
                "Smart TV Mega Draw",
                "Gold Coin Bonanza",
                "Gadget Hamper",
                "Surprise Mystery Box",
              ][i],
              subtitle: [
                "Congratulations to our lucky members!",
                "Life-changing prizes every month.",
                "Your chance to win big is here!",
                "Stay tuned for the next draw.",
                "Winners announced live at our event!",
                "Be inspired. Be lucky. Be next!",
                "Unbox happiness with E-Spot Club.",
                "Dreams do come true!",
                "Join, participate, and win!",
                "Every member is a winner.",
              ][i],
              badge: "Lucky #" + (i + 1),
              initials: "LD" + (i + 1),
            })),
            "lucky",
          )}

          {/* Top 10 Entrepreneurs */}
          {renderTopSection(
            "Top 10 Entrepreneurs",
            Array.from({ length: 10 }, (_, i) => ({
              title: [
                "Sujan Shrestha",
                "Anisha Karki",
                "Ramesh Bista",
                "Priya Joshi",
                "Kiran Lama",
                "Sita Gurung",
                "Manish Thapa",
                "Nisha Adhikari",
                "Bipin Shakya",
                "Ritu Pandey",
              ][i],
              subtitle: [
                "Founder, TechNova",
                "CEO, Green Foods",
                "Co-Founder, EduSmart",
                "Director, HealthX",
                "Owner, Kiran Designs",
                "MD, Sita Travels",
                "Founder, CodeCraft",
                "CEO, Nisha Cosmetics",
                "Lead, Shakya Robotics",
                "Entrepreneur, InspireMe",
              ][i],
              badge: "Inspiring Leader",
              initials: "EN" + (i + 1),
            })),
            "entrepreneur",
          )}

          {/* Top 10 Leaders */}
          {renderTopSection(
            "Top 10 Leaders",
            Array.from({ length: 10 }, (_, i) => ({
              title: [
                "Amit Sharma",
                "Bina Rai",
                "Chirag Joshi",
                "Deepa Lama",
                "Elina Shrestha",
                "Firoz Khan",
                "Gita Pandey",
                "Hari KC",
                "Isha Thapa",
                "Jeevan Gurung",
              ][i],
              subtitle: [
                "Visionary Mentor",
                "Community Builder",
                "Leadership Coach",
                "Women in Business",
                "Youth Icon",
                "Industry Pioneer",
                "Social Impact Leader",
                "Growth Strategist",
                "Innovation Champion",
                "Team Motivator",
              ][i],
              badge: "Role Model",
              initials: "LD" + (i + 1),
            })),
            "leader",
          )}

          {/* Inspiring/Catchy/Engaging Banner */}
          <div className="mt-12 flex flex-col items-center justify-center text-center py-10 px-4 bg-gradient-to-r from-blue-50 via-cyan-50 to-emerald-50 rounded-2xl shadow-lg border border-blue-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3">
              "Every connection is a new opportunity. Every member is a story.
              Every day is a chance to win, lead, and inspire!"
            </h3>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Join the E-Spot Club community and be part of something bigger.
              Celebrate success, embrace growth, and let your journey inspire
              others!
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Social Proof
            </p>
            <h2 className="text-xl font-semibold text-slate-900 mt-2 tracking-tight">
              What Our Community Says
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-sm transition-all flex flex-col gap-4"
              >
                <p className="text-slate-700 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-200">
                  <img
                    src={`https://i.pravatar.cc/64?img=${i + 10}`}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-slate-200 bg-slate-100"
                  />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {t.role} · {t.tier}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(20,20,30,0.7), rgba(20,20,30,0.7)), url(${bodybanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Start your E-Spot Club journey today.
          </h2>
          <p className="mt-4 text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Join as a member, become a partner, or explore premium services and
            investment opportunities built to accelerate your growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/auth?mode=signup&role=Member"
              className="px-7 py-3 bg-white text-slate-900 font-bold rounded-xl text-sm hover:bg-slate-100 transition-all"
            >
              Create Account
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 border border-white/20 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-all"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Dummy member data for 'Meet Our Members' grid
const clubMembers = [
  {
    name: "Anita Thapa",
    tier: "Platinum",
    avatar: "https://picsum.photos/seed/m1/100/100",
  },
  {
    name: "Bikash Gurung",
    tier: "Diamond",
    avatar: "https://picsum.photos/seed/m2/100/100",
  },
  {
    name: "Nisha Rai",
    tier: "Diamond",
    avatar: "https://picsum.photos/seed/m3/100/100",
  },
  {
    name: "Pratik KC",
    tier: "Gold",
    avatar: "https://picsum.photos/seed/m4/100/100",
  },
  {
    name: "Suman Shahi",
    tier: "Silver",
    avatar: "https://picsum.photos/seed/m5/100/100",
  },
  {
    name: "Rita Sharma",
    tier: "Gold",
    avatar: "https://picsum.photos/seed/m6/100/100",
  },
  {
    name: "Ajay Karki",
    tier: "Silver",
    avatar: "https://picsum.photos/seed/m7/100/100",
  },
  {
    name: "Kabita Magar",
    tier: "Diamond",
    avatar: "https://picsum.photos/seed/m8/100/100",
  },
];
