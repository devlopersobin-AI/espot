import { useState } from 'react';
import { Check, Shield, Zap, Users, ArrowRight } from 'lucide-react';
import { getAuthRole, hasPermission } from '../../auth/permissions';
import type { AuthRole } from '../../auth/permissions';

export default function Membership() {
  const role = getAuthRole();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const canUpdateMembership = hasPermission(role, 'membership.update');

  const roleMembershipMeta: Record<AuthRole, { title: string; subtitle: string }> = {
    Member: { title: 'Membership Plans', subtitle: 'Select benefits that fit your networking goals and personal growth path.' },
    Partner: { title: 'Partner Tiers', subtitle: 'Choose a plan with better promotion, lead access, and campaign visibility.' },
    Franchisee: { title: 'Franchise Plans', subtitle: 'Pick a plan with operational support, territory insights, and brand resources.' },
    Entrepreneur: { title: 'Startup Plans', subtitle: 'Choose a plan designed for funding access, mentorship, and investor discovery.' },
    Leader: { title: 'Leadership Plans', subtitle: 'Select a tier focused on influence-building, forums, and mentoring reach.' },
    Scholar: { title: 'Scholar Plans', subtitle: 'Explore plans tailored to learning tools, events, and scholarship opportunities.' },
    Jobseeker: { title: 'Career Plans', subtitle: 'Choose a tier that improves your visibility, applications, and interview access.' },
    Trainer: { title: 'Trainer Plans', subtitle: 'Select a plan with better session reach, cohort tools, and certification support.' },
    Admin: { title: 'Membership Plans', subtitle: 'Configure platform plan options and monitor package performance.' },
  };

  const currentMeta = roleMembershipMeta[role];

  const plans = [
    {
      name: 'Professional',
      description: 'For individuals looking to expand their network.',
      price: billingCycle === 'annual' ? 99 : 12,
      features: [
        'Access to basic networking events',
        'Standard directory listing',
        'Community forum access',
        'Monthly industry reports'
      ],
      icon: Users,
      recommended: false
    },
    {
      name: 'Business',
      description: 'For growing teams and established professionals.',
      price: billingCycle === 'annual' ? 299 : 35,
      features: [
        'Everything in Professional',
        'Priority event registration',
        'Featured directory listing',
        'Quarterly mentorship sessions',
        'Access to premium resources'
      ],
      icon: Zap,
      recommended: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and franchise owners.',
      price: billingCycle === 'annual' ? 999 : 110,
      features: [
        'Everything in Business',
        'VIP access to all global events',
        '1-on-1 executive coaching',
        'Exclusive investment opportunities',
        'Dedicated account manager',
        'API access for integrations'
      ],
      icon: Shield,
      recommended: false
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900">{currentMeta.title}</h2>
        <p className="text-base text-gray-500 mt-3">
          {currentMeta.subtitle}
        </p>
        
        <div className="mt-8 flex justify-center">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex items-center">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Monthly billing
            </button>
            <button 
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingCycle === 'annual' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Annual billing <span className="ml-1 text-xs text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">-20%</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`bg-white rounded-2xl p-8 flex flex-col relative ${
              plan.recommended 
                ? 'border-2 border-blue-600 shadow-lg' 
                : 'border border-gray-200 shadow-sm'
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Recommended
              </div>
            )}
            
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${plan.recommended ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'}`}>
                <plan.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
            </div>
            
            <p className="text-sm text-gray-500 mb-6 h-10">{plan.description}</p>
            
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
              <span className="text-sm font-medium text-gray-500">/{billingCycle === 'annual' ? 'yr' : 'mo'}</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className={`w-5 h-5 shrink-0 ${plan.recommended ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            {canUpdateMembership ? (
              <button className={`w-full py-3 px-4 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                plan.recommended 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
                  : 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50'
              }`}>
                Select Plan <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button disabled className="w-full py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 bg-gray-100 text-gray-500 cursor-not-allowed">
                View Only <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Enterprise Contact Banner */}
      <div className="max-w-6xl mx-auto mt-12 bg-slate-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Need a custom solution?</h3>
          <p className="text-slate-300 text-sm max-w-xl">
            For large organizations requiring custom integrations, dedicated support SLAs, and volume discounts, our enterprise sales team is ready to help.
          </p>
        </div>
        <button className="shrink-0 px-6 py-3 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  );
}
