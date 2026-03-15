import type { Event, EventsContent } from "./events.types"

export const eventsContent: EventsContent = {
  hero: {
    title: "Nuestros Eventos",
    subtitle:
      "Participa en nuestras actividades y sé parte de la comunidad LEAD UTP."
  }
}

export const eventsData: Event[] = [
  {
    id: 1,
    title: "Chocolatada LEAD",
    date: "19 Dic 2025",
    time: "18:00 - 20:00",
    location: "Auditorio UTP - Torre Arequipa",
    description: "Chocolatada de integración.",
    pilar: "Excelencia Académica",
    pilarColor: "#b74515",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Día de Integración de LEAD UTP en GLOBANT",
    date: "20 Dic 2025",
    time: "17:00 - 20:00",
    location: "GLOBANT - San Isidro",
    description:
      "Tarde que permitió conectar, compartir experiencias y fortalecer el liderazgo entre los miembros de la comunidad.",
    pilar: "Desarrollo de Capitulo",
    pilarColor: "#7856ee",
    status: "past"
  },
  {
    id: 3,
    title: "Cómo convertir tu MVP en una startup financiada",
    date: "8 Nov 2025",
    time: "18:00 - 19:00",
    location: "Online - Zoom",
    description:
      "Charla que explicó cómo transformar un MVP en una empresa de alto impacto y con financiamiento.",
    pilar: "Excelencia Académica",
    pilarColor: "#7856ee",
    status: "past"
  },
  {
    id: 4,
    title: "First Gen Day Perú",
    date: "8 Nov 2025",
    time: "15:00 - 19:00",
    location: "Auditorio UTP - Torre Arequipa",
    description:
      "Evento que conmemoró a la primera generación universitaria, resaltando su esfuerzo y trayectoria académica.",
    pilar: "Desarrollo de Capitulo",
    pilarColor: "#d93340",
    status: "past"
  },
  {
    id: 5,
    title: "Charla de n8n",
    date: "18 Oct 2025",
    time: "15:00 - 19:00",
    location: "Auditorio Central UTP",
    description:
      "Sesión informativa que mostró cómo n8n está revolucionando la automatización de procesos empresariales.",
    pilar: "Excelencia Académica",
    pilarColor: "#c90fcf",
    status: "past"
  }
]