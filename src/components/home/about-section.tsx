'use client';

import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import ServiceCard from '@/components/ui/ServiceCard';
import Timeline from '@/components/ui/Timeline';
import { workTimeline, educationTimeline } from '@/data/timeline';
import {
  slideUpWithViewport,
  staggerContainer,
  slideInLeftWithViewport,
  slideInRightWithViewport,
  scaleInWithViewport
} from '@/lib/animations';
import { motion } from 'motion/react';
import {
  Palette,
  Briefcase,
  GraduationCap,
  Zap,
  Download,
} from 'lucide-react';
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

export function AboutSection() {
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
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '15+', label: 'Happy Clients' },
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      description: 'Building modern web applications with React, Next.js, and Node.js. Specializing in creating responsive, accessible, and performant user interfaces.',
      icon: <Briefcase className="h-6 w-6 text-white" />,
      colorClass: 'bg-primary-500',
    },
    {
      title: 'UI/UX Enthusiast',
      description: 'Passionate about crafting beautiful, intuitive user experiences with attention to detail and modern design principles.',
      icon: <Palette className="h-6 w-6 text-white" />,
      colorClass: 'bg-purple-500',
    },
    {
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and best practices to deliver cutting-edge solutions and stay ahead in the ever-evolving tech landscape.',
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      colorClass: 'bg-blue-500',
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-muted text-foreground">
      <div className="container">
        {/* Image + Bio (two columns on md+, stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start mb-20">
          {/* Left column: image + resume button */}
          <motion.div
            className="flex flex-col items-center gap-8 md:sticky md:top-24"
            {...slideInLeftWithViewport}
          >
            <div className="relative">
              {/* Soft glow accent behind the avatar */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl opacity-70"
              />
              {/* Gradient ring frame */}
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

                {/* Online indicator */}
                <span
                  role="status"
                  aria-label="Available for work"
                  title="Available for work"
                  className="absolute bottom-16 right-3 md:bottom-20 md:right-4 flex h-3.5 w-3.5 md:h-4 md:w-4"
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
              href="/Mousa-Ahmed-CV.pdf"
              download
              className="whitebtn inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold tracking-wide uppercase text-sm"
            >
              <Download className="w-4 h-4" />
              Get My Resume
            </a>
          </motion.div>

          {/* Right column: heading + paragraphs */}
          <motion.div
            className="max-w-2xl"
            {...slideInRightWithViewport}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Hi! <span className="inline-block">👋</span> I&apos;m{' '}
              <span className="text-primary">Mousa</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                I&apos;m a Frontend Engineer based in Cairo, Egypt, with 3+ years of
                experience building responsive, intuitive web applications. My
                primary tool is <strong>Next.js</strong>, with{' '}
                <strong>Angular</strong> as a strong secondary, and I take pride
                in turning complex Figma designs into pixel-perfect, performant
                interfaces.
              </p>

              <p>
                I currently build high-performance, scalable apps at{' '}
                <strong>Smicolon GmbH</strong>, where I work with TypeScript,
                SSR/SSG, Headless CMS (Strapi), and motion libraries to ship
                polished products in a Scrum environment. Before that, I spent
                almost two years at <strong>AlexApps</strong> building real-time
                dashboards, e-commerce flows, and multi-language apps with
                React, MUI, and Socket.io.
              </p>

              <p>
                On the side, I take on freelance projects — from a Vue-based
                sales platform with role-based permissions and a loyalty system,
                to a Next.js dashboard for school pickups in Saudi Arabia with
                real-time notifications, NextAuth, and i18n.
              </p>

              <p>
                I&apos;m driven by clean code, efficient problem-solving, and
                continuous learning. I care about clear communication, good time
                management, and shipping work I&apos;d be happy to put my name on.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto"
          {...staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
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
        <motion.div
          className="mb-20"
          {...slideUpWithViewport}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
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

        {/* Experience */}
        {/* <motion.div
          {...slideUpWithViewport}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                {...slideInLeftWithViewport}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard
                  title={experience.title}
                  description={experience.description}
                  icon={experience.icon}
                  colorClass={experience.colorClass}
                />
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
