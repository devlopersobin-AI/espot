import React, { useState } from "react";
import Hero from "../../components/Hero";
import SubNav from "../../components/SubNav";
import { Link } from "react-router-dom";
import {
  Tag,
  Clock,
  Percent,
  Gift,
  ArrowRight,
  Star,
  Lock,
  Coins,
  User,
  Users,
  MessageSquare,
  Calendar,
  Bell,
  Trash2,
  Plus,
} from "lucide-react";

export default function Offer() {
  const subNav = [
    "Top Offers",
    "Exclusive",
    "Tokens",
    "Price Alerts",
    "Reviews",
  ];
  const [activeTab, setActiveTab] = useState(subNav[0]);

  const offers = [
    {
      id: 1,
      title: "Summer Tech Sale",
      discount: "Up to 40% OFF",
      description: "Massive discounts on selected electronics and accessories.",
      expires: "2 days",
      image: "https://picsum.photos/seed/offer1/600/400",
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "New Member Bonus",
      discount: "Get 500 Tokens",
      description:
        "Sign up today and receive bonus tokens for your first purchase.",
      expires: "Ongoing",
      image: "https://picsum.photos/seed/offer2/600/400",
      color: "bg-emerald-600",
    },
    {
      id: 3,
      title: "Partner Exclusive Deal",
      discount: "Buy 1 Get 1 Free",
      description:
        "Special offer for our verified partners on premium services.",
      expires: "5 hours",
      image: "https://picsum.photos/seed/offer3/600/400",
      color: "bg-purple-600",
    },
    {
      id: 4,
      title: "Flash Sale: Apparel",
      discount: "Flat 50% OFF",
      description: "Limited time offer on all E-SPOT branded apparel.",
      expires: "1 hour",
      image: "https://picsum.photos/seed/offer4/600/400",
      color: "bg-rose-600",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Offers & Deals"
        subtitle="Unlock exclusive discounts, earn tokens, and get the best deals across the E-SPOT ecosystem."
      />

      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-gray-900 border-gray-900 bg-gray-50"
      />

      <div className="flex-1 py-8 sm:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {activeTab === "Top Offers" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {offers.map((offer) => (
                  <Link
                    to={`/offer/${offer.id}`}
                    key={offer.id}
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row group focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="h-44 sm:h-auto sm:w-2/5 relative overflow-hidden">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-medium px-2.5 py-1 rounded-md">
                        {offer.discount}
                      </div>
                    </div>
                    <div className="p-5 sm:p-6 sm:w-3/5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {offer.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {offer.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center text-xs font-medium text-gray-500">
                          <Clock className="w-3.5 h-3.5 mr-1" /> Ends in{" "}
                          {offer.expires}
                        </div>
                        <span className="flex items-center justify-center w-8 h-8 bg-gray-50 text-gray-600 rounded-md border border-gray-200 group-hover:bg-gray-100 transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Exclusive" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <div className="bg-slate-900 rounded-xl p-6 sm:p-8 text-white mb-8 relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-xs font-medium mb-4">
                    <Star className="w-3.5 h-3.5" /> VIP Access
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                    Unlock Premium Partner Deals
                  </h2>
                  <p className="text-sm text-slate-400 mb-5">
                    Get access to hidden discounts, early product launches, and
                    exclusive bundles reserved only for verified E-SPOT partners
                    and top-tier members.
                  </p>
                  <button className="bg-white text-slate-900 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                    Verify Status to Unlock <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Currently Locked Deals
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Partner Pro Bundle",
                    desc: "Premium tools & resources pack",
                    discount: "40% OFF",
                  },
                  {
                    title: "VIP Event Pass",
                    desc: "All-access event tickets for 2026",
                    discount: "Early Bird",
                  },
                  {
                    title: "Enterprise License",
                    desc: "Unlimited usage for teams of 10+",
                    discount: "Special Rate",
                  },
                ].map((deal, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden group hover:shadow-md transition-all"
                  >
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-[3px] z-10 flex flex-col items-center justify-center transition-all group-hover:bg-white/90">
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shadow-sm mb-3">
                        <Lock className="w-5 h-5 text-slate-400" />
                      </div>
                      <span className="font-bold text-slate-700 text-sm">
                        Partner Exclusive
                      </span>
                      <span className="text-xs text-slate-500 mt-1">
                        Verify to unlock
                      </span>
                    </div>
                    <div className="opacity-40">
                      <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center mb-4">
                        <Gift className="w-5 h-5 text-rose-500" />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {deal.title}
                      </h4>
                      <p className="text-sm text-slate-500 mb-3">{deal.desc}</p>
                      <span className="inline-block text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-lg">
                        {deal.discount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Tokens" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl p-5 sm:p-6 text-slate-900 shadow-sm border border-amber-200/60">
                    <div className="w-10 h-10 bg-white/60 rounded-lg flex items-center justify-center mb-4">
                      <Coins className="w-5 h-5 text-amber-700" />
                    </div>
                    <h2 className="text-lg font-semibold mb-1">
                      E-SPOT Tokens
                    </h2>
                    <p className="text-sm text-slate-600 mb-6">
                      Earn tokens by participating in events, completing
                      courses, or making purchases. Use them to unlock
                      discounts!
                    </p>

                    <div className="bg-white rounded-lg p-4 border border-amber-200/40">
                      <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                        Your Balance
                      </div>
                      <div className="text-2xl font-bold text-slate-900 flex items-baseline gap-2">
                        2,450{" "}
                        <span className="text-sm font-medium text-slate-500">
                          TKN
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-base font-semibold text-gray-900">
                    Ways to Earn
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: "Complete Profile",
                        tokens: "+500",
                        icon: User,
                      },
                      {
                        title: "Refer a Friend",
                        tokens: "+1000",
                        icon: Users,
                      },
                      {
                        title: "Write a Review",
                        tokens: "+50",
                        icon: MessageSquare,
                      },
                      {
                        title: "Daily Login",
                        tokens: "+10",
                        icon: Calendar,
                      },
                    ].map((way, i) => (
                      <div
                        key={i}
                        className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 hover:shadow-sm transition-shadow cursor-pointer"
                      >
                        <div className="w-9 h-9 bg-gray-50 text-gray-600 rounded-lg flex items-center justify-center shrink-0 border border-gray-100">
                          <way.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {way.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            Earn {way.tokens} tokens
                          </p>
                        </div>
                        <div className="font-semibold text-gray-700 text-sm">
                          {way.tokens}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Price Alerts" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-gray-50 text-gray-600 rounded-lg flex items-center justify-center border border-gray-100">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900">
                      Active Price Alerts
                    </h2>
                    <p className="text-sm text-gray-500">
                      We'll notify you when these items hit your target price.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      item: "Pro Developer Course Bundle",
                      current: "$199",
                      target: "$149",
                      image: "https://picsum.photos/seed/alert1/100/100",
                    },
                    {
                      item: "Annual Premium Membership",
                      current: "$499",
                      target: "$399",
                      image: "https://picsum.photos/seed/alert2/100/100",
                    },
                    {
                      item: "Tech Conference 2026 Ticket",
                      current: "$299",
                      target: "$250",
                      image: "https://picsum.photos/seed/alert3/100/100",
                    },
                  ].map((alert, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={alert.image}
                        alt={alert.item}
                        className="w-14 h-14 rounded-lg object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900">
                          {alert.item}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 text-sm">
                          <span className="text-slate-500">
                            Current:{" "}
                            <span className="font-semibold text-slate-700">
                              {alert.current}
                            </span>
                          </span>
                          <span className="text-rose-600 font-bold">
                            Target: {alert.target}
                          </span>
                        </div>
                      </div>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-5 py-3 border-2 border-dashed border-gray-200 rounded-lg text-gray-500 font-medium text-sm hover:border-gray-300 hover:text-gray-700 transition-all flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" /> Add New Alert
                </button>
              </div>
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-base font-semibold text-gray-900">
                  Deal Reviews
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
                    (1,204 reviews)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "David W.",
                    deal: "Summer Tech Sale",
                    rating: 5,
                    text: "Incredible discounts. Saved over $200 on my new setup. The token bonus was a nice surprise too!",
                    date: "2 days ago",
                  },
                  {
                    name: "Sarah M.",
                    deal: "Partner Exclusive Deal",
                    rating: 5,
                    text: "Being a partner really pays off. The BOGO deal on premium services helped me scale my business faster.",
                    date: "1 week ago",
                  },
                  {
                    name: "James L.",
                    deal: "New Member Bonus",
                    rating: 4,
                    text: "Great welcome offer. The 500 tokens were easy to claim and use on my first purchase.",
                    date: "2 weeks ago",
                  },
                  {
                    name: "Emily R.",
                    deal: "Flash Sale: Apparel",
                    rating: 5,
                    text: "Got some amazing E-SPOT merch for half the price. Quality is excellent.",
                    date: "1 month ago",
                  },
                  {
                    name: "Michael T.",
                    deal: "Summer Tech Sale",
                    rating: 4,
                    text: "Good deals, but some items sold out too quickly. Still managed to get a great discount on accessories.",
                    date: "1 month ago",
                  },
                  {
                    name: "Jessica K.",
                    deal: "Partner Exclusive Deal",
                    rating: 5,
                    text: "The exclusive deals are consistently good. Makes the partnership program highly valuable.",
                    date: "2 months ago",
                  },
                ].map((review, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
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
                    <div className="inline-block px-2 py-1 bg-rose-50 text-rose-700 text-xs font-bold rounded mb-3">
                      {review.deal}
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
            "Top Offers",
            "Exclusive",
            "Tokens",
            "Price Alerts",
            "Reviews",
          ].includes(activeTab) && (
            <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Tag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
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
