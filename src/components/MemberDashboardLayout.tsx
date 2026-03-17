import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar } from 'lucide-react';

const SIDEBAR_NAV = [
  { name: 'Overview', path: '/dashboard/member', icon: LayoutDashboard },
  { name: 'My Profile', path: '/dashboard/member/profile', icon: Users },
  { name: 'Events', path: '/dashboard/member/events', icon: Calendar },
];

export default function MemberDashboardLayout() {
  const location = useLocation();
  return (
    <div className="flex h-screen overflow-hidden bg-[#F7F7F8] font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0 z-20">
        <div className="h-16 flex items-center px-6 border-b border-gray-200 font-bold text-xl tracking-tight">Member</div>
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 hide-scrollbar">
          {SIDEBAR_NAV.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0 z-10">
          <h1 className="text-lg font-semibold text-blue-700">Member Dashboard</h1>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
