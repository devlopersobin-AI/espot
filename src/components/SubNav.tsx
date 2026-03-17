import React from 'react';

interface SubNavProps {
  items: string[];
  active: string;
  setActive: (item: string) => void;
  color?: string;
}

const SubNav: React.FC<SubNavProps> = ({ items, active, setActive, color = 'text-blue-700 border-blue-500 bg-blue-50' }) => (
  <div className="sticky z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl" style={{ top: 'var(--site-header-height)' }}>
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-1.5 sm:py-2">
      <nav className="hidden sm:flex overflow-x-auto hide-scrollbar">
        <ul className="flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-slate-200 bg-white/85 p-1 shadow-sm">
          {items.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActive(item)}
                className={`text-sm font-semibold px-3.5 py-2 rounded-lg border transition-all ${
                  active === item
                    ? `${color} shadow-sm border-blue-200`
                    : 'border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sm:hidden py-1">
        <select
          className="w-full border border-slate-300 rounded-xl py-2.5 px-3 text-sm font-semibold bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={active}
          onChange={(e) => setActive(e.target.value)}
        >
          {items.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

export default SubNav;
