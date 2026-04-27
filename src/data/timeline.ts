import type { Localized } from '@/data/projects';

export interface TimelineItem {
  title: Localized;
  organization: Localized;
  period: Localized;
}

export const workTimeline: TimelineItem[] = [
  {
    title: { ar: 'مطور واجهات أمامية', en: 'Frontend Developer' },
    organization: { ar: 'Smicolon GmbH', en: 'Smicolon GmbH' },
    period: { ar: 'مارس 2025 – حتى الآن', en: 'Mar 2025 – Present' },
  },
  {
    title: { ar: 'مطور واجهات أمامية', en: 'Frontend Developer' },
    organization: { ar: 'AlexApps', en: 'AlexApps' },
    period: { ar: 'أبريل 2023 – فبراير 2025', en: 'Apr 2023 – Feb 2025' },
  },
  {
    title: {
      ar: 'مطور واجهات أمامية (عمل حر)',
      en: 'Freelance Frontend Developer',
    },
    organization: { ar: 'عمل حر', en: 'Self-employed' },
    period: { ar: 'ديسمبر 2022 – حتى الآن', en: 'Dec 2022 – Present' },
  },
];

export const educationTimeline: TimelineItem[] = [
  {
    title: {
      ar: 'بكالوريوس هندسة الإلكترونيات والاتصالات',
      en: 'Bachelor of Electronics & Communications Engineering',
    },
    organization: {
      ar: 'كلية الهندسة الإلكترونية — جامعة المنوفية',
      en: 'Faculty of Electronic Engineering — Menoufia University',
    },
    period: { ar: '2017 – 2022', en: '2017 – 2022' },
  },
];
