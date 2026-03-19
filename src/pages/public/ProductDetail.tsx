import React from "react";
import { useParams, Link } from "react-router-dom";

// Dummy product data (should be replaced with real API or context)
const products = [
  {
    slug: "smart-watch-pro-x",
    name: "Smart Watch Pro X",
    description:
      "A premium smart watch with advanced health tracking and long battery life.",
    image: "https://picsum.photos/seed/product0/400/180",
    provider: { name: "TechMart", link: "/providers/techmart" },
    price: "$199.00",
    rating: 4.8,
    reviews: 124,
  },
  {
    slug: "wireless-earbuds-elite",
    name: "Wireless Earbuds Elite",
    description:
      "Crystal clear sound, noise cancellation, and all-day comfort.",
    image: "https://picsum.photos/seed/product1/400/180",
    provider: { name: "SoundHub", link: "/providers/soundhub" },
    price: "$129.00",
    rating: 4.7,
    reviews: 98,
  },
  // ...add more as needed
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">
          Product Not Found
        </h2>
        <p className="mb-6 text-slate-600">
          Sorry, we couldn't find that product.
        </p>
        <Link
          to="/product"
          className="text-blue-600 font-semibold hover:underline"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-xl shadow mb-8"
      />
      <h1 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-yellow-500 font-bold text-lg">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < Math.round(product.rating) ? "★" : "☆"}</span>
          ))}
        </span>
        <span className="text-slate-700 font-semibold">{product.rating}</span>
        <span className="text-slate-500 text-sm">
          ({product.reviews} reviews)
        </span>
      </div>
      <div className="mb-4 text-slate-700">{product.description}</div>
      <div className="mb-4 text-lg font-semibold text-slate-900">
        {product.price}
      </div>
      <a
        href={product.provider.link}
        className="text-blue-700 font-semibold hover:underline mb-6 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        Provided by: {product.provider.name}
      </a>
      <div className="mt-8 flex gap-4">
        <button
          className="px-6 py-2 rounded bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
          onClick={() => alert("Buy functionality coming soon!")}
        >
          Buy Product
        </button>
        <Link
          to="/product"
          className="inline-block px-6 py-2 rounded bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
