import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Header } from './components/layout/Header.tsx';
import { HeroSection } from './sections/HeroSection.tsx';
import { AboutSection } from './sections/AboutSection.tsx';
import { EducationSection } from './sections/EducationSection.tsx';
import { ExperienceSection } from './sections/ExperienceSection.tsx';
import { ProjectsSection } from './sections/ProjectsSection.tsx';
import { SkillsSection } from './sections/SkillsSection.tsx';
import { ResearchSection } from './sections/ResearchSection.tsx';
import { AchievementsSection } from './sections/AchievementsSection.tsx';
import { LeadershipSection } from './sections/LeadershipSection.tsx';
import { ContactSection } from './sections/ContactSection.tsx';
import { ArrowUp } from 'lucide-react';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`scroll-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <>
        <a href="#main-content" className="skip-link sr-only">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ResearchSection />
          <AchievementsSection />
          <LeadershipSection />
          <ContactSection />
        </main>
        <ScrollToTop />
      </>
    </MotionConfig>
  );
}
