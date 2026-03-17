import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Search, 
  Bell, 
  ChevronDown
} from 'lucide-react';
import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SIDEBAR_NAV = [
  { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
  { name: 'My Profile', path: '/dashboard/profile', icon: Users },
  { name: 'Events', path: '/dashboard/events', icon: Calendar },
  { name: 'Membership', path: '/dashboard/membership', icon: Users },
];

export default function Layout() {
  const location = useLocation();

  const currentPathName = SIDEBAR_NAV.find(nav => nav.path === location.pathname)?.name || 'Dashboard';

  return (
    <div className="flex h-screen overflow-hidden bg-[#F7F7F8] font-sans text-gray-900">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0 z-20">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white text-sm">ES</span>
            </div>
            E-SPOT
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 hide-scrollbar">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3 mt-4">
            Application
          </div>
          {SIDEBAR_NAV.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-slate-100 text-slate-900" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon className={cn("w-4 h-4", isActive ? "text-slate-900" : "text-gray-400")} />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="mt-4 flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-xs">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-gray-900">{currentPathName}</h1>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="text-sm text-gray-500">Enterprise Workspace</div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-md pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <kbd className="hidden sm:inline-block border border-gray-200 rounded px-1.5 text-[10px] font-mono text-gray-400 bg-white">⌘</kbd>
                <kbd className="hidden sm:inline-block border border-gray-200 rounded px-1.5 text-[10px] font-mono text-gray-400 bg-white">K</kbd>
              </div>
            </div>

            <button className="relative p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Help <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}
