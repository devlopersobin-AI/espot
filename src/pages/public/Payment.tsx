import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowLeft, 
  CreditCard, 
  Lock, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  
  const tier = query.get("tier");
  const pkg = query.get("package");
  const price = query.get("price");
  const plan = query.get("plan");

  if (!tier || !price) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
        <div className="text-center space-y-4">
          <AlertCircle className="w-16 h-16 text-slate-300 mx-auto" />
          <h2 className="text-2xl font-black text-slate-900">No Package Selected</h2>
          <p className="text-slate-500 font-medium">Please select a membership package to continue.</p>
          <button 
            onClick={() => navigate("/membership")}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            Go to Membership
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafbfc] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-12 flex items-center gap-2 text-slate-400 hover:text-slate-600 font-bold text-sm transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Modify Selection
        </button>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* Main Payment Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-black text-slate-900 leading-tight">Complete Your <br /> <span className="text-blue-600">Global Integration</span></h1>
              <p className="text-slate-500 font-medium">Securely finalize your membership and unlock full ecosystem access.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
               <PaymentMethod 
                 name="eSewa" 
                 logo="https://esewa.com.np/common/images/esewa-logo.png"
                 description="Nepal's Leading Digital Wallet"
                 color="hover:border-emerald-500 hover:bg-emerald-50"
                 onClick={() => alert("Redirecting to eSewa...")}
               />
               <PaymentMethod 
                 name="PayPal" 
                 logo="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png"
                 description="Secure Global Payments"
                 color="hover:border-blue-500 hover:bg-blue-50"
                 onClick={() => alert("Redirecting to PayPal...")}
               />
            </div>

            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                    <CreditCard />
                 </div>
                 <div>
                    <h3 className="text-lg font-black text-slate-900">Direct Card Entry</h3>
                    <p className="text-xs font-bold text-slate-400">VISA • MASTERCARD • AMERICAN EXPRESS</p>
                 </div>
               </div>

               <div className="space-y-4">
                  <div className="grid gap-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Secure Card Number</label>
                    <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-500 transition-all font-mono" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Expiry Date</label>
                       <input type="text" placeholder="MM/YY" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 font-mono" />
                    </div>
                    <div className="grid gap-2">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">CVV</label>
                       <input type="text" placeholder="***" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 font-mono" />
                    </div>
                  </div>
               </div>

               <button className="w-full mt-10 py-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl font-black text-lg shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                 <Lock className="w-5 h-5" />
                 Secure Payment via Stripe
               </button>
            </div>

            <div className="flex items-center justify-center gap-8 py-4 opacity-40">
               <ShieldCheck className="w-12 h-12" />
               <div className="h-8 w-[1px] bg-slate-300" />
               <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-relaxed">
                  Military Grade SSL Encryption <br /> Secure Payment Gateway
               </div>
            </div>
          </motion.div>

          {/* Sidebar Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-20"
          >
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden">
               <div className="bg-blue-600 p-8 text-white">
                  <h3 className="text-xl font-black mb-1">Order Summary</h3>
                  <p className="text-blue-100/70 text-xs font-bold uppercase tracking-widest">Transaction Ref: {Math.random().toString(36).substring(7).toUpperCase()}</p>
               </div>

               <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                       <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{tier} Tier</div>
                       <h4 className="text-xl font-black text-slate-900">{pkg}</h4>
                    </div>
                    <div className="text-xl font-black text-slate-900">{price}</div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-black text-slate-600 uppercase tracking-tight">Access Enabled Instantly</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-black text-slate-600 uppercase tracking-tight">Recurring {plan} billing</span>
                     </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 space-y-4">
                     <div className="flex justify-between text-sm font-bold text-slate-400">
                        <span>Subtotal</span>
                        <span>{price}</span>
                     </div>
                     <div className="flex justify-between text-sm font-bold text-slate-400">
                        <span>Tax (VAT 0%)</span>
                        <span>$0.00</span>
                     </div>
                     <div className="flex justify-between text-2xl font-black text-slate-900 pt-4 border-t border-slate-50">
                        <span>Grand Total</span>
                        <span>{price}</span>
                     </div>
                  </div>
               </div>
               
               <div className="p-8 bg-slate-50 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-slate-400">
                     <Lock className="w-4 h-4" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Encrypted Checkout</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function PaymentMethod({ name, logo, description, color, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/20 text-left transition-all group ${color} hover:shadow-2xl hover:-translate-y-1`}
    >
      <div className="h-10 mb-6 grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100">
         <img src={logo} alt={name} className="h-full object-contain" />
      </div>
      <h4 className="text-lg font-black text-slate-900 mb-1">{name} Portal</h4>
      <p className="text-xs font-bold text-slate-400 leading-relaxed">{description}</p>
    </button>
  );
}
