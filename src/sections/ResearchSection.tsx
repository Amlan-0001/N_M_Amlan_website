import { motion } from 'framer-motion';
import { FlaskConical, FileText, ExternalLink, Clock } from 'lucide-react';
import { research } from '../data/research.ts';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const statusConfig = {
  ongoing: { label: 'Ongoing', class: 'status-dot--ongoing', badgeClass: 'badge--emerald' },
  completed: { label: 'Completed', class: 'status-dot--completed', badgeClass: '' },
  published: { label: 'Published', class: 'status-dot--ongoing', badgeClass: 'badge--cyan' },
  draft: { label: 'Draft', class: 'status-dot--wip', badgeClass: '' },
};

export function ResearchSection() {
  return (
    <section className="section" id="research" aria-labelledby="research-heading">
      <div className="container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-heading__label">05 · Research</span>
          <h2 id="research-heading" className="section-heading__title">
            Research & <span>Exploration</span>
          </h2>
          <div className="section-heading__line">
            <div className="section-heading__dot" />
          </div>
        </motion.div>

        {research.map((item, i) => {
          const sc = statusConfig[item.status];
          return (
            <motion.article
              key={item.id}
              className="research-card card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i + 1}
              aria-labelledby={`research-${item.id}-title`}
            >
              {/* Background subtle grid pattern */}
              <div className="research-card__bg" aria-hidden="true" />

              <div className="research-card__layout">
                {/* Left sidebar */}
                <div className="research-card__sidebar">
                  <div className="research-card__icon">
                    <FlaskConical size={26} strokeWidth={1.5} />
                  </div>
                  <div className="research-card__year font-mono text-muted">
                    {item.startDate}
                  </div>
                  {/* Status */}
                  <div className={`badge ${sc.badgeClass} research-card__status`}>
                    <span className={`status-dot ${sc.class}`} aria-hidden="true" />
                    {sc.label}
                  </div>
                </div>

                {/* Main content */}
                <div className="research-card__content">
                  <p className="research-card__area font-mono text-emerald" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {item.area}
                  </p>

                  <h3 id={`research-${item.id}-title`} className="research-card__title">
                    {item.title}
                  </h3>

                  {/* Tags */}
                  <div className="research-card__tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="badge">{tag}</span>
                    ))}
                  </div>

                  {/* Sections */}
                  <div className="research-card__sections">
                    <div className="research-section">
                      <h4 className="research-section__title">Motivation</h4>
                      <p className="research-section__text">{item.motivation}</p>
                    </div>

                    <div className="research-section">
                      <h4 className="research-section__title">Research Question</h4>
                      <p className="research-section__text research-section__text--quote">
                        {item.researchQuestion}
                      </p>
                    </div>

                    <div className="research-section">
                      <h4 className="research-section__title">Methodology</h4>
                      <p className="research-section__text">{item.methodology}</p>
                    </div>

                    {/* Tools */}
                    <div className="research-section">
                      <h4 className="research-section__title">Tools & Technologies</h4>
                      <div className="research-section__tools">
                        {item.tools.map((tool) => (
                          <span key={tool} className="badge badge--emerald">{tool}</span>
                        ))}
                      </div>
                    </div>

                    {/* Findings */}
                    {item.findings ? (
                      <div className="research-section">
                        <h4 className="research-section__title">Findings</h4>
                        <p className="research-section__text">{item.findings}</p>
                      </div>
                    ) : (
                      <div className="research-section research-section--pending">
                        <Clock size={14} className="text-muted" />
                        <span className="text-muted font-mono" style={{ fontSize: '0.78rem' }}>
                          Findings will be updated as research progresses
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  {(item.paperUrl || item.pdfUrl) && (
                    <div className="research-card__links">
                      {item.paperUrl && (
                        <a
                          href={item.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--outline"
                          aria-label="View paper"
                        >
                          <ExternalLink size={15} />
                          View Paper
                        </a>
                      )}
                      {item.pdfUrl && (
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--ghost"
                          aria-label="Download PDF"
                        >
                          <FileText size={15} />
                          PDF
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
