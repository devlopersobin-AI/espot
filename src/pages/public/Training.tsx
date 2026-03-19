import React, { useEffect, useMemo, useRef, useState } from "react";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import SubNav from "../../components/SubNav";
// import QuickRegisterForm from "../../components/forms/QuickRegisterForm";
import {
  Search,
  Users,
  Star,
  ArrowRight,
  BookOpen,
  Calendar,
  Target,
} from "lucide-react";

export default function Training() {
  const subNav = [
    "Courses",
    "Top Trainers",
    "Academic Pathways",
    "Register Training",
  ];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const [courseQuery, setCourseQuery] = useState("");
  const [trainerQuery, setTrainerQuery] = useState("");
  const [applicationTarget, setApplicationTarget] = useState<string | null>(
    null,
  );
  const applicationFormRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!applicationTarget || !applicationFormRef.current) return;
    applicationFormRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    applicationFormRef.current.focus({ preventScroll: true });
  }, [applicationTarget]);

  const topTrainers = [
    {
      id: 1,
      name: "Dr. Alice Smith",
      specialty: "Data Science",
      rating: 4.9,
      students: 1200,
      image: "https://picsum.photos/seed/t1/150/150",
    },
    {
      id: 2,
      name: "John Doe",
      specialty: "Web Development",
      rating: 4.8,
      students: 3400,
      image: "https://picsum.photos/seed/t2/150/150",
    },
    {
      id: 3,
      name: "Sarah Jenkins",
      specialty: "Digital Marketing",
      rating: 4.9,
      students: 850,
      image: "https://picsum.photos/seed/t3/150/150",
    },
    {
      id: 4,
      name: "Michael Chen",
      specialty: "UX/UI Design",
      rating: 4.7,
      students: 2100,
      image: "https://picsum.photos/seed/t4/150/150",
    },
  ];

  const trainingPrograms = [
    {
      title: "Corporate Leadership Training",
      duration: "2 Days",
      mode: "In-person",
      price: "$499",
    },
    {
      title: "Digital Skills Bootcamp",
      duration: "4 Weeks",
      mode: "Online",
      price: "$299",
    },
    {
      title: "Executive Coaching Program",
      duration: "3 Months",
      mode: "Hybrid",
      price: "$1,299",
    },
    {
      title: "Team Performance Workshop",
      duration: "1 Day",
      mode: "In-person",
      price: "$199",
    },
  ];

  const courses = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: `Complete Full-Stack Web Development Bootcamp ${index + 1}`,
    instructor: "John Doe",
    category: index % 2 === 0 ? "Development" : "Leadership",
    price: "$89.99",
    rating: "4.8",
    image: `https://picsum.photos/seed/course${index + 1}/400/200`,
  }));

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const haystack =
        `${course.title} ${course.instructor} ${course.category}`.toLowerCase();
      return haystack.includes(courseQuery.toLowerCase());
    });
  }, [courseQuery, courses]);

  const filteredTrainers = useMemo(() => {
    return topTrainers.filter((trainer) => {
      const haystack = `${trainer.name} ${trainer.specialty}`.toLowerCase();
      return haystack.includes(trainerQuery.toLowerCase());
    });
  }, [trainerQuery, topTrainers]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Training & Courses"
        subtitle="Upskill with top trainers, explore structured learning paths, and register for professional training programs."
        label="Module"
        image="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80"
        accentColor="text-blue-400"
      />

      {/* Sub Navigation */}
      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-blue-700 border-blue-500 bg-blue-50"
      />

      {/* Content Section */}
      <div className="flex-1 py-8 sm:py-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {activeTab === "Courses" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                  Browse Courses
                </h2>
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    value={courseQuery}
                    onChange={(e) => setCourseQuery(e.target.value)}
                    placeholder="Search courses, categories, instructors..."
                    className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="h-32 bg-slate-200 relative">
                      <img
                        src={course.image}
                        alt="Course"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-800">
                        {course.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-base text-slate-900 mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">
                        By {course.instructor}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="font-bold text-base text-slate-900">
                          {course.price}
                        </div>
                        <div className="flex items-center text-sm font-bold text-amber-600">
                          {course.rating}{" "}
                          <Star className="w-4 h-4 ml-1 fill-amber-500" />
                        </div>
                      </div>
                      <Link
                        to="/auth?mode=signup&role=Trainee"
                        className="w-full block py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              {filteredCourses.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                  No courses match your search.
                </div>
              )}
              {/* QuickRegisterForm removed: registration handled via signup flow */}
            </div>
          )}

          {activeTab === "Top Trainers" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                  Featured Instructors
                </h2>
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    value={trainerQuery}
                    onChange={(e) => setTrainerQuery(e.target.value)}
                    placeholder="Search trainers or specialties..."
                    className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredTrainers.map((trainer) => (
                  <div
                    key={trainer.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-300 transition-all group"
                  >
                    <Link
                      to={`/profile/trainer/${trainer.id}`}
                      className="block"
                    >
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-slate-50 group-hover:ring-blue-50 transition-all">
                        <img
                          src={trainer.image}
                          alt={trainer.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                        {trainer.name}
                      </h3>
                      <p className="text-sm text-slate-500 mb-3">
                        {trainer.specialty}
                      </p>
                    </Link>
                    <div className="flex items-center justify-center gap-4 text-sm font-medium mb-4">
                      <div className="flex items-center text-amber-600">
                        <Star className="w-4 h-4 mr-1 fill-amber-500 text-amber-500" />{" "}
                        {trainer.rating}
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Users className="w-4 h-4 mr-1" /> {trainer.students}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setApplicationTarget(`Train with ${trainer.name}`)
                      }
                      className="w-full py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Register Training
                    </button>
                  </div>
                ))}
              </div>
              {filteredTrainers.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                  No trainers match your search.
                </div>
              )}
              {/* QuickRegisterForm removed: registration handled via signup flow */}
            </div>
          )}

          {activeTab === "Academic Pathways" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
              {/* QuickRegisterForm removed: registration handled via signup flow */}
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  Map Your Educational Journey
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Explore structured learning paths designed to take you from
                  beginner to industry expert in high-demand fields.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Software Engineering",
                    duration: "12-18 Months",
                    level: "Beginner to Advanced",
                    desc: "Master frontend and backend development, databases, and deployment strategies.",
                  },
                  {
                    title: "Data Science & Analytics",
                    duration: "9-12 Months",
                    level: "Intermediate",
                    desc: "Learn statistical analysis, machine learning algorithms, and data visualization techniques.",
                  },
                  {
                    title: "Digital Marketing Leadership",
                    duration: "6-9 Months",
                    level: "Beginner to Intermediate",
                    desc: "Develop comprehensive marketing strategies, SEO optimization, and campaign management skills.",
                  },
                ].map((pathway, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                        <BookOpen className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {pathway.title}
                        </h3>
                        <p className="text-slate-600 mb-4 text-sm">
                          {pathway.desc}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                          <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                            <Calendar className="w-4 h-4" /> {pathway.duration}
                          </span>
                          <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                            <Target className="w-4 h-4" /> {pathway.level}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setApplicationTarget(`Enroll: ${pathway.title}`)
                        }
                        className="shrink-0 bg-slate-900 text-white font-bold py-2.5 px-5 rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm"
                      >
                        Explore Path <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Register Training" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  Register for Training
                </h2>
                <p className="text-slate-600">
                  Choose a training program and submit your registration to get
                  started.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {trainingPrograms.map((program, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-base text-slate-900 mb-3">
                      {program.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-5 text-xs font-medium">
                      <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                        {program.duration}
                      </span>
                      <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
                        {program.mode}
                      </span>
                      <span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold">
                        {program.price}
                      </span>
                    </div>
                    <Link
                      to="/auth?mode=signup&role=Trainee"
                      className="w-full block py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      Register Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
              {/* QuickRegisterForm removed: registration handled via signup flow */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
