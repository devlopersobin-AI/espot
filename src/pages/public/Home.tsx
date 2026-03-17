import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, Globe, TrendingUp, Star, ShieldCheck,
  Award, GraduationCap, Building2, Handshake, Zap, BookOpen,
  Tent, Trophy, Heart, Sparkles, Plane, UtensilsCrossed,
  Camera, Calendar, MapPin,
} from 'lucide-react';
import Carousel from '../../components/Carousel';
import heroBanner from '../../assets/main_page_espot_club.jpg';

type SpotlightItem = { title: string; subtitle: string; badge: string; initials: string };

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
    { value: '300,000+', label: 'Active Members', icon: Users, iconCls: 'text-blue-600', bgCls: 'bg-blue-50' },
    { value: '2.4M', label: 'Points Earned', icon: TrendingUp, iconCls: 'text-emerald-600', bgCls: 'bg-emerald-50' },
    { value: '860+', label: 'Partners Worldwide', icon: Globe, iconCls: 'text-purple-600', bgCls: 'bg-purple-50' },
  ];

  // ── Platform modules ─────────────────────────────────────────────────────
  const modules = [
    { title: 'Membership', desc: 'Join 300K+ members, earn reward points, and access exclusive perks, events, and services.', icon: Users, color: 'bg-blue-600', path: '/membership', cta: 'Explore Membership' },
    { title: 'Partner Program', desc: 'Build strategic business alliances, co-market services, and grow revenue together.', icon: Handshake, color: 'bg-emerald-600', path: '/partner', cta: 'Become a Partner' },
    { title: 'Franchise', desc: 'Own an E-Spot Club franchise in your city with proven systems and brand support.', icon: Building2, color: 'bg-amber-500', path: '/franchise', cta: 'Own a Franchise' },
    { title: 'Training', desc: 'Access certified courses, skill workshops, and career acceleration programs.', icon: GraduationCap, color: 'bg-purple-600', path: '/training', cta: 'Start Learning' },
    { title: 'Investment', desc: 'Early Bird, Premium & Elite investment tiers across 8 venture categories worldwide.', icon: TrendingUp, color: 'bg-rose-600', path: '/investment', cta: 'View Investment' },
    { title: 'Entrepreneurship', desc: 'Launch and scale your startup with mentorship, funding connects, and community.', icon: Zap, color: 'bg-orange-500', path: '/entrepreneurship', cta: 'Start Growing' },
    { title: 'Leadership', desc: 'Develop leadership skills through structured programs, workshops, and mentors.', icon: Award, color: 'bg-indigo-600', path: '/leadership', cta: 'Lead Better' },
    { title: 'Scholar', desc: 'Connect with academic programs, scholarships, and international study pathways.', icon: BookOpen, color: 'bg-teal-600', path: '/scholar', cta: 'Explore Scholar' },
  ];

  // ── Service categories (all 8) ────────────────────────────────────────────
  const serviceCategories = [
    { name: 'Equestrian', icon: Tent, path: '/services/equestrian', count: 8, desc: 'Horse riding, sports & tourism' },
    { name: 'Events', icon: Trophy, path: '/events', count: 9, desc: 'Nepal Talent, Kidspreneur & more' },
    { name: 'Beauty & Spa', icon: Heart, path: '/services/beauty-spa', count: 8, desc: 'Facial, bridal & massage' },
    { name: 'Wellness & Fitness', icon: Sparkles, path: '/services/wellness', count: 8, desc: 'Yoga, meditation & coaching' },
    { name: 'Tours & Travel', icon: Plane, path: '/services/travel', count: 8, desc: 'Domestic, international & adventure' },
    { name: 'Restaurants & Catering', icon: UtensilsCrossed, path: '/services/restaurants', count: 8, desc: 'Fine dining to corporate catering' },
    { name: 'Multimedia Production', icon: Camera, path: '/services/multimedia', count: 8, desc: 'Photography, video & drone' },
    { name: 'Events & Wedding Mgmt', icon: Calendar, path: '/services/events', count: 8, desc: 'Corporate, social & weddings' },
  ];

  // ── Upcoming events ──────────────────────────────────────────────────────
  const events = [
    { title: 'Nepal Talent of the Year 2026', type: 'Competition', date: 'Mar 25, 2026', time: '10:00 AM', location: 'Kathmandu', path: '/events/nepal-talent-2026' },
    { title: 'College Trailblazer Nepal 2026', type: 'Competition', date: 'Apr 15, 2026', time: '9:00 AM', location: 'Kathmandu', path: '/events/trailblazer-2026' },
    { title: 'MR. & Miss E-spot', type: 'Show', date: 'May 10, 2026', time: '6:00 PM', location: 'Pokhara', path: '/events/mr-miss-espot' },
    { title: 'Kidspreneur Camp', type: 'Workshop', date: 'Jun 01, 2026', time: '8:00 AM', location: 'Lalitpur', path: '/events/kidspreneur-camp' },
    { title: 'Entrepreneurs Arena', type: 'Networking', date: 'Jun 20, 2026', time: '5:00 PM', location: 'Kathmandu', path: '/events/entrepreneurs-arena' },
    { title: 'Wedding Expo 2026', type: 'Expo', date: 'Jul 25, 2026', time: '11:00 AM', location: 'Bhaktapur', path: '/events/wedding-expo' },
  ];

  const eventTypeCls: Record<string, string> = {
    Competition: 'bg-blue-50 text-blue-700',
    Show: 'bg-purple-50 text-purple-700',
    Workshop: 'bg-emerald-50 text-emerald-700',
    Networking: 'bg-amber-50 text-amber-700',
    Expo: 'bg-rose-50 text-rose-700',
  };

  // ── Top highlights ────────────────────────────────────────────────────────
  const topSections = [
    {
      title: 'Top 10 Offers of the Month',
      type: 'offer',
      items: makeItems(
        ['50% Off Smart Watch', 'BOGO Wireless Earbuds', '30% Off Designer Bag', 'Free Shipping Deal', '20% Home Appliances'],
        ['Gadgets', 'Audio', 'Fashion', 'Electronics', 'Home'],
        (i) => `${(i + 1) * 10} pts`,
        ['OA', 'OB', 'OC', 'OD', 'OE'],
      ),
    },
    {
      title: 'Top 10 Products of the Month',
      type: 'product',
      items: makeItems(
        ['Smart Watch Pro X', 'Wireless Earbuds Elite', '4K Smart TV 55"', 'Air Purifier Max', 'Mechanical Keyboard'],
        ['Gadgets · $199', 'Gadgets · $249', 'Electronics · $299', 'Home · $149', 'Tech · $129'],
        () => 'Trending',
        ['SW', 'WE', 'TV', 'AP', 'MK'],
      ),
    },
    {
      title: 'Top 10 Partners of the Month',
      type: 'partner',
      items: makeItems(
        ['Global Tech Partners', 'Brand Solutions Ltd', 'Green Valley Foods', 'Alpha Holdings', 'NanoTech Solutions'],
        ['Technology', 'Marketing', 'F&B', 'Finance', 'IT Services'],
        (i) => `${500 - i * 20} pts`,
        ['GT', 'BS', 'GV', 'AH', 'NT'],
      ),
    },
    {
      title: 'Top 10 Members of the Month',
      type: 'member',
      items: makeItems(
        ['Suresh Tamang', 'Anita Maharjan', 'Bikash Rana', 'Priya Singh', 'Ram Adhikari'],
        ['Diamond Member', 'Gold Member', 'Silver Member', 'Diamond Member', 'Gold Member'],
        (i) => `${1200 - i * 50} pts`,
        ['ST', 'AM', 'BR', 'PS', 'RA'],
      ),
    },
    {
      title: 'Top 10 Franchise of the Month',
      type: 'franchise',
      items: makeItems(
        ['XYZ Enterprises', 'ABC Group', 'Tech Solutions Ltd', 'QuickServe Nepal', 'Green Valley'],
        ['Kathmandu', 'Pokhara', 'Lalitpur', 'Biratnagar', 'Chitwan'],
        (i) => `${800 - i * 30} pts`,
        ['XE', 'AG', 'TS', 'QN', 'GV'],
      ),
    },
  ];

  // ── Testimonials ─────────────────────────────────────────────────────────
  const testimonials = [
    { quote: 'E-Spot Club helped us grow our partner network faster than any offline channel we have tried.', name: 'Rita Sharma', role: 'Partner Brand Lead', tier: 'Partner' },
    { quote: 'The events and member ecosystem created direct business opportunities for our franchise within 3 months.', name: 'Bikash Gurung', role: 'Franchise Operator', tier: 'Franchisee' },
    { quote: 'The platform experience is clean, the quality of opportunities is excellent, and the rewards are real.', name: 'Anita Thapa', role: 'Premium Member', tier: 'Member' },
  ];

  // ── Carousel render helper ───────────────────────────────────────────────
  const renderTopSection = (title: string, items: SpotlightItem[], type: string) => (
    <div key={title}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-6 bg-blue-600 rounded-full" />
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h2>
      </div>
      <Carousel
        title={title}
        items={items}
        renderItem={(item, index) => (
          <Link
            key={index}
            to={`/profile/${type}/${index + 1}`}
            className="min-w-[220px] border border-slate-200 rounded-2xl p-4 flex flex-col cursor-pointer elevate-card bg-white"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-blue-600">#{String(index + 1).padStart(2, '0')}</span>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{item.badge}</span>
            </div>
            <div className="flex-1 flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-full flex items-center justify-center text-blue-700 font-semibold text-sm">
                {item.initials}
              </div>
            </div>
            <div className="text-center">
              <p className="font-semibold text-slate-900 text-sm truncate">{item.title}</p>
              <p className="text-xs text-slate-500 mt-0.5 truncate">{item.subtitle}</p>
            </div>
          </Link>
        )}
      />
    </div>
  );

  return (
    <div className="flex flex-col bg-white text-slate-900">

      {/* ── 2. Hero Visual Banner ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-900/10">
            <img
              src={heroBanner}
              alt="E-Spot Club — Global Network Platform"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </section>

      {/* ── 3. Hero Action Block ─────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-5">
                <Star className="w-3.5 h-3.5" /> E-Spot Club · Global Network Platform
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Build your network,<br className="hidden sm:block" />
                business, and growth<br className="hidden sm:block" />
                on one trusted platform.
              </h1>
              <p className="mt-5 text-lg text-slate-600 max-w-xl leading-relaxed">
                E-Spot Club connects members, partners, entrepreneurs, and franchisees with premium
                services, real events, and global investment opportunities.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/auth?mode=signup&role=Member"
                  className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Join Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/auth?mode=signup&role=Partner"
                  className="px-6 py-3 bg-white text-slate-700 border border-slate-200 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Become a Partner
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Profiles
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">
                  <Star className="w-3.5 h-3.5 text-amber-500" /> Premium Programs
                </span>
              </div>
            </div>

            {/* 3 trust stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                    <div className={`w-10 h-10 ${stat.bgCls} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${stat.iconCls}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Explore Platform Modules ──────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">What We Offer</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">Explore the Platform</h2>
            <p className="text-slate-500 mt-2 text-sm max-w-xl">
              Each module is built for a specific role and goal — from members earning rewards to entrepreneurs raising capital.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <Link
                  key={mod.title}
                  to={mod.path}
                  className="group bg-white border border-slate-200 rounded-2xl p-5 elevate-card flex flex-col"
                >
                  <div className={`w-10 h-10 ${mod.color} rounded-xl flex items-center justify-center mb-4 flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1.5 tracking-tight">{mod.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{mod.desc}</p>
                  <span className="mt-4 text-xs font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                    {mod.cta} <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Featured Services Snapshot ────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Services</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">Premium Services You Can Access Today</h2>
            </div>
            <Link to="/services" className="flex-shrink-0 text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-2">
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  to={cat.path}
                  className="group bg-slate-50 border border-slate-200 rounded-2xl p-4 elevate-card flex flex-col gap-3"
                >
                  <div className="w-9 h-9 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm leading-tight">{cat.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{cat.desc}</p>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-blue-600 transition-colors">{cat.count} services →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Upcoming Events Preview ────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">What's On</p>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">Upcoming Events</h2>
            </div>
            <Link to="/events" className="flex-shrink-0 text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <Link
                key={event.path}
                to={event.path}
                className="bg-white border border-slate-200 rounded-2xl p-5 elevate-card flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${eventTypeCls[event.type] ?? 'bg-slate-100 text-slate-600'}`}>
                    {event.type}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+50 pts</span>
                </div>
                <h3 className="font-bold text-slate-900 tracking-tight">{event.title}</h3>
                <div className="space-y-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    {event.date} · {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                    {event.location}
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-600 flex items-center gap-1 mt-auto">
                  Register now <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Top Monthly Highlights ─────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Monthly Highlights</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">Top Performers of the Month</h2>
          </div>
          {topSections.map((sec) => renderTopSection(sec.title, sec.items, sec.type))}
        </div>
      </section>

      {/* ── 8. Testimonials / Trust Indicators ───────────────────────────── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Social Proof</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 tracking-tight">What Our Community Says</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-slate-200 rounded-2xl p-6 elevate-card flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-semibold text-xs flex-shrink-0">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role} · {t.tier}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA Strip ────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Start your E-Spot Club journey today.
          </h2>
          <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Join as a member, become a partner, or explore premium services and investment
            opportunities built to accelerate your growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/auth?mode=signup&role=Member"
              className="px-7 py-3 bg-white text-blue-700 font-bold rounded-xl text-sm hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Create Account
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 border border-white/40 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-all"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
