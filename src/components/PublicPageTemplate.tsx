import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export type PageMetric = { label: string; value: string };
export type PageLink = { label: string; path: string };
export type PageItem = { title: string; description: string };

export type PublicPageContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  tone: 'blue' | 'emerald' | 'indigo' | 'amber' | 'slate' | 'rose';
  metrics: PageMetric[];
  focusAreas: PageItem[];
  quickLinks: PageLink[];
  steps: string[];
  cta: {
    title: string;
    subtitle: string;
    primary: PageLink;
    secondary?: PageLink;
  };
};

const toneMap = {
  blue: {
    hero: 'from-blue-900 via-blue-800 to-sky-700',
    badge: 'text-blue-200',
    accent: 'text-blue-600',
    soft: 'bg-blue-50 border-blue-100',
    button: 'bg-blue-600 hover:bg-blue-700',
  },
  emerald: {
    hero: 'from-emerald-900 via-emerald-800 to-teal-700',
    badge: 'text-emerald-200',
    accent: 'text-emerald-600',
    soft: 'bg-emerald-50 border-emerald-100',
    button: 'bg-emerald-600 hover:bg-emerald-700',
  },
  indigo: {
    hero: 'from-indigo-900 via-indigo-800 to-blue-700',
    badge: 'text-indigo-200',
    accent: 'text-indigo-600',
    soft: 'bg-indigo-50 border-indigo-100',
    button: 'bg-indigo-600 hover:bg-indigo-700',
  },
  amber: {
    hero: 'from-amber-900 via-orange-800 to-amber-700',
    badge: 'text-amber-200',
    accent: 'text-amber-600',
    soft: 'bg-amber-50 border-amber-100',
    button: 'bg-amber-600 hover:bg-amber-700',
  },
  slate: {
    hero: 'from-slate-900 via-slate-800 to-slate-700',
    badge: 'text-slate-200',
    accent: 'text-slate-600',
    soft: 'bg-slate-50 border-slate-200',
    button: 'bg-slate-700 hover:bg-slate-800',
  },
  rose: {
    hero: 'from-rose-900 via-pink-800 to-rose-700',
    badge: 'text-rose-200',
    accent: 'text-rose-600',
    soft: 'bg-rose-50 border-rose-100',
    button: 'bg-rose-600 hover:bg-rose-700',
  },
} as const;

export default function PublicPageTemplate({ content }: { content: PublicPageContent }) {
  const tone = toneMap[content.tone];

  return (
    <div className="min-h-screen bg-[#f7f8f6] text-slate-900">
      <section className={`bg-gradient-to-br ${tone.hero} text-white pt-16 pb-14`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-xs uppercase tracking-[0.2em] font-semibold ${tone.badge}`}>{content.eyebrow}</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight max-w-4xl">{content.title}</h1>
          <p className="mt-4 text-white/85 max-w-3xl text-base md:text-lg">{content.subtitle}</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className={`text-2xl md:text-3xl font-semibold ${tone.accent}`}>{m.value}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500 mt-2">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.5fr_1fr] gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight mb-4">What You Can Do Here</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.focusAreas.map((item) => (
                <article key={item.title} className={`rounded-xl border p-4 ${tone.soft}`}>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight mb-4">Quick Navigation</h2>
            <div className="space-y-2">
              {content.quickLinks.map((item) => (
                <Link key={item.path} to={item.path} className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                  {item.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight mb-4">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {content.steps.map((step) => (
                <div key={step} className="flex items-start gap-2.5">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 ${tone.accent}`} />
                  <p className="text-sm text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-sm">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{content.cta.title}</h2>
              <p className="text-sm text-slate-600 mt-1">{content.cta.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to={content.cta.primary.path} className={`px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-colors ${tone.button}`}>
                {content.cta.primary.label}
              </Link>
              {content.cta.secondary && (
                <Link to={content.cta.secondary.path} className="px-5 py-2.5 text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                  {content.cta.secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
