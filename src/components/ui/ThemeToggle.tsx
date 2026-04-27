'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations('themeToggle');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        aria-label={t('label')}
        className="p-2 rounded-full transition-colors flex items-center justify-center opacity-0"
      >
        <Sun className="size-4 xl:size-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors flex items-center justify-center"
      aria-label={t('label')}
    >
      <Sun className="text-foreground absolute size-4 scale-100 rotate-0 transform text-2xl opacity-100 transition-all duration-300 ease-in-out xl:size-5 dark:scale-0 dark:-rotate-90 dark:opacity-0" />
      <Moon className="text-foreground absolute size-4 scale-0 rotate-90 transform opacity-0 transition-all duration-300 ease-in-out xl:size-5 dark:scale-100 dark:rotate-0 dark:opacity-100" />
    </button>
  );
};

export default ThemeToggle;
