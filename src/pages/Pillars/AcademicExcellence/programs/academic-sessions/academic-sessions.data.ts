import type { Project } from './academic-sessions.type';

export const projectsData: Project[] = [
  {
    id: 'prog-basica',
    title: 'Programación Básica',
    description: 'Un espacio diseñado para fortalecer el pensamiento computacional de los estudiantes de primeros ciclos, creando bases sólidas para su carrera profesional.',
    lumaUrl: 'https://lu.ma/lead-prog-basica',
    objective: 'Elevar el rendimiento académico en cursos de programación inicial.',
    audience: '1° a 3° ciclo',
    capacity: '50 estudiantes',
    modality: '100% Virtual vía Google Meet',
    scheduleTitle: 'Cronograma Marzo 2026',
    highlights: [
      'Mentorías personalizadas con expertos',
      'Certificación al completar el programa',
      'Acceso a comunidad exclusiva'
    ],
    sessions: [
      {
        id: 's1',
        week: 'Semana 1',
        title: 'Estructuras Condicionales',
        desc: 'Fundamentos de lógica If / Else y toma de decisiones.',
        date: '10 Mar 2026',
        time: '18:00 - 20:00',
        instructor: {
          name: 'Carlos Gamonal',
          role: 'Lead Developer',
          bio: 'Especialista en backend y arquitectura de software.',
          initials: 'CG'
        }
      },
      {
        id: 's2',
        week: 'Semana 2',
        title: 'Condicionales Anidados',
        desc: 'Evaluación de múltiples condiciones y lógica compleja.',
        date: '17 Mar 2026',
        time: '18:00 - 20:00',
        instructor: {
          name: 'Shay Guevara',
          role: 'Sub-director de Pilar',
          bio: 'Apasionado por la algoritmia y optimización.',
          initials: 'SG'
        }
      }
    ]
  },
  {
    id: 'data-structures',
    title: 'Estructuras de Datos',
    description: 'Taller intensivo para estudiantes intermedios centrado en dominar árboles, grafos y algoritmos de búsqueda para entrevistas técnicas.',
    lumaUrl: 'https://lu.ma/lead-data-structures',
    objective: 'Preparar para pruebas técnicas de empresas top.',
    audience: '4° a 6° ciclo',
    capacity: '30 estudiantes',
    modality: 'Híbrido (Campus + Zoom)',
    scheduleTitle: 'Cronograma Abril 2026',
    highlights: [
      'Problemas reales de entrevistas técnicas',
      'Sesiones prácticas con código en vivo',
      'Retroalimentación personalizada'
    ],
    sessions: [
      {
        id: 's3',
        week: 'Semana 1',
        title: 'Árboles Binarios y BST',
        desc: 'Implementación y recorrido de árboles binarios de búsqueda.',
        date: '05 Abr 2026',
        time: '16:00 - 18:30',
        instructor: {
          name: 'Ana López',
          role: 'Software Engineer',
          bio: 'Desarrolladora con experiencia en fintech.',
          initials: 'AL'
        }
      }
    ]
  }
];