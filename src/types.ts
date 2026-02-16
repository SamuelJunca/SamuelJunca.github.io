// src/types/index.ts

export type NavLink = {
  text: string;
  href: string;
};

export type SocialLink = NavLink;

export type MediaImage = {
  src: string;
  alt: string;
};

export type MediaVideo = {
  /** Ruta pública al video, p. ej. '/video/45185.mp4' */
  src: string;
  /** Póster/portada opcional mientras carga el video */
  poster?: string;
  /** Texto alternativo opcional */
  alt?: string;
  /** Controles del <video> (si vas a usarlos desde config) */
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsinline?: boolean;
};

export type HeroConfig = {
  title: string;
  text: string;
  /** Imagen opcional (fallback cuando no hay video) */
  image?: MediaImage;
  /** Video opcional (si existe, debería renderizarse en lugar de la imagen) */
  video?: MediaVideo;
  actions?: NavLink[];
};

export type SubscribeConfig = {
  enabled: boolean;
  title: string;
  text: string;
  form: { action: string };
};

export type SiteConfig = {
  website: string;
  /** Avatar que se muestra en el sitio (por ejemplo header/perfil) */
  avatar: MediaImage;

  title: string;
  subtitle: string;
  description: string;

  /**
   * Imagen por defecto para SEO/OpenGraph (debe ser IMAGEN, no video).
   * No reemplazar por video; los metadatos OG requieren imagen.
   */
  image: MediaImage;

  headerNavLinks: NavLink[];
  footerNavLinks: NavLink[];
  socialLinks: SocialLink[];

  hero: HeroConfig;
  subscribe: SubscribeConfig;

  postsPerPage: number;
  projectsPerPage: number;
};