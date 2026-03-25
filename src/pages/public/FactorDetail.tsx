import React from "react";
import { useParams, Link } from "react-router-dom";
import { factorDetails } from "../../data/factorDetails";
import { factorPackages } from "../../data/factorPackages";
import { providerLogos } from "../../data/providerLogos";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function FactorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const details = factorDetails[slug || ""];
  
  // Handle inconsistent data structure in factorPackages
  const rawPackages = factorPackages[slug || ""];
  let espotPackages = [];
  let partnerPackages = [];

  if (Array.isArray(rawPackages)) {
    espotPackages = rawPackages.filter(p => p.provider === "ESpot");
    partnerPackages = rawPackages.filter(p => p.provider !== "ESpot");
  } else if (rawPackages && typeof rawPackages === 'object') {
    espotPackages = rawPackages.espotPackages || [];
    partnerPackages = rawPackages.partnerPackages || [];
  }

  if (!details) {
    return (
      <div className="max-w-2xl mx-auto py-24 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-red-600">
          Factor Not Found
        </h1>
        <p className="text-lg text-gray-600">
          Sorry, we couldn't find details for this factor. Please return to the explore page.
        </p>
        <Link to="/membership" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-bold">
          Back to Factors
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faf7] pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1a4a35] to-[#2d5a44] pt-32 pb-24 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center text-5xl mb-8 shadow-2xl border border-white/20">
            {details.icon || "✨"}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-sm">
            {details.title}
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl font-medium leading-relaxed">
            Discover how {details.title.toLowerCase()} shapes your journey to ultimate success and personal mastery.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 space-y-12">
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white rounded-[2rem] p-10 shadow-xl border border-emerald-50 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-4 mb-6 text-[#1a4a35]">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black">What is {details.title}?</h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg font-medium">{details.what}</p>
          </section>

          <section className="bg-white rounded-[2rem] p-10 shadow-xl border border-blue-50 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-4 mb-6 text-blue-700">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black">Why is it important?</h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg font-medium">{details.why}</p>
          </section>

          <section className="bg-white rounded-[2rem] p-10 shadow-xl border border-yellow-50 md:col-span-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="flex items-center gap-4 mb-8 text-amber-700">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black">Impact on Success</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  Benefits of Mastery
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">{details.espot}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  Preventing Setbacks
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">{details.example || "Proactive engagement with this factor ensures long-term stability and growth."}</p>
              </div>
            </div>
          </section>
        </div>

        {/* ESpot Exclusive Packages */}
        {espotPackages.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-600 rounded-full" />
              <h2 className="text-3xl font-black text-slate-900">ESpot Exclusive Package</h2>
            </div>
            <div className="grid gap-8">
              {espotPackages.map((pkg) => (
                <div key={pkg.id} className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                  <div className="p-8 md:p-12 flex-1 text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <img src="/logo.png" alt="ESpot" className="h-10 w-10 bg-white rounded-lg p-1" />
                      <h3 className="text-3xl font-bold">{pkg.name}</h3>
                    </div>
                    <p className="text-blue-100 text-lg mb-8 max-w-xl">
                      {pkg.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {pkg.features.map(f => (
                        <div key={f} className="flex items-center gap-3 text-blue-50">
                          <CheckCircle2 className="w-5 h-5 text-blue-400" />
                          <span className="font-medium">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 flex flex-col justify-center items-center border-l border-white/10 min-w-[300px]">
                    <span className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-1">Total Value</span>
                    <span className="text-5xl font-black text-white mb-6">₹{pkg.price}</span>
                    <button className="w-full py-4 bg-yellow-400 text-blue-900 font-black rounded-2xl shadow-xl hover:scale-105 transition-transform">
                      Choose ESpot Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Partner Packages */}
        {partnerPackages.length > 0 && (
          <section className="space-y-6 pt-8">
             <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-green-500 rounded-full" />
              <h2 className="text-3xl font-black text-slate-900">Partner & Hospital Packages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 flex flex-col h-full hover:shadow-2xl transition group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 flex-shrink-0">
                      {providerLogos[pkg.provider] ? (
                        <img
                          src={providerLogos[pkg.provider]}
                          alt={pkg.provider}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <ShieldCheck className="w-6 h-6 text-slate-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 leading-tight">{pkg.name}</h4>
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-tighter">{pkg.provider}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 flex-1 italic">"{pkg.description}"</p>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.slice(0, 4).map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Premium Plan</span>
                      <span className="text-2xl font-black text-slate-900">₹{pkg.price}</span>
                    </div>
                    <Link
                      to={pkg.providerId ? `/profile/partner/${pkg.providerId}` : `/profiles`} 
                      className="inline-flex items-center gap-1.5 text-blue-600 font-bold hover:text-blue-800 transition text-sm underline-offset-4 hover:underline"
                    >
                      See More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
