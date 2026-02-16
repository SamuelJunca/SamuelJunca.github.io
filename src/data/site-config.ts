import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
  website: 'https://example.com',

  // 👤 Avatar (se usa en distintas partes del tema)
  avatar: {
    src: '',
    alt: '',
  },

  title: 'Samuel',
  subtitle: 'Systems Engineering',
  description:
    'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',

  // 🖼️ Imagen OG/SEO por defecto (DEBE ser imagen, no video)
  image: {
    src: '',
    alt: '',
  },

  // 🧭 Menú — quitamos Projects / Writing
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

  // 🏠 Héroe del Home: tu bio + el video de YouTube embebido
  hero: {
    title: "Hi, I'm Samuel",
    text: `I'm **Samuel Junca**, a Systems Engineering student at El Bosque University (6th semester) and the founder of a beverage distribution business. I'm interested in collaboration, product design, and efficient operations to turn ideas into solutions that are clear, fast, and useful.

**How I Work**
- **Informed intuition & just‑enough research:** enough evidence to move forward with sound judgment.
- **Functional aesthetics:** design as a lever to improve the experience.
- **Product‑led growth:** make the value obvious from the very first use.

**What I Value**
Well‑crafted software, thoughtful visual design, and products that solve real problems.

<!-- 🎬 YouTube Shorts embebido (vertical 9:16) -->
<div style="aspect-ratio:9/16; width:100%; max-width:420px; margin:1rem 0; border-radius:1rem; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,.15);">
  <iframe
    src="https://www.youtube.com/embed/dg-o0b9r8lU?rel=0&modestbranding=1&controls=1"
    title="YouTube video player"
    loading="lazy"
    style="width:100%; height:100%; border:0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>`,
    // Imagen de respaldo por si el HTML no llega a renderizar en algún contexto
    image: {
      src: '/images/Avatar.jpeg',
      alt: 'Samuel Junca',
    },
    actions: [{ text: 'Get in Touch', href: '/contact' }],
  },

  subscribe: {
    enabled: true,
    title: 'Subscribe to Samuel Junca',
    text: 'One update per week. All the latest posts directly in your inbox.',
    form: { action: '#' },
  },

  postsPerPage: 8,
  projectsPerPage: 8,
};

export default siteConfig;