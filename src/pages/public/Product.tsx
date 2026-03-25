import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Star,
  Filter,
  Search,
  Package,
  Compass,
  ArrowRight,
  TrendingUp,
  Award,
  ShieldCheck,
  ShoppingBag
} from "lucide-react";
import { products } from "../../data/products";
import Hero from "../../components/Hero";
import SubNav from "../../components/SubNav";
import CheckoutPage from "../../components/CheckoutPage";
import { getAuthRole } from "../../auth/permissions";
import { cn } from "../../lib/utils";

export default function Product() {
  const subNav = [
    "Marketplace",
    "Elite Selection",
    "Trending",
    "New Arrivals",
    "Partner Brands",
    "Reviews",
  ];
  const [activeTab, setActiveTab] = useState(subNav[0]);
  const [productQuery, setProductQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map(p => p.category)));
    return ["All", ...unique];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const catMatch = selectedCategory === "All" || p.category === selectedCategory;
      const qMatch = p.name.toLowerCase().includes(productQuery.toLowerCase()) || 
                     p.category.toLowerCase().includes(productQuery.toLowerCase());
      return catMatch && qMatch;
    });
  }, [productQuery, selectedCategory]);

  const [checkoutProduct, setCheckoutProduct] = useState<any>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const authRole = getAuthRole();

  const handleBuy = (product: any) => {
    if (authRole !== "Member") {
      window.location.href = "/auth?mode=signup&role=Member";
      return;
    }
    setCheckoutProduct(product);
    setShowCheckout(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white">
      <Hero
        label="E-SPOT MARKETPLACE"
        title={<>Institutional Quality. <br/> <span className='text-blue-500'>Consumer Grade.</span></>}
        subtitle="Access exclusive hardware, apparel, and lifestyle assets curated by our global partner network."
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
        accentColor="text-blue-500"
      />

      <SubNav
        items={subNav}
        active={activeTab}
        setActive={setActiveTab}
        color="text-slate-900 border-slate-900 bg-white/50 backdrop-blur-md sticky top-0 z-40 shadow-sm"
      />

      <div className="flex-1 py-16 px-6 max-w-[1600px] mx-auto w-full">
        <AnimatePresence mode="wait">
          {["Marketplace", "Trending", "New Arrivals", "Partner Brands"].includes(activeTab) && (
            <motion.div
              key="Marketplace"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="space-y-12"
            >
              {/* TOP BAR / FILTERS */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                <div className="relative w-full lg:w-[400px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search the arsenal..."
                    value={productQuery}
                    onChange={(e) => setProductQuery(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto no-scrollbar">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap",
                        selectedCategory === cat 
                          ? "bg-slate-900 text-white shadow-lg" 
                          : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* PRODUCT GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    variants={itemVariants}
                    className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all flex flex-col"
                  >
                    <Link to={`/products/${p.slug}`} className="relative aspect-[4/5] block overflow-hidden">
                      <img 
                        src={p.image} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        alt={p.name}
                      />
                      <div className="absolute top-6 right-6">
                        <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl">
                          <ShoppingBag className="w-5 h-5 text-slate-900" />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/10">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-[10px] font-black text-white">{p.rating}</span>
                      </div>
                    </Link>
                    <div className="p-8 space-y-4 flex-1 flex flex-col">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{p.category}</span>
                        <span className="text-xs font-medium text-slate-400">{p.reviews} reviews</span>
                      </div>
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{p.name}</h3>
                      <p className="text-sm font-medium text-slate-500 line-clamp-2 leading-relaxed">{p.description}</p>
                      
                      <div className="pt-6 mt-auto border-t border-slate-50 flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pricing Model</p>
                          <p className="text-2xl font-black text-slate-900">{p.price}</p>
                        </div>
                        <button 
                          onClick={() => handleBuy(p)}
                          className="px-6 py-3 bg-slate-900 rounded-xl text-white font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all"
                        >
                          Unlock Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "Elite Selection" && (
            <motion.div
              key="Elite"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="max-w-5xl mx-auto space-y-12"
            >
              <div className="text-center space-y-4 mb-20">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-50 border border-yellow-100 rounded-full">
                  <Award className="w-4 h-4 text-yellow-600" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-yellow-700">Premium Tiers</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase text-slate-900 leading-none">The <span className="text-blue-600">Diamond</span> Collection</h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
                  Reserved for Diamond and Crown members. A curated selection of high-value assets and services.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[1,2,3].map(i => (
                  <div key={i} className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center gap-12 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden">
                      <img src={`https://picsum.photos/seed/elite${i}/600/600`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Elite" />
                    </div>
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">High Demand Asset</span>
                      </div>
                      <h3 className="text-3xl font-black uppercase tracking-tight">Enterprise Asset Pack 0{i}</h3>
                      <p className="text-white/40 font-medium leading-relaxed">
                        Full-scale operational suite including hardware, logistics support, and global priority handling for international ventures.
                      </p>
                      <div className="flex items-center gap-8 pt-4">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Market Value</p>
                          <p className="text-2xl font-black text-white">$12,499.00</p>
                        </div>
                        <Link to="/auth?role=Member" className="px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                          Lock In Priority
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "Reviews" && (
            <motion.div
              key="Reviews"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { name: "Justin V.", d: "The operational quality of the Enterprise Pack is unmatched. Our remote team was set up in 48 hours.", r: 5 },
                { name: "Sarah L.", d: "Seamless global shipping and the build quality of the hardware is institutional grade.", r: 4 },
                { name: "Mark Thorne", d: "As a Crown member, the private selection is where the true value lies. Exceptional curation.", r: 5 }
              ].map((rev, i) => (
                <div key={i} className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center font-black text-slate-900">{rev.name[0]}</div>
                    <div className="flex gap-1">
                      {[...Array(rev.r)].map((_, s) => <Star key={s} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                    </div>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed italic">"{rev.d}"</p>
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{rev.name}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {showCheckout && checkoutProduct && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-4xl"
            >
              <CheckoutPage
                amount={parseFloat(checkoutProduct.price.replace(/[^\d.]/g, ""))}
                currency="USD"
                provider="esewa"
                description={checkoutProduct.name}
                onConfirm={() => {
                  setShowCheckout(false);
                  alert("Order Synced with Global Operations.");
                }}
                onCancel={() => setShowCheckout(false)}
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
