'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import PortfolioCard from '@/components/ui/PortfolioCard';
import { projects } from '@/data/projects';
import {
  slideUpWithViewport,
  staggerContainer,
  scaleInWithViewport
} from '@/lib/animations';

type Category = 'all' | 'web' | 'fullstack' | 'other';

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Development' },
  { value: 'fullstack', label: 'Full Stack' },
];

export function WorkSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="relative py-20 md:py-32 bg-background text-foreground">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...slideUpWithViewport}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured Work
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          {...slideUpWithViewport}
        >
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              suppressHydrationWarning
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300
                ${activeCategory === category.value
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              {...scaleInWithViewport}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.title} project details`}
                className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
              >
                <PortfolioCard
                  title={project.title}
                  image={project.image}
                  tags={project.tags}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            {...slideUpWithViewport}
          >
            <p className="text-xl text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
