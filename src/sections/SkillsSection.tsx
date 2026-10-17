import { motion } from 'framer-motion';
import { Code, Brain, MessageSquare, Server, Layout, Shield, Database, Wrench, Terminal, type LucideIcon } from 'lucide-react';
import { skillCategories } from '../data/skills.ts';
import type { SkillItem } from '../types/portfolio.ts';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const iconMap: Record<string, LucideIcon> = {
  Code,
  Brain,
  MessageSquare,
  Server,
  Layout,
  Shield,
  Database,
  Wrench,
  Terminal,
};

const levelLabel: Record<NonNullable<SkillItem['level']>, string> = {
  familiar: 'Familiar',
  proficient: 'Proficient',
  advanced: 'Advanced',
};

const levelColor: Record<NonNullable<SkillItem['level']>, string> = {
  familiar: 'var(--text-muted)',
  proficient: 'var(--cyan)',
  advanced: 'var(--emerald)',
};

export function SkillsSection() {
  return (
    <section className="section section--alt" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-heading__label">04 · Skills</span>
          <h2 id="skills-heading" className="section-heading__title">
            Technical <span>Stack</span>
          </h2>
          <div className="section-heading__line">
            <div className="section-heading__dot" />
          </div>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, ci) => {
            const Icon = iconMap[cat.icon] ?? Code;
            return (
              <motion.div
                key={cat.id}
                className="skill-group card card--glass"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={ci + 1}
              >
                {/* Category Header */}
                <div className="skill-group__header">
                  <div className="skill-group__icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="skill-group__title-block">
                    <h3 className="skill-group__name">{cat.name}</h3>
                    {cat.description && (
                      <p className="skill-group__description">{cat.description}</p>
                    )}
                  </div>
                </div>

                {/* Skills List */}
                <ul className="skill-group__items" role="list">
                  {cat.items.map((skill) => (
                    <li key={skill.name} className="skill-item">
                      <span className="skill-item__name">{skill.name}</span>
                      {skill.level && (
                        <span
                          className="skill-item__level font-mono"
                          style={{ color: levelColor[skill.level], fontSize: '0.68rem' }}
                          aria-label={`Level: ${levelLabel[skill.level]}`}
                        >
                          {levelLabel[skill.level]}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
