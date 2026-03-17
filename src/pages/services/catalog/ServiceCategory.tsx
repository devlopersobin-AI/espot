import { useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const serviceDetails: Record<string, { title: string; description: string; services: { name: string; description: string }[] }> = {
  'equestrian': {
    title: 'Equestrian Services',
    description: 'Premium horse riding, training, and equestrian experiences.',
    services: [
      { name: 'Horse Back Riding', description: 'Professional guided horse riding lessons and trail experiences' },
      { name: 'Buggy & Horse Rentals', description: 'Rent horses and buggies for special occasions and adventures' },
      { name: 'Horse Buy & Sale', description: 'Premium horse trading and sales services' },
      { name: 'Horse Accessories Sale', description: 'High-quality equestrian gear and accessories' },
      { name: 'Horse Show', description: 'Professional horse shows and exhibitions' },
      { name: 'Horse Sports & Competition', description: 'Organized competitive equestrian events' },
      { name: 'Horse Boarding & Breeding', description: 'Professional boarding and breeding facilities' },
      { name: 'Horse Tourism', description: 'Guided equestrian tourism experiences' },
    ],
  },
  'beauty-spa': {
    title: 'Beauty and Spa Services',
    description: 'Premium beauty and wellness treatments tailored to rejuvenate your body and mind.',
    services: [
      { name: 'Spa Treatments', description: 'Relaxing and rejuvenating spa experiences' },
      { name: 'Facial & Skincare', description: 'Professional facial treatments and skincare services' },
      { name: 'Hair Salon Services', description: 'Expert hair styling and treatment services' },
      { name: 'Massage Therapy', description: 'Therapeutic massage for wellness and relaxation' },
      { name: 'Body Care', description: 'Comprehensive body care and maintenance services' },
      { name: 'Wellness Treatments', description: 'Holistic wellness and preventative treatments' },
    ],
  },
  'wellness': {
    title: 'Wellness and Fitness',
    description: 'Comprehensive wellness and fitness programs designed for your well-being.',
    services: [
      { name: 'Preranalaya Wellness Package', description: 'Complete wellness program with expert guidance' },
      { name: 'E-Spot Club Wellness Package', description: 'Exclusive E-Spot wellness membership and services' },
      { name: 'Meditation & Mindfulness', description: 'Guided meditation and mindfulness training' },
      { name: 'Yoga & Breathwork', description: 'Professional yoga classes and breathing techniques' },
      { name: 'Physical Fitness Package', description: 'Comprehensive fitness training and programs' },
      { name: 'Dietician & Lifestyle Coaching', description: 'Personalized nutrition and lifestyle coaching' },
      { name: 'Tai Chi', description: 'Traditional Tai Chi classes for balance and wellness' },
      { name: 'Zumba & Aerobics', description: 'Fun and energetic fitness dance classes' },
    ],
  },
  'travel': {
    title: 'Tours and Travel',
    description: 'Explore the world with our curated travel experiences and packages.',
    services: [
      { name: 'Domestic Tours', description: 'Guided tours throughout Nepal and surrounding regions' },
      { name: 'International Tours', description: 'Premium international travel packages' },
      { name: 'Adventure & Extreme Sports Tours', description: 'Thrilling adventure and sports tourism' },
      { name: 'Wedding & Honeymoon Packages', description: 'Romantic wedding and honeymoon destinations' },
      { name: 'Ticketing & Logistics', description: 'Complete travel arrangement and ticketing services' },
      { name: 'Hotel & Accommodation', description: 'Premium hotel and accommodation bookings' },
      { name: 'Corporate & Group Travel', description: 'Corporate group travel and team building packages' },
      { name: 'Visa & Documentation Services', description: 'Visa processing and travel documentation services' },
    ],
  },
  'restaurants': {
    title: 'Restaurants & Catering',
    description: 'Exquisite dining experiences and professional catering services for all occasions.',
    services: [
      { name: 'Fine Dining & Casual Dining', description: 'Premium dining experiences for all occasions' },
      { name: 'Buffet & À la Carte Options', description: 'Flexible dining options with diverse menus' },
      { name: 'Special Occasion Dining', description: 'Customized menus for celebrations and special events' },
      { name: 'Celebration & Function Hosting', description: 'Complete event hosting and management services' },
      { name: 'Event Catering Packages', description: 'Professional catering for all event sizes' },
      { name: 'Corporate Catering Services', description: 'Corporate meeting and event catering' },
      { name: 'Tiffin Catering Services', description: 'Daily meal delivery and tiffin services' },
      { name: 'Delivery & On-Site Service', description: 'Convenient delivery and on-site catering services' },
    ],
  },
  'multimedia': {
    title: 'Multimedia Production',
    description: 'Professional photography, videography, and multimedia production services.',
    services: [
      { name: 'Event Photography', description: 'Professional event photography and coverage' },
      { name: 'Fashion Photography', description: 'Stunning fashion and lifestyle photography' },
      { name: 'Product & Commercial Photography', description: 'Professional product and commercial photography' },
      { name: 'Studio & Outdoor Photo Shoots', description: 'Professional photography in studio or outdoor settings' },
      { name: 'Creative & Cinematic Videos', description: 'High-quality cinematic video production' },
      { name: 'Post-Production & Editing', description: 'Professional video and photo editing services' },
      { name: 'Promotional & Corporate Videos', description: 'Corporate and promotional video production' },
      { name: 'Drone Photography & Videography', description: 'Aerial drone photography and videography services' },
    ],
  },
  'events': {
    title: 'Events & Wedding Management',
    description: 'Complete event planning and coordination for celebrations and corporate gatherings.',
    services: [
      { name: 'Corporate Event Management', description: 'Professional corporate event planning and execution' },
      { name: 'Private & Social Events', description: 'Personal and social event planning services' },
      { name: 'Venue & Vendor Management', description: 'Venue selection and vendor coordination' },
      { name: 'Event Logistics & On-Site Management', description: 'Complete event logistics and management' },
      { name: 'Wedding Planning & Coordination', description: 'Professional wedding planning and coordination' },
      { name: 'Wedding Décor & Theme Styling', description: 'Creative wedding decoration and theme design' },
      { name: 'Wedding Accessories Rental', description: 'Premium wedding accessories and decoration rental' },
      { name: 'Destination Weddings', description: 'Destination wedding planning and execution' },
    ],
  },
};

export default function ServiceCategory() {
  const { category } = useParams<{ category: string }>();
  const details = serviceDetails[category || ''] || {
    title: 'Service Category',
    description: 'Professional services tailored to your needs.',
    services: [],
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">{details.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">{details.description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.services.map((service) => (
            <div
              key={service.name}
              className="group bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <p className="text-sm text-gray-600 mt-3">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">Contact us today to learn more about our services.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
