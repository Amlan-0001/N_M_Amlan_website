import type { SkillCategory } from '../types/portfolio.ts';

// Core skills listed explicitly by the user + technologies demonstrated in projects.
// No proficiency bars or percentages — kept as readable tags per the user's instruction.

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming & CS Fundamentals',
    icon: 'Code',
    items: [
      { name: 'Python', level: 'proficient' },
      { name: 'C++', level: 'proficient' },
      { name: 'SQL', level: 'proficient' },
      { name: 'Data Structures & Algorithms', level: 'proficient' },
      { name: 'Object-Oriented Programming (OOP)', level: 'proficient' },
      { name: 'Database Management Systems (DBMS)', level: 'proficient' },
      { name: 'Operating Systems', level: 'proficient' },
      { name: 'Computer Networks', level: 'proficient' },
      { name: 'System Design', level: 'proficient' },
    ],
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: 'Brain',
    items: [
      { name: 'Machine Learning', level: 'proficient' },
      { name: 'Deep Learning', level: 'proficient' },
      { name: 'Convolutional Neural Networks (CNNs)', level: 'proficient' },
      { name: 'Scikit-learn', level: 'proficient' },
      { name: 'PyTorch', level: 'familiar' },
      { name: 'TensorFlow', level: 'familiar' },
    ],
  },
  {
    id: 'nlp-genai',
    name: 'NLP & Generative AI',
    icon: 'MessageSquare',
    items: [
      { name: 'Natural Language Processing (NLP)', level: 'proficient' },
      { name: 'Transformer Architecture', level: 'proficient' },
      { name: 'Hugging Face Transformers', level: 'proficient' },
      { name: 'Large Language Models (LLMs)', level: 'proficient' },
      { name: 'LangChain', level: 'proficient' },
      { name: 'LangGraph & AI Agents', level: 'familiar' },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 'proficient' },
      { name: 'FAISS & Vector Search', level: 'proficient' },
      { name: 'RAG Evaluation', level: 'familiar' },
    ],
  },
  {
    id: 'data-engineering',
    name: 'Data Engineering',
    icon: 'Database',
    items: [
      { name: 'Pandas', level: 'proficient' },
      { name: 'NumPy', level: 'proficient' },
      { name: 'Feature Engineering', level: 'proficient' },
      { name: 'EDA', level: 'proficient' },
      { name: 'Matplotlib', level: 'proficient' },
      { name: 'Data Pipelines', level: 'proficient' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Engineering',
    icon: 'Server',
    items: [
      { name: 'FastAPI', level: 'proficient' },
      { name: 'REST APIs', level: 'proficient' },
      { name: 'Streamlit', level: 'proficient' },
      { name: 'PostgreSQL', level: 'familiar' },
      { name: 'Redis', level: 'familiar' },
      { name: 'Firebase', level: 'familiar' },
    ],
  },
  {
    id: 'security-privacy',
    name: 'Cybersecurity & Privacy Engineering',
    icon: 'Shield',
    description: 'Security-focused systems and privacy-preserving technologies',
    items: [
      { name: 'Zero-Knowledge Proofs', level: 'proficient' },
      { name: 'Circom & SnarkJS', level: 'proficient' },
      { name: 'Phishing Detection', level: 'proficient' },
      { name: 'Network Intrusion Detection', level: 'proficient' },
      { name: 'Privacy-Preserving Verification', level: 'familiar' },
      { name: 'Cryptographic Protocols', level: 'familiar' },
    ],
  },
  {
    id: 'tools-devops',
    name: 'Tools & DevOps',
    icon: 'Wrench',
    items: [
      { name: 'Git & GitHub', level: 'advanced' },
      { name: 'Docker', level: 'proficient' },
      { name: 'AWS', level: 'familiar' },
      { name: 'Cloudflare', level: 'familiar' },
      { name: 'ChatGPT & AI Tools', level: 'proficient' },
      { name: 'Prompt Engineering', level: 'proficient' },
    ],
  },
];
