'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import {
  scaleInWithViewport,
  slideInLeftWithViewport,
  slideInRightWithViewport,
  slideUpWithViewport,
  staggerContainer,
} from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { TimelineItem } from '@/data/timeline';

type TimelineTab = 'education' | 'work';

interface TimelineProps {
  work: TimelineItem[];
  education: TimelineItem[];
}

interface TabConfig {
  id: TimelineTab;
  label: string;
  Icon: typeof Briefcase;
}

const TABS: TabConfig[] = [
  { id: 'education', label: 'Education', Icon: GraduationCap },
  { id: 'work', label: 'Work', Icon: Briefcase },
];

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h4 className="text-lg md:text-xl font-bold leading-snug">
        {item.title}
      </h4>
      <p className="text-primary font-semibold mt-1">{item.organization}</p>
      <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="w-4 h-4" aria-hidden />
        <span>{item.period}</span>
      </p>
    </div>
  );
}

function Timeline({ work, education }: TimelineProps) {
  const [activeTab, setActiveTab] = useState<TimelineTab>('work');
  const items = activeTab === 'work' ? work : education;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Timeline category"
        className="flex justify-center items-center gap-8 md:gap-12 mb-12"
      >
        {TABS.map(({ id, label, Icon }) => {
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
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" aria-hidden />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Timeline body */}
      <motion.ol
        id={`timeline-panel-${activeTab}`}
        role="tabpanel"
        aria-label={`${activeTab === 'work' ? 'Work' : 'Education'} history`}
        key={activeTab}
        className="relative"
        {...staggerContainer}
      >
        {/* Vertical line: left on mobile, centered on md+ */}
        <span
          aria-hidden
          className="absolute top-0 bottom-0 left-2 md:left-1/2 md:-translate-x-1/2 w-px bg-border"
        />

        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <li key={`${item.title}-${item.period}`} className="relative">
              {/* Dot on the line */}
              <motion.span
                aria-hidden
                className="absolute left-2 md:left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background"
                {...scaleInWithViewport}
              />

              {/* Mobile layout: single column, content offset right of the line */}
              <div className="md:hidden pl-10 py-4">
                <motion.div {...slideUpWithViewport}>
                  <TimelineCard item={item} />
                </motion.div>
              </div>

              {/* Desktop layout: two-column grid, alternating sides */}
              <div className="hidden md:grid grid-cols-2 gap-12 py-6">
                {isLeft ? (
                  <>
                    <motion.div
                      className="pr-2"
                      {...slideInLeftWithViewport}
                    >
                      <TimelineCard item={item} />
                    </motion.div>
                    <div aria-hidden />
                  </>
                ) : (
                  <>
                    <div aria-hidden />
                    <motion.div
                      className="pl-2"
                      {...slideInRightWithViewport}
                    >
                      <TimelineCard item={item} />
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
