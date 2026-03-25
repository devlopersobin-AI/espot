// Dummy packages for each factor (expand as needed)
export const factorPackages = {
  health: {
    espotPackages: [
      {
        id: "espot-premium",
        provider: "ESpot",
        name: "ESpot Premium Wellness",
        description:
          "Annual wellness plan with telemedicine, fitness, and nutrition support.",
        price: 7999,
        features: [
          "Telemedicine",
          "Fitness Plan",
          "Nutritionist",
          "Annual Screening",
        ],
      },
    ],
    partnerPackages: [
      {
        id: "apollo-basic",
        provider: "Apollo Hospital",
        providerId: "11",
        name: "Basic Health Checkup",
        description:
          "Covers essential blood tests, ECG, and doctor consultation.",
        price: 1999,
        features: ["Blood Test", "ECG", "Doctor Consultation"],
      },
      {
        id: "fortis-heart",
        provider: "Fortis Hospital",
        providerId: "2",
        name: "Heart Health Package",
        description:
          "Comprehensive cardiac screening and lifestyle assessment.",
        price: 4999,
        features: [
          "ECG",
          "Echocardiogram",
          "Cholesterol Profile",
          "Dietician Advice",
        ],
      },
    ],
  },
  knowledge: [
    {
      id: "espot-learn",
      provider: "ESpot",
      name: "Knowledge Boost",
      description: "Access to online courses and expert webinars.",
      price: 999,
      features: ["Online Courses", "Webinars", "Resource Library"],
    },
  ],
  training: [
    {
      id: "espot-training",
      provider: "ESpot",
      name: "Skill Builder",
      description: "Hands-on workshops and certification programs.",
      price: 2999,
      features: ["Workshops", "Certifications", "Mentor Support"],
    },
  ],
  scholarship: [
    {
      id: "espot-scholar",
      provider: "ESpot",
      name: "Academic Excellence",
      description: "Scholarship and mentorship for top students.",
      price: 0,
      features: ["Scholarship", "Mentorship", "Recognition"],
    },
  ],
  career: [
    {
      id: "espot-career",
      provider: "ESpot",
      name: "Career Launch",
      description: "Career counseling and placement support.",
      price: 1499,
      features: ["Counseling", "Job Fairs", "Resume Review"],
    },
  ],
  entrepreneurship: [
    {
      id: "espot-entrepreneur",
      provider: "ESpot",
      name: "Startup Bootcamp",
      description: "Mentorship and funding access for startups.",
      price: 4999,
      features: ["Mentorship", "Funding Access", "Workshops"],
    },
  ],
  leadership: [
    {
      id: "espot-leader",
      provider: "ESpot",
      name: "Leadership Summit",
      description: "Executive coaching and leadership events.",
      price: 3999,
      features: ["Coaching", "Events", "Peer Network"],
    },
  ],
  platform: [
    {
      id: "espot-platform",
      provider: "ESpot",
      name: "Growth Platform",
      description: "Networking and business growth tools.",
      price: 1999,
      features: ["Networking", "Growth Tools", "Workshops"],
    },
  ],
  environment: [
    {
      id: "espot-green",
      provider: "ESpot",
      name: "Green Workspace",
      description: "Eco-friendly office solutions and wellness.",
      price: 999,
      features: ["Eco Solutions", "Wellness", "Consultation"],
    },
  ],
  entertainment: [
    {
      id: "espot-fun",
      provider: "ESpot",
      name: "Event Pass",
      description: "Access to shows and cultural programs.",
      price: 799,
      features: ["Shows", "Cultural Events", "VIP Access"],
    },
  ],
  freedom: [
    {
      id: "espot-freedom",
      provider: "ESpot",
      name: "Remote Work Kit",
      description: "Tools and support for flexible work.",
      price: 1299,
      features: ["Remote Tools", "Support", "Guides"],
    },
  ],
  event: [
    {
      id: "espot-event",
      provider: "ESpot",
      name: "Event Organizer",
      description: "Event planning and execution support.",
      price: 2999,
      features: ["Planning", "Vendor Support", "Execution"],
    },
  ],
  networking: [
    {
      id: "espot-network",
      provider: "ESpot",
      name: "Pro Network",
      description: "Professional networking and mentorship.",
      price: 999,
      features: ["Networking", "Mentorship", "Events"],
    },
  ],
  relationship: [
    {
      id: "espot-relationship",
      provider: "ESpot",
      name: "Relationship Builder",
      description: "Workshops and community groups.",
      price: 799,
      features: ["Workshops", "Groups", "Support"],
    },
  ],
  fame: [
    {
      id: "espot-fame",
      provider: "ESpot",
      name: "Spotlight",
      description: "Awards and member features.",
      price: 0,
      features: ["Awards", "Features", "Recognition"],
    },
  ],
  welfare: [
    {
      id: "espot-welfare",
      provider: "ESpot",
      name: "Welfare Support",
      description: "Support programs and drives.",
      price: 0,
      features: ["Support", "Drives", "Aid"],
    },
  ],
  wealth: [
    {
      id: "espot-wealth",
      provider: "ESpot",
      name: "Wealth Builder",
      description: "Investment guidance and tools.",
      price: 2499,
      features: ["Guidance", "Tools", "Workshops"],
    },
  ],
  prosperity: [
    {
      id: "espot-prosper",
      provider: "ESpot",
      name: "Prosperity Program",
      description: "Holistic success coaching.",
      price: 1999,
      features: ["Coaching", "Workshops", "Resources"],
    },
  ],
  power: [
    {
      id: "espot-power",
      provider: "ESpot",
      name: "Empowerment Kit",
      description: "Knowledge and connections for influence.",
      price: 1499,
      features: ["Knowledge", "Connections", "Workshops"],
    },
  ],
  fortune: [
    {
      id: "espot-fortune",
      provider: "ESpot",
      name: "Opportunity Finder",
      description: "Tools and events for lucky breaks.",
      price: 999,
      features: ["Tools", "Events", "Guidance"],
    },
  ],
};
