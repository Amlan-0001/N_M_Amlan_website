import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ExternalLink, MessageCircle, Twitter, Instagram, type LucideIcon } from 'lucide-react';
import { profile } from '../data/profile.ts';

const socialIconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  x: Twitter,
  instagram: Instagram,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ContactSection() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-section__bg" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-heading__label">Get In Touch</span>
          <h2 id="contact-heading" className="section-heading__title">
            Let's <span>Connect</span>
          </h2>
          <div className="section-heading__line">
            <div className="section-heading__dot" />
          </div>
        </motion.div>

        <motion.div
          className="contact__message"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={1}
        >
          <div className="contact__icon-wrap" aria-hidden="true">
            <MessageCircle size={32} strokeWidth={1.5} />
          </div>
          <h3 className="contact__sub-title">Open to Conversations</h3>
          <p className="contact__body">
            I'm always curious about ideas worth exploring, problems worth solving, and people who see the world a little differently.
          </p>
          <p className="contact__body">
            Whether it's discussing AI and emerging technologies, exploring an unconventional idea, collaborating on a project, or talking about research and internship opportunities, I'm always open to a meaningful conversation. I enjoy learning from different perspectives, challenging assumptions, and turning interesting ideas into something real.
          </p>
          <p className="contact__body">
            I'm still learning, still building, and still figuring out how much there is to explore. If something I'm working on resonates with you, or you simply have an idea worth discussing, I'd love to hear from you.
          </p>
          <p className="contact__closing">Good ideas can start with a simple conversation.</p>

          {profile.location && (
            <div className="contact__location">
              <MapPin size={14} className="text-muted" />
              <span className="text-muted font-mono" style={{ fontSize: '0.82rem' }}>
                {profile.location}
              </span>
            </div>
          )}
        </motion.div>

        <div className="contact__bottom">
          {profile.email && (
            <motion.a
              href={`mailto:${profile.email}`}
              className="contact__link-card contact__email-card card"
              aria-label={`Send email to ${profile.email}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={2}
            >
              <div className="contact__link-icon contact__link-icon--emerald">
                <Mail size={22} strokeWidth={1.5} />
              </div>
              <div className="contact__link-body">
                <span className="contact__link-label font-mono text-muted">Email</span>
                <span className="contact__link-value text-emerald">{profile.email}</span>
              </div>
              <ExternalLink size={14} className="text-muted contact__link-arrow" />
            </motion.a>
          )}

          {profile.socialLinks.length > 0 && (
            <motion.nav
              className="contact__socials"
              aria-label="Social profiles"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={3}
            >
              {profile.socialLinks.map((link) => {
                const Icon = socialIconMap[link.platform.toLowerCase()];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`contact__social-link contact__social-link--${link.platform.toLowerCase()}`}
                    aria-label={`Visit ${link.label} profile`}
                    title={link.label}
                  >
                    {Icon ? <Icon size={22} strokeWidth={1.8} /> : <ExternalLink size={20} />}
                  </a>
                );
              })}
            </motion.nav>
          )}
        </div>
      </div>
    </section>
  );
}
