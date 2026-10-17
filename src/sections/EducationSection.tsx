import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { education } from '../data/education.ts';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function EducationSection() {
  return (
    <section className="section section--alt" id="education" aria-labelledby="education-heading">
      <div className="container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-heading__label">02 · Education</span>
          <h2 id="education-heading" className="section-heading__title">
            Academic <span>Foundation</span>
          </h2>
          <div className="section-heading__line">
            <div className="section-heading__dot" />
          </div>
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            className="edu__card card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={i + 1}
          >
            {/* Accent bar */}
            <div className="edu__accent-bar" aria-hidden="true" />

            <div className="edu__layout">
              {/* Left: Icon + Timeline indicator */}
              <div className="edu__icon-col">
                <div className="edu__icon-wrap">
                  <GraduationCap size={28} strokeWidth={1.5} />
                </div>
                <div className="edu__timeline-line" aria-hidden="true" />
              </div>

              {/* Right: Content */}
              <div className="edu__content">
                {/* Institution */}
                <div className="edu__meta">
                  <div className="edu__meta-item">
                    <MapPin size={14} className="text-muted" />
                    <span className="text-muted font-mono" style={{ fontSize: '0.8rem' }}>
                      {edu.location}
                    </span>
                  </div>
                  {(edu.startYear || edu.endYear) && (
                    <div className="edu__meta-item">
                      <Calendar size={14} className="text-muted" />
                      <span className="text-muted font-mono" style={{ fontSize: '0.8rem' }}>
                        {edu.startYear && edu.endYear
                          ? `${edu.startYear} – ${edu.endYear}`
                          : edu.startYear ?? edu.endYear}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="edu__degree">{edu.degree}</h3>
                {edu.department && <p className="edu__dept text-emerald">{edu.department}</p>}
                <p className="edu__institution text-secondary">{edu.institution}</p>

                {(edu.score || edu.cgpa) && (
                  <div className="edu__cgpa">
                    <span className="font-mono text-muted" style={{ fontSize: '0.8rem' }}>
                      {edu.scoreLabel ?? 'CGPA'}
                    </span>
                    <span className="edu__cgpa-value">{edu.score ?? edu.cgpa}</span>
                  </div>
                )}

                {/* Coursework */}
                {edu.relevantCourses.length > 0 && (
                  <div className="edu__courses">
                    <div className="edu__courses-header">
                      <BookOpen size={15} className="text-emerald" />
                      <span className="font-mono text-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Relevant Coursework
                      </span>
                    </div>
                    <div className="edu__courses-grid">
                      {edu.relevantCourses.map((course) => (
                        <span key={course} className="badge">{course}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {edu.highlights.length > 0 && (
                  <ul className="edu__highlights">
                    {edu.highlights.map((h) => (
                      <li key={h} className="edu__highlight">
                        <span className="edu__highlight-dot" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
