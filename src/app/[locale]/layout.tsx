import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cairo } from 'next/font/google';
import { Toaster } from 'sonner';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { ThemeProvider } from '@/providers/theme-provider';
import '../globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const revalidate = 86400;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: 'meta' });
  const title = t('title');
  const description = t('description');
  const ogLocale = locale === 'ar' ? 'ar_EG' : 'en_US';

  return {
    metadataBase: new URL('https://mousaahmed.com'),
    title: {
      default: title,
      template: t('titleTemplate'),
    },
    description,
    keywords: t('keywords').split(', '),
    authors: [{ name: 'Mousa Ahmed' }],
    creator: 'Mousa Ahmed',
    alternates: {
      canonical: locale === routing.defaultLocale ? '/' : `/${locale}`,
      languages: {
        en: '/',
        ar: '/ar',
      },
    },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: locale === routing.defaultLocale ? '/' : `/${locale}`,
      title,
      description,
      siteName: 'Mousa Ahmed',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@mousaahmed',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${cairo.variable} font-sans antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
        </NextIntlClientProvider>
        <Toaster richColors dir={dir} />
      </body>
    </html>
  );
}
