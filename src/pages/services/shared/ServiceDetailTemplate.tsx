import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react';
import {
  getServiceFaqByPath,
  getServiceHighlightsByPath,
  getServiceImageByPath,
  getServiceParagraphsByPath,
} from './serviceImage';

type ServiceDetailTemplateProps = {
  categoryName: string;
  categoryDescription: string;
  serviceName: string;
  image: string;
  servicePath: string;
  summary?: string;
};

export default function ServiceDetailTemplate({
  categoryName,
  categoryDescription,
  serviceName,
  image,
  servicePath,
  summary,
}: ServiceDetailTemplateProps) {
  const basePath = servicePath.split('/').slice(0, 3).join('/');
  const highlights = getServiceHighlightsByPath(servicePath);
  const paragraphs = getServiceParagraphsByPath(servicePath, serviceName);
  const faqItems = getServiceFaqByPath(servicePath, serviceName);

  const gallery = [
    getServiceImageByPath(servicePath, { width: 1200, height: 800, variant: 'gallery-1' }),
    getServiceImageByPath(servicePath, { width: 1200, height: 800, variant: 'gallery-2' }),
    getServiceImageByPath(servicePath, { width: 1200, height: 800, variant: 'gallery-3' }),
    getServiceImageByPath(servicePath, { width: 1200, height: 800, variant: 'gallery-4' }),
  ];

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
      {/* CINEMATIC HERO */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={image} 
          alt={serviceName} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-20 w-full">
            <motion.div variants={itemVariants} className="space-y-6">
               <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-100">{categoryName}</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">{serviceName}</h1>
               <p className="text-lg md:text-xl text-slate-300 font-medium max-w-3xl leading-relaxed border-l-4 border-blue-500 pl-8">
                  {summary || categoryDescription}
               </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10 space-y-12">
        {/* OVERVIEW CARD */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                 <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                    <Layers className="w-6 h-6" />
                 </div>
                 <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Service Mastery</h2>
              </div>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                {paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
           </div>

           <div className="space-y-6">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-blue-400/20 transition-all duration-700" />
                 <ShieldCheck className="w-10 h-10 text-blue-400 mb-6" />
                 <h3 className="text-xl font-black mb-2 uppercase">Verified Quality</h3>
                 <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">Every service is backed by our ecosystem governance and verified by industry experts.</p>
                 <Link to="/contact" className="w-full py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                    Book Consult <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
              
              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl">
                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Service Highlights</h4>
                 <div className="space-y-4">
                    {highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                         </div>
                         <span className="text-[13px] font-bold text-slate-700">{h}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </motion.div>

        {/* VISUAL SHOWCASE */}
        <motion.div variants={itemVariants} className="space-y-8 text-center pt-12">
           <div className="space-y-2">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Outcome Showcase</h2>
              <p className="text-slate-500 font-medium">Visual high-fidelity proof of our service execution.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gallery.map((src, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative h-64 rounded-[2rem] overflow-hidden shadow-xl"
                >
                   <img src={src} alt={serviceName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute bottom-6 left-6 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-[10px] font-black uppercase tracking-widest">Detail {i+1}</p>
                      <p className="text-sm font-bold truncate">{highlights[i] || "Precision Quality"}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </motion.div>

        {/* PRICING PLANS */}
        <motion.div variants={itemVariants} className="pt-20 space-y-12">
           <div className="text-center space-y-2">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Strategic Tiers</h2>
              <p className="text-slate-500 font-medium">Select the mastery level that fits your business objectives.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Entry", price: "$200", icon: Zap, color: "text-blue-600", bg: "bg-blue-50", features: ["Basic Implementation", "Core Support", "Ecosystem Access"] },
                { name: "Executive", price: "$650", icon: Sparkles, color: "text-emerald-600", bg: "bg-emerald-50", recommended: true, features: ["Strategic Oversight", "Priority Support", "Dedicated Manager", "Resource Optimization"] },
                { name: "Elite", price: "$1,450", icon: ShieldCheck, color: "text-amber-600", bg: "bg-amber-50", features: ["24/7 Concierge", "Full Management", "Global Scaling", "M&A Support"] },
              ].map((tier, i) => (
                <div 
                  key={i}
                  className={`relative p-10 rounded-[2.5rem] border ${tier.recommended ? 'border-slate-900 bg-slate-900 text-white shadow-2xl scale-105 z-10' : 'border-slate-100 bg-white shadow-xl'} transition-all`}
                >
                   {tier.recommended && (
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                        Recommended
                     </div>
                   )}
                   <div className="flex items-center justify-between mb-8">
                      <div className={`p-4 rounded-2xl ${tier.recommended ? 'bg-white/10' : tier.bg} ${tier.color}`}>
                         <tier.icon className="w-6 h-6" />
                      </div>
                      <span className={`text-3xl font-black ${tier.recommended ? 'text-white' : 'text-slate-900'}`}>{tier.price}</span>
                   </div>
                   <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{tier.name}</h3>
                   <ul className="space-y-4 mb-10">
                      {tier.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3">
                           <CheckCircle2 className={`w-4 h-4 ${tier.recommended ? 'text-emerald-400' : 'text-blue-600'}`} />
                           <span className={`text-[13px] font-bold ${tier.recommended ? 'text-slate-300' : 'text-slate-500'}`}>{f}</span>
                        </li>
                      ))}
                   </ul>
                   <button className={`w-full py-5 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${tier.recommended ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-blue-600 shadow-xl shadow-slate-200'}`}>
                      Initialize Plan
                   </button>
                </div>
              ))}
           </div>
        </motion.div>

        {/* FAQ */}
        <motion.div variants={itemVariants} className="pt-24 space-y-12 max-w-4xl mx-auto">
           <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                 <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Ecosystem Intelligence</h2>
           </div>
           
           <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details key={i} className="group overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm transition-all hover:bg-slate-50/50">
                   <summary className="p-6 md:p-8 cursor-pointer list-none flex items-center justify-between font-black text-slate-900 uppercase tracking-tight">
                      {item.question}
                      <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-open:rotate-45 transition-transform">
                         <span className="text-slate-400 group-open:text-red-500 transition-colors">+</span>
                      </div>
                   </summary>
                   <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed">
                      {item.answer}
                   </div>
                </details>
              ))}
           </div>
        </motion.div>

        {/* CTA FOOTER */}
        <motion.div 
          variants={itemVariants}
          className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden mt-32"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none" />
           <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">Ready to integrate <br/> <span className="text-blue-400">{serviceName}</span>?</h2>
              <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">Join the E-SPOT network today and leverage our high-premium service infrastructure for your business growth.</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                 <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 rounded-[1.5rem] text-xs font-black uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl">Start Engagement</Link>
                 <Link to={basePath || '/services'} className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-[1.5rem] text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all">Back to {categoryName}</Link>
              </div>
           </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
