import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Rocket, Users } from 'lucide-react';
import { profile } from '../data/profile.ts';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const dimensions = [
  {
    key: 'engineer' as const,
    label: 'The Engineer',
    icon: Cpu,
    color: 'var(--emerald)',
    colorClass: 'text-emerald',
  },
  {
    key: 'thinker' as const,
    label: 'The Thinker',
    icon: Lightbulb,
    color: 'var(--violet)',
    colorClass: 'text-violet',
  },
  {
    key: 'entrepreneur' as const,
    label: 'The Entrepreneur',
    icon: Rocket,
    color: 'var(--cyan)',
    colorClass: 'text-cyan',
  },
  {
    key: 'leader' as const,
    label: 'The Leader',
    icon: Users,
    color: 'var(--emerald)',
    colorClass: 'text-emerald',
  },
];

export function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-heading__label">01 · About</span>
          <h2 id="about-heading" className="section-heading__title">
            The Mind of a <span>Builder</span>
          </h2>
          <div className="section-heading__line">
            <div className="section-heading__dot" />
          </div>
        </motion.div>

        <div className="about__layout">
          {/* Bio paragraphs */}
          <div className="about__bio">
            {profile.bio.map((para, i) => (
              <motion.p
                key={i}
                className={`about__para${i === 0 ? ' about__para--lead' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={i + 1}
              >
                {para}
              </motion.p>
            ))}

          </div>

          {/* Dimension Cards */}
          <div className="about__dimensions">
            <motion.h3
              className="about__dimensions-title text-muted font-mono"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={1}
            >
              My Identity
            </motion.h3>
            {dimensions.map((dim, i) => {
              const Icon = dim.icon;
              return (
                <motion.div
                  key={dim.key}
                  className="about__dim-card card card--glass"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  custom={i + 2}
                  whileHover={{ borderColor: dim.color, y: -4 }}
                >
                  <div className="about__dim-icon" style={{ color: dim.color }}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className={`about__dim-label ${dim.colorClass}`}>{dim.label}</h4>
                    <p className="about__dim-text">{profile.dimensions[dim.key]}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
