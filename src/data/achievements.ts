import type { Achievement } from '../types/portfolio.ts';

export const achievements: Achievement[] = [
  {
    id: 'cybersecurity-challenge-finalist',
    title: 'Top-20 National Finalist — Cybersecurity Innovation Challenge 1.0',
    organization: 'C-DAC, ISEA, DSCI & MeitY (Government of India)',
    date: '2025',
    description:
      'Selected among the top 20 teams nationwide in a Government of India cybersecurity innovation challenge. Led the team (Zerify) with end-to-end ownership across system architecture, backend development, AI integration, and cryptographic proof validation.',
    level: 'National',
    certificateUrl: null, // Add certificate link when officially provided
    verificationUrl: null,
    type: 'competition',
  },
  {
    id: 'microsoft-grant-2024',
    title: 'Microsoft Academic Partnership Grant 2024',
    organization: 'Microsoft & IIT Bhubaneswar',
    date: '2025',
    description:
      'Associated with the Summer Research Internship at IIT Bhubaneswar on "Geospatial Knowledge Inference Using LLMs for Enhanced Travel Decision-Making", supported under the Microsoft Academic Partnership Grant 2024.',
    level: 'National',
    certificateUrl: 'https://drive.google.com/file/d/1dhnQGG-kQ_4X23We0pDiD5-hKjgrYb6i/view',
    verificationUrl: null,
    type: 'recognition',
  },
];
