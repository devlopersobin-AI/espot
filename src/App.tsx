import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import React, { useLayoutEffect } from "react";
import type { ReactElement } from "react";
import PublicLayout from "./components/PublicLayout";
import DashboardLayout from "./components/DashboardLayout";

// Public Pages
import {
  Home,
  Events,
  Membership,
  Search,
  Auth,
  UserProfile,
  Partner,
  Franchise,
  Careers,
  Training,
  Scholar,
  Leadership,
  Product,
  ProductDetail,
  Showcase,
  Offer,
  Entrepreneurship,
  Profiles,
  Contact,
  Investment,
  OfferDetail,
} from "./pages/public";
import FactorDetail from "./pages/public/FactorDetail";
import Insource from "./pages/public/investment/Insource";
import Outsource from "./pages/public/investment/Outsource";
import Payment from "./pages/public/Payment"; // New import for Payment
import TraineeCourseRegister from "./pages/public/TraineeCourseRegister";
import InvestmentDetail from "./pages/public/InvestmentDetail";
import WellbeingSponsorship from "./pages/public/WellbeingSponsorship";
import Sponsorship from "./pages/public/Sponsorship";

// Dashboard Pages
import {
  DashboardHome,
  DashboardEvents,
  DashboardMembership,
  Profile,
  MembersManagement,
  CmsSettings,
  RoleFeaturePage,
} from "./pages/dashboard";

// Domain pages
import { Services, ServiceCategory } from "./pages/services/catalog";
import { EventDetail } from "./pages/events";
import { getAuthRole, getDashboardPathForRole } from "./auth/permissions";
import type { AuthRole } from "./auth/permissions";

function RequireRole({
  allowed,
  children,
}: {
  allowed: AuthRole[];
  children: ReactElement;
}) {
  const currentRole = getAuthRole();
  if (!currentRole) {
    return <Navigate to="/auth" replace />;
  }

  if (!allowed.includes(currentRole)) {
    return <Navigate to={getDashboardPathForRole(currentRole)} replace />;
  }

  return children;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="overflow-x-hidden w-full min-h-screen">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/auth" element={<Auth />} />

          {/* Public Marketing Site Routes */}
          <Route
            path="/upgrade"
            element={<Navigate to="/membership#plans" replace />}
          />
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="membership" element={<Membership />} />
            <Route path="payment" element={<Payment />} />{" "}
            {/* New route for Payment */}
            <Route path="investment" element={<Investment />} />
            <Route path="investment/insource" element={<Insource />} />
            <Route path="investment/outsource" element={<Outsource />} />
            <Route
              path="investment/:opportunityId"
              element={<InvestmentDetail />}
            />
            <Route path="search" element={<Search />} />
            <Route path="profile/:type/:id" element={<UserProfile />} />
            {/* Other public pages */}
            <Route path="partner" element={<Partner />} />
            <Route path="franchise" element={<Franchise />} />
            <Route path="careers" element={<Careers />} />
            <Route path="training" element={<Training />} />
            <Route
              path="trainee-course-register"
              element={<TraineeCourseRegister />}
            />
            <Route path="scholar" element={<Scholar />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="product" element={<Product />} />
            <Route path="products/:slug" element={<ProductDetail />} />
            <Route path="showcase" element={<Showcase />} />
            <Route path="offer" element={<Offer />} />
            <Route path="offer/:id" element={<OfferDetail />} />
            <Route path="entrepreneurship" element={<Entrepreneurship />} />
            <Route path="profiles" element={<Profiles />} />
            <Route path="contact" element={<Contact />} />
            <Route path="sponsorship" element={<Sponsorship />} />
            <Route path="sponsorship/wellbeing" element={<WellbeingSponsorship />} />
            <Route path="sponsorship/scholarship" element={<Scholar />} />
            <Route path="services" element={<Services />} />
            {/* Service Category Routes */}
            <Route path="services/:category" element={<ServiceCategory />} />
            <Route path="services/:category/*" element={<ServiceCategory />} />
            <Route path="services/*" element={<ServiceCategory />} />
            {/* Event Routes */}
            <Route path="events/:eventId" element={<EventDetail />} />
            {/* Factor Detail Route */}
            <Route path="factor/:slug" element={<FactorDetail />} />
          </Route>

          {/* Admin Dashboard */}
          <Route
            path="/dashboard"
            element={
              <RequireRole allowed={["Admin"]}>
                <DashboardLayout />
              </RequireRole>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="events" element={<DashboardEvents />} />
            <Route path="membership" element={<DashboardMembership />} />
            <Route path="members" element={<MembersManagement />} />
            <Route path="settings" element={<CmsSettings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>

          {/* Role-based Dashboards — all use the same dynamic DashboardLayout */}
          {(
            [
              "member",
              "partner",
              "franchise",
              "leader",
              "scholar",
              "trainee",
            ] as const
          ).map((slug) => {
            const allowedMap: Record<string, AuthRole[]> = {
              member: ["Member", "Entrepreneur", "Jobseeker", "Trainer"],
              partner: ["Partner"],
              franchise: ["Franchisee"],
              leader: ["Leader"],
              scholar: ["Scholar"],
              trainee: ["Trainee"],
            };
            return (
              <React.Fragment key={slug}>
                <Route
                  path={`/dashboard/${slug}`}
                  element={
                    <RequireRole allowed={allowedMap[slug]}>
                      <DashboardLayout />
                    </RequireRole>
                  }
                >
                  <Route index element={<DashboardHome />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="events" element={<DashboardEvents />} />
                  <Route path="membership" element={<DashboardMembership />} />
                  <Route path=":feature" element={<RoleFeaturePage />} />
                  <Route
                    path="*"
                    element={<Navigate to={`/dashboard/${slug}`} replace />}
                  />
                </Route>
              </React.Fragment>
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
