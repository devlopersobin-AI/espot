import { useState, useEffect } from "react";
import { 
  Users, Search, Filter, MoreHorizontal, Shield, 
  Trash2, Mail, ExternalLink, UserPlus, CheckCircle2, XCircle
} from "lucide-react";
import { getAuthRole } from "../../auth/permissions";

type UserRecord = {
  id: string;
  name: string;
  email: string;
  role: string;
  tier: string;
  status: "Active" | "Pending" | "Suspended";
  joinDate: string;
};

const INITIAL_USERS: UserRecord[] = [
  { id: "USR-001", name: "Jordan Hamidul", email: "jordan@example.com", role: "Member", tier: "Silver", status: "Active", joinDate: "Feb 2026" },
  { id: "USR-002", name: "Sarah Jenkins", email: "sarah.j@techcorp.com", role: "Partner", tier: "Gold", status: "Active", joinDate: "Jan 2026" },
  { id: "USR-003", name: "Marcus Chen", email: "marcus@chenventures.com", role: "Entrepreneur", tier: "Diamond", status: "Pending", joinDate: "Mar 2026" },
  { id: "USR-004", name: "Elena Rodriguez", email: "elena@growthagency.es", role: "Leader", tier: "Platinum", status: "Active", joinDate: "Dec 2025" },
  { id: "USR-005", name: "Alex Thompson", email: "alex.t@edu.com", role: "Scholar", tier: "Bronze", status: "Suspended", joinDate: "Nov 2025" },
];

export default function MembersManagement() {
  const role = getAuthRole();
  const [users, setUsers] = useState<UserRecord[]>(() => {
    const stored = localStorage.getItem("cms-users-list");
    return stored ? JSON.parse(stored) : INITIAL_USERS;
  });
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All Roles");

  useEffect(() => {
    localStorage.setItem("cms-users-list", JSON.stringify(users));
  }, [users]);

  const filteredUsers = users.filter(u => 
    (u.name.toLowerCase().includes(search.toLowerCase()) || 
     u.email.toLowerCase().includes(search.toLowerCase())) &&
    (filterRole === "All Roles" || u.role === filterRole)
  );

  const deleteUser = (id: string) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const toggleStatus = (id: string) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const nextStatus: UserRecord["status"] = u.status === "Active" ? "Suspended" : "Active";
        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  if (role !== "Admin") {
    return <div className="p-10 text-center font-bold text-red-500">Access Denied: Admin Personnel Only</div>;
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Members CMS</h2>
          <p className="text-slate-500 mt-1 font-medium">Control and manage global platform identities, tiers, and access levels.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-200 transition-all active:scale-95">
          <UserPlus className="w-4 h-4" /> Add New Member
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-slate-200/40 overflow-hidden">
        {/* Toolbar */}
        <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
            <input 
              type="text" 
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-100/30 transition-all"
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
             <select 
               value={filterRole}
               onChange={(e) => setFilterRole(e.target.value)}
               className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-black uppercase text-slate-500 focus:outline-none transition-all cursor-pointer"
             >
                <option>All Roles</option>
                <option>Member</option>
                <option>Partner</option>
                <option>Franchisee</option>
                <option>Entrepreneur</option>
                <option>Leader</option>
             </select>
             <button className="p-3 bg-slate-50 hover:bg-slate-100 text-slate-400 rounded-xl transition-colors">
                <Filter className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* Members Table */}
        <div className="overflow-x-auto">
           <table className="w-full text-left">
              <thead>
                 <tr className="bg-slate-50/50">
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Identity</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Role & Tier</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Account Status</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Joined</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Actions</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                 {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-xs font-black text-slate-400">
                                {user.name.split(" ").map(n => n[0]).join("")}
                             </div>
                             <div>
                                <p className="text-sm font-black text-slate-900 leading-none mb-1">{user.name}</p>
                                <p className="text-xs font-bold text-slate-400">{user.email}</p>
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <div className="flex flex-col gap-1">
                             <span className="text-xs font-black text-slate-700 uppercase tracking-tighter">{user.role}</span>
                             <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded w-fit">{user.tier} Tier</span>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 w-fit ${
                             user.status === "Active" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                             user.status === "Pending" ? "bg-amber-50 text-amber-600 border-amber-100" :
                             "bg-rose-50 text-rose-600 border-rose-100"
                          }`}>
                             {user.status === "Active" ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                             <span className="text-[10px] font-black uppercase tracking-widest">{user.status}</span>
                          </div>
                       </td>
                       <td className="px-8 py-6 text-sm font-bold text-slate-500">
                          {user.joinDate}
                       </td>
                       <td className="px-8 py-6 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                             <button 
                               onClick={() => toggleStatus(user.id)}
                               className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm"
                               title="Toggle Access"
                             >
                                <Shield className="w-4 h-4" />
                             </button>
                             <button 
                               onClick={() => deleteUser(user.id)}
                               className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-rose-600 hover:border-rose-100 transition-all shadow-sm"
                               title="Delete Member"
                             >
                                <Trash2 className="w-4 h-4" />
                             </button>
                             <button className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 transition-all shadow-sm">
                                <ExternalLink className="w-4 h-4" />
                             </button>
                          </div>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
