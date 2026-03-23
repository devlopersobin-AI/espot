import { useEffect, useState } from "react";
import { Check, Shield, Zap, Users, ArrowRight, Trophy, Crown, Gem, Award, Star } from "lucide-react";
import { getAuthRole, hasPermission } from "../../auth/permissions";
import type { AuthRole } from "../../auth/permissions";

type MembershipTier = "None" | "Bronze" | "Silver" | "Gold" | "Diamond" | "Platinum" | "Crown";
type SubscriptionState = "Active" | "Paused" | "Cancelled";

type TierSetting = {
  tier: Exclude<MembershipTier, "None">;
  monthlyPrice: number;
  annualPrice: number;
  enabled: boolean;
};

type ManagedAccount = {
  id: string;
  name: string;
  role: "Member" | "Partner" | "Franchisee";
  tier: MembershipTier;
  subscription: SubscriptionState;
  partnerAccess: boolean;
  franchiseAccess: boolean;
};

const DEFAULT_TIER_SETTINGS: TierSetting[] = [
  { tier: "Bronze", monthlyPrice: 0, annualPrice: 0, enabled: true },
  { tier: "Silver", monthlyPrice: 99, annualPrice: 990, enabled: true },
  { tier: "Gold", monthlyPrice: 299, annualPrice: 2990, enabled: true },
  { tier: "Diamond", monthlyPrice: 599, annualPrice: 5990, enabled: true },
  { tier: "Platinum", monthlyPrice: 999, annualPrice: 9990, enabled: true },
  { tier: "Crown", monthlyPrice: 1999, annualPrice: 19990, enabled: true },
];

const DEFAULT_MANAGED_ACCOUNTS: ManagedAccount[] = [
  {
    id: "ACC-001",
    name: "Mila Member",
    role: "Member",
    tier: "Silver",
    subscription: "Active",
    partnerAccess: false,
    franchiseAccess: false,
  },
  {
    id: "ACC-002",
    name: "Parker Partner",
    role: "Partner",
    tier: "Gold",
    subscription: "Active",
    partnerAccess: true,
    franchiseAccess: false,
  },
  {
    id: "ACC-003",
    name: "Farah Franchise",
    role: "Franchisee",
    tier: "Diamond",
    subscription: "Paused",
    partnerAccess: false,
    franchiseAccess: true,
  },
  {
    id: "ACC-004",
    name: "Jace Jobseeker",
    role: "Member",
    tier: "None",
    subscription: "Cancelled",
    partnerAccess: false,
    franchiseAccess: false,
  },
];

export default function Membership() {
  const role = getAuthRole() ?? "Member";
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual",
  );
  const canUpdateMembership = hasPermission(role, "membership.update");
  const isAdmin = role === "Admin";
  const planStorageKey = `selected-membership-plan-${role}`;
  const [selectedPlans, setSelectedPlans] = useState<string[]>(() => {
    const stored = localStorage.getItem(planStorageKey);
    const valid = [
      "Bronze", "Bronze Networking Package", "Bronze Community Package",
      "Silver", "Silver Equestrian Package", "Silver Events Package", "Silver Beauty & Spa Package", "Silver Wellness & Fitness Package",
      "Gold", "Gold Mentorship Package", "Gold Premium Resources", "Gold Strategy Session",
      "Diamond", "Diamond Executive Coaching", "Diamond VIP Global Access", "Diamond Private Equity",
      "Platinum", "Platinum Concierge Plus", "Platinum Lifestyle Events", "Platinum Global Forums",
      "Crown", "Crown Board Council", "Crown Lifetime Estate", "Crown Ultimate Legacy"
    ];
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed.filter(p => valid.includes(p));
        }
      } catch (e) {
        if (valid.includes(stored)) return [stored];
      }
    }
    return ["Bronze"];
  });
  
  const togglePlan = (planName: string) => {
    setSelectedPlans(prev => 
      prev.includes(planName) 
        ? prev.filter(p => p !== planName) 
        : [...prev, planName]
    );
  };
  const [tierSettings, setTierSettings] = useState<TierSetting[]>(() => {
    const raw = localStorage.getItem("membership-tier-settings");
    if (!raw) {
      return DEFAULT_TIER_SETTINGS;
    }
    try {
      const parsed = JSON.parse(raw) as TierSetting[];
      return Array.isArray(parsed) && parsed.length > 0
        ? parsed
        : DEFAULT_TIER_SETTINGS;
    } catch {
      return DEFAULT_TIER_SETTINGS;
    }
  });
  const [managedAccounts, setManagedAccounts] = useState<ManagedAccount[]>(
    () => {
      const raw = localStorage.getItem("membership-managed-accounts");
      if (!raw) {
        return DEFAULT_MANAGED_ACCOUNTS;
      }
      try {
        const parsed = JSON.parse(raw) as ManagedAccount[];
        return Array.isArray(parsed) && parsed.length > 0
          ? parsed
          : DEFAULT_MANAGED_ACCOUNTS;
      } catch {
        return DEFAULT_MANAGED_ACCOUNTS;
      }
    },
  );

  useEffect(() => {
    localStorage.setItem(planStorageKey, JSON.stringify(selectedPlans));
  }, [planStorageKey, selectedPlans]);

  useEffect(() => {
    if (isAdmin) {
      localStorage.setItem(
        "membership-tier-settings",
        JSON.stringify(tierSettings),
      );
      localStorage.setItem(
        "membership-managed-accounts",
        JSON.stringify(managedAccounts),
      );
    }
  }, [isAdmin, tierSettings, managedAccounts]);

  const roleMembershipMeta: Record<
    AuthRole,
    { title: string; subtitle: string }
  > = {
    Member: {
      title: "Membership Plans",
      subtitle:
        "Select benefits that fit your networking goals and personal growth path.",
    },
    Partner: {
      title: "Partner Tiers",
      subtitle:
        "Choose a plan with better promotion, lead access, and campaign visibility.",
    },
    Franchisee: {
      title: "Franchise Plans",
      subtitle:
        "Pick a plan with operational support, territory insights, and brand resources.",
    },
    Entrepreneur: {
      title: "Startup Plans",
      subtitle:
        "Choose a plan designed for funding access, mentorship, and investor discovery.",
    },
    Leader: {
      title: "Leadership Plans",
      subtitle:
        "Select a tier focused on influence-building, forums, and mentoring reach.",
    },
    Scholar: {
      title: "Scholar Plans",
      subtitle:
        "Explore plans tailored to learning tools, events, and scholarship opportunities.",
    },
    Jobseeker: {
      title: "Career Plans",
      subtitle:
        "Choose a tier that improves your visibility, applications, and interview access.",
    },
    Trainer: {
      title: "Trainer Plans",
      subtitle:
        "Select a plan with better session reach, cohort tools, and certification support.",
    },
    Admin: {
      title: "Membership Plans",
      subtitle:
        "Configure platform plan options and monitor package performance.",
    },
    Trainee: {
      title: "Trainee Plans",
      subtitle: "Select a plan designed for trainees and new members.",
    },
  };

  const currentMeta = roleMembershipMeta[role];

  const plans = [
    {
      name: "Bronze",
      description: "Entry Level - Start Your Journey",
      price: billingCycle === "annual" ? 0 : 0,
      features: [
        "Access to basic networking events",
        "Standard directory listing",
        "Community forum access",
        "Monthly industry reports",
      ],
      icon: Star,
      recommended: false,
      color: "amber",
      subPackages: [
        { name: "Bronze Networking Package", desc: "Basic Networking" },
        { name: "Bronze Community Package", desc: "Community Access" },
      ]
    },
    {
      name: "Silver",
      description: "Step Into Lifestyle",
      price: billingCycle === "annual" ? 990 : 99,
      features: [
        "Everything in Bronze",
        "Priority event registration",
        "Featured directory listing",
      ],
      icon: Zap,
      recommended: false,
      color: "slate",
      subPackages: [
        { name: "Silver Equestrian Package", desc: "Equestrian" },
        { name: "Silver Events Package", desc: "Events" },
        { name: "Silver Beauty & Spa Package", desc: "Beauty & Spa" },
        { name: "Silver Wellness & Fitness Package", desc: "Wellness & Fitness" }
      ]
    },
    {
      name: "Gold",
      description: "Upgrade Your Experience",
      price: billingCycle === "annual" ? 2990 : 299,
      features: [
        "Everything in Silver",
        "Quarterly mentorship sessions",
        "Access to premium resources",
      ],
      icon: Award,
      recommended: true,
      color: "yellow",
      subPackages: [
        { name: "Gold Mentorship Package", desc: "1-on-1 Mentorship" },
        { name: "Gold Premium Resources", desc: "Exclusive Content" },
        { name: "Gold Strategy Session", desc: "Quarterly Planning" }
      ]
    },
    {
      name: "Diamond",
      description: "Elite Access & Privileges",
      price: billingCycle === "annual" ? 5990 : 599,
      features: [
        "Everything in Gold",
        "VIP access to all global events",
        "1-on-1 executive coaching",
        "Exclusive investment opportunities",
      ],
      icon: Gem,
      recommended: false,
      color: "cyan",
      subPackages: [
        { name: "Diamond Executive Coaching", desc: "Monthly 1-on-1" },
        { name: "Diamond VIP Global Access", desc: "Unlimited VIP" },
        { name: "Diamond Private Equity", desc: "Exclusive Deals" }
      ]
    },
    {
      name: "Platinum",
      description: "Premium Lifestyle & Rewards",
      price: billingCycle === "annual" ? 9990 : 999,
      features: [
        "Everything in Diamond",
        "Private Platinum-only events",
        "10x points multiplier",
        "Personal concierge service",
      ],
      icon: Trophy,
      recommended: false,
      color: "indigo",
      subPackages: [
        { name: "Platinum Concierge Plus", desc: "24/7 Assistance" },
        { name: "Platinum Lifestyle Events", desc: "Ultra-Private" },
        { name: "Platinum Global Forums", desc: "Elite Networking" }
      ]
    },
    {
      name: "Crown",
      description: "Ultimate Club Experience",
      price: billingCycle === "annual" ? 19990 : 1999,
      features: [
        "Everything in Platinum",
        "Lifetime achievement badge",
        "Direct access to board",
        "Ultimate VIP treatment",
      ],
      icon: Crown,
      recommended: false,
      color: "rose",
      subPackages: [
        { name: "Crown Board Council", desc: "Strategic Influence" },
        { name: "Crown Lifetime Estate", desc: "Global Privileges" },
        { name: "Crown Ultimate Legacy", desc: "Name Recognition" }
      ]
    },
  ];

  const setAccountValue = (
    accountId: string,
    update: Partial<ManagedAccount>,
  ) => {
    setManagedAccounts((prev) =>
      prev.map((account) =>
        account.id === accountId ? { ...account, ...update } : account,
      ),
    );
  };

  const toggleTierEnabled = (tier: Exclude<MembershipTier, "None">) => {
    setTierSettings((prev) =>
      prev.map((setting) =>
        setting.tier === tier
          ? { ...setting, enabled: !setting.enabled }
          : setting,
      ),
    );
  };

  const updateTierPrice = (
    tier: Exclude<MembershipTier, "None">,
    field: "monthlyPrice" | "annualPrice",
    value: string,
  ) => {
    const numericValue = Number(value);
    if (Number.isNaN(numericValue)) {
      return;
    }

    setTierSettings((prev) =>
      prev.map((setting) =>
        setting.tier === tier ? { ...setting, [field]: numericValue } : setting,
      ),
    );
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-xl font-semibold text-gray-900">
          {currentMeta.title}
        </h2>
        <p className="text-base text-gray-500 mt-3">{currentMeta.subtitle}</p>

        <div className="mt-8 flex justify-center">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex items-center">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingCycle === "monthly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingCycle === "annual" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              Annual billing{" "}
              <span className="ml-1 text-xs text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                -20%
              </span>
            </button>
          </div>
        </div>
      </div>

      {!isAdmin && (
        <>
          <p className="text-center text-sm text-slate-500 -mt-6">
            Selected {selectedPlans.length === 1 ? "plan" : "plans"}:{" "}
            <span className="font-semibold text-slate-900">
              {selectedPlans.length > 0 ? selectedPlans.join(", ") : "None"}
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {plans.map((plan) => {
            const planColors: Record<string, string> = {
              amber: "from-amber-50 to-orange-50 border-amber-200 text-amber-700",
              slate: "from-slate-50 to-gray-50 border-slate-200 text-slate-700",
              yellow: "from-yellow-50 to-orange-50 border-yellow-200 text-yellow-700",
              cyan: "from-cyan-50 to-sky-50 border-cyan-200 text-cyan-700",
              indigo: "from-indigo-50 to-blue-50 border-indigo-200 text-indigo-700",
              rose: "from-rose-50 to-pink-50 border-rose-200 text-rose-700",
            };
            
            const accentColors: Record<string, string> = {
              amber: "bg-amber-100 text-amber-600",
              slate: "bg-slate-100 text-slate-600",
              yellow: "bg-yellow-100 text-yellow-600",
              cyan: "bg-cyan-100 text-cyan-600",
              indigo: "bg-indigo-100 text-indigo-600",
              rose: "bg-rose-100 text-rose-600",
            };

            const buttonColors: Record<string, string> = {
              amber: "bg-amber-600 hover:bg-amber-700",
              slate: "bg-slate-600 hover:bg-slate-700",
              yellow: "bg-yellow-600 hover:bg-yellow-700",
              cyan: "bg-cyan-600 hover:bg-cyan-700",
              indigo: "bg-indigo-600 hover:bg-indigo-700",
              rose: "bg-rose-600 hover:bg-rose-700",
            };

            return (
              <div
                key={plan.name}
                className={`bg-white rounded-3xl p-8 flex flex-col relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border ${
                  plan.recommended
                    ? "border-blue-500 shadow-xl ring-4 ring-blue-50"
                    : "border-gray-100 shadow-sm"
                }`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${planColors[plan.color]} opacity-10 rounded-tr-3xl rounded-bl-[100px] pointer-events-none`} />
                
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl ${accentColors[plan.color]} shadow-sm`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">{plan.name}</h3>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-sm font-bold text-gray-400">
                    /{billingCycle === "annual" ? "year" : "month"}
                  </span>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Core Features</p>
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm font-medium text-gray-600 group"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${plan.recommended ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="group-hover:text-gray-900 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                {canUpdateMembership ? (
                  <div className="space-y-3 mt-auto pt-6 border-t border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Select Package(s)</p>
                    <div className="grid grid-cols-1 gap-2">
                      {plan.subPackages.map((sp) => {
                        const isSelected = selectedPlans.includes(sp.name);
                        return (
                          <button
                            key={sp.name}
                            onClick={() => togglePlan(sp.name)}
                            className={`group w-full p-3 rounded-xl text-left transition-all duration-300 border-2 relative overflow-hidden ${
                              isSelected
                                ? `${buttonColors[plan.color]} border-transparent text-white shadow-md`
                                : "bg-gray-50 border-gray-100 text-gray-700 hover:border-gray-200 hover:bg-white"
                            }`}
                          >
                            <div className="relative z-10 flex items-center justify-between">
                              <div className="flex flex-col">
                                <span className="text-xs font-bold leading-tight">{sp.name}</span>
                                <span className={`text-[10px] ${isSelected ? "text-white/80" : "text-gray-400"} font-medium mt-0.5`}>{sp.desc}</span>
                              </div>
                              {isSelected && <Check className="w-4 h-4 text-white" />}
                            </div>
                            {isSelected && (
                              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <button
                    disabled
                    className="w-full py-4 px-6 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 bg-gray-100 text-gray-400 cursor-not-allowed mt-auto"
                  >
                    <Shield className="w-4 h-4" />
                    View Only
                  </button>
                )}
              </div>
            );
          })}
          </div>
        </>
      )}

      {isAdmin && (
        <div className="space-y-8 max-w-6xl mx-auto">
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Membership Tier CMS
              </h3>
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                Admin only
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-5">
              Enable or disable Silver, Gold, and Diamond plans and adjust
              pricing for monthly or annual subscription cycles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tierSettings.map((setting) => (
                <div
                  key={setting.tier}
                  className="border border-gray-200 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900">
                      {setting.tier}
                    </h4>
                    <button
                      onClick={() => toggleTierEnabled(setting.tier)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded ${setting.enabled ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"}`}
                    >
                      {setting.enabled ? "Enabled" : "Disabled"}
                    </button>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm text-gray-600">
                      Monthly Price
                      <input
                        type="number"
                        min={0}
                        value={setting.monthlyPrice}
                        onChange={(e) =>
                          updateTierPrice(
                            setting.tier,
                            "monthlyPrice",
                            e.target.value,
                          )
                        }
                        className="mt-1 w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block text-sm text-gray-600">
                      Annual Price
                      <input
                        type="number"
                        min={0}
                        value={setting.annualPrice}
                        onChange={(e) =>
                          updateTierPrice(
                            setting.tier,
                            "annualPrice",
                            e.target.value,
                          )
                        }
                        className="mt-1 w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm"
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Account Access Control
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              Grant or revoke membership tiers, subscription status, partnership
              access, and franchise access.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-200">
                    <th className="py-2">Account</th>
                    <th className="py-2">Role</th>
                    <th className="py-2">Tier</th>
                    <th className="py-2">Subscription</th>
                    <th className="py-2">Partner Access</th>
                    <th className="py-2">Franchise Access</th>
                  </tr>
                </thead>
                <tbody>
                  {managedAccounts.map((account) => (
                    <tr key={account.id} className="border-b border-gray-100">
                      <td className="py-3">
                        <div className="font-semibold text-gray-900">
                          {account.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {account.id}
                        </div>
                      </td>
                      <td className="py-3 text-gray-700">{account.role}</td>
                      <td className="py-3">
                        <select
                          value={account.tier}
                          onChange={(e) =>
                            setAccountValue(account.id, {
                              tier: e.target.value as MembershipTier,
                            })
                          }
                          className="bg-gray-50 border border-gray-200 rounded-md px-2 py-1.5 text-sm"
                        >
                          <option>None</option>
                          <option>Bronze</option>
                          <option>Silver</option>
                          <option>Gold</option>
                          <option>Diamond</option>
                          <option>Platinum</option>
                          <option>Crown</option>
                        </select>
                      </td>
                      <td className="py-3">
                        <select
                          value={account.subscription}
                          onChange={(e) =>
                            setAccountValue(account.id, {
                              subscription: e.target.value as SubscriptionState,
                            })
                          }
                          className="bg-gray-50 border border-gray-200 rounded-md px-2 py-1.5 text-sm"
                        >
                          <option>Active</option>
                          <option>Paused</option>
                          <option>Cancelled</option>
                        </select>
                      </td>
                      <td className="py-3">
                        <button
                          onClick={() =>
                            setAccountValue(account.id, {
                              partnerAccess: !account.partnerAccess,
                            })
                          }
                          className={`px-2.5 py-1 text-xs font-semibold rounded ${account.partnerAccess ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"}`}
                        >
                          {account.partnerAccess ? "Granted" : "Revoked"}
                        </button>
                      </td>
                      <td className="py-3">
                        <button
                          onClick={() =>
                            setAccountValue(account.id, {
                              franchiseAccess: !account.franchiseAccess,
                            })
                          }
                          className={`px-2.5 py-1 text-xs font-semibold rounded ${account.franchiseAccess ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"}`}
                        >
                          {account.franchiseAccess ? "Granted" : "Revoked"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}

      {/* Enterprise Contact Banner */}
      <div className="max-w-6xl mx-auto mt-12 bg-slate-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            Need a custom solution?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl">
            For large organizations requiring custom integrations, dedicated
            support SLAs, and volume discounts, our enterprise sales team is
            ready to help.
          </p>
        </div>
        <button className="shrink-0 px-6 py-3 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  );
}
