import React from "react";

export default function CommunityAchievements() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-blue-900 uppercase tracking-wide">
          Community Achievements
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Celebrating the milestones and contributions of our elite community
          members.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Spotlight */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start border border-blue-100">
            <span className="text-xs font-semibold text-blue-600 mb-1">
              Spotlight
            </span>
            <div className="font-bold text-lg mb-1">Talent of the Month</div>
            <div className="text-sm text-gray-700 mb-2">
              Awarded to{" "}
              <span className="font-semibold text-blue-700">Sarah Jenkins</span>{" "}
              for outstanding contribution (+50 pts)
            </div>
          </div>
          {/* Legend */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start border border-blue-100">
            <span className="text-xs font-semibold text-purple-600 mb-1">
              Legend
            </span>
            <div className="font-bold text-lg mb-1">Member of the Year</div>
            <div className="text-sm text-gray-700 mb-2">
              Awarded to{" "}
              <span className="font-semibold text-purple-700">
                Michael Chen
              </span>{" "}
              for long-term excellence in the network (+500 pts)
            </div>
          </div>
          {/* Elite Perks Unlocked */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start border border-blue-100">
            <span className="text-xs font-semibold text-yellow-600 mb-1">
              Winners
            </span>
            <div className="font-bold text-lg mb-1">Elite Perks Unlocked</div>
            <div className="text-sm text-gray-700 mb-2">
              Sarah Jenkins & 12 others
            </div>
            <div className="text-xs text-gray-400">
              No description available.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Monthly Lucky Draw */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start border border-blue-100">
            <span className="text-xs font-semibold text-green-600 mb-1">
              Community
            </span>
            <div className="font-bold text-lg mb-1">Monthly Lucky Draw</div>
            <div className="text-sm text-gray-700 mb-2">5 Winners Selected</div>
            <div className="text-xs text-gray-400">
              No description available.
            </div>
          </div>
          {/* Advocacy */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start border border-blue-100">
            <span className="text-xs font-semibold text-pink-600 mb-1">
              Advocacy
            </span>
            <div className="font-bold text-lg mb-1">Celebrity Spotlight</div>
            <div className="text-sm text-gray-700 mb-2">
              Special recognition for advocacy and global network expansion.
            </div>
          </div>
          {/* Empty for layout balance */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
