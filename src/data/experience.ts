import type { ExperienceItem } from '../types/portfolio.ts';

export const experience: ExperienceItem[] = [
  {
    id: 'iit-bhubaneswar-intern',
    role: 'Summer Research Intern',
    organization: 'IIT Bhubaneswar',
    location: 'Bhubaneswar, India',
    startDate: 'May 2025',
    endDate: 'July 2025',
    type: 'research',
    description:
      'Conducted research on "Geospatial Knowledge Inference Using LLMs for Enhanced Travel Decision-Making" under faculty supervision, associated with the Microsoft Academic Partnership Grant 2024.',
    highlights: [
      'Designed and executed an LLM-driven annotation pipeline, generating synthetic user travel queries to construct a geospatial dataset for LLM-based travel decision-making research.',
      'Cross-validated generated outputs across multiple LLMs to evaluate consistency and correctness, strengthening benchmark reliability for downstream LLM inference tasks under faculty supervision.',
    ],
    technologies: ['Large Language Models', 'NLP', 'Synthetic Data', 'Dataset Engineering', 'Python'],
    certificateUrl: 'https://drive.google.com/file/d/1dhnQGG-kQ_4X23We0pDiD5-hKjgrYb6i/view',
    grantContext: 'Microsoft Academic Partnership Grant 2024',
  },
];
