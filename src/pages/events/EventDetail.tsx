import { useMemo, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  CircleCheckBig,
  MapPin,
  Ticket,
  Trophy,
} from 'lucide-react';
import { getEventContent } from './eventContent';

export default function EventDetail() {
  const { eventId } = useParams<{ eventId: string }>();
  const event = useMemo(() => getEventContent(eventId), [eventId]);
  const [openSection, setOpenSection] = useState(event.sections[0]?.id ?? '');

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f766e] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,#ffffff_0%,transparent_45%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 relative">
          <span className="inline-flex items-center rounded-full bg-orange-400/90 text-slate-900 text-xs font-bold px-3 py-1">
            {event.label}
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-4xl">{event.title}</h1>
          <p className="mt-3 text-cyan-100 text-sm sm:text-base font-medium italic">{event.strapline}</p>
          <p className="mt-5 text-blue-100 max-w-4xl leading-relaxed">{event.intro}</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <StatCard icon={<Calendar className="w-4 h-4" />} label="Date" value={event.date} />
            <StatCard icon={<MapPin className="w-4 h-4" />} label="Location" value={event.location} />
            <StatCard icon={<Trophy className="w-4 h-4" />} label="Category" value={event.category} />
            <StatCard icon={<Ticket className="w-4 h-4" />} label="Registration" value={event.registrationFee} />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-6 items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Event Highlights</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {event.highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5 rounded-xl border border-blue-100 bg-blue-50/60 p-3.5">
                  <CircleCheckBig className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 lg:sticky lg:top-[calc(var(--site-header-height)+16px)]">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400">Quick Actions</p>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Ready to Participate?</h3>
            <p className="text-sm text-slate-600 mt-2">Register, ask questions, or contact our event desk for support.</p>
            <div className="mt-4 space-y-2.5">
              <Link
                to="/auth?mode=signup&role=Member"
                className="w-full inline-flex justify-center items-center gap-1.5 rounded-xl bg-blue-600 text-white px-4 py-3 text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full inline-flex justify-center items-center rounded-xl border border-slate-300 text-slate-700 px-4 py-3 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Contact Event Desk
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <div className="px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Full Event Details</h2>
            <p className="text-sm text-slate-500 mt-1">Structured sections for clear reading and content management.</p>
          </div>

          <div>
            {event.sections.map((section) => {
              const isOpen = openSection === section.id;
              return (
                <article key={section.id} className="border-b border-slate-100 last:border-0">
                  <button
                    type="button"
                    onClick={() => setOpenSection((prev) => (prev === section.id ? '' : section.id))}
                    className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900">{section.title}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="text-sm text-slate-700 leading-relaxed">{section.body}</p>
                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="mt-3 space-y-2">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="text-sm text-slate-700 flex gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-3.5">
      <div className="flex items-center gap-2 text-cyan-100">
        {icon}
        <p className="text-[11px] uppercase tracking-[0.12em] font-semibold">{label}</p>
      </div>
      <p className="mt-1.5 text-sm sm:text-base font-bold text-white">{value}</p>
    </div>
  );
}
