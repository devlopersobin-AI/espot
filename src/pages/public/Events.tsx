import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import SubNav from "../../components/SubNav";
import QuickRegisterForm from "../../components/forms/QuickRegisterForm";
import {
  Search,
  Calendar,
  MapPin,
  Star,
  Users,
  Video,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function Events() {
  const [activeTab, setActiveTab] = useState("Search Events");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [timeFilter, setTimeFilter] = useState("Any Time");
  const [registrationTarget, setRegistrationTarget] = useState<string | null>(
    null,
  );

  const subNav = [
    "Search Events",
    "Categories",
    "Online Events",
    "Free Events",
    "Event Calendar",
  ];

  const eventsList = [
    {
      id: 1,
      slug: "global-tech-leadership-summit",
      title: "Global Tech Leadership Summit",
      date: "Oct 15, 2026",
      time: "09:00 AM PST",
      location: "San Francisco, CA",
      category: "Conference",
      points: 50,
      free: false,
      online: false,
      attendees: 1200,
      image: "https://picsum.photos/seed/evt1/600/300",
    },
    {
      id: 2,
      slug: "mastering-ai-integration",
      title: "Mastering AI Integration",
      date: "Nov 02, 2026",
      time: "10:00 AM EST",
      location: "Virtual",
      category: "Workshop",
      points: 20,
      free: true,
      online: true,
      attendees: 350,
      image: "https://picsum.photos/seed/evt2/600/300",
    },
    {
      id: 3,
      slug: "european-founders-mixer",
      title: "European Founders Mixer",
      date: "Nov 12, 2026",
      time: "06:00 PM GMT",
      location: "London, UK",
      category: "Networking",
      points: 30,
      free: false,
      online: false,
      attendees: 150,
      image: "https://picsum.photos/seed/evt3/600/300",
    },
    {
      id: 4,
      slug: "web3-developer-bootcamp",
      title: "Web3 Developer Bootcamp",
      date: "Dec 05, 2026",
      time: "11:00 AM PST",
      location: "Virtual",
      category: "Training",
      points: 40,
      free: true,
      online: true,
      attendees: 500,
      image: "https://picsum.photos/seed/evt4/600/300",
    },
    {
      id: 5,
      slug: "annual-espot-gala",
      title: "Annual E-SPOT Gala",
      date: "Dec 20, 2026",
      time: "07:00 PM EST",
      location: "New York, NY",
      category: "Celebration",
      points: 100,
      free: false,
      online: false,
      attendees: 800,
      image: "https://picsum.photos/seed/evt5/600/300",
    },
    {
      id: 6,
      slug: "startup-pitch-night",
      title: "Startup Pitch Night",
      date: "Jan 15, 2027",
      time: "05:30 PM PST",
      location: "Austin, TX",
      category: "Competition",
      points: 25,
      free: true,
      online: false,
      attendees: 200,
      image: "https://picsum.photos/seed/evt6/600/300",
    },
  ];

  const categories = [
    { name: "Conference", count: 45, icon: "🎤" },
    { name: "Workshop", count: 120, icon: "🛠️" },
    { name: "Networking", count: 85, icon: "🤝" },
    { name: "Training", count: 60, icon: "📚" },
    { name: "Webinar", count: 150, icon: "💻" },
    { name: "Meetup", count: 90, icon: "☕" },
  ];

  const filteredEvents = useMemo(() => {
    return eventsList.filter((event) => {
      const queryMatch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.category.toLowerCase().includes(searchQuery.toLowerCase());
      const categoryMatch =
        selectedCategory === "All Categories" ||
        event.category === selectedCategory;
      const timeMatch =
        timeFilter === "Any Time" ||
        (timeFilter === "October 2024" && event.date.includes("Oct")) ||
        (timeFilter === "November 2024" && event.date.includes("Nov")) ||
        (timeFilter === "December 2024" && event.date.includes("Dec")) ||
        (timeFilter === "January 2025" && event.date.includes("Jan"));
      return queryMatch && categoryMatch && timeMatch;
    });
  }, [eventsList, searchQuery, selectedCategory, timeFilter]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setTimeFilter("Any Time");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        bgColor="bg-indigo-900"
        accentColor="text-indigo-300"
        title="Events"
        subtitle="Connect, learn, and grow. Discover upcoming events, workshops, and conferences within the E-SPOT network."
        label="Module"
      />

      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-indigo-700 border-indigo-500 bg-indigo-50"
      />

      <div className="flex-1 py-8 sm:py-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Main Search & List View */}
          {activeTab === "Search Events" && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Event Search & Filters */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      type="text"
                      placeholder="Search events by name, location, or speaker..."
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow"
                    />
                  </div>
                  <div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-white transition-shadow"
                    >
                      <option>All Categories</option>
                      {Array.from(
                        new Set(eventsList.map((event) => event.category)),
                      ).map((category) => (
                        <option key={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      value={timeFilter}
                      onChange={(e) => setTimeFilter(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-white transition-shadow"
                    >
                      <option>Any Time</option>
                      <option>October 2024</option>
                      <option>November 2024</option>
                      <option>December 2024</option>
                      <option>January 2025</option>
                    </select>
                  </div>
                </div>
              </div>

              {registrationTarget ? (
                <QuickRegisterForm
                  heading="Event Registration"
                  targetLabel={registrationTarget}
                  submitLabel="Submit Event Registration"
                  onClose={() => setRegistrationTarget(null)}
                />
              ) : null}

              {/* Popular Events */}
              <div>
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Upcoming Events
                    </h2>
                    <p className="text-slate-500 mt-1">
                      Don't miss out on these popular gatherings.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-1"
                  >
                    View All <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
                    >
                      <div className="h-44 sm:h-48 bg-slate-200 relative overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase shadow-sm">
                          {event.category}
                        </div>
                        {event.online && (
                          <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                            <Video className="w-3 h-3" /> Virtual
                          </div>
                        )}
                      </div>
                      <div className="p-5 sm:p-6 flex flex-col flex-1">
                        <Link
                          to={`/events/${event.slug}`}
                          className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-indigo-600 transition-colors block"
                        >
                          {event.title}
                        </Link>

                        <div className="space-y-3 mb-6 flex-1">
                          <div className="flex items-start gap-3 text-sm text-slate-600">
                            <Calendar className="w-4 h-4 mt-0.5 text-indigo-500 shrink-0" />
                            <div>
                              <p className="font-medium text-slate-900">
                                {event.date}
                              </p>
                              <p>{event.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                            <span className="truncate">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <Users className="w-4 h-4 text-indigo-500 shrink-0" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                          <div className="flex flex-col">
                            <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                              Reward
                            </span>
                            <span className="text-sm font-black text-emerald-600">
                              +{event.points} Points
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setRegistrationTarget(event.title)}
                            className="px-4 py-2 bg-indigo-50 text-indigo-700 font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {filteredEvents.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                    No events match your search and filter criteria.
                  </div>
                )}
              </div>

              {/* Reviews Section */}
              <div className="mt-12 sm:mt-16 bg-white rounded-[24px] sm:rounded-3xl p-5 sm:p-8 border border-slate-200">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    What Attendees Say
                  </h2>
                  <p className="text-slate-600">
                    Hear from members who have participated in our recent events
                    and workshops.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      id: 1,
                      name: "Alex Rivera",
                      role: "Entrepreneur",
                      text: "The networking at the Founders Mixer was unparalleled. I met my current co-founder there!",
                      rating: 5,
                    },
                    {
                      id: 2,
                      name: "Samantha Lee",
                      role: "Tech Lead",
                      text: "Incredibly well-organized virtual workshop. The interactive sessions kept everyone engaged.",
                      rating: 5,
                    },
                    {
                      id: 3,
                      name: "Marcus Johnson",
                      role: "Student",
                      text: "As a student, the free access to the developer bootcamp was a game-changer for my career.",
                      rating: 4,
                    },
                  ].map((review) => (
                    <div
                      key={review.id}
                      className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
                    >
                      <div className="flex items-center gap-1 mb-4 text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-700 italic mb-6 leading-relaxed">
                        "{review.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">
                            {review.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {review.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "Categories" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Browse by Category
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setActiveTab("Search Events");
                    }}
                    className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer group"
                  >
                    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {category.count} events
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Online Events" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[24px] sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white mb-10 sm:mb-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-bold mb-6">
                    <Video className="w-4 h-4" /> Virtual Experience
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight">
                    Join from Anywhere in the World
                  </h2>
                  <p className="text-blue-100 text-lg mb-8">
                    Access world-class workshops, webinars, and networking
                    sessions from the comfort of your home or office.
                  </p>
                  <button className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                    Browse All Virtual Events
                  </button>
                </div>
                <div className="w-full md:w-1/3 aspect-video bg-black/20 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                  <Video className="w-16 h-16 text-white/50" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Upcoming Virtual Sessions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredEvents
                  .filter((e) => e.online)
                  .map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
                    >
                      <div className="h-44 sm:h-48 bg-slate-200 relative overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase shadow-sm">
                          {event.category}
                        </div>
                        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                          <Video className="w-3 h-3" /> Virtual
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <Link
                          to={`/events/${event.slug}`}
                          className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-indigo-600 transition-colors block"
                        >
                          {event.title}
                        </Link>

                        <div className="space-y-3 mb-6 flex-1">
                          <div className="flex items-start gap-3 text-sm text-slate-600">
                            <Calendar className="w-4 h-4 mt-0.5 text-indigo-500 shrink-0" />
                            <div>
                              <p className="font-medium text-slate-900">
                                {event.date}
                              </p>
                              <p>{event.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <Users className="w-4 h-4 text-indigo-500 shrink-0" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                          <div className="flex flex-col">
                            <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                              Reward
                            </span>
                            <span className="text-sm font-black text-emerald-600">
                              +{event.points} Points
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setRegistrationTarget(event.title)}
                            className="px-4 py-2 bg-indigo-50 text-indigo-700 font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {activeTab === "Free Events" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    Free Community Events
                  </h2>
                  <p className="text-slate-600">
                    Accessible learning and networking opportunities for
                    everyone.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredEvents
                  .filter((e) => e.free)
                  .map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
                    >
                      <div className="h-44 sm:h-48 bg-slate-200 relative overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                          Free Entry
                        </div>
                        {event.online && (
                          <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                            <Video className="w-3 h-3" /> Virtual
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <Link
                          to={`/events/${event.slug}`}
                          className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-indigo-600 transition-colors block"
                        >
                          {event.title}
                        </Link>

                        <div className="space-y-3 mb-6 flex-1">
                          <div className="flex items-start gap-3 text-sm text-slate-600">
                            <Calendar className="w-4 h-4 mt-0.5 text-indigo-500 shrink-0" />
                            <div>
                              <p className="font-medium text-slate-900">
                                {event.date}
                              </p>
                              <p>{event.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                            <span className="truncate">{event.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                          <div className="flex flex-col">
                            <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                              Reward
                            </span>
                            <span className="text-sm font-black text-emerald-600">
                              +{event.points} Points
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setRegistrationTarget(event.title)}
                            className="px-4 py-2 bg-indigo-50 text-indigo-700 font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {activeTab === "Event Calendar" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-[24px] sm:rounded-3xl p-5 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">
                    October 2024
                  </h2>
                  <div className="flex gap-2">
                    <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
                      &larr; Prev
                    </button>
                    <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
                      Next &rarr;
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-px bg-slate-200 rounded-xl overflow-hidden border border-slate-200">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="bg-slate-50 py-3 text-center text-sm font-bold text-slate-500"
                      >
                        {day}
                      </div>
                    ),
                  )}

                  {/* Empty cells for previous month */}
                  {[...Array(2)].map((_, i) => (
                    <div
                      key={`empty-${i}`}
                      className="bg-white min-h-[120px] p-2 opacity-50"
                    ></div>
                  ))}

                  {/* Days of the month */}
                  {[...Array(31)].map((_, i) => {
                    const day = i + 1;
                    const hasEvent = day === 15 || day === 22;
                    return (
                      <div
                        key={day}
                        className={`bg-white min-h-[120px] p-2 border-t border-slate-100 transition-colors ${hasEvent ? "hover:bg-indigo-50 cursor-pointer" : ""}`}
                      >
                        <div
                          className={`text-sm font-medium w-8 h-8 flex items-center justify-center rounded-full mb-1 ${day === 15 ? "bg-indigo-600 text-white" : "text-slate-700"}`}
                        >
                          {day}
                        </div>
                        {day === 15 && (
                          <div className="bg-indigo-100 text-indigo-700 text-xs p-1.5 rounded mb-1 truncate font-medium">
                            Global Tech Summit
                          </div>
                        )}
                        {day === 22 && (
                          <div className="bg-emerald-100 text-emerald-700 text-xs p-1.5 rounded truncate font-medium">
                            Founders Mixer
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Empty cells for next month */}
                  {[...Array(2)].map((_, i) => (
                    <div
                      key={`empty-next-${i}`}
                      className="bg-white min-h-[120px] p-2 opacity-50 border-t border-slate-100"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
