import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MobileMenuDrawer from './public-layout/MobileMenuDrawer';
import PublicFooter from './public-layout/PublicFooter';
import PublicHeader from './public-layout/PublicHeader';
import type { MegaMenuId } from './public-layout/types';

export default function PublicLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaMenuId>(null);
  const [selectedCategory, setSelectedCategory] = useState('Equestrian');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const syncHeaderHeight = () => {
      const height = headerRef.current?.offsetHeight ?? 88;
      document.documentElement.style.setProperty('--site-header-height', `${height}px`);
    };

    syncHeaderHeight();
    window.addEventListener('resize', syncHeaderHeight);
    return () => window.removeEventListener('resize', syncHeaderHeight);
  }, []);

  useEffect(() => {
    setActiveMega(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', mobileMenuOpen);
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openMega = useCallback((id: MegaMenuId) => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setActiveMega(id);
  }, []);

  const closeMega = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => setActiveMega(null), 150);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setMobileMenuOpen(false);
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpanded((prev) => (prev === section ? null : section));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f5f7f2] text-slate-900">
      <PublicHeader
        headerRef={headerRef}
        locationPathname={location.pathname}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeMega={activeMega}
        openMega={openMega}
        closeMega={closeMega}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchInputRef={searchInputRef}
        handleSearch={handleSearch}
        setActiveMega={setActiveMega}
      />

      <MobileMenuDrawer
        open={mobileMenuOpen}
        locationPathname={location.pathname}
        mobileExpanded={mobileExpanded}
        toggleMobileSection={toggleMobileSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-1 flex flex-col w-full bg-transparent">
        <Outlet />
      </main>

      <PublicFooter />
    </div>
  );
}
