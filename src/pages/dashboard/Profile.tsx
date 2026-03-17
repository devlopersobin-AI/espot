import { User, Briefcase, Award, Star, MapPin, Mail, Phone, Edit2 } from 'lucide-react';
import { getAuthRole, hasPermission } from '../../auth/permissions';
import type { AuthRole } from '../../auth/permissions';

export default function Profile() {
  const role = getAuthRole();
  const canEditProfile = hasPermission(role, 'profile.update');

  const profileByRole: Record<AuthRole, {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    points: number;
    joinDate: string;
    achievements: string[];
    education: string;
    interests: string[];
  }> = {
    Member: {
      name: 'Mila Member', role: 'Member', email: 'member@demo.com', phone: '+977 9800000001', location: 'Kathmandu, Nepal',
      bio: 'Community member focused on networking and continuous learning opportunities.', points: 640, joinDate: 'Feb 2026',
      achievements: ['5 Events Joined', 'Profile Complete', 'Referral Star'], education: 'BSc, Tribhuvan University', interests: ['Networking', 'Career Growth', 'Workshops'],
    },
    Partner: {
      name: 'Parker Partner', role: 'Partner', email: 'partner@demo.com', phone: '+977 9800000002', location: 'Dubai, UAE',
      bio: 'Business partner growing brand visibility through offers and collaborations.', points: 1250, joinDate: 'Jan 2025',
      achievements: ['Top Partner Q1', 'Campaign Leader', '50+ Sales'], education: 'MBA, Hult International', interests: ['B2B Deals', 'Branding', 'Investments'],
    },
    Franchisee: {
      name: 'Farah Franchise', role: 'Franchisee', email: 'franchisee@demo.com', phone: '+977 9800000003', location: 'Pokhara, Nepal',
      bio: 'Franchise operator focused on local expansion and operational excellence.', points: 980, joinDate: 'Oct 2025',
      achievements: ['Outlet Launch', 'Regional Growth', 'Ops Excellence'], education: 'BBA, Kathmandu University', interests: ['Operations', 'Retail', 'Growth'],
    },
    Entrepreneur: {
      name: 'Evan Entrepreneur', role: 'Entrepreneur', email: 'entrepreneur@demo.com', phone: '+977 9800000004', location: 'Singapore',
      bio: 'Startup founder connecting with mentors and investors for scale.', points: 710, joinDate: 'Nov 2025',
      achievements: ['Pitch Finalist', 'MVP Launch', 'Investor Intro'], education: 'BEng, NUS', interests: ['Startups', 'FinTech', 'Product'],
    },
    Leader: {
      name: 'Lina Leader', role: 'Leader', email: 'leader@demo.com', phone: '+977 9800000005', location: 'London, UK',
      bio: 'Leadership mentor supporting strategic growth and high-impact initiatives.', points: 1540, joinDate: 'Mar 2024',
      achievements: ['Global Mentor', 'Keynote Speaker', 'Impact Award'], education: 'MSc Leadership, LSE', interests: ['Mentorship', 'Policy', 'Innovation'],
    },
    Scholar: {
      name: 'Sora Scholar', role: 'Scholar', email: 'scholar@demo.com', phone: '+977 9800000006', location: 'Lalitpur, Nepal',
      bio: 'Scholar pursuing high-impact learning opportunities and research.', points: 530, joinDate: 'Dec 2025',
      achievements: ['Scholarship Recipient', 'Research Presenter', 'Top Attendance'], education: 'BSc CS, Pulchowk Campus', interests: ['AI', 'Research', 'Hackathons'],
    },
    Jobseeker: {
      name: 'Jace Jobseeker', role: 'Jobseeker', email: 'jobseeker@demo.com', phone: '+977 9800000007', location: 'Bhaktapur, Nepal',
      bio: 'Jobseeker building a strong profile and preparing for high-value opportunities.', points: 460, joinDate: 'Jan 2026',
      achievements: ['10 Applications', 'Interview Ready', 'Skills Badge'], education: 'BCA, Pokhara University', interests: ['Frontend', 'Remote Work', 'Product'],
    },
    Trainer: {
      name: 'Tara Trainer', role: 'Trainer', email: 'trainer@demo.com', phone: '+977 9800000008', location: 'Kathmandu, Nepal',
      bio: 'Professional trainer delivering practical programs across business and tech.', points: 890, joinDate: 'Sep 2025',
      achievements: ['20 Sessions', 'Top Rated Trainer', 'Cohort Mentor'], education: 'MEd, Kathmandu University', interests: ['Instruction Design', 'Digital Skills', 'Coaching'],
    },
    Admin: {
      name: 'Ari Admin', role: 'Admin', email: 'admin@demo.com', phone: '+977 9800000009', location: 'Global HQ',
      bio: 'Platform admin responsible for governance, moderation, and growth analytics.', points: 2000, joinDate: 'Jan 2024',
      achievements: ['System Steward', 'Policy Lead', 'Ops Excellence'], education: 'MBA, Global School of Management', interests: ['Operations', 'Analytics', 'Governance'],
    },
  };

  const user = profileByRole[role];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        {canEditProfile ? (
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
            <Edit2 className="w-4 h-4" /> Edit Profile
          </button>
        ) : (
          <button disabled className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500 font-bold rounded-lg cursor-not-allowed">
            <Edit2 className="w-4 h-4" /> Edit restricted
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Basic Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
            <div className="w-32 h-32 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <div className="inline-block mt-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-bold rounded-full uppercase tracking-wider">
              {user.role}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-4 text-left">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-gray-400" /> {user.email}
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-gray-400" /> {user.phone}
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-gray-400" /> {user.location}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">E-SPOT Points</h3>
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-100">
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-orange-500 fill-current" />
                <span className="text-3xl font-black text-orange-600">{user.points}</span>
              </div>
              <button className="text-sm font-bold text-orange-700 hover:underline">Redeem</button>
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About Me</h3>
            <p className="text-gray-600 leading-relaxed">{user.bio}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Education</h4>
                <div className="flex items-start gap-2 text-gray-900 font-medium">
                  <Briefcase className="w-5 h-5 text-blue-600 shrink-0" /> {user.education}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {user.interests.map(interest => (
                    <span key={interest} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {user.achievements.map((achievement, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                  <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="font-bold text-gray-900 text-sm">{achievement}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
