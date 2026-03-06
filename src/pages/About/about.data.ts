import type { Valor, LeadLetter, AboutContent } from "./about.types"

export const aboutContent: AboutContent = {
  hero: {
    title: "Sobre Nosotros",
    subtitle:
      "Somos una comunidad de estudiantes apasionados por la tecnología y el liderazgo, comprometidos con el desarrollo profesional y personal de nuestros miembros."
  },

  mission:
    "Impulsar el talento humano de los estudiantes de la UTP a través de programas de liderazgo, desarrollo profesional y excelencia académica, creando oportunidades que transformen sus vidas y contribuyan al progreso de la sociedad.",

  vision:
    "Ser la comunidad universitaria líder en el desarrollo integral de profesionales capaces de generar impacto positivo en la industria tecnológica y en la sociedad peruana."
}

export const leadLetters: LeadLetter[] = [
  { letter: "L", word: "Learn", meaning: "Aprender" },
  { letter: "E", word: "Explore", meaning: "Explorar" },
  { letter: "A", word: "Aspire", meaning: "Aspirar" },
  { letter: "D", word: "Discover", meaning: "Descubrir" }
]

export const valoresData: Valor[] = [
  {
    id: 1,
    title: "Liderazgo",
    description:
      "Fomentamos el desarrollo de habilidades de liderazgo en todos nuestros miembros.",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Innovación",
    description:
      "Impulsamos la creatividad y la búsqueda de soluciones innovadoras.",
    icon: "💡"
  },
  {
    id: 3,
    title: "Comunidad",
    description:
      "Creemos en el poder de la colaboración y el trabajo en equipo.",
    icon: "🤝"
  },
  {
    id: 4,
    title: "Excelencia",
    description: "Buscamos la mejora continua en todo lo que hacemos.",
    icon: "⭐"
  }
]