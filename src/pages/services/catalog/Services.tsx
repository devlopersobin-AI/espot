import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Building2, Globe } from "lucide-react";
import { serviceCategories } from "../../../components/public-layout/menuData";
import {
  getServiceImageByPath,
  getServiceSummaryByPath,
} from "../shared/serviceImage";

const CATEGORY_ROUTE_BY_NAME: Record<string, string> = {
  Equestrian: "equestrian",
  "Beauty & Spa": "beauty-spa",
  "Wellness & Fitness": "wellness",
  "Tours & Travel": "travel",
  "Restaurants & Catering": "restaurants",
  "Multimedia Production": "multimedia",
  "Events & Wedding Mgmt": "events",
  Outsourcing: "outsourcing",
};

export default function Services() {
  const categories = Object.entries(serviceCategories).map(([name, value]) => ({
    name,
    ...value,
    categoryPath: `/services/${CATEGORY_ROUTE_BY_NAME[name] || "equestrian"}`,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full bg-slate-50 min-h-screen pb-24"
    >
      {/* HEADER SECTION */}
      <div className="bg-slate-900 text-white pt-20 pb-40 px-6 overflow-hidden relative">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-50" />
         <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full mx-auto">
               <Sparkles className="w-4 h-4 text-blue-400" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-100">Marketplace Ecosystem</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">
               Mastery & Excellence <br/> <span className="text-blue-400">Services</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
               Explore our curated collection of high-premium services across eight strategic sectors. Precision-engineered solutions for the most demanding global standards.
            </motion.p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 space-y-12">
        <div className="grid grid-cols-1 gap-12">
          {categories.map((category, i) => (
            <motion.article
              key={category.name}
              variants={itemVariants}
              className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden hover:shadow-slate-200 group transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-4 relative overflow-hidden h-64 lg:h-auto">
                   <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 bg-slate-900/40 group-hover:opacity-0 transition-opacity duration-700" />
                </div>
                
                <div className="lg:col-span-8 p-8 md:p-12 space-y-8">
                  <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                       <div className="flex items-center gap-3">
                          <Building2 className="w-5 h-5 text-blue-600" />
                          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                            {category.name}
                          </h2>
                       </div>
                       <p className="text-slate-500 font-medium max-w-xl leading-relaxed">{category.desc}</p>
                    </div>
                    <Link
                      to={category.categoryPath}
                      className="inline-flex px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
                    >
                      Explore Sector
                    </Link>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="group/item flex items-center gap-6 bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
                      >
                         <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                            <img
                              src={getServiceImageByPath(service.path, {
                                width: 320,
                                height: 320,
                                variant: "thumb",
                              })}
                              alt={service.name}
                              className="w-full h-full object-cover group-hover/item:scale-110 transition-transform"
                            />
                         </div>
                         <div className="space-y-1">
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight group-hover/item:text-blue-600 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Premium Package</p>
                         </div>
                         <ArrowRight className="w-4 h-4 text-slate-300 ml-auto group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ECOSYSTEM STATS */}
        <motion.div 
          variants={itemVariants} 
          className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-2xl flex flex-col md:flex-row items-center justify-around gap-12 text-center"
        >
           {[
              { val: "24/7", lbl: "Concierge Support", icon: Globe },
              { val: "150+", lbl: "Service Specialists", icon: Sparkles },
              { val: "99.9%", lbl: "Execution Fidelity", icon: Building2 },
           ].map((stat, i) => (
             <div key={i} className="space-y-2">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                   <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-3xl font-black text-slate-900">{stat.val}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.lbl}</p>
             </div>
           ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
