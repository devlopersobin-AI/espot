import { ChevronDown, Search } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";
import { mainClubNav, secondaryClubNav, serviceCategories } from "./menuData";
import { getAuthRole, getDashboardPathForRole } from "../../auth/permissions";

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

  const role = getAuthRole();
  const initials = role ? role.slice(0, 2).toUpperCase() : "";

  const handleLogout = () => {
    localStorage.removeItem("authRole");
    setMobileMenuOpen(false);
    window.location.href = "/";
  };

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
              Main Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 mb-2">
              {mainClubNav.map((item) => (
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
            <div className="grid grid-cols-2 gap-2">
              {secondaryClubNav.map((item) => {
                const boldNames = [
                  "Product",
                  "Service",
                  "Training",
                  "Career",
                  "Events",
                ];
                const isBold = boldNames.includes(item.name);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      locationPathname === item.path
                        ? "bg-blue-600 text-white"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    } ${isBold ? "font-bold" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
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
            {role ? (
              <div className="flex flex-col items-center gap-3 pt-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-lg font-semibold shadow-sm">
                  {initials}
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-slate-800 leading-tight">
                    User
                  </p>
                  <p className="text-xs text-slate-500 leading-tight">{role}</p>
                </div>
                <Link
                  to={getDashboardPathForRole(role)}
                  className="w-full px-4 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full px-4 py-3 text-red-600 text-sm font-semibold rounded-xl hover:bg-red-50 transition-colors text-center border border-slate-200"
                >
                  Logout
                </button>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}
