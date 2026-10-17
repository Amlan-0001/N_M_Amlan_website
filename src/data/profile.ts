import type { Profile } from '../types/portfolio.ts';

export const profile: Profile = {
  name: 'N. M Amlan',
  initials: 'NMA',
  title: 'Computer Science and Engineering Student',
  tagline: 'Building Intelligent Systems. Creating Meaningful Impact.',
  description:
    'Computer Science and Engineering student. AI enthusiast. Builder by instinct. Thinker by curiosity.',
  bio: [
    'I build systems. I explore ideas. I question the obvious.',
    "I'm a Computer Science and Engineering student at IIIT Bhubaneswar, curious about the many ways technology can be used to understand problems, challenge existing approaches, and create something meaningful. I'm particularly drawn to Artificial Intelligence, machine learning, cybersecurity, and privacy-preserving technologies, but I'm equally interested in the possibilities that emerge when different fields intersect.",
    "I enjoy taking complex ideas beyond theory — building intelligent applications, experimenting with machine learning, exploring cryptography, and discovering how different technologies can come together to solve problems in unexpected ways. For me, the goal isn't simply to make something work; it's to understand the problem deeply enough to build it well.",
    'My curiosity extends beyond technology. Psychology draws me toward understanding the human mind. Philosophy challenges me to question assumptions. Entrepreneurship inspires me to turn ideas into things that create value. These interests shape not just what I build, but how I think about the problems worth solving.',
    "I'm at the beginning of a long journey. There are systems I haven't built, problems I haven't solved, and fields I haven't explored yet. I don't want to limit that journey to what I already know or what interests me today. There's still so much to discover, and that's what keeps me curious and moving forward.",
  ],
  email: 'nmamlan.tech@gmail.com',
  location: 'Bhubaneswar, India',
  resumePath: 'https://drive.google.com/file/d/1Kv2uaKSc7-nT4FBimuKDoSmglz4k6IH2/view?usp=drive_link',
  socialLinks: [
    { platform: 'github', url: 'https://github.com/Amlan-0001', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/n-m-amlan-a05b3027a/', label: 'LinkedIn' },
    { platform: 'x', url: 'https://x.com/nmamlan', label: 'X (Twitter)' },
    { platform: 'instagram', url: 'https://www.instagram.com/n.m.amlan?igsh=Mmpvc2h3bGw3bHVq', label: 'Instagram' },
  ],
  dimensions: {
    engineer:
      'I build real systems — from ZKP-based eKYC platforms and RAG pipelines to phishing detection models and agentic AI applications.',
    thinker:
      'I am drawn to the questions behind the code: the psychology of decision-making, the philosophy of intelligence, and the ethics of the systems we deploy.',
    entrepreneur:
      'I think about problems before solutions. I am interested in identifying gaps, designing experiments, and eventually turning validated ideas into useful products.',
    leader:
      'I take ownership and collaborate. I have led national-finalist teams, organized events, coordinated placements, and driven projects across architecture, AI, and cryptography.',
  },
};
