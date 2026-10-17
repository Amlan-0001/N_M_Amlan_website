import { Github, Linkedin, Mail, ArrowUp, MapPin, Twitter, Instagram, type LucideIcon } from 'lucide-react';
import { profile } from '../../data/profile.ts';
import { navigation } from '../../data/navigation.ts';

// Lucide uses 'Twitter' for the X (formerly Twitter) icon
const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  x: Twitter,
  instagram: Instagram,
};

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" role="contentinfo">
      {/* Top separator */}
      <div className="footer__separator" />

      <div className="container">
        <div className="footer__inner">
          {/* Left: Identity */}
          <div className="footer__brand">
            <span className="header__monogram footer__monogram">NMA</span>
            <p className="footer__tagline">
              {profile.tagline}
            </p>
            {/* Social Links */}
            {(profile.socialLinks.length > 0 || profile.email) && (
              <div className="footer__socials">
                {profile.socialLinks.map((link) => {
                  const Icon = iconMap[link.platform.toLowerCase()] ?? Mail;
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__social-link"
                      aria-label={link.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="footer__social-link"
                    aria-label="Email N. M Amlan"
                  >
                    <Mail size={18} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Center: Quick Navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h3 className="footer__nav-title">Sections</h3>
            <ul className="footer__nav-list">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    className="footer__nav-link"
                    onClick={() => {
                      const el = document.getElementById(item.id);
                      if (el) {
                        const top = el.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top, behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Contact / CTA */}
          <div className="footer__contact">
            <h3 className="footer__nav-title">Get in Touch</h3>
            {profile.email ? (
              <a href={`mailto:${profile.email}`} className="footer__email">
                {profile.email}
              </a>
            ) : (
              <p className="text-muted font-mono" style={{ fontSize: '0.8rem' }}>
                Contact details coming soon
              </p>
            )}
            <p className="footer__location text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={12} />
              {profile.location}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} N. M Amlan · All rights reserved
          </p>
          <button
            className="footer__scroll-top"
            onClick={scrollTop}
            aria-label="Return to top of page"
          >
            <ArrowUp size={16} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
