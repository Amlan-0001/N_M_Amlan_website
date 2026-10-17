import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { profile } from '../data/profile.ts';

// ─── Hero Portrait ────────────────────────────────────────────────────────
const PORTRAIT_WEBP_SRC = '/images/portrait.webp';
const PORTRAIT_FALLBACK_SRC = '/images/portrait.png';

function PortraitFrame() {
  const [prefersReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], prefersReduced ? [0, 0] : [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], prefersReduced ? [0, 0] : [-6, 6]);

  useEffect(() => {
    if (prefersReduced || window.matchMedia('(pointer: coarse)').matches) return;
    const handleMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set((e.clientX - cx) / (rect.width / 2));
      mouseY.set((e.clientY - cy) / (rect.height / 2));
    };
    const handleLeave = () => { mouseX.set(0); mouseY.set(0); };

    window.addEventListener('mousemove', handleMove, { passive: true });
    containerRef.current?.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      containerRef.current?.removeEventListener('mouseleave', handleLeave);
    };
  }, [mouseX, mouseY, prefersReduced]);

  return (
    <div className="portrait-outer" ref={containerRef}>
      {/* Ambient glow rings */}
      <div className="portrait-ring portrait-ring--1" aria-hidden="true" />
      <div className="portrait-ring portrait-ring--2" aria-hidden="true" />
      <div className="portrait-ring portrait-ring--3" aria-hidden="true" />

      {/* Orbital accent */}
      <div className="portrait-orbital" aria-hidden="true">
        <div className="portrait-orbital__dot" />
      </div>

      {/* Main portrait card */}
      <motion.div
        className="portrait-card"
        style={{ rotateX, rotateY, transformPerspective: 800 }}
      >
        <picture className="portrait-picture">
          <source srcSet={PORTRAIT_WEBP_SRC} type="image/webp" />
          <img
            src={PORTRAIT_FALLBACK_SRC}
            alt="N.M Amlan — portrait photograph"
            className="portrait-img"
            width={1173}
            height={1341}
            decoding="async"
          />
        </picture>
        {/* Rim lighting overlay */}
        <div className="portrait-rim" aria-hidden="true" />
      </motion.div>

      {/* Corner geometric accents */}
      <div className="portrait-corner portrait-corner--tl" aria-hidden="true" />
      <div className="portrait-corner portrait-corner--br" aria-hidden="true" />
    </div>
  );
}

// ─── Animated Text ────────────────────────────────────────────────────────
function AnimatedName({ name }: { name: string }) {
  const words = name.split(' ');
  return (
    <span className="hero__name-anim">
      {words.map((word, wi) => (
        <span key={wi} className="hero__name-word">
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              className="hero__name-char"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + (wi * word.length + ci) * 0.03,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && (
            <motion.span
              className="hero__name-char"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + (wi * word.length + word.length) * 0.03 }}
            >
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </span>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────
export function HeroSection() {
  const handleExplore = () => {
    const el = document.getElementById('about');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      {/* Background grid */}
      <div className="hero__bg-grid" aria-hidden="true" />
      {/* Background radial glow */}
      <div className="hero__bg-glow hero__bg-glow--emerald" aria-hidden="true" />
      <div className="hero__bg-glow hero__bg-glow--violet" aria-hidden="true" />

      <div className="container hero__container">
        {/* Left: Text content */}
        <div className="hero__content">
          {/* Name */}
          <h1 className="hero__name">
            <AnimatedName name={profile.name} />
          </h1>

          {/* Tagline */}
          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {profile.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            {profile.description}
          </motion.p>

          {/* Areas of focus */}
          <motion.div
            className="hero__tags"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <span className="hero__tags-label font-mono">Areas of Focus</span>
            {[
              'AI & Generative AI',
              'Agentic Systems',
              'Machine Learning',
              'Deep Learning',
              'NLP & LLMs',
              'Backend Engineering',
              'Security & Privacy Preserving System',
              'Software Engineering',
            ].map(
              (tag) => (
                <span key={tag} className="badge hero__tag">
                  {tag}
                </span>
              )
            )}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <button
              className="btn btn--primary"
              onClick={handleExplore}
              id="hero-explore-btn"
            >
              Explore My Work
              <ArrowRight size={16} />
            </button>

            {profile.resumePath ? (
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
                id="hero-resume-btn"
              >
                <Download size={16} />
                View Resume
              </a>
            ) : (
              <span
                className="btn btn--outline hero__cta-disabled"
                title="Resume coming soon"
                aria-label="Resume not yet available"
              >
                <Download size={16} />
                Resume
              </span>
            )}
          </motion.div>
        </div>

        {/* Right: Portrait */}
        <motion.div
          className="hero__portrait-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <PortraitFrame />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <button
          className="hero__scroll-btn"
          onClick={handleExplore}
          aria-label="Scroll to content"
        >
          <ChevronDown size={18} />
        </button>
      </motion.div>
    </section>
  );
}
