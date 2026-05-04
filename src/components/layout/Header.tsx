'use client';
import { useTranslations } from 'next-intl';
import { Home, User, Grid3X3, ImageIcon } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher';
import { cn } from '@/lib/utils';

const focusSection = (hash: string) => {
  const id = hash.replace('#', '');
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  const previousTabIndex = target.getAttribute('tabindex');
  if (previousTabIndex === null) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  const cleanup = () => {
    if (previousTabIndex === null) target.removeAttribute('tabindex');
    target.removeEventListener('blur', cleanup);
  };
  target.addEventListener('blur', cleanup);
};

export default function Header() {
  const t = useTranslations('nav');

  const navItems = [
    { icon: Home, label: t('home'), href: '#home' },
    { icon: User, label: t('about'), href: '#about' },
    { icon: Grid3X3, label: t('work'), href: '#work' },
    { icon: ImageIcon, label: t('contact'), href: '#contact' },
  ];

  return (
    <header>
      {/* Desktop Navigation - Fixed Top */}
      <nav
        aria-label={t('primaryLabel')}
        className={cn(
          'hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-4',
        )}
      >
        <div
          className={cn(
            'bg-background backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-border',
          )}
        >
          <div className="flex items-center gap-6 text-foreground/80 hover:text-foreground">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => focusSection(item.href)}
                className="flex items-center gap-2 transition-colors duration-200 group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <item.icon
                  aria-hidden="true"
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 shrink-0"
                />
                <span className="text-sm font-medium w-fit text-nowrap">
                  {item.label}
                </span>
              </a>
            ))}
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Fixed Bottom */}
      <nav
        aria-label={t('mobilePrimaryLabel')}
        className="md:hidden fixed bottom-0 start-0 end-0 z-50 max-w-full"
      >
        <div className="bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="flex items-center justify-around py-1 px-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                onClick={() => focusSection(item.href)}
                className="flex flex-col items-center justify-center gap-1 min-h-11 min-w-11 px-3 text-muted-foreground hover:text-foreground transition-colors duration-200 group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <item.icon
                  aria-hidden="true"
                  className="size-5 group-hover:scale-110 transition-transform duration-200"
                />
              </a>
            ))}
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
