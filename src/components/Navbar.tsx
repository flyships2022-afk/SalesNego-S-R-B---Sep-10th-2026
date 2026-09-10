import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, ArrowUpRight, ChevronDown, Sparkles, ArrowRight, PhoneCall, Mail } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import { SalesNegoLogo } from './SalesNegoLogo';
import { RoutePath } from '../types';

export const Navbar: React.FC = () => {
  const { currentPath, navigate, openCalendly } = useNavigation();
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile drawer and dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle outside click for services dropdown
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // On homepage, detect active section for smooth scrolling indicator
      if (currentPath === '/') {
        const sections = [
          { id: 'contact-section', name: 'contact' },
          { id: 'experience-section', name: 'case-studies' },
          { id: 'services-section', name: 'services' },
          { id: 'about-section', name: 'about' },
          { id: 'hero-section', name: 'home' },
        ];

        const scrollPosition = window.scrollY + 180;
        for (const sec of sections) {
          const el = document.getElementById(sec.id);
          if (el && scrollPosition >= el.offsetTop) {
            setActiveSection(sec.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const navItems: { label: string; path: RoutePath; sectionId?: string; sectionKey: string }[] = [
    { label: 'Home', path: '/', sectionId: 'hero-section', sectionKey: 'home' },
    { label: 'About Us', path: '/about', sectionKey: 'about' },
    { label: 'Services', path: '/services', sectionId: 'services-section', sectionKey: 'services' },
    { label: 'Case Studies', path: '/case-studies', sectionKey: 'case-studies' },
    { label: 'Contact', path: '/', sectionId: 'contact-section', sectionKey: 'contact' },
  ];

  const servicesList = [
    {
      title: 'GTM Strategy & Market Intelligence',
      badge: 'Strategy',
      path: '/services/gtm-strategy-market-intelligence' as RoutePath,
      description: 'Define ICPs, buyer roles, category positioning, and high-priority accounts before executing outreach.',
    },
    {
      title: 'RevOps & AI-Accelerated Sales',
      badge: 'Infrastructure & AI',
      path: '/services/revops-ai-sales' as RoutePath,
      description: 'Connect CRM architecture, qualification matrices, and automated AI workflows to eliminate manual drag.',
    },
    {
      title: 'End-to-End Commercial Execution',
      badge: 'Execution',
      path: '/services/commercial-execution' as RoutePath,
      description: 'Move qualified opportunities through discovery, solution alignment, proposal, and contract negotiation to close.',
    },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    if (item.label === 'Contact' || item.sectionId === 'contact-section') {
      if (currentPath === '/') {
        const element = document.getElementById('contact-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection('contact');
          return;
        }
      } else {
        navigate('/', 'contact-section');
        return;
      }
    }

    if (item.label === 'Home' || item.path === '/') {
      if (currentPath === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      } else {
        navigate('/');
      }
      return;
    }

    if (item.path !== currentPath) {
      navigate(item.path, item.sectionId);
    } else if (item.sectionId) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const isItemActive = (item: typeof navItems[0]) => {
    if (item.label === 'Contact') {
      return currentPath === '/' && activeSection === 'contact';
    }
    if (item.label === 'Home' || item.path === '/') {
      return currentPath === '/' && activeSection === 'home';
    }
    if (currentPath === item.path) return true;
    return currentPath.startsWith(item.path);
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6F5F2]/90 dark:bg-[#121214]/90 backdrop-blur-md border-b border-[#E5E3DC] dark:border-white/10 shadow-xs'
          : 'bg-[#F6F5F2] dark:bg-[#121214] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Official Brand Logo */}
        <div className="shrink-0 flex items-center">
          <SalesNegoLogo imgClassName="h-10 sm:h-12 md:h-13 w-auto max-w-[200px] sm:max-w-[240px]" />
        </div>

        {/* Desktop Navigation Pill Bar (Metafic style: rounded-full pills) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-white/80 dark:bg-[#1C1B20]/80 border border-[#E5E3DC] dark:border-white/10 backdrop-blur-md shadow-2xs"
        >
          {navItems.map((item) => {
            const active = isItemActive(item);

            if (item.label === 'Services') {
              return (
                <div
                  key="services-dropdown-container"
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    id="nav-link-services"
                    type="button"
                    onClick={() => handleNavClick(item)}
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2A] ${
                      active
                        ? 'bg-[#E11D2A] text-white shadow-xs'
                        : 'text-[#161519] dark:text-zinc-200 hover:text-[#E11D2A] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Mega-menu dropdown in Metafic style */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50 w-[640px]"
                      >
                        <div className="rounded-[20px] bg-white dark:bg-[#1C1B20] p-6 text-[#161519] dark:text-white shadow-[0_20px_50px_rgba(15,15,20,0.14)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#E5E3DC] dark:border-white/10">
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E3DC] dark:border-white/10">
                            <span className="text-xs uppercase font-bold tracking-wider text-[#E11D2A]">
                              Commercial Systems &amp; Capabilities
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                navigate('/services');
                              }}
                              className="text-xs font-semibold text-[#555459] dark:text-zinc-400 hover:text-[#E11D2A] dark:hover:text-white flex items-center gap-1"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="grid grid-cols-1 gap-3">
                            {servicesList.map((svc) => (
                              <button
                                key={svc.path}
                                type="button"
                                onClick={() => {
                                  setServicesDropdownOpen(false);
                                  navigate(svc.path);
                                }}
                                className="group text-left p-3.5 rounded-xl hover:bg-[#F6F5F2] dark:hover:bg-white/5 border border-transparent hover:border-[#E5E3DC] dark:hover:border-white/10 transition-all flex items-start gap-3.5"
                              >
                                <div className="w-2 h-2 rounded-full bg-[#E11D2A] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-[#161519] dark:text-white group-hover:text-[#E11D2A] transition-colors">
                                      {svc.title}
                                    </span>
                                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#E11D2A]/10 text-[#E11D2A] dark:bg-white/10 dark:text-zinc-200">
                                      {svc.badge}
                                    </span>
                                  </div>
                                  <p className="text-xs text-[#555459] dark:text-zinc-400 mt-1 leading-relaxed">
                                    {svc.description}
                                  </p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#E11D2A] transition-colors shrink-0 mt-1" />
                              </button>
                            ))}
                          </div>

                          {/* Featured Pod Notice */}
                          <div className="mt-4 p-3 rounded-xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-[#E11D2A]" />
                              <span className="text-xs font-semibold text-[#161519] dark:text-zinc-200">
                                Dedicated Commercial Pod &amp; Fractional CRO available on monthly retainer
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                openCalendly();
                              }}
                              className="text-xs font-bold text-[#E11D2A] hover:underline shrink-0"
                            >
                              Explore Pod
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <button
                key={item.label}
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2A] ${
                  active
                    ? 'bg-[#E11D2A] text-white shadow-xs'
                    : 'text-[#161519] dark:text-zinc-200 hover:text-[#E11D2A] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Utilities: Theme Switcher & Metafic Pill CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Subtle Theme Mode Toggle Pill */}
          <div
            id="theme-switcher-toggle"
            className="flex items-center p-1 rounded-full bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-2xs"
            role="group"
            aria-label="Theme mode selection"
          >
            <button
              type="button"
              id="theme-btn-light"
              onClick={() => setTheme('light')}
              className={`p-1.5 rounded-full transition-colors focus:outline-none ${
                !isDark
                  ? 'bg-[#F6F5F2] text-amber-600 shadow-2xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
              aria-label="Light mode"
              title="Light theme"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              id="theme-btn-dark"
              onClick={() => setTheme('dark')}
              className={`p-1.5 rounded-full transition-colors focus:outline-none ${
                isDark
                  ? 'bg-zinc-800 text-[#EE2338] shadow-2xs'
                  : 'text-zinc-400 hover:text-black'
              }`}
              aria-label="Dark mode"
              title="Dark theme"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Primary Metafic-style Pill Action */}
          <button
            id="nav-primary-cta"
            type="button"
            onClick={openCalendly}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#E11D2A] hover:bg-[#c91521] active:scale-98 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2A] shrink-0 whitespace-nowrap"
          >
            <span className="hidden lg:inline">Discuss Your Growth Priorities</span>
            <span className="lg:hidden">Discuss Growth</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded-full text-[#161519] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2A] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer Portaled to document.body */}
      {mounted && typeof document !== 'undefined' && createPortal(
        <div
          id="mobile-drawer-root"
          className={`fixed inset-0 z-[9999] md:hidden transition-all duration-300 ${
            mobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          {/* Dark Backdrop overlay */}
          <div
            className={`fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300 ease-out cursor-pointer ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Slide-in Panel */}
          <div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className={`fixed right-0 top-0 bottom-0 h-full w-[85%] max-w-sm bg-[#F6F5F2] dark:bg-[#161519] border-l border-[#E5E3DC] dark:border-white/10 p-5 sm:p-6 flex flex-col justify-between shadow-2xl overflow-y-auto transition-transform duration-300 ease-out transform ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E5E3DC] dark:border-white/10">
                <SalesNegoLogo imgClassName="h-8 w-auto max-w-[170px]" />
                <button
                  type="button"
                  id="mobile-drawer-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded-full text-[#161519] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Nav Items List */}
              <div className="py-4 flex flex-col space-y-1.5" id="mobile-nav-items-list">
                {navItems.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <button
                      key={item.label}
                      id={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                        active
                          ? 'bg-[#E11D2A] text-white shadow-xs'
                          : 'text-[#161519] dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className={`w-4 h-4 ${active ? 'text-white' : 'opacity-60'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Core Solutions / Specialized Services Shortcuts */}
              <div className="pt-3 pb-3 border-t border-[#E5E3DC] dark:border-white/10">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#E11D2A] block mb-2 px-2">
                  Core Solutions
                </span>
                <div className="space-y-1">
                  {servicesList.map((svc) => (
                    <button
                      key={svc.path}
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate(svc.path);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-[#555459] dark:text-zinc-400 hover:text-[#E11D2A] dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span className="truncate">{svc.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-2" />
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (currentPath === '/') {
                        const el = document.getElementById('faq-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      } else {
                        navigate('/', 'faq-section');
                      }
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-[#555459] dark:text-zinc-400 hover:text-[#E11D2A] dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <span>Commercial FAQs</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Drawer Bottom CTAs & Direct Contact */}
            <div className="pt-4 border-t border-[#E5E3DC] dark:border-white/10 space-y-3">
              <button
                type="button"
                id="mobile-drawer-cta-button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCalendly();
                }}
                className="w-full py-3 px-4 rounded-full bg-[#E11D2A] text-white text-center font-bold text-sm shadow-md hover:bg-[#c91521] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Growth Priorities</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between pt-1 text-xs text-[#555459] dark:text-zinc-400">
                <a
                  href="mailto:sales@salesnego.com"
                  className="inline-flex items-center gap-1.5 hover:text-[#E11D2A] dark:hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E11D2A]" />
                  <span>sales@salesnego.com</span>
                </a>
                <a
                  href="tel:+14156886517"
                  className="inline-flex items-center gap-1.5 hover:text-[#E11D2A] dark:hover:text-white transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#E11D2A]" />
                  <span>+1 415 688 6517</span>
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};
