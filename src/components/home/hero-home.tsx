"use client";

import { motion, type Variants, type Transition } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";
import { fadeInUp } from "@/lib/animations";

const CTA_BUTTON_VARIANTS: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
};

const CTA_BUTTON_TRANSITION: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 22,
};

const ARROW_ICON_VARIANTS: Variants = {
  rest: { x: 0 },
  hover: { x: 3 },
};

const ARROW_ICON_TRANSITION: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 18,
};

const DOWNLOAD_ICON_VARIANTS: Variants = {
  rest: { y: 0 },
  hover: {
    y: [0, 3, 0],
    transition: {
      duration: 0.7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HomeHero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-20 min-h-[100svh] flex items-center justify-center">
      <div
        aria-hidden="true"
        className="bg-squares pointer-events-none absolute inset-0"
      />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.h1
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl/tight max-w-4xl"
        >
          Do you need a high-performance, scalable web application?
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
        >
          I&apos;m Mousa — a Frontend Engineer focused on building fast,
          maintainable, and user-friendly web experiences.
        </motion.p>

        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground"
        >
          I specialize in React ecosystems, performance optimization, and clean
          architecture. I don&apos;t just build interfaces — I focus on how
          things behave, scale, and feel in real-world usage.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col gap-3 min-[400px]:flex-row"
        >
          <motion.a
            href="#contact"
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            animate="rest"
            variants={CTA_BUTTON_VARIANTS}
            transition={CTA_BUTTON_TRANSITION}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm md:text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in touch
            <motion.span
              variants={ARROW_ICON_VARIANTS}
              transition={ARROW_ICON_TRANSITION}
              className="inline-flex"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </motion.span>
          </motion.a>

          <motion.a
            href="/cv/Mousa_Ahmed_Frontend_Developer.pdf"
            download
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            animate="rest"
            variants={CTA_BUTTON_VARIANTS}
            transition={CTA_BUTTON_TRANSITION}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-background px-6 text-sm md:text-base font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <motion.span
              variants={DOWNLOAD_ICON_VARIANTS}
              className="inline-flex"
            >
              <Download className="size-4" aria-hidden="true" />
            </motion.span>
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
