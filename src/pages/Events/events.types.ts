export type EventStatus = "upcoming" | "past"

export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  pilar: string
  pilarColor: string
  status: EventStatus
}

export interface EventsContent {
  hero: {
    title: string
    subtitle: string
  }
}