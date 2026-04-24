# Fluffy — Pet Adoption Shelter

A modern, animated marketing website for a pet adoption shelter. Built with Next.js 15, React 19, TypeScript, Tailwind CSS 4, and Framer Motion.

> Russian version: [README.ru.md](./README.ru.md)

---

## Overview

Fluffy is a single-page website designed to connect animals in need with loving homes. The site showcases adoptable pets, explains how to help through donations or volunteering, answers common questions, and provides contact information — all wrapped in a smooth, responsive UI.

### Sections

| Section | Description |
|---|---|
| **Hero** | Animated landing area with mascot images and a call-to-action |
| **Who We Are** | Shelter mission statement and key statistics |
| **Pets** | Adoptable animal cards with hover effects |
| **Help** | Donation and volunteering call-to-action |
| **FAQ** | Expandable accordion with common questions |
| **Contact** | Contact CTA with social media links |

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 15 | React framework with App Router |
| [React](https://react.dev) | 19 | UI rendering |
| [TypeScript](https://www.typescriptlang.org) | 5 | Static typing |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | 12 | Animations and transitions |
| [Lucide React](https://lucide.dev) | latest | Icon library |
| [clsx](https://github.com/lukeed/clsx) | 2 | Conditional class names |

---

## Project Structure

```
pet-adoption-frontend/
├── app/
│   ├── layout.tsx        # Root layout — fonts, metadata
│   ├── page.tsx          # Homepage — section composition
│   └── globals.css       # Global styles and CSS variables
├── components/
│   ├── layout/
│   │   ├── Header.tsx    # Responsive navigation with mobile menu
│   │   └── Footer.tsx    # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx      # Landing hero with animated pets
│   │   ├── WhoWeAre.tsx  # Mission statement and stats
│   │   ├── Pets.tsx      # Adoptable pet cards
│   │   ├── Help.tsx      # Donation and volunteering CTA
│   │   ├── FAQ.tsx       # Expandable FAQ accordion
│   │   └── Contact.tsx   # Contact section
│   └── animations/
│       └── FadeUp.tsx    # Reusable scroll-triggered fade-up wrapper
├── public/
│   └── img/              # Static images (pets, section backgrounds)
├── types/
│   └── global.d.ts       # Global TypeScript declarations
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/sonyanyaw/pet-adoption-frontend.git
cd pet-adoption-frontend
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## Deployment

The easiest deployment path is [Vercel](https://vercel.com) — connect your GitHub repository and it deploys automatically on every push to `main`.

For other platforms (Netlify, Railway, self-hosted), run `npm run build` and serve the `.next` output directory. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

---

## Environment Variables

No environment variables are required for the current version. The site is fully static with no external API dependencies.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a pull request

---

## License

This project is open source. See [LICENSE](./LICENSE) for details.
