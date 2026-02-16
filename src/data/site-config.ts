import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
  website: 'https://example.com',
  avatar: {
    // Ruta pública: no requiere import ni declaraciones de tipos
    src: '/images/avatar.jpg',
    alt: 'Samuel Junca',
  },
  title: 'Samuel',
  subtitle: 'Systems Engineering',
  description:
    'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
  image: {
    // Si existe en /public, esta ruta es correcta
    src: '/images/avatar.jpg',
    alt: 'Dante - Astro.js and Tailwind CSS theme',
  },
  headerNavLinks: [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'Blog', href: '/blog' },
    { text: 'Tags', href: '/tags' },
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
    title: 'Hi There & Welcome to My Corner of the Web!',
    text: `I'm **Ethan Donovan**, a web developer at Amazing Studio, dedicated to the realms of collaboration and artificial intelligence.
My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products.
I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth.

Feel free to explore some of my coding endeavors on [GitHub](https://github.com/JustGoodUI/dante-astro-theme) or follow me on [Twitter/X](https://twitter.com/justgoodui).`,
    image: {
      // Ruta pública de la imagen del hero
      src: '/images/hero.jpg',
      alt: 'A person sitting at a desk in front of a computer',
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
``