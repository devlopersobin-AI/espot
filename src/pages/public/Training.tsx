import React, { useMemo, useState } from "react";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search, Users, Star, ArrowRight, BookOpen, Calendar,
  Target, CheckCircle, Award, Clock, Zap, TrendingUp,
  GraduationCap, Play, ChevronRight, Sparkles, BarChart2,
  Briefcase, Globe, Monitor, Cpu,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500 mb-2">{children}</p>
);

type Tab = "Courses" | "Top Trainers" | "Academic Pathways" | "Programs";

export default function Training() {
  const [activeTab, setActiveTab] = useState<Tab>("Courses");
  const [courseQuery, setCourseQuery] = useState("");
  const [trainerQuery, setTrainerQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const COURSES = [
    { id: 1, title: "Full-Stack Web Development Bootcamp", instructor: "John Doe", category: "Development", price: "$89", duration: "12 weeks", level: "Beginner", rating: 4.9, students: 3400, image: "https://picsum.photos/seed/course1/400/220" },
    { id: 2, title: "Data Science & Machine Learning", instructor: "Dr. Alice Smith", category: "Data Science", price: "$119", duration: "16 weeks", level: "Intermediate", rating: 4.8, students: 2100, image: "https://picsum.photos/seed/course2/400/220" },
    { id: 3, title: "Digital Marketing Mastery", instructor: "Sarah Jenkins", category: "Marketing", price: "$69", duration: "8 weeks", level: "Beginner", rating: 4.7, students: 5600, image: "https://picsum.photos/seed/course3/400/220" },
    { id: 4, title: "UX/UI Design Fundamentals", instructor: "Michael Chen", category: "Design", price: "$79", duration: "10 weeks", level: "Beginner", rating: 4.8, students: 1800, image: "https://picsum.photos/seed/course4/400/220" },
    { id: 5, title: "Corporate Leadership & Strategy", instructor: "Dr. Alice Smith", category: "Leadership", price: "$149", duration: "6 weeks", level: "Advanced", rating: 4.9, students: 980, image: "https://picsum.photos/seed/course5/400/220" },
    { id: 6, title: "Cloud Architecture & DevOps", instructor: "John Doe", category: "Development", price: "$129", duration: "14 weeks", level: "Advanced", rating: 4.7, students: 1250, image: "https://picsum.photos/seed/course6/400/220" },
  ];

  const TRAINERS = [
    { id: 1, name: "Dr. Alice Smith", specialty: "Data Science & AI", rating: 4.9, students: 12000, courses: 8, bio: "PhD from MIT, 12 years in AI research and enterprise analytics.", image: "https://picsum.photos/seed/t1/150/150" },
    { id: 2, name: "John Doe", specialty: "Web Development", rating: 4.8, students: 34000, courses: 12, bio: "Senior engineer at Google for 8 years, now full-time educator.", image: "https://picsum.photos/seed/t2/150/150" },
    { id: 3, name: "Sarah Jenkins", specialty: "Digital Marketing", rating: 4.9, students: 8500, courses: 6, bio: "CMO background, grew 3 brands from zero to $10M ARR.", image: "https://picsum.photos/seed/t3/150/150" },
    { id: 4, name: "Michael Chen", specialty: "UX/UI Design", rating: 4.7, students: 21000, courses: 9, bio: "Ex-Apple designer, creator of the Human-First Design framework.", image: "https://picsum.photos/seed/t4/150/150" },
  ];

  const PATHWAYS = [
    { title: "Software Engineering", icon: Cpu, duration: "12–18 Months", level: "Beginner to Advanced", desc: "Master frontend, backend, databases, cloud deployment and system design.", steps: ["HTML/CSS/JS Fundamentals", "React & Node.js", "Databases & APIs", "Cloud & DevOps", "Portfolio & Job Prep"], color: "from-blue-500 to-blue-600" },
    { title: "Data Science & Analytics", icon: BarChart2, duration: "9–12 Months", level: "Intermediate", desc: "Statistical analysis, ML algorithms, Python, and enterprise data visualization.", steps: ["Statistics & Python", "Pandas & Visualization", "Machine Learning", "Deep Learning Basics", "Capstone Project"], color: "from-purple-500 to-purple-600" },
    { title: "Digital Marketing Leadership", icon: TrendingUp, duration: "6–9 Months", level: "Beginner to Intermediate", desc: "Build comprehensive digital strategies, SEO, paid ads, and content systems.", steps: ["SEO & Content Strategy", "Paid Media & PPC", "Social Media Marketing", "Analytics & Attribution", "Growth Leadership"], color: "from-orange-500 to-amber-500" },
  ];

  const PROGRAMS = [
    { title: "Corporate Leadership Training", duration: "2 Days", mode: "In-person", price: "$499", seats: 24, icon: Briefcase, color: "bg-blue-50 text-blue-600 border-blue-100" },
    { title: "Digital Skills Bootcamp", duration: "4 Weeks", mode: "Online", price: "$299", seats: 80, icon: Monitor, color: "bg-purple-50 text-purple-600 border-purple-100" },
    { title: "Executive Coaching Program", duration: "3 Months", mode: "Hybrid", price: "$1,299", seats: 12, icon: Award, color: "bg-amber-50 text-amber-600 border-amber-100" },
    { title: "Team Performance Workshop", duration: "1 Day", mode: "In-person", price: "$199", seats: 30, icon: Users, color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  ];

  const categories = ["All", ...Array.from(new Set(COURSES.map((c) => c.category)))];
  const filteredCourses = useMemo(() => COURSES.filter((c) => {
    const match = `${c.title} ${c.instructor} ${c.category}`.toLowerCase().includes(courseQuery.toLowerCase());
    const cat = categoryFilter === "All" || c.category === categoryFilter;
    return match && cat;
  }), [courseQuery, categoryFilter]);

  const filteredTrainers = useMemo(() => TRAINERS.filter((t) =>
    `${t.name} ${t.specialty}`.toLowerCase().includes(trainerQuery.toLowerCase())
  ), [trainerQuery]);

  const tabs: Tab[] = ["Courses", "Top Trainers", "Academic Pathways", "Programs"];
  const tabIcons: Record<Tab, React.ReactNode> = {
    Courses: <BookOpen className="w-4 h-4" />,
    "Top Trainers": <Users className="w-4 h-4" />,
    "Academic Pathways": <GraduationCap className="w-4 h-4" />,
    Programs: <Briefcase className="w-4 h-4" />,
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <Hero
        label="Training Academy"
        title="Master the Skills of Tomorrow"
        subtitle="Accelerate your career with world-class trainers and structured learning pathways. From digital bootcamps to executive leadership coaching."
        image="https://images.unsplash.com/photo-1523050353051-f3f1e7f353a2?auto=format&fit=crop&w=1600&q=80"
        accentColor="text-blue-400"
      />

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <section className="bg-blue-600 py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[["50+", "Courses Available"], ["120+", "Expert Instructors"], ["6,400+", "Students Enrolled"], ["4.8★", "Average Rating"]].map(([v, l]) => (
              <div key={l}>
                <p className="text-2xl font-bold text-white">{v}</p>
                <p className="text-blue-200 text-sm mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAB NAV ──────────────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"}`}>
                {tabIcons[tab]} {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── TAB CONTENT ──────────────────────────────────────────────────────── */}
      <div className="flex-1 py-14 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── COURSES TAB ─────────────────────────────────────────────────── */}
          {activeTab === "Courses" && (
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
                <div>
                  <SectionLabel>Course Library</SectionLabel>
                  <h2 className="text-2xl font-bold text-slate-900">Browse All Courses</h2>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input value={courseQuery} onChange={(e) => setCourseQuery(e.target.value)} placeholder="Search courses..." className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 w-64" />
                  </div>
                  <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30">
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </motion.div>

              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredCourses.map((course) => (
                  <motion.div key={course.id} variants={fadeUp} whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all">
                    <div className="h-44 bg-slate-200 relative overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-2.5 py-1 rounded-full text-slate-800">{course.category}</div>
                      <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">{course.level}</div>
                      <button className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all">
                        <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
                      </button>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 leading-snug mb-1 line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-slate-500 mb-3">by {course.instructor}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {course.students.toLocaleString()}</span>
                        <span className="flex items-center gap-1 text-amber-600 font-semibold"><Star className="w-3.5 h-3.5 fill-amber-500" /> {course.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-slate-900">{course.price}</span>
                        <Link to="/auth?mode=signup&role=Trainee" className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-all flex items-center gap-1.5">
                          Enroll Now <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              {filteredCourses.length === 0 && (
                <div className="text-center py-20 text-slate-400">
                  <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="font-semibold">No courses found</p>
                </div>
              )}
            </motion.div>
          )}

          {/* ── TOP TRAINERS TAB ─────────────────────────────────────────────── */}
          {activeTab === "Top Trainers" && (
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
                <div>
                  <SectionLabel>Expert Educators</SectionLabel>
                  <h2 className="text-2xl font-bold text-slate-900">Meet Our Top Trainers</h2>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input value={trainerQuery} onChange={(e) => setTrainerQuery(e.target.value)} placeholder="Search trainers..." className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 w-64" />
                </div>
              </motion.div>
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredTrainers.map((trainer) => (
                  <motion.div key={trainer.id} variants={fadeUp} whileHover={{ y: -4 }} className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200 transition-all">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-slate-50">
                      <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-0.5">{trainer.name}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-3">{trainer.specialty}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{trainer.bio}</p>
                    <div className="flex items-center justify-center gap-4 text-xs mb-4">
                      <span className="flex items-center gap-1 text-amber-600 font-bold"><Star className="w-3.5 h-3.5 fill-amber-500" /> {trainer.rating}</span>
                      <span className="text-slate-500">{(trainer.students / 1000).toFixed(0)}K students</span>
                      <span className="text-slate-500">{trainer.courses} courses</span>
                    </div>
                    <Link to={`/profile/trainer/${trainer.id}`} className="w-full py-2 border border-blue-600 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-1">
                      View Profile <ArrowRight className="w-3 h-3" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* ── ACADEMIC PATHWAYS TAB ────────────────────────────────────────── */}
          {activeTab === "Academic Pathways" && (
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <SectionLabel>Structured Learning</SectionLabel>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Map Your Educational Journey</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">Structured, expert-curated pathways designed to take you from beginner to industry expert in high-demand fields.</p>
              </motion.div>
              <motion.div variants={stagger} className="space-y-6">
                {PATHWAYS.map((pathway) => (
                  <motion.div key={pathway.title} variants={fadeUp} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                    <div className={`h-1.5 bg-gradient-to-r ${pathway.color}`} />
                    <div className="p-7 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">
                      <div className="flex gap-5 items-start">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pathway.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <pathway.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">{pathway.title}</h3>
                          <p className="text-sm text-slate-600 leading-relaxed mb-4">{pathway.desc}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full"><Calendar className="w-3.5 h-3.5" /> {pathway.duration}</span>
                            <span className="flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full"><Target className="w-3.5 h-3.5" /> {pathway.level}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {pathway.steps.map((step, i) => (
                              <span key={step} className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                                {step}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Link to="/auth?mode=signup&role=Trainee" className="flex-shrink-0 px-5 py-3 bg-slate-900 text-white font-bold rounded-xl text-sm flex items-center gap-2 hover:bg-slate-800 transition-all">
                        Start Path <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* ── PROGRAMS TAB ─────────────────────────────────────────────────── */}
          {activeTab === "Programs" && (
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <SectionLabel>Professional Development</SectionLabel>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Live Training Programs</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">Intensive, structured programs for professionals and organizations seeking measurable skill upgrades.</p>
              </motion.div>
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {PROGRAMS.map((prog) => (
                  <motion.div key={prog.title} variants={fadeUp} whileHover={{ y: -3 }} className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-lg transition-all">
                    <div className={`w-12 h-12 rounded-xl border ${prog.color} flex items-center justify-center mb-5`}>
                      <prog.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{prog.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full">{prog.duration}</span>
                      <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">{prog.mode}</span>
                      <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full">{prog.price}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-sm text-slate-500 flex items-center gap-1.5"><Users className="w-4 h-4" /> {prog.seats} seats available</span>
                      <Link to="/auth?mode=signup&role=Trainee" className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-all flex items-center gap-1.5">
                        Register <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ── WHY TRAIN WITH US ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.div variants={fadeUp}><SectionLabel>Why E-Spot Training</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900">Learning That Actually Works</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Zap, title: "Learn at Your Pace", desc: "Flexible scheduling with on-demand video, live sessions, and async mentorship.", color: "text-blue-600 bg-blue-50" },
              { icon: Award, title: "Certified Credentials", desc: "Earn recognised certificates that employers and partners trust globally.", color: "text-amber-600 bg-amber-50" },
              { icon: Globe, title: "Global Network", desc: "Connect with alumni and peers across 28+ countries in our learning community.", color: "text-emerald-600 bg-emerald-50" },
              { icon: TrendingUp, title: "Career Outcomes", desc: "87% of graduates report a salary increase or promotion within 6 months.", color: "text-purple-600 bg-purple-50" },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.div variants={fadeUp}><SectionLabel>Student Stories</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900">What Our Learners Say</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "Jessica Wong", role: "Now: Frontend Engineer at Google", text: "The Web Dev bootcamp was the most practical learning experience I've had. Got my first tech job 6 weeks after completing the course.", rating: 5, img: "https://picsum.photos/seed/tw1/100/100" },
              { name: "Thomas Wright", role: "Now: Data Analyst at McKinsey", text: "The Data Science pathway gave me exactly the structured progression I needed. The capstone project sealed the deal in my interviews.", rating: 5, img: "https://picsum.photos/seed/tw2/100/100" },
              { name: "Priya Patel", role: "Now: Marketing Director", text: "I went from agency coordinator to Marketing Director in 18 months. The Digital Marketing Leadership program was the catalyst.", rating: 5, img: "https://picsum.photos/seed/tw3/100/100" },
            ].map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="bg-white border border-slate-200 rounded-2xl p-7">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-700 italic leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-blue-600">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-5">Ready to Start Your<br />Learning Journey?</motion.h2>
            <motion.p variants={fadeUp} className="text-blue-100 text-lg max-w-xl mx-auto mb-10">Join 6,400+ learners already building their future on the E-Spot Training Academy.</motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link to="/auth?mode=signup&role=Trainee" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl transition-all text-sm flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Enroll Free Today
              </Link>
              <Link to="/trainee-course-register" className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> View All Courses
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-blue-100/70">
              {["No credit card required", "Cancel anytime", "Certificate included", "Expert support"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-sm"><CheckCircle className="w-4 h-4 text-blue-200" /> {t}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
