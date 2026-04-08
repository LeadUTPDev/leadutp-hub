// ============================================
// homeTypes.ts
// Tipos e interfaces de la Home page
// ============================================

// ── Hero ──────────────────────────────────────
export interface HeroImage {
  id: number;
  src: string;
  alt: string;
}

export interface HeroContent {
  title: string;
  titleAccent: string;
  subtitle: string;
  ctaLabel: string;
  ctaPath: string;
}

// ── Alianzas ──────────────────────────────────
export interface AlianzaItem {
  id: number;
  name: string;
  logo: string;
}

export interface AlianzasSectionContent {
  title: string;
  subtitle: string;
}

// ── Pilares ───────────────────────────────────
export interface PilarItem {
  id: number;
  title: string;
  description: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface PilaresSectionContent {
  title: string;
  subtitle: string;
}