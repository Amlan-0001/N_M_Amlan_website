import { motion } from 'framer-motion';
import { Microscope, Calendar, MapPin, FileText, Award } from 'lucide-react';
import { experience } from '../data/experience.ts';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const typeConfig = {
  internship: { label: 'Internship', color: 'var(--cyan)' },
  research: { label: 'Research Internship', color: 'var(--emerald)' },
  'part-time': { label: 'Part-time', color: 'var(--violet)' },
  freelance: { label: 'Freelance', color: 'var(--cyan)' },
};

export function ExperienceSection() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-heading__label">Experience</span>
          <h2 id="experience-heading" className="section-heading__title">
            Research & <span>Industry</span>
          </h2>
          <div className="section-heading__line">
            <div className="section-heading__dot" />
          </div>
        </motion.div>

        <div className="experience__timeline">
          {experience.map((item, i) => {
            const tc = typeConfig[item.type];
            return (
              <motion.article
                key={item.id}
                className="experience-card card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={i + 1}
                aria-labelledby={`exp-${item.id}-title`}
              >
                {/* Accent top bar */}
                <div
                  className="experience-card__accent"
                  style={{ background: `linear-gradient(90deg, ${tc.color}, transparent)` }}
                  aria-hidden="true"
                />

                <div className="experience-card__layout">
                  {/* Left sidebar */}
                  <div className="experience-card__sidebar">
                    <div
                      className="experience-card__icon"
                      style={{ color: tc.color, borderColor: `${tc.color}30` }}
                    >
                      <Microscope size={24} strokeWidth={1.5} />
                    </div>
                    <div className="experience-card__timeline-line" aria-hidden="true" />
                  </div>

                  {/* Main content */}
                  <div className="experience-card__content">
                    {/* Type badge */}
                    <div className="experience-card__type">
                      <span
                        className="badge"
                        style={{ borderColor: `${tc.color}60`, color: tc.color }}
                      >
                        {tc.label}
                      </span>
                      {item.grantContext && (
                        <span className="badge badge--emerald">
                          <Award size={11} />
                          {item.grantContext}
                        </span>
                      )}
                    </div>

                    {/* Role & Org */}
                    <h3
                      id={`exp-${item.id}-title`}
                      className="experience-card__role"
                      style={{ color: tc.color }}
                    >
                      {item.role}
                    </h3>
                    <p className="experience-card__org">{item.organization}</p>

                    {/* Meta */}
                    <div className="experience-card__meta">
                      <div className="experience-card__meta-item">
                        <Calendar size={13} className="text-muted" />
                        <span className="font-mono text-muted" style={{ fontSize: '0.78rem' }}>
                          {item.startDate} – {item.endDate}
                        </span>
                      </div>
                      <div className="experience-card__meta-item">
                        <MapPin size={13} className="text-muted" />
                        <span className="font-mono text-muted" style={{ fontSize: '0.78rem' }}>
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="experience-card__desc">{item.description}</p>

                    {/* Highlights */}
                    {item.highlights.length > 0 && (
                      <ul className="experience-card__highlights">
                        {item.highlights.map((h) => (
                          <li key={h} className="experience-card__highlight">
                            <span className="experience-card__highlight-dot" aria-hidden="true" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech tags */}
                    {item.technologies.length > 0 && (
                      <div className="experience-card__tech">
                        {item.technologies.map((t) => (
                          <span key={t} className="badge">{t}</span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="experience-card__links">
                      {item.certificateUrl && (
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--outline"
                          style={{ fontSize: '0.82rem', padding: '0.45rem 1rem' }}
                          aria-label="View internship certificate"
                        >
                          <FileText size={14} />
                          View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
