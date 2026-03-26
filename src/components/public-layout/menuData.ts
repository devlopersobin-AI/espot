import {
  Sparkles,
  Calendar,
  Star,
  GraduationCap,
  Users,
  Trophy,
  Camera,
  UtensilsCrossed,
  Plane,
  Heart,
  Tent,
  Briefcase,
} from "lucide-react";
import type {
  NavItem,
  ServiceCategories,
  UpcomingEvent,
  EventType,
  DiscoveryGroup,
} from "./navTypes";

// First line navigation: Home, Membership, Partnership, Franchise, Leadership, Entrepreneurship, Sponsorship, Investment
export const mainClubNav: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Membership", path: "/membership" },
  { name: "Partnership", path: "/partner" },
  { name: "Franchise", path: "/franchise" },
  { name: "Leadership", path: "/leadership" },
  { name: "Entrepreneurship", path: "/entrepreneurship" },
  { name: "Sponsorship", path: "/sponsorship" },
  { name: "Investment", path: "/investment" },
];

// Second line navigation: Product, Service, Training, Career, Events, Search
export const secondaryClubNav: NavItem[] = [
  { name: "Product", path: "/product" },
  { name: "Service", path: "/services" },
  { name: "Training", path: "/training" },
  { name: "Career", path: "/careers" },
  { name: "Events", path: "/events" },
  { name: "Offers", path: "/offer" },
];

export const secondaryNavItems: NavItem[] = [
  { name: "Products", path: "/product" },
  { name: "Showcase", path: "/showcase" },
  { name: "Offers", path: "/offer" },
  { name: "Entrepreneurship", path: "/entrepreneurship" },
  { name: "Profiles", path: "/profiles" },
  { name: "Investment", path: "/investment" },
  { name: "Leadership", path: "/leadership" },
  { name: "Scholar", path: "/scholar" },
  { name: "Careers", path: "/careers" },
];

export const discoveryGroups: DiscoveryGroup[] = [
  {
    title: "Marketplace",
    desc: "Products, offers & profile showcase",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    items: [
      { name: "Products", path: "/product" },
      { name: "Showcase", path: "/showcase" },
      { name: "Offers", path: "/offer" },
      { name: "Profiles", path: "/profiles" },
    ],
  },
  {
    title: "Growth Programs",
    desc: "Startup tracks & development paths",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    items: [
      { name: "Entrepreneurship", path: "/entrepreneurship" },
      { name: "Investment", path: "/investment" },
      { name: "Leadership", path: "/leadership" },
      { name: "Scholar", path: "/scholar" },
    ],
  },
  {
    title: "Community",
    desc: "Career opportunities & connections",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    items: [
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
      { name: "Membership", path: "/membership" },
      { name: "Training", path: "/training" },
    ],
  },
];

export const mobileQuickLinks: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Partner", path: "/partner" },
  { name: "Franchise", path: "/franchise" },
  { name: "Training", path: "/training" },
  { name: "Membership", path: "/membership" },
  { name: "Profiles", path: "/profiles" },
  { name: "Investment", path: "/investment" },
  { name: "Entrepreneurship", path: "/entrepreneurship" },
  { name: "Leadership", path: "/leadership" },
  { name: "Scholar", path: "/scholar" },
  { name: "Products", path: "/product" },
  { name: "Offers", path: "/offer" },
  { name: "Showcase", path: "/showcase" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export const serviceCategories: ServiceCategories = {
  Equestrian: {
    icon: Tent,
    desc: "Horse riding, sports & tourism",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=300&fit=crop",
    services: [
      {
        name: "Horse Back Riding",
        path: "/services/equestrian/horse-back-riding",
      },
      {
        name: "Buggy & Horse Rentals",
        path: "/services/equestrian/buggy-horse-rentals",
      },
      { name: "Horse Buy & Sale", path: "/services/equestrian/horse-buy-sale" },
      {
        name: "Horse Accessories Sale",
        path: "/services/equestrian/horse-accessories-sale",
      },
      { name: "Horse Show", path: "/services/equestrian/horse-show" },
      {
        name: "Horse Sports & Competition",
        path: "/services/equestrian/horse-sports-competition",
      },
      {
        name: "Horse Boarding & Breeding",
        path: "/services/equestrian/horse-boarding-breeding",
      },
      { name: "Horse Tourism", path: "/services/equestrian/horse-tourism" },
    ],
  },
  "Beauty & Spa": {
    icon: Heart,
    desc: "Relaxation & personal care",
    image:
      "https://images.unsplash.com/photo-1560708457-543149eceb16?w=400&h=300&fit=crop",
    services: [
      {
        name: "Makeup & Grooming",
        path: "/services/beauty-spa/makeup-grooming",
      },
      {
        name: "Facial & Skin Care Treatments",
        path: "/services/beauty-spa/facial-skincare",
      },
      { name: "Bridal Packages", path: "/services/beauty-spa/bridal-packages" },
      {
        name: "Eyebrow & Eyelash Services",
        path: "/services/beauty-spa/eyebrow-eyelash",
      },
      {
        name: "Massage & Spa Rituals",
        path: "/services/beauty-spa/massage-spa",
      },
      { name: "Hair Care & Hair Spa", path: "/services/beauty-spa/hair-care" },
      {
        name: "Manicure & Pedicure",
        path: "/services/beauty-spa/manicure-pedicure",
      },
      {
        name: "Body Treatments & Therapies",
        path: "/services/beauty-spa/body-treatments",
      },
    ],
  },
  "Wellness & Fitness": {
    icon: Sparkles,
    desc: "Mind & body wellness programs",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
    services: [
      {
        name: "Preranalaya Wellness Package",
        path: "/services/wellness/preranalaya-wellness",
      },
      {
        name: "E-Spot Club Wellness Package",
        path: "/services/wellness/espot-wellness",
      },
      {
        name: "Meditation & Mindfulness",
        path: "/services/wellness/meditation-mindfulness",
      },
      { name: "Yoga & Breathwork", path: "/services/wellness/yoga-breathwork" },
      {
        name: "Physical Fitness Package",
        path: "/services/wellness/physical-fitness",
      },
      {
        name: "Dietician & Lifestyle Coaching",
        path: "/services/wellness/dietician-coaching",
      },
      { name: "Tai Chi", path: "/services/wellness/tai-chi" },
      { name: "Zumba & Aerobics", path: "/services/wellness/zumba-aerobics" },
    ],
  },
  "Tours & Travel": {
    icon: Plane,
    desc: "Domestic & international travel",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    services: [
      { name: "Domestic Tours", path: "/services/travel/domestic-tours" },
      {
        name: "International Tours",
        path: "/services/travel/international-tours",
      },
      {
        name: "Adventure & Extreme Sports Tours",
        path: "/services/travel/adventure-tours",
      },
      {
        name: "Wedding & Honeymoon Packages",
        path: "/services/travel/honeymoon",
      },
      { name: "Ticketing & Logistics", path: "/services/travel/ticketing" },
      { name: "Hotel & Accommodation", path: "/services/travel/accommodation" },
      {
        name: "Corporate & Group Travel",
        path: "/services/travel/corporate-travel",
      },
      {
        name: "Visa & Documentation Services",
        path: "/services/travel/visa-services",
      },
    ],
  },
  "Restaurants & Catering": {
    icon: UtensilsCrossed,
    desc: "Dining & catering solutions",
    image:
      "https://images.unsplash.com/photo-1504674900769-262c1760ebf7?w=400&h=300&fit=crop",
    services: [
      {
        name: "Fine Dining & Casual Dining",
        path: "/services/restaurants/fine-dining",
      },
      {
        name: "Buffet & À la Carte Options",
        path: "/services/restaurants/buffet-dining",
      },
      {
        name: "Special Occasion Dining",
        path: "/services/restaurants/special-occasions",
      },
      {
        name: "Celebration & Function Hosting",
        path: "/services/restaurants/function-hosting",
      },
      {
        name: "Event Catering Packages",
        path: "/services/restaurants/event-catering",
      },
      {
        name: "Corporate Catering Services",
        path: "/services/restaurants/corporate-catering",
      },
      {
        name: "Tiffin Catering Services",
        path: "/services/restaurants/tiffin-catering",
      },
      {
        name: "Delivery & On-Site Service",
        path: "/services/restaurants/delivery-service",
      },
    ],
  },
  "Multimedia Production": {
    icon: Camera,
    desc: "Photo, video & creative services",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a08f8a11da?w=400&h=300&fit=crop",
    services: [
      {
        name: "Event Photography",
        path: "/services/multimedia/event-photography",
      },
      {
        name: "Fashion Photography",
        path: "/services/multimedia/fashion-photography",
      },
      {
        name: "Product & Commercial Photography",
        path: "/services/multimedia/product-photography",
      },
      {
        name: "Studio & Outdoor Photo Shoots",
        path: "/services/multimedia/photo-shoots",
      },
      {
        name: "Creative & Cinematic Videos",
        path: "/services/multimedia/cinematic-videos",
      },
      {
        name: "Post-Production & Editing",
        path: "/services/multimedia/post-production",
      },
      {
        name: "Promotional & Corporate Videos",
        path: "/services/multimedia/corporate-videos",
      },
      {
        name: "Drone Photography & Videography",
        path: "/services/multimedia/drone-services",
      },
    ],
  },
  "Events & Wedding Mgmt": {
    icon: Calendar,
    desc: "Corporate & wedding event planning",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop",
    services: [
      {
        name: "Corporate Event Management",
        path: "/services/events/corporate-event-management",
      },
      {
        name: "Private & Social Events",
        path: "/services/events/private-social-events",
      },
      {
        name: "Venue & Vendor Management",
        path: "/services/events/venue-vendor-management",
      },
      {
        name: "Event Logistics & On-Site Management",
        path: "/services/events/event-logistics",
      },
      {
        name: "Wedding Planning & Coordination",
        path: "/services/events/wedding-planning",
      },
      {
        name: "Wedding Décor & Theme Styling",
        path: "/services/events/wedding-decor",
      },
      {
        name: "Wedding Accessories Rental",
        path: "/services/events/wedding-accessories",
      },
      {
        name: "Destination Weddings",
        path: "/services/events/destination-weddings",
      },
    ],
  },
  Outsourcing: {
    icon: Briefcase,
    desc: "Global business outsourcing & investment domains",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop",
    services: [
      {
        name: "Finance, Accounting & CFO Operations",
        path: "/services/outsourcing/finance-accounting",
      },
      {
        name: "Human Capital, HR & Workforce Solutions",
        path: "/services/outsourcing/human-capital-hr",
      },
      {
        name: "Technology, Software Engineering & IT Operations",
        path: "/services/outsourcing/technology-it",
      },
      {
        name: "Digital Marketing, Brand Strategy & Internet Growth",
        path: "/services/outsourcing/digital-marketing",
      },
      {
        name: "AI, Automation & Data Intelligence",
        path: "/services/outsourcing/ai-automation",
      },
      {
        name: "Capital Trade Operations & Supply Chain Management",
        path: "/services/outsourcing/capital-trade-supply-chain",
      },
      {
        name: "Creative, Design & Media Production",
        path: "/services/outsourcing/creative-design-media",
      },
      {
        name: "Investment, Venture Building & Business Platforms",
        path: "/services/outsourcing/investment-venture-building",
      },
    ],
  },
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    name: "Nepal Talent of the Year 2026",
    path: "/events/nepal-talent-2026",
    date: "Mar 25, 2026",
    type: "Competition",
  },
  {
    name: "Winter Kidpreneur Camp 2026",
    path: "/events/winter-kidpreneur-2026",
    date: "Apr 05, 2026",
    type: "Workshop",
  },
  {
    name: "College Trailblazer Nepal 2026",
    path: "/events/collage-trailblazer-2026",
    date: "Apr 15, 2026",
    type: "Competition",
  },
  {
    name: "MR. & Miss E-spot",
    path: "/events/mr-miss-espot",
    date: "May 10, 2026",
    type: "Show",
  },
  {
    name: "Kidspreneur Camp",
    path: "/events/kidspreneur-camp",
    date: "Jun 01, 2026",
    type: "Workshop",
  },
  {
    name: "Entrepreneurs Arena",
    path: "/events/entrepreneurs-arena",
    date: "Jun 20, 2026",
    type: "Networking",
  },
  {
    name: "On-Stage Entertainment",
    path: "/events/on-stage-entertainment",
    date: "Jul 08, 2026",
    type: "Show",
  },
  {
    name: "Wedding Expo",
    path: "/events/wedding-expo",
    date: "Jul 25, 2026",
    type: "Expo",
  },
  {
    name: "Corporate Shows",
    path: "/events/corporate-shows",
    date: "Aug 12, 2026",
    type: "Corporate",
  },
];

export const eventTypes: EventType[] = [
  {
    name: "Competitions",
    desc: "Talent shows & contests",
    icon: Trophy,
    path: "/events",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c7e4e7?w=400&h=300&fit=crop",
  },
  {
    name: "Workshops",
    desc: "Hands-on learning camps",
    icon: GraduationCap,
    path: "/events",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
  },
  {
    name: "Networking",
    desc: "Connect with industry leaders",
    icon: Users,
    path: "/events",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
  },
  {
    name: "Expos & Shows",
    desc: "Product & wedding showcases",
    icon: Star,
    path: "/events",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c7e4e7?w=400&h=300&fit=crop",
  },
];
