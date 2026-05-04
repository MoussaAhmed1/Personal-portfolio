'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { type Locale } from '@/i18n/routing';
import PortfolioCard from '@/components/ui/PortfolioCard';
import {
  projects,
  pickLocale,
  type ProjectCategory,
} from '@/data/projects';
import {
  slideUpWithViewport,
  staggerContainer,
  scaleInWithViewport,
} from '@/lib/animations';
import { cn } from '@/lib/utils';

type CategoryFilter = ProjectCategory | 'all';

const CATEGORY_VALUES: CategoryFilter[] = ['all', 'web', 'fullstack'];

export function WorkSection() {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="work"
      className="relative py-20 md:py-32 bg-background text-foreground"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...slideUpWithViewport}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('title')}
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          role="group"
          aria-label={t('title')}
          className="flex flex-wrap justify-center gap-3 mb-12"
          {...slideUpWithViewport}
        >
          {CATEGORY_VALUES.map((value) => {
            const isActive = activeCategory === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => setActiveCategory(value)}
                aria-pressed={isActive}
                className={cn(
                  'px-6 py-3 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground',
                )}
              >
                {t(`categories.${value}`)}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0"
          {...staggerContainer}
        >
          {filteredProjects.map((project, index) => {
            const title = pickLocale(project.title, locale);
            return (
              <motion.li
                key={project.id}
                {...scaleInWithViewport}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={t('viewProject', { title })}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
                >
                  <PortfolioCard
                    title={title}
                    image={project.image}
                    tags={project.tags}
                  />
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div className="text-center py-20" {...slideUpWithViewport}>
            <p className="text-xl text-muted-foreground">{t('empty')}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
