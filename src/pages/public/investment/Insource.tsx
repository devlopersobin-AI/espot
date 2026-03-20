import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ventures = [
  {
    title: "Equestrian Riding",
    sector: "Equestrian",
    image: "/assets/equestrian.jpg",
    link: "/investment/insource/equestrian-riding",
  },
  {
    title: "Public Event",
    sector: "Events",
    image: "/assets/events.jpg",
    link: "/investment/insource/public-event",
  },
  {
    title: "Beauty and Spa",
    sector: "Beauty and Spa",
    image: "/assets/beauty-spa.jpg",
    link: "/investment/insource/beauty-spa",
  },
  {
    title: "Gym Workout",
    sector: "Wellness and Fitness",
    image: "/assets/wellness.jpg",
    link: "/investment/insource/wellness-fitness",
  },
  {
    title: "World Travel",
    sector: "Tours and Travel",
    image: "/assets/travel.jpg",
    link: "/investment/insource/tours-travel",
  },
  {
    title: "Outdoor Wedding Setup",
    sector: "Restaurants & Catering",
    image: "/assets/restaurants.jpg",
    link: "/investment/insource/restaurants-catering",
  },
  {
    title: "Professional Video Camera",
    sector: "Multimedia Production",
    image: "/assets/multimedia.jpg",
    link: "/investment/insource/multimedia-production",
  },
  {
    title: "Catering Food",
    sector: "Events & Wedding Management",
    image: "/assets/events-wedding.jpg",
    link: "/investment/insource/events-wedding-management",
  },
];

export default function Insource() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-emerald-900">
        Insource Investment Ventures
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ventures.map((venture, i) => (
          <motion.div
            key={venture.title}
            className="rounded-xl border border-emerald-200 bg-white p-4 flex flex-col items-start shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 60 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(16, 185, 129, 0.15)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img
              src={venture.image}
              alt={venture.title}
              className="w-full h-32 object-cover rounded-lg mb-3"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{
                delay: i * 0.08 + 0.1,
                type: "spring",
                stiffness: 80,
              }}
            />
            <div className="font-semibold text-emerald-800 mb-1">
              {venture.title}
            </div>
            <div className="text-xs text-emerald-600 mb-2">
              {venture.sector}
            </div>
            <Link
              to={venture.link}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-900 mt-auto"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
