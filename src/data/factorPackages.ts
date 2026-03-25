// Packages for each factor — espot exclusive + partner/hospital packages
export const factorPackages: Record<string, any> = {
  health: {
    espotPackages: [
      {
        id: "espot-premium",
        provider: "ESpot",
        name: "ESpot Premium Wellness",
        description: "Annual wellness plan with telemedicine, fitness coaching, nutrition support, and comprehensive health screening — designed for peak performance.",
        price: 7999,
        features: ["24/7 Telemedicine Access", "Personalized Fitness Plan", "Certified Nutritionist", "Annual Full-Body Screening", "Mental Health Support", "Wellness App Premium"],
      },
    ],
    partnerPackages: [
      {
        id: "apollo-basic",
        provider: "Apollo Hospital",
        providerId: "11",
        name: "Basic Health Checkup",
        description: "Covers essential blood tests, ECG, and doctor consultation — ideal for annual preventive screening.",
        price: 1999,
        features: ["Complete Blood Count", "ECG & Stress Test", "Doctor Consultation", "Thyroid Profile"],
      },
      {
        id: "apollo-exec",
        provider: "Apollo Hospital",
        providerId: "11",
        name: "Executive Health Screening",
        description: "Comprehensive screening for professionals including cardiac markers, advanced imaging, and specialist review.",
        price: 6999,
        features: ["Advanced Cardiac Markers", "Abdominal Ultrasound", "Lung Function Test", "Eye & Dental Check", "Specialist Review", "Digital Health Report"],
      },
      {
        id: "fortis-heart",
        provider: "Fortis Hospital",
        providerId: "2",
        name: "Heart Health Package",
        description: "Comprehensive cardiac screening with echocardiogram, lifestyle assessment, and dietary planning.",
        price: 4999,
        features: ["ECG & Echocardiogram", "Cholesterol Panel", "Treadmill Stress Test", "Dietician Consultation"],
      },
      {
        id: "fortis-cancer",
        provider: "Fortis Hospital",
        providerId: "2",
        name: "Cancer Prevention Shield",
        description: "Early detection screening for common cancers with advanced imaging and genetic risk assessment.",
        price: 9999,
        features: ["Advanced Imaging", "Tumor Markers", "Genetic Risk Panel", "Oncologist Review", "Follow-up Plan"],
      },
    ],
  },
  knowledge: {
    espotPackages: [
      {
        id: "espot-learn",
        provider: "ESpot",
        name: "Knowledge Boost Pro",
        description: "Unlimited access to 200+ curated courses, weekly expert webinars, and a premium digital resource library.",
        price: 999,
        features: ["200+ Online Courses", "Weekly Expert Webinars", "Digital Resource Library", "AI Learning Recommendations", "Peer Study Groups", "Completion Certificates"],
      },
    ],
    partnerPackages: [
      {
        id: "coursera-bundle",
        provider: "Coursera Partner",
        name: "Professional Certificate Bundle",
        description: "Access to 5 professional certificates from top universities including Google, IBM, and Meta.",
        price: 3499,
        features: ["5 Professional Certificates", "University-Grade Content", "Hands-On Projects", "Shareable Credentials"],
      },
      {
        id: "udemy-annual",
        provider: "Udemy Business",
        name: "Annual Learning Pass",
        description: "Full-year access to 5,000+ business and tech courses with team collaboration tools.",
        price: 2499,
        features: ["5,000+ Courses", "Team Collaboration", "Progress Analytics", "Mobile Access"],
      },
    ],
  },
  training: {
    espotPackages: [
      {
        id: "espot-training",
        provider: "ESpot",
        name: "Skill Builder Elite",
        description: "Industry-recognized certification program with hands-on workshops, mentor support, and job placement assistance.",
        price: 2999,
        features: ["Certified Workshops", "Industry Certifications", "1-on-1 Mentorship", "Job Placement Support", "Training Labs", "Digital Badges"],
      },
    ],
    partnerPackages: [
      {
        id: "aws-cloud",
        provider: "AWS Training Partner",
        name: "Cloud Practitioner Bootcamp",
        description: "Intensive 8-week AWS cloud certification prep with hands-on labs and exam voucher included.",
        price: 4999,
        features: ["AWS Certification Prep", "Hands-On Lab Access", "Exam Voucher Included", "Expert Instructors"],
      },
      {
        id: "google-data",
        provider: "Google Partner",
        name: "Data Analytics Certificate",
        description: "6-month Google Data Analytics professional certificate with real-world projects.",
        price: 3499,
        features: ["Google Certificate", "Real-World Projects", "Portfolio Building", "Career Support"],
      },
    ],
  },
  scholarship: {
    espotPackages: [
      {
        id: "espot-scholar",
        provider: "ESpot",
        name: "Academic Excellence Program",
        description: "Full scholarship support including application mentorship, essay review, and institution matching for top students.",
        price: 0,
        features: ["Scholarship Database Access", "Application Mentorship", "Essay Review", "Institution Matching", "Visa Guidance", "Alumni Network"],
      },
    ],
    partnerPackages: [
      {
        id: "british-council",
        provider: "British Council",
        name: "Study Abroad Pathways",
        description: "Complete study abroad support for UK universities with application, visa, and pre-departure guidance.",
        price: 1999,
        features: ["University Matching", "Application Support", "IELTS Prep", "Pre-Departure Guidance"],
      },
    ],
  },
  career: {
    espotPackages: [
      {
        id: "espot-career",
        provider: "ESpot",
        name: "Career Launch Pro",
        description: "Comprehensive career acceleration with personalized coaching, resume optimization, interview prep, and direct employer connections.",
        price: 1499,
        features: ["Career Coaching", "Resume & LinkedIn Optimization", "Mock Interviews", "Salary Negotiation", "Job Fair Access", "Employer Introductions"],
      },
    ],
    partnerPackages: [
      {
        id: "linkedin-premium",
        provider: "LinkedIn Partner",
        name: "Premium Career Suite",
        description: "LinkedIn Premium access with InMail credits, profile insights, and recruiter visibility boost.",
        price: 1999,
        features: ["Premium Profile Badge", "InMail Credits", "Recruiter Visibility", "Salary Insights"],
      },
      {
        id: "topresume",
        provider: "TopResume Partner",
        name: "Executive Resume Package",
        description: "Professional resume writing, cover letter, and LinkedIn makeover by certified career writers.",
        price: 2999,
        features: ["Executive Resume", "Cover Letter", "LinkedIn Makeover", "60-Day Guarantee"],
      },
    ],
  },
  entrepreneurship: {
    espotPackages: [
      {
        id: "espot-entrepreneur",
        provider: "ESpot",
        name: "Startup Launchpad",
        description: "12-week structured bootcamp with investor access, mentorship from serial entrepreneurs, and co-working infrastructure.",
        price: 4999,
        features: ["12-Week Bootcamp", "Investor Network Access", "Serial Entrepreneur Mentors", "Co-Working Space", "Legal Setup Support", "Go-to-Market Strategy"],
      },
    ],
    partnerPackages: [
      {
        id: "ycombinator-prep",
        provider: "Startup Accelerator",
        name: "Accelerator Prep Program",
        description: "Prepare your startup for top accelerator applications with pitch coaching and metrics refinement.",
        price: 5999,
        features: ["Pitch Deck Review", "Metrics Workshop", "Accelerator Strategy", "Mock Interviews"],
      },
    ],
  },
  leadership: {
    espotPackages: [
      {
        id: "espot-leader",
        provider: "ESpot",
        name: "Leadership Summit Pass",
        description: "Annual access to executive coaching, leadership summits, peer advisory circles, and 360° feedback assessments.",
        price: 3999,
        features: ["Executive Coaching", "Annual Summit Access", "Peer Advisory Circles", "360° Feedback", "Leadership Assessment", "Certified Leader Credential"],
      },
    ],
    partnerPackages: [
      {
        id: "hbr-subscription",
        provider: "HBR Partner",
        name: "Harvard Business Review Premium",
        description: "Annual HBR digital subscription with case study access, leadership insights, and strategy frameworks.",
        price: 1999,
        features: ["Full Digital Access", "Case Study Library", "Leadership Insights", "Strategy Frameworks"],
      },
    ],
  },
  platform: [
    {
      id: "espot-platform",
      provider: "ESpot",
      name: "Growth Platform Pro",
      description: "Full access to all ESpot platform tools, networking features, AI matching, and community chapters.",
      price: 1999,
      features: ["Full Platform Access", "AI Opportunity Matching", "Community Chapters", "Growth Dashboard", "Member Deals", "Priority Support"],
    },
  ],
  environment: [
    {
      id: "espot-green",
      provider: "ESpot",
      name: "Green Workspace Kit",
      description: "Complete workspace wellness audit, eco-certifications guidance, and sustainable living toolkit.",
      price: 999,
      features: ["Workspace Wellness Audit", "Eco-Certification Guide", "Sustainable Living Toolkit", "Air Quality Assessment"],
    },
  ],
  entertainment: [
    {
      id: "espot-fun",
      provider: "ESpot",
      name: "Premium Event Pass",
      description: "VIP access to all ESpot-organized shows, talent showcases, cultural events, and comedy nights.",
      price: 799,
      features: ["VIP Event Access", "Talent Showcases", "Cultural Events", "Priority Booking", "Family Events", "Backstage Access"],
    },
  ],
  freedom: [
    {
      id: "espot-freedom",
      provider: "ESpot",
      name: "Freedom Lifestyle Kit",
      description: "Complete toolkit for remote work, digital nomad living, and financial independence planning.",
      price: 1299,
      features: ["Remote Work Setup Guide", "Digital Nomad Program", "Passive Income Workshop", "Financial Planning", "Flexible Membership", "Travel Partner Deals"],
    },
  ],
  event: [
    {
      id: "espot-event",
      provider: "ESpot",
      name: "Event Organizer Suite",
      description: "Full event planning, execution support, vendor management, and post-event analytics.",
      price: 2999,
      features: ["Event Planning", "Vendor Management", "Venue Partnerships", "Post-Event Analytics", "Marketing Support", "On-Site Coordination"],
    },
  ],
  networking: [
    {
      id: "espot-network",
      provider: "ESpot",
      name: "Pro Networker Pass",
      description: "AI-powered professional matching, monthly mixers, and industry-specific networking circles.",
      price: 999,
      features: ["AI Professional Matching", "Monthly Networking Mixers", "Industry Circles", "Mentor Matching", "Investor Intros", "Cross-Industry Events"],
    },
  ],
  relationship: [
    {
      id: "espot-relationship",
      provider: "ESpot",
      name: "Relationship Builder Program",
      description: "Workshops, community groups, and coaching for strengthening personal and professional bonds.",
      price: 799,
      features: ["Relationship Workshops", "Community Groups", "Communication Coaching", "Family Programs", "Couple's Retreats", "Volunteering Groups"],
    },
  ],
  fame: [
    {
      id: "espot-fame",
      provider: "ESpot",
      name: "Spotlight Program",
      description: "Member storytelling, awards nominations, talent showcases, and personal branding support.",
      price: 0,
      features: ["Member Spotlight Features", "Awards Nominations", "Talent Showcases", "Media Partnerships", "Personal Branding", "Social Media Strategy"],
    },
  ],
  welfare: [
    {
      id: "espot-welfare",
      provider: "ESpot",
      name: "Community Welfare Fund",
      description: "Emergency support, group insurance access, education grants, and community aid programs.",
      price: 0,
      features: ["Emergency Support Fund", "Group Insurance", "Education Grants", "Mental Health Lines", "Community Aid Drives", "Disaster Relief"],
    },
  ],
  wealth: [
    {
      id: "espot-wealth",
      provider: "ESpot",
      name: "Wealth Builder Suite",
      description: "Investment workshops, financial planning tools, investment clubs, and access to vetted opportunities.",
      price: 2499,
      features: ["Investment Workshops", "Financial Planning Tools", "Investment Clubs", "Tax Optimization", "Retirement Planning", "Vetted Opportunities"],
    },
  ],
  prosperity: [
    {
      id: "espot-prosper",
      provider: "ESpot",
      name: "Prosperity Dashboard",
      description: "Holistic life tracking across all 20 factors with quarterly coaching and annual prosperity summit.",
      price: 1999,
      features: ["Prosperity Index Tracking", "Holistic Life Coaching", "Quarterly Reviews", "Annual Summit Access", "Growth Action Plans", "Community Access"],
    },
  ],
  power: [
    {
      id: "espot-power",
      provider: "ESpot",
      name: "Influence Accelerator",
      description: "Public speaking, board readiness, thought leadership, and strategic advisory role preparation.",
      price: 1499,
      features: ["Public Speaking Training", "Board Readiness", "Thought Leadership", "Advisory Placements", "Negotiation Skills", "Policy Advocacy"],
    },
  ],
  fortune: [
    {
      id: "espot-fortune",
      provider: "ESpot",
      name: "Opportunity Engine",
      description: "Curated opportunity matching, innovation challenges, serendipity events, and pitch competitions.",
      price: 999,
      features: ["Opportunity Matching", "Innovation Challenges", "Serendipity Events", "Pitch Competitions", "Collaboration Market", "Breakthrough Tracking"],
    },
  ],
};
