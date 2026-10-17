# N. M. Amlan — Personal Portfolio Website

A cinematic, futuristic personal portfolio for N. M. Amlan, Computer Science Engineering student at IIIT Bhubaneswar specializing in AI, Machine Learning, NLP, and privacy-preserving technology.

**Live at:** `http://localhost:5173/` (development)

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v8 or higher

### Installation

```bash
# Navigate to the project directory
cd "NM'S poftfolio"

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at **http://localhost:5173/**

### Production Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build:

```bash
npm run preview
```

---

## Project Structure

```
.
├── index.html                    # Root HTML — SEO metadata, Google Fonts
├── vite.config.ts                # Vite configuration with React plugin
├── tsconfig.json                 # TypeScript config
├── public/
│   ├── favicon.svg               # NMA monogram favicon
│   ├── images/                   # Public images (OG image, etc.)
│   └── documents/
│       ├── resume.pdf            # ← Place your resume here
│       ├── certificates/         # ← Certificate PDFs
│       └── research/             # ← Research papers, reports
└── src/
    ├── main.tsx                  # React entry point
    ├── App.tsx                   # Root component (assembles all sections)
    ├── vite-env.d.ts             # Vite type declarations
    ├── types/
    │   └── portfolio.ts          # TypeScript type definitions for all data
    ├── data/                     # ← ALL EDITABLE CONTENT IS HERE
    │   ├── profile.ts            # Name, bio, social links, resume path
    │   ├── education.ts          # Education history
    │   ├── projects.ts           # Projects (Zerify, CyberShield AI, SynthIQ)
    │   ├── skills.ts             # Skills by category
    │   ├── research.ts           # Research work
    │   ├── achievements.ts       # Achievements & certifications
    │   ├── leadership.ts         # Leadership roles
    │   └── navigation.ts         # Navigation links
    ├── sections/                 # One component per section
    │   ├── HeroSection.tsx
    │   ├── AboutSection.tsx
    │   ├── EducationSection.tsx
    │   ├── ProjectsSection.tsx
    │   ├── SkillsSection.tsx
    │   ├── ResearchSection.tsx
    │   ├── AchievementsSection.tsx
    │   └── LeadershipSection.tsx
    ├── components/
    │   └── layout/
    │       ├── Header.tsx         # Fixed navbar, mobile drawer
    │       └── Footer.tsx         # Footer with nav, socials, contact
    ├── assets/
    │   └── images/               # ← Place portrait.jpg/png here
    └── styles/
        ├── globals.css            # Design tokens, reset, utilities
        └── components.css         # Section & component styles
```

---

## Updating Content

All content is in `src/data/`. Edit these files without touching layout code.

### 1. Your Profile (`src/data/profile.ts`)

```typescript
export const profile = {
  name: 'N. M. Amlan',
  email: 'your@email.com',              // Add your email
  resumePath: '/documents/resume.pdf',   // Enable after placing resume
  socialLinks: [
    { platform: 'github', url: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/YOUR_PROFILE', label: 'LinkedIn' },
  ],
  // ...
};
```

### 2. Adding Your Portrait Photo

1. Place your photo file in `src/assets/images/` (e.g., `portrait.jpg`)
2. Open `src/sections/HeroSection.tsx`
3. Find the line: `const PORTRAIT_SRC: string | null = null;`
4. Replace it with:
   ```typescript
   import portraitSrc from '../assets/images/portrait.jpg';
   const PORTRAIT_SRC: string | null = portraitSrc;
   ```

**Requirements for best results:**
- Portrait orientation or square crop
- High resolution (at least 600×800px)
- Well-lit face visible in the center
- Transparent or dark background preferred

### 3. Enabling Resume Download

1. Place your resume PDF at `public/documents/resume.pdf`
2. In `src/data/profile.ts`, change:
   ```typescript
   resumePath: null,
   // to:
   resumePath: '/documents/resume.pdf',
   ```
The download button will appear automatically in the hero and header.

### 4. Adding Projects (`src/data/projects.ts`)

Each project supports:
- `name`, `tagline`, `problem`, `solution`, `contribution`
- `technologies` array
- `features` list
- `githubUrl`, `demoUrl` (set to `null` if not available — buttons auto-hide)
- `status`: `'active' | 'completed' | 'wip' | 'concept'`
- `imageUrl` for screenshots

### 5. Adding Achievements (`src/data/achievements.ts`)

```typescript
{
  id: 'my-hackathon',
  title: 'Best AI Hack — HackXYZ 2024',
  organization: 'HackXYZ Organization',
  date: 'October 2024',
  description: 'Built X, which achieved Y during Z competition.',
  level: 'National',
  certificateUrl: '/documents/certificates/hackxyz-2024.pdf',
  verificationUrl: null,
  type: 'competition',
}
```

### 6. Social Links

Configure in `src/data/profile.ts`. Links only render if the URL is set.
Supported `platform` values: `github`, `linkedin` (rendered with icons).

### 7. CGPA

In `src/data/education.ts`, set:
```typescript
cgpa: '8.5 / 10.0', // or null to hide
```

---

## Design System

### Color Palette (Emerald Aura)

| Token | Value | Usage |
|-------|-------|-------|
| `--obsidian` | `#050706` | Page background |
| `--secondary-bg` | `#0A100C` | Section alternate background |
| `--forest` | `#0D281B` | Card backgrounds |
| `--emerald` | `#39FF88` | Primary accent — buttons, highlights |
| `--deep-emerald` | `#126B42` | Secondary green |
| `--violet` | `#8B5CF6` | Privacy/cryptography accent |
| `--cyan` | `#00D9FF` | Security/interaction accent |
| `--text-primary` | `#F5F5F5` | Main text |
| `--text-secondary` | `#A7B5AC` | Body copy |

### Typography

- **Headings**: Space Grotesk (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Code/Mono**: JetBrains Mono (Google Fonts)

---

## Deployment

### Vercel (Recommended)

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repository
4. Vercel auto-detects Vite — no configuration needed
5. Click Deploy

**After deployment:** Update `index.html` with a canonical URL:
```html
<link rel="canonical" href="https://yourdomain.com" />
```

### Netlify

1. Build: `npm run build`
2. Publish directory: `dist`
3. Deploy the `dist/` folder

### GitHub Pages

Add to `vite.config.ts`:
```typescript
base: '/your-repo-name/',
```

Then build and deploy the `dist/` folder to the `gh-pages` branch.

---

## Assets I Need From You

When you're ready to complete the portfolio, provide:

| Asset | Where to place | What to update |
|-------|---------------|---------------|
| Portrait photo | `src/assets/images/portrait.jpg` | `HeroSection.tsx` PORTRAIT_SRC |
| Resume PDF | `public/documents/resume.pdf` | `profile.ts` resumePath |
| Certificate PDFs | `public/documents/certificates/` | `achievements.ts` certificateUrl |
| Research papers | `public/documents/research/` | `research.ts` pdfUrl |
| GitHub profile URL | — | `profile.ts` socialLinks |
| LinkedIn profile URL | — | `profile.ts` socialLinks |
| Email address | — | `profile.ts` email |
| CGPA | — | `education.ts` cgpa |
| Verified achievements | — | `achievements.ts` |
| Project GitHub repos | — | `projects.ts` githubUrl |
| Leadership details | — | `leadership.ts` |

---

## Technical Notes

- **No backend required** — fully static site
- **No API keys** — safe to deploy publicly
- **Responsive** — tested at 360px, 768px, 1024px, 1440px
- **Accessibility** — semantic HTML, ARIA labels, keyboard navigation, skip link
- **Reduced motion** — respects `prefers-reduced-motion`
- **Performance** — 308KB JS bundle (97KB gzip), no unnecessary dependencies

---

## Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3 | UI framework |
| Vite | 8.3 | Build tool & dev server |
| TypeScript | 6.0 | Type safety |
| Framer Motion | 11 | Animations & transitions |
| Lucide React | 0.441 | Icons |
| Space Grotesk | — | Heading font |
| Inter | — | Body font |

---

*Built with care for N. M. Amlan · IIIT Bhubaneswar · 2024*
