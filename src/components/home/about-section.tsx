'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Zap, Download } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFramer,
  SiGit,
  SiAngular,
  SiRedux,
  SiReactquery,
  SiSass,
  SiSocketdotio,
  SiNgrx,
  SiJest,
  SiFirebase,
} from 'react-icons/si';
import Badge from '@/components/ui/Badge';
import Timeline from '@/components/ui/Timeline';
import { workTimeline, educationTimeline } from '@/data/timeline';
import {
  slideUpWithViewport,
  staggerContainer,
  slideInLeftWithViewport,
  slideInRightWithViewport,
  scaleInWithViewport,
} from '@/lib/animations';

export function AboutSection() {
  const t = useTranslations('about');

  const skills = [
    { Icon: SiNextdotjs, color: '#000000', label: 'Next.js' },
    { Icon: SiReact, color: '#61DAFB', label: 'React' },
    { Icon: SiAngular, color: '#DD0031', label: 'Angular' },
    { Icon: SiTypescript, color: '#3178C6', label: 'TypeScript' },
    { Icon: SiRedux, color: '#764ABC', label: 'Redux' },
    { Icon: SiNgrx, color: '#BA2BD2', label: 'NgRx' },
    { Icon: SiReactquery, color: '#FF4154', label: 'React Query' },
    { Icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind CSS' },
    { Icon: SiSass, color: '#CC6699', label: 'SCSS' },
    { Icon: SiSocketdotio, color: '#010101', label: 'Socket.io' },
    { Icon: SiNodedotjs, color: '#339933', label: 'Node.js' },
    { Icon: SiFirebase, color: '#FFCA28', label: 'Firebase' },
    { Icon: SiJest, color: '#C21325', label: 'Jest' },
    { Icon: SiFramer, color: '#0055FF', label: 'Framer Motion' },
    { Icon: SiPython, color: '#3776AB', label: 'Python' },
    { Icon: SiGit, color: '#F05032', label: 'Git & GitHub' },
    { Icon: Zap, color: '#FACC15', label: 'Performance Optimization' },
  ];

  const stats = [
    { value: '3+', label: t('stats.experience') },
    { value: '20+', label: t('stats.projects') },
    { value: '15+', label: t('stats.clients') },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-muted text-foreground"
    >
      <div className="container">
        {/* Image + Bio (two columns on md+, stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start mb-20">
          {/* Left column: image + resume button */}
          <motion.div
            className="flex flex-col items-center gap-8 md:sticky md:top-24"
            {...slideInLeftWithViewport}
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl opacity-70"
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-br from-primary via-primary/40 to-transparent shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/images/Mousa.png"
                    alt="Mousa Ahmed"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <span
                  role="status"
                  aria-label={t('availableForWork')}
                  title={t('availableForWork')}
                  className="absolute bottom-16 end-3 md:bottom-20 md:end-4 flex h-3.5 w-3.5 md:h-4 md:w-4"
                >
                  <span
                    aria-hidden
                    className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping"
                  />
                  <span className="relative inline-flex h-full w-full rounded-full bg-green-500 ring-2 ring-background" />
                </span>
              </div>
            </div>

            <a
              href="/api/download-cv"
              download="Mousa_Ahmed_Frontend_Developer.pdf"
              className="whitebtn inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold tracking-wide uppercase text-sm"
            >
              <Download className="w-4 h-4" />
              {t('downloadCv')}
            </a>
          </motion.div>

          {/* Right column: heading + paragraphs */}
          <motion.div className="max-w-2xl" {...slideInRightWithViewport}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              {t('greeting')} <span className="inline-block">👋</span>{' '}
              {t('imName')} <span className="text-primary">{t('name')}</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>{t('paragraphs.p1')}</p>
              <p>{t('paragraphs.p2')}</p>
              <p>{t('paragraphs.p3')}</p>
              <p>{t('paragraphs.p4')}</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
          {...staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              className="bg-card text-card-foreground border border-border rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              {...scaleInWithViewport}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div className="mb-20" {...slideUpWithViewport}>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t('skillsTitle')}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill.label}
                Icon={skill.Icon}
                color={skill.color}
                label={skill.label}
              />
            ))}
          </div>
        </motion.div>

        {/* Education & Work Timeline */}
        <motion.div className="mb-20" {...slideUpWithViewport}>
          <Timeline work={workTimeline} education={educationTimeline} />
        </motion.div>
      </div>
    </section>
  );
}
