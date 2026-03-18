import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import SubNav from "../../components/SubNav";
import {
  Star,
  Trophy,
  Award,
  PlayCircle,
  Image as ImageIcon,
} from "lucide-react";

export default function Showcase() {
  const subNav = [
    "Featured",
    "Achievers",
    "Talent",
    "Franchise",
    "Projects",
    "Gallery",
  ];
  const [activeTab, setActiveTab] = useState(subNav[0]);

  const featuredItems = [
    {
      id: 1,
      title: "Annual Tech Summit 2025 Highlights",
      type: "Video",
      image: "https://picsum.photos/seed/show1/600/400",
      author: "E-SPOT Media",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      title: "Talent of the Year",
      type: "Award",
      image: "https://picsum.photos/seed/show2/600/400",
      author: "E-SPOT Awards",
    },
    {
      id: 3,
      title: "New Central Hub Opening",
      type: "Gallery",
      image: "https://picsum.photos/seed/show3/600/400",
      author: "Franchise Team",
    },
    {
      id: 4,
      title: "Community Outreach Program",
      type: "Project",
      image: "https://picsum.photos/seed/show4/600/400",
      author: "CSR Initiative",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Showcase"
        subtitle="Celebrating excellence within the E-SPOT community. Discover our top achievers, amazing talents, and successful projects."
      />

      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-gray-900 border-gray-900 bg-gray-50"
      />

      <div className="flex-1 py-8 sm:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {activeTab === "Featured" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="h-48 sm:h-56 w-full relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      <div className="absolute bottom-0 left-0 w-full p-5">
                        <span className="inline-block px-2 py-1 bg-white/90 text-gray-900 text-xs font-medium rounded-md mb-2">
                          {item.type}
                        </span>
                        <h3 className="text-lg font-semibold text-white mb-1 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/70">{item.author}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Achievers" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <h2 className="text-base font-semibold text-gray-900 mb-5">
                Top Achievers of the Year
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    name: "Michael Chen",
                    award: "Innovator of the Year",
                    desc: "For groundbreaking work in sustainable tech solutions.",
                    image: "https://picsum.photos/seed/ach1/200/200",
                  },
                  {
                    name: "Sarah Jenkins",
                    award: "Community Leader",
                    desc: "Outstanding contribution to local outreach programs.",
                    image: "https://picsum.photos/seed/ach2/200/200",
                  },
                  {
                    name: "David Lee",
                    award: "Top Entrepreneur",
                    desc: "Fastest growing startup in the E-SPOT ecosystem.",
                    image: "https://picsum.photos/seed/ach3/200/200",
                  },
                  {
                    name: "Elena Rodriguez",
                    award: "Excellence in Mentorship",
                    desc: "Guided over 50 scholars to successful careers.",
                    image: "https://picsum.photos/seed/ach4/200/200",
                  },
                  {
                    name: "James Wilson",
                    award: "Sustainability Champion",
                    desc: "Implemented zero-waste policies across 10 franchises.",
                    image: "https://picsum.photos/seed/ach5/200/200",
                  },
                  {
                    name: "Anita Patel",
                    award: "Rising Star",
                    desc: "Exceptional performance in the first year of membership.",
                    image: "https://picsum.photos/seed/ach6/200/200",
                  },
                ].map((achiever, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-md transition-all"
                  >
                    <div className="relative inline-block mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100">
                        <img
                          src={achiever.image}
                          alt={achiever.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                      {achiever.name}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                      {achiever.award}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {achiever.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Talent" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <h2 className="text-base font-semibold text-gray-900 mb-5">
                Spotlight on Talent
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Alex Rivera",
                    role: "Full Stack Developer",
                    skills: ["React", "Node.js", "AWS"],
                    image: "https://picsum.photos/seed/tal1/300/300",
                    bio: "Passionate about building scalable web applications and contributing to open source.",
                  },
                  {
                    name: "Samantha Lee",
                    role: "UX/UI Designer",
                    skills: ["Figma", "User Research", "Prototyping"],
                    image: "https://picsum.photos/seed/tal2/300/300",
                    bio: "Creating intuitive and accessible digital experiences that delight users.",
                  },
                  {
                    name: "Marcus Johnson",
                    role: "Data Scientist",
                    skills: ["Python", "Machine Learning", "SQL"],
                    image: "https://picsum.photos/seed/tal3/300/300",
                    bio: "Transforming complex data into actionable insights for business growth.",
                  },
                  {
                    name: "Priya Patel",
                    role: "Marketing Strategist",
                    skills: ["SEO", "Content Creation", "Analytics"],
                    image: "https://picsum.photos/seed/tal4/300/300",
                    bio: "Driving brand awareness and customer engagement through data-driven campaigns.",
                  },
                ].map((talent, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={talent.image}
                        alt={talent.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {talent.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {talent.role}
                      </p>
                      <p className="text-xs text-gray-600 mb-3 flex-1">
                        {talent.bio}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {talent.skills.map((skill, j) => (
                          <span
                            key={j}
                            className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md"
                          >
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

          {activeTab === "Franchise" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <h2 className="text-base font-semibold text-gray-900 mb-5">
                Franchise Success Stories
              </h2>
              <div className="space-y-8">
                {[
                  {
                    name: "E-SPOT Central Hub",
                    location: "New York, NY",
                    growth: "+150% YoY",
                    image: "https://picsum.photos/seed/fran1/800/400",
                    desc: "The flagship franchise that set the standard for community engagement and revenue generation.",
                  },
                  {
                    name: "E-SPOT West Coast",
                    location: "San Francisco, CA",
                    growth: "+120% YoY",
                    image: "https://picsum.photos/seed/fran2/800/400",
                    desc: "Pioneering new tech-focused initiatives and hosting the largest regional events.",
                  },
                ].map((franchise, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row"
                  >
                    <div className="w-full md:w-2/5 h-56 md:h-auto relative">
                      <img
                        src={franchise.image}
                        alt={franchise.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-medium text-gray-900">
                        Top Performing
                      </div>
                    </div>
                    <div className="p-6 md:w-3/5 flex flex-col justify-center">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                        {franchise.location}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {franchise.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {franchise.desc}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium border border-gray-200">
                          Growth: {franchise.growth}
                        </span>
                        <button className="text-gray-600 text-sm font-medium hover:underline">
                          Read Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Projects" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <h2 className="text-base font-semibold text-gray-900 mb-5">
                Innovative Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "EcoTrack App",
                    team: "Green Innovators",
                    status: "Completed",
                    image: "https://picsum.photos/seed/proj1/400/300",
                  },
                  {
                    title: "Community Garden Initiative",
                    team: "Urban Farmers",
                    status: "Ongoing",
                    image: "https://picsum.photos/seed/proj2/400/300",
                  },
                  {
                    title: "Tech for Seniors",
                    team: "Digital Inclusion",
                    status: "Completed",
                    image: "https://picsum.photos/seed/proj3/400/300",
                  },
                  {
                    title: "Clean Water Drive",
                    team: "Global Health",
                    status: "Planning",
                    image: "https://picsum.photos/seed/proj4/400/300",
                  },
                  {
                    title: "Youth Coding Bootcamp",
                    team: "EduTech Leaders",
                    status: "Ongoing",
                    image: "https://picsum.photos/seed/proj5/400/300",
                  },
                  {
                    title: "Renewable Energy Workshop",
                    team: "EcoTech Solutions",
                    status: "Completed",
                    image: "https://picsum.photos/seed/proj6/400/300",
                  },
                ].map((project, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all group"
                  >
                    <div className="h-40 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div
                        className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold ${
                          project.status === "Completed"
                            ? "bg-emerald-100 text-emerald-700"
                            : project.status === "Ongoing"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-sm text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-xs mb-3">
                        By {project.team}
                      </p>
                      <button className="w-full py-2 border border-gray-200 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Gallery" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <h2 className="text-base font-semibold text-gray-900 mb-5">
                Event Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative"
                  >
                    <img
                      src={`https://picsum.photos/seed/gal${i}/400/400`}
                      alt={`Gallery ${i}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fallback for other tabs */}
          {![
            "Featured",
            "Achievers",
            "Talent",
            "Franchise",
            "Projects",
            "Gallery",
          ].includes(activeTab) && (
            <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Star className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-400 mb-2">
                {activeTab} Section
              </h2>
              <p className="text-slate-500">
                Content for {activeTab} is being updated.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
