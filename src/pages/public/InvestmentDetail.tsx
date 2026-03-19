import { type ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  MapPin,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Hero from "../../components/Hero";
import investmentBanner from "../../assets/investment-hero.jpg"; // If you have a local image, otherwise use a URL
import { getInvestmentOpportunity } from "./investmentContent";

export default function InvestmentDetail() {
  const { opportunityId } = useParams<{ opportunityId: string }>();
  const item = getInvestmentOpportunity(opportunityId);

  if (!item) {
    return <Navigate to="/investment" replace />;
  }

  const { summary } = item;
  const progress = Math.max(
    8,
    Math.min(100, Math.round((summary.raised / summary.target) * 100)),
  );

  return (
    <>
      <Hero
        title={summary.title}
        subtitle={summary.traction}
        label={summary.sector}
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      />
      <div className="min-h-screen bg-slate-50">
        <div className="bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-emerald-200/20 text-emerald-100">
              {summary.sector}
            </span>
            <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight">
              {summary.title}
            </h1>
            <p className="mt-3 text-cyan-100 max-w-4xl">{summary.traction}</p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              <Metric
                label="Stage"
                value={summary.stage}
                icon={<TrendingUp className="w-4 h-4" />}
              />
              <Metric
                label="Location"
                value={summary.location}
                icon={<MapPin className="w-4 h-4" />}
              />
              <Metric
                label="Ticket"
                value={summary.ticket}
                icon={<Banknote className="w-4 h-4" />}
              />
              <Metric
                label="Investor Fit"
                value={summary.fit}
                icon={<Sparkles className="w-4 h-4" />}
              />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
            <div className="space-y-6">
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  Investment Thesis
                </h2>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                  {item.thesis}
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  Use of Funds
                </h2>
                <ul className="mt-3 space-y-2">
                  {item.useOfFunds.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-slate-700 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  Milestones
                </h2>
                <ul className="mt-3 space-y-2">
                  {item.milestones.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-slate-700 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  Risks and Mitigation
                </h2>
                <ul className="mt-3 space-y-2">
                  {item.risks.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-slate-700 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 h-fit lg:sticky lg:top-[calc(var(--site-header-height)+16px)]">
              <h3 className="text-lg font-semibold text-slate-900">
                Round Progress
              </h3>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>Raised ${summary.raised}k</span>
                <span>Target ${summary.target}k</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 mt-1.5">
                {progress}% complete
              </p>

              <div className="mt-5">
                <h4 className="text-sm font-semibold text-slate-900">
                  Support Model
                </h4>
                <ul className="mt-2 space-y-2">
                  {item.supportModel.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-slate-700 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 space-y-2.5">
                <Link
                  to="/contact"
                  className="w-full inline-flex justify-center items-center gap-1.5 rounded-xl bg-emerald-600 text-white px-4 py-3 text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Request Intro <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/investment"
                  className="w-full inline-flex justify-center items-center rounded-xl border border-slate-300 text-slate-700 px-4 py-3 text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                  Back to Investment
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

function Metric({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-3.5">
      <div className="flex items-center gap-1.5 text-cyan-100 text-xs font-semibold uppercase tracking-wide">
        {icon}
        {label}
      </div>
      <p className="mt-1.5 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
