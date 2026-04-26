export type ProjectCategory = 'web' | 'fullstack' | 'other';

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  image: string;
  screenshots?: ProjectScreenshot[];
  tags: string[];
  category: ProjectCategory;
  link?: string;
  github?: string;
  role?: string;
  duration?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'dacatra',
    slug: 'dacatra',
    title: 'Dacatra',
    subtitle: 'Doctor booking management dashboard',
    description:
      'Admin dashboard for the Dacatra doctor-booking mobile application — manage doctors, pharmacies, admins, and content from a single, role-aware interface.',
    fullDescription:
      'Dacatra is the operations dashboard powering a doctor-booking mobile app. It centralizes the back-office workflow for medical staff, pharmacies, and platform administrators, with bilingual (Arabic/English) support and a responsive layout that works equally well on desktop and tablet. The dashboard handles user-management for doctors and admins, full CRUD for pharmacies (including additional-info editing flows), and content management for app-wide settings such as the public Contact-Us page. The interface is built on top of shadcn/ui primitives, organized around data tables, filterable lists, and detail/edit views — keeping the surface clean while still exposing every field operators need.',
    image: '/images/projects/dacatra/doctors.png',
    screenshots: [
      {
        src: '/images/projects/dacatra/overview.png',
        alt: 'Dacatra dashboard overview',
      },
      {
        src: '/images/projects/dacatra/doctors.png',
        alt: 'Doctors management table',
      },
      {
        src: '/images/projects/dacatra/admins.png',
        alt: 'Admins management table',
      },
      {
        src: '/images/projects/dacatra/pharmacy-edit.png',
        alt: 'Pharmacy additional-info edit page',
      },
      {
        src: '/images/projects/dacatra/contact-us.png',
        alt: 'Contact-us settings page',
      },
    ],
    tags: ['Next.js', 'shadcn/ui', 'TypeScript', 'Tailwind CSS'],
    category: 'web',
    role: 'Frontend Developer',
    featured: true,
  },
  {
    id: 'nadnee',
    slug: 'nadnee',
    title: 'NADNEE Dashboard',
    subtitle: 'Real-time school-pickup platform (Saudi Arabia)',
    description:
      'Bilingual operations dashboard for a Saudi school-pickup product. Real-time pickup notifications, multi-language interface, and secure authentication.',
    fullDescription:
      'NADNEE is a Saudi school-pickup platform built with Next.js and TypeScript. The dashboard powers the back-office side of the product — coordinating real-time notifications between parents and school staff during pickup, managing users and roles, and serving content in both Arabic and English. Authentication runs through NextAuth, internationalization is wired up with Next-Intl, and all forms are validated end-to-end with Zod and react-hook-form. The result is a fast, accessible operations console that keeps schools in sync during the busiest moments of the day.',
    image: '/images/projects/nadnee/cover.png',
    screenshots: [
      { src: '/images/projects/nadnee/overview.png', alt: 'NADNEE dashboard overview' },
      { src: '/images/projects/nadnee/notifications.png', alt: 'Real-time pickup notifications' },
      { src: '/images/projects/nadnee/users.png', alt: 'User management page' },
    ],
    tags: ['Next.js', 'TypeScript', 'NextAuth', 'Next-Intl', 'Zod', 'Real-time'],
    category: 'web',
    role: 'Frontend Developer (Freelance)',
    link: '',
    github: '',
    featured: true,
  },
  {
    id: 'zain-seeds',
    slug: 'zain-seeds',
    title: 'Zain Seeds',
    subtitle: 'Sales workflow & loyalty platform',
    description:
      'Vue-based platform for seed sales with role-based permissions, structured sales workflows, and a built-in loyalty program. UX enhanced with motion and a polished component library.',
    fullDescription:
      'Zain Seeds is a Vue 3 web application that runs the day-to-day sales operations for a seed distribution business. The platform centralizes sales workflows, ties them to role-based permissions so each user sees only what they should, and layers on a customer loyalty system that tracks rewards over time. State is managed with Pinia, the UI is built on top of PrimeVue components, navigation is handled by Vue Router, and Vue-i18n powers the multilingual experience. Animations and micro-interactions were added throughout to make the workflow feel responsive rather than form-heavy.',
    image: '/images/projects/zain-seeds/cover.png',
    screenshots: [
      { src: '/images/projects/zain-seeds/dashboard.png', alt: 'Zain Seeds dashboard' },
      { src: '/images/projects/zain-seeds/sales.png', alt: 'Sales workflow screen' },
      { src: '/images/projects/zain-seeds/loyalty.png', alt: 'Loyalty program management' },
    ],
    tags: ['Vue', 'Pinia', 'PrimeVue', 'Vue Router', 'Vue-i18n'],
    category: 'web',
    role: 'Frontend Developer (Freelance)',
    link: '',
    github: '',
    featured: true,
  },
  {
    id: 'alexapps-solutions',
    slug: 'alexapps-solutions',
    title: 'AlexApps Solutions',
    subtitle: 'E-commerce, expense management & corporate platforms',
    description:
      'Two-year delivery across e-commerce, expense management, and corporate platforms at AlexApps — payment gateways, real-time dashboards, and multi-language Next.js apps.',
    fullDescription:
      'AlexApps was a two-year run delivering production frontends across three product domains: e-commerce storefronts with integrated payment gateways, expense-management tools with real-time dashboards, and multi-language corporate platforms. The stack rotated between React + TypeScript with Material UI for component-heavy admin work and Next.js + Tailwind for marketing-grade corporate sites. API integration ran on React Query and Axios, real-time features (chat, notifications, live updates) used Socket.io, and form validation was handled with Zod and react-hook-form. The common thread across all three domains was scalable component design — most UI primitives shipped to one product were reused across the others.',
    image: '/images/projects/alexapps/cover.png',
    screenshots: [
      { src: '/images/projects/alexapps/ecommerce.png', alt: 'E-commerce storefront' },
      { src: '/images/projects/alexapps/expense.png', alt: 'Expense management dashboard' },
      { src: '/images/projects/alexapps/corporate.png', alt: 'Corporate platform' },
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'MUI', 'React Query', 'Socket.io', 'Zod'],
    category: 'web',
    role: 'Frontend Developer',
    duration: 'April 2023 – February 2025',
  },
  {
    id: 'watches-project-admin',
    slug: 'watches-project-admin',
    title: 'Watches Admin',
    subtitle: 'Admin dashboard for a watches catalog',
    description:
      'TypeScript admin dashboard for managing a watches catalog — products, inventory, and content from a single back-office interface.',
    fullDescription:
      'A TypeScript-based admin dashboard for managing a watches e-commerce catalog. Covers product CRUD, inventory tracking, and content management workflows that the storefront depends on. Built as a focused back-office surface — clean tables, filterable lists, and detail/edit views.',
    image: '/images/projects/watches-admin/cover.png',
    tags: ['TypeScript', 'Admin Dashboard', 'React'],
    category: 'web',
    role: 'Frontend Developer',
    link: '',
    github: 'https://github.com/MoussaAhmed1/watches-project-admin',
  },
  {
    id: 'school-dashboard',
    slug: 'school-dashboard',
    title: 'School Dashboard',
    subtitle: 'TypeScript school management dashboard',
    description:
      'Next.js + TypeScript dashboard for school operations — user management, content, and day-to-day administrative workflows.',
    image: '/images/projects/school-dashboard/cover.png',
    tags: ['Next.js', 'TypeScript'],
    category: 'web',
    role: 'Frontend Developer',
    link: '',
    github: 'https://github.com/MoussaAhmed1/school-dashboard',
  },
  {
    id: 'final-mcq',
    slug: 'final-mcq',
    title: 'Final — MCQ Exam',
    subtitle: 'Angular multiple-choice exam platform',
    description:
      'Angular application for running multiple-choice exams — question flow, timed sessions, and scoring. Built as a portfolio piece showcasing Angular and TypeScript fundamentals.',
    image: '/images/projects/final-mcq/cover.png',
    tags: ['Angular', 'TypeScript'],
    category: 'web',
    role: 'Frontend Developer',
    link: '',
    github: 'https://github.com/MoussaAhmed1/Final',
  },
  {
    id: 'recipes-app',
    slug: 'recipes-app',
    title: 'Recipes App',
    subtitle: 'Angular recipes browser',
    description:
      'Angular recipes application — browse, search, and explore recipes through a component-driven Angular UI.',
    image: '/images/projects/recipes-app/cover.png',
    tags: ['Angular', 'TypeScript'],
    category: 'web',
    role: 'Frontend Developer',
    link: '',
    github: 'https://github.com/MoussaAhmed1/recipes-app',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
