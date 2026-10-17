import type { Leadership } from '../types/portfolio.ts';

export const leadership: Leadership[] = [
  {
    id: 'placement-coordinator',
    role: 'Placement Coordinator',
    organization: 'IIIT Bhubaneswar',
    startDate: '2026',
    endDate: null, // Currently ongoing
    context:
      'Serving as a student Placement Coordinator at IIIT Bhubaneswar, functioning as a bridge between the institution, students, and recruiting organizations during the campus placement process.',
    responsibilities: [
      'Coordinating with companies and the institute for campus placement activities',
      'Supporting student preparation and career development initiatives',
      'Managing placement-related communication and logistics',
    ],
    outcomes: [],
  },
  {
    id: 'ecell-startup-executive',
    role: 'Startup & Incubation Executive',
    organization: 'E-Cell, IIIT Bhubaneswar',
    startDate: '2024',
    endDate: '2025',
    context:
      "Contributed to the institute's entrepreneurship and startup ecosystem as part of the Entrepreneurship Cell, supporting startup culture and incubation-related activities.",
    responsibilities: [
      'Supporting entrepreneurship initiatives and startup culture at IIIT Bhubaneswar',
      'Contributing to E-Cell events and activities within the institute ecosystem',
    ],
    outcomes: [],
  },
  {
    id: 'zerify-team-lead',
    role: 'Team Lead — Zerify',
    organization: 'Cybersecurity Innovation Challenge 1.0 (C-DAC / MeitY)',
    startDate: '2025',
    endDate: '2025',
    context:
      'Led the Zerify team in the Government of India Cybersecurity Innovation Challenge 1.0, organized by C-DAC, ISEA, DSCI, and MeitY. The team was selected as a Top-20 National Finalist.',
    responsibilities: [
      'End-to-end ownership of system architecture and technical direction',
      'Backend development: FastAPI, Redis, Firebase, AWS deployment',
      'AI integration: liveness detection, face matching, ONNX Runtime',
      'Cryptographic proof design: Circom circuits, SnarkJS Groth16 proving',
    ],
    outcomes: [
      'Top-20 National Finalist in Cybersecurity Innovation Challenge 1.0',
      'Delivered a production-deployed system at zerify.tech',
    ],
  },
];
