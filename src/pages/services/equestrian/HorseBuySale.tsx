import { Link } from 'react-router-dom';

export default function HorseBuySale() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10 md:py-14 bg-white min-h-[calc(100vh-220px)]">
      <div className="max-w-5xl mx-auto space-y-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Equestrian Service</p>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900">Horse Buy &amp; Sale</h1>
        <p className="text-slate-600 text-base md:text-lg">
          Connect with trusted buyers and sellers for horse trading with transparent records and assisted evaluations.
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h2 className="text-lg font-bold text-slate-900 mb-2">What this includes</h2>
          <ul className="list-disc pl-5 text-slate-600 space-y-1">
            <li>Listing and promotion for sale-ready horses</li>
            <li>Veterinary and pedigree documentation support</li>
            <li>Verified leads and guided transactions</li>
          </ul>
        </div>
        <Link to="/services" className="inline-flex px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
          Back to Services
        </Link>
      </div>
    </section>
  );
}
