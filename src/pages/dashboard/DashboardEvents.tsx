import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Download,
  Pencil,
  Trash2,
  X,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  Clock,
  Ticket,
  ChevronRight,
  Zap
} from "lucide-react";
import { getAuthRole, hasPermission } from "../../auth/permissions";
import { cn } from "../../lib/utils";
import type { AuthRole } from "../../auth/permissions";

type EventStatus = "Published" | "Draft" | "Review" | "Planning" | "Joined";

type EventRow = {
  id: string;
  name: string;
  date: string;
  location: string;
  type: string;
  attendees: number;
  status: EventStatus;
  revenue: string;
  description?: string;
  image?: string;
  price?: string;
};

const GLOBAL_EVENTS: EventRow[] = [
  {
    id: "EVT-001",
    name: "Global Wealth Summit 2026",
    date: "Apr 15, 2026",
    location: "Virtual & Singapore",
    type: "Conference",
    attendees: 1250,
    status: "Published",
    revenue: "$0",
    description: "Join top investors and network leaders for a deep dive into the 2026 global economic landscape.",
    price: "150 NC"
  },
  {
    id: "EVT-002",
    name: "Luxury Living Expo",
    date: "May 02, 2026",
    location: "Dubai, UAE",
    type: "Exhibition",
    attendees: 4500,
    status: "Published",
    revenue: "$0",
    description: "Experience the pinnacle of luxury lifestyle and network with high-net-worth individuals.",
    price: "Free for Gold+"
  },
  {
    id: "EVT-003",
    name: "Diamond Inner Circle Mixer",
    date: "Jun 12, 2026",
    location: "London, UK",
    type: "Networking",
    attendees: 50,
    status: "Published",
    revenue: "$0",
    description: "An exclusive gathering for Diamond and Crown tier members to discuss private equity deals.",
    price: "By Invitation"
  },
  {
    id: "EVT-004",
    name: "Strategic Asset Workshop",
    date: "Jul 05, 2026",
    location: "Virtual",
    type: "Workshop",
    attendees: 200,
    status: "Published",
    revenue: "$0",
    description: "Practical workshop on diversifying your portfolio within the E-SPOT ecosystem.",
    price: "50 NC"
  }
];

export default function DashboardEvents() {
  const role = getAuthRole() ?? "Member";
  const [searchQuery, setSearchQuery] = useState("");
  const [events] = useState<EventRow[]>(() => {
    if (role === "Admin") {
      return [
        { id: "EVT-001", name: "Global Wealth Summit", date: "Apr 15, 2026", location: "Singapore", type: "Conference", attendees: 1250, status: "Published", revenue: "$125,000" },
        { id: "EVT-002", name: "Tech Launch 2026", date: "May 20, 2026", location: "San Francisco", type: "Conference", attendees: 850, status: "Draft", revenue: "$0" },
      ];
    }
    return GLOBAL_EVENTS;
  });

  const [joinedEvents, setJoinedEvents] = useState<string[]>(() => {
    const stored = localStorage.getItem(`joined-events-${role}`);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(`joined-events-${role}`, JSON.stringify(joinedEvents));
  }, [joinedEvents, role]);

  const filteredEvents = useMemo(() => {
    return events.filter(e => 
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [events, searchQuery]);

  const handleJoin = (id: string) => {
    if (!joinedEvents.includes(id)) {
      setJoinedEvents(prev => [...prev, id]);
    }
  };

  if (role !== "Admin") {
    return (
      <div className="space-y-8 pb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
             <h2 className="text-3xl font-black text-gray-900 tracking-tight">Browse Events</h2>
             <p className="text-gray-500 mt-1 font-medium">Discover and book your next global networking experience.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-100 rounded-xl pl-12 pr-4 py-3 text-sm font-bold text-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => {
            const isJoined = joinedEvents.includes(event.id);
            return (
              <div key={event.id} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col md:flex-row shadow-sm">
                <div className="w-full md:w-48 bg-slate-50 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />
                   <div className="absolute inset-0 flex items-center justify-center p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
                      <Calendar className="w-20 h-20 text-blue-600" />
                   </div>
                   <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black uppercase text-blue-600 border border-blue-50 shadow-sm">
                        {event.type}
                      </span>
                   </div>
                </div>

                <div className="flex-1 p-8 flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-gray-900 leading-tight mb-2">{event.name}</h3>
                      <p className="text-sm text-gray-400 font-medium line-clamp-2">{event.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gray-300" />
                      <div>
                        <p className="text-[10px] font-bold text-gray-300 uppercase">Date</p>
                        <p className="text-xs font-black text-gray-700">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-gray-300" />
                      <div>
                        <p className="text-[10px] font-bold text-gray-300 uppercase">Location</p>
                        <p className="text-xs font-black text-gray-700">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-gray-300" />
                      <div>
                        <p className="text-[10px] font-bold text-gray-300 uppercase">Attendees</p>
                        <p className="text-xs font-black text-gray-700">{event.attendees.toLocaleString()}+</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Ticket className="w-4 h-4 text-gray-300" />
                      <div>
                        <p className="text-[10px] font-bold text-gray-300 uppercase">Pass Type</p>
                        <p className="text-xs font-black text-gray-700">{event.price || "Free"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    {isJoined ? (
                      <div className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl border font-black text-xs uppercase transition-all shadow-md",
                        role === "Partner" || role === "Franchisee" ? "text-indigo-600 bg-indigo-50 border-indigo-100" : 
                        role === "Entrepreneur" ? "text-amber-600 bg-amber-50 border-amber-100" :
                        "text-emerald-500 bg-emerald-50 border-emerald-100"
                      )}>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>
                          {role === "Partner" || role === "Franchisee" ? "Stakeholder Verified" : 
                           role === "Entrepreneur" ? "Founder Access Granted" : 
                           "Successfully Booked"}
                        </span>
                      </div>
                    ) : (
                      <button 
                        onClick={() => handleJoin(event.id)}
                        className={cn(
                          "flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 shadow-xl",
                          role === "Partner" || role === "Franchisee" ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200" : 
                          role === "Entrepreneur" ? "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-200" :
                          "bg-slate-900 hover:bg-black text-white shadow-slate-200"
                        )}
                      >
                        {role === "Partner" || role === "Franchisee" ? "Partner Logistics" : 
                         role === "Entrepreneur" ? "Founder RSVP" : 
                         "Book Event Seat"}
                        {role === "Partner" || role === "Franchisee" ? <Calendar className="w-4 h-4 fill-white/20" /> : 
                         role === "Entrepreneur" ? <Zap className="w-4 h-4 fill-white/20" /> :
                         <ChevronRight className="w-4 h-4" />}
                      </button>
                    )}
                    <button className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-400 rounded-xl transition-colors">
                       <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Admin View (Current default-ish)
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Events Management</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and schedule platform events.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create Event
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Event Details</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Type</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Date</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Revenue</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredEvents.map(event => (
              <tr key={event.id}>
                <td className="px-6 py-4">
                  <p className="font-bold text-gray-900">{event.name}</p>
                  <p className="text-xs text-gray-400">{event.location}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px] font-bold uppercase">{event.type}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{event.date}</td>
                <td className="px-6 py-4 font-mono text-sm">{event.revenue}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-[10px] font-bold uppercase">{event.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
