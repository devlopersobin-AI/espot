import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import type { ReactElement } from 'react';
import PublicLayout from './components/PublicLayout';
import DashboardLayout from './components/DashboardLayout';
import MemberDashboardLayout from './components/MemberDashboardLayout';
import PartnerDashboardLayout from './components/PartnerDashboardLayout';
import FranchiseDashboardLayout from './components/FranchiseDashboardLayout';
import LeaderDashboardLayout from './components/LeaderDashboardLayout';
import ScholarDashboardLayout from './components/ScholarDashboardLayout';

// Public Pages
import { Home, Events, Membership, Search, Auth, UserProfile, Partner, Franchise, Careers, Training, Scholar, Leadership, Product, Showcase, Offer, Entrepreneurship, Profiles, Contact, Investment } from './pages/public';
import InvestmentDetail from './pages/public/InvestmentDetail';

// Dashboard Pages
import { DashboardHome, DashboardEvents, DashboardMembership, Profile } from './pages/dashboard';

// Domain pages
import { Services, ServiceCategory } from './pages/services/catalog';
import { HorseBackRiding, BuggyHorseRentals, HorseBuySale, HorseAccessoriesSale, HorseShow, HorseSportsCompetition, HorseBoardingBreeding, HorseTourism } from './pages/services/equestrian';
import { EventDetail } from './pages/events';
import { getAuthRole } from './auth/permissions';
import type { AuthRole } from './auth/permissions';

function RequireRole({ allowed, children }: { allowed: AuthRole[]; children: ReactElement }) {
  const currentRole = getAuthRole();
  if (!allowed.includes(currentRole)) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

export default function App() {
  return (
    <div className="overflow-x-hidden w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />

          {/* Public Marketing Site Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="membership" element={<Membership />} />
            <Route path="investment" element={<Investment />} />
            <Route path="investment/:opportunityId" element={<InvestmentDetail />} />
            <Route path="search" element={<Search />} />
            <Route path="profile/:type/:id" element={<UserProfile />} />

            {/* Other public pages */}
            <Route path="partner" element={<Partner />} />
            <Route path="franchise" element={<Franchise />} />
            <Route path="careers" element={<Careers />} />
            <Route path="training" element={<Training />} />
            <Route path="scholar" element={<Scholar />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="product" element={<Product />} />
            <Route path="showcase" element={<Showcase />} />
            <Route path="offer" element={<Offer />} />
            <Route path="entrepreneurship" element={<Entrepreneurship />} />
            <Route path="profiles" element={<Profiles />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="services/equestrian/horse-back-riding" element={<HorseBackRiding />} />
            <Route path="services/equestrian/buggy-horse-rentals" element={<BuggyHorseRentals />} />
            <Route path="services/equestrian/horse-buy-sale" element={<HorseBuySale />} />
            <Route path="services/equestrian/horse-accessories-sale" element={<HorseAccessoriesSale />} />
            <Route path="services/equestrian/horse-show" element={<HorseShow />} />
            <Route path="services/equestrian/horse-sports-competition" element={<HorseSportsCompetition />} />
            <Route path="services/equestrian/horse-boarding-breeding" element={<HorseBoardingBreeding />} />
            <Route path="services/equestrian/horse-tourism" element={<HorseTourism />} />

            {/* Service Category Routes */}
            <Route path="services/beauty-spa" element={<ServiceCategory />} />
            <Route path="services/beauty-spa/*" element={<ServiceCategory />} />
            <Route path="services/wellness" element={<ServiceCategory />} />
            <Route path="services/wellness/*" element={<ServiceCategory />} />
            <Route path="services/travel" element={<ServiceCategory />} />
            <Route path="services/travel/*" element={<ServiceCategory />} />
            <Route path="services/restaurants" element={<ServiceCategory />} />
            <Route path="services/restaurants/*" element={<ServiceCategory />} />
            <Route path="services/multimedia" element={<ServiceCategory />} />
            <Route path="services/multimedia/*" element={<ServiceCategory />} />
            <Route path="services/events" element={<ServiceCategory />} />
            <Route path="services/events/*" element={<ServiceCategory />} />

            {/* Event Routes */}
            <Route path="events/:eventId" element={<EventDetail />} />
          </Route>

          {/* Default Dashboard (legacy/fallback) */}
          <Route
            path="/dashboard"
            element={(
              <RequireRole allowed={['Admin']}>
                <DashboardLayout />
              </RequireRole>
            )}
          >
            <Route index element={<DashboardHome />} />
            <Route path="events" element={<DashboardEvents />} />
            <Route path="membership" element={<DashboardMembership />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>

          {/* Member Dashboard */}
          <Route
            path="/dashboard/member"
            element={(
              <RequireRole allowed={['Member', 'Entrepreneur', 'Jobseeker', 'Trainer']}>
                <MemberDashboardLayout />
              </RequireRole>
            )}
          >
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="events" element={<DashboardEvents />} />
            <Route path="*" element={<Navigate to="/dashboard/member" replace />} />
          </Route>

          {/* Partner Dashboard */}
          <Route
            path="/dashboard/partner"
            element={(
              <RequireRole allowed={['Partner']}>
                <PartnerDashboardLayout />
              </RequireRole>
            )}
          >
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="events" element={<DashboardEvents />} />
            <Route path="*" element={<Navigate to="/dashboard/partner" replace />} />
          </Route>

          {/* Franchisee Dashboard */}
          <Route
            path="/dashboard/franchise"
            element={(
              <RequireRole allowed={['Franchisee']}>
                <FranchiseDashboardLayout />
              </RequireRole>
            )}
          >
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="events" element={<DashboardEvents />} />
            <Route path="*" element={<Navigate to="/dashboard/franchise" replace />} />
          </Route>

          {/* Leader Dashboard */}
          <Route
            path="/dashboard/leader"
            element={(
              <RequireRole allowed={['Leader']}>
                <LeaderDashboardLayout />
              </RequireRole>
            )}
          >
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="events" element={<DashboardEvents />} />
            <Route path="*" element={<Navigate to="/dashboard/leader" replace />} />
          </Route>

          {/* Scholar Dashboard */}
          <Route
            path="/dashboard/scholar"
            element={(
              <RequireRole allowed={['Scholar']}>
                <ScholarDashboardLayout />
              </RequireRole>
            )}
          >
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="events" element={<DashboardEvents />} />
            <Route path="*" element={<Navigate to="/dashboard/scholar" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
