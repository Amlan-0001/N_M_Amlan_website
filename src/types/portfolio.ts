// ─── Portfolio Type Definitions ──────────────────────────────────────────────

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  description: string;
  bio: string[];
  email: string | null;
  location: string;
  resumePath: string | null;
  socialLinks: SocialLink[];
  dimensions: {
    engineer: string;
    thinker: string;
    entrepreneur: string;
    leader: string;
  };
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  department?: string;
  startYear?: string;
  endYear?: string;
  cgpa: string | null;
  score?: string;
  scoreLabel?: string;
  location: string;
  relevantCourses: string[];
  highlights: string[];
}

export interface Technology {
  name: string;
  icon?: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  contribution: string;
  technologies: Technology[];
  features: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  imageUrl: string | null;
  status: 'active' | 'completed' | 'wip' | 'concept';
  featured: boolean;
  color: string;
}

export interface SkillItem {
  name: string;
  level?: 'familiar' | 'proficient' | 'advanced';
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description?: string;
  items: SkillItem[];
}

// Named ResearchItem to avoid conflict with built-in Research type names
export interface ResearchItem {
  id: string;
  title: string;
  area: string;
  motivation: string;
  researchQuestion: string;
  methodology: string;
  tools: string[];
  status: 'ongoing' | 'completed' | 'published' | 'draft';
  findings: string | null;
  paperUrl: string | null;
  pdfUrl: string | null;
  startDate: string;
  tags: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  level: string | null;
  certificateUrl: string | null;
  verificationUrl: string | null;
  type: 'award' | 'certification' | 'competition' | 'recognition' | 'selection';
}

export interface Leadership {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  responsibilities: string[];
  outcomes: string[];
  context: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'internship' | 'research' | 'part-time' | 'freelance';
  description: string;
  highlights: string[];
  technologies: string[];
  certificateUrl: string | null;
  grantContext: string | null;
}
