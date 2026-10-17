import { motion } from 'framer-motion';
import { Trophy, Calendar, ExternalLink, FileText, PlusCircle } from 'lucide-react';
import { achievements } from '../data/achievements.ts';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const typeConfig = {
  award: { color: 'var(--emerald)', label: 'Award' },
  certification: { color: 'var(--cyan)', label: 'Certification' },
  competition: { color: 'var(--violet)', label: 'Competition' },
  recognition: { color: 'var(--emerald)', label: 'Recognition' },
  selection: { color: 'var(--cyan)', label: 'Selection' },
};

function EmptyState() {
  return (
    <motion.div
      className="achievements__empty"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      custom={1}
    >
      <div className="achievements__empty-icon">
        <PlusCircle size={40} strokeWidth={1} />
      </div>
      <h3 className="achievements__empty-title">Achievements Coming Soon</h3>
      <p className="achievements__empty-text text-muted">
        Hackathons, certifications, competitions, and recognitions will appear here once
        verified and documented. Update <code className="font-mono">src/data/achievements.ts</code> to add your achievements.
      </p>
    </motion.div>
  );
}

export function AchievementsSection() {
  return (
    <section className="section section--alt" id="achievements" aria-labelledby="achievements-heading">
      <div className="container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-heading__label">06 · Achievements</span>
          <h2 id="achievements-heading" className="section-heading__title">
            Milestones & <span>Recognition</span>
          </h2>
          <div className="section-heading__line">
            <div className="section-heading__dot" />
          </div>
        </motion.div>

        {achievements.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="achievements__grid">
            {achievements.map((item, i) => {
              const tc = typeConfig[item.type];
              return (
                <motion.article
                  key={item.id}
                  className="achievement-card card"
                  style={{ '--ach-color': tc.color } as React.CSSProperties}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  custom={i + 1}
                  aria-labelledby={`ach-${item.id}-title`}
                >
                  <div className="achievement-card__top-bar" style={{ background: `linear-gradient(90deg, ${tc.color}, transparent)` }} aria-hidden="true" />

                  <div className="achievement-card__header">
                    <div className="achievement-card__icon" style={{ color: tc.color }}>
                      <Trophy size={22} strokeWidth={1.5} />
                    </div>
                    <span className="badge" style={{ borderColor: tc.color, color: tc.color }}>
                      {tc.label}
                    </span>
                  </div>

                  <h3 id={`ach-${item.id}-title`} className="achievement-card__title">
                    {item.title}
                  </h3>

                  <p className="achievement-card__org text-secondary">{item.organization}</p>

                  <div className="achievement-card__meta">
                    <Calendar size={13} className="text-muted" />
                    <span className="font-mono text-muted" style={{ fontSize: '0.75rem' }}>{item.date}</span>
                    {item.level && (
                      <>
                        <span className="text-muted">·</span>
                        <span className="font-mono text-muted" style={{ fontSize: '0.75rem' }}>{item.level}</span>
                      </>
                    )}
                  </div>

                  <p className="achievement-card__desc">{item.description}</p>

                  <div className="achievement-card__links">
                    {item.certificateUrl && (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--ghost"
                        aria-label={`View certificate for ${item.title}`}
                      >
                        <FileText size={14} />
                        Certificate
                      </a>
                    )}
                    {item.verificationUrl && (
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--ghost"
                        aria-label={`Verify ${item.title}`}
                      >
                        <ExternalLink size={14} />
                        Verify
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
