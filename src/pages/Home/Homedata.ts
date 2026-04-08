// ============================================
// homeData.ts
// Datos estáticos de la Home page
// ============================================

import type {
  HeroImage,
  HeroContent,
  AlianzaItem,
  AlianzasSectionContent,
  PilarItem,
  PilaresSectionContent,
} from './HomeTypes';

// ── Hero ──────────────────────────────────────
export const heroContent: HeroContent = {
  title: 'Donde los sueños',
  titleAccent: 'se cumplen',
  subtitle: 'La comunidad que impulsa el talento humano para construir un mejor mañana.',
  ctaLabel: 'Descubre proyectos',
  ctaPath: '/projects',
};

export const heroImages: HeroImage[] = [
  { id: 1, src: '/images/Lead1.png', alt: 'LEAD UTP 1' },
  { id: 2, src: '/images/Lead2.png', alt: 'LEAD UTP 2' },
  { id: 3, src: '/images/Lead3.png', alt: 'LEAD UTP 3' },
  { id: 4, src: '/images/Lead4.png', alt: 'LEAD UTP 4' },
  { id: 5, src: '/images/Lead5.png', alt: 'LEAD UTP 5' },
  { id: 6, src: '/images/Lead6.png', alt: 'LEAD UTP 6' },
];

// ── Alianzas ──────────────────────────────────
export const alianzasSectionContent: AlianzasSectionContent = {
  title: 'Alianzas LEAD',
  subtitle: 'Impulsamos el futuro con el apoyo de líderes en tecnología y educación',
};

export const alianzasData: AlianzaItem[] = [
  { id: 1, name: 'DSC UTP',       logo: '/images/alianzas/logo-dsc-utp.png' },
  { id: 2, name: 'CONEII',        logo: '/images/alianzas/logo-coneii.png' },
  { id: 3, name: 'Aeditip',       logo: '/images/alianzas/logo-aeditip.png' },
  { id: 4, name: 'Levo Learning', logo: '/images/alianzas/logo-levo-learning.png' },
  { id: 5, name: 'CV Matcher',    logo: '/images/alianzas/logo-cv-matcher.png' },
  { id: 6, name: 'IBM Z',         logo: '/images/alianzas/logo-ibm-z.png' },
  { id: 7, name: 'Face to Face',  logo: '/images/alianzas/logo-face-to-face.png' },
];

// ── Pilares ───────────────────────────────────
export const pilaresSectionContent: PilaresSectionContent = {
  title: 'Pilares LEAD',
  subtitle: 'Nuestra organización que hace posible nuevas oportunidades',
};

export const pilaresData: PilarItem[] = [
  {
    id: 1,
    title: 'Desarrollo Profesional',
    description: 'Impulsamos las habilidades blandas necesarias que las mejores empresas demandan.',
    image: '/images/pilares/desarrollo-profesional-card.png',
    gradientFrom: '#d93340',
    gradientTo: '#5a040b',
  },
  {
    id: 2,
    title: 'Liderazgo',
    description: 'Creamos oportunidades para pulir habilidades de liderazgo en los estudiantes.',
    image: '/images/pilares/liderazgo-card.png',
    gradientFrom: '#7856ee',
    gradientTo: '#0b0033',
  },
  {
    id: 3,
    title: 'Excelencia Femenina',
    description: 'Empoderamos a mujeres líderes en la industria STEM para cerrar la brecha de género.',
    image: '/images/pilares/excelencia-femenina-card.png',
    gradientFrom: '#a6249d',
    gradientTo: '#370033',
  },
  {
    id: 4,
    title: 'Desarrollo del Capítulo',
    description: 'Desarrollamos actividades y mejoras en el desempeño de nuestros voluntarios.',
    image: '/images/pilares/desarrollo-capitulo-card.png',
    gradientFrom: '#0024d7',
    gradientTo: '#010726',
  },
  {
    id: 5,
    title: 'Excelencia Académica',
    description: 'Generamos oportunidades de aprendizaje continuo de STEM para todos.',
    image: '/images/pilares/excelencia-academica-card.png',
    gradientFrom: '#b74515',
    gradientTo: '#322100',
  },
  {
    id: 6,
    title: 'LEAD Academia',
    description: 'Difundimos conocimiento y pasión por la tecnología con los jóvenes de colegio.',
    image: '/images/pilares/lead-academia-card.png',
    gradientFrom: '#c90fcf',
    gradientTo: '#410043',
  },
];