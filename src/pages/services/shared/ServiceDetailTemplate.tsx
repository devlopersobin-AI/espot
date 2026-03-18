import { Link } from 'react-router-dom';
import {
  getServiceFaqByPath,
  getServiceHighlightsByPath,
  getServiceImageByPath,
  getServiceParagraphsByPath,
} from './serviceImage';

type ServiceDetailTemplateProps = {
  categoryName: string;
  categoryDescription: string;
  serviceName: string;
  image: string;
  servicePath: string;
  summary?: string;
};

export default function ServiceDetailTemplate({
  categoryName,
  categoryDescription,
  serviceName,
  image,
  servicePath,
  summary,
}: ServiceDetailTemplateProps) {
  const basePath = servicePath.split('/').slice(0, 3).join('/');
  const highlights = getServiceHighlightsByPath(servicePath);
  const paragraphs = getServiceParagraphsByPath(servicePath, serviceName);
  const faqItems = getServiceFaqByPath(servicePath, serviceName);

  const gallery = [
    getServiceImageByPath(servicePath, { width: 1200, height: 800, variant: 'gallery-1' }),
    getServiceImageByPath(servicePath, { width: 1200, height: 800, variant: 'gallery-2' }),
    getServiceImageByPath(servicePath, { width: 1200, height: 800, variant: 'gallery-3' }),
    getServiceImageByPath(servicePath, { width: 1200, height: 800, variant: 'gallery-4' }),
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10 md:py-14 bg-slate-50 min-h-[calc(100vh-220px)]">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{categoryName}</p>
          <h1 className="mt-2 text-xl md:text-2xl font-bold text-slate-900">{serviceName}</h1>
          <p className="mt-3 text-slate-600 text-base md:text-lg max-w-3xl">{summary || categoryDescription}</p>
        </div>

        <article className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Service Overview</h2>
          <div className="mt-3 space-y-3 text-sm md:text-base text-slate-600 leading-relaxed">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </article>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <img src={image} alt={serviceName} className="w-full h-64 md:h-[420px] object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((src, index) => (
            <article key={`${src}-${index}`} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <img src={src} alt={`${serviceName} highlight ${index + 1}`} className="w-full h-40 object-cover" />
              <div className="px-3 py-2 text-xs font-semibold text-slate-700">{highlights[index] || `Highlight ${String(index + 1).padStart(2, '0')}`}</div>
            </article>
          ))}
        </div>

        <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Key Points</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((point) => (
              <div key={point} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {point}
              </div>
            ))}
          </div>
        </article>

        <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Service Packages</h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
              <h3 className="font-semibold text-slate-900">Starter</h3>
              <p className="text-lg font-bold text-slate-900 mt-2">$20</p>
              <img src={gallery[0]} alt="Starter package" className="mt-3 h-24 w-full object-cover rounded-lg" />
            </div>
            <div className="rounded-xl border-2 border-blue-500 p-4 bg-blue-50/40">
              <h3 className="font-semibold text-slate-900">Standard</h3>
              <p className="text-lg font-bold text-slate-900 mt-2">$60</p>
              <img src={gallery[1]} alt="Standard package" className="mt-3 h-24 w-full object-cover rounded-lg" />
            </div>
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
              <h3 className="font-semibold text-slate-900">Premium</h3>
              <p className="text-lg font-bold text-slate-900 mt-2">$120</p>
              <img src={gallery[2]} alt="Premium package" className="mt-3 h-24 w-full object-cover rounded-lg" />
            </div>
          </div>
        </article>

        <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">
                  {item.question}
                  <span className="text-slate-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </article>

        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Book {serviceName}</h2>
            <p className="text-slate-300 mt-1 text-sm md:text-base">Quick booking available.</p>
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
