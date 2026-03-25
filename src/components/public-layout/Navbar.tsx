import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  User,
  X,
} from "lucide-react";
import type React from "react";
import logo from "../../assets/espotclub_logo_withtext.png";
import {
  discoveryGroups,
  eventTypes,
  mainClubNav,
  secondaryClubNav,
  serviceCategories,
  upcomingEvents,
} from "./menuData";
import type { MegaMenuId } from "./navTypes";
import { getAuthRole, getDashboardPathForRole } from "../../auth/permissions";

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
    <a
      role="button"
      tabIndex={0}
      onMouseEnter={() => openMega(id)}
      onFocus={() => openMega(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openMega(id);
        }
      }}
      className={`relative flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
        activeMega === id
          ? "text-blue-600 bg-blue-50"
          : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
      }`}
    >
      {label}
      <ChevronDown
        className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === id ? "rotate-180" : ""}`}
      />
      {activeMega === id && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
      )}
    </a>
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
  const role = getAuthRole();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState("All");
  const [selectedDiscoverGroup, setSelectedDiscoverGroup] = useState(
    discoveryGroups[0]?.title ?? "",
  );
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authRole");
    setProfileOpen(false);
    navigate("/");
  };

  const initials = role ? role.slice(0, 2).toUpperCase() : "";

  return (
    <header
      ref={headerRef}
      className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-200/80 shadow-sm supports-[backdrop-filter]:bg-white/85"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 xl:px-8">
        {/* First line navigation */}
        <div className="flex items-center justify-between h-12 border-b border-slate-100">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={logo} alt="E-Spot Club" className="h-10 w-auto" />
          </Link>
          <nav className="hidden xl:flex items-center gap-1 flex-1 ml-4">
            {mainClubNav.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  locationPathname === item.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden xl:flex items-center gap-2.5">
            {role ? (
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  onClick={() => setProfileOpen((o) => !o)}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-xs font-semibold shadow-sm">
                    {initials}
                  </div>
                  <div className="text-left hidden 2xl:block">
                    <p className="text-sm font-semibold text-slate-800 leading-tight">
                      User
                    </p>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {role}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-52 bg-white rounded-xl border border-slate-200 shadow-lg py-1.5 z-50">
                    <div className="px-3.5 py-2.5 border-b border-slate-100">
                      <p className="text-sm font-semibold text-slate-900">
                        User
                      </p>
                      <span className="inline-block mt-0.5 px-2 py-0.5 text-[11px] font-medium rounded-full bg-blue-50 text-blue-700">
                        {role}
                      </span>
                    </div>
                    <Link
                      to={getDashboardPathForRole(role)}
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <LayoutDashboard className="w-4 h-4 text-slate-400" />
                      Dashboard
                    </Link>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/auth?mode=login"
                  className="px-3.5 py-1.5 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <User className="w-3.5 h-3.5" />
                  Login
                </Link>
                <Link
                  to="/auth?mode=signup&role=Member"
                  className="px-3.5 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap shadow-sm shadow-blue-600/20"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="xl:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            onClick={() => {
              setActiveMega(null);
              setMobileMenuOpen((o) => !o);
            }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Second line navigation */}
        <div className="hidden xl:flex items-center justify-between h-12">
          <nav className="flex items-center gap-1 flex-1">
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
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                    locationPathname === item.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  } ${isBold ? "font-bold" : "font-medium"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <form onSubmit={handleSearch} className="relative w-36 2xl:w-44 flex items-center">
            <button type="submit" aria-label="Submit search" className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-1 hover:bg-slate-200/50 rounded-full cursor-pointer transition-colors">
              <Search className="h-3.5 w-3.5 text-slate-400 hover:text-blue-500" />
            </button>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 bg-slate-50/60 font-sans"
              placeholder="Search... Ctrl+K"
            />
          </form>
        </div>
      </div>

      {activeMega && (
        <div
          className="absolute left-0 right-0 top-full bg-white border-t border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] mega-menu-enter"
          onMouseEnter={() => openMega(activeMega)}
          onMouseLeave={closeMega}
        >
          {activeMega === "services" && (
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              <div className="flex gap-6">
                <div className="w-56 flex-shrink-0">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
                    Categories
                  </h3>
                  <div className="space-y-0.5">
                    {Object.entries(serviceCategories).map(
                      ([category, data]) => {
                        const CatIcon = data.icon;
                        return (
                          <button
                            key={category}
                            onMouseEnter={() => setSelectedCategory(category)}
                            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2.5 ${
                              selectedCategory === category
                                ? "bg-blue-50 text-blue-700 shadow-sm"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                          >
                            <CatIcon
                              className={`w-4 h-4 flex-shrink-0 ${selectedCategory === category ? "text-blue-600" : "text-slate-400"}`}
                            />
                            <span className="truncate">{category}</span>
                            {selectedCategory === category && (
                              <ChevronRight className="w-3.5 h-3.5 ml-auto text-blue-400" />
                            )}
                          </button>
                        );
                      },
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link
                      to="/services"
                      className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      View all services <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="flex-1 border-l border-slate-100 pl-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-base font-semibold text-slate-900">
                      {selectedCategory}
                    </h3>
                    <span className="text-xs text-slate-400 font-medium">
                      {serviceCategories[selectedCategory]?.services.length ??
                        0}{" "}
                      services
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {(serviceCategories[selectedCategory]?.services ?? []).map(
                      (service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                          {service.name}
                        </Link>
                      ),
                    )}
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
                      <p className="text-white text-sm font-semibold">
                        {selectedCategory}
                      </p>
                      <p className="text-white/80 text-xs mt-0.5">
                        {serviceCategories[selectedCategory]?.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMega === "events" && (
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              <div className="flex gap-6">
                {/* Panel 1: Event Types (filter) */}
                <div className="w-44 flex-shrink-0">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
                    Event Types
                  </h3>
                  <div className="space-y-0.5">
                    <button
                      onMouseEnter={() => setSelectedEventType("All")}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2.5 ${
                        selectedEventType === "All"
                          ? "bg-blue-50 text-blue-700 shadow-sm"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span className="truncate">All Events</span>
                      {selectedEventType === "All" && (
                        <ChevronRight className="w-3.5 h-3.5 ml-auto text-blue-400" />
                      )}
                    </button>
                    {eventTypes.map((type) => {
                      const TypeIcon = type.icon;
                      return (
                        <button
                          key={type.name}
                          onMouseEnter={() => setSelectedEventType(type.name)}
                          className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2.5 ${
                            selectedEventType === type.name
                              ? "bg-blue-50 text-blue-700 shadow-sm"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <TypeIcon
                            className={`w-4 h-4 flex-shrink-0 ${selectedEventType === type.name ? "text-blue-600" : "text-slate-400"}`}
                          />
                          <span className="truncate">{type.name}</span>
                          {selectedEventType === type.name && (
                            <ChevronRight className="w-3.5 h-3.5 ml-auto text-blue-400" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link
                      to="/events"
                      className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      All events <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Panel 2: Filtered Events */}
                <div className="flex-1 border-l border-slate-100 pl-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {selectedEventType === "All"
                        ? "Upcoming Events"
                        : selectedEventType}
                    </h3>
                    <Link
                      to="/events"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      View all <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {upcomingEvents
                      .filter((event) => {
                        if (selectedEventType === "All") return true;
                        if (selectedEventType === "Competitions")
                          return event.type === "Competition";
                        if (selectedEventType === "Workshops")
                          return event.type === "Workshop";
                        if (selectedEventType === "Networking")
                          return event.type === "Networking";
                        return ["Show", "Expo", "Corporate"].includes(
                          event.type,
                        );
                      })
                      .slice(0, 8)
                      .map((event) => (
                        <Link
                          key={event.path}
                          to={event.path}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                          <span className="truncate">{event.name}</span>
                          <span className="text-[11px] text-slate-400 ml-auto whitespace-nowrap">
                            {event.date}
                          </span>
                        </Link>
                      ))}
                    {upcomingEvents.filter((event) => {
                      if (selectedEventType === "All") return true;
                      if (selectedEventType === "Competitions")
                        return event.type === "Competition";
                      if (selectedEventType === "Workshops")
                        return event.type === "Workshop";
                      if (selectedEventType === "Networking")
                        return event.type === "Networking";
                      return ["Show", "Expo", "Corporate"].includes(event.type);
                    }).length === 0 && (
                      <p className="col-span-2 text-sm text-slate-400 px-3 py-2">
                        No events in this category yet.
                      </p>
                    )}
                  </div>
                </div>

                {/* Panel 3: Image */}
                <div className="w-52 flex-shrink-0">
                  <div className="rounded-2xl overflow-hidden h-full relative">
                    <img
                      src={
                        selectedEventType === "All"
                          ? "https://images.unsplash.com/photo-1540575467063-178a50c7e4e7?w=400&h=300&fit=crop"
                          : (eventTypes.find(
                              (t) => t.name === selectedEventType,
                            )?.image ??
                            "https://images.unsplash.com/photo-1540575467063-178a50c7e4e7?w=400&h=300&fit=crop")
                      }
                      alt={selectedEventType}
                      className="w-full h-full object-cover min-h-[240px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-semibold">
                        {selectedEventType === "All"
                          ? "E-SPOT Events"
                          : selectedEventType}
                      </p>
                      <p className="text-white/80 text-xs mt-0.5">
                        {selectedEventType === "All"
                          ? "Shows & competitions"
                          : eventTypes.find((t) => t.name === selectedEventType)
                              ?.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Panel 4: Spotlight */}
                <div className="w-56 flex-shrink-0">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Spotlight
                      </span>
                      <h4 className="text-base font-semibold text-slate-900 mt-2">
                        Nepal Talent 2026
                      </h4>
                      <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                        The biggest talent competition in Nepal. Showcase your
                        skills and win amazing prizes.
                      </p>
                      <p className="text-xs text-slate-400 mt-2">
                        Mar 25, 2026
                      </p>
                    </div>
                    <Link
                      to="/events/nepal-talent-2026"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Register now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMega === "discover" && (
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              <div className="flex gap-6">
                {/* Panel 1: Categories */}
                <div className="w-44 flex-shrink-0">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
                    Categories
                  </h3>
                  <div className="space-y-0.5">
                    {discoveryGroups.map((group) => (
                      <button
                        key={group.title}
                        onMouseEnter={() =>
                          setSelectedDiscoverGroup(group.title)
                        }
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2.5 ${
                          selectedDiscoverGroup === group.title
                            ? "bg-blue-50 text-blue-700 shadow-sm"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <span className="truncate">{group.title}</span>
                        {selectedDiscoverGroup === group.title && (
                          <ChevronRight className="w-3.5 h-3.5 ml-auto text-blue-400" />
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link
                      to="/showcase"
                      className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Open Showcase <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Panel 2: Links */}
                <div className="flex-1 border-l border-slate-100 pl-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-base font-semibold text-slate-900">
                      {selectedDiscoverGroup}
                    </h3>
                    <span className="text-xs text-slate-400 font-medium">
                      {discoveryGroups.find(
                        (g) => g.title === selectedDiscoverGroup,
                      )?.items.length ?? 0}{" "}
                      pages
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    {(
                      discoveryGroups.find(
                        (g) => g.title === selectedDiscoverGroup,
                      )?.items ?? []
                    ).map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                          {item.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Panel 3: Image */}
                <div className="w-52 flex-shrink-0">
                  <div className="rounded-2xl overflow-hidden h-full relative">
                    <img
                      src={
                        discoveryGroups.find(
                          (g) => g.title === selectedDiscoverGroup,
                        )?.image
                      }
                      alt={selectedDiscoverGroup}
                      className="w-full h-full object-cover min-h-[240px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-semibold">
                        {selectedDiscoverGroup}
                      </p>
                      <p className="text-white/80 text-xs mt-0.5">
                        {
                          discoveryGroups.find(
                            (g) => g.title === selectedDiscoverGroup,
                          )?.desc
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Panel 4: Quick Stats */}
                <div className="w-56 flex-shrink-0">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 h-full flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Platform Stats
                    </span>
                    <div className="mt-3 space-y-3 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Products</span>
                        <span className="text-sm font-semibold text-slate-900">
                          420+
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Members</span>
                        <span className="text-sm font-semibold text-slate-900">
                          2,680+
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Partners</span>
                        <span className="text-sm font-semibold text-slate-900">
                          86
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Programs</span>
                        <span className="text-sm font-semibold text-slate-900">
                          24
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">
                          Countries
                        </span>
                        <span className="text-sm font-semibold text-slate-900">
                          12
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/profiles"
                      className="mt-4 pt-3 border-t border-slate-200 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Browse profiles <ArrowRight className="w-4 h-4" />
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
          style={{ top: "var(--site-header-height)" }}
          onClick={() => setActiveMega(null)}
        />
      )}
    </header>
  );
}
