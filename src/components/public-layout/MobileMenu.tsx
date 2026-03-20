import { ChevronDown, Search } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";
import {
  discoveryGroups,
  mobileQuickLinks,
  serviceCategories,
  upcomingEvents,
} from "./menuData";

type Props = {
  open: boolean;
  topOffsetVar?: string;
  locationPathname: string;
  mobileExpanded: string | null;
  toggleMobileSection: (section: string) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.FormEvent) => void;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({
  open,
  topOffsetVar = "var(--site-header-height)",
  locationPathname,
  mobileExpanded,
  toggleMobileSection,
  searchQuery,
  setSearchQuery,
  handleSearch,
  setMobileMenuOpen,
}: Props) {
  if (!open) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Close mobile navigation overlay"
        className="xl:hidden fixed inset-x-0 bottom-0 z-[55] bg-slate-950/35"
        style={{ top: topOffsetVar }}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className="xl:hidden fixed inset-x-0 bottom-0 z-[60] bg-white shadow-[0_-12px_40px_rgba(15,23,42,0.16)] overflow-y-auto"
        style={{ top: topOffsetVar }}
      >
        <div className="mx-auto max-w-3xl px-4 py-4 space-y-3 pb-8 sm:px-5">
          {/* Back to Home link for mobile */}
          <div className="mb-2 flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* Optionally, add a left arrow icon here if desired */}
              <span className="material-icons" style={{ fontSize: "18px" }}>
                &#8592;
              </span>
              Back to Home
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2 px-1">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-2">
              {mobileQuickLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    locationPathname === item.path
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => toggleMobileSection("services")}
              className="w-full px-4 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between transition-colors"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileExpanded === "services" && (
              <div
                className="px-4 pb-4 space-y-3 mobile-section-enter border-t border-slate-100 bg-slate-50/70 overflow-y-auto"
                style={{ maxHeight: "100vh" }}
              >
                {Object.entries(serviceCategories).map(([category, data]) => {
                  const CatIcon = data.icon;
                  return (
                    <div key={category} className="pt-3">
                      <div className="flex items-center gap-2 mb-2">
                        <CatIcon className="w-3.5 h-3.5 text-slate-400" />
                        <p className="text-xs font-bold text-slate-900">
                          {category}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {data.services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="rounded-xl bg-white border border-slate-200 px-3 py-2 text-xs text-slate-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => toggleMobileSection("events")}
              className="w-full px-4 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between transition-colors"
            >
              Events
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === "events" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileExpanded === "events" && (
              <div className="px-4 pb-4 space-y-2 mobile-section-enter border-t border-slate-100 bg-slate-50/70">
                {upcomingEvents.map((event) => (
                  <Link
                    key={event.path}
                    to={event.path}
                    className="flex items-center justify-between rounded-xl bg-white border border-slate-200 px-3 py-2.5 text-sm text-slate-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="truncate">{event.name}</span>
                    <span className="text-[10px] text-slate-400 flex-shrink-0 ml-2">
                      {event.date}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => toggleMobileSection("discover")}
              className="w-full px-4 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between transition-colors"
            >
              Discover
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === "discover" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileExpanded === "discover" && (
              <div className="px-4 pb-4 space-y-3 mobile-section-enter border-t border-slate-100 bg-slate-50/70">
                {discoveryGroups.map((group) => (
                  <div key={group.title} className="pt-3">
                    <p className="text-xs font-bold text-slate-900 mb-2">
                      {group.title}
                    </p>
                    <div className="grid grid-cols-1 gap-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="rounded-xl bg-white border border-slate-200 px-3 py-2 text-xs text-slate-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 bg-slate-50/60 font-sans"
                placeholder="Search..."
              />
            </form>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/auth?mode=login"
                className="px-4 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/auth?mode=signup&role=Member"
                className="px-4 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors text-center shadow-sm shadow-blue-600/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
