import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navigation } from '../../data/navigation.ts';
import { profile } from '../../data/profile.ts';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navigation.map((n) => n.id);
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    []
  );

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const nav = mobileNavRef.current;
    const focusable = nav?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]');
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        menuToggleRef.current?.focus();
      } else if (event.key === 'Tab' && first && last) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="header"
        style={{ '--scrolled': isScrolled ? 1 : 0 } as React.CSSProperties}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        role="banner"
      >
        <div className="header__inner container">
          {/* Monogram / Logo */}
          <a
            href="#"
            className="header__logo"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="N. M Amlan — return to top"
          >
            <span className="header__monogram">Amlan</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="header__nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <button
                key={item.id}
                className={`header__nav-link${activeSection === item.id ? ' header__nav-link--active' : ''}`}
                onClick={() => handleNavClick(item.href)}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    className="header__nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Resume CTA (desktop) */}
          {profile.resumePath ? (
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline header__resume-btn"
              aria-label="View resume"
            >
              <Download size={15} />
              Resume
            </a>
          ) : (
            <span className="header__resume-btn header__resume-btn--disabled" aria-hidden="true">
              <Download size={15} />
              Resume
            </span>
          )}

          {/* Mobile Menu Toggle */}
          <button
            ref={menuToggleRef}
            className="header__menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            {/* Drawer */}
            <motion.nav
              ref={mobileNavRef}
              id="mobile-nav"
              className="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="mobile-nav__header">
                <span className="header__monogram">Amlan</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation"
                  className="mobile-nav__close"
                >
                  <X size={22} />
                </button>
              </div>

              <ul className="mobile-nav__list">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <button
                      className={`mobile-nav__link${activeSection === item.id ? ' mobile-nav__link--active' : ''}`}
                      onClick={() => handleNavClick(item.href)}
                    >
                      <span className="mobile-nav__number font-mono">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              {profile.resumePath && (
                <div className="mobile-nav__footer">
                  <a
                    href={profile.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <Download size={16} />
                    View Resume
                  </a>
                </div>
              )}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
