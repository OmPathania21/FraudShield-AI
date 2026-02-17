# Fraud Intelligence Dashboard (FID)

Premium cybersecurity command center frontend built with Next.js, Tailwind CSS, Framer Motion, Three.js, and Recharts.

## Tech Stack

- Next.js (React + TypeScript, App Router)
- Tailwind CSS
- Framer Motion
- Three.js (`@react-three/fiber`, `@react-three/drei`)
- tsParticles (`@tsparticles/react`)
- Recharts

## Premium UI Highlights

- Dark futuristic cybersecurity theme
- Glassmorphism cards and panels
- Neon accents (blue / purple / red)
- Animated particle background + moving grid
- Optional 3D rotating globe for fraud origins
- Collapsible animated sidebar with module icons
- Animated risk orb, radar scanning loader, typing analysis effect
- Fraud trend chart, risk heatmap, scan distribution chart, and real-time feed

## Folder Structure

```text
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── background
│   │   ├── fraud-globe.tsx
│   │   ├── moving-grid.tsx
│   │   └── particle-field.tsx
│   ├── dashboard
│   │   ├── activity-feed.tsx
│   │   ├── glass-stat-card.tsx
│   │   ├── radar-loader.tsx
│   │   ├── risk-heatmap.tsx
│   │   ├── risk-orb.tsx
│   │   ├── scan-distribution.tsx
│   │   ├── trend-chart.tsx
│   │   └── typing-analysis.tsx
│   ├── data
│   │   └── sample-data.ts
│   └── layout
│       └── sidebar.tsx
├── next.config.ts
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Run

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```
