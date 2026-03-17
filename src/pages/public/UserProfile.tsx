import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, MapPin, Calendar, Award, Package, Tag, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function UserProfile() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();

  // Mock data based on type
  const profileData = {
    name: type === 'partner' ? 'TechCorp Solutions' : type === 'franchise' ? 'E-SPOT Central Hub' : 'Jane Doe',
    role: type ? type.charAt(0).toUpperCase() + type.slice(1) : 'Member',
    avatar: `https://i.pravatar.cc/150?u=${id || '1'}`,
    cover: `https://picsum.photos/seed/${id || '1'}/1200/400`,
    rating: 4.8,
    reviews: 124,
    location: 'New York, USA',
    joined: 'March 2024',
    verified: true,
    about: `A premier ${type} dedicated to providing top-tier services and products within the E-SPOT ecosystem. We have been recognized for our outstanding contributions and commitment to excellence.`,
    stats: [
      { label: 'Total Sales', value: '1,240+' },
      { label: 'Points Earned', value: '45.2K' },
      { label: 'Events Hosted', value: '12' },
    ],
    products: [
      { id: 1, name: 'Premium Service Package', price: '$299', image: 'https://picsum.photos/seed/p1/300/200' },
      { id: 2, name: 'Consultation Hour', price: '$99', image: 'https://picsum.photos/seed/p2/300/200' },
      { id: 3, name: 'Digital Toolkit', price: '$49', image: 'https://picsum.photos/seed/p3/300/200' },
    ],
    offers: [
      { id: 1, title: 'Summer Discount 20%', validUntil: 'Aug 31, 2026' },
      { id: 2, title: 'Buy 1 Get 1 Free', validUntil: 'Jul 15, 2026' },
    ],
    awards: ['Top Partner 2025', 'Excellence in Service', 'Community Leader'],
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Cover Image */}
      <div className="h-64 md:h-80 w-full relative">
        <img src={profileData.cover} alt="Cover" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60"></div>
        
        <div className="absolute top-0 left-0 w-full p-4 sm:p-6 lg:p-8 z-20">
          <div className="max-w-[1200px] mx-auto">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 relative z-10 overflow-hidden">
        {/* Profile Header Card */}
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
          <img 
            src={profileData.avatar} 
            alt={profileData.name} 
            className="w-28 h-28 md:w-32 md:h-32 rounded-md border-2 border-white shadow object-cover bg-white shrink-0"
            referrerPolicy="no-referrer"
          />
          
          <div className="flex-1 pt-2 w-full">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold text-slate-900">{profileData.name}</h1>
                  {profileData.verified && <CheckCircle2 className="w-5 h-5 text-blue-500" />}
                </div>
                <p className="text-blue-600 font-semibold tracking-wide uppercase text-xs">{profileData.role}</p>
              </div>
              
              <div className="flex gap-2 shrink-0">
                <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors shadow">
                  Contact
                </button>
                <button className="px-5 py-2 bg-white text-slate-700 font-semibold rounded-md border border-slate-200 hover:bg-slate-50 transition-colors shadow">
                  Follow
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-6 text-sm text-slate-600 mb-4">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-bold text-slate-900">{profileData.rating}</span>
                <span>({profileData.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Joined {profileData.joined}</span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              {profileData.about}
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 max-w-2xl mx-auto w-full">
          {profileData.stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-md p-4 border border-gray-200 text-center shadow">
              <div className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          
          {/* Left Column: Products & Offers */}
          <div className="lg:col-span-2 space-y-8">
            {/* Products Section */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  Products & Services
                </h2>
                <Link to="#" className="text-sm font-bold text-blue-600 hover:text-blue-700">View All</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileData.products.map(product => (
                  <div key={product.id} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                    <div className="h-40 w-full bg-gray-100 overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 mb-1">{product.name}</h3>
                      <p className="text-blue-600 font-bold">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offers Section */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-emerald-600" />
                  Current Offers
                </h2>
              </div>
              <div className="space-y-3">
                {profileData.offers.map(offer => (
                  <div key={offer.id} className="flex items-center justify-between p-4 rounded-xl border border-emerald-100 bg-emerald-50/50">
                    <div>
                      <h3 className="font-bold text-emerald-900">{offer.title}</h3>
                      <p className="text-sm text-emerald-700 mt-0.5">Valid until {offer.validUntil}</p>
                    </div>
                    <button className="px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-lg hover:bg-emerald-700 transition-colors">
                      Claim
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Awards & Info */}
          <div className="space-y-8">
            {/* Awards Section */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-amber-500" />
                Awards & Recognition
              </h2>
              <ul className="space-y-4">
                {profileData.awards.map((award, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{award}</p>
                      <p className="text-sm text-slate-500">Verified by E-SPOT</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
