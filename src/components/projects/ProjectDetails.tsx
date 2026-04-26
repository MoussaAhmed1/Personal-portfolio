'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import type { Project } from '@/data/projects';
import { ScreenshotCarousel } from '@/components/projects/ScreenshotCarousel';
import { ImageLightbox } from '@/components/projects/ImageLightbox';

interface ProjectDetailsProps {
  project: Project;
}

const categoryLabel: Record<Project['category'], string> = {
  web: 'Web Development',
  mobile: 'Mobile App',
  design: 'Design',
  other: 'Other',
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const screenshots = project.screenshots ?? [];
  const hasActions = Boolean(project.link || project.github);
  const metaItems = [
    project.role && { label: 'Role', value: project.role },
    project.duration && { label: 'Duration', value: project.duration },
    { label: 'Category', value: categoryLabel[project.category] },
  ].filter(Boolean) as Array<{ label: string; value: string }>;

  return (
    <article className="relative py-12 md:py-20 bg-background text-foreground min-h-screen">
      <div className="container max-w-5xl">
        {/* Back link */}
        <motion.div {...fadeInUp}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className="relative w-full aspect-video rounded-2xl overflow-hidden bg-secondary border border-border mb-8 max-h-[600px]"
          {...fadeInUp}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Title + subtitle */}
        <motion.header
          className="mb-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            {...fadeInUp}
          >
            {project.title}
            {project.subtitle && (
              <span className="block mt-2 text-lg md:text-xl font-medium text-muted-foreground">
                {project.subtitle}
              </span>
            )}
          </motion.h1>
        </motion.header>

        {/* Tags */}
        <motion.ul
          className="flex flex-wrap gap-2 mb-6"
          aria-label="Technologies"
          {...fadeInUp}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {tag}
            </li>
          ))}
        </motion.ul>

        {/* Description */}
        <motion.div
          className="prose prose-neutral dark:prose-invert max-w-none mb-8"
          {...fadeInUp}
        >
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            {project.fullDescription ?? project.description}
          </p>
        </motion.div>

        {/* Action buttons */}
        {hasActions && (
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-10"
            {...fadeInUp}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-accent border border-border font-medium transition-colors"
              >
                <Github className="size-4" />
                Source Code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 font-medium transition-opacity"
              >
                <ExternalLink className="size-4" />
                Live Site
              </a>
            )}
          </motion.div>
        )}

        {/* Meta grid */}
        {metaItems.length > 0 && (
          <motion.dl
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12 py-6 border-y border-border"
            {...fadeInUp}
          >
            {metaItems.map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {item.label}
                </dt>
                <dd className="text-sm md:text-base font-medium">
                  {item.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        )}

        {/* Screenshots carousel */}
        {screenshots.length > 0 && (
          <motion.section aria-labelledby="screenshots-heading" {...fadeInUp}>
            <h2
              id="screenshots-heading"
              className="text-2xl md:text-3xl font-bold mb-6"
            >
              Screenshots
            </h2>
            <ScreenshotCarousel
              images={screenshots}
              onImageClick={setLightboxIndex}
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Click any screenshot to open it full-screen — pinch, scroll, or double-click to zoom.
            </p>
          </motion.section>
        )}
      </div>

      <ImageLightbox
        isOpen={lightboxIndex !== null}
        images={screenshots}
        initialIndex={lightboxIndex ?? 0}
        onClose={() => setLightboxIndex(null)}
      />
    </article>
  );
}
