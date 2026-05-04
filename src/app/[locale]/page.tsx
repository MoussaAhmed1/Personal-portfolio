import { setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import HomeHero from '@/components/home/hero-home';
import { AboutSection } from '@/components/home/about-section';
import { WorkSection } from '@/components/home/work-section';
import { ContactSection } from '@/components/home/contact-section';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { routing } from '@/i18n/routing';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="relative pb-20 md:pb-0">
        <HomeHero />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer year={currentYear} />
    </>
  );
}
