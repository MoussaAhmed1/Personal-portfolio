import typescript from './typescript.svg'
import bootstrap from './bootstrap.svg'
import dom from './faker.svg'
import git from './git.svg'
import github from './github.svg'
import html from './html.svg'
import motion from './motion.svg'
import netlify from './netlify.svg'
import shadcnUI from './shadcn-ui.svg'
import tailwind from './tailwind.svg'
import zod from './zod.svg'

export const logos = [

    {
        src: git,
        alt: 'git.io',
        href: 'https://git.io',
        column: 1,
        row: 2,
    },

    {
        src: zod,
        alt: 'Zod',
        href: 'https://zod.dev/',
        column: 2,
        row: 3,
    },
    {
        src: github,
        alt: 'GitHub',
        href: 'https://github.com',
        column: 2,
        row: 4,
    },


    {
        src: tailwind,
        alt: 'Tailwind CSS',
        href: 'https://tailwindcss.com',
        column: 3,
        row: 3,
    },

    {
        src: shadcnUI,
        alt: 'shadcn/ui',
        href: 'https://ui.shadcn.com/',
        column: 3,
        row: 5,
    },
    {
        src: motion,
        alt: 'motion',
        href: 'https://motion.dev/',
        column: 4,
        row: 1,
    },
    {
        src: html,
        alt: 'html',
        href: 'https://mswjs.io',
        column: 4,
        row: 2,
    },
    {
        src: dom,
        alt: 'Faker.js',
        href: 'https://dom.dev/',
        column: 4,
        row: 3,
    },
    {
        src: typescript,
        alt: 'TypeScript',
        href: 'https://typescriptlang.org',
        column: 5,
        row: 2,
    },
    {
        src: netlify,
        alt: 'netlify',
        href: 'https://www.netlify.com/',
        column: 5,
        row: 3,
    },
    {
        src: bootstrap,
        alt: 'bootstrap',
        href: 'https://getbootstrap.com/',
        column: 5,
        row: 4,
    },
] as const