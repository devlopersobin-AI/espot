export type EventSection = {
  id: string;
  title: string;
  body: string;
  bullets?: string[];
};

export type EventContent = {
  title: string;
  label: string;
  strapline: string;
  date: string;
  location: string;
  category: string;
  registrationFee: string;
  intro: string;
  highlights: string[];
  sections: EventSection[];
};

const defaultSections = (eventTitle: string): EventSection[] => [
  {
    id: 'about',
    title: 'About the Event',
    body: `${eventTitle} is a curated E-Spot Club experience designed to create real value through participation, visibility, and strong community interaction.`,
  },
  {
    id: 'highlights',
    title: 'Event Highlights',
    body: 'Participants gain practical exposure through live activities, networking opportunities, and structured recognition.',
    bullets: [
      'Live stage and hosted sessions',
      'Mentor and jury interactions',
      'Community and media visibility',
      'Awards, certificates, and growth opportunities',
    ],
  },
  {
    id: 'eligibility',
    title: 'Eligibility Criteria',
    body: 'This event is open to eligible participants according to event-specific age and profile requirements. Verification may be requested during registration.',
  },
  {
    id: 'support',
    title: 'Inquiry and Support',
    body: 'For registration support, sponsorship, or partnerships, use the Contact form and mention the event name in your message.',
  },
];

const buildEvent = (input: {
  title: string;
  label?: string;
  strapline: string;
  date: string;
  location: string;
  category: string;
  registrationFee: string;
  intro: string;
  highlights: string[];
}): EventContent => ({
  title: input.title,
  label: input.label ?? 'Event Program',
  strapline: input.strapline,
  date: input.date,
  location: input.location,
  category: input.category,
  registrationFee: input.registrationFee,
  intro: input.intro,
  highlights: input.highlights,
  sections: defaultSections(input.title),
});

export const eventContentMap: Record<string, EventContent> = {
  'nepal-talent-2026': {
    title: 'Nepal Talent of the Year 2026',
    label: 'Registration Form',
    strapline: 'From Stage to Star - From Star to SuperStar',
    date: 'Mar 25, 2026',
    location: 'Kathmandu, Nepal',
    category: 'Competition',
    registrationFee: 'NPR 1,000',
    intro:
      "Nepal's boldest on-stage talent celebration is here to discover, celebrate, and nurture talent from every corner of the country.",
    highlights: [
      'National-level performance platform',
      'Celebrity jury and industry mentors',
      'Media exposure and portfolio visibility',
      'Cash prizes and sponsored growth packages',
    ],
    sections: [
      {
        id: 'mission-vision',
        title: 'Mission and Vision',
        body:
          'The mission is to create Nepal\'s most trusted and scalable talent platform where emerging performers can convert talent into long-term opportunities. The vision is to build a national talent pipeline connected to entertainment, entrepreneurship, and digital media growth.',
      },
      {
        id: 'who-can-join',
        title: 'Who Can Join - No Age Limits',
        body:
          'Open to singers, dancers, actors, magicians, stand-up performers, instrumentalists, martial artists, and unique performers from all age groups and backgrounds.',
        bullets: [
          'Open category entry with fair stage segmentation',
          'Solo, duo, and group performances accepted',
          'Participants from all provinces welcome',
        ],
      },
      {
        id: 'about-event',
        title: 'About the Event',
        body:
          'Nepal Talent of the Year is an end-to-end performance journey with auditions, shortlisting, mentor rounds, stage rounds, and a grand finale. Participants receive clear evaluation rubrics and progressive feedback in each round.',
      },
      {
        id: 'event-highlights',
        title: 'Event Highlights',
        body:
          'The format is built for credibility, visibility, and growth. Top performers are promoted through official media channels and partner networks.',
        bullets: [
          'Audition and elimination rounds',
          'Live audience and jury scoring',
          'Professional photography and reels',
          'Finalist spotlight campaigns',
        ],
      },
      {
        id: 'eligibility',
        title: 'Eligibility Criteria',
        body:
          'Participants must complete registration, submit a basic profile, and comply with event ethics and stage guidelines. Minor participants may require guardian consent.',
      },
      {
        id: 'performance-categories',
        title: 'Performance Categories',
        body: 'Categories are curated to ensure fair comparisons and quality judging across diverse talents.',
        bullets: [
          'Vocal and Instrumental Music',
          'Dance and Choreography',
          'Acting and Stage Performance',
          'Magic, Martial Arts, and Special Talent',
        ],
      },
      {
        id: 'competition-structure',
        title: 'Competition Structure',
        body:
          'The competition follows a transparent multi-round process with scorecards and weighted judging criteria at each stage.',
        bullets: [
          'Round 1: Screening and profile verification',
          'Round 2: Audition performance',
          'Round 3: Mentor-led refinement round',
          'Round 4: Grand finale and title announcement',
        ],
      },
      {
        id: 'judging-criteria',
        title: 'Judging Criteria',
        body:
          'Scoring balances technical skill with stage impact, originality, discipline, and audience engagement for holistic evaluation.',
        bullets: [
          'Skill and execution',
          'Originality and creativity',
          'Stage confidence and presentation',
          'Audience connect and consistency',
        ],
      },
      {
        id: 'awards',
        title: 'Awards and Recognition',
        body:
          'Winners and finalists receive titles, certificates, media visibility, and access to strategic growth opportunities within E-Spot partner programs.',
      },
      {
        id: 'prizes-opportunities',
        title: 'Prizes and Opportunities',
        body: 'Beyond prize money, participants gain long-term visibility and professional opportunities.',
        bullets: [
          'Cash prizes and sponsored packages',
          'Brand collaborations and endorsements',
          'Priority access to future stage events',
          'Portfolio and media promotion support',
        ],
      },
      {
        id: 'event-details',
        title: 'Event Details',
        body:
          'A complete participant guide (venue flow, reporting time, required documents, and stage rules) is shared with registered participants before each round.',
      },
      {
        id: 'support',
        title: 'Inquiry and Support',
        body:
          'For registration, sponsorship, media collaboration, and partnership support, contact the E-Spot event desk with subject: Nepal Talent 2026.',
      },
      {
        id: 'faqs',
        title: 'FAQs',
        body:
          'Frequently asked questions include registration status, category selection, required documents, and schedule changes. An updated FAQ notice is published before each round.',
      },
    ],
  },
  'winter-kidpreneur-2026': buildEvent({
    title: 'Winter Kidpreneur Camp 2026',
    strapline: 'Build young founders through play, creativity, and business thinking',
    date: 'Apr 05, 2026',
    location: 'Kathmandu, Nepal',
    category: 'Workshop',
    registrationFee: 'NPR 500',
    intro: 'A high-energy camp where school-age participants learn ideation, teamwork, and real-world presentation skills.',
    highlights: ['Hands-on startup games', 'Mentor-led mini workshops', 'Kid pitch showcase', 'Participation certificates'],
  }),
  'collage-trailblazer-2026': buildEvent({
    title: 'College Trailblazer Nepal 2026',
    strapline: 'Where students step into leadership and career visibility',
    date: 'Apr 15, 2026',
    location: 'Kathmandu, Nepal',
    category: 'Competition',
    registrationFee: 'NPR 700',
    intro: 'A student-centric platform for leadership, creativity, and practical challenge-based competitions.',
    highlights: ['Inter-college challenge rounds', 'Career and scholarship pathways', 'Corporate interaction panels', 'Campus ambassador recognition'],
  }),
  'trailblazer-2026': buildEvent({
    title: 'College Trailblazer Nepal 2026',
    strapline: 'Where students step into leadership and career visibility',
    date: 'Apr 15, 2026',
    location: 'Kathmandu, Nepal',
    category: 'Competition',
    registrationFee: 'NPR 700',
    intro: 'A student-centric platform for leadership, creativity, and practical challenge-based competitions.',
    highlights: ['Inter-college challenge rounds', 'Career and scholarship pathways', 'Corporate interaction panels', 'Campus ambassador recognition'],
  }),
  'nepal-talent-of-year': buildEvent({
    title: 'Nepal Talent of the Year',
    strapline: 'National recognition for emerging performers and creators',
    date: 'Annual Cycle',
    location: 'Kathmandu, Nepal',
    category: 'Competition',
    registrationFee: 'NPR 1,000',
    intro: 'The legacy edition of Nepal Talent, focused on long-term growth and title recognition.',
    highlights: ['Grand stage performance', 'Industry jury scoring', 'Media and portfolio support', 'Winner growth track'],
  }),
  'collage-trailblazer': buildEvent({
    title: 'College Trailblazer Nepal',
    strapline: 'Empowering student leaders through practical challenges',
    date: 'Bi-annual',
    location: 'Multiple Cities, Nepal',
    category: 'Youth Program',
    registrationFee: 'NPR 500',
    intro: 'A recurring youth ecosystem event for career readiness, confidence, and innovation.',
    highlights: ['Skill rounds and tasks', 'Mentor feedback loops', 'Team collaboration labs', 'Leadership badges'],
  }),
  'mr-miss-espot': buildEvent({
    title: 'MR. & Miss E-spot',
    strapline: 'Confidence, personality, and performance on one stage',
    date: 'May 10, 2026',
    location: 'Kathmandu, Nepal',
    category: 'Show',
    registrationFee: 'NPR 1,500',
    intro: 'A premium pageant program blending personality evaluation, stage performance, and public presence.',
    highlights: ['Style and presentation rounds', 'Talent showcase segment', 'Mentored grooming workshops', 'Official title and crown ceremony'],
  }),
  'kidspreneur-camp': buildEvent({
    title: 'Kidspreneur Camp',
    strapline: 'Early entrepreneurship for curious young minds',
    date: 'Jun 01, 2026',
    location: 'Lalitpur, Nepal',
    category: 'Workshop',
    registrationFee: 'NPR 400',
    intro: 'A child-friendly camp that teaches initiative, teamwork, and idea-to-action skills.',
    highlights: ['Interactive challenge stations', 'Mini venture building exercises', 'Parent showcase day', 'Certificate and rewards'],
  }),
  'entrepreneurs-arena': buildEvent({
    title: 'Entrepreneurs Arena',
    strapline: 'Connect founders, operators, and investors in one room',
    date: 'Jun 20, 2026',
    location: 'Kathmandu, Nepal',
    category: 'Networking',
    registrationFee: 'NPR 1,200',
    intro: 'A founder-first arena for strategic networking, pitch visibility, and partnership conversations.',
    highlights: ['Startup pitch windows', 'Investor and advisor meetups', 'Business matchmaking', 'Growth opportunity board'],
  }),
  'on-stage-entertainment': buildEvent({
    title: 'On-Stage Entertainment',
    strapline: 'Live experiences with artists, hosts, and audience energy',
    date: 'Jul 08, 2026',
    location: 'Kathmandu, Nepal',
    category: 'Show',
    registrationFee: 'NPR 800',
    intro: 'A live entertainment showcase featuring multi-format performances with full-stage production support.',
    highlights: ['Live artist lineup', 'Audience engagement segments', 'Premium seating options', 'Production-quality stage experience'],
  }),
  'wedding-expo': buildEvent({
    title: 'Wedding Expo',
    strapline: 'Everything for wedding planning in one destination',
    date: 'Jul 25, 2026',
    location: 'Bhaktapur, Nepal',
    category: 'Expo',
    registrationFee: 'NPR 300',
    intro: 'A curated wedding showcase with top vendors, designers, planners, and service partners.',
    highlights: ['Vendor discovery halls', 'Live decor and styling demos', 'Package deal offers', 'Venue consultation support'],
  }),
  'corporate-shows': buildEvent({
    title: 'Corporate Shows',
    strapline: 'Professional corporate event experiences at scale',
    date: 'Aug 12, 2026',
    location: 'Kathmandu, Nepal',
    category: 'Corporate',
    registrationFee: 'By Proposal',
    intro: 'Tailored corporate experiences for launches, annual meets, recognition programs, and team events.',
    highlights: ['Custom event formats', 'Production and logistics management', 'Brand-aligned stage design', 'End-to-end execution support'],
  }),
  'global-tech-leadership-summit': buildEvent({
    title: 'Global Tech Leadership Summit',
    strapline: 'Cross-border leadership insights for digital growth',
    date: 'Oct 15, 2026',
    location: 'San Francisco, USA',
    category: 'Conference',
    registrationFee: 'USD 95',
    intro: 'An international summit on technology leadership, innovation systems, and scale execution.',
    highlights: ['Leadership keynotes', 'Panel discussions', 'Case study deep-dives', 'Global networking sessions'],
  }),
  'mastering-ai-integration': buildEvent({
    title: 'Mastering AI Integration',
    strapline: 'From AI concept to applied implementation',
    date: 'Nov 02, 2026',
    location: 'Virtual',
    category: 'Workshop',
    registrationFee: 'Free',
    intro: 'A practical workshop for teams integrating AI into operations, products, and workflows.',
    highlights: ['Use-case mapping', 'Implementation frameworks', 'Tooling walkthroughs', 'Live Q and A'],
  }),
  'european-founders-mixer': buildEvent({
    title: 'European Founders Mixer',
    strapline: 'Build founder relationships and expansion pathways',
    date: 'Nov 12, 2026',
    location: 'London, UK',
    category: 'Networking',
    registrationFee: 'EUR 40',
    intro: 'A curated mixer for founders exploring partnerships, distribution, and international growth.',
    highlights: ['Founder networking circles', 'Partner intros', 'Market expansion exchange', 'Investor social hour'],
  }),
  'web3-developer-bootcamp': buildEvent({
    title: 'Web3 Developer Bootcamp',
    strapline: 'Hands-on learning for modern decentralized stacks',
    date: 'Dec 05, 2026',
    location: 'Virtual',
    category: 'Training',
    registrationFee: 'Free',
    intro: 'An intensive technical bootcamp covering architecture, security, and deployment workflows.',
    highlights: ['Guided coding labs', 'Project-based learning', 'Code review sessions', 'Completion certification'],
  }),
  'annual-espot-gala': buildEvent({
    title: 'Annual E-Spot Gala',
    strapline: 'Celebrating impact, community, and milestones',
    date: 'Dec 20, 2026',
    location: 'New York, USA',
    category: 'Celebration',
    registrationFee: 'USD 75',
    intro: 'A flagship annual evening to celebrate achievements across members, partners, and founders.',
    highlights: ['Awards and honors', 'Featured performances', 'Leadership networking', 'Community celebration'],
  }),
  'startup-pitch-night': buildEvent({
    title: 'Startup Pitch Night',
    strapline: 'Pitch live, get feedback, and open investor conversations',
    date: 'Jan 15, 2027',
    location: 'Austin, USA',
    category: 'Competition',
    registrationFee: 'Free',
    intro: 'A high-energy evening where early-stage startups pitch to judges, mentors, and investor guests.',
    highlights: ['Live pitch rounds', 'Jury scorecards', 'Mentor feedback', 'Follow-up intro opportunities'],
  }),
};

export function getEventContent(eventId: string | undefined): EventContent {
  if (!eventId) {
    return {
      title: 'Event',
      label: 'Event Detail',
      strapline: 'Experience meaningful events with E-Spot Club',
      date: 'TBA',
      location: 'TBA',
      category: 'General',
      registrationFee: 'TBA',
      intro: 'Join us for an exciting and professionally managed event.',
      highlights: ['Curated sessions', 'Community networking', 'Structured experience'],
      sections: defaultSections('E-Spot Event'),
    };
  }

  const content = eventContentMap[eventId];
  if (content) return content;

  const title = eventId
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return {
    title,
    label: 'Event Detail',
    strapline: 'Built for quality participation and clear outcomes',
    date: 'TBA',
    location: 'TBA',
    category: 'General',
    registrationFee: 'TBA',
    intro: `${title} is part of the E-Spot Club event ecosystem, designed for visibility, engagement, and growth opportunities.`,
    highlights: [
      'Curated stage and networking format',
      'Participation certificates and recognition',
      'Access to partner opportunities',
    ],
    sections: defaultSections(title),
  };
}
