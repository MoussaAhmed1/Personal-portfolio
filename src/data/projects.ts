import type { Locale } from '@/i18n/routing';

export type ProjectCategory = 'web' | 'fullstack' | 'other';

export type Localized<T = string> = { ar: T; en: T };

export interface ProjectScreenshot {
  src: string;
  alt: Localized;
  caption?: Localized;
}

export interface Project {
  id: string;
  slug: string;
  title: Localized;
  subtitle?: Localized;
  description: Localized;
  fullDescription?: Localized;
  image: string;
  screenshots?: ProjectScreenshot[];
  tags: string[];
  category: ProjectCategory;
  link?: string;
  github?: string;
  role?: Localized;
  duration?: Localized;
  featured?: boolean;
}

export function pickLocale<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export const projects: Project[] = [
  {
    id: 'dacatra',
    slug: 'dacatra',
    title: { ar: 'دكترا', en: 'Dacatra' },
    subtitle: {
      ar: 'لوحة تحكم لإدارة حجوزات الأطباء',
      en: 'Doctor booking management dashboard',
    },
    description: {
      ar: 'لوحة تحكم لتطبيق دكترا لحجز الأطباء — إدارة الأطباء والصيدليات والمشرفين والمحتوى من واجهة واحدة مع نظام صلاحيات.',
      en: 'Admin dashboard for the Dacatra doctor-booking mobile application — manage doctors, pharmacies, admins, and content from a single, role-aware interface.',
    },
    fullDescription: {
      ar: 'دكترا هي لوحة التحكم التشغيلية لتطبيق حجز الأطباء على الموبايل. تجمع سير العمل الإداري للطاقم الطبي والصيدليات ومشرفي المنصة في مكان واحد، مع دعم ثنائي اللغة (عربي/إنجليزي) وتصميم متجاوب يعمل على الديسكتوب والتابلت بنفس الكفاءة. تتولى اللوحة إدارة المستخدمين من أطباء ومشرفين، وعمليات CRUD كاملة للصيدليات (بما في ذلك تدفقات تعديل المعلومات الإضافية)، وإدارة محتوى الإعدادات على مستوى التطبيق مثل صفحة "تواصل معنا" العامة. الواجهة مبنية فوق مكونات shadcn/ui ومنظمة حول جداول البيانات والقوائم القابلة للتصفية وصفحات التفاصيل والتعديل — لتبقى السطح نظيفًا مع كشف كل الحقول التي يحتاجها المشغّل.',
      en: 'Dacatra is the operations dashboard powering a doctor-booking mobile app. It centralizes the back-office workflow for medical staff, pharmacies, and platform administrators, with bilingual (Arabic/English) support and a responsive layout that works equally well on desktop and tablet. The dashboard handles user-management for doctors and admins, full CRUD for pharmacies (including additional-info editing flows), and content management for app-wide settings such as the public Contact-Us page. The interface is built on top of shadcn/ui primitives, organized around data tables, filterable lists, and detail/edit views — keeping the surface clean while still exposing every field operators need.',
    },
    image: '/images/projects/dacatra/doctors.png',
    screenshots: [
      {
        src: '/images/projects/dacatra/overview.png',
        alt: {
          ar: 'نظرة عامة على لوحة دكترا',
          en: 'Dacatra dashboard overview',
        },
      },
      {
        src: '/images/projects/dacatra/doctors.png',
        alt: { ar: 'جدول إدارة الأطباء', en: 'Doctors management table' },
      },
      {
        src: '/images/projects/dacatra/admins.png',
        alt: { ar: 'جدول إدارة المشرفين', en: 'Admins management table' },
      },
      {
        src: '/images/projects/dacatra/pharmacy-edit.png',
        alt: {
          ar: 'صفحة تعديل بيانات الصيدلية الإضافية',
          en: 'Pharmacy additional-info edit page',
        },
      },
      {
        src: '/images/projects/dacatra/contact-us.png',
        alt: {
          ar: 'صفحة إعدادات تواصل معنا',
          en: 'Contact-us settings page',
        },
      },
    ],
    tags: ['Next.js', 'shadcn/ui', 'TypeScript', 'Tailwind CSS'],
    category: 'web',
    role: { ar: 'مطور واجهات أمامية', en: 'Frontend Developer' },
    featured: true,
  },
  {
    id: 'nadnee',
    slug: 'nadnee',
    title: { ar: 'لوحة نَدِّني', en: 'NADNEE Dashboard' },
    subtitle: {
      ar: 'منصة استلام الطلاب اللحظية (المملكة العربية السعودية)',
      en: 'Real-time school-pickup platform (Saudi Arabia)',
    },
    description: {
      ar: 'لوحة تشغيل ثنائية اللغة لمنتج استلام الطلاب من المدارس في السعودية. إشعارات لحظية عند الاستلام، واجهة متعددة اللغات، ومصادقة آمنة.',
      en: 'Bilingual operations dashboard for a Saudi school-pickup product. Real-time pickup notifications, multi-language interface, and secure authentication.',
    },
    fullDescription: {
      ar: 'نَدِّني هي منصة سعودية لاستلام الطلاب من المدارس مبنية بـ Next.js و TypeScript. تُشغّل اللوحة الجانب الإداري للمنتج — تنسيق الإشعارات اللحظية بين أولياء الأمور وموظفي المدرسة أثناء الاستلام، إدارة المستخدمين والأدوار، وعرض المحتوى بالعربية والإنجليزية. المصادقة عبر NextAuth، التدويل بـ Next-Intl، وكل النماذج محمية من البداية للنهاية بـ Zod و react-hook-form. النتيجة: لوحة تشغيل سريعة وقابلة للوصول تحافظ على تنسيق المدارس في أكثر اللحظات ازدحامًا في اليوم.',
      en: 'NADNEE is a Saudi school-pickup platform built with Next.js and TypeScript. The dashboard powers the back-office side of the product — coordinating real-time notifications between parents and school staff during pickup, managing users and roles, and serving content in both Arabic and English. Authentication runs through NextAuth, internationalization is wired up with Next-Intl, and all forms are validated end-to-end with Zod and react-hook-form. The result is a fast, accessible operations console that keeps schools in sync during the busiest moments of the day.',
    },
    image: '/images/projects/nadnee/cover.png',
    screenshots: [
      {
        src: '/images/projects/nadnee/overview.png',
        alt: { ar: 'نظرة عامة على لوحة نَدِّني', en: 'NADNEE dashboard overview' },
      },
      {
        src: '/images/projects/nadnee/notifications.png',
        alt: {
          ar: 'إشعارات الاستلام اللحظية',
          en: 'Real-time pickup notifications',
        },
      },
      {
        src: '/images/projects/nadnee/users.png',
        alt: { ar: 'صفحة إدارة المستخدمين', en: 'User management page' },
      },
    ],
    tags: ['Next.js', 'TypeScript', 'NextAuth', 'Next-Intl', 'Zod', 'Real-time'],
    category: 'web',
    role: {
      ar: 'مطور واجهات أمامية (عمل حر)',
      en: 'Frontend Developer (Freelance)',
    },
    link: '',
    github: '',
    featured: true,
  },
  {
    id: 'zain-seeds',
    slug: 'zain-seeds',
    title: { ar: 'زين سيدز', en: 'Zain Seeds' },
    subtitle: {
      ar: 'منصة سير عمل المبيعات وبرنامج الولاء',
      en: 'Sales workflow & loyalty platform',
    },
    description: {
      ar: 'منصة بـ Vue لمبيعات البذور بنظام صلاحيات حسب الدور، سير عمل مبيعات منظّم، وبرنامج ولاء مدمج. تجربة مستخدم محسّنة بالحركة ومكتبة مكونات متكاملة.',
      en: 'Vue-based platform for seed sales with role-based permissions, structured sales workflows, and a built-in loyalty program. UX enhanced with motion and a polished component library.',
    },
    fullDescription: {
      ar: 'زين سيدز هو تطبيق ويب بـ Vue 3 يدير العمليات اليومية لمبيعات شركة توزيع بذور. يمركز المنصة سير عمل المبيعات، يربطها بنظام صلاحيات حسب الدور بحيث لا يرى كل مستخدم سوى ما يخصه، ويضيف فوقها نظام ولاء عملاء يتتبع المكافآت عبر الوقت. الحالة تُدار بـ Pinia، الواجهة مبنية فوق مكونات PrimeVue، والتنقل بـ Vue Router، و Vue-i18n يشغّل التجربة متعددة اللغات. أُضيفت رسوم متحركة وتفاعلات دقيقة في كل المنصة لتجعل سير العمل يبدو متجاوبًا لا مجرد نماذج.',
      en: 'Zain Seeds is a Vue 3 web application that runs the day-to-day sales operations for a seed distribution business. The platform centralizes sales workflows, ties them to role-based permissions so each user sees only what they should, and layers on a customer loyalty system that tracks rewards over time. State is managed with Pinia, the UI is built on top of PrimeVue components, navigation is handled by Vue Router, and Vue-i18n powers the multilingual experience. Animations and micro-interactions were added throughout to make the workflow feel responsive rather than form-heavy.',
    },
    image: '/images/projects/zain-seeds/cover.png',
    screenshots: [
      {
        src: '/images/projects/zain-seeds/dashboard.png',
        alt: { ar: 'لوحة زين سيدز', en: 'Zain Seeds dashboard' },
      },
      {
        src: '/images/projects/zain-seeds/sales.png',
        alt: { ar: 'شاشة سير عمل المبيعات', en: 'Sales workflow screen' },
      },
      {
        src: '/images/projects/zain-seeds/loyalty.png',
        alt: {
          ar: 'إدارة برنامج الولاء',
          en: 'Loyalty program management',
        },
      },
    ],
    tags: ['Vue', 'Pinia', 'PrimeVue', 'Vue Router', 'Vue-i18n'],
    category: 'web',
    role: {
      ar: 'مطور واجهات أمامية (عمل حر)',
      en: 'Frontend Developer (Freelance)',
    },
    link: '',
    github: '',
    featured: true,
  },
  {
    id: 'alexapps-solutions',
    slug: 'alexapps-solutions',
    title: { ar: 'AlexApps Solutions', en: 'AlexApps Solutions' },
    subtitle: {
      ar: 'تجارة إلكترونية، إدارة مصاريف، ومنصات شركات',
      en: 'E-commerce, expense management & corporate platforms',
    },
    description: {
      ar: 'عامان من العمل على واجهات إنتاجية في AlexApps عبر التجارة الإلكترونية، إدارة المصاريف، والمنصات الشركاتية — بوابات دفع، لوحات تحكم لحظية، وتطبيقات Next.js متعددة اللغات.',
      en: 'Two-year delivery across e-commerce, expense management, and corporate platforms at AlexApps — payment gateways, real-time dashboards, and multi-language Next.js apps.',
    },
    fullDescription: {
      ar: 'كانت AlexApps فترة عامين من تسليم واجهات إنتاجية عبر ثلاثة مجالات منتج: متاجر تجارة إلكترونية مع بوابات دفع متكاملة، أدوات إدارة مصاريف بلوحات تحكم لحظية، ومنصات شركاتية متعددة اللغات. تنوّعت التقنية بين React + TypeScript مع Material UI لأعمال الإدارة الكثيفة بالمكونات، و Next.js + Tailwind للمواقع الشركاتية بمستوى تسويقي. تكامل الـ API يعمل على React Query و Axios، الميزات اللحظية (الدردشة، الإشعارات، التحديثات الحية) عبر Socket.io، والتحقق من النماذج بـ Zod و react-hook-form. القاسم المشترك بين كل المجالات الثلاثة كان تصميم مكونات قابلة للتوسع — معظم الـ UI primitives التي شُحنت لمنتج أُعيد استخدامها في الآخرين.',
      en: 'AlexApps was a two-year run delivering production frontends across three product domains: e-commerce storefronts with integrated payment gateways, expense-management tools with real-time dashboards, and multi-language corporate platforms. The stack rotated between React + TypeScript with Material UI for component-heavy admin work and Next.js + Tailwind for marketing-grade corporate sites. API integration ran on React Query and Axios, real-time features (chat, notifications, live updates) used Socket.io, and form validation was handled with Zod and react-hook-form. The common thread across all three domains was scalable component design — most UI primitives shipped to one product were reused across the others.',
    },
    image: '/images/projects/alexapps/cover.png',
    screenshots: [
      {
        src: '/images/projects/alexapps/ecommerce.png',
        alt: { ar: 'متجر تجارة إلكترونية', en: 'E-commerce storefront' },
      },
      {
        src: '/images/projects/alexapps/expense.png',
        alt: {
          ar: 'لوحة إدارة المصاريف',
          en: 'Expense management dashboard',
        },
      },
      {
        src: '/images/projects/alexapps/corporate.png',
        alt: { ar: 'منصة شركاتية', en: 'Corporate platform' },
      },
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'MUI', 'React Query', 'Socket.io', 'Zod'],
    category: 'web',
    role: { ar: 'مطور واجهات أمامية', en: 'Frontend Developer' },
    duration: {
      ar: 'أبريل 2023 – فبراير 2025',
      en: 'April 2023 – February 2025',
    },
  },
  {
    id: 'watches-project-admin',
    slug: 'watches-project-admin',
    title: { ar: 'لوحة إدارة الساعات', en: 'Watches Admin' },
    subtitle: {
      ar: 'لوحة إدارية لكتالوج ساعات',
      en: 'Admin dashboard for a watches catalog',
    },
    description: {
      ar: 'لوحة إدارية بـ TypeScript لإدارة كتالوج ساعات — منتجات، مخزون، ومحتوى من واجهة واحدة في الـ back-office.',
      en: 'TypeScript admin dashboard for managing a watches catalog — products, inventory, and content from a single back-office interface.',
    },
    fullDescription: {
      ar: 'لوحة إدارية مبنية بـ TypeScript لإدارة كتالوج تجارة إلكترونية للساعات. تغطي عمليات CRUD على المنتجات، تتبع المخزون، وسير عمل إدارة المحتوى الذي يعتمد عليه المتجر. مبنية كسطح back-office مركّز — جداول نظيفة، قوائم قابلة للتصفية، وصفحات تفاصيل/تعديل.',
      en: 'A TypeScript-based admin dashboard for managing a watches e-commerce catalog. Covers product CRUD, inventory tracking, and content management workflows that the storefront depends on. Built as a focused back-office surface — clean tables, filterable lists, and detail/edit views.',
    },
    image: '/images/projects/watches-admin/cover.png',
    tags: ['TypeScript', 'Admin Dashboard', 'React'],
    category: 'web',
    role: { ar: 'مطور واجهات أمامية', en: 'Frontend Developer' },
    link: '',
    github: 'https://github.com/MoussaAhmed1/watches-project-admin',
  },
  {
    id: 'school-dashboard',
    slug: 'school-dashboard',
    title: { ar: 'لوحة إدارة مدرسية', en: 'School Dashboard' },
    subtitle: {
      ar: 'لوحة إدارة مدرسية بـ TypeScript',
      en: 'TypeScript school management dashboard',
    },
    description: {
      ar: 'لوحة Next.js + TypeScript لعمليات المدرسة — إدارة المستخدمين، المحتوى، وسير العمل الإداري اليومي.',
      en: 'Next.js + TypeScript dashboard for school operations — user management, content, and day-to-day administrative workflows.',
    },
    image: '/images/projects/school-dashboard/cover.png',
    tags: ['Next.js', 'TypeScript'],
    category: 'web',
    role: { ar: 'مطور واجهات أمامية', en: 'Frontend Developer' },
    link: '',
    github: 'https://github.com/MoussaAhmed1/school-dashboard',
  },
  {
    id: 'final-mcq',
    slug: 'final-mcq',
    title: { ar: 'Final — اختبار اختيار من متعدد', en: 'Final — MCQ Exam' },
    subtitle: {
      ar: 'منصة اختبارات اختيار من متعدد بـ Angular',
      en: 'Angular multiple-choice exam platform',
    },
    description: {
      ar: 'تطبيق Angular لإجراء اختبارات اختيار من متعدد — تدفق أسئلة، جلسات بوقت محدد، ونظام درجات. مبني كقطعة لمعرض الأعمال تستعرض أساسيات Angular و TypeScript.',
      en: 'Angular application for running multiple-choice exams — question flow, timed sessions, and scoring. Built as a portfolio piece showcasing Angular and TypeScript fundamentals.',
    },
    image: '/images/projects/final-mcq/cover.png',
    tags: ['Angular', 'TypeScript'],
    category: 'web',
    role: { ar: 'مطور واجهات أمامية', en: 'Frontend Developer' },
    link: '',
    github: 'https://github.com/MoussaAhmed1/Final',
  },
  {
    id: 'recipes-app',
    slug: 'recipes-app',
    title: { ar: 'تطبيق الوصفات', en: 'Recipes App' },
    subtitle: {
      ar: 'متصفّح وصفات بـ Angular',
      en: 'Angular recipes browser',
    },
    description: {
      ar: 'تطبيق وصفات بـ Angular — تصفّح الوصفات والبحث فيها واستكشافها عبر واجهة Angular مبنية على المكونات.',
      en: 'Angular recipes application — browse, search, and explore recipes through a component-driven Angular UI.',
    },
    image: '/images/projects/recipes-app/cover.png',
    tags: ['Angular', 'TypeScript'],
    category: 'web',
    role: { ar: 'مطور واجهات أمامية', en: 'Frontend Developer' },
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
