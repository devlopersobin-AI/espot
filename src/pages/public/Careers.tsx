import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Search,
  Users,
} from "lucide-react";

import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";
import SubNav from "../../components/SubNav";

export default function Careers() {
  const subNav = [
    "Open Positions",
    "Search Jobs",
    "Browse Jobs",
    "Top Talents",
  ];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const navigate = useNavigate();
  const [jobQuery, setJobQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("Job Type");
  const [experienceLevel, setExperienceLevel] = useState("Experience Level");
  const [talentQuery, setTalentQuery] = useState("");

  const topJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$120k - $150k",
      type: "Full-time",
      level: "Senior Level",
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "GlobalReach",
      location: "New York, NY",
      salary: "$90k - $110k",
      type: "Full-time",
      level: "Mid Level",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "DataSys",
      location: "London, UK",
      salary: "£50k - £70k",
      type: "Contract",
      level: "Entry Level",
    },
    {
      id: 4,
      title: "Product Designer",
      company: "Nova Labs",
      location: "Remote",
      salary: "$80k - $105k",
      type: "Part-time",
      level: "Mid Level",
    },
  ];

  const topTalents = [
    {
      name: "Elena Rodriguez",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "TypeScript"],
      image: "https://picsum.photos/seed/tal1/150/150",
    },
    {
      name: "David Kim",
      role: "Product Designer",
      skills: ["UI/UX", "Figma", "User Research"],
      image: "https://picsum.photos/seed/tal2/150/150",
    },
    {
      name: "Aisha Patel",
      role: "Data Scientist",
      skills: ["Python", "Machine Learning", "SQL"],
      image: "https://picsum.photos/seed/tal3/150/150",
    },
    {
      name: "Marcus Johnson",
      role: "Marketing Strategist",
      skills: ["SEO", "Content", "Analytics"],
      image: "https://picsum.photos/seed/tal4/150/150",
    },
    {
      name: "Sarah Wu",
      role: "Project Manager",
      skills: ["Agile", "Scrum", "Jira"],
      image: "https://picsum.photos/seed/tal5/150/150",
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer",
      skills: ["AWS", "Docker", "Kubernetes"],
      image: "https://picsum.photos/seed/tal6/150/150",
    },
  ];

  const filteredJobs = useMemo(() => {
    return topJobs.filter((job) => {
      const queryMatch =
        job.title.toLowerCase().includes(jobQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(jobQuery.toLowerCase());
      const locationMatch =
        !jobLocation ||
        job.location.toLowerCase().includes(jobLocation.toLowerCase());
      const typeMatch = jobType === "Job Type" || job.type === jobType;
      const levelMatch =
        experienceLevel === "Experience Level" || job.level === experienceLevel;
      return queryMatch && locationMatch && typeMatch && levelMatch;
    });
  }, [experienceLevel, jobLocation, jobQuery, jobType]);

  const filteredTalents = useMemo(() => {
    return topTalents.filter((talent) => {
      const haystack =
        `${talent.name} ${talent.role} ${talent.skills.join(" ")}`.toLowerCase();
      return haystack.includes(talentQuery.toLowerCase());
    });
  }, [talentQuery]);

  const openPositions = [
    {
      id: 1,
      title: "Senior Equestrian Instructor",
      department: "Horse Services",
      location: "Kathmandu, Nepal",
      type: "Full-time",
      description:
        "We are looking for an experienced equestrian instructor to lead our horse riding programs.",
      requirements: [
        "5+ years of experience",
        "Certification in horse riding",
        "Team leadership skills",
        "Customer service excellence",
      ],
    },
    {
      id: 2,
      title: "Event Manager",
      department: "Events & Wedding Management",
      location: "Kathmandu, Nepal",
      type: "Full-time",
      description:
        "Join our dynamic event management team and organize memorable events and weddings.",
      requirements: [
        "3+ years of event management experience",
        "Project management skills",
        "Vendor management",
        "Creative problem-solving",
      ],
    },
    {
      id: 3,
      title: "Marketing Specialist",
      department: "Marketing & Communications",
      location: "Remote",
      type: "Full-time",
      description:
        "Help us grow our brand through digital marketing and content creation strategies.",
      requirements: [
        "3+ years of marketing experience",
        "Social media expertise",
        "Content creation skills",
        "Analytics proficiency",
      ],
    },
    {
      id: 4,
      title: "Travel Consultant",
      department: "Tours & Travel",
      location: "Kathmandu, Nepal",
      type: "Full-time",
      description:
        "Create unforgettable travel experiences for our clients across the globe.",
      requirements: [
        "2+ years of travel industry experience",
        "Destination knowledge",
        "Excellent communication",
        "Problem-solving abilities",
      ],
    },
    {
      id: 5,
      title: "Wellness Coach",
      department: "Wellness & Fitness",
      location: "Kathmandu, Nepal",
      type: "Part-time",
      description:
        "Guide our clients towards healthier lifestyles through customized wellness programs.",
      requirements: [
        "Certification in fitness/wellness",
        "Nutrition knowledge",
        "Coaching skills",
        "Passion for health",
      ],
    },
    {
      id: 6,
      title: "Videographer & Editor",
      department: "Multimedia Production",
      location: "Kathmandu, Nepal",
      type: "Full-time",
      description:
        "Create stunning visual content for our events, weddings, and corporate clients.",
      requirements: [
        "3+ years of videography experience",
        "Video editing proficiency",
        "Creativity",
        "Equipment knowledge",
      ],
    },
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health insurance",
    "Professional development opportunities",
    "Flexible working arrangements",
    "Team building activities and events",
    "Career growth and advancement",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero
        bgColor="bg-blue-900"
        accentColor="text-blue-300"
        title="Careers"
        subtitle="Browse open roles, search the job market, or discover top talent across the E-SPOT network."
        label="Module"
      />

      {/* Company Culture Stories */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Life at E-SPOT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-blue-700 mb-2">
                Collaborative Teams
              </h3>
              <p className="text-slate-700 text-sm">
                We foster a culture of open communication, cross-functional
                teamwork, and shared success. Every voice matters.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-blue-700 mb-2">
                Growth Mindset
              </h3>
              <p className="text-slate-700 text-sm">
                Continuous learning is at our core. We support upskilling,
                mentorship, and career advancement for all employees.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-blue-700 mb-2">
                Diversity & Inclusion
              </h3>
              <p className="text-slate-700 text-sm">
                Our team is global and diverse. We celebrate different
                backgrounds, perspectives, and ideas to drive innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">
            What Our Team Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col gap-3">
              <p className="text-slate-700 italic">
                “E-SPOT gave me the freedom to innovate and the support to grow.
                The team spirit here is unmatched!”
              </p>
              <div className="flex items-center gap-3 mt-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Elena"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <span className="font-bold text-blue-700">
                    Elena Rodriguez
                  </span>
                  <span className="block text-xs text-slate-500">
                    Full Stack Developer
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col gap-3">
              <p className="text-slate-700 italic">
                “From day one, I felt welcomed and empowered. The leadership
                truly cares about our well-being and success.”
              </p>
              <div className="flex items-center gap-3 mt-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="David"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <span className="font-bold text-blue-700">David Kim</span>
                  <span className="block text-xs text-slate-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Timeline */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">
            Our Hiring Process
          </h2>
          <ol className="relative border-l-2 border-blue-200 ml-4">
            <li className="mb-10 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold">
                1
              </span>
              <h3 className="font-semibold text-blue-700">Apply Online</h3>
              <p className="text-slate-700 text-sm">
                Submit your application for any open role or send us your resume
                for future opportunities.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold">
                2
              </span>
              <h3 className="font-semibold text-blue-700">
                Screening & Interview
              </h3>
              <p className="text-slate-700 text-sm">
                Our team reviews your profile and arranges interviews to get to
                know you and your skills.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold">
                3
              </span>
              <h3 className="font-semibold text-blue-700">
                Offer & Onboarding
              </h3>
              <p className="text-slate-700 text-sm">
                If selected, you’ll receive an offer and a personalized
                onboarding plan to help you succeed from day one.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-blue-700 mb-1">
                Can I apply for multiple positions?
              </h3>
              <p className="text-slate-700 text-sm">
                Yes, you are welcome to apply for any roles that match your
                skills and interests.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 mb-1">
                Do you offer remote work options?
              </h3>
              <p className="text-slate-700 text-sm">
                Many of our roles are hybrid or fully remote. Check the job
                description for details.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 mb-1">
                What is the interview process like?
              </h3>
              <p className="text-slate-700 text-sm">
                Our process typically includes a screening call, technical or
                role-specific interviews, and a culture fit discussion.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 mb-1">
                How soon will I hear back after applying?
              </h3>
              <p className="text-slate-700 text-sm">
                We aim to respond to all applicants within 1-2 weeks of
                receiving your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-blue-700 border-blue-500 bg-blue-50"
      />

      <div className="flex-1 py-8 sm:py-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {activeTab === "Open Positions" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    label: "Open Roles",
                    value: "06+",
                    note: "Active hiring across units",
                  },
                  {
                    label: "Work Modes",
                    value: "Hybrid",
                    note: "Remote and on-site teams",
                  },
                  {
                    label: "Growth Tracks",
                    value: "12",
                    note: "Specialist and leadership paths",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 mb-2">
                      {item.label}
                    </p>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">
                      {item.value}
                    </h2>
                    <p className="text-sm text-slate-600">{item.note}</p>
                  </div>
                ))}
              </div>

              {/* Why Join Us */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 mb-2">
                  Culture
                </p>
                <h2 className="text-xl font-semibold mb-3 text-slate-900">
                  Why Work With Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-full bg-blue-600 text-white">
                        <ArrowRight size={16} />
                      </div>
                      <p className="text-sm text-gray-800 pt-1">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Open Positions */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 mb-2">
                  Hiring Now
                </p>
                <h2 className="text-xl font-semibold mb-3 text-slate-900">
                  Open Positions
                </h2>

                {/* Navigation to signup page replaces QuickRegisterForm */}

                <div className="space-y-5">
                  {openPositions.map((position) => (
                    <div
                      key={position.id}
                      className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="mb-3">
                        <h3 className="text-base font-semibold text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                          <div className="flex items-center gap-1">
                            <Briefcase size={15} />
                            <span>{position.department}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={15} />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={15} />
                            <span>{position.type}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        {position.description}
                      </p>
                      <div className="mb-5">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">
                          Requirements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                          {position.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          navigate("/auth?mode=signup&role=Jobseeker")
                        }
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Apply Now <ArrowRight size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-blue-600 text-white py-12 px-6 md:px-10 rounded-3xl text-center">
                <h2 className="text-xl font-semibold mb-3">
                  Don't See Your Dream Role?
                </h2>
                <p className="text-blue-100 mb-6 text-sm">
                  Send us your resume and let us know how you'd like to
                  contribute.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm"
                >
                  Contact Us <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          )}

          {activeTab === "Search Jobs" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-5">
                  Find Your Next Opportunity
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Keywords
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        value={jobQuery}
                        onChange={(e) => setJobQuery(e.target.value)}
                        type="text"
                        placeholder="Job title, skills, or company"
                        className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Location
                    </label>
                    <input
                      value={jobLocation}
                      onChange={(e) => setJobLocation(e.target.value)}
                      type="text"
                      placeholder="City, state, or remote"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 items-center justify-between">
                  <div className="flex gap-3">
                    <select
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                      className="px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 outline-none"
                    >
                      <option>Job Type</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                    </select>
                    <select
                      value={experienceLevel}
                      onChange={(e) => setExperienceLevel(e.target.value)}
                      className="px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 outline-none"
                    >
                      <option>Experience Level</option>
                      <option>Entry Level</option>
                      <option>Mid Level</option>
                      <option>Senior Level</option>
                    </select>
                  </div>
                  <div className="bg-blue-50 text-blue-700 font-bold py-1.5 px-3 rounded-lg text-sm">
                    {filteredJobs.length} results
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 text-base">
                  Recent Postings
                </h3>
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 text-blue-600 font-bold text-lg">
                        {job.company.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-slate-900">
                          {job.title}
                        </h4>
                        <div className="text-slate-500 text-sm mt-1 flex flex-wrap gap-x-3 gap-y-1">
                          <span>{job.company}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm">
                        {job.salary}
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          navigate("/auth?mode=signup&role=Jobseeker")
                        }
                        className="text-blue-600 font-bold text-sm hover:underline"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
                {filteredJobs.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                    No jobs match your current filters.
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "Browse Jobs" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 max-w-4xl">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                  Recommended Jobs
                </h2>
                <span className="text-sm text-slate-500">
                  {topJobs.length} listings
                </span>
              </div>
              {topJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900">
                        {job.title}
                      </h3>
                      <div className="text-slate-500 text-sm mt-1 flex flex-wrap gap-x-3 gap-y-1">
                        <span>{job.company}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                      <span className="inline-block mt-2 text-xs bg-slate-100 px-2 py-0.5 rounded font-medium text-slate-600">
                        {job.level}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm">
                      {job.salary}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        navigate("/auth?mode=signup&role=Jobseeker")
                      }
                      className="text-blue-600 font-bold text-sm hover:underline"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Top Talents" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Discover Top Talent
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Connect with skilled professionals in the E-SPOT network.
                  </p>
                </div>
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    value={talentQuery}
                    onChange={(e) => setTalentQuery(e.target.value)}
                    placeholder="Search by name, role, or skill"
                    className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTalents.map((talent, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={talent.image}
                        alt={talent.name}
                        className="w-14 h-14 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h3 className="font-bold text-base text-slate-900">
                          {talent.name}
                        </h3>
                        <p className="text-sm text-slate-500">{talent.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {talent.skills.map((skill, j) => (
                        <span
                          key={j}
                          className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        navigate("/auth?mode=signup&role=Jobseeker")
                      }
                      className="w-full py-2 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      <Users className="w-4 h-4" /> Connect
                    </button>
                  </div>
                ))}
              </div>
              {filteredTalents.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                  No talent profiles match your search.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
