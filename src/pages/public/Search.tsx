import React, { useMemo, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Search as SearchIcon, ArrowRight, Filter } from "lucide-react";

export default function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const [searchInput, setSearchInput] = useState(query);
  const [typeFilter, setTypeFilter] = useState("All");

  // Mock data representing the entire E-SPOT ecosystem
  const allMockData = [
    {
      id: 1,
      type: "Event",
      title: "Nepal Talent of the Year 2026",
      desc: "Kathmandu - Mar 25, 2026 — talent competition and showcase event",
      link: "/events/nepal-talent-2026",
    },
    {
      id: 2,
      type: "Event",
      title: "College Trailblazer Nepal 2026",
      desc: "Kathmandu - Apr 15, 2026 — college competition",
      link: "/events/trailblazer-2026",
    },
    {
      id: 3,
      type: "Event",
      title: "MR. & Miss E-spot",
      desc: "Pokhara - May 10, 2026 — modelling show and pageant",
      link: "/events/mr-miss-espot",
    },
    {
      id: 4,
      type: "Event",
      title: "Kidspreneur Camp",
      desc: "Lalitpur - Jun 01, 2026 — entrepreneurship workshop for kids",
      link: "/events/kidspreneur-camp",
    },
    {
      id: 5,
      type: "Event",
      title: "Entrepreneurs Arena",
      desc: "Kathmandu - Jun 20, 2026 — networking and startup pitching",
      link: "/events/entrepreneurs-arena",
    },
    {
      id: 6,
      type: "Event",
      title: "Wedding Expo 2026",
      desc: "Bhaktapur - Jul 25, 2026 — wedding expo and vendor showcase",
      link: "/events/wedding-expo",
    },
    {
      id: 7,
      type: "Page",
      title: "Careers at E-SPOT Club",
      desc: "Browse career opportunities, job openings, and employment at E-SPOT Club",
      link: "/careers",
    },
    {
      id: 8,
      type: "Page",
      title: "Membership Plans",
      desc: "Join 300K+ members — Silver, Gold, Platinum and Diamond membership tiers",
      link: "/membership",
    },
    {
      id: 9,
      type: "Page",
      title: "Partner Program",
      desc: "Build strategic business alliances and grow revenue together as a partner",
      link: "/partner",
    },
    {
      id: 10,
      type: "Page",
      title: "Franchise Opportunities",
      desc: "Own an E-SPOT Club franchise in your city with proven systems and brand support",
      link: "/franchise",
    },
    {
      id: 11,
      type: "Page",
      title: "Training & Courses",
      desc: "Access certified training courses, skill workshops, and career acceleration programs",
      link: "/training",
    },
    {
      id: 12,
      type: "Page",
      title: "Scholar Program",
      desc: "Connect with academic programs, scholarships, and international study pathways",
      link: "/scholar",
    },
    {
      id: 13,
      type: "Page",
      title: "Leadership Program",
      desc: "Develop leadership skills through structured programs, workshops, and mentors",
      link: "/leadership",
    },
    {
      id: 14,
      type: "Page",
      title: "Entrepreneurship Hub",
      desc: "Launch and scale your startup with mentorship, funding connects, and community",
      link: "/entrepreneurship",
    },
    {
      id: 15,
      type: "Page",
      title: "Investment Opportunities",
      desc: "Early Bird, Premium & Elite investment tiers across 8 venture categories worldwide",
      link: "/investment",
    },
    {
      id: 16,
      type: "Page",
      title: "Contact Us",
      desc: "Get in touch with the E-SPOT Club team for inquiries and support",
      link: "/contact",
    },
    {
      id: 17,
      type: "Page",
      title: "Products & Marketplace",
      desc: "Browse products, electronics, fashion, and exclusive E-SPOT marketplace items",
      link: "/product",
    },
    {
      id: 18,
      type: "Page",
      title: "Showcase & Portfolio",
      desc: "Explore member showcases, talent portfolios, and featured profiles",
      link: "/showcase",
    },
    {
      id: 19,
      type: "Page",
      title: "Offers & Deals",
      desc: "Exclusive member offers, discount codes, and special promotions",
      link: "/offer",
    },
    {
      id: 20,
      type: "Service",
      title: "Equestrian Services",
      desc: "Horse riding lessons, equestrian sports, and tourism experiences",
      link: "/services/equestrian",
    },
    {
      id: 21,
      type: "Service",
      title: "Beauty & Spa Services",
      desc: "Facial treatments, bridal beauty, massage therapy, and wellness spa",
      link: "/services/beauty-spa",
    },
    {
      id: 22,
      type: "Service",
      title: "Wellness & Fitness",
      desc: "Yoga classes, meditation, gym, personal coaching, and fitness programs",
      link: "/services/wellness",
    },
    {
      id: 23,
      type: "Service",
      title: "Tours & Travel",
      desc: "Domestic tours, international travel packages, and adventure tourism",
      link: "/services/travel",
    },
    {
      id: 24,
      type: "Service",
      title: "Restaurants & Catering",
      desc: "Fine dining, restaurant reservations, and corporate catering services",
      link: "/services/restaurants",
    },
    {
      id: 25,
      type: "Service",
      title: "Multimedia Production",
      desc: "Photography, videography, drone footage, and content production",
      link: "/services/multimedia",
    },
    {
      id: 26,
      type: "Service",
      title: "Events & Wedding Management",
      desc: "Corporate events, social gatherings, and wedding planning services",
      link: "/services/events",
    },
    {
      id: 27,
      type: "Member",
      title: "Sarah Jenkins",
      desc: "Diamond Member - Talent of the Month",
      link: "/membership",
    },
    {
      id: 28,
      type: "Trainer",
      title: "Michael Chang",
      desc: "Expert in Agile Methodologies and Scrum training",
      link: "/training",
    },
    {
      id: 29,
      type: "Jobseeker",
      title: "Emily Chen",
      desc: "Senior Frontend Developer looking for remote career opportunities",
      link: "/careers",
    },
    {
      id: 30,
      type: "Job Giver",
      title: "TechCorp Innovations",
      desc: "Hiring for multiple engineering and career positions",
      link: "/careers",
    },
    {
      id: 31,
      type: "Leader",
      title: "David Rodriguez",
      desc: "CEO of InnovateX, Keynote Speaker and leadership mentor",
      link: "/leadership",
    },
    {
      id: 32,
      type: "Entrepreneur",
      title: "Priya Sharma",
      desc: "Founder of EcoBeauty, seeking seed funding and mentorship",
      link: "/entrepreneurship",
    },
  ];

  const resultTypes = [
    "All",
    ...Array.from(new Set(allMockData.map((item) => item.type))),
  ];

  const results = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return allMockData.filter((item) => {
      const queryMatch =
        item.title.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.link.toLowerCase().includes(q);
      const typeMatch = typeFilter === "All" || item.type === typeFilter;
      return queryMatch && typeMatch;
    });
  }, [query, typeFilter]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Search Header */}
      <div className="bg-slate-900 text-white pt-16 pb-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Search Results
            </h1>
            <form onSubmit={onSubmit} className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search across the E-SPOT ecosystem..."
                className="w-full pl-14 pr-32 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 transition-all text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex-1 py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <p className="text-slate-600 text-lg">
              {query ? (
                <>
                  Found{" "}
                  <span className="font-bold text-slate-900">
                    {results.length}
                  </span>{" "}
                  results for "
                  <span className="font-bold text-slate-900">{query}</span>"
                </>
              ) : (
                "Enter a search term to find events, products, members, and more."
              )}
            </p>

            {query && results.length > 0 && (
              <button className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 self-start sm:self-auto">
                <Filter className="w-4 h-4" /> Filter Results
              </button>
            )}
          </div>

          {query && (
            <div className="flex flex-wrap gap-2 mb-8">
              {resultTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`px-3 py-1.5 rounded-lg border text-sm font-semibold ${
                    typeFilter === type
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}

          {/* Results Grid */}
          {query && results.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center shadow-sm max-w-2xl mx-auto mt-12 animate-in fade-in slide-in-from-bottom-4">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                No results found
              </h3>
              <p className="text-slate-500 mb-8 text-lg">
                We couldn't find anything matching "{query}". Try adjusting your
                search terms or browsing our categories.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
              >
                Return Home <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4">
              {results.map((result) => (
                <Link
                  key={result.id}
                  to={result.link}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group flex flex-col h-full"
                >
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 bg-blue-50 inline-block px-3 py-1 rounded-full self-start">
                    {result.type}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {result.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                    {result.desc}
                  </p>
                  <p className="text-xs text-slate-400 mb-4">
                    Destination: {result.link}
                  </p>
                  <div className="text-sm font-bold text-blue-600 flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
