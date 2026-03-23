import {
  ArrowUpRight,
  Users,
  Calendar,
  DollarSign,
  Activity,
  MoreHorizontal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAuthRole, getDashboardPathForRole } from "../../auth/permissions";
import type { AuthRole } from "../../auth/permissions";

export default function Home() {
  const navigate = useNavigate();
  const role = getAuthRole() ?? "Member";

  const dashboardBase = getDashboardPathForRole(role);

  const roleHomeConfig: Record<
    AuthRole,
    {
      title: string;
      subtitle: string;
      primaryAction: string;
      secondaryAction: string;
      metrics: Array<{
        title: string;
        value: string;
        change: string;
        trend: "up" | "down";
        icon: typeof Users;
      }>;
    }
  > = {
    Member: {
      title: "Member Overview",
      subtitle: "Track your activity, events, and membership benefits.",
      primaryAction: "Book Event Seat",
      secondaryAction: "Download Statement",
      metrics: [
        {
          title: "Points Balance",
          value: "1,240",
          change: "+8.5%",
          trend: "up",
          icon: Users,
        },
        {
          title: "Upcoming Events",
          value: "5",
          change: "+2",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Rewards Value",
          value: "$320",
          change: "+12.0%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Profile Strength",
          value: "78%",
          change: "+5.0%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Partner: {
      title: "Partner Overview",
      subtitle: "Monitor partner offers, campaigns, and lead performance.",
      primaryAction: "Launch Offer",
      secondaryAction: "Export Leads",
      metrics: [
        {
          title: "Active Offers",
          value: "18",
          change: "+3",
          trend: "up",
          icon: Users,
        },
        {
          title: "Partner Events",
          value: "9",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Offer Revenue",
          value: "$42.8k",
          change: "+14.2%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Lead Conversion",
          value: "31%",
          change: "+1.8%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Franchisee: {
      title: "Franchise Overview",
      subtitle: "Track territory operations, revenue, and launch tasks.",
      primaryAction: "Add Outlet Update",
      secondaryAction: "Download Ops Report",
      metrics: [
        {
          title: "Open Tasks",
          value: "14",
          change: "-2",
          trend: "down",
          icon: Users,
        },
        {
          title: "Local Events",
          value: "4",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Monthly Sales",
          value: "$86.2k",
          change: "+9.1%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Service Uptime",
          value: "97.4%",
          change: "+0.4%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Entrepreneur: {
      title: "Startup Overview",
      subtitle: "Follow venture milestones, investor interest, and traction.",
      primaryAction: "Update Pitch",
      secondaryAction: "Export Pipeline",
      metrics: [
        {
          title: "Investor Leads",
          value: "11",
          change: "+2",
          trend: "up",
          icon: Users,
        },
        {
          title: "Pitch Events",
          value: "3",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Committed Funds",
          value: "$120k",
          change: "+22%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Product Traction",
          value: "64%",
          change: "+6.1%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Leader: {
      title: "Leadership Overview",
      subtitle: "Review team impact, speaking events, and strategic goals.",
      primaryAction: "Create Initiative",
      secondaryAction: "Export Impact Report",
      metrics: [
        {
          title: "Mentorship Sessions",
          value: "22",
          change: "+5",
          trend: "up",
          icon: Users,
        },
        {
          title: "Leadership Events",
          value: "7",
          change: "+2",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Funding Influence",
          value: "$310k",
          change: "+11%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Team Engagement",
          value: "88%",
          change: "+1.4%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Scholar: {
      title: "Scholar Overview",
      subtitle:
        "Track learning milestones, scholarships, and event participation.",
      primaryAction: "Apply Scholarship",
      secondaryAction: "Download Transcript",
      metrics: [
        {
          title: "Learning Goals",
          value: "12",
          change: "+3",
          trend: "up",
          icon: Users,
        },
        {
          title: "Academic Events",
          value: "6",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Scholarship Value",
          value: "$7.5k",
          change: "+18%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Course Progress",
          value: "82%",
          change: "+4.2%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Jobseeker: {
      title: "Career Overview",
      subtitle: "Manage applications, interviews, and profile readiness.",
      primaryAction: "Apply to Jobs",
      secondaryAction: "Export CV",
      metrics: [
        {
          title: "Active Applications",
          value: "16",
          change: "+4",
          trend: "up",
          icon: Users,
        },
        {
          title: "Interview Slots",
          value: "3",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Offer Range",
          value: "$2.8k",
          change: "+9.4%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Profile Match",
          value: "74%",
          change: "+2.7%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Trainer: {
      title: "Trainer Overview",
      subtitle: "Track sessions, attendees, and training outcomes.",
      primaryAction: "Create Session",
      secondaryAction: "Export Attendance",
      metrics: [
        {
          title: "Active Batches",
          value: "8",
          change: "+2",
          trend: "up",
          icon: Users,
        },
        {
          title: "Scheduled Classes",
          value: "12",
          change: "+3",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Training Revenue",
          value: "$9.2k",
          change: "+13%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Completion Rate",
          value: "91%",
          change: "+1.9%",
          trend: "up",
          icon: Activity,
        },
      ],
    },
    Admin: {
      title: "Platform Overview",
      subtitle:
        "Real-time metrics and recent activity across the E-SPOT network.",
      primaryAction: "Create Campaign",
      secondaryAction: "Export Report",
      metrics: [
        {
          title: "Total Members",
          value: "24,592",
          change: "+12.5%",
          trend: "up",
          icon: Users,
        },
        {
          title: "Active Events",
          value: "143",
          change: "+4.2%",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Monthly Revenue",
          value: "$842.5k",
          change: "+18.1%",
          trend: "up",
          icon: DollarSign,
        },
        {
          title: "Platform Engagement",
          value: "84.2%",
          change: "-2.4%",
          trend: "down",
          icon: Activity,
        },
      ],
    },
    Trainee: {
      title: "Trainee Overview",
      subtitle: "Track your onboarding, training sessions, and progress.",
      primaryAction: "Register for Training",
      secondaryAction: "View My Profile",
      metrics: [
        {
          title: "Completed Modules",
          value: "4",
          change: "+1",
          trend: "up",
          icon: Users,
        },
        {
          title: "Upcoming Sessions",
          value: "2",
          change: "+1",
          trend: "up",
          icon: Calendar,
        },
        {
          title: "Progress",
          value: "45%",
          change: "+10%",
          trend: "up",
          icon: Activity,
        },
        {
          title: "Certification Status",
          value: "Pending",
          change: "—",
          trend: "up",
          icon: DollarSign,
        },
      ],
    },
  };

  const config = roleHomeConfig[role];
  const metrics = config.metrics;

  const handlePrimaryAction = () => {
    if (role === "Admin") {
      navigate("/dashboard/events");
      return;
    }
    navigate(`${dashboardBase}/events`);
  };

  const handleSecondaryAction = () => {
    if (role === "Admin") {
      navigate("/dashboard/membership");
      return;
    }
    navigate(`${dashboardBase}/profile`);
  };

  const recentActivity = [
    {
      id: "ACT-1042",
      user: "Sarah Jenkins",
      action: "Registered for Global Tech Summit",
      time: "2 mins ago",
      status: "Completed",
    },
    {
      id: "ACT-1041",
      user: "TechCorp Global",
      action: "Posted new job: Senior Dev",
      time: "15 mins ago",
      status: "Pending Review",
    },
    {
      id: "ACT-1040",
      user: "Marcus Chen",
      action: "Upgraded to Diamond Tier",
      time: "1 hour ago",
      status: "Completed",
    },
    {
      id: "ACT-1039",
      user: "Elena Rodriguez",
      action: "Submitted Franchise Application",
      time: "3 hours ago",
      status: "In Progress",
    },
    {
      id: "ACT-1038",
      user: "Growth Agency",
      action: "Published new Partner Offer",
      time: "5 hours ago",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{config.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{config.subtitle}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSecondaryAction}
            className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {config.secondaryAction}
          </button>
          <button
            onClick={handlePrimaryAction}
            className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            {config.primaryAction}
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                <metric.icon className="w-5 h-5 text-gray-600" />
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  metric.trend === "up"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-rose-50 text-rose-700"
                }`}
              >
                {metric.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">
              {metric.title}
            </h3>
            <div className="text-2xl font-bold text-gray-900 mt-1">
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">
              Recent Activity
            </h3>
            <button
              onClick={handlePrimaryAction}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              View all <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="data-grid">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User / Entity</th>
                  <th>Action</th>
                  <th>Status</th>
                  <th>Time</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((activity) => (
                  <tr key={activity.id}>
                    <td className="font-mono text-xs text-gray-500">
                      {activity.id}
                    </td>
                    <td className="font-medium text-gray-900">
                      {activity.user}
                    </td>
                    <td className="text-gray-600">{activity.action}</td>
                    <td>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                          activity.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20"
                            : activity.status === "Pending Review"
                              ? "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20"
                              : "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                    <td className="text-gray-500">{activity.time}</td>
                    <td>
                      <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / System Status */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button
                onClick={() =>
                  navigate(
                    role === "Admin"
                      ? "/dashboard/membership"
                      : `${dashboardBase}/profile`,
                  )
                }
                className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-slate-300 hover:bg-gray-50 transition-colors text-left"
              >
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Approve Memberships
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    12 pending applications
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </button>
              <button
                onClick={() =>
                  navigate(
                    role === "Admin"
                      ? "/dashboard/events"
                      : `${dashboardBase}/events`,
                  )
                }
                className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-slate-300 hover:bg-gray-50 transition-colors text-left"
              >
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Review Partner Offers
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    5 new submissions
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </button>
              <button
                onClick={() =>
                  navigate(
                    role === "Admin"
                      ? "/dashboard/membership"
                      : `${dashboardBase}/profile`,
                  )
                }
                className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-slate-300 hover:bg-gray-50 transition-colors text-left"
              >
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Manage Franchise Leads
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    3 new inquiries
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm p-6 text-white">
            <h3 className="text-base font-semibold mb-2">System Status</h3>
            <div className="flex items-center gap-2 text-sm text-emerald-400 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              All systems operational
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">API Latency</span>
                <span className="font-mono">42ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Database Load</span>
                <span className="font-mono">12%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Active Connections</span>
                <span className="font-mono">1,204</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
