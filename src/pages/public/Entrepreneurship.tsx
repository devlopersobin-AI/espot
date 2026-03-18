import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import SubNav from '../../components/SubNav';
import QuickRegisterForm from '../../components/forms/QuickRegisterForm';
import { Rocket, Lightbulb, Target, Star, ArrowRight, Briefcase, Search, Calendar, TrendingUp, Users, Banknote } from 'lucide-react';

type Founder = {
  id: number;
  name: string;
  company: string;
  industry: string;
  rating: number;
  image: string;
  stage: 'MVP' | 'Seed' | 'Growth';
};

export default function Entrepreneurship() {
  const subNav = ['Essentials', 'Startup Guides', 'Entrepreneurs', 'Deals', 'Projects', 'Events', 'Reviews'];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const [founderQuery, setFounderQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState<'All' | 'Clean Energy' | 'Healthcare Tech' | 'AgriTech' | 'FinTech'>('All');
  const [eventType, setEventType] = useState<'All' | 'Pitch Competition' | 'Networking' | 'Webinar' | 'Hackathon'>('All');
  const [formTarget, setFormTarget] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!formTarget || !formRef.current) return;
    formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    formRef.current.focus({ preventScroll: true });
  }, [formTarget]);

  const founders: Founder[] = [
    { id: 1, name: 'Alex Rivera', company: 'EcoTech Solutions', industry: 'Clean Energy', rating: 4.9, image: 'https://picsum.photos/seed/e1/150/150', stage: 'Growth' },
    { id: 2, name: 'Samantha Lee', company: 'HealthAI', industry: 'Healthcare Tech', rating: 4.8, image: 'https://picsum.photos/seed/e2/150/150', stage: 'Seed' },
    { id: 3, name: 'Marcus Johnson', company: 'UrbanFarm', industry: 'AgriTech', rating: 4.7, image: 'https://picsum.photos/seed/e3/150/150', stage: 'MVP' },
    { id: 4, name: 'Priya Patel', company: 'FinSmart', industry: 'FinTech', rating: 4.9, image: 'https://picsum.photos/seed/e4/150/150', stage: 'Growth' },
  ];

  const events = [
    { title: 'E-SPOT Pitch Day 2026', date: 'Dec 05, 2026', location: 'San Francisco, CA', type: 'Pitch Competition', image: 'https://picsum.photos/seed/ev1/400/200' },
    { title: 'Founder Networking Mixer', date: 'Nov 20, 2026', location: 'New York, NY', type: 'Networking', image: 'https://picsum.photos/seed/ev2/400/200' },
    { title: 'Venture Capital Insights Panel', date: 'Nov 28, 2026', location: 'Online', type: 'Webinar', image: 'https://picsum.photos/seed/ev3/400/200' },
    { title: 'Startup Weekend Hackathon', date: 'Dec 12-14, 2026', location: 'London, UK', type: 'Hackathon', image: 'https://picsum.photos/seed/ev4/400/200' },
  ];

  const filteredFounders = useMemo(() => {
    return founders.filter((founder) => {
      const byIndustry = industryFilter === 'All' || founder.industry === industryFilter;
      const byQuery = !founderQuery.trim() || `${founder.name} ${founder.company} ${founder.industry}`.toLowerCase().includes(founderQuery.toLowerCase());
      return byIndustry && byQuery;
    });
  }, [founders, founderQuery, industryFilter]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => eventType === 'All' || event.type === eventType);
  }, [events, eventType]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero
        bgColor="bg-gradient-to-br from-orange-950 via-orange-900 to-amber-900"
        accentColor="text-orange-200"
        title="Entrepreneurship"
        subtitle="Build stronger ventures with startup playbooks, deal access, investor visibility, and founder community support."
        label="Module"
      />

      <SubNav items={subNav} active={activeTab} setActive={setActiveTab} color="text-orange-700 border-orange-500 bg-orange-50" />

      <div className="flex-1 py-8 sm:py-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-7">
            <MetricCard label="Active Founders" value="9.4k" note="Across 42 startup circles" icon={<Users className="w-4.5 h-4.5" />} />
            <MetricCard label="Capital Introduced" value="$14.7M" note="Last 12 months" icon={<Banknote className="w-4.5 h-4.5" />} />
            <MetricCard label="Mentor Sessions" value="1,280" note="Founder office hours" icon={<Calendar className="w-4.5 h-4.5" />} />
            <MetricCard label="Scale Readiness" value="76%" note="Median cohort score" icon={<TrendingUp className="w-4.5 h-4.5" />} />
          </div>

          {formTarget ? (
            <div ref={formRef} tabIndex={-1} className="mb-6 max-w-3xl focus:outline-none">
              <QuickRegisterForm
                heading={
                  formTarget.startsWith('Claim:') ? 'Claim Deal' :
                  formTarget.startsWith('RSVP:') ? 'Event Registration' :
                  'Join E-SPOT'
                }
                targetLabel={formTarget}
                submitLabel={
                  formTarget.startsWith('Claim:') ? 'Request Deal Access' :
                  formTarget.startsWith('RSVP:') ? 'Confirm RSVP' :
                  'Submit'
                }
                onClose={() => setFormTarget(null)}
              />
            </div>
          ) : null}

          {activeTab === 'Essentials' && (
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] gap-5 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <FeatureCard icon={<Lightbulb className="w-7 h-7 text-orange-600" />} title="Idea Validation" text="Run fast experiments before scaling spend and validate problem-solution fit." />
                <FeatureCard icon={<Target className="w-7 h-7 text-orange-600" />} title="Business Planning" text="Turn your concept into a fundable roadmap with realistic unit economics." />
                <FeatureCard icon={<Rocket className="w-7 h-7 text-orange-600" />} title="Go-to-Market" text="Design your first acquisition loops, messaging, and launch sequence." />
              </div>

              <aside className="bg-gradient-to-br from-orange-950 via-orange-900 to-amber-900 text-white rounded-2xl p-6 border border-orange-800 shadow-sm h-fit">
                <p className="text-xs uppercase tracking-[0.16em] text-orange-200 font-semibold">Founder Path</p>
                <h3 className="text-2xl font-semibold mt-2 tracking-tight">Launch in 90 Days</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-orange-100/90">
                  <li>Week 1-3: Problem interviews and market map</li>
                  <li>Week 4-6: MVP definition and early demand tests</li>
                  <li>Week 7-10: Revenue pilot and traction proof</li>
                  <li>Week 11-13: Investor-ready narrative and pipeline</li>
                </ul>
                <button type="button" onClick={() => setFormTarget('Entrepreneur Program')} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-orange-200">
                  Join as Entrepreneur <ArrowRight className="w-4 h-4" />
                </button>
              </aside>
            </div>
          )}

          {activeTab === 'Startup Guides' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Lean Startup Roadmap', desc: 'Use hypothesis-driven loops to avoid building features customers do not need.', icon: <Rocket className="w-5 h-5 text-orange-600" /> },
                { title: 'Fundraising 101', desc: 'Understand seed dynamics, valuation logic, and investor communication.', icon: <Briefcase className="w-5 h-5 text-orange-600" /> },
                { title: 'MVP Build Strategy', desc: 'Scope product with the smallest surface area to prove value quickly.', icon: <Lightbulb className="w-5 h-5 text-orange-600" /> },
                { title: 'Growth Loops', desc: 'Build compounding channels that drive low-cost user acquisition.', icon: <Target className="w-5 h-5 text-orange-600" /> },
              ].map((guide) => (
                <article key={guide.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-3">{guide.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900">{guide.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{guide.desc}</p>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'Entrepreneurs' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <label className="md:col-span-2">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">Search founders</span>
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input value={founderQuery} onChange={(e) => setFounderQuery(e.target.value)} placeholder="Search by founder, company, industry" className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                  </label>
                  <label>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">Industry</span>
                    <select value={industryFilter} onChange={(e) => setIndustryFilter(e.target.value as typeof industryFilter)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="All">All industries</option>
                      <option value="Clean Energy">Clean Energy</option>
                      <option value="Healthcare Tech">Healthcare Tech</option>
                      <option value="AgriTech">AgriTech</option>
                      <option value="FinTech">FinTech</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredFounders.map((founder) => (
                  <Link key={founder.id} to={`/profile/entrepreneur/${founder.id}`} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-orange-300 transition-all group">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-slate-50 group-hover:ring-orange-50 transition-all">
                      <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">{founder.name}</h3>
                    <p className="text-sm text-orange-600">{founder.company}</p>
                    <p className="text-xs text-slate-500 mt-1">{founder.industry} | {founder.stage}</p>
                    <div className="flex items-center justify-center text-sm font-medium text-amber-600 mt-2">
                      <Star className="w-4 h-4 mr-1 fill-amber-500" /> {founder.rating}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Deals' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { company: 'CloudWeb Services', offer: '$5,000 in Credits', category: 'Hosting' },
                { company: 'Stripe', offer: 'Fee-free processing up to $50k', category: 'Payments' },
                { company: 'HubSpot', offer: '90% off for first year', category: 'CRM' },
                { company: 'Notion', offer: '6 months free Plus plan', category: 'Productivity' },
                { company: 'Zendesk', offer: '6 months free Suite', category: 'Support' },
                { company: 'Miro', offer: '$1,000 in credits', category: 'Design' },
              ].map((deal) => (
                <article key={deal.company} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all">
                  <p className="text-xs uppercase tracking-wide font-semibold text-slate-400">{deal.category}</p>
                  <h3 className="font-semibold text-slate-900 mt-1">{deal.company}</h3>
                  <p className="text-emerald-700 font-semibold mt-2">{deal.offer}</p>
                  <button type="button" onClick={() => setFormTarget(`Claim: ${deal.company} – ${deal.offer}`)} className="mt-4 w-full py-2 bg-orange-50 text-orange-700 font-semibold rounded-lg hover:bg-orange-100 transition-colors text-sm">Claim Deal</button>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'Projects' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto space-y-4">
              {[
                { title: 'AI-Powered Legal Assistant', stage: 'Prototype', lookingFor: ['CTO', 'Beta Testers'], desc: 'AI workflow for contract and legal document generation for small businesses.' },
                { title: 'Sustainable Packaging Marketplace', stage: 'Idea Phase', lookingFor: ['Co-founder', 'Industry Experts'], desc: 'B2B market connecting eco-friendly packaging suppliers and e-commerce brands.' },
                { title: 'Remote Team Wellness App', stage: 'MVP', lookingFor: ['Marketing Lead', 'Investors'], desc: 'Wellbeing platform with gamified mental and physical health programs.' },
              ].map((project) => (
                <article key={project.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">Stage: {project.stage}</p>
                    </div>
                    <button className="text-orange-700 font-semibold text-sm">View Details</button>
                  </div>
                  <p className="text-sm text-slate-700 mt-3">{project.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.lookingFor.map((role) => (
                      <span key={role} className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded">{role}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'Events' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto space-y-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h2 className="text-xl font-semibold text-slate-900">Upcoming startup events</h2>
                <select value={eventType} onChange={(e) => setEventType(e.target.value as typeof eventType)} className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="All">All types</option>
                  <option value="Pitch Competition">Pitch Competition</option>
                  <option value="Networking">Networking</option>
                  <option value="Webinar">Webinar</option>
                  <option value="Hackathon">Hackathon</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredEvents.map((event) => (
                  <article key={event.title} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                    <div className="h-44 bg-slate-200 relative">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-3 right-3 bg-white/90 text-xs font-semibold px-2 py-1 rounded">{event.type}</div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-semibold text-slate-900">{event.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{event.date}</p>
                      <p className="text-sm text-slate-600 mt-1">{event.location}</p>
                      <button type="button" onClick={() => setFormTarget(`RSVP: ${event.title}`)} className="mt-4 w-full py-2 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors text-sm">RSVP Now</button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Reviews' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto space-y-5">
              {[
                { name: 'Jessica Wong', role: 'CEO, DataFlow', text: 'The startup resources here directly helped us close our seed round in under 10 weeks.', rating: 5, image: 'https://picsum.photos/seed/erev1/100/100' },
                { name: 'Thomas Wright', role: 'Co-founder, GreenBuild', text: 'The community quality is outstanding. Mentors and founders are generous with practical feedback.', rating: 5, image: 'https://picsum.photos/seed/erev2/100/100' },
              ].map((review) => (
                <article key={review.name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-3">{[...Array(review.rating)].map((_, idx) => <Star key={idx} className="w-4.5 h-4.5 text-amber-400 fill-current" />)}</div>
                  <p className="text-slate-700 italic mb-4">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={review.image} alt={review.name} className="w-11 h-11 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-semibold text-slate-900">{review.name}</p>
                      <p className="text-sm text-slate-500">{review.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, note, icon }: { label: string; value: string; note: string; icon: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{label}</p>
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mt-2">{value}</p>
        </div>
        <span className="w-9 h-9 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center">{icon}</span>
      </div>
      <p className="text-xs sm:text-sm text-orange-700 font-medium mt-3">{note}</p>
    </article>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 mt-2 leading-relaxed">{text}</p>
    </article>
  );
}
