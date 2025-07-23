// Viewport Constants
export const VIEWPORT_CONFIG = {
  ONCE: true,
  AMOUNT: 0.3,
  FULL: 1,
  HALF: 0.5,
  QUARTER: 0.25,
} as const

// OUT
export const outXY = {
  initial: { scaleX: 1, scaleY: 1, opacity: 1 },
  animate: {
    scaleX: 0.5,
    scaleY: 0.5,
    opacity: 0,
    transition: { duration: 2.2, ease: [0.43, 0.13, 0.23, 0.96] },
  },
} as const

export const outY = {
  initial: { scaleY: 1, opacity: 1 },
  animate: {
    scaleY: 0,
    opacity: 0,
    transition: { duration: 0.64, ease: [0.43, 0.13, 0.23, 0.96] },
  },
} as const
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
} as const

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
} as const

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
} as const

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const

export const cardHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 },
} as const

export const cardHoverSmall = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 },
} as const

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
} as const

export const slideInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
} as const

export const slideInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
} as const

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
} as const

export const slideInLeftWithViewport = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: VIEWPORT_CONFIG.ONCE, amount: VIEWPORT_CONFIG.AMOUNT },
} as const

export const slideInRightWithViewport = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: VIEWPORT_CONFIG.ONCE, amount: VIEWPORT_CONFIG.AMOUNT },
} as const

export const scaleInWithViewport = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: VIEWPORT_CONFIG.ONCE, amount: VIEWPORT_CONFIG.AMOUNT },
} as const

export const slideUpWithViewport = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeInOut" },
  viewport: { once: true },
} as const

export const buttonHoverAnimation = {
  initial: { scale: 0.8, opacity: 0, y: 10 },
  animate: { scale: 1, opacity: 1, y: 0 },
  whileHover: { scale: 1.1 },
  transition: { duration: 0.6, ease: "easeInOut" },
} as const

// case studies animation
export const cardContainerVariants = {
  initial: "initial",
  whileHover: "hover",
  variants: {
    hover: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const

export const cardContentVariants = {
  initial: { opacity: 0.6 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
} as const

export const cardImageVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
} as const

export const arrowVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
} as const

// Gradient Border Constants
export const GRADIENT_COLORS = {
  primary: "rgba(228, 0, 23, 1)", // Red
  secondary: "rgba(255, 204, 0, 1)", // Yellow
} as const

export const borderGradientVariants = {
  initial: {
    scaleX: 0,
    opacity: 0,
  },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
} as const

// Video section animations
export const VIDEO_ANIMATION_CONFIG = {
  DURATION: 2.2,
  DELAY: 0.6,
} as const

export const bracketsContainerAnimation = {
  initial: { scale: 0.6 },
  whileInView: { scale: 1 },
  transition: {
    type: "ease-in-out",
    duration: VIDEO_ANIMATION_CONFIG.DURATION,
    delay: VIDEO_ANIMATION_CONFIG.DELAY,
  },
  viewport: { once: true },
} as const

export const smicolonAnimation = {
  initial: { scaleX: 1, scaleY: 1, opacity: 1 },
  whileInView: {
    scaleX: 0.5,
    scaleY: 0.5,
    opacity: 0,
    transition: {
      duration: VIDEO_ANIMATION_CONFIG.DURATION,
      ease: [0.43, 0.13, 0.23, 0.96],
      delay: VIDEO_ANIMATION_CONFIG.DELAY,
    },
  },
  viewport: { once: true },
} as const

//TODO handle the x animation
export const bracketAnimationright = (isMobile: boolean) => ({
  initial: { scale: 0.9, x: isMobile ? "-60%" : "-200%" },
  whileInView: { scale: 1, x: 0 },
  transition: { duration: VIDEO_ANIMATION_CONFIG.DURATION, ease: "easeInOut" },
  viewport: { once: true },
}) as const

export const bracketAnimationleft = (isMobile: boolean) => ({
  initial: { scale: 0.9, x: isMobile ? "60%" : "200%" },
  whileInView: { scale: 1, x: 0 },
  transition: { duration: VIDEO_ANIMATION_CONFIG.DURATION, ease: "easeInOut" },
  viewport: { once: true },
}) as const

export const logoAnimation = {
  initial: { scale: 0 },
  whileInView: { scale: 1 },
  transition: { duration: VIDEO_ANIMATION_CONFIG.DURATION, ease: "easeInOut" },
  viewport: { once: true },
} as const

export const HeaderFadeUpViewPort = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
} as const

// Testimonials section animations
export const parentAnimation = {
  container: {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
    variants: staggerContainer,
  },
  child: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  separator: {
    initial: { scaleX: 0, opacity: 0 },
    animate: {
      scaleX: 1,
      opacity: 0.5,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  },
} as const

// BookACall section animations
export const bookACallAnimations = {
  container: {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
    variants: staggerContainer,
  },
  headline: {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },
  subheading: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  },
  button: {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
    whileHover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  },
} as const

// Footer animations
export const footerAnimations = {
  container: {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
    variants: staggerContainer,
  },
  logo: {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  description: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  },
  socialIcons: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  },
  navigationLinks: {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  },
  contactInfo: {
    initial: { opacity: 0, x: 20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  },
  bottomLinks: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  },
} as const
// Base animations
export const baseContainerAnimation = {
  initial: "initial",
  whileInView: "animate",
  viewport: { once: VIEWPORT_CONFIG.ONCE },
  variants: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  },
} as const

export const baseItemAnimation = {
  initial: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
} as const

export const baseSlideInAnimation = {
  initial: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
} as const

// Code snippets animations
export const codeSnippetsAnimation = {
  container: baseContainerAnimation,
  item: baseSlideInAnimation,
} as const

// AllYourNeeds Flow animations
export const allYourNeedsFlowAnimation = {
  container: baseContainerAnimation,
  item: baseItemAnimation,
} as const
