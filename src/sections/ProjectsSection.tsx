import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { projects } from '../data/projects.ts';
import type { Project } from '../types/portfolio.ts';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const statusLabel: Record<Project['status'], string> = {
  active: 'Active',
  completed: 'Completed',
  wip: 'In Progress',
  concept: 'Concept',
};

const statusClass: Record<Project['status'], string> = {
  active: 'status-dot--ongoing',
  completed: 'status-dot--completed',
  wip: 'status-dot--wip',
  concept: 'status-dot--completed',
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      className="project-card card"
      style={{
        '--project-color': project.color,
        borderColor: expanded ? project.color + '55' : undefined,
      } as React.CSSProperties}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -4 }}
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Colored top accent */}
      <div
        className="project-card__accent"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__status">
          <span className={`status-dot ${statusClass[project.status]}`} aria-hidden="true" />
          <span className="font-mono text-muted" style={{ fontSize: '0.72rem' }}>
            {statusLabel[project.status]}
          </span>
        </div>

        <div className="project-card__title-row">
          <h3
            id={`project-${project.id}-title`}
            className="project-card__title"
            style={{ color: project.color }}
          >
            {project.name}
          </h3>
        </div>

        <p className="project-card__tagline">{project.tagline}</p>
      </div>

      {/* Tech Stack */}
      <div className="project-card__tech">
        {project.technologies.slice(0, 5).map((tech) => (
          <span key={tech.name} className="badge">{tech.name}</span>
        ))}
        {project.technologies.length > 5 && (
          <span className="badge text-muted">+{project.technologies.length - 5}</span>
        )}
      </div>

      {/* Expandable detail */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="project-card__detail"
          >
            <div className="project-card__section">
              <h4 className="project-card__section-title font-mono text-muted">
                The Problem
              </h4>
              <p className="project-card__section-text">{project.problem}</p>
            </div>

            <div className="project-card__section">
              <h4 className="project-card__section-title font-mono text-muted">
                The Solution
              </h4>
              <p className="project-card__section-text">{project.solution}</p>
            </div>

            <div className="project-card__section">
              <h4 className="project-card__section-title font-mono text-muted">
                My Contribution
              </h4>
              <p className="project-card__section-text">{project.contribution}</p>
            </div>

            {project.features.length > 0 && (
              <div className="project-card__section">
                <h4 className="project-card__section-title font-mono text-muted">
                  <Zap size={12} style={{ color: project.color }} />
                  Key Features
                </h4>
                <ul className="project-card__features">
                  {project.features.map((f) => (
                    <li key={f} className="project-card__feature">
                      <span
                        className="project-card__feature-dot"
                        style={{ background: project.color }}
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer: Actions */}
      <div className="project-card__footer">
        <div className="project-card__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--icon"
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <Github size={18} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--icon"
              aria-label={`View ${project.name} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <button
          className="project-card__expand-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`project-${project.id}-detail`}
          style={{ color: project.color }}
        >
          <span className="font-mono" style={{ fontSize: '0.75rem' }}>
            {expanded ? 'Less' : 'Details'}
          </span>
          {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </button>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-heading__label">03 · Projects</span>
          <h2 id="projects-heading" className="section-heading__title">
            What I've <span>Built</span>
          </h2>
          <div className="section-heading__line">
            <div className="section-heading__dot" />
          </div>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
