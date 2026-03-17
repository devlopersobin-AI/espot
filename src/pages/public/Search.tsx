import React, { useMemo, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Search as SearchIcon, ArrowRight, Filter } from 'lucide-react';

export default function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);
  const [typeFilter, setTypeFilter] = useState('All');

  // Mock data representing the entire E-SPOT ecosystem
  const allMockData = [
    { id: 1, type: 'Event', title: 'Global Tech Leadership Summit', desc: 'San Francisco, CA - Oct 15, 2024', link: '/events' },
    { id: 2, type: 'Product', title: 'Smart Gadget Pro', desc: 'Electronics category - $299', link: '/product' },
    { id: 3, type: 'Partner', title: 'Global Solutions Inc.', desc: 'Enterprise software partner', link: '/partner' },
    { id: 4, type: 'Member', title: 'Sarah Jenkins', desc: 'Diamond Member - Talent of the Month', link: '/membership' },
    { id: 5, type: 'Offer', title: '20% Off Premium Tech Bundle', desc: 'Exclusive member offer', link: '/offer' },
    { id: 6, type: 'Training', title: 'Advanced AI Integration Course', desc: 'Led by top industry experts', link: '/training' },
    { id: 7, type: 'Franchise', title: 'E-SPOT London Hub', desc: 'Premium franchise location', link: '/franchise' },
    { id: 8, type: 'Scholar', title: 'Future Tech Leaders Scholarship', desc: 'Full tuition coverage for STEM students', link: '/scholar' },
    { id: 9, type: 'Leadership', title: 'Executive Management Workshop', desc: 'Mastering modern leadership styles', link: '/leadership' },
    { id: 10, type: 'Entrepreneurship', title: 'Startup Funding Guide 2025', desc: 'Essential resources for new founders', link: '/entrepreneurship' },
    { id: 11, type: 'Trainer', title: 'Michael Chang', desc: 'Expert in Agile Methodologies and Scrum', link: '/training' },
    { id: 12, type: 'Jobseeker', title: 'Emily Chen', desc: 'Senior Frontend Developer looking for remote roles', link: '/training' },
    { id: 13, type: 'Job Giver', title: 'TechCorp Innovations', desc: 'Hiring for multiple engineering positions', link: '/training' },
    { id: 14, type: 'Leader', title: 'David Rodriguez', desc: 'CEO of InnovateX, Keynote Speaker', link: '/leadership' },
    { id: 15, type: 'Entrepreneur', title: 'Jessica Alba', desc: 'Founder of EcoBeauty, seeking seed funding', link: '/entrepreneurship' },
  ];

  const resultTypes = ['All', ...Array.from(new Set(allMockData.map((item) => item.type)))];

  const results = useMemo(() => {
    if (!query) return [];
    return allMockData.filter((item) => {
      const queryMatch =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase());
      const typeMatch = typeFilter === 'All' || item.type === typeFilter;
      return queryMatch && typeMatch;
    });
  }, [allMockData, query, typeFilter]);

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
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">Search Results</h1>
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
                <>Found <span className="font-bold text-slate-900">{results.length}</span> results for "<span className="font-bold text-slate-900">{query}</span>"</>
              ) : (
                'Enter a search term to find events, products, members, and more.'
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
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
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
              <h3 className="text-2xl font-bold text-slate-900 mb-3">No results found</h3>
              <p className="text-slate-500 mb-8 text-lg">We couldn't find anything matching "{query}". Try adjusting your search terms or browsing our categories.</p>
              <Link to="/" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
                Return Home <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4">
              {results.map(result => (
                <Link key={result.id} to={result.link} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group flex flex-col h-full">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 bg-blue-50 inline-block px-3 py-1 rounded-full self-start">{result.type}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{result.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">{result.desc}</p>
                  <p className="text-xs text-slate-400 mb-4">Destination: {result.link}</p>
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
