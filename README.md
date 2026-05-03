# Mousa Ahmed — Personal Portfolio

A bilingual (English / Arabic) personal portfolio site built with Next.js 16, React 19, and Tailwind CSS v4.

**Live site:** https://personalportofoulio.netlify.app/

---

## About Me

I'm **Mousa Ahmed**, a Frontend Engineer based in Cairo, Egypt with 3+ years of experience building fast, maintainable, user-friendly web experiences. I specialize in the React / Next.js ecosystem, performance optimization, and clean architecture, and I turn complex Figma designs into pixel-perfect, performant interfaces.

- **Currently:** Frontend Engineer at Smicolon GmbH (Mar 2025 — present)
- **Previously:** AlexApps (Apr 2023 — Feb 2025)
- **Freelance:** Available — Dec 2022 — present
- **Primary stack:** Next.js, React, TypeScript, Tailwind CSS
- **Also comfortable with:** Angular, Vue 3, Node.js, Firebase, Socket.io

---

## Resume / CV

- [Download CV (PDF)](./public/cv/Mousa_Ahmed_Frontend_Developer.pdf)
- [Download CV (DOCX)](./public/cv/Mousa_Ahmed_Frontend_Developer.docx)

The live site also exposes a download endpoint at `/api/download-cv` that streams the PDF.

---

## Connect

| | |
|---|---|
| GitHub    | [github.com/MoussaAhmed1](https://github.com/MoussaAhmed1) |
| LinkedIn  | [linkedin.com/in/mousa-ahmed](https://www.linkedin.com/in/mousa-ahmed) |
| Facebook  | [facebook.com/moussa.333](https://www.facebook.com/moussa.333/) |
| WhatsApp  | [wa.me/201140522606](https://wa.me/201140522606) |
| Email     | moussa.abdelghany@gmail.com |

You can also use the contact form on the [live site](https://personalportofoulio.netlify.app/#contact) — it's wired through Resend.

---

## Featured Projects

| Project | Description | Stack | Link |
|---|---|---|---|
| **Dacatra** | Doctor-booking management dashboard with role-based permissions and full bilingual UI. | Next.js, TypeScript, shadcn/ui, Tailwind | Commercial |
| **NADNEE Dashboard** | Real-time school-pickup platform for Saudi Arabia with secure auth and live notifications. | Next.js, TypeScript, NextAuth, next-intl, Zod | Commercial |
| **Zain Seeds** | Sales workflow and customer-loyalty platform with role-based access and animated UI. | Vue 3, Pinia, PrimeVue, vue-i18n | Commercial |
| **AlexApps Solutions** | E-commerce, expense management, and corporate platforms with payment gateways and real-time dashboards. | React, Next.js, MUI, React Query, Socket.io | Commercial |
| **Watches Admin** | Admin dashboard for a watch catalog. | React, TypeScript | [Repo](https://github.com/MoussaAhmed1/watches-project-admin) |
| **School Dashboard** | School management operations dashboard. | Next.js, TypeScript | [Repo](https://github.com/MoussaAhmed1/school-dashboard) |
| **Final — MCQ Exam** | Multiple-choice exam platform. | Angular, TypeScript | [Repo](https://github.com/MoussaAhmed1/Final) |
| **Recipes App** | Recipe browser. | Angular, TypeScript | [Repo](https://github.com/MoussaAhmed1/recipes-app) |

Detailed write-ups live at `/projects/[slug]` on the live site.

---

## Tech Stack of This Site

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, TypeScript 5, Tailwind CSS v4
- **i18n:** next-intl (English + Arabic, RTL-aware)
- **Theming:** next-themes (dark / light)
- **Animations:** Motion (Framer Motion v12)
- **Icons:** lucide-react, react-icons
- **Forms & Email:** react-hook-form + Zod, Resend, Sonner toasts

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
# then set RESEND_API_KEY in .env.local (required for the contact form)

# 3. Run the dev server
npm run dev
```

Open http://localhost:3000 to view it.

### Available scripts

| Script | Purpose |
|---|---|
| `npm run dev`   | Start the dev server with Turbopack |
| `npm run build` | Production build |
| `npm start`     | Run the production build |
| `npm run lint`  | Lint with ESLint |

### Environment variables

| Variable | Required | Notes |
|---|---|---|
| `RESEND_API_KEY`     | Yes | API key from https://resend.com — used by the contact form |
| `CONTACT_FROM_EMAIL` | No  | From-address. Defaults to Resend's sandbox sender |
| `CONTACT_TO_EMAIL`   | No  | Where messages land. Defaults to `moussa.abdelghany@gmail.com` |

---

## Project Structure

```
src/
  app/                Next.js App Router (locale-prefixed routes, API handlers)
  components/         Layout, home sections, and reusable UI primitives
  data/               Project, timeline, and testimonial data
  lib/                Utilities and Framer Motion variants
  i18n/               next-intl routing configuration
  providers/          Theme provider
messages/             en.json + ar.json translation files
public/
  cv/                 Downloadable CV (PDF + DOCX)
  images/             Project screenshots, social icons, etc.
```

---

## Contact

The fastest ways to reach me are the contact form on the [live site](https://personalportofoulio.netlify.app/#contact) or directly via email at **moussa.abdelghany@gmail.com**.
