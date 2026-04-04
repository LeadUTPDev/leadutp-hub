import type { Project } from './academic-sessions.type';

export const projectsData: Project[] = [
  // ── PROYECTOS EXISTENTES (NO MODIFICADOS) ──────────────────────────────────
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
    year: 2026,
    status: 'activo',
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
    year: 2026,
    status: 'activo',
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
  },

  // ── PROYECTOS NUEVOS 2026 ──────────────────────────────────────────────────
  {
    id: 'web-fullstack',
    title: 'Desarrollo Web Full Stack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aprende React, Node.js y bases de datos relacionales construyendo proyectos reales desde cero.',
    lumaUrl: 'https://lu.ma/lead-web-fullstack',
    objective: 'Dominar el stack completo de desarrollo web moderno.',
    audience: '3° a 5° ciclo',
    capacity: '40 estudiantes',
    modality: '100% Virtual vía Zoom',
    scheduleTitle: 'Cronograma Mayo 2026',
    highlights: [
      'Proyecto final deployado en producción',
      'Portfolio listo para el mercado laboral',
      'Code reviews con ingenieros senior'
    ],
    year: 2026,
    status: 'próximo',
    sessions: [
      {
        id: 'wfs-s1',
        week: 'Semana 1',
        title: 'Fundamentos de React',
        desc: 'Componentes, props, estado y ciclo de vida en React 18.',
        date: '05 May 2026',
        time: '19:00 - 21:00',
        instructor: {
          name: 'Diego Ramírez',
          role: 'Frontend Engineer',
          bio: 'Especialista en ecosistema React con 5 años de experiencia.',
          initials: 'DR'
        }
      },
      {
        id: 'wfs-s2',
        week: 'Semana 2',
        title: 'APIs con Node.js y Express',
        desc: 'Construcción de REST APIs robustas con autenticación JWT.',
        date: '12 May 2026',
        time: '19:00 - 21:00',
        instructor: {
          name: 'Lucia Mendoza',
          role: 'Backend Developer',
          bio: 'Desarrolladora fullstack con foco en microservicios.',
          initials: 'LM'
        }
      },
      {
        id: 'wfs-s3',
        week: 'Semana 3',
        title: 'Bases de Datos con PostgreSQL',
        desc: 'Diseño de esquemas, relaciones y consultas optimizadas.',
        date: '19 May 2026',
        time: '19:00 - 21:00',
        instructor: {
          name: 'Marco Torres',
          role: 'Database Engineer',
          bio: 'Experto en diseño de bases de datos y optimización de queries.',
          initials: 'MT'
        }
      }
    ]
  },
  {
    id: 'machine-learning-intro',
    title: 'Introducción a Machine Learning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explora los fundamentos del aprendizaje automático con Python, scikit-learn y casos de uso del mundo real.',
    lumaUrl: 'https://lu.ma/lead-ml-intro',
    objective: 'Comprender y aplicar algoritmos de ML supervisado y no supervisado.',
    audience: '5° a 8° ciclo',
    capacity: '25 estudiantes',
    modality: 'Híbrido (Campus + Discord)',
    scheduleTitle: 'Cronograma Junio 2026',
    highlights: [
      'Proyecto de clasificación con dataset real',
      'Acceso a GPU cloud para entrenar modelos',
      'Certificado avalado por el pilar de Innovación'
    ],
    year: 2026,
    status: 'próximo',
    sessions: [
      {
        id: 'ml-s1',
        week: 'Semana 1',
        title: 'Python para Data Science',
        desc: 'NumPy, Pandas y visualización con Matplotlib y Seaborn.',
        date: '02 Jun 2026',
        time: '17:00 - 19:30',
        instructor: {
          name: 'Valentina Cruz',
          role: 'Data Scientist',
          bio: 'Científica de datos con experiencia en retail y salud.',
          initials: 'VC'
        }
      },
      {
        id: 'ml-s2',
        week: 'Semana 2',
        title: 'Regresión y Clasificación',
        desc: 'Algoritmos lineales, árboles de decisión y evaluación de modelos.',
        date: '09 Jun 2026',
        time: '17:00 - 19:30',
        instructor: {
          name: 'Valentina Cruz',
          role: 'Data Scientist',
          bio: 'Científica de datos con experiencia en retail y salud.',
          initials: 'VC'
        }
      }
    ]
  },
  {
    id: 'git-devops',
    title: 'Git y Cultura DevOps',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aprende control de versiones profesional, CI/CD y buenas prácticas de colaboración en equipos de desarrollo.',
    lumaUrl: 'https://lu.ma/lead-git-devops',
    objective: 'Adoptar flujos de trabajo colaborativos de nivel profesional.',
    audience: '2° a 6° ciclo',
    capacity: '60 estudiantes',
    modality: '100% Virtual vía Google Meet',
    scheduleTitle: 'Cronograma Julio 2026',
    highlights: [
      'Simulación de trabajo en equipo real con GitHub',
      'Configuración de pipelines CI/CD con GitHub Actions',
      'Buenas prácticas de code review'
    ],
    year: 2026,
    status: 'próximo',
    sessions: [
      {
        id: 'gd-s1',
        week: 'Semana 1',
        title: 'Git desde cero',
        desc: 'Commits, branches, merge, rebase y resolución de conflictos.',
        date: '07 Jul 2026',
        time: '18:00 - 20:00',
        instructor: {
          name: 'Rodrigo Salas',
          role: 'DevOps Engineer',
          bio: 'Especialista en infraestructura y automatización.',
          initials: 'RS'
        }
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'Diseño UI/UX con Figma',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Domina los principios de diseño centrado en el usuario y crea interfaces modernas y accesibles con Figma.',
    lumaUrl: 'https://lu.ma/lead-uiux',
    objective: 'Diseñar interfaces atractivas y accesibles con metodología UX.',
    audience: '1° a 8° ciclo',
    capacity: '35 estudiantes',
    modality: 'Híbrido (Campus + Figma Live)',
    scheduleTitle: 'Cronograma Agosto 2026',
    highlights: [
      'Portfolio de 3 proyectos de diseño',
      'Principios de accesibilidad WCAG 2.1',
      'Feedback de diseñadores profesionales'
    ],
    year: 2026,
    status: 'próximo',
    sessions: [
      {
        id: 'ux-s1',
        week: 'Semana 1',
        title: 'Fundamentos de UX Research',
        desc: 'User personas, journey maps y metodología de entrevistas.',
        date: '04 Ago 2026',
        time: '17:00 - 19:00',
        instructor: {
          name: 'Camila Flores',
          role: 'UX Designer',
          bio: 'Diseñadora con foco en investigación y sistemas de diseño.',
          initials: 'CF'
        }
      },
      {
        id: 'ux-s2',
        week: 'Semana 2',
        title: 'Sistema de Diseño en Figma',
        desc: 'Components, auto-layout, variables y prototyping avanzado.',
        date: '11 Ago 2026',
        time: '17:00 - 19:00',
        instructor: {
          name: 'Camila Flores',
          role: 'UX Designer',
          bio: 'Diseñadora con foco en investigación y sistemas de diseño.',
          initials: 'CF'
        }
      }
    ]
  },

  // ── PROYECTOS 2025 ──────────────────────────────────────────────────────────
  {
    id: 'algo-competitive',
    title: 'Algoritmos Competitivos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Preparación intensiva para competencias de programación como ICPC con resolución de problemas avanzados.',
    lumaUrl: 'https://lu.ma/lead-algo-comp',
    objective: 'Desarrollar habilidades para competencias de programación.',
    audience: '3° a 8° ciclo',
    capacity: '20 estudiantes',
    modality: '100% Virtual vía Codeforces',
    scheduleTitle: 'Cronograma Sep 2025',
    highlights: [
      'Participación en torneos universitarios',
      'Más de 200 problemas resueltos',
      'Guía completa de algoritmos y estructuras'
    ],
    year: 2025,
    status: 'finalizado',
    sessions: [
      {
        id: 'ac-s1',
        week: 'Semana 1',
        title: 'Programación Dinámica',
        desc: 'Memoización, tabulación y patrones clásicos de DP.',
        date: '08 Sep 2025',
        time: '20:00 - 22:00',
        instructor: {
          name: 'Felipe Navarro',
          role: 'Competitive Programmer',
          bio: 'Candidato a Master en Codeforces y finalista ICPC.',
          initials: 'FN'
        }
      },
      {
        id: 'ac-s2',
        week: 'Semana 2',
        title: 'Grafos y Algoritmos de Caminos',
        desc: 'BFS, DFS, Dijkstra y Bellman-Ford en problemas reales.',
        date: '15 Sep 2025',
        time: '20:00 - 22:00',
        instructor: {
          name: 'Felipe Navarro',
          role: 'Competitive Programmer',
          bio: 'Candidato a Master en Codeforces y finalista ICPC.',
          initials: 'FN'
        }
      },
      {
        id: 'ac-s3',
        week: 'Semana 3',
        title: 'Teoría de Números y Combinatoria',
        desc: 'Criba de Eratóstenes, módulo aritmético y combinatoria.',
        date: '22 Sep 2025',
        time: '20:00 - 22:00',
        instructor: {
          name: 'Gabriela Ríos',
          role: 'Research Engineer',
          bio: 'Investigadora en algoritmos con publicaciones en ACM.',
          initials: 'GR'
        }
      }
    ]
  },
  {
    id: 'mobile-react-native',
    title: 'Apps Móviles con React Native',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crea aplicaciones móviles multiplataforma para iOS y Android con React Native y Expo.',
    lumaUrl: 'https://lu.ma/lead-react-native',
    objective: 'Desarrollar aplicaciones móviles listas para publicar en tiendas.',
    audience: '4° a 7° ciclo',
    capacity: '28 estudiantes',
    modality: 'Híbrido (Campus + Expo Snack)',
    scheduleTitle: 'Cronograma Nov 2025',
    highlights: [
      'App publicada en Google Play Store',
      'Navegación avanzada con Expo Router',
      'Integración con APIs externas'
    ],
    year: 2025,
    status: 'finalizado',
    sessions: [
      {
        id: 'rn-s1',
        week: 'Semana 1',
        title: 'Expo y Primeros Componentes',
        desc: 'Setup, StyleSheet, View, Text e interacciones táctiles.',
        date: '03 Nov 2025',
        time: '18:00 - 20:30',
        instructor: {
          name: 'Sebastián Park',
          role: 'Mobile Developer',
          bio: 'Desarrollador móvil con apps en más de 10 países.',
          initials: 'SP'
        }
      },
      {
        id: 'rn-s2',
        week: 'Semana 2',
        title: 'Navegación y Estado Global',
        desc: 'Expo Router, Zustand y gestión de estado en apps reales.',
        date: '10 Nov 2025',
        time: '18:00 - 20:30',
        instructor: {
          name: 'Sebastián Park',
          role: 'Mobile Developer',
          bio: 'Desarrollador móvil con apps en más de 10 países.',
          initials: 'SP'
        }
      }
    ]
  },
  {
    id: 'cybersecurity-101',
    title: 'Ciberseguridad 101',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Introducción al mundo de la seguridad informática: hacking ético, vulnerabilidades web y buenas prácticas de seguridad.',
    lumaUrl: 'https://lu.ma/lead-cybersec',
    objective: 'Comprender y prevenir vulnerabilidades en sistemas modernos.',
    audience: '4° a 8° ciclo',
    capacity: '22 estudiantes',
    modality: '100% Virtual vía TryHackMe',
    scheduleTitle: 'Cronograma Oct 2025',
    highlights: [
      'Laboratorios prácticos en entornos virtuales',
      'Certificado de Ethical Hacker Fundamentals',
      'Reporte de vulnerabilidades real'
    ],
    year: 2025,
    status: 'finalizado',
    sessions: [
      {
        id: 'cs-s1',
        week: 'Semana 1',
        title: 'OWASP Top 10',
        desc: 'Vulnerabilidades web más comunes y cómo explotarlas éticamente.',
        date: '06 Oct 2025',
        time: '19:00 - 21:00',
        instructor: {
          name: 'Alicia Vega',
          role: 'Security Analyst',
          bio: 'Especialista en seguridad ofensiva y defensiva.',
          initials: 'AV'
        }
      }
    ]
  },

  // ── PROYECTOS 2025 adicionales ─────────────────────────────────────────────
  {
    id: 'cloud-aws',
    title: 'Cloud Computing con AWS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aprende a desplegar infraestructura escalable en Amazon Web Services usando S3, EC2, Lambda y más.',
    lumaUrl: 'https://lu.ma/lead-aws',
    objective: 'Certificarse en fundamentos de arquitectura cloud con AWS.',
    audience: '5° a 9° ciclo',
    capacity: '20 estudiantes',
    modality: '100% Virtual vía AWS Academy',
    scheduleTitle: 'Cronograma Ago 2025',
    highlights: [
      'Preparación para AWS Certified Cloud Practitioner',
      'Laboratorios con créditos cloud reales',
      'Arquitecturas serverless y contenedores'
    ],
    year: 2025,
    status: 'finalizado',
    sessions: [
      {
        id: 'aws-s1',
        week: 'Semana 1',
        title: 'Computo y Almacenamiento en AWS',
        desc: 'EC2, S3, IAM y fundamentos de la consola de AWS.',
        date: '11 Ago 2025',
        time: '18:00 - 20:00',
        instructor: {
          name: 'Tomás Herrera',
          role: 'Cloud Architect',
          bio: 'Arquitecto cloud certificado AWS Solutions Architect.',
          initials: 'TH'
        }
      },
      {
        id: 'aws-s2',
        week: 'Semana 2',
        title: 'Serverless y Lambda',
        desc: 'Funciones serverless, API Gateway y eventos en AWS.',
        date: '18 Ago 2025',
        time: '18:00 - 20:00',
        instructor: {
          name: 'Tomás Herrera',
          role: 'Cloud Architect',
          bio: 'Arquitecto cloud certificado AWS Solutions Architect.',
          initials: 'TH'
        }
      }
    ]
  },
  {
    id: 'testing-qa',
    title: 'Testing y Quality Assurance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aprende a garantizar la calidad del software con pruebas unitarias, de integración y end-to-end.',
    lumaUrl: 'https://lu.ma/lead-testing',
    objective: 'Implementar estrategias de testing en proyectos reales.',
    audience: '4° a 7° ciclo',
    capacity: '30 estudiantes',
    modality: 'Híbrido (Campus + GitHub)',
    scheduleTitle: 'Cronograma Dic 2025',
    highlights: [
      'Testing con Jest, Vitest y Playwright',
      'Integración en pipelines CI/CD',
      'Test-Driven Development (TDD) en práctica'
    ],
    year: 2025,
    status: 'finalizado',
    sessions: [
      {
        id: 'tq-s1',
        week: 'Semana 1',
        title: 'Unit Testing con Jest',
        desc: 'Mocks, spies, cobertura de código y buenas prácticas.',
        date: '01 Dic 2025',
        time: '17:00 - 19:00',
        instructor: {
          name: 'Natalia Quispe',
          role: 'QA Engineer',
          bio: 'Especialista en automatización de pruebas y TDD.',
          initials: 'NQ'
        }
      }
    ]
  },
];