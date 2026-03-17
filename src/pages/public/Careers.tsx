import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import { ArrowRight, Briefcase, MapPin, Clock } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Equestrian Instructor',
      department: 'Horse Services',
      location: 'Kathmandu, Nepal',
      type: 'Full-time',
      description: 'We are looking for an experienced equestrian instructor to lead our horse riding programs.',
      requirements: ['5+ years of experience', 'Certification in horse riding', 'Team leadership skills', 'Customer service excellence'],
    },
    {
      id: 2,
      title: 'Event Manager',
      department: 'Events & Wedding Management',
      location: 'Kathmandu, Nepal',
      type: 'Full-time',
      description: 'Join our dynamic event management team and organize memorable events and weddings.',
      requirements: ['3+ years of event management experience', 'Project management skills', 'Vendor management', 'Creative problem-solving'],
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      department: 'Marketing & Communications',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help us grow our brand through digital marketing and content creation strategies.',
      requirements: ['3+ years of marketing experience', 'Social media expertise', 'Content creation skills', 'Analytics proficiency'],
    },
    {
      id: 4,
      title: 'Travel Consultant',
      department: 'Tours & Travel',
      location: 'Kathmandu, Nepal',
      type: 'Full-time',
      description: 'Create unforgettable travel experiences for our clients across the globe.',
      requirements: ['2+ years of travel industry experience', 'Destination knowledge', 'Excellent communication', 'Problem-solving abilities'],
    },
    {
      id: 5,
      title: 'Wellness Coach',
      department: 'Wellness & Fitness',
      location: 'Kathmandu, Nepal',
      type: 'Part-time',
      description: 'Guide our clients towards healthier lifestyles through customized wellness programs.',
      requirements: ['Certification in fitness/wellness', 'Nutrition knowledge', 'Coaching skills', 'Passion for health'],
    },
    {
      id: 6,
      title: 'Videographer & Editor',
      department: 'Multimedia Production',
      location: 'Kathmandu, Nepal',
      type: 'Full-time',
      description: 'Create stunning visual content for our events, weddings, and corporate clients.',
      requirements: ['3+ years of videography experience', 'Video editing proficiency', 'Creativity', 'Equipment knowledge'],
    },
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Comprehensive health insurance',
    'Professional development opportunities',
    'Flexible working arrangements',
    'Team building activities and events',
    'Career growth and advancement',
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero
        bgColor="bg-blue-900"
        accentColor="text-blue-300"
        title="Join Our Team"
        subtitle="Be part of a dynamic organization transforming services, experiences, and community growth across the E-SPOT ecosystem."
        label="Module"
      />

      <section className="py-8">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Open Roles', value: '06+', note: 'Active hiring across units' },
              { label: 'Work Modes', value: 'Hybrid', note: 'Remote and on-site teams' },
              { label: 'Growth Tracks', value: '12', note: 'Specialist and leadership paths' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 mb-2">{item.label}</p>
                <h2 className="text-3xl font-black text-slate-900 mb-1">{item.value}</h2>
                <p className="text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-10 bg-transparent">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 mb-2">Culture</p>
            <h2 className="text-3xl font-bold mb-3 text-slate-900">Why Work With Us?</h2>
            <p className="text-slate-600 text-lg">We build multi-industry programs, which means your work has room to compound across community, commerce, learning, and events.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white">
                    <ArrowRight size={20} />
                  </div>
                </div>
                <div>
                  <p className="text-lg text-gray-800">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 mb-2">Hiring Now</p>
            <h2 className="text-3xl font-bold mb-3 text-slate-900">Open Positions</h2>
            <p className="text-slate-600 text-lg">Each role includes clear ownership, team context, and visible growth pathways.</p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Briefcase size={18} />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={18} />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={18} />
                      <span>{position.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{position.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  <span>Apply Now</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 text-white py-16 px-6 md:px-10 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Dream Role?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Send us your resume and let us know how you'd like to contribute to our team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <span>Contact Us</span>
            <ArrowRight size={20} />
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
