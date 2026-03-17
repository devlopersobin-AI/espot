import { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, Download } from 'lucide-react';
import { getAuthRole, hasPermission } from '../../auth/permissions';
import type { AuthRole } from '../../auth/permissions';

export default function Events() {
  const role = getAuthRole();
  const [searchQuery, setSearchQuery] = useState('');
  const canCreateEvents = hasPermission(role, 'events.create');
  const canUpdateEvents = hasPermission(role, 'events.update');
  const canDeleteEvents = hasPermission(role, 'events.delete');

  const roleTitle: Record<AuthRole, { title: string; subtitle: string; createLabel: string }> = {
    Member: { title: 'My Events', subtitle: 'Track events you joined and upcoming sessions.', createLabel: 'Browse Events' },
    Partner: { title: 'Partner Events', subtitle: 'Manage partner-hosted events and promotions.', createLabel: 'Create Partner Event' },
    Franchisee: { title: 'Franchise Events', subtitle: 'Run local franchise programs and activations.', createLabel: 'Create Franchise Event' },
    Entrepreneur: { title: 'Startup Events', subtitle: 'Manage demo days, pitch sessions, and showcases.', createLabel: 'Create Pitch Event' },
    Leader: { title: 'Leadership Events', subtitle: 'Plan talks, leadership summits, and mentoring sessions.', createLabel: 'Create Leadership Event' },
    Scholar: { title: 'Academic Events', subtitle: 'Manage workshops, bootcamps, and scholarship events.', createLabel: 'Create Academic Event' },
    Jobseeker: { title: 'Career Events', subtitle: 'Track job fairs and interview-focused events.', createLabel: 'Create Career Event' },
    Trainer: { title: 'Training Events', subtitle: 'Organize training schedules and cohort sessions.', createLabel: 'Create Training Event' },
    Admin: { title: 'Events Management', subtitle: 'Manage, schedule, and track all platform events and gatherings.', createLabel: 'Create Event' },
  };

  type EventRow = {
    id: string;
    name: string;
    date: string;
    location: string;
    type: string;
    attendees: number;
    status: string;
    revenue: string;
  };

  const adminEvents: EventRow[] = [
    { id: 'EVT-2024-001', name: 'Global Tech Leadership Summit', date: 'Oct 15, 2024', location: 'San Francisco, CA', type: 'Conference', attendees: 1250, status: 'Published', revenue: '$125,000' },
    { id: 'EVT-2024-002', name: 'Mastering AI Integration', date: 'Nov 02, 2024', location: 'Virtual', type: 'Workshop', attendees: 450, status: 'Draft', revenue: '$0' },
    { id: 'EVT-2024-003', name: 'European Founders Mixer', date: 'Nov 12, 2024', location: 'London, UK', type: 'Networking', attendees: 120, status: 'Published', revenue: '$6,000' },
    { id: 'EVT-2024-004', name: 'Future of FinTech Panel', date: 'Dec 05, 2024', location: 'New York, NY', type: 'Conference', attendees: 800, status: 'Review', revenue: '$40,000' },
    { id: 'EVT-2025-001', name: 'Scaling Your SaaS Startup', date: 'Jan 18, 2025', location: 'Virtual', type: 'Webinar', attendees: 2000, status: 'Published', revenue: '$0' },
    { id: 'EVT-2025-002', name: 'Asia-Pacific Investment Forum', date: 'Feb 22, 2025', location: 'Singapore', type: 'Networking', attendees: 300, status: 'Planning', revenue: '$15,000' },
  ];

  const roleEvents: Record<AuthRole, EventRow[]> = {
    Member: [
      { id: 'MEV-001', name: 'Member Networking Hour', date: 'Apr 03, 2026', location: 'Virtual', type: 'Networking', attendees: 80, status: 'Published', revenue: '$0' },
      { id: 'MEV-002', name: 'Rewards Orientation', date: 'Apr 09, 2026', location: 'Kathmandu', type: 'Workshop', attendees: 45, status: 'Published', revenue: '$0' },
    ],
    Partner: [
      { id: 'PEV-112', name: 'Partner Offer Launch Expo', date: 'Apr 12, 2026', location: 'Dubai', type: 'Conference', attendees: 230, status: 'Published', revenue: '$12,000' },
      { id: 'PEV-113', name: 'B2B Growth Playbook', date: 'Apr 22, 2026', location: 'Virtual', type: 'Workshop', attendees: 140, status: 'Review', revenue: '$4,300' },
    ],
    Franchisee: [
      { id: 'FEV-401', name: 'Local Franchise Kickoff', date: 'Apr 07, 2026', location: 'Pokhara', type: 'Conference', attendees: 120, status: 'Published', revenue: '$3,800' },
      { id: 'FEV-402', name: 'Operations SOP Workshop', date: 'Apr 19, 2026', location: 'Virtual', type: 'Workshop', attendees: 60, status: 'Planning', revenue: '$0' },
    ],
    Entrepreneur: [
      { id: 'EEV-210', name: 'Founder Pitch Circle', date: 'Apr 10, 2026', location: 'Singapore', type: 'Networking', attendees: 95, status: 'Published', revenue: '$5,000' },
      { id: 'EEV-211', name: 'Investor Q&A Clinic', date: 'Apr 25, 2026', location: 'Virtual', type: 'Webinar', attendees: 320, status: 'Draft', revenue: '$0' },
    ],
    Leader: [
      { id: 'LEV-051', name: 'Executive Leadership Forum', date: 'Apr 08, 2026', location: 'London', type: 'Conference', attendees: 410, status: 'Published', revenue: '$21,000' },
      { id: 'LEV-052', name: 'Mentor Roundtable', date: 'Apr 28, 2026', location: 'Virtual', type: 'Networking', attendees: 160, status: 'Review', revenue: '$2,800' },
    ],
    Scholar: [
      { id: 'SEV-301', name: 'Scholarship Prep Bootcamp', date: 'Apr 14, 2026', location: 'Kathmandu', type: 'Workshop', attendees: 210, status: 'Published', revenue: '$0' },
      { id: 'SEV-302', name: 'Career Guidance Webinar', date: 'Apr 24, 2026', location: 'Virtual', type: 'Webinar', attendees: 540, status: 'Planning', revenue: '$0' },
    ],
    Jobseeker: [
      { id: 'JEV-901', name: 'Hiring Fair 2026', date: 'Apr 17, 2026', location: 'Kathmandu', type: 'Networking', attendees: 680, status: 'Published', revenue: '$0' },
      { id: 'JEV-902', name: 'Interview Masterclass', date: 'Apr 26, 2026', location: 'Virtual', type: 'Workshop', attendees: 290, status: 'Published', revenue: '$0' },
    ],
    Trainer: [
      { id: 'TEV-721', name: 'Digital Marketing Cohort', date: 'Apr 06, 2026', location: 'Virtual', type: 'Workshop', attendees: 120, status: 'Published', revenue: '$2,100' },
      { id: 'TEV-722', name: 'Training of Trainers', date: 'Apr 20, 2026', location: 'Lalitpur', type: 'Conference', attendees: 90, status: 'Planning', revenue: '$1,400' },
    ],
    Admin: adminEvents,
  };
  const events = roleEvents[role];
  const currentMeta = roleTitle[role];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{currentMeta.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{currentMeta.subtitle}</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          {canCreateEvents ? (
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm">
              <Plus className="w-4 h-4" /> {currentMeta.createLabel}
            </button>
          ) : (
            <button disabled className="px-4 py-2 bg-gray-100 text-gray-500 rounded-md text-sm font-medium cursor-not-allowed flex items-center gap-2">
              <Plus className="w-4 h-4" /> No create permission
            </button>
          )}
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search events by ID, name, or location..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="px-3 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <select className="px-3 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full sm:w-auto">
            <option>All Statuses</option>
            <option>Published</option>
            <option>Draft</option>
            <option>Review</option>
            <option>Planning</option>
          </select>
        </div>
      </div>

      {/* Data Grid */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-grid">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Event Details</th>
                <th>Type</th>
                <th>Date & Location</th>
                <th>Attendees</th>
                <th>Revenue</th>
                <th>Status</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td className="font-mono text-xs text-gray-500">{event.id}</td>
                  <td>
                    <div className="font-medium text-gray-900">{event.name}</div>
                  </td>
                  <td>
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                      {event.type}
                    </span>
                  </td>
                  <td>
                    <div className="text-sm text-gray-900">{event.date}</div>
                    <div className="text-xs text-gray-500">{event.location}</div>
                  </td>
                  <td className="font-mono text-sm text-gray-600">{event.attendees.toLocaleString()}</td>
                  <td className="font-mono text-sm text-gray-600">{event.revenue}</td>
                  <td>
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                      event.status === 'Published' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20' :
                      event.status === 'Draft' ? 'bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/20' :
                      event.status === 'Review' ? 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20' :
                      'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20'
                    }`}>
                      {event.status}
                    </span>
                  </td>
                  <td>
                    {canUpdateEvents || canDeleteEvents ? (
                      <button className="p-1 text-gray-400 hover:text-gray-600 rounded" title="Event actions">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400">Read only</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50/50">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">6</span> of <span className="font-medium text-gray-900">24</span> results
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded text-sm font-medium text-gray-500 bg-white disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-gray-200 rounded text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
