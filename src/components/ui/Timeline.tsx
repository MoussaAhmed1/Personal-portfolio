'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import {
  scaleInWithViewport,
  slideInLeftWithViewport,
  slideInRightWithViewport,
  slideUpWithViewport,
  staggerContainer,
} from '@/lib/animations';
import { cn } from '@/lib/utils';
import { pickLocale } from '@/data/projects';
import { type Locale } from '@/i18n/routing';
import type { TimelineItem } from '@/data/timeline';

type TimelineTab = 'education' | 'work';

interface TimelineProps {
  work: TimelineItem[];
  education: TimelineItem[];
}

interface TabConfig {
  id: TimelineTab;
  Icon: typeof Briefcase;
}

const TABS: TabConfig[] = [
  { id: 'education', Icon: GraduationCap },
  { id: 'work', Icon: Briefcase },
];

function TimelineCard({
  item,
  locale,
}: {
  item: TimelineItem;
  locale: Locale;
}) {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h4 className="text-lg md:text-xl font-bold leading-snug">
        {pickLocale(item.title, locale)}
      </h4>
      <p className="text-primary font-semibold mt-1">
        {pickLocale(item.organization, locale)}
      </p>
      <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="w-4 h-4" aria-hidden />
        <span>{pickLocale(item.period, locale)}</span>
      </p>
    </div>
  );
}

function Timeline({ work, education }: TimelineProps) {
  const t = useTranslations('timeline');
  const locale = useLocale() as Locale;
  const [activeTab, setActiveTab] = useState<TimelineTab>('work');
  const items = activeTab === 'work' ? work : education;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label={t('categoryLabel')}
        className="flex justify-center items-center gap-8 md:gap-12 mb-12"
      >
        {TABS.map(({ id, Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`timeline-panel-${id}`}
              onClick={() => setActiveTab(id)}
              className={cn(
                'inline-flex items-center gap-2 text-lg md:text-xl font-semibold transition-colors cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-2 py-1',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" aria-hidden />
              <span>{t(id)}</span>
            </button>
          );
        })}
      </div>

      {/* Timeline body */}
      <motion.ol
        id={`timeline-panel-${activeTab}`}
        role="tabpanel"
        aria-label={
          activeTab === 'work' ? t('workHistory') : t('educationHistory')
        }
        key={activeTab}
        className="relative"
        {...staggerContainer}
      >
        {/* Vertical line: start on mobile, centered on md+ */}
        <span
          aria-hidden
          className="absolute top-0 bottom-0 start-2 md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2 w-px bg-border"
        />

        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <li
              key={`${pickLocale(item.title, locale)}-${pickLocale(item.period, locale)}`}
              className="relative"
            >
              {/* Dot on the line */}
              <motion.span
                aria-hidden
                className="absolute start-2 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background"
                {...scaleInWithViewport}
              />

              {/* Mobile layout: single column, content offset right of the line */}
              <div className="md:hidden ps-10 py-4">
                <motion.div {...slideUpWithViewport}>
                  <TimelineCard item={item} locale={locale} />
                </motion.div>
              </div>

              {/* Desktop layout: two-column grid, alternating sides */}
              <div className="hidden md:grid grid-cols-2 gap-12 py-6">
                {isLeft ? (
                  <>
                    <motion.div className="pe-2" {...slideInLeftWithViewport}>
                      <TimelineCard item={item} locale={locale} />
                    </motion.div>
                    <div aria-hidden />
                  </>
                ) : (
                  <>
                    <div aria-hidden />
                    <motion.div className="ps-2" {...slideInRightWithViewport}>
                      <TimelineCard item={item} locale={locale} />
                    </motion.div>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </motion.ol>
    </div>
  );
}

export default Timeline;
