import type { ResearchItem } from '../types/portfolio.ts';

export const research: ResearchItem[] = [
  {
    id: 'evolutionary-nn',
    title: 'Application of Evolutionary Techniques for Neural Network Training',
    area: 'Neural Network Optimization',
    status: 'ongoing',
    startDate: '2024',
    motivation:
      'Standard gradient-based optimizers for neural network training face challenges such as getting trapped in local minima and sensitivity to hyperparameter selection. Evolutionary methods offer population-based, gradient-free alternatives that may navigate complex loss landscapes differently.',
    researchQuestion:
      'Can evolutionary computation techniques — specifically Genetic Algorithms and Particle Swarm Optimization — serve as viable, competitive alternatives to gradient-based optimization for training neural networks?',
    methodology:
      'Ongoing research implementing and comparing Genetic Algorithms and Particle Swarm Optimization as training strategies for neural networks, evaluating convergence behaviour and solution quality against standard gradient-based baselines.',
    findings: null, // Research in progress — findings to be added when available
    tools: ['Python', 'PyTorch', 'Genetic Algorithms', 'Particle Swarm Optimization', 'NumPy'],
    tags: ['Neural Networks', 'Genetic Algorithms', 'Particle Swarm Optimization', 'Evolutionary Computation'],
    paperUrl: null, // Not yet published
    pdfUrl: null,
  },
  {
    id: 'mango-classifier',
    title: 'AI-Based Indian Mango Variety Classifier',
    area: 'Computer Vision & Deep Learning',
    status: 'completed',
    startDate: '2024',
    motivation:
      'Accurate classification of Indian mango varieties from visual features has practical applications in agriculture, quality control, and supply-chain management. Manual classification is subjective and time-consuming.',
    researchQuestion:
      'Can a deep-learning model reliably classify Indian mango varieties using visual image features — colour, texture, and shape — from a curated dataset?',
    methodology:
      'Built a deep-learning classification system trained on a curated dataset of Indian mango variety images. Extracted visual features (colour, texture, shape) using convolutional neural networks to train a high-accuracy variety classifier.',
    findings:
      'Achieved high accuracy on the curated dataset across multiple mango variety classes. Exact accuracy figures and dataset details are withheld pending publication.',
    tools: ['Python', 'Deep Learning', 'CNNs', 'Computer Vision', 'TensorFlow / Keras'],
    tags: ['Deep Learning', 'Computer Vision', 'Image Classification', 'Feature Extraction', 'Agriculture AI'],
    paperUrl: null,
    pdfUrl: null,
  },
];
