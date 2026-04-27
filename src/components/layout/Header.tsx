'use client';
import { useTranslations } from 'next-intl';
import { Home, User, Grid3X3, ImageIcon } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher';
import { cn } from '@/lib/utils';

export default function Header() {
  const t = useTranslations('nav');

  const navItems = [
    { icon: Home, label: t('home'), href: '#home' },
    { icon: User, label: t('about'), href: '#about' },
    { icon: Grid3X3, label: t('work'), href: '#work' },
    { icon: ImageIcon, label: t('contact'), href: '#contact' },
  ];

  return (
    <header className="overflow-hidden">
      {/* Desktop Navigation - Fixed Top */}
      <nav
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
                className="flex items-center gap-2 transition-colors duration-200 group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 shrink-0" />
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
      <nav className="md:hidden fixed bottom-0 start-0 end-0 z-50 max-w-full">
        <div className="bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="flex items-center justify-around py-3 px-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 group p-2"
              >
                <item.icon className="size-4 group-hover:scale-110 transition-transform duration-200" />
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
