import React from "react";
import { useParams, Link } from "react-router-dom";

// Dummy data for demonstration; in a real app, fetch from API or context
const offers = [
  {
    id: "1",
    title: "Summer Tech Sale",
    discount: "Up to 40% OFF",
    description: "Massive discounts on selected electronics and accessories.",
    expires: "2 days",
    image: "https://picsum.photos/seed/offer1/600/400",
    color: "bg-blue-600",
  },
  {
    id: "2",
    title: "New Member Bonus",
    discount: "Get 500 Tokens",
    description:
      "Sign up today and receive bonus tokens for your first purchase.",
    expires: "Ongoing",
    image: "https://picsum.photos/seed/offer2/600/400",
    color: "bg-emerald-600",
  },
  {
    id: "3",
    title: "Partner Exclusive Deal",
    discount: "Buy 1 Get 1 Free",
    description: "Special offer for our verified partners on premium services.",
    expires: "5 hours",
    image: "https://picsum.photos/seed/offer3/600/400",
    color: "bg-purple-600",
  },
  {
    id: "4",
    title: "Flash Sale: Apparel",
    discount: "Flat 50% OFF",
    description: "Limited time offer on all E-SPOT branded apparel.",
    expires: "1 hour",
    image: "https://picsum.photos/seed/offer4/600/400",
    color: "bg-rose-600",
  },
];

export default function OfferDetail() {
  const { id } = useParams();
  const offer = offers.find((o) => o.id === id);

  if (!offer) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Offer Not Found</h2>
        <Link to="/offer" className="text-blue-600 hover:underline">
          Back to Offers
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <Link
        to="/offer"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to Offers
      </Link>
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full text-white ${offer.color} mb-2`}
          >
            {offer.discount}
          </span>
          <h1 className="text-2xl font-bold mb-2">{offer.title}</h1>
          <p className="text-gray-700 mb-4">{offer.description}</p>
          <div className="text-sm text-gray-500">
            Expires in: {offer.expires}
          </div>
        </div>
      </div>
    </div>
  );
}
