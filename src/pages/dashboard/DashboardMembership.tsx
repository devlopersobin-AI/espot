import { useEffect, useState } from "react";
import { Check, Shield, Zap, Users, ArrowRight } from "lucide-react";
import { getAuthRole, hasPermission } from "../../auth/permissions";
import type { AuthRole } from "../../auth/permissions";

type MembershipTier = "None" | "Silver" | "Gold" | "Diamond" | "Platinum";
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
  { tier: "Silver", monthlyPrice: 12, annualPrice: 99, enabled: true },
  { tier: "Gold", monthlyPrice: 35, annualPrice: 299, enabled: true },
  { tier: "Diamond", monthlyPrice: 110, annualPrice: 999, enabled: true },
  { tier: "Platinum", monthlyPrice: 250, annualPrice: 1999, enabled: true },
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
  const [selectedPlan, setSelectedPlan] = useState<string>(
    () => localStorage.getItem(planStorageKey) || "Professional",
  );
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
    localStorage.setItem(planStorageKey, selectedPlan);
  }, [planStorageKey, selectedPlan]);

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
  };

  const currentMeta = roleMembershipMeta[role];

  const plans = [
    {
      name: "Professional",
      description: "For individuals looking to expand their network.",
      price: billingCycle === "annual" ? 99 : 12,
      features: [
        "Access to basic networking events",
        "Standard directory listing",
        "Community forum access",
        "Monthly industry reports",
      ],
      icon: Users,
      recommended: false,
    },
    {
      name: "Business",
      description: "For growing teams and established professionals.",
      price: billingCycle === "annual" ? 299 : 35,
      features: [
        "Everything in Professional",
        "Priority event registration",
        "Featured directory listing",
        "Quarterly mentorship sessions",
        "Access to premium resources",
      ],
      icon: Zap,
      recommended: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations and franchise owners.",
      price: billingCycle === "annual" ? 999 : 110,
      features: [
        "Everything in Business",
        "VIP access to all global events",
        "1-on-1 executive coaching",
        "Exclusive investment opportunities",
        "Dedicated account manager",
        "API access for integrations",
      ],
      icon: Shield,
      recommended: false,
    },
    {
      name: "Platinum",
      description:
        "Ultimate access for elite members. Includes all Diamond benefits plus exclusive Platinum perks.",
      price: billingCycle === "annual" ? 1999 : 250,
      features: [
        "Everything in Diamond",
        "Private Platinum-only events",
        "10x points multiplier",
        "Personal concierge service",
        "Lifetime achievement badge",
        "Direct access to board",
      ],
      icon: Trophy,
      recommended: false,
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
        <p className="text-center text-sm text-slate-500 -mt-6">
          Current plan:{" "}
          <span className="font-semibold text-slate-900">{selectedPlan}</span>
        </p>
      )}

      {!isAdmin && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-8 flex flex-col relative ${
                plan.recommended
                  ? "border-2 border-blue-600 shadow-lg"
                  : "border border-gray-200 shadow-sm"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Recommended
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${plan.recommended ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-600"}`}
                >
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              </div>

              <p className="text-sm text-gray-500 mb-6 h-10">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-2xl font-bold text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  /{billingCycle === "annual" ? "yr" : "mo"}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <Check
                      className={`w-5 h-5 shrink-0 ${plan.recommended ? "text-blue-600" : "text-gray-400"}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {canUpdateMembership ? (
                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full py-3 px-4 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                    plan.recommended
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                      : "bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {selectedPlan === plan.name ? "Selected Plan" : "Select Plan"}{" "}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  disabled
                  className="w-full py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 bg-gray-100 text-gray-500 cursor-not-allowed"
                >
                  View Only <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
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
                          <option>Silver</option>
                          <option>Gold</option>
                          <option>Diamond</option>
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
