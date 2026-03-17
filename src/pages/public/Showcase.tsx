import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import SubNav from '../../components/SubNav';
import { Star, Trophy, Award, PlayCircle, Image as ImageIcon } from 'lucide-react';

export default function Showcase() {
  const subNav = ['Featured', 'Achievers', 'Talent', 'Franchise', 'Projects', 'Gallery'];
  const [activeTab, setActiveTab] = useState(subNav[0]);

  const featuredItems = [
    { id: 1, title: 'Annual Tech Summit 2025 Highlights', type: 'Video', image: 'https://picsum.photos/seed/show1/600/400', author: 'E-SPOT Media' },
    { id: 2, name: 'Sarah Jenkins', title: 'Talent of the Year', type: 'Award', image: 'https://picsum.photos/seed/show2/600/400', author: 'E-SPOT Awards' },
    { id: 3, title: 'New Central Hub Opening', type: 'Gallery', image: 'https://picsum.photos/seed/show3/600/400', author: 'Franchise Team' },
    { id: 4, title: 'Community Outreach Program', type: 'Project', image: 'https://picsum.photos/seed/show4/600/400', author: 'CSR Initiative' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        bgColor="bg-purple-900"
        accentColor="text-purple-300"
        title="Showcase"
        subtitle="Celebrating excellence within the E-SPOT community. Discover our top achievers, amazing talents, and successful projects."
        label="Module"
      />

      <SubNav items={subNav} active={activeTab} setActive={setActiveTab} color="text-purple-700 border-purple-500 bg-purple-50" />

      {/* Content Section */}
      <div className="flex-1 py-8 sm:py-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {activeTab === 'Featured' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                {featuredItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-[24px] sm:rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group cursor-pointer">
                    <div className="h-52 sm:h-64 md:h-80 w-full relative overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      
                      {item.type === 'Video' && <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white/80 group-hover:text-white transition-colors" />}
                      {item.type === 'Gallery' && <ImageIcon className="absolute top-4 right-4 w-6 h-6 text-white" />}
                      {item.type === 'Award' && <Trophy className="absolute top-4 right-4 w-6 h-6 text-amber-400" />}
                      
                      <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8">
                        <div className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full mb-3">
                          {item.type}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                        <p className="text-slate-300 font-medium">{item.author}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Achievers' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Top Achievers of the Year</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                {[
                  { name: 'Michael Chen', award: 'Innovator of the Year', desc: 'For groundbreaking work in sustainable tech solutions.', image: 'https://picsum.photos/seed/ach1/200/200' },
                  { name: 'Sarah Jenkins', award: 'Community Leader', desc: 'Outstanding contribution to local outreach programs.', image: 'https://picsum.photos/seed/ach2/200/200' },
                  { name: 'David Lee', award: 'Top Entrepreneur', desc: 'Fastest growing startup in the E-SPOT ecosystem.', image: 'https://picsum.photos/seed/ach3/200/200' },
                  { name: 'Elena Rodriguez', award: 'Excellence in Mentorship', desc: 'Guided over 50 scholars to successful careers.', image: 'https://picsum.photos/seed/ach4/200/200' },
                  { name: 'James Wilson', award: 'Sustainability Champion', desc: 'Implemented zero-waste policies across 10 franchises.', image: 'https://picsum.photos/seed/ach5/200/200' },
                  { name: 'Anita Patel', award: 'Rising Star', desc: 'Exceptional performance in the first year of membership.', image: 'https://picsum.photos/seed/ach6/200/200' }
                ].map((achiever, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-[24px] sm:rounded-3xl p-5 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="relative inline-block mb-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-100">
                        <img src={achiever.image} alt={achiever.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-amber-400 text-white p-2 rounded-full shadow-lg">
                        <Trophy className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{achiever.name}</h3>
                    <p className="text-purple-600 font-bold text-sm mb-4 uppercase tracking-wider">{achiever.award}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{achiever.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Talent' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Spotlight on Talent</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: 'Alex Rivera', role: 'Full Stack Developer', skills: ['React', 'Node.js', 'AWS'], image: 'https://picsum.photos/seed/tal1/300/300', bio: 'Passionate about building scalable web applications and contributing to open source.' },
                  { name: 'Samantha Lee', role: 'UX/UI Designer', skills: ['Figma', 'User Research', 'Prototyping'], image: 'https://picsum.photos/seed/tal2/300/300', bio: 'Creating intuitive and accessible digital experiences that delight users.' },
                  { name: 'Marcus Johnson', role: 'Data Scientist', skills: ['Python', 'Machine Learning', 'SQL'], image: 'https://picsum.photos/seed/tal3/300/300', bio: 'Transforming complex data into actionable insights for business growth.' },
                  { name: 'Priya Patel', role: 'Marketing Strategist', skills: ['SEO', 'Content Creation', 'Analytics'], image: 'https://picsum.photos/seed/tal4/300/300', bio: 'Driving brand awareness and customer engagement through data-driven campaigns.' }
                ].map((talent, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-shadow">
                    <div className="w-full sm:w-40 h-40 rounded-2xl overflow-hidden shrink-0">
                      <img src={talent.image} alt={talent.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900">{talent.name}</h3>
                      <p className="text-purple-600 font-medium mb-3">{talent.role}</p>
                      <p className="text-slate-600 text-sm mb-4 flex-1">{talent.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {talent.skills.map((skill, j) => (
                          <span key={j} className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Franchise' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Franchise Success Stories</h2>
              <div className="space-y-8">
                {[
                  { name: 'E-SPOT Central Hub', location: 'New York, NY', growth: '+150% YoY', image: 'https://picsum.photos/seed/fran1/800/400', desc: 'The flagship franchise that set the standard for community engagement and revenue generation.' },
                  { name: 'E-SPOT West Coast', location: 'San Francisco, CA', growth: '+120% YoY', image: 'https://picsum.photos/seed/fran2/800/400', desc: 'Pioneering new tech-focused initiatives and hosting the largest regional events.' }
                ].map((franchise, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                      <img src={franchise.image} alt={franchise.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-slate-900 flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Top Performing
                      </div>
                    </div>
                    <div className="p-8 md:w-3/5 flex flex-col justify-center">
                      <div className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-2">{franchise.location}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{franchise.name}</h3>
                      <p className="text-slate-600 text-lg mb-6">{franchise.desc}</p>
                      <div className="flex items-center gap-4">
                        <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-bold">
                          Growth: {franchise.growth}
                        </div>
                        <button className="text-purple-600 font-bold hover:underline">Read Case Study</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Projects' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Innovative Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'EcoTrack App', team: 'Green Innovators', status: 'Completed', image: 'https://picsum.photos/seed/proj1/400/300' },
                  { title: 'Community Garden Initiative', team: 'Urban Farmers', status: 'Ongoing', image: 'https://picsum.photos/seed/proj2/400/300' },
                  { title: 'Tech for Seniors', team: 'Digital Inclusion', status: 'Completed', image: 'https://picsum.photos/seed/proj3/400/300' },
                  { title: 'Clean Water Drive', team: 'Global Health', status: 'Planning', image: 'https://picsum.photos/seed/proj4/400/300' },
                  { title: 'Youth Coding Bootcamp', team: 'EduTech Leaders', status: 'Ongoing', image: 'https://picsum.photos/seed/proj5/400/300' },
                  { title: 'Renewable Energy Workshop', team: 'EcoTech Solutions', status: 'Completed', image: 'https://picsum.photos/seed/proj6/400/300' }
                ].map((project, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-all group">
                    <div className="h-48 overflow-hidden relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold ${
                        project.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                        project.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {project.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-slate-900 mb-1">{project.title}</h3>
                      <p className="text-slate-500 text-sm mb-4">By {project.team}</p>
                      <button className="w-full py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Gallery' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Event Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative">
                    <img src={`https://picsum.photos/seed/gal${i}/400/400`} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fallback for other tabs */}
          {!['Featured', 'Achievers', 'Talent', 'Franchise', 'Projects', 'Gallery'].includes(activeTab) && (
            <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Star className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-400 mb-2">{activeTab} Section</h2>
              <p className="text-slate-500">Content for {activeTab} is being updated.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
