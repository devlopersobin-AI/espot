import React, { useMemo, useState, useEffect } from "react";
import { getAuthRole } from "../../auth/permissions";
import CheckoutPage from "../../components/CheckoutPage";
import Hero from "../../components/Hero";
import SubNav from "../../components/SubNav";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Star,
  Filter,
  Heart,
  Search,
  Package,
  Compass,
} from "lucide-react";
import { products } from "../../data/products";

export default function Product() {
  const subNav = [
    "Categories",
    "Featured",
    "Hot Products",
    "New Arrivals",
    "Top Products",
    "Reviews",
  ];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const [productQuery, setProductQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // products are now imported from shared data

  // Category icons are not used since shared products don't have category

  // Build categories from product data
  const categoryIcons = {
    Electronics: Compass,
    "Home Appliances": Package,
    Furniture: Package,
    Wearables: Heart,
    Lifestyle: Heart,
  };
  const categories = useMemo(() => {
    const counts = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] ?? 0) + 1;
      return acc;
    }, {});
    return [
      { name: "All", count: products.length, icon: Compass },
      ...Object.entries(counts).map(([name, count]) => ({
        name,
        count,
        icon: categoryIcons[name] || Package,
      })),
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      const queryMatch =
        product.name.toLowerCase().includes(productQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(productQuery.toLowerCase());
      return categoryMatch && queryMatch;
    });
  }, [productQuery, products, selectedCategory]);

  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const authRole = getAuthRole();

  const handleBuy = (product) => {
    if (authRole !== "Member") {
      window.location.href = "/auth?mode=signup&role=Member";
      return;
    }
    setCheckoutProduct(product);
    setShowCheckout(true);
  };

  const handlePayment = () => {
    setShowCheckout(false);
    // Save purchase to localStorage
    const purchases = JSON.parse(
      localStorage.getItem("member-purchases") || "[]",
    );
    purchases.push({
      ...checkoutProduct,
      date: new Date().toISOString(),
    });
    localStorage.setItem("member-purchases", JSON.stringify(purchases));
    alert("Purchase successful! Thank you for your order.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        bgColor="bg-slate-900"
        accentColor="text-blue-400"
        title="Products"
        subtitle="Discover high-quality products from trusted E-SPOT partners and entrepreneurs. Shop with confidence."
        label="Module"
      />

      {/* Sub Navigation */}
      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-blue-600 border-blue-600"
      />

      {/* Content Section */}
      <div className="flex-1 py-8 sm:py-12 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {activeTab === "Categories" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Browse by Category
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {categories.map((category, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setActiveTab("Featured");
                    }}
                    className={`bg-white border rounded-2xl p-4 sm:p-6 text-center hover:shadow-md transition-all cursor-pointer group ${
                      selectedCategory === category.name
                        ? "border-blue-400 bg-blue-50/50"
                        : "border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-slate-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {category.count} items
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {[
            "Featured",
            "Hot Products",
            "New Arrivals",
            "Top Products",
          ].includes(activeTab) && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {activeTab}
                  </h2>
                  <div className="text-sm font-semibold text-slate-500">
                    {filteredProducts.length} matching products
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_auto] gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      value={productQuery}
                      onChange={(e) => setProductQuery(e.target.value)}
                      placeholder="Search products or categories"
                      className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-lg whitespace-nowrap">
                      <Filter className="w-4 h-4" /> Filter
                    </span>
                    {categories.map((category) => (
                      <button
                        type="button"
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`px-3 py-2 rounded-lg border text-sm font-semibold whitespace-nowrap ${
                          selectedCategory === category.name
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.slug}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all group flex flex-col"
                  >
                    <div
                      className="h-48 sm:h-56 w-full bg-slate-100 relative overflow-hidden cursor-pointer"
                      onClick={() =>
                        (window.location.href = `/products/${product.slug}`)
                      }
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <h3
                        className="font-bold text-lg text-slate-900 mb-1 line-clamp-1 cursor-pointer"
                        onClick={() =>
                          (window.location.href = `/products/${product.slug}`)
                        }
                      >
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center text-sm font-bold text-amber-600">
                          <Star className="w-4 h-4 mr-1 fill-amber-500" />{" "}
                          {product.rating}
                        </div>
                        <span className="text-xs text-slate-400">
                          ({product.reviews})
                        </span>
                      </div>
                      <div className="font-black text-xl text-slate-900 mt-auto">
                        {product.price}
                      </div>
                      <button
                        className="mt-4 w-full px-4 py-2 rounded bg-emerald-600 text-white font-bold text-base hover:bg-emerald-700 transition"
                        onClick={() => handleBuy(product)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {showCheckout && checkoutProduct && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                  <CheckoutPage
                    amount={parseFloat(
                      checkoutProduct.price.replace(/[^\d.]/g, ""),
                    )}
                    currency="USD"
                    provider="esewa"
                    description={checkoutProduct.name}
                    onConfirm={handlePayment}
                    onCancel={() => setShowCheckout(false)}
                  />
                </div>
              )}
              {filteredProducts.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                  No products match your current search and category filter.
                </div>
              )}
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  Product Reviews
                </h2>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900">4.8</span>
                  <span className="text-slate-500 text-sm">
                    (12,405 reviews)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Sarah J.",
                    product: "Wireless Noise-Cancelling Headphones",
                    rating: 5,
                    text: "Absolutely love these headphones! The noise cancellation is top-notch and the battery life is incredible.",
                    date: "2 days ago",
                  },
                  {
                    name: "Michael T.",
                    product: "Ergonomic Office Chair",
                    rating: 4,
                    text: "Very comfortable chair for long working hours. Assembly was a bit tricky, but overall a great purchase.",
                    date: "1 week ago",
                  },
                  {
                    name: "Emily R.",
                    product: "Smart Fitness Watch",
                    rating: 5,
                    text: "Tracks everything accurately. The app integration is seamless. Highly recommend for fitness enthusiasts.",
                    date: "2 weeks ago",
                  },
                  {
                    name: "David W.",
                    product: "E-SPOT Premium Backpack",
                    rating: 5,
                    text: "Perfect size for my laptop and daily essentials. The material feels very durable and premium.",
                    date: "1 month ago",
                  },
                  {
                    name: "Jessica K.",
                    product: "Organic Cotton T-Shirt",
                    rating: 4,
                    text: "Very soft and comfortable. Fits perfectly. Would love to see more color options.",
                    date: "1 month ago",
                  },
                  {
                    name: "Robert L.",
                    product: "Professional Camera Lens",
                    rating: 5,
                    text: "Incredible sharpness and bokeh. A must-have for any serious photographer.",
                    date: "2 months ago",
                  },
                ].map((review, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">
                            {review.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {review.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`w-3 h-3 ${j < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded mb-3">
                      {review.product}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fallback for other tabs */}
          {![
            "Categories",
            "Featured",
            "Hot Products",
            "New Arrivals",
            "Top Products",
            "Reviews",
          ].includes(activeTab) && (
            <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-400 mb-2">
                {activeTab} Section
              </h2>
              <p className="text-slate-500">
                Content for {activeTab} is being updated.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
