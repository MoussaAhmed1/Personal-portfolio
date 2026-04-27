'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import Logo from '@/components/ui/Logo';
import SocialLinks from '@/components/ui/SocialLinks';
import { slideUpWithViewport } from '@/lib/animations';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  year: number;
}

export default function Footer({ year }: FooterProps) {
  const t = useTranslations('footer');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card text-card-foreground border-t border-border">
      <div className="container py-10">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6"
          {...slideUpWithViewport}
        >
          <div className="text-center md:text-start">
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              {t('tagline')}
            </p>
          </div>
          <SocialLinks />
        </motion.div>
      </div>

      <div className="border-t border-border">
        <motion.div
          className="container py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground"
          {...slideUpWithViewport}
        >
          <p>{t('copyright', { year })}</p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:moussa.abdelghany@gmail.com"
              className="hover:text-primary transition-colors duration-300"
            >
              moussa.abdelghany@gmail.com
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              aria-label={t('scrollToTop')}
            >
              <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
