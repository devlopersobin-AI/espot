function hashText(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function parseServicePath(servicePath: string): { category: string; slug: string } {
  const parts = servicePath.replace(/^\/+/, '').split('/');
  return {
    category: parts[1] || 'services',
    slug: parts[2] || parts[1] || 'service',
  };
}

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  equestrian: ['horse riding', 'equestrian arena', 'horse training', 'stable'],
  'beauty-spa': ['beauty spa', 'facial treatment', 'salon makeup', 'wellness massage'],
  wellness: ['wellness fitness', 'gym workout', 'yoga class', 'mindfulness'],
  travel: ['travel destination', 'vacation tour', 'mountain adventure', 'airport journey'],
  restaurants: ['restaurant dining', 'gourmet food', 'catering buffet', 'chef kitchen'],
  multimedia: ['photography studio', 'video production', 'camera filmmaker', 'drone cinematography'],
  events: ['wedding event', 'corporate event', 'event management', 'celebration venue'],
};

const SUMMARY_BY_SLUG_FRAGMENT: Record<string, string> = {
  makeup: 'Professional beauty sessions for events, shoots, and personal styling.',
  facial: 'Targeted skin and facial care experiences designed for healthy glow and confidence.',
  bridal: 'Wedding-focused beauty and preparation services for brides and family groups.',
  eyebrow: 'Precision eyebrow and eyelash services for polished everyday and event-ready looks.',
  massage: 'Relaxation-focused spa rituals with comfort, care, and stress recovery in mind.',
  hair: 'Modern hair care and styling support for routine grooming and special occasions.',
  manicure: 'Hand and foot care sessions built for hygiene, presentation, and self-care.',
  treatments: 'Specialized treatment packages tailored for body care and wellness outcomes.',
  meditation: 'Guided mindfulness practices for focus, calm, and emotional balance.',
  yoga: 'Breathwork and yoga experiences that support flexibility and holistic health.',
  fitness: 'Structured fitness routines with progressive coaching and measurable goals.',
  dietician: 'Lifestyle and nutrition guidance aligned with your routine and health targets.',
  zumba: 'High-energy dance fitness sessions built for movement, cardio, and motivation.',
  domestic: 'Local travel planning with curated routes, comfort, and logistics support.',
  international: 'End-to-end global trip planning, itinerary support, and travel coordination.',
  adventure: 'Action-packed adventure tours built around safety, thrill, and memorable routes.',
  honeymoon: 'Romantic travel experiences designed for wedding and honeymoon memories.',
  accommodation: 'Hotel and stay booking support with location, comfort, and budget options.',
  visa: 'Travel documentation and visa preparation with guided process support.',
  dining: 'Premium dining experiences curated for quality service and atmosphere.',
  catering: 'Event and corporate catering operations with scalable menu and service options.',
  tiffin: 'Reliable recurring meal delivery built for daily convenience and nutrition.',
  photography: 'Professional image capture services for events, brands, and campaigns.',
  videos: 'Creative video production workflows from concept to polished final delivery.',
  production: 'Post-production and editing services to refine visual quality and impact.',
  drone: 'Aerial photo and video capture services for dynamic perspective and storytelling.',
  corporate: 'Corporate-ready planning and execution services for business events.',
  wedding: 'Wedding planning and execution services for smooth, memorable celebrations.',
  decor: 'Theme styling and visual decor services crafted for impactful event ambience.',
  horse: 'Specialized equestrian services with guided support and safety-first operations.',
};

export function getServiceImageByPath(
  servicePath: string,
  options: { width: number; height: number; variant?: string },
): string {
  const { width, height, variant = 'main' } = options;
  const { category, slug } = parseServicePath(servicePath);
  const pool = CATEGORY_KEYWORDS[category] || ['service'];
  const tag = pool[hashText(`${slug}-${variant}`) % pool.length]
    .replace(/\s+/g, '-')
    .toLowerCase();
  const seed = `${category}-${slug}-${variant}-${tag}`.replace(/[^a-z0-9-]/g, '');
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

export function getServiceSummaryByPath(servicePath: string, serviceName: string, categoryDescription: string): string {
  const { slug } = parseServicePath(servicePath);
  for (const [fragment, summary] of Object.entries(SUMMARY_BY_SLUG_FRAGMENT)) {
    if (slug.includes(fragment)) {
      return summary;
    }
  }

  return `${serviceName} service designed for ${categoryDescription.toLowerCase()}, with practical packages and quality-first delivery.`;
}

export function getServiceHighlightsByPath(servicePath: string): string[] {
  const { category } = parseServicePath(servicePath);
  const categoryLabel: Record<string, string> = {
    equestrian: 'Equestrian support',
    'beauty-spa': 'Beauty and spa care',
    wellness: 'Wellness coaching',
    travel: 'Travel planning',
    restaurants: 'Dining and catering',
    multimedia: 'Media production',
    events: 'Event execution',
  };

  const label = categoryLabel[category] || 'Service delivery';
  return [
    `${label} with expert guidance`,
    'Flexible package options',
    'Reliable quality and support',
    'Fast response and scheduling',
  ];
}

export function getServiceParagraphsByPath(servicePath: string, serviceName: string): string[] {
  const { category } = parseServicePath(servicePath);

  const categoryParagraph: Record<string, string> = {
    equestrian: 'Our equestrian services are designed for safe participation, structured progression, and memorable experiences for individuals, families, and groups.',
    'beauty-spa': 'Our beauty and spa services focus on comfort, hygiene, and personalized care so clients can maintain confidence for daily life and special events.',
    wellness: 'Our wellness programs combine practical routines, guided sessions, and progressive support to help participants improve health outcomes sustainably.',
    travel: 'Our travel services combine itinerary planning, logistics, and on-ground coordination to ensure smooth and enjoyable domestic and international trips.',
    restaurants: 'Our restaurant and catering services are built around quality ingredients, service consistency, and flexible packages for personal and corporate needs.',
    multimedia: 'Our multimedia services deliver visual storytelling through professional production workflows, creative direction, and reliable turnaround timelines.',
    events: 'Our events and wedding management services provide complete planning, vendor coordination, and execution support from concept to final delivery.',
  };

  const intro = categoryParagraph[category] || 'Our service model combines quality delivery with reliable support and clear package options.';
  const detail = `${serviceName} includes structured planning, responsive assistance, and value-based packages tailored to different goals and budgets.`;

  return [intro, detail];
}

export function getServiceFaqByPath(servicePath: string, serviceName: string): Array<{ question: string; answer: string }> {
  const { category } = parseServicePath(servicePath);

  const categorySpecific: Record<string, { answer: string; policy: string }> = {
    equestrian: {
      answer: 'Sessions are supervised and arranged by skill level, with safety guidance provided before activities begin.',
      policy: 'Rescheduling is available based on weather and slot availability.',
    },
    'beauty-spa': {
      answer: 'Treatments are customized to your preferences and skin or grooming profile after quick consultation.',
      policy: 'Rescheduling and package upgrades are available with prior notice.',
    },
    wellness: {
      answer: 'Programs are structured by goals, current fitness level, and recommended progression plans.',
      policy: 'You can switch batches or timing slots subject to coach and schedule availability.',
    },
    travel: {
      answer: 'Trips are planned with flexible options for budget, duration, destination style, and group size.',
      policy: 'Cancellation and modification rules depend on transport and accommodation partners.',
    },
    restaurants: {
      answer: 'Menus and package plans are tailored to event size, dietary preference, and service format.',
      policy: 'Date and headcount changes are supported within the confirmation window.',
    },
    multimedia: {
      answer: 'Project scope includes concept alignment, production planning, capture, and post-edit delivery.',
      policy: 'Revision rounds and delivery timelines are defined in package agreements.',
    },
    events: {
      answer: 'Execution includes planning, vendor alignment, timeline control, and on-site coordination support.',
      policy: 'Schedule changes are supported when venue and vendor dependencies allow.',
    },
  };

  const fallback = {
    answer: 'Scope and package details are discussed before confirmation to match your requirements clearly.',
    policy: 'Changes can be requested based on timeline and availability.',
  };

  const current = categorySpecific[category] || fallback;

  return [
    {
      question: `How does ${serviceName} booking work?`,
      answer: current.answer,
    },
    {
      question: 'Can I customize the package?',
      answer: 'Yes. Packages can be adjusted based on scope, session count, and delivery expectations.',
    },
    {
      question: 'Do you provide support after booking?',
      answer: 'Yes. Our team shares confirmations, coordination support, and status updates after booking.',
    },
    {
      question: 'What is the cancellation or reschedule policy?',
      answer: current.policy,
    },
  ];
}
