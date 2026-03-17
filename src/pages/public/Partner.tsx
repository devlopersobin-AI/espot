import React, { useMemo, useState } from 'react';
import Hero from '../../components/Hero';
import { Link } from 'react-router-dom';
import SubNav from '../../components/SubNav';
import { Star, ArrowRight, CheckCircle2, Target, Calendar, Users, Award, Search, TrendingUp, Handshake, ShieldCheck } from 'lucide-react';

export default function Partner() {
  const subNav = ['Overview', 'Benefits', 'Criteria', 'Goals', 'Top Partners', 'Events', 'Join Us'];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const [partnerQuery, setPartnerQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState<'All' | 'Technology' | 'Supply Chain' | 'Education' | 'Energy' | 'Healthcare' | 'Finance'>('All');

  const topPartners = [
    { id: 1, name: 'TechCorp Solutions', rating: 4.9, reviews: 128, type: 'Technology', image: 'https://picsum.photos/seed/p1/400/300', growth: '+21%', campaigns: 34 },
    { id: 2, name: 'Global Logistics Inc', rating: 4.8, reviews: 95, type: 'Supply Chain', image: 'https://picsum.photos/seed/p2/400/300', growth: '+14%', campaigns: 22 },
    { id: 3, name: 'EduFirst Academy', rating: 4.9, reviews: 210, type: 'Education', image: 'https://picsum.photos/seed/p3/400/300', growth: '+26%', campaigns: 41 },
    { id: 4, name: 'GreenEnergy Co', rating: 4.7, reviews: 84, type: 'Energy', image: 'https://picsum.photos/seed/p4/400/300', growth: '+17%', campaigns: 19 },
    { id: 5, name: 'HealthPlus Clinics', rating: 4.9, reviews: 340, type: 'Healthcare', image: 'https://picsum.photos/seed/p5/400/300', growth: '+24%', campaigns: 57 },
    { id: 6, name: 'FinServe Partners', rating: 4.6, reviews: 112, type: 'Finance', image: 'https://picsum.photos/seed/p6/400/300', growth: '+11%', campaigns: 29 },
  ];

  const filteredPartners = useMemo(() => {
    return topPartners.filter((partner) => {
      const byType = industryFilter === 'All' || partner.type === industryFilter;
      const byQuery = !partnerQuery.trim() || `${partner.name} ${partner.type}`.toLowerCase().includes(partnerQuery.toLowerCase());
      return byType && byQuery;
    });
  }, [industryFilter, partnerQuery, topPartners]);

  const events = [
    { title: 'Partner Growth Summit', date: 'Apr 12, 2026', format: 'Hybrid', city: 'Kathmandu', seats: 64 },
    { title: 'Joint Campaign Studio', date: 'Apr 27, 2026', format: 'In person', city: 'Pokhara', seats: 28 },
    { title: 'Revenue Playbook Workshop', date: 'May 10, 2026', format: 'Online', city: 'Remote', seats: 120 },
  ];

  const criteria = [
    { title: 'Business Legitimacy', detail: 'Registered entity, compliance documents, and tax records.', weight: '30%' },
    { title: 'Service Quality', detail: 'Operational quality benchmark and customer support consistency.', weight: '25%' },
    { title: 'Brand Alignment', detail: 'Ability to execute co-branded campaigns and value messaging.', weight: '20%' },
    { title: 'Scalability', detail: 'Capacity to deliver across regions with stable fulfillment.', weight: '25%' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        bgColor="bg-blue-900"
        accentColor="text-blue-400"
        title="Partnership"
        subtitle="Join as a partner and grow your business within the ESPOT ecosystem. Earn points through sales, sponsorships, and event hosting."
        label="Module"
      />

      {/* Sub Navigation */}
      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-blue-600 border-blue-600"
      />

      {/* Content Section */}
      <div className="flex-1 pb-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-7">
            <MetricCard label="Active Partners" value="860+" trend="+6.3%" icon={<Users className="w-4.5 h-4.5" />} />
            <MetricCard label="Campaign Revenue" value="$2.7M" trend="Q1 2026" icon={<TrendingUp className="w-4.5 h-4.5" />} />
            <MetricCard label="Joint Campaigns" value="340" trend="Across 14 sectors" icon={<Handshake className="w-4.5 h-4.5" />} />
            <MetricCard label="Verified Partners" value="97%" trend="Quality screened" icon={<ShieldCheck className="w-4.5 h-4.5" />} />
          </div>
          
          {activeTab === 'Overview' && (
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_380px] gap-5 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Partnership performance cockpit</h2>
                <p className="text-sm text-slate-600 mt-2">Track how partners drive member growth, campaign conversion, and retention across your core markets.</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <ProgressTile label="Member Referrals" value={78} />
                  <ProgressTile label="Offer Redemption" value={64} />
                  <ProgressTile label="Repeat Purchase" value={71} />
                </div>

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-900">Sector momentum</h3>
                  <div className="space-y-2.5 mt-3">
                    <BarRow label="Technology" width={86} />
                    <BarRow label="Healthcare" width={79} />
                    <BarRow label="Education" width={67} />
                    <BarRow label="Finance" width={58} />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white p-6 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-cyan-200">Partner Spotlight</p>
                <h3 className="text-2xl font-semibold mt-2 tracking-tight">HealthPlus Clinics</h3>
                <p className="text-sm text-cyan-100/85 mt-2 leading-relaxed">Scaled preventive care campaigns to 18 cities through co-branded health drives and referral programs.</p>
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <GlassMetric label="Cities" value="18" />
                  <GlassMetric label="Members Served" value="72k" />
                  <GlassMetric label="NPS" value="4.9/5" />
                  <GlassMetric label="Retention" value="81%" />
                </div>
                <Link to="/partner" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-cyan-200">
                  Explore partnership playbook <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'Benefits' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {[
                { title: 'Global Reach', desc: 'Access a worldwide network of members and businesses.', metric: '300k+ active members', icon: <Users className="w-6 h-6 text-blue-600" /> },
                { title: 'Revenue Share', desc: 'Earn structured commissions on transactions and campaigns.', metric: 'Up to 18% partner share', icon: <Award className="w-6 h-6 text-blue-600" /> },
                { title: 'Brand Visibility', desc: 'Showcase your offers in campaigns and member moments.', metric: 'Avg. 2.7x CTR lift', icon: <Star className="w-6 h-6 text-blue-600" /> },
              ].map((benefit, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.desc}</p>
                  <p className="mt-3 text-sm font-semibold text-blue-700">{benefit.metric}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Criteria' && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Partnership qualification scorecard</h2>
              <p className="text-sm text-slate-600 mb-6">Every application is assessed on operational quality, compliance readiness, and growth contribution potential.</p>
              <div className="space-y-3">
                {criteria.map((criterion) => (
                  <div key={criterion.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-slate-900">{criterion.title}</h3>
                      <span className="text-xs font-bold uppercase tracking-wide text-blue-700 bg-blue-100 px-2 py-1 rounded">Weight {criterion.weight}</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">{criterion.detail}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Minimum 2 years operational history.</li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Dedicated partner success contact required.</li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Compliance and identity documents must be verifiable.</li>
              </ul>
            </div>
          )}

          {activeTab === 'Goals' && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Shared growth roadmap</h2>
              <div className="space-y-4">
                {[
                  { quarter: 'Q2 2026', title: 'Regional onboarding sprint', progress: 62 },
                  { quarter: 'Q3 2026', title: 'Cross-sector campaign bundles', progress: 45 },
                  { quarter: 'Q4 2026', title: 'Partner-led retention initiatives', progress: 28 },
                ].map((goal) => (
                  <div key={goal.quarter} className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between mb-2 gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{goal.quarter}</p>
                        <h3 className="text-base font-semibold text-slate-900 mt-1">{goal.title}</h3>
                      </div>
                      <span className="text-sm font-semibold text-blue-700">{goal.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${goal.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <Target className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="text-sm text-blue-900">Top objective: increase high-quality member referrals by 22% through joint campaign orchestration and partner enablement.</p>
              </div>
            </div>
          )}

          {activeTab === 'Top Partners' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <label className="md:col-span-2">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">Search partners</span>
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
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">Industry</span>
                    <select
                      value={industryFilter}
                      onChange={(e) => setIndustryFilter(e.target.value as typeof industryFilter)}
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
            </div>
          )}

          {activeTab === 'Top Partners' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 mt-5">
              {filteredPartners.map((partner) => (
                <Link key={partner.id} to={`/profile/partner/${partner.id}`} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                  <div className="h-48 w-full bg-slate-100 overflow-hidden">
                    <img src={partner.image} alt={partner.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">{partner.name}</h3>
                      <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-bold text-amber-700">{partner.rating}</span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm mb-4">{partner.type} • {partner.reviews} reviews</p>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span>Growth {partner.growth}</span>
                      <span>{partner.campaigns} campaigns</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-bold text-sm">
                      View Profile <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {activeTab === 'Top Partners' && filteredPartners.length === 0 && (
            <div className="mt-5 text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
              <p className="font-semibold text-slate-700">No partners match your filter.</p>
              <p className="text-sm text-slate-500 mt-1">Try changing industry or using a broader search term.</p>
            </div>
          )}

          {activeTab === 'Events' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {events.map((event, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full md:w-48 h-32 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/seed/event${i}/400/300`} alt="Event" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-slate-500 mb-2">{event.format} • {event.city} • {event.seats} seats left</p>
                    <p className="text-slate-600 mb-4">Join top partners for networking, strategy sharing, and upcoming campaign previews.</p>
                    <button className="text-blue-600 font-bold hover:text-blue-700 flex items-center text-sm">
                      Register Now <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Join Us' && (
            <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to become a Partner?</h2>
                <p className="text-blue-100 text-lg md:text-xl mb-8">Submit your profile, get scored by our partner success team, and start your first campaign in as little as 14 days.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  <div className="rounded-xl bg-white/15 border border-white/25 p-3 text-sm">1. Application review</div>
                  <div className="rounded-xl bg-white/15 border border-white/25 p-3 text-sm">2. Onboarding sprint</div>
                  <div className="rounded-xl bg-white/15 border border-white/25 p-3 text-sm">3. Campaign launch</div>
                </div>
                <Link to="/auth?mode=signup&role=Partner" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-blue-600 bg-white hover:bg-blue-50 transition-colors shadow-lg">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, trend, icon }: { label: string; value: string; trend: string; icon: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{label}</p>
          <p className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-2">{value}</p>
        </div>
        <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">{icon}</span>
      </div>
      <p className="text-xs sm:text-sm font-medium text-blue-700 mt-3">{trend}</p>
    </article>
  );
}

function ProgressTile({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50">
      <p className="text-xs text-slate-500 font-semibold">{label}</p>
      <p className="text-lg font-semibold text-slate-900 mt-1">{value}%</p>
      <div className="h-2 rounded-full bg-slate-200 mt-2 overflow-hidden">
        <div className="h-full rounded-full bg-blue-500" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function BarRow({ label, width }: { label: string; width: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-slate-600 mb-1"><span>{label}</span><span>{width}%</span></div>
      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function GlassMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-3">
      <p className="text-[11px] uppercase tracking-wide text-cyan-100">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}
