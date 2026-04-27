import type { MetadataRoute } from 'next';
import { getAllProjectSlugs } from '@/data/projects';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://mousaahmed.com';

function localeUrl(path: string, locale: string) {
  if (locale === routing.defaultLocale) return `${BASE_URL}${path}`;
  return `${BASE_URL}/${locale}${path}`;
}

function languagesFor(path: string): Record<string, string> {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, localeUrl(path, locale)]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const slugs = getAllProjectSlugs();

  const homeEntries: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
      url: localeUrl('/', locale),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: { languages: languagesFor('/') },
    }));

  const projectEntries: MetadataRoute.Sitemap = routing.locales.flatMap(
    (locale) =>
      slugs.map((slug) => {
        const path = `/projects/${slug}`;
        return {
          url: localeUrl(path, locale),
          lastModified: now,
          changeFrequency: 'monthly' as const,
          priority: 0.8,
          alternates: { languages: languagesFor(path) },
        };
      }),
  );

  return [...homeEntries, ...projectEntries];
}
