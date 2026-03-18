import { Link } from "react-router-dom";
import logo from "../../assets/espotclub_logo_withtext.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-16 pb-8 border-t border-slate-800/70">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src={logo}
              alt="E-Spot Club Logo"
              className="h-12 w-auto mb-4"
            />
            <h2 className="text-lg font-bold tracking-tight text-white mb-3">
              E-Spot Club
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              The ultimate platform connecting Members, Partners, Franchisees,
              Entrepreneurs, Leaders, and Scholars globally.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold mb-4">Join Us</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link
                  to="/partner"
                  className="hover:text-white transition-colors"
                >
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise"
                  className="hover:text-white transition-colors"
                >
                  Own a Franchise
                </Link>
              </li>
              <li>
                <Link
                  to="/membership"
                  className="hover:text-white transition-colors"
                >
                  Get Membership
                </Link>
              </li>
              <li>
                <Link
                  to="/investment"
                  className="hover:text-white transition-colors"
                >
                  Invest with Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold mb-4">Explore</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link
                  to="/events"
                  className="hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/showcase"
                  className="hover:text-white transition-colors"
                >
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="hover:text-white transition-colors"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold mb-4">Support</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/membership"
                  className="hover:text-white transition-colors"
                >
                  Membership Terms
                </Link>
              </li>
              <li>
                <Link to="/auth" className="hover:text-white transition-colors">
                  Account Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} E-Spot Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
