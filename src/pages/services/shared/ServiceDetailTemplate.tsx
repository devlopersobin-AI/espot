import { Link } from 'react-router-dom';

type ServiceDetailTemplateProps = {
  categoryName: string;
  categoryDescription: string;
  serviceName: string;
  image: string;
  servicePath: string;
};

function sentenceCase(value: string): string {
  if (!value) {
    return value;
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function ServiceDetailTemplate({
  categoryName,
  categoryDescription,
  serviceName,
  image,
  servicePath,
}: ServiceDetailTemplateProps) {
  const basePath = servicePath.split('/').slice(0, 3).join('/');

  const whoCanJoin = [
    'Individuals looking for guided professional support',
    `Customers interested in ${serviceName.toLowerCase()} packages`,
    'Families, groups, and corporate clients',
    'Beginners as well as advanced participants',
  ];

  const whatYouGet = [
    `Structured onboarding and orientation for ${serviceName.toLowerCase()}`,
    'Quality assurance with trained support staff',
    'Flexible package options for budget and schedule',
    'Safety-first operational standards',
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10 md:py-14 bg-slate-50 min-h-[calc(100vh-220px)]">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{categoryName}</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">{serviceName}</h1>
          <p className="mt-3 text-slate-600 text-base md:text-lg max-w-3xl">
            {sentenceCase(categoryDescription)} with focused delivery for {serviceName.toLowerCase()}, designed for quality outcomes and a reliable customer experience.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <img src={image} alt={serviceName} className="w-full h-64 md:h-[420px] object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Who Can Join</h2>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-5">
              {whoCanJoin.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">What You Get</h2>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-5">
              {whatYouGet.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Packages and Pricing</h2>
          <p className="mt-2 text-sm text-slate-500">Select a plan that fits your pace and goals.</p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
              <h3 className="font-semibold text-slate-900">Starter</h3>
              <p className="text-2xl font-black text-slate-900 mt-2">$20</p>
              <ul className="mt-3 text-sm text-slate-600 space-y-1 list-disc pl-5">
                <li>Introductory package</li>
                <li>Basic support included</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-blue-500 p-4 bg-blue-50/40">
              <h3 className="font-semibold text-slate-900">Standard</h3>
              <p className="text-2xl font-black text-slate-900 mt-2">$60</p>
              <ul className="mt-3 text-sm text-slate-600 space-y-1 list-disc pl-5">
                <li>Most popular package</li>
                <li>Priority scheduling</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
              <h3 className="font-semibold text-slate-900">Premium</h3>
              <p className="text-2xl font-black text-slate-900 mt-2">$120</p>
              <ul className="mt-3 text-sm text-slate-600 space-y-1 list-disc pl-5">
                <li>Advanced support tier</li>
                <li>Custom planning options</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Book {serviceName}</h2>
            <p className="text-slate-300 mt-1 text-sm md:text-base">Reach out to confirm availability and schedule your preferred slot.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="inline-flex px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors">
              Contact Team
            </Link>
            <Link to={basePath || '/services'} className="inline-flex px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
              Back to Category
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
