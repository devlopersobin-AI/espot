import { Link } from 'react-router-dom';

const equestrianServices = [
  { name: 'Horse Back Riding', path: '/services/equestrian/horse-back-riding' },
  { name: 'Buggy & Horse Rentals', path: '/services/equestrian/buggy-horse-rentals' },
  { name: 'Horse Buy & Sale', path: '/services/equestrian/horse-buy-sale' },
  { name: 'Horse Accessories Sale', path: '/services/equestrian/horse-accessories-sale' },
  { name: 'Horse Show', path: '/services/equestrian/horse-show' },
  { name: 'Horse Sports & Competition', path: '/services/equestrian/horse-sports-competition' },
  { name: 'Horse Boarding & Breeding', path: '/services/equestrian/horse-boarding-breeding' },
  { name: 'Horse Tourism', path: '/services/equestrian/horse-tourism' },
];

export default function Services() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10 md:py-14 bg-slate-50 min-h-[calc(100vh-220px)]">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Services</p>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900">Equestrian</h1>
          <p className="text-slate-600 max-w-3xl">
            Explore specialized horse-focused services for riding, rentals, trade, tourism, competitions, and more.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {equestrianServices.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {service.name}
              </h2>
              <p className="text-sm text-slate-500 mt-2">View service details</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
