import React, { useState } from "react";
import CheckoutPage from "../../components/CheckoutPage";
import { getAuthRole } from "../../auth/permissions";
import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  // Example highlights/specs (replace with real data as needed)
  const highlights = [
    "Premium build quality",
    "Long battery life",
    "Advanced health tracking",
    "Water resistant",
    "1-year warranty",
  ];

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

  const [showCheckout, setShowCheckout] = useState(false);
  const [provider, setProvider] = useState("esewa");
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const authRole = getAuthRole();
  const handleBuy = () => {
    if (authRole !== "Member") {
      window.location.href = "/auth?mode=signup&role=Member";
      return;
    }
    setShowCheckout(true);
  };
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Breadcrumbs */}
      <div className="text-xs text-slate-500 mb-4">
        <Link to="/product" className="hover:underline">
          Products
        </Link>{" "}
        &gt; {product.name}
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Image */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md h-80 object-cover rounded-xl shadow mb-4 bg-slate-100"
          />
          {/* Gallery thumbnails placeholder */}
          <div className="flex gap-2 mt-2">
            {[product.image, product.image, product.image].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Gallery thumbnail"
                className="w-16 h-16 object-cover rounded border border-slate-200 bg-slate-50"
              />
            ))}
          </div>
        </div>
        {/* Right: Details */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-yellow-500 font-bold text-lg">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  {i < Math.round(product.rating) ? "★" : "☆"}
                </span>
              ))}
            </span>
            <span className="text-slate-700 font-semibold">
              {product.rating}
            </span>
            <span className="text-slate-500 text-sm">
              ({product.reviews} reviews)
            </span>
          </div>
          <div className="mb-4 text-2xl font-bold text-emerald-700">
            {product.price}
          </div>
          <a
            href={product.provider.link}
            className="inline-block mb-4 px-4 py-2 rounded bg-blue-50 text-blue-700 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Seller: {product.provider.name}
          </a>
          <button
            className="block w-full mt-4 px-6 py-3 rounded bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 transition"
            onClick={handleBuy}
          >
            Buy Now
          </button>
          {showCheckout && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
                <button
                  className="absolute top-2 right-2 text-slate-400 hover:text-slate-700 text-xl font-bold"
                  onClick={() => setShowCheckout(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">
                  Checkout
                </h2>
                <div className="mb-4">
                  <div className="font-semibold text-slate-700">
                    {product.name}
                  </div>
                  <div className="text-emerald-700 font-bold text-xl">
                    {product.price}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">
                    Payment Provider
                  </label>
                  <select
                    className="w-full border rounded px-3 py-2 mb-2"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                  >
                    <option value="esewa">eSewa</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      className="flex-1 border rounded px-3 py-2"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      placeholder="Enter promo code"
                    />
                    <button
                      className="px-3 py-2 rounded bg-blue-600 text-white font-semibold"
                      onClick={() => {
                        if (promo.trim().toLowerCase() === "save10")
                          setDiscount(0.1);
                        else if (promo.trim().toLowerCase() === "save20")
                          setDiscount(0.2);
                        else setDiscount(0);
                      }}
                    >
                      Apply
                    </button>
                  </div>
                  {discount > 0 && (
                    <div className="text-green-600 text-sm mt-1">
                      Promo applied: {discount * 100}% off
                    </div>
                  )}
                  {promo && discount === 0 && (
                    <div className="text-red-600 text-sm mt-1">
                      Invalid promo code
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span>Subtotal:</span>
                    <span>{product.price}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-700">
                      <span>Discount:</span>
                      <span>
                        -
                        {(
                          parseFloat(product.price.replace(/[^\d.]/g, "")) *
                          discount
                        ).toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg mt-2">
                    <span>Total:</span>
                    <span>
                      $
                      {(
                        parseFloat(product.price.replace(/[^\d.]/g, "")) *
                        (1 - discount)
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  className="w-full px-4 py-3 rounded bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 transition"
                  onClick={() => {
                    setShowCheckout(false);
                    alert("Purchase successful! (Demo)");
                  }}
                >
                  Confirm & Pay with {provider === "esewa" ? "eSewa" : "PayPal"}
                </button>
              </div>
            </div>
          )}
          {/* Highlights/specs */}
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2 text-slate-900">
              Product Highlights
            </h2>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Description and Reviews */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-3 text-slate-900">Description</h2>
          <div className="text-slate-700 leading-relaxed mb-8">
            {product.description}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">
            Customer Reviews
          </h2>
          <div className="text-slate-500 italic">
            No reviews yet. (Demo placeholder)
          </div>
        </div>
      </div>
    </div>
  );
}
