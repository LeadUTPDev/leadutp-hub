import {
  Target, Users, BookOpen,
  Globe, Calendar, Presentation,
  FlaskConical, Wifi, Sparkles
} from 'lucide-react';
import type { Program, Principle, Metric } from './academic-excellence.types';

export const programs: Program[] = [
  {
    id: 'core',
    title: 'LEAD Core',
    path: '/pillars/academic-excellence/programs/lead-core',
    tag: 'Estrategia',
    desc: 'El motor del pilar. Diseñamos los sistemas de innovacion, coordinamos los bootcamps y los hackathons que ponen a prueba el limite de lo que los estudiantes pueden construir.',
    projects: ['Bootcamps', 'Hackathons', 'Sprints'],
    icon: <Target size={22} />,
    accent: '#b74515',
    num: '01'
  },
  {
    id: 'network',
    title: 'LEAD Network',
    path: '/pillars/academic-excellence/programs/lead-network',
    tag: 'Digital',
    desc: 'La columna digital de la comunidad. Desarrollamos y mantenemos la plataforma que conecta a todos los miembros, iterando continuamente sobre la experiencia.',
    projects: ['Web Dev', 'UI/UX', 'DevOps'],
    icon: <Wifi size={22} />,
    accent: '#0ea5e9',
    num: '02'
  },
  {
    id: 'sessions',
    title: 'Academic Sessions',
    path: '/pillars/academic-excellence/programs/academic-sessions',
    tag: 'Mentoria',
    desc: 'El sistema nervioso del aprendizaje. Estudiantes avanzados guian a los que inician, creando un ciclo continuo de transferencia de conocimiento y excelencia.',
    projects: ['Tutorias P2P', 'Guias de Estudio', 'Reforzamiento'],
    icon: <BookOpen size={22} />,
    accent: '#a855f7',
    num: '03'
  },
  {
    id: 'events',
    title: 'Events',
    path: '/pillars/academic-excellence/programs/events',
    tag: 'Comunidad',
    desc: 'Donde el conocimiento se vuelve tangible. Organizamos experiencias presenciales que conectan talento, alimentan colaboraciones y dejan huella.',
    projects: ['Tech Meetups', 'Workshops', 'Networking'],
    icon: <Calendar size={22} />,
    accent: '#22c55e',
    num: '04'
  },
  {
    id: 'flash-talks',
    title: 'Flash Talks',
    path: '/pillars/academic-excellence/programs/flash-talks',
    tag: 'Webinars',
    desc: 'Alta densidad de informacion, zero relleno. Ciclos de charlas cortas con expertos de la industria sobre tendencias que definen el futuro del tech.',
    projects: ['Webinars', 'Expert Talks', 'Casos de Industria'],
    icon: <Presentation size={22} />,
    accent: '#f59e0b',
    num: '05'
  },
  {
    id: 'research',
    title: 'Research Lab',
    path: '/pillars/academic-excellence/programs/research-lab',
    tag: 'I+D',
    desc: 'El espacio donde experimentamos sin miedo. Investigacion aplicada, contribuciones open source y proyectos que exploran las fronteras de lo posible.',
    projects: ['Tech Research', 'Open Source', 'Publicaciones'],
    icon: <FlaskConical size={22} />,
    accent: '#ec4899',
    num: '06'
  }
];

export const principles: Principle[] = [
  { label: 'Excelencia', icon: <Sparkles size={12} /> },
  { label: 'Innovacion', icon: <Target size={12} /> },
  { label: 'Impacto', icon: <Globe size={12} /> },
  { label: 'Aprendizaje Continuo', icon: <BookOpen size={12} /> },
  { label: 'Colaboracion', icon: <Users size={12} /> },
];

export const metrics: Metric[] = [
  { value: '+20%', label: 'Rendimiento academico objetivo', sub: 'Por ciclo' },
  { value: '70%', label: 'De participantes mejoran calificaciones', sub: 'Meta anual' },
  { value: '6', label: 'Programas activos simultaneamente', sub: 'Pilar activo' },
];