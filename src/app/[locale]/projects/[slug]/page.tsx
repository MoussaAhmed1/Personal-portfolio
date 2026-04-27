import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ProjectDetails } from '@/components/projects/ProjectDetails';
import {
  getAllProjectSlugs,
  getProjectBySlug,
  pickLocale,
} from '@/data/projects';
import { routing, type Locale } from '@/i18n/routing';

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllProjectSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const project = getProjectBySlug(slug);
  if (!project) {
    const t = await getTranslations({ locale, namespace: 'projectDetail' });
    return { title: t('notFound') };
  }

  const typedLocale = locale as Locale;
  const title = pickLocale(project.title, typedLocale);
  const description = pickLocale(project.description, typedLocale);
  const ogLocale = locale === 'ar' ? 'ar_EG' : 'en_US';
  const path = `/projects/${project.slug}`;
  const arHref = path;
  const enHref = `/en${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: locale === routing.defaultLocale ? arHref : enHref,
      languages: {
        ar: arHref,
        en: enHref,
      },
    },
    openGraph: {
      type: 'article',
      locale: ogLocale,
      title,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const currentYear = new Date().getFullYear();

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="relative">
        <ProjectDetails project={project} locale={locale as Locale} />
      </main>
      <Footer year={currentYear} />
    </>
  );
}
