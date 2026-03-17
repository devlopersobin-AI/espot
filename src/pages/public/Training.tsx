import React, { useMemo, useState } from 'react';
import Hero from '../../components/Hero';
import { Link } from 'react-router-dom';
import SubNav from '../../components/SubNav';
import QuickRegisterForm from '../../components/forms/QuickRegisterForm';
import { Search, Briefcase, GraduationCap, Users, Star, ArrowRight, BookOpen, Calendar, Target } from 'lucide-react';

export default function Training() {
  const subNav = ['Search Jobs', 'Top Jobs', 'Top Talents', 'Top Trainers', 'Courses', 'Academic Pathways'];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const [jobQuery, setJobQuery] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobType, setJobType] = useState('Job Type');
  const [experienceLevel, setExperienceLevel] = useState('Experience Level');
  const [talentQuery, setTalentQuery] = useState('');
  const [courseQuery, setCourseQuery] = useState('');
  const [applicationTarget, setApplicationTarget] = useState<string | null>(null);

  const topTrainers = [
    { id: 1, name: 'Dr. Alice Smith', specialty: 'Data Science', rating: 4.9, students: 1200, image: 'https://picsum.photos/seed/t1/150/150' },
    { id: 2, name: 'John Doe', specialty: 'Web Development', rating: 4.8, students: 3400, image: 'https://picsum.photos/seed/t2/150/150' },
    { id: 3, name: 'Sarah Jenkins', specialty: 'Digital Marketing', rating: 4.9, students: 850, image: 'https://picsum.photos/seed/t3/150/150' },
    { id: 4, name: 'Michael Chen', specialty: 'UX/UI Design', rating: 4.7, students: 2100, image: 'https://picsum.photos/seed/t4/150/150' },
  ];

  const topJobs = [
    { id: 1, title: 'Senior Frontend Developer', company: 'TechCorp', location: 'Remote', salary: '$120k - $150k', type: 'Full-time', level: 'Senior Level' },
    { id: 2, title: 'Marketing Manager', company: 'GlobalReach', location: 'New York, NY', salary: '$90k - $110k', type: 'Full-time', level: 'Mid Level' },
    { id: 3, title: 'Data Analyst', company: 'DataSys', location: 'London, UK', salary: '£50k - £70k', type: 'Contract', level: 'Entry Level' },
    { id: 4, title: 'Product Designer', company: 'Nova Labs', location: 'Remote', salary: '$80k - $105k', type: 'Part-time', level: 'Mid Level' },
  ];

  const topTalents = [
    { name: 'Elena Rodriguez', role: 'Full Stack Developer', skills: ['React', 'Node.js', 'TypeScript'], image: 'https://picsum.photos/seed/tal1/150/150' },
    { name: 'David Kim', role: 'Product Designer', skills: ['UI/UX', 'Figma', 'User Research'], image: 'https://picsum.photos/seed/tal2/150/150' },
    { name: 'Aisha Patel', role: 'Data Scientist', skills: ['Python', 'Machine Learning', 'SQL'], image: 'https://picsum.photos/seed/tal3/150/150' },
    { name: 'Marcus Johnson', role: 'Marketing Strategist', skills: ['SEO', 'Content', 'Analytics'], image: 'https://picsum.photos/seed/tal4/150/150' },
    { name: 'Sarah Wu', role: 'Project Manager', skills: ['Agile', 'Scrum', 'Jira'], image: 'https://picsum.photos/seed/tal5/150/150' },
    { name: 'James Wilson', role: 'DevOps Engineer', skills: ['AWS', 'Docker', 'Kubernetes'], image: 'https://picsum.photos/seed/tal6/150/150' }
  ];

  const courses = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: `Complete Full-Stack Web Development Bootcamp ${index + 1}`,
    instructor: 'John Doe',
    category: index % 2 === 0 ? 'Development' : 'Leadership',
    price: '$89.99',
    rating: '4.8',
    image: `https://picsum.photos/seed/course${index + 1}/400/200`,
  }));

  const filteredJobs = useMemo(() => {
    return topJobs.filter((job) => {
      const queryMatch =
        job.title.toLowerCase().includes(jobQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(jobQuery.toLowerCase());
      const locationMatch = !jobLocation || job.location.toLowerCase().includes(jobLocation.toLowerCase());
      const typeMatch = jobType === 'Job Type' || job.type === jobType;
      const levelMatch = experienceLevel === 'Experience Level' || job.level === experienceLevel;
      return queryMatch && locationMatch && typeMatch && levelMatch;
    });
  }, [experienceLevel, jobLocation, jobQuery, jobType, topJobs]);

  const filteredTalents = useMemo(() => {
    return topTalents.filter((talent) => {
      const haystack = `${talent.name} ${talent.role} ${talent.skills.join(' ')}`.toLowerCase();
      return haystack.includes(talentQuery.toLowerCase());
    });
  }, [talentQuery, topTalents]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const haystack = `${course.title} ${course.instructor} ${course.category}`.toLowerCase();
      return haystack.includes(courseQuery.toLowerCase());
    });
  }, [courseQuery, courses]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        bgColor="bg-slate-900"
        accentColor="text-blue-400"
        title="Training & Jobs"
        subtitle="Upskill with top trainers, discover academic pathways, and land your dream job. Your career journey starts here."
        label="Module"
      />

      {/* Sub Navigation */}
      <SubNav items={subNav} active={activeTab} setActive={setActiveTab} color="text-blue-700 border-blue-500 bg-blue-50" />

      {/* Content Section */}
      <div className="flex-1 py-8 sm:py-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {activeTab === 'Top Jobs' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
              {applicationTarget ? (
                <QuickRegisterForm
                  heading="Job Application"
                  targetLabel={applicationTarget}
                  submitLabel="Submit Application"
                  onClose={() => setApplicationTarget(null)}
                />
              ) : null}

              <h2 className="text-2xl font-bold text-slate-900 mb-6">Recommended Jobs</h2>
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{job.title}</h3>
                      <div className="text-slate-500 text-sm mt-1 flex flex-wrap gap-x-4 gap-y-1">
                        <span>{job.company}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-3">
                    <div className="font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm inline-block">
                      {job.salary}
                    </div>
                    <button
                      type="button"
                      onClick={() => setApplicationTarget(job.title)}
                      className="text-blue-600 font-bold text-sm hover:underline"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
              {filteredJobs.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">No jobs match your current filters.</div>}
            </div>
          )}

          {activeTab === 'Top Trainers' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Instructors</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topTrainers.map((trainer) => (
                  <Link key={trainer.id} to={`/profile/trainer/${trainer.id}`} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-300 transition-all group">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-slate-50 group-hover:ring-blue-50 transition-all">
                      <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{trainer.name}</h3>
                    <p className="text-sm text-slate-500 mb-3">{trainer.specialty}</p>
                    <div className="flex items-center justify-center gap-4 text-sm font-medium">
                      <div className="flex items-center text-amber-600">
                        <Star className="w-4 h-4 mr-1 fill-amber-500 text-amber-500" /> {trainer.rating}
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Users className="w-4 h-4 mr-1" /> {trainer.students}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Courses' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input value={courseQuery} onChange={(e) => setCourseQuery(e.target.value)} placeholder="Search courses or categories" className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-32 bg-slate-200 relative">
                    <img src={course.image} alt="Course" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-800">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">By {course.instructor}</p>
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-lg text-slate-900">{course.price}</div>
                      <div className="flex items-center text-sm font-bold text-amber-600">
                        {course.rating} <Star className="w-4 h-4 ml-1 fill-amber-500" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
              {filteredCourses.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">No courses match your search.</div>}
            </div>
          )}

          {activeTab === 'Search Jobs' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Find Your Next Opportunity</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Keywords</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input value={jobQuery} onChange={(e) => setJobQuery(e.target.value)} type="text" placeholder="Job title, skills, or company" className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                    <input value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} type="text" placeholder="City, state, or remote" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex gap-4">
                    <select value={jobType} onChange={(e) => setJobType(e.target.value)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 outline-none">
                      <option>Job Type</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                    </select>
                    <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 outline-none">
                      <option>Experience Level</option>
                      <option>Entry Level</option>
                      <option>Mid Level</option>
                      <option>Senior Level</option>
                    </select>
                  </div>
                  <div className="bg-blue-50 text-blue-700 font-bold py-2 px-4 rounded-lg">{filteredJobs.length} results</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Recent Postings</h3>
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 text-blue-600 font-bold text-xl">
                        {job.company.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900">{job.title}</h4>
                        <div className="text-slate-500 text-sm mt-1 flex flex-wrap gap-x-4 gap-y-1">
                          <span>{job.company}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 font-bold text-sm hover:underline whitespace-nowrap">View Details</button>
                  </div>
                ))}
                {filteredJobs.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">No recent postings match your search.</div>}
              </div>
            </div>
          )}

          {activeTab === 'Top Talents' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Discover Top Talent</h2>
                  <p className="text-slate-600">Connect with highly skilled professionals in the E-SPOT network.</p>
                </div>
              </div>
              <div className="relative max-w-md mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input value={talentQuery} onChange={(e) => setTalentQuery(e.target.value)} placeholder="Search by name, role, or skill" className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTalents.map((talent, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={talent.image} alt={talent.name} className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">{talent.name}</h3>
                        <p className="text-sm text-slate-500">{talent.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {talent.skills.map((skill, j) => (
                        <span key={j} className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button className="w-full py-2 border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
              {filteredTalents.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">No talent profiles match your search.</div>}
            </div>
          )}

          {activeTab === 'Academic Pathways' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Map Your Educational Journey</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Explore structured learning paths designed to take you from beginner to industry expert in high-demand fields.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { title: 'Software Engineering', duration: '12-18 Months', level: 'Beginner to Advanced', desc: 'Master frontend and backend development, databases, and deployment strategies.' },
                  { title: 'Data Science & Analytics', duration: '9-12 Months', level: 'Intermediate', desc: 'Learn statistical analysis, machine learning algorithms, and data visualization techniques.' },
                  { title: 'Digital Marketing Leadership', duration: '6-9 Months', level: 'Beginner to Intermediate', desc: 'Develop comprehensive marketing strategies, SEO optimization, and campaign management skills.' }
                ].map((pathway, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                        <BookOpen className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{pathway.title}</h3>
                        <p className="text-slate-600 mb-4">{pathway.desc}</p>
                        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                          <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full"><Calendar className="w-4 h-4" /> {pathway.duration}</span>
                          <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full"><Target className="w-4 h-4" /> {pathway.level}</span>
                        </div>
                      </div>
                      <button className="shrink-0 bg-slate-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2">
                        Explore Path <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fallback for other tabs */}
          {!['Search Jobs', 'Top Jobs', 'Top Talents', 'Top Trainers', 'Courses', 'Academic Pathways'].includes(activeTab) && (
            <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <GraduationCap className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-400 mb-2">{activeTab} Section</h2>
              <p className="text-slate-500">Content for {activeTab} is being updated.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
