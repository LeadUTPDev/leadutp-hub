export interface Valor {
  id: number
  title: string
  description: string
  icon: string
}

export interface LeadLetter {
  letter: string
  word: string
  meaning: string
}

export interface AboutContent {
  hero: {
    title: string
    subtitle: string
  }
  mission: string
  vision: string
}