import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, Info } from "lucide-react";
import { serviceCategories } from "../../../components/public-layout/menuData";
import ServiceDetailTemplate from "../shared/ServiceDetailTemplate";
import {
  getServiceImageByPath,
  getServiceSummaryByPath,
} from "../shared/serviceImage";

const CATEGORY_BY_ROUTE: Record<string, string> = {
  equestrian: "Equestrian",
  "beauty-spa": "Beauty & Spa",
  wellness: "Wellness & Fitness",
  travel: "Tours & Travel",
  restaurants: "Restaurants & Catering",
  multimedia: "Multimedia Production",
  events: "Events & Wedding Mgmt",
  outsourcing: "Outsourcing",
};

export default function ServiceCategory() {
  const params = useParams<{ category: string; "*": string }>();
  let categoryRoute = params.category || "";
  let serviceSlug = params["*"] || "";

  if (!categoryRoute && serviceSlug) {
    const [categoryFromWildcard, ...rest] = serviceSlug.split("/");
    categoryRoute = categoryFromWildcard || "";
    serviceSlug = rest.join("/");
  }

  const categoryKey = CATEGORY_BY_ROUTE[categoryRoute];
  const categoryData = categoryKey ? serviceCategories[categoryKey] : null;

  if (!categoryData) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white flex flex-col items-center justify-center min-h-[60vh]">
        <div className="max-w-xl mx-auto text-center space-y-6">
           <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto border border-slate-100 italic font-serif text-3xl text-slate-300">?</div>
           <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Category Not Found</h1>
           <p className="text-slate-500 font-medium">The sector you are looking for does not exist in our current service ecosystem.</p>
           <Link
            to="/services"
            className="inline-flex px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
           >
            Back to Catalog
           </Link>
        </div>
      </div>
    );
  }

  if (serviceSlug) {
    const fullPath = `/services/${categoryRoute}/${serviceSlug}`;
    const service = categoryData.services.find(
      (item) => item.path === fullPath,
    );

    if (service) {
      return (
        <ServiceDetailTemplate
          categoryName={categoryKey}
          categoryDescription={categoryData.desc}
          serviceName={service.name}
          image={getServiceImageByPath(service.path, {
            width: 1600,
            height: 900,
            variant: "hero",
          })}
          servicePath={service.path}
          summary={getServiceSummaryByPath(
            service.path,
            service.name,
            categoryData.desc,
          )}
        />
      );
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-slate-50 min-h-screen pb-24"
    >
      {/* CATEGORY HERO */}
      <div className="relative h-[40vh] min-h-[400px] bg-slate-900 overflow-hidden">
         <img src={categoryData.image} alt={categoryKey} className="w-full h-full object-cover opacity-60" />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 transition-all duration-700" />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full"
               >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-100">Sector Overview</span>
               </motion.div>
               <motion.h1 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.1 }}
                 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase"
               >
                  {categoryKey}
               </motion.h1>
               <motion.p 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed"
               >
                  {categoryData.desc}
               </motion.p>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.services.map((service, i) => (
            <motion.div
              key={service.path}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 + 0.3 }}
            >
              <Link
                to={service.path}
                className="group block h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getServiceImageByPath(service.path, {
                      width: 960,
                      height: 540,
                      variant: "card",
                    })}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-8 pt-2">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                      {service.name}
                    </h3>
                    <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                       <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                    {getServiceSummaryByPath(
                      service.path,
                      service.name,
                      categoryData.desc,
                    )}
                  </p>
                  <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Premium Service</span>
                     <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest group-hover:underline">View Portfolio</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-[3rem] p-12 border border-slate-100 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
           <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-blue-600">
                 <Info className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Need a Custom Package?</h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                Connect with our category experts to build a bespoke service infrastructure tailored specifically for your operational requirements.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                 <Link
                  to="/contact"
                  className="px-10 py-5 bg-slate-900 text-white rounded-[1.5rem] text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200"
                 >
                  Consult Specialist
                 </Link>
                 <Link
                  to="/services"
                  className="px-10 py-5 bg-white border border-slate-100 text-slate-900 rounded-[1.5rem] text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all"
                 >
                  View All Sectors
                 </Link>
              </div>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
