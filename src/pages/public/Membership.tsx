export const PACKAGE_TIERS = [
  {
    tier: "Silver",
    color: "border-slate-300",
    price: "$99+",
    subcategories: [
      {
        name: "Silver Office Package",
        price: "from $99",
        perks: [
          "Photo & Edit Service",
          "Perfect for clients who only need photo-related support.",
          "Choose the option that best fits your needs:",
          "• Photo Only Service: Visit our office for a professional 2x2 inch photo. You’ll receive the unedited version to use as you wish.",
          "• Photo & Edit Service: Get your photo taken at our office and professionally edited—ready for direct EDV form upload.",
          "• Scan & Edit Service: Bring a printed 2x2 inch photo to our office. We’ll scan it using a high-resolution scanner and professionally edit it for EDV use.",
          "With the Silver Office Package, you manage and submit your own EDV form—we provide high-quality photo support to ensure your application looks its best.",
        ],
      },
      {
        name: "Silver Home Package",
        price: "from $149",
        perks: [
          "Photo & Edit Home Service",
          "Designed for clients who want quality photo services without visiting the office.",
          "Choose the option that best fits your needs:",
          "• Edit Only: Send us your digital photo for professional editing. We’ll return a polished, ready-to-use photo.",
          "• Home Service: We visit your home to take a professional 2x2 inch photo, then edit it and deliver the final version directly to you.",
          "With the Silver Home Package, enjoy expert photo support from the comfort of your home.",
        ],
      },
    ],
  },
  {
    tier: "Gold",
    color: "border-yellow-400",
    price: "$299+",
    subcategories: [
      {
        name: "Gold Office Package",
        price: "from $299",
        perks: [
          "Standard Service",
          "For clients who prefer personalized, in-office service, we provide everything you need with ease.",
          "• Bring Your Passport and Photos: You can bring 2x2 inch photos (printed or digital), or have your photo taken directly at our office.",
          "• Passport Required for Main Applicant: The person applying must bring a valid passport for processing.",
          "• Documents for Family Members or Dependents: Family members (such as spouse or children) should bring citizenship certificates or other official ID documents.",
          "• Complete Service on the Spot: All services will be efficiently completed during your visit, ensuring a smooth, time-saving experience.",
          "With our Gold Office Package, enjoy direct support in a comfortable, professional environment.",
        ],
      },
      {
        name: "Gold Home and Office Package",
        price: "from $399",
        perks: [
          "Standard Home Service",
          "For clients who value efficiency and want to save time during their office visit.",
          "• Fill Out the Form Online from Home: Complete the full membership form with all necessary DV details before arriving, making your visit smooth and efficient.",
          "• Direct Access to Photo & Form Unit: Upon arrival, skip the counselor, and cashier lines. You’ll be referred straight to our Photo & Online Form Unit for a professional 2x2 inch photo session with editing—and passport scanning if preferred.",
          "• On-the-Spot Form Filling: Our computer operator will complete your EDV form alongside you, ensuring everything is accurate and submitted on time.",
        ],
      },
    ],
  },
  {
    tier: "Diamond",
    color: "border-blue-400",
    price: "$999+",
    subcategories: [
      {
        name: "Diamond Office Package",
        price: "from $999",
        perks: [
          "VIP Express Service",
          "For clients who want fast, prioritized in-office service with zero wait time.",
          "• Fill Out the Form Online from Home: Complete the full membership form with all required DV details before arriving to ensure a seamless experience.",
          "• Priority Access to Dedicated Photo & Form Line: Upon arrival, enjoy express entry with a separate VIP line for both photo and form services—no waiting, no delays. Includes a professional 2x2 inch photo session with editing, and passport scanning if preferred.",
          "• Faster On-the-Spot Form Filling: Our dedicated operator will complete and submit your EDV form quickly and accurately, giving you priority service from start to finish.",
          "With the Diamond Office Package, experience our fastest, most efficient in-office service—designed for those who value their time.",
        ],
      },
      {
        name: "Diamond Home Package",
        price: "from $1,199",
        perks: [
          "VIP Online Service",
          "For clients living outside Nepal who prefer a fully online experience.",
          "• Complete the Membership Form Online: Fill out the full form from anywhere in the world—upload your 2x2 inch photo and passport scan directly through the form.",
          "• We Handle the Rest: Once submitted, our team will complete and submit your official EDV form on your behalf—no office visit required.",
          "With the Diamond Home Package, enjoy a fast, easy, and professional service—100% online, designed especially for Nepali clients abroad.",
        ],
      },
    ],
  },
  {
    tier: "Platinum",
    color: "border-purple-700",
    price: "$1,999+",
    subcategories: [
      {
        name: "Platinum Package",
        price: "from $1,999",
        perks: [
          "VVIP Home Service",
          "For our most exclusive clients, we bring the service directly to you—nationwide.",
          "• Home Visit for Photos and Passport Scans: Skip the trip to the office. We’ll visit your home to take your 2x2 inch photos and scan your passport.",
          "• Hassle-Free EDV Form Completion and Submission: We handle all the paperwork. Our team will complete and submit your EDV form on your behalf, ensuring a seamless experience.",
          "With our Platinum VVIP Package, you can enjoy a premium, personalized experience, all from the comfort of your own home.",
        ],
      },
    ],
  },
];

import { useState } from "react";
import { getAuthRole } from "../../auth/permissions";

function MembershipPackages() {
  const [selectedTier, setSelectedTier] = useState<any>(null);
  const navigate = useNavigate();
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {!selectedTier ? (
        <>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Membership Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose your tier, then select the service that fits you best.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 sm:gap-7 max-w-6xl mx-auto">
            {PACKAGE_TIERS.map((tier) => (
              <button
                key={tier.tier}
                className={`rounded-2xl p-6 sm:p-8 border shadow-sm relative bg-white border-gray-200 text-slate-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${tier.color}`}
                onClick={() => setSelectedTier(tier)}
              >
                <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                <div className="text-2xl font-bold mb-6">{tier.price}</div>
                <div className="text-sm text-gray-500">
                  Click to view options
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-5xl mx-auto w-full bg-white rounded-2xl shadow-xl p-8 relative animate-in fade-in slide-in-from-bottom-4 overflow-y-auto">
          <button
            className="absolute top-6 left-6 text-blue-600 hover:text-blue-800 text-base font-semibold flex items-center gap-1"
            onClick={() => setSelectedTier(null)}
            aria-label="Back"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
            {selectedTier.tier} Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedTier.subcategories.map((sub: any, idx: number) => (
              <div
                key={sub.name}
                className="border border-slate-200 rounded-2xl p-7 flex flex-col bg-slate-50 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold text-slate-900 text-xl">
                    {sub.name}
                  </div>
                  <div className="font-bold text-blue-700 text-xl">
                    {sub.price}
                  </div>
                </div>
                <div className="prose prose-sm max-w-none text-slate-800 mb-4">
                  {renderPackageContent(sub)}
                </div>
                <button
                  className="w-full inline-flex items-center justify-center py-3 font-semibold rounded-lg transition-colors bg-blue-600 hover:bg-blue-700 text-white mt-auto"
                  onClick={() => {
                    const isLoggedIn = !!getAuthRole();
                    if (!isLoggedIn) {
                      // Redirect to signup/login page, then back to payment after login
                      navigate(
                        `/auth?mode=signup&redirect=/payment?package=${encodeURIComponent(selectedTier.tier)}&sub=${encodeURIComponent(sub.name)}`,
                      );
                    } else {
                      // Go directly to payment/checkout page
                      navigate(
                        `/payment?package=${encodeURIComponent(selectedTier.tier)}&sub=${encodeURIComponent(sub.name)}`,
                      );
                    }
                  }}
                >
                  Select {sub.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function renderPackageContent(sub: { name: string; perks: string[] }) {
  const blocks: React.ReactNode[] = [];
  let currentList: string[] = [];
  sub.perks.forEach((perk, i) => {
    const trimmed = perk.trim();
    if (trimmed.startsWith("-") || trimmed.startsWith("•")) {
      currentList.push(trimmed.replace(/^[-•]\s*/, ""));
    } else {
      if (currentList.length) {
        blocks.push(
          <ul className="list-disc pl-5 mb-2" key={`ul-${i}`}>
            {currentList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>,
        );
        currentList = [];
      }
      blocks.push(<p key={`p-${i}`}>{perk}</p>);
    }
  });
  if (currentList.length) {
    blocks.push(
      <ul className="list-disc pl-5 mb-2" key={`ul-final`}>
        {currentList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>,
    );
  }
  return blocks;
}
import React, { useMemo } from "react";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import SubNav from "../../components/SubNav";

import { useNavigate } from "react-router-dom";
import {
  Check,
  Star,
  Trophy,
  Gift,
  Users,
  Award,
  TrendingUp,
  Search,
  Calendar,
} from "lucide-react";

type MemberItem = {
  id: number;
  name: string;
  tier: "Silver" | "Gold" | "Diamond" | "Platinum";
  points: number;
  avatar: string;
};

export default function Membership() {
  const [activeTab, setActiveTab] = useState("Packages");
  const [memberQuery, setMemberQuery] = useState("");
  const [tierFilter, setTierFilter] = useState<
    "All" | "Silver" | "Gold" | "Diamond" | "Platinum"
  >("All");
  const navigate = useNavigate();

  const subNav = [
    "Overview",
    "Packages",
    "Achievements",
    "Top Members",
    "Events & Offers",
    "Join Us",
    "Reviews",
  ];

  const topMembers: MemberItem[] = [
    {
      id: 1,
      name: "Anita Thapa",
      tier: "Platinum",
      points: 8000,
      avatar: "https://picsum.photos/seed/m1/100/100",
    },
    {
      id: 2,
      name: "Bikash Gurung",
      tier: "Diamond",
      points: 6170,
      avatar: "https://picsum.photos/seed/m2/100/100",
    },
    {
      id: 3,
      name: "Nisha Rai",
      tier: "Diamond",
      points: 5720,
      avatar: "https://picsum.photos/seed/m3/100/100",
    },
    {
      id: 4,
      name: "Pratik KC",
      tier: "Gold",
      points: 5485,
      avatar: "https://picsum.photos/seed/m4/100/100",
    },
    {
      id: 5,
      name: "Suman Shahi",
      tier: "Silver",
      points: 5240,
      avatar: "https://picsum.photos/seed/m5/100/100",
    },
    {
      id: 6,
      name: "Rita Sharma",
      tier: "Gold",
      points: 5110,
      avatar: "https://picsum.photos/seed/m6/100/100",
    },
    {
      id: 7,
      name: "Ajay Karki",
      tier: "Silver",
      points: 4900,
      avatar: "https://picsum.photos/seed/m7/100/100",
    },
    {
      id: 8,
      name: "Kabita Magar",
      tier: "Diamond",
      points: 4730,
      avatar: "https://picsum.photos/seed/m8/100/100",
    },
  ];

  const filteredMembers = useMemo(() => {
    return topMembers.filter((member) => {
      const byTier = tierFilter === "All" || member.tier === tierFilter;
      const byQuery =
        !memberQuery.trim() ||
        member.name.toLowerCase().includes(memberQuery.toLowerCase());
      return byTier && byQuery;
    });
  }, [topMembers, tierFilter, memberQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Hero
        title="Membership"
        subtitle="Unlock premium access, measurable rewards, and growth opportunities through the E-SPOT member ecosystem."
        image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
        accentColor="text-blue-400"
      />

      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-gray-900 border-gray-900 bg-gray-50"
      />

      <div className="flex-1 py-8 sm:py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "Overview" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] gap-5 sm:gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <BenefitCard
                  icon={<Users className="w-6 h-6 text-blue-600" />}
                  title="Exclusive Network"
                  text="Access private communities, curated introductions, and high-value member circles."
                />
                <BenefitCard
                  icon={<Award className="w-6 h-6 text-blue-600" />}
                  title="Skill Development"
                  text="Priority access to workshops, certifications, and practical learning tracks."
                />
                <BenefitCard
                  icon={<Gift className="w-6 h-6 text-blue-600" />}
                  title="Member Perks"
                  text="Unlock partner discounts, marketplace credits, and invite-only offers."
                />
                <BenefitCard
                  icon={<Star className="w-6 h-6 text-blue-600" />}
                  title="Recognition Program"
                  text="Earn points for contribution, referrals, reviews, and event participation."
                />
              </div>

              <aside className="bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white rounded-2xl p-6 border border-blue-800 shadow-sm h-fit">
                <p className="text-xs uppercase tracking-[0.16em] text-blue-200 font-semibold">
                  Membership Journey
                </p>
                <h3 className="text-2xl font-semibold mt-2 tracking-tight">
                  Grow from Silver to Platinum
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-blue-100/90">
                  <li>Build profile and attend your first events</li>
                  <li>Engage in partner offers and referral loops</li>
                  <li>Collect points and unlock tier upgrades</li>
                  <li>Access VIP support and private opportunities</li>
                </ul>
                <Link
                  to="/auth?mode=signup&role=Member"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-200"
                >
                  Start Membership <Check className="w-4 h-4" />
                </Link>
              </aside>
            </div>
          )}
          {activeTab === "Packages" && <MembershipPackages />}
          {activeTab === "Achievements" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-semibold text-gray-900">
                Membership Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <AchievementCard
                  icon={<Star className="w-7 h-7" />}
                  tone="bg-blue-100 text-blue-600"
                  title="Talent of the Month"
                  text="Awarded to Sarah Jenkins (+50 pts)"
                />
                <AchievementCard
                  icon={<Trophy className="w-7 h-7" />}
                  tone="bg-purple-100 text-purple-600"
                  title="Member of the Year"
                  text="Awarded to Michael Chen (+500 pts)"
                />
                <AchievementCard
                  icon={<Gift className="w-7 h-7" />}
                  tone="bg-emerald-100 text-emerald-600"
                  title="Lucky Draw Winners"
                  text="Monthly draw winners and bonus points"
                />
                <AchievementCard
                  icon={<Star className="w-7 h-7" />}
                  tone="bg-amber-100 text-amber-600"
                  title="Celebrity of the Month"
                  text="Special recognition spotlight"
                />
              </div>
            </div>
          )}
          {activeTab === "Top Members" && (
            <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <label className="md:col-span-2">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">
                      Search members
                    </span>
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        value={memberQuery}
                        onChange={(e) => setMemberQuery(e.target.value)}
                        placeholder="Search by member name"
                        className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </label>
                  <label>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 block mb-1.5">
                      Tier
                    </span>
                    <select
                      value={tierFilter}
                      onChange={(e) =>
                        setTierFilter(e.target.value as typeof tierFilter)
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="All">All tiers</option>
                      <option value="Silver">Silver</option>
                      <option value="Gold">Gold</option>
                      <option value="Diamond">Diamond</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredMembers.map((member, index) => (
                  <Link
                    key={member.id}
                    to={`/profile/member/${member.id}`}
                    className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col items-center shadow-sm hover:shadow-md transition-all"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-14 h-14 rounded-full object-cover mb-3"
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-xs font-bold text-blue-700 mb-1">
                      #{index + 1}
                    </div>
                    <div className="font-semibold text-slate-900 text-center">
                      {member.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {member.tier}
                    </div>
                    <div className="text-blue-600 font-semibold mt-2">
                      {member.points} pts
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {activeTab === "Events & Offers" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-5">
                  Exclusive Member Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    {
                      title: "Annual Gala Dinner",
                      date: "Dec 15, 2026",
                      type: "Networking",
                      points: "+100 pts",
                    },
                    {
                      title: "Leadership Masterclass",
                      date: "Nov 05, 2026",
                      type: "Workshop",
                      points: "+50 pts",
                    },
                    {
                      title: "Tech Innovators Summit",
                      date: "Oct 22, 2026",
                      type: "Conference",
                      points: "+75 pts",
                    },
                  ].map((event) => (
                    <article
                      key={event.title}
                      className="bg-white border border-gray-200 rounded-2xl p-5 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 block">
                          {event.type}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {event.title}
                        </h3>
                        <p className="text-gray-500 text-sm inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {event.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-600 font-semibold mb-2">
                          {event.points}
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            navigate("/auth?mode=signup&role=Member")
                          }
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold rounded-lg transition-colors"
                        >
                          Register
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-5">
                  Partner Offers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    {
                      company: "CloudHost Pro",
                      offer: "30% Off Annual Plans",
                      code: "ESPOT30",
                    },
                    {
                      company: "Designify",
                      offer: "Free Premium Assets",
                      code: "ESPOTDESIGN",
                    },
                    {
                      company: "MarketMetrics",
                      offer: "Extended 60-Day Trial",
                      code: "ESPOTDATA",
                    },
                  ].map((offer) => (
                    <article
                      key={offer.company}
                      className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:border-blue-300 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {offer.company}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-4">
                        {offer.offer}
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center border border-gray-100">
                        <span className="font-mono text-sm text-gray-600">
                          {offer.code}
                        </span>
                        <button className="text-blue-600 text-sm font-semibold hover:underline">
                          Copy
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === "Join Us" && (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-gray-200 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-semibold text-gray-900 mb-5">
                Join E-SPOT Membership
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 mb-6">
                <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50">
                  Choose your package and set profile goals
                </div>
                <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50">
                  Submit identity and profile details
                </div>
                <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50">
                  Get approval and activate benefits
                </div>
                <div className="rounded-xl border border-slate-200 p-3.5 bg-slate-50">
                  Start earning points from day one
                </div>
              </div>
              <Link
                to="/auth?mode=signup&role=Member"
                className="w-full inline-flex items-center justify-center py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Continue Member Signup
              </Link>
            </div>
          )}
          {activeTab === "Reviews" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
              <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center">
                What Our Members Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "David Lee",
                    role: "Gold Member",
                    text: "Networking quality here is excellent. I found multiple high-value clients through member events.",
                    rating: 5,
                    image: "https://picsum.photos/seed/mrev1/100/100",
                  },
                  {
                    name: "Sarah Jenkins",
                    role: "Diamond Member",
                    text: "The rewards system keeps me engaged and the benefits pay for the membership itself.",
                    rating: 5,
                    image: "https://picsum.photos/seed/mrev2/100/100",
                  },
                  {
                    name: "Michael Chen",
                    role: "Silver Member",
                    text: "Great starting point for founders who need both learning and connections.",
                    rating: 4,
                    image: "https://picsum.photos/seed/mrev3/100/100",
                  },
                ].map((review) => (
                  <article
                    key={review.name}
                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4.5 h-4.5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-11 h-11 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {review.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {review.role}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  note,
  icon,
}: {
  label: string;
  value: string;
  note: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
            {label}
          </p>
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mt-2">
            {value}
          </p>
        </div>
        <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
          {icon}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-blue-700 font-medium mt-3">
        {note}
      </p>
    </article>
  );
}

function BenefitCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex gap-4">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </article>
  );
}

function PackageCard({
  title,
  tone,
  price,
  perks,
  ctaClass,
  popular,
  dark,
}: {
  title: string;
  tone: string;
  price: string;
  perks: string[];
  ctaClass: string;
  popular?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={`${dark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-gray-200 text-slate-900"} rounded-2xl p-6 sm:p-8 border shadow-sm relative`}
    >
      {popular ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
          Most Popular
        </div>
      ) : null}
      <h3 className={`text-2xl font-bold ${tone} mb-2`}>{title}</h3>
      <div className="text-2xl font-bold mb-6">
        {price}
        <span
          className={`${dark ? "text-slate-400" : "text-gray-500"} text-lg font-medium`}
        >
          /yr
        </span>
      </div>
      <ul className="space-y-3 mb-8">
        {perks.map((perk) => (
          <li
            key={perk}
            className={`${dark ? "text-slate-300" : "text-gray-700"} flex items-center gap-2.5 text-sm`}
          >
            <Check className="w-4.5 h-4.5" /> {perk}
          </li>
        ))}
      </ul>
      <Link
        to={`/auth?mode=signup&role=Member&package=${encodeURIComponent(title)}`}
        className={`w-full inline-flex items-center justify-center py-3 font-semibold rounded-lg transition-colors ${ctaClass}`}
      >
        Select {title}
      </Link>
    </div>
  );
}

function AchievementCard({
  icon,
  tone,
  title,
  text,
}: {
  icon: React.ReactNode;
  tone: string;
  title: string;
  text: string;
}) {
  return (
    <article className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
      <div
        className={`w-14 h-14 ${tone} rounded-full flex items-center justify-center mx-auto mb-3`}
      >
        {icon}
      </div>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm mt-2">{text}</p>
    </article>
  );
}
