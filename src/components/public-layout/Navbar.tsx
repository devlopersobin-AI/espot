import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  Menu,
  Search,
  User,
  X,
} from 'lucide-react';
import type React from 'react';
import logo from '../../assets/espotclub_logo_withtext.png';
import { discoveryGroups, eventTypes, mainNavItems, serviceCategories, upcomingEvents } from './menuData';
import type { MegaMenuId } from './navTypes';

type Props = {
  headerRef: React.RefObject<HTMLElement>;
  locationPathname: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeMega: MegaMenuId;
  openMega: (id: MegaMenuId) => void;
  closeMega: () => void;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchInputRef: React.RefObject<HTMLInputElement>;
  handleSearch: (e: React.FormEvent) => void;
  setActiveMega: React.Dispatch<React.SetStateAction<MegaMenuId>>;
};

function NavTrigger({
  id,
  label,
  activeMega,
  openMega,
}: {
  id: Exclude<MegaMenuId, null>;
  label: string;
  activeMega: MegaMenuId;
  openMega: (id: MegaMenuId) => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={() => openMega(id)}
      onFocus={() => openMega(id)}
      className={`relative flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap h-14 ${
        activeMega === id ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
      }`}
    >
      {label}
      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === id ? 'rotate-180' : ''}`} />
      {activeMega === id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />}
    </button>
  );
}

export default function Navbar({
  headerRef,
  locationPathname,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeMega,
  openMega,
  closeMega,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  searchInputRef,
  handleSearch,
  setActiveMega,
}: Props) {
  return (
    <header
      ref={headerRef}
      className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-200/80 shadow-sm supports-[backdrop-filter]:bg-white/85"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 xl:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={logo} alt="E-Spot Club" className="h-7 sm:h-8 w-auto" />
          </Link>

          <nav className="hidden xl:flex items-center gap-1 flex-1 ml-4" onMouseLeave={closeMega}>
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onMouseEnter={() => openMega(null)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  locationPathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <NavTrigger id="services" label="Services" activeMega={activeMega} openMega={openMega} />
            <NavTrigger id="events" label="Events" activeMega={activeMega} openMega={openMega} />
            <NavTrigger id="discover" label="Discover" activeMega={activeMega} openMega={openMega} />
          </nav>

          <div className="hidden xl:flex items-center gap-2.5">
            <form onSubmit={handleSearch} className="relative w-36 2xl:w-44">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Search className="h-3.5 w-3.5 text-slate-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 bg-slate-50/60 font-sans"
                placeholder="Search... Ctrl+K"
              />
            </form>
            <Link
              to="/auth?mode=login"
              className="px-3.5 py-1.5 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <User className="w-3.5 h-3.5" />
              Sign In
            </Link>
            <Link
              to="/auth?mode=signup&role=Member"
              className="px-3.5 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap shadow-sm shadow-blue-600/20"
            >
              Join Now
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="xl:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            onClick={() => {
              setActiveMega(null);
              setMobileMenuOpen((o) => !o);
            }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {activeMega && (
        <div
          className="absolute left-0 right-0 top-full bg-white border-t border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] mega-menu-enter"
          onMouseEnter={() => openMega(activeMega)}
          onMouseLeave={closeMega}
        >
          {activeMega === 'services' && (
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              <div className="flex gap-6">
                <div className="w-56 flex-shrink-0">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">Categories</h3>
                  <div className="space-y-0.5">
                    {Object.entries(serviceCategories).map(([category, data]) => {
                      const CatIcon = data.icon;
                      return (
                        <button
                          key={category}
                          onMouseEnter={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2.5 ${
                            selectedCategory === category
                              ? 'bg-blue-50 text-blue-700 shadow-sm'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <CatIcon className={`w-4 h-4 flex-shrink-0 ${selectedCategory === category ? 'text-blue-600' : 'text-slate-400'}`} />
                          <span className="truncate">{category}</span>
                          {selectedCategory === category && <ChevronRight className="w-3.5 h-3.5 ml-auto text-blue-400" />}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link to="/services" className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                      View all services <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="flex-1 border-l border-slate-100 pl-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-base font-semibold text-slate-900">{selectedCategory}</h3>
                    <span className="text-xs text-slate-400 font-medium">
                      {serviceCategories[selectedCategory]?.services.length ?? 0} services
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {(serviceCategories[selectedCategory]?.services ?? []).map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="w-64 flex-shrink-0">
                  <div className="rounded-2xl overflow-hidden h-full relative">
                    <img
                      src={serviceCategories[selectedCategory]?.image}
                      alt={selectedCategory}
                      className="w-full h-full object-cover min-h-[240px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-semibold">{selectedCategory}</p>
                      <p className="text-white/80 text-xs mt-0.5">{serviceCategories[selectedCategory]?.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMega === 'events' && (
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Event Types</h3>
                  <div className="space-y-1">
                    {eventTypes.map((type) => {
                      const TypeIcon = type.icon;
                      return (
                        <Link key={type.name} to={type.path} className="flex items-start gap-3 px-3 py-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors group">
                          <div className="w-9 h-9 rounded-lg bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center flex-shrink-0 transition-colors">
                            <TypeIcon className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">{type.name}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{type.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="col-span-6 border-l border-slate-100 pl-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Upcoming Events</h3>
                    <Link to="/events" className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      View all <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {upcomingEvents.slice(0, 6).map((event) => (
                      <Link
                        key={event.path}
                        to={event.path}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center flex-shrink-0 border border-blue-100/50">
                          <Calendar className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors truncate">{event.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[11px] text-slate-400 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {event.date}
                            </span>
                            <span className="text-[10px] font-semibold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">{event.type}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="col-span-3">
                  <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 border border-purple-100/60 p-6 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">Spotlight</span>
                      <h4 className="text-lg font-semibold text-slate-900 mt-3">Nepal Talent 2026</h4>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        The biggest talent competition in Nepal. Showcase your skills and win amazing prizes.
                      </p>
                      <div className="flex items-center gap-1.5 mt-3 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5" /> Mar 25, 2026
                      </div>
                    </div>
                    <Link
                      to="/events/nepal-talent-2026"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      Register now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMega === 'discover' && (
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-9 grid grid-cols-3 gap-4">
                  {discoveryGroups.map((group) => (
                    <div key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">{group.title}</h3>
                      <div className="space-y-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                              locationPathname === item.path
                                ? 'bg-blue-600 text-white'
                                : 'text-slate-700 hover:bg-white hover:text-blue-700'
                            }`}
                          >
                            <span>{item.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-70" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-span-3">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 border border-blue-100/70 p-6 h-full">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">Quick Access</p>
                    <h4 className="mt-3 text-xl font-bold text-slate-900">Explore More Modules</h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Use Discover to jump into marketplace pages, growth tracks, and career opportunities from one place.
                    </p>
                    <Link
                      to="/showcase"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      Open Showcase <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeMega && (
        <div
          className="fixed inset-x-0 bottom-0 bg-black/10 backdrop-blur-[1px] -z-10 mega-overlay-enter"
          style={{ top: 'var(--site-header-height)' }}
          onClick={() => setActiveMega(null)}
        />
      )}
    </header>
  );
}
