// Viewport Constants
export const VIEWPORT_CONFIG = {
  ONCE: true,
  AMOUNT: 0.3,
  FULL: 1,
  HALF: 0.5,
  QUARTER: 0.25,
} as const

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
} as const

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
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
