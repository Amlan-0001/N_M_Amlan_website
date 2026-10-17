import type { Project } from '../types/portfolio.ts';

export const projects: Project[] = [
  {
    id: 'zerify',
    name: 'Zerify',
    tagline: 'Privacy-Preserving AI-Based eKYC System using Zero-Knowledge Proofs',
    problem:
      'Conventional KYC systems require users to expose sensitive personal data to service providers, creating massive privacy risks and data breach vulnerabilities — contrary to the spirit of the Digital Personal Data Protection (DPDP) Act, 2023.',
    solution:
      'Zerify enables identity verification without revealing underlying personally identifiable information. Using zero-knowledge proof cryptography, users prove facts about their identity (age, address, Aadhaar validity) without disclosing the data itself.',
    contribution:
      'Conceived and built a ZKP-based eKYC system; designed a custom Circom circuit with SnarkJS Groth16 proving. Built an on-device Aadhaar QR parsing pipeline with OpenCV/Pyzbar, liveness detection, and face matching via ONNX Runtime and Face-api.js. Implemented a FastAPI backend with zero server-side PII storage, Redis nonce-based replay protection, Firebase Auth, and Twilio OTP. Deployed on AWS with Cloudflare. Led the team as Team Lead to a Top-20 national finalist finish.',
    technologies: [
      { name: 'Circom' },
      { name: 'SnarkJS' },
      { name: 'FastAPI' },
      { name: 'Next.js' },
      { name: 'OpenCV' },
      { name: 'ONNX Runtime' },
      { name: 'Firebase' },
      { name: 'Redis' },
      { name: 'AWS' },
      { name: 'Cloudflare' },
      { name: 'Twilio OTP' },
      { name: 'Face-api.js' },
    ],
    features: [
      'ZKP-based identity verification — no PII exposure to verifiers',
      'Custom Circom circuit with Groth16 proofs for age, address, and Aadhaar validity',
      'On-device liveness detection and face matching',
      'FastAPI backend with zero server-side PII storage',
      'Redis nonce-based replay attack protection',
      'Firebase Auth + Twilio OTP authentication',
      'DPDP Act, 2023 aligned design',
      'Deployed on AWS with Cloudflare edge protection',
    ],
    githubUrl: null, // Add when repository is made public
    demoUrl: 'https://zerify.tech',
    imageUrl: null,
    status: 'completed',
    featured: true,
    color: '#8B5CF6', // Violet — privacy, cryptography
  },
  {
    id: 'oneatlas-ai',
    name: 'OneAtlas AI',
    tagline: 'AI-Native Application Generation Platform',
    problem:
      'Translating natural-language product ideas into structured, implementable application specifications is a time-consuming and ambiguous process that slows early-stage development.',
    solution:
      'OneAtlas AI converts natural-language descriptions into validated application specifications through a multi-stage AI pipeline, with multi-provider LLM routing and automated repair.',
    contribution:
      'Built a three-stage AI pipeline: Intent Extraction, Schema Generation, and AppSpec Generation. Designed a multi-provider routing gateway across five LLM providers (OpenAI, Anthropic, Groq, Gemini, DeepSeek) with cost/latency-based routing and automatic failure fallback. Engineered a three-strategy repair engine with attempt logging, and implemented real-time SSE streaming API and an integration registry for Slack, Stripe, and Salesforce.',
    technologies: [
      { name: 'FastAPI' },
      { name: 'React' },
      { name: 'Groq API' },
      { name: 'Python' },
      { name: 'Pydantic' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' },
    ],
    features: [
      'Three-stage AI pipeline: Intent Extraction → Schema → AppSpec',
      'Multi-provider LLM routing across OpenAI, Anthropic, Groq, Gemini, DeepSeek',
      'Cost/latency-based routing with automatic failure fallback',
      'Three-strategy auto-repair engine (structural, field-level, cross-layer)',
      'Real-time SSE streaming API',
      'Integration registry: Slack, Stripe, Salesforce',
    ],
    githubUrl: null,
    demoUrl: null,
    imageUrl: null,
    status: 'completed',
    featured: true,
    color: '#00D9FF', // Cyan — intelligence, automation
  },
  {
    id: 'cybershield-ai',
    name: 'CyberShield AI',
    tagline: 'AI-Powered Phishing URL Detection and Network Intrusion Analysis',
    problem:
      'Phishing attacks and network intrusions continue to evade traditional signature-based security tools, requiring intelligent, adaptive detection systems.',
    solution:
      'CyberShield AI applies machine learning (XGBoost) to detect phishing URLs and identify network intrusion patterns, providing a data-driven layer of cybersecurity defence with high reported accuracy.',
    contribution:
      'Developed end-to-end phishing URL and network intrusion detection workflows using XGBoost. Engineered feature-preprocessing pipelines and handled class imbalance using SMOTE. Optimized XGBoost hyperparameters using Optuna. Trained a Network Intrusion Detection System on the CICIDS2017 dataset across seven traffic categories.',
    technologies: [
      { name: 'Python' },
      { name: 'XGBoost' },
      { name: 'Scikit-learn' },
      { name: 'FastAPI' },
      { name: 'React' },
      { name: 'Optuna' },
      { name: 'SMOTE' },
      { name: 'Pandas' },
      { name: 'NumPy' },
    ],
    features: [
      'Phishing URL detection — reported 98.15% accuracy, 99.33% ROC-AUC',
      'Network Intrusion Detection on CICIDS2017 — reported 99.91% accuracy',
      'Seven traffic categories: DoS, DDoS, Port Scanning, Brute Force, Web Attacks, Bots, Normal',
      'XGBoost hyperparameter tuning with Optuna',
      'Class imbalance handling via SMOTE',
      'FastAPI inference backend + React dashboard',
    ],
    githubUrl: null,
    demoUrl: null,
    imageUrl: null,
    status: 'completed',
    featured: true,
    color: '#39FF88', // Emerald — security, vigilance
  },
  {
    id: 'synthiq',
    name: 'SynthIQ',
    tagline: 'Agentic Multi-Source Research Synthesizer',
    problem:
      'Raw language models hallucinate and lack access to specific domain knowledge, limiting their reliability for real-world knowledge tasks. Multi-source research is slow and fragmented.',
    solution:
      'SynthIQ is an agentic RAG system that decomposes complex queries, retrieves from multiple sources (web, Wikipedia, PDFs), detects cross-source contradictions, and synthesizes source-cited unified responses.',
    contribution:
      'Built a query-decomposition workflow that breaks complex queries into sub-questions. Retrieves from web sources, Wikipedia, and PDFs. Generates unified research responses with source citations. Implemented cross-source contradiction detection and RAGAs-based evaluation for faithfulness, contextual relevance, and transparency.',
    technologies: [
      { name: 'Python' },
      { name: 'LangChain' },
      { name: 'FAISS' },
      { name: 'FastAPI' },
      { name: 'Streamlit' },
      { name: 'Groq API' },
      { name: 'RAGAs' },
    ],
    features: [
      'Query decomposition into targeted sub-questions',
      'Multi-source retrieval: web, Wikipedia, PDFs',
      'Cross-source contradiction detection',
      'Unified source-cited research responses',
      'RAGAs-based evaluation: faithfulness, relevance, transparency',
      'Streamlit interface for demonstration',
    ],
    githubUrl: null,
    demoUrl: null,
    imageUrl: null,
    status: 'completed',
    featured: false,
    color: '#8B5CF6', // Violet — intelligence, generation
  },
  {
    id: 'careerpilot-ai',
    name: 'CareerPilot AI',
    tagline: 'AI-Powered Career Operating System',
    problem:
      'Job-application workflows are fragmented and time-consuming — from tailoring resumes to filling out application forms across multiple platforms.',
    solution:
      'CareerPilot AI is an end-to-end career assistant combining AI memory, resume intelligence, job-description analysis, and browser-based application assistance via a Chrome extension.',
    contribution:
      'Developed AI memory, resume intelligence, job-description analysis, resume optimization, and browser-based application assistance. Built a FastAPI backend for AI reasoning and a Chrome extension for webpage interaction. Implemented resume analysis, tailored resume generation, form-field detection, and human-in-the-loop approval before automated form filling.',
    technologies: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'React' },
      { name: 'PostgreSQL' },
      { name: 'Gemini API' },
      { name: 'Chrome Extension' },
    ],
    features: [
      'AI memory and career context management',
      'Job-description analysis and resume optimization',
      'Tailored resume generation',
      'Chrome extension for browser-based assistance',
      'Automated form-field detection',
      'Human-in-the-loop approval before auto-filling',
    ],
    githubUrl: null,
    demoUrl: null,
    imageUrl: null,
    status: 'completed',
    featured: false,
    color: '#00D9FF', // Cyan
  },
  {
    id: 'fraudvision',
    name: 'FraudVision',
    tagline: 'AI-Based Fraud Detection System',
    problem:
      'Financial fraud detection requires handling highly imbalanced datasets where fraudulent transactions are rare, making traditional methods ineffective.',
    solution:
      'FraudVision uses an ensemble of XGBoost, LightGBM, and LSTM models with advanced resampling techniques to detect potentially fraudulent transactions.',
    contribution:
      'Developed fraud-detection models using XGBoost, LightGBM, and LSTM. Addressed class imbalance using SMOTE and ADASYN. Built data-preprocessing and model-training workflows for fraud-detection tasks.',
    technologies: [
      { name: 'Python' },
      { name: 'XGBoost' },
      { name: 'LightGBM' },
      { name: 'LSTM' },
      { name: 'SMOTE' },
      { name: 'ADASYN' },
      { name: 'Machine Learning' },
    ],
    features: [
      'Ensemble approach: XGBoost, LightGBM, LSTM',
      'Advanced class imbalance handling: SMOTE and ADASYN',
      'End-to-end data-preprocessing pipeline',
      'Model training and evaluation workflows',
    ],
    githubUrl: null,
    demoUrl: null,
    imageUrl: null,
    status: 'completed',
    featured: false,
    color: '#39FF88',
  },
  {
    id: 'medisage',
    name: 'MediSage',
    tagline: 'NLP-Powered Disease Diagnosis from Symptom Descriptions',
    problem:
      'Medical information lookup is fragmented. Users with symptoms have no simple way to get structured guidance about possible conditions from natural language input.',
    solution:
      'MediSage is an NLP-powered prototype that predicts potential diseases from user-described symptoms using topic modelling and a two-stage classification pipeline. Built as an educational project prototype — not a clinically validated diagnostic tool.',
    contribution:
      'Implemented text preprocessing and tokenization using spaCy. Applied topic modelling (LSA, LDA, CorEx) to extract medical indicators. Built a two-stage classification pipeline: body-system classification followed by disease prediction using Logistic Regression — achieving 91% reported accuracy on the dataset.',
    technologies: [
      { name: 'Python' },
      { name: 'spaCy' },
      { name: 'Scikit-learn' },
      { name: 'LSA' },
      { name: 'LDA' },
      { name: 'CorEx' },
      { name: 'Logistic Regression' },
      { name: 'NLP' },
    ],
    features: [
      'NLP-based symptom understanding with spaCy',
      'Topic modelling: LSA, LDA, CorEx for medical indicator extraction',
      'Two-stage pipeline: body-system → disease prediction',
      '91% reported accuracy on dataset (educational prototype)',
    ],
    githubUrl: null,
    demoUrl: null,
    imageUrl: null,
    status: 'completed',
    featured: false,
    color: '#8B5CF6',
  },
];
