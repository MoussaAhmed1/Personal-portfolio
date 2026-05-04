'use client';

import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Languages } from 'lucide-react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { type Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface LocaleSwitcherProps {
  className?: string;
}

export default function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const t = useTranslations('localeSwitcher');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const nextLocale: Locale = locale === 'ar' ? 'en' : 'ar';
  const nextLabel = nextLocale === 'ar' ? t('ar') : t('en');

  const handleClick = () => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      aria-label={t('label')}
      className={cn(
        'inline-flex items-center justify-center gap-1.5 rounded-full px-3 min-h-11 min-w-11 md:min-h-9 md:min-w-9 text-xs font-semibold transition-colors',
        'text-foreground/80 hover:text-foreground hover:bg-secondary',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:opacity-60',
        className,
      )}
    >
      <Languages className="size-4" aria-hidden="true" />
      <span>{nextLabel}</span>
    </button>
  );
}
