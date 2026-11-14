import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import Button from './Button';

export default function Navbar({ onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-subtle border-b border-ink-border py-3'
            : 'bg-canvas/90 backdrop-blur-md border-b border-ink-border/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Wordmark */}
            <Link
              to="/"
              className="flex items-center gap-3.5 group focus:outline-none"
            >
              <div className="relative w-10 h-10 rounded-xl bg-white border border-ink-border p-1.5 flex items-center justify-center overflow-hidden shadow-subtle group-hover:border-lavender-300 transition-colors">
                <img
                  src="/client_assets/logo/sdc-logo.png"
                  alt="Sakthi Dental Clinic Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = '<span class="font-sans font-bold font-bold text-primary text-base">SDC</span>';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl  tracking-tight text-ink-primary group-hover:text-primary transition-colors">
                  Sakthi Dental Clinic
                </span>
                <span className="text-[10px] tracking-[0.18em] uppercase font-bold text-ink-muted">
                  Hosur • Tamil Nadu
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 relative">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive
                        ? 'text-primary font-bold'
                        : 'text-ink-secondary hover:text-ink-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Hover background indicator */}
                      {hoveredLink === link.path && !isActive && (
                        <motion.span
                          layoutId="navHover"
                          className="absolute inset-0 bg-canvas-warm/80 rounded-full -z-10"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      
                      <span>{link.name}</span>

                      {/* Active indicator underline */}
                      {isActive && (
                        <motion.span
                          layoutId="navIndicator"
                          className="absolute bottom-1 left-4 right-4 h-[2px] bg-primary rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Header Right CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+919862890897"
                className="hidden lg:flex items-center gap-1.5 text-xs text-ink-secondary hover:text-ink-primary font-medium tracking-wide transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>+91 9862890897</span>
              </a>

              <Button
                variant="primary"
                size="sm"
                onClick={onOpenAppointment}
                icon={Calendar}
                iconPosition="left"
              >
                Fix an Appointment
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-ink-primary hover:bg-canvas-warm border border-ink-border focus:outline-none"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-ink-primary/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-canvas border-l border-ink-border p-6 flex flex-col justify-between overflow-y-auto shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-ink-border">
                  <div className="flex items-center gap-3">
                    <img
                      src="/client_assets/logo/sdc-logo.png"
                      alt="SDC Logo"
                      className="w-8 h-8 object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="font-sans font-bold text-lg  text-ink-primary">
                        Sakthi Dental Clinic
                      </span>
                      <span className="text-[10px] uppercase text-ink-muted tracking-wider font-semibold">
                        Hosur, Tamil Nadu
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg border border-ink-border hover:bg-canvas-warm text-ink-secondary"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl text-base transition-colors ${
                          isActive
                            ? 'bg-lavender-100/70 text-primary font-bold'
                            : 'text-ink-primary hover:bg-canvas-warm'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/privacy-policy"
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors ${
                        isActive
                          ? 'bg-lavender-100/70 text-primary font-bold'
                          : 'text-ink-secondary hover:bg-canvas-warm'
                      }`
                    }
                  >
                    Privacy Policy
                  </NavLink>
                </nav>
              </div>

              <div className="pt-6 border-t border-ink-border space-y-3">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={Calendar}
                  iconPosition="left"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                >
                  Fix an Appointment
                </Button>

                <div className="bg-white rounded-xl p-3.5 border border-ink-border text-xs text-ink-secondary space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-ink-primary">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    <a href="tel:+919862890897">+91 9862890897</a>
                  </div>
                  <p className="text-[11px] text-ink-muted">
                    B2/8, SBM Layout, Anthivadi, Hosur
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
