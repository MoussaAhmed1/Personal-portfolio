# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Mousa Ahmed, built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. The project uses the Next.js App Router architecture with a focus on animations powered by Framer Motion (motion package) and a custom dark/light theme system.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture & Code Organization

### Directory Structure

- **`src/app/`** - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Cairo font (Arabic subset) and ThemeProvider
  - `page.tsx` - Home page with Header and HomeHero components
  - `globals.css` - Global styles with Tailwind v4 custom configuration

- **`src/components/`** - React components organized by category
  - `layout/` - Layout components (Header with fixed desktop/bottom mobile nav)
  - `home/` - Page-specific components (hero-home.tsx)
  - `ui/` - Reusable UI components (Button, Badge, ThemeToggle, PortfolioCard, ServiceCard, ContactForm, Logo, SocialLinks)

- **`src/lib/`** - Utility functions and configuration
  - `utils.ts` - Contains `cn()` for className merging, `colStart/rowStart` grid utilities, `clsx_custom` helper
  - `animations.ts` - Comprehensive Framer Motion animation variants and configuration constants

- **`src/providers/`** - React context providers
  - `theme-provider.tsx` - Wraps next-themes for dark/light mode

### Key Technologies

- **Next.js 15** with App Router and Turbopack
- **React 19**
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS v4** with custom theme using CSS variables and oklch colors
- **Framer Motion** (motion package v12) for animations
- **next-themes** for dark/light theme switching
- **lucide-react** for icons
- **Cairo font** from Google Fonts (Arabic subset)

### Path Aliases

The project uses TypeScript path mapping:
```typescript
"@/*": ["./src/*"]
```

Always use `@/` imports instead of relative paths (e.g., `@/components/ui/Button` instead of `../../components/ui/Button`).

## Animation System

The project has an extensive animation library in `src/lib/animations.ts` with:

- **Viewport constants** - Control intersection observer behavior
- **Base animations** - fadeIn, fadeInUp, fadeInDown, slideInLeft, slideInRight, scaleIn
- **Viewport-aware animations** - Variants with `whileInView` for scroll-triggered animations
- **Component-specific animations** - Organized by section (header, footer, testimonials, bookACall, codeSnippets, etc.)
- **Interactive animations** - cardHover, buttonHover with spring physics

When adding animations, prefer using existing variants from this file. All animation objects are exported as `const` for type safety.

## Styling Conventions

### Tailwind CSS v4 Features

- **CSS variables** defined in `globals.css` using oklch color space
- **Custom variant** for dark mode: `@custom-variant dark (&:is(.dark *))`
- **Inline theme** configuration with `@theme inline` directive
- **Custom utilities** via `@utility container` and `@layer utilities`
- **Custom animations** defined with `@keyframes` (roll-reveal, fade-in, slide-left, slide-top)

### Theme System

The app supports dark/light modes via next-themes with `class` strategy. CSS variables are defined for both modes in `:root` and `.dark` selectors.

Custom utility classes:
- `.flex-center` - Flex with centered alignment
- `.col-center` - Flex column with centered alignment
- `.abs-center` - Absolute positioning with centering
- `.whitebtn`, `.outlinedbtn`, `.redbtn` - Button styles
- `.bg-main`, `.bg-highlight`, `.bg-noisy`, `.bg-blurry-dots` - Background patterns
- `.gradientTtoB`, `.FullgradientTtoB` - Gradient overlays

### Component Patterns

- Use `cn()` from `@/lib/utils` for conditional className merging
- Components follow a client/server component split (use `'use client'` directive when needed)
- Icons from lucide-react
- Motion components from `motion` package (not framer-motion)

## Design Tokens

Key design values defined in CSS variables:

**Breakpoints:**
- sm: 376px
- md: 768px
- lg: 976px
- xl: 1280px
- 2xl: 1440px

**Container:**
- Max width: 1440px with responsive padding (16px → 80px at 2xl)

**Colors:**
- Primary (red): #e40017
- Accent colors defined in oklch for better color consistency
- Custom neutral, red, yellow, success, blue, gray palettes

**Border radius:**
- Default: 0.625rem (10px)
- Variants: sm, md, lg, xl

## Notes

- The project uses **turbopack** for faster development builds
- ESLint is configured with Next.js recommended rules
- All source files are in TypeScript with strict mode enabled
- The app is set to Arabic font subset but uses English content (may need attention)
- Animation system is extensive - explore `animations.ts` before creating new variants
