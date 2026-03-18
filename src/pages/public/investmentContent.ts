export const eSpotClubHighlights = [
  {
    title: "High-Growth Sectors",
    description:
      "Invest in high-growth sectors such as Equestrian, Entertainment, Beauty & Spa, Wellness & Fitness, Tours & Travel, Restaurant & Catering, Photography & Videography and Events & Wedding Management.",
  },
  {
    title: "Innovative Leadership",
    description:
      "Be part of a visionary team driving sustainable growth and meaningful market impact.",
  },
  {
    title: "Exclusive Opportunities",
    description:
      "Gain access to unique projects with strong financial returns and high growth potential.",
  },
  {
    title: "Global Reach",
    description:
      "Benefit from worldwide demand across diverse and profitable sectors.",
  },
  {
    title: "Impactful Investments",
    description:
      "Invest in ventures that generate both financial returns and positive social impact.",
  },
  {
    title: "Flexible Role",
    description:
      "Choose your level of involvement, from active partner to silent investor.",
  },
];
export type InvestmentOpportunitySummary = {
  id: number;
  slug: string;
  title: string;
  sector:
    | "Equestrian"
    | "Events"
    | "Beauty & Spa"
    | "Wellness & Fitness"
    | "Tours & Travel"
    | "Restaurants & Catering"
    | "Multimedia Production"
    | "Events & Wedding Management";
  stage: "Seed" | "Series A" | "Growth";
  ticket: string;
  location: string;
  traction: string;
  raised: number;
  target: number;
  fit: "High" | "Medium";
};

export type InvestmentOpportunityContent = {
  summary: InvestmentOpportunitySummary;
  thesis: string;
  useOfFunds: string[];
  milestones: string[];
  risks: string[];
  supportModel: string[];
};

const opportunities: InvestmentOpportunityContent[] = [
  // Early Bird SMPI investment plans
  {
    summary: {
      id: 101,
      slug: "early-bird-silver-smpi",
      title: "Early Bird Silver SMPI",
      sector: "Wellness & Fitness",
      stage: "Seed",
      ticket: "NPR 2,50,000",
      location: "E-Spot Club",
      traction:
        "Single Membership & Partnership Investment Plan. Complimentary 5-Year Wellness Package. Exclusive privileges and estimated return after 5 years: NPR 3,62,000 – NPR 4,00,000.",
      raised: 0,
      target: 250,
      fit: "High",
    },
    thesis:
      "Membership-based partnership model with health, wealth, and success benefits. Access to integrated life and business ecosystems.",
    useOfFunds: [
      "Membership transfer",
      "Wellness package",
      "Business partnership share",
    ],
    milestones: [
      "5-Year Exit Plan",
      "Estimated return after 5 years: NPR 3,62,000 – NPR 4,00,000",
    ],
    risks: ["Terms & Conditions apply"],
    supportModel: ["Investor Information Pack available"],
  },
  {
    summary: {
      id: 102,
      slug: "early-bird-gold-smpi",
      title: "Early Bird Gold SMPI",
      sector: "Wellness & Fitness",
      stage: "Seed",
      ticket: "NPR 5,00,000",
      location: "E-Spot Club",
      traction:
        "Couple Membership & Partnership Investment Plan. Complimentary 5-Year Wellness Package. Exclusive privileges and estimated return after 5 years: NPR 7,25,000 – NPR 8,00,000.",
      raised: 0,
      target: 500,
      fit: "High",
    },
    thesis:
      "Membership-based partnership model for couples. Enhanced privileges and returns. Access to integrated life and business ecosystems.",
    useOfFunds: [
      "Membership transfer",
      "Wellness package",
      "Business partnership share",
    ],
    milestones: [
      "5-Year Exit Plan",
      "Estimated return after 5 years: NPR 7,25,000 – NPR 8,00,000",
    ],
    risks: ["Terms & Conditions apply"],
    supportModel: ["Investor Information Pack available"],
  },
  {
    summary: {
      id: 103,
      slug: "early-bird-diamond-smpi",
      title: "Early Bird Diamond SMPI",
      sector: "Wellness & Fitness",
      stage: "Seed",
      ticket: "NPR 7,50,000",
      location: "E-Spot Club",
      traction:
        "Family Membership & Partnership Investment Plan (3 persons). Complimentary 5-Year Wellness Package. Exclusive privileges and estimated return after 5 years: NPR 10,87,000 – NPR 12,00,000.",
      raised: 0,
      target: 750,
      fit: "High",
    },
    thesis:
      "Membership-based partnership model for families. Enhanced privileges and returns. Access to integrated life and business ecosystems.",
    useOfFunds: [
      "Membership transfer",
      "Wellness package",
      "Business partnership share",
    ],
    milestones: [
      "5-Year Exit Plan",
      "Estimated return after 5 years: NPR 10,87,000 – NPR 12,00,000",
    ],
    risks: ["Terms & Conditions apply"],
    supportModel: ["Investor Information Pack available"],
  },
  {
    summary: {
      id: 104,
      slug: "early-bird-platinum-smpi",
      title: "Early Bird Platinum SMPI",
      sector: "Wellness & Fitness",
      stage: "Seed",
      ticket: "NPR 10,00,000",
      location: "E-Spot Club",
      traction:
        "Family Membership & Partnership Investment Plan (4 persons). Complimentary 5-Year Wellness Package. Exclusive privileges and estimated return after 5 years: NPR 14,50,000 – NPR 16,00,000.",
      raised: 0,
      target: 1000,
      fit: "High",
    },
    thesis:
      "Membership-based partnership model for families. Enhanced privileges and returns. Access to integrated life and business ecosystems.",
    useOfFunds: [
      "Membership transfer",
      "Wellness package",
      "Business partnership share",
    ],
    milestones: [
      "5-Year Exit Plan",
      "Estimated return after 5 years: NPR 14,50,000 – NPR 16,00,000",
    ],
    risks: ["Terms & Conditions apply"],
    supportModel: ["Investor Information Pack available"],
  },
  {
    summary: {
      id: 105,
      slug: "early-bird-crown-smpi",
      title: "Early Bird Crown SMPI",
      sector: "Wellness & Fitness",
      stage: "Seed",
      ticket: "NPR 12,50,000",
      location: "E-Spot Club",
      traction:
        "Family Membership & Partnership Investment Plan (5 persons). Complimentary 5-Year Wellness Package. Exclusive privileges and estimated return after 5 years: NPR 18,12,000 – NPR 20,00,000.",
      raised: 0,
      target: 1250,
      fit: "High",
    },
    thesis:
      "Membership-based partnership model for families. Enhanced privileges and returns. Access to integrated life and business ecosystems.",
    useOfFunds: [
      "Membership transfer",
      "Wellness package",
      "Business partnership share",
    ],
    milestones: [
      "5-Year Exit Plan",
      "Estimated return after 5 years: NPR 18,12,000 – NPR 20,00,000",
    ],
    risks: ["Terms & Conditions apply"],
    supportModel: ["Investor Information Pack available"],
  },
  {
    summary: {
      id: 1,
      slug: "equestrian-hub-expansion",
      title: "E-Spot Equestrian Hub Expansion",
      sector: "Equestrian",
      stage: "Seed",
      ticket: "$180k - $350k",
      location: "Kathmandu",
      traction:
        "Horse back riding and tourism operations active with weekend waitlist",
      raised: 210,
      target: 350,
      fit: "High",
    },
    thesis:
      "Expand premium equestrian operations with structured training programs, horse tourism routes, and managed rental assets to unlock recurring service revenue.",
    useOfFunds: [
      "Asset expansion and stable upgrades",
      "Safety, trainer, and rider program setup",
      "Tourism partnership activation",
    ],
    milestones: [
      "Q2: Stable and rider capacity doubled",
      "Q3: Tourism package launch",
      "Q4: Break-even operating cycle",
    ],
    risks: [
      "Seasonality in tourism demand",
      "Animal care compliance requirements",
    ],
    supportModel: [
      "Operations playbook",
      "Brand marketing support",
      "Partner onboarding support",
    ],
  },
  {
    summary: {
      id: 2,
      slug: "signature-events-portfolio",
      title: "Nepal Talent and Signature Events Portfolio",
      sector: "Events",
      stage: "Series A",
      ticket: "$300k - $650k",
      location: "Kathmandu",
      traction:
        "Multi-event annual pipeline including talent, youth, and corporate showcases",
      raised: 460,
      target: 650,
      fit: "High",
    },
    thesis:
      "Scale recurring event IPs under one portfolio with shared production, sponsorship sales, and media monetization rails.",
    useOfFunds: [
      "Production and venue scale-up",
      "Sponsorship and media sales team",
      "Regional event expansion setup",
    ],
    milestones: [
      "5 anchor events locked annually",
      "Sponsor renewal rate above 60%",
      "Positive event-level contribution margin",
    ],
    risks: [
      "Sponsor cycle dependence",
      "Venue availability and cost volatility",
    ],
    supportModel: [
      "Sponsor playbooks",
      "Production templates",
      "Cross-event marketing bundle",
    ],
  },
  {
    summary: {
      id: 3,
      slug: "beauty-spa-studio-network",
      title: "Beauty and Spa Premium Studio Network",
      sector: "Beauty & Spa",
      stage: "Growth",
      ticket: "$500k - $900k",
      location: "Lalitpur",
      traction:
        "Bridal packages, grooming, and spa rituals with recurring subscription clients",
      raised: 620,
      target: 900,
      fit: "Medium",
    },
    thesis:
      "Build a high-margin premium beauty and wellness network through subscription services and event-linked package demand.",
    useOfFunds: [
      "Studio expansion and equipment",
      "Staff certification and quality systems",
      "Digital booking and CRM stack",
    ],
    milestones: [
      "3 premium studios operational",
      "Subscription churn under 8%",
      "Bridal package conversion lift",
    ],
    risks: [
      "Retention and service quality variance",
      "High competition in metro areas",
    ],
    supportModel: [
      "Service SOP library",
      "Talent training academy",
      "Demand partnerships with event vertical",
    ],
  },
  {
    summary: {
      id: 4,
      slug: "wellness-fitness-centers",
      title: "Wellness and Fitness Integrated Centers",
      sector: "Wellness & Fitness",
      stage: "Series A",
      ticket: "$350k - $700k",
      location: "Pokhara",
      traction:
        "Yoga, meditation, and coaching programs at 72% average capacity",
      raised: 430,
      target: 700,
      fit: "High",
    },
    thesis:
      "Capture recurring demand in preventive wellness via integrated physical, mental, and lifestyle program memberships.",
    useOfFunds: [
      "Center build-out and program design",
      "Trainer and specialist onboarding",
      "Corporate wellness channel activation",
    ],
    milestones: [
      "Multi-tier membership launch",
      "Corporate package penetration",
      "High retention operating model",
    ],
    risks: [
      "Program adherence variability",
      "Specialist availability constraints",
    ],
    supportModel: [
      "Member journey automation",
      "Corporate partnership toolkit",
      "Program analytics dashboard",
    ],
  },
  {
    summary: {
      id: 5,
      slug: "global-travel-engine",
      title: "Global Tours and Travel Engine",
      sector: "Tours & Travel",
      stage: "Growth",
      ticket: "$700k - $1.3M",
      location: "Kathmandu",
      traction:
        "Domestic and international packaged tours with visa support desk",
      raised: 820,
      target: 1300,
      fit: "Medium",
    },
    thesis:
      "Scale a full-stack travel operation combining package curation, documentation support, and partner-driven fulfillment.",
    useOfFunds: [
      "Destination and partner network build",
      "Documentation and support operations",
      "Digital itinerary and booking platform",
    ],
    milestones: [
      "Top destination partnerships signed",
      "Booking conversion lift",
      "Cross-sell with events and wedding vertical",
    ],
    risks: [
      "Travel policy and visa uncertainty",
      "External seasonality and disruptions",
    ],
    supportModel: [
      "Partner supply management",
      "Customer support workflows",
      "Campaign and route planning",
    ],
  },
  {
    summary: {
      id: 6,
      slug: "restaurants-catering-scale",
      title: "Restaurants and Catering Scale Program",
      sector: "Restaurants & Catering",
      stage: "Series A",
      ticket: "$320k - $680k",
      location: "Bhaktapur",
      traction:
        "Fine dining, event catering, and corporate meal contracts in pipeline",
      raised: 390,
      target: 680,
      fit: "High",
    },
    thesis:
      "Build a diversified food and catering network with strong event and corporate recurring contracts.",
    useOfFunds: [
      "Kitchen capacity and logistics",
      "Corporate sales and account team",
      "Menu engineering and quality controls",
    ],
    milestones: [
      "Contracted recurring B2B accounts",
      "Delivery and event fulfillment consistency",
      "Margin improvement through standardization",
    ],
    risks: [
      "Input cost fluctuations",
      "Operational consistency under peak loads",
    ],
    supportModel: [
      "Procurement controls",
      "Event integration with internal modules",
      "Central quality and service standards",
    ],
  },
  {
    summary: {
      id: 7,
      slug: "multimedia-production-studios",
      title: "Multimedia Production Studios",
      sector: "Multimedia Production",
      stage: "Growth",
      ticket: "$450k - $980k",
      location: "Kathmandu",
      traction:
        "Photography, videography, and post-production services for events and brands",
      raised: 560,
      target: 980,
      fit: "Medium",
    },
    thesis:
      "Scale production capacity across event, brand, and social media demand with higher-margin post-production services.",
    useOfFunds: [
      "Studio and gear expansion",
      "Editing and post-production pipeline",
      "Enterprise and campaign sales",
    ],
    milestones: [
      "Studio utilization optimization",
      "Agency and brand retainer contracts",
      "Turnaround time reduction",
    ],
    risks: ["Project-based revenue concentration", "Creative talent retention"],
    supportModel: [
      "Production operations framework",
      "Cross-module demand pipeline",
      "Portfolio and distribution support",
    ],
  },
  {
    summary: {
      id: 8,
      slug: "wedding-management-consortium",
      title: "Events and Wedding Management Consortium",
      sector: "Events & Wedding Management",
      stage: "Series A",
      ticket: "$380k - $760k",
      location: "Lalitpur",
      traction:
        "Destination wedding and corporate event management deals signed for 2026",
      raised: 470,
      target: 760,
      fit: "High",
    },
    thesis:
      "Create a bundled event and wedding management engine with integrated vendor orchestration and premium service tiers.",
    useOfFunds: [
      "Vendor and venue network expansion",
      "Execution team and logistics stack",
      "Destination event sales channels",
    ],
    milestones: [
      "Vendor SLAs across key cities",
      "Destination package adoption growth",
      "Premium tier revenue acceleration",
    ],
    risks: ["Vendor execution variance", "Event cancellation exposure"],
    supportModel: [
      "Vendor governance framework",
      "Integrated event workflow tools",
      "Cross-selling from membership and partner channels",
    ],
  },
];

export const earlyBirdROI: Record<
  string,
  Array<{ range: string; return: string }>
> = {
  silver: [
    { range: "1st-10th", return: "NPR 4,00,000 after 5 years" },
    { range: "11th-20th", return: "NPR 3,87,000 after 5 years" },
    { range: "21st-30th", return: "NPR 3,75,000 after 5 years" },
    { range: "31st-40th", return: "NPR 3,62,000 after 5 years" },
  ],
  gold: [
    { range: "1st-10th", return: "NPR 8,00,000 after 5 years" },
    { range: "11th-20th", return: "NPR 7,75,000 after 5 years" },
    { range: "21st-30th", return: "NPR 7,50,000 after 5 years" },
    { range: "31st-40th", return: "NPR 7,25,000 after 5 years" },
  ],
  diamond: [
    { range: "1st-10th", return: "NPR 12,00,000 after 5 years" },
    { range: "11th-20th", return: "NPR 11,62,000 after 5 years" },
    { range: "21st-30th", return: "NPR 11,25,000 after 5 years" },
    { range: "31st-40th", return: "NPR 10,87,000 after 5 years" },
  ],
  platinum: [
    { range: "1st-10th", return: "NPR 16,00,000 after 5 years" },
    { range: "11th-20th", return: "NPR 15,50,000 after 5 years" },
    { range: "21st-30th", return: "NPR 15,00,000 after 5 years" },
    { range: "31st-40th", return: "NPR 14,50,000 after 5 years" },
  ],
  crown: [
    { range: "1st-10th", return: "NPR 20,00,000 after 5 years" },
    { range: "11th-20th", return: "NPR 19,37,000 after 5 years" },
    { range: "21st-30th", return: "NPR 18,75,000 after 5 years" },
    { range: "31st-40th", return: "NPR 18,12,000 after 5 years" },
  ],
};

export const investmentOpportunities: InvestmentOpportunitySummary[] =
  opportunities.map((o) => o.summary);

const bySlug = new Map(opportunities.map((o) => [o.summary.slug, o]));

export function getInvestmentOpportunity(
  slug?: string,
): InvestmentOpportunityContent | null {
  if (!slug) return null;
  return bySlug.get(slug) ?? null;
}
