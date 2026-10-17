import { motion } from 'framer-motion';
import { Users, Calendar, CheckCircle2 } from 'lucide-react';
import { leadership } from '../data/leadership.ts';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function LeadershipSection() {
  return (
    <section className="section" id="leadership" aria-labelledby="leadership-heading">
      <div className="container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-heading__label">07 · Leadership</span>
          <h2 id="leadership-heading" className="section-heading__title">
            Initiative & <span>Impact</span>
          </h2>
          <div className="section-heading__line">
            <div className="section-heading__dot" />
          </div>
        </motion.div>

        <div className="leadership__timeline">
          {leadership.map((item, i) => (
            <motion.article
              key={item.id}
              className="leadership-card card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i + 1}
              aria-labelledby={`lead-${item.id}-title`}
            >
              {/* Timeline connector */}
              <div className="leadership-card__connector" aria-hidden="true">
                <div className="leadership-card__node">
                  <Users size={18} strokeWidth={1.5} />
                </div>
                {i < leadership.length - 1 && (
                  <div className="leadership-card__line" />
                )}
              </div>

              {/* Content */}
              <div className="leadership-card__body">
                <div className="leadership-card__header">
                  <div>
                    <h3 id={`lead-${item.id}-title`} className="leadership-card__role text-emerald">
                      {item.role}
                    </h3>
                    <p className="leadership-card__org">{item.organization}</p>
                  </div>

                  <div className="leadership-card__dates">
                    <Calendar size={13} className="text-muted" />
                    <span className="font-mono text-muted" style={{ fontSize: '0.75rem' }}>
                      {item.startDate}
                      {item.endDate ? ` – ${item.endDate}` : ' – Present'}
                    </span>
                  </div>
                </div>

                <p className="leadership-card__context text-secondary">{item.context}</p>

                {/* Responsibilities */}
                {item.responsibilities.length > 0 && (
                  <div className="leadership-card__section">
                    <h4 className="leadership-card__section-title font-mono text-muted">
                      Responsibilities
                    </h4>
                    <ul className="leadership-card__list">
                      {item.responsibilities.map((r) => (
                        <li key={r} className="leadership-card__list-item">
                          <CheckCircle2 size={14} className="text-emerald" style={{ flexShrink: 0 }} />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Outcomes */}
                {item.outcomes.length > 0 && (
                  <div className="leadership-card__section">
                    <h4 className="leadership-card__section-title font-mono text-muted">
                      Outcomes
                    </h4>
                    <ul className="leadership-card__list">
                      {item.outcomes.map((o) => (
                        <li key={o} className="leadership-card__list-item">
                          <CheckCircle2 size={14} className="text-cyan" style={{ flexShrink: 0 }} />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
