import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
  website: 'https://example.com',

  avatar: {
    // ✅ URL pública desde /public
    src: '/images/Avatar.jpeg',
    alt: 'Samuel Junca',
  },

  title: 'Samuel',
  subtitle: 'Systems Engineering',
  description:
    'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',

  // Imagen por defecto (OG). Usa la misma para evitar 404:
  image: {
    src: '/images/Avatar.jpeg',
    alt: 'Samuel Junca',
  },

  // ✅ Menú: quitamos Projects y Writing/Blog
  headerNavLinks: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Tags', href: '/tags' },
    { text: 'Contact', href: '/contact' },
  ],

  footerNavLinks: [
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
    { text: 'Terms', href: '/terms' },
    {
      text: 'Download theme',
      href: 'https://github.com/JustGoodUI/dante-astro-theme',
    },
  ],

  socialLinks: [
    { text: 'Dribbble', href: 'https://dribbble.com/' },
    { text: 'Instagram', href: 'https://instagram.com/' },
    { text: 'X/Twitter', href: 'https://twitter.com/' },
  ],

  hero: {
    title: "Hi, I'm Samuel",
    text: `I'm **Samuel Junca**, a Systems Engineering student at El Bosque University (6th semester) and the founder of a beverage distribution business. I'm interested in collaboration, product design, and efficient operations to turn ideas into solutions that are clear, fast, and useful.

**How I Work**
- **Informed intuition & just‑enough research:** enough evidence to move forward with sound judgment.
- **Functional aesthetics:** design as a lever to improve the experience.
- **Product‑led growth:** make the value obvious from the very first use.

**What I Value**
Well‑crafted software, thoughtful visual design, and products that solve real problems.`,
    image: {
      // ✅ Muestra tu avatar en el héroe de Home
      src: '/images/Avatar.jpeg',
      alt: 'Samuel Junca',
    },
    actions: [{ text: 'Get in Touch', href: '/contact' }],
  },

  subscribe: {
    enabled: true,
    title: 'Subscribe to Dante Newsletter',
    text: 'One update per week. All the latest posts directly in your inbox.',
    form: { action: '#' },
  },

  postsPerPage: 8,
  projectsPerPage: 8,
};

export default siteConfig;