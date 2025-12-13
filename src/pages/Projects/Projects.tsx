import { useState } from 'react';
import './Projects.css';

// Data de pilares para filtros
const pilaresFilter = [
  { id: 'all', name: 'Todos', color: '#7856ee' },
  { id: 'desarrollo-profesional', name: 'Desarrollo Profesional', color: '#d93340' },
  { id: 'liderazgo', name: 'Liderazgo', color: '#7856ee' },
  { id: 'excelencia-femenina', name: 'Excelencia Femenina', color: '#a6249d' },
  { id: 'desarrollo-capitulo', name: 'Desarrollo del Capítulo', color: '#0024d7' },
  { id: 'excelencia-academica', name: 'Excelencia Académica', color: '#b74515' },
  { id: 'lead-academia', name: 'LEAD Academia', color: '#c90fcf' },
];

// Data de proyectos (ejemplo)
const projectsData = [
  {
    id: 1,
    title: 'LATAM ready for Hackatons',
    description: 'Bootcamp intensivo de 5 meses con mentores de empresas líderes.',
    pilar: 'excelencia-academica',
    image: '/images/pilares/excelencia-academica-card.png',
    gradientFrom: '#b74515',
    gradientTo: '#322100'
  },
  {
    id: 2,
    title: 'TEMPORAL',
    description: 'Programa de mentoría y networking para mujeres en carreras STEM.',
    pilar: 'excelencia-femenina',
    image: '/images/pilares/excelencia-femenina-card.png',
    gradientFrom: '#a6249d',
    gradientTo: '#370033'
  },
  {
    id: 3,
    title: 'Torneo de Debate "DeepTech & IA"',
    description: 'Debate tecnológico entre los diferentes capítulos de LEAD.',
    pilar: 'liderazgo',
    image: '/images/pilares/liderazgo-card.png',
    gradientFrom: '#7856ee',
    gradientTo: '#0b0033'
  },
  {
    id: 4,
    title: 'Pequeños Einstein en "Ciudad de los Niños"',
    description: 'Bootcamp intensivo de programación e IA para estudiantes escolares',
    pilar: 'lead-academia',
    image: '/images/pilares/lead-academia-card.png',
    gradientFrom: '#c90fcf',
    gradientTo: '#410043'
  },
  {
    id: 5,
    title: 'TEMPORAL',
    description: 'Programa de desarrollo de habilidades blandas demandadas por empresas.',
    pilar: 'desarrollo-profesional',
    image: '/images/pilares/desarrollo-profesional-card.png',
    gradientFrom: '#d93340',
    gradientTo: '#5a040b'
  },
  {
    id: 6,
    title: 'TTEMPORAL',
    description: 'Actividades de integración para fortalecer el trabajo en equipo.',
    pilar: 'desarrollo-capitulo',
    image: '/images/pilares/desarrollo-capitulo-card.png',
    gradientFrom: '#0024d7',
    gradientTo: '#010726'
  },
  {
    id: 7,
    title: 'TEMPORAL',
    description: 'Competencia de desarrollo de soluciones tecnológicas en 48 horas con mentores de empresas líderes.',
    pilar: 'excelencia-academica',
    image: '/images/pilares/excelencia-academica-card.png',
    gradientFrom: '#b74515',
    gradientTo: '#322100'
  },
  {
    id: 8,
    title: 'TEMPORAL',
    description: 'Programa de acompañamiento para estudiantes mujeres con profesionales destacadas del sector.',
    pilar: 'excelencia-femenina',
    image: '/images/pilares/excelencia-femenina-card.png',
    gradientFrom: '#a6249d',
    gradientTo: '#370033'
  },
  {
    id: 9,
    title: 'TEMPORAL',
    description: 'Noches de charlas inspiracionales con líderes de la industria y emprendedores exitosos.',
    pilar: 'liderazgo',
    image: '/images/pilares/liderazgo-card.png',
    gradientFrom: '#7856ee',
    gradientTo: '#0b0033'
  },
  {
    id: 10,
    title: 'TEMPORAL',
    description: 'Talleres de robótica y programación básica para niños de 8 a 12 años.',
    pilar: 'lead-academia',
    image: '/images/pilares/lead-academia-card.png',
    gradientFrom: '#c90fcf',
    gradientTo: '#410043'
  },
  {
    id: 11,
    title: 'TEMPORAL',
    description: 'Sesiones prácticas para crear CVs profesionales y preparación para entrevistas laborales.',
    pilar: 'desarrollo-profesional',
    image: '/images/pilares/desarrollo-profesional-card.png',
    gradientFrom: '#d93340',
    gradientTo: '#5a040b'
  },
  {
    id: 12,
    title: 'TEMPORAL',
    description: 'Eventos de networking con empresas y startups para conectar talento con oportunidades.',
    pilar: 'desarrollo-capitulo',
    image: '/images/pilares/desarrollo-capitulo-card.png',
    gradientFrom: '#0024d7',
    gradientTo: '#010726'
  },
  {
    id: 13,
    title: 'Introduccion a MicroPython para Machine Learning',
    description: 'Programa intensivo de 2 días para aprender MicroPython aplicado a ML.',
    pilar: 'excelencia-academica',
    image: '/images/pilares/excelencia-academica-card.png',
    gradientFrom: '#b74515',
    gradientTo: '#322100'
  },
  {
    id: 14,
    title: 'TEMPORAL',
    description: 'Cumbre anual que celebra los logros de mujeres en tecnología e inspira a las nuevas generaciones.',
    pilar: 'excelencia-femenina',
    image: '/images/pilares/excelencia-femenina-card.png',
    gradientFrom: '#a6249d',
    gradientTo: '#370033'
  },
  {
    id: 15,
    title: 'TEMPORAL',
    description: 'Laboratorio para desarrollar habilidades de comunicación efectiva y presentaciones impactantes.',
    pilar: 'liderazgo',
    image: '/images/pilares/liderazgo-card.png',
    gradientFrom: '#7856ee',
    gradientTo: '#0b0033'
  },
  {
    id: 16,
    title: 'TEMPORAL',
    description: 'Programa de introducción a la programación para adolescentes de secundaria.',
    pilar: 'lead-academia',
    image: '/images/pilares/lead-academia-card.png',
    gradientFrom: '#c90fcf',
    gradientTo: '#410043'
  },
  {
    id: 17,
    title: 'TEMPORAL',
    description: 'Taller para optimizar perfiles de LinkedIn y estrategias de marca personal.',
    pilar: 'desarrollo-profesional',
    image: '/images/pilares/desarrollo-profesional-card.png',
    gradientFrom: '#d93340',
    gradientTo: '#5a040b'
  },
  {
    id: 18,
    title: 'TEMPORAL',
    description: 'Festival anual de tecnología con competencias, stands y actividades para toda la comunidad.',
    pilar: 'desarrollo-capitulo',
    image: '/images/pilares/desarrollo-capitulo-card.png',
    gradientFrom: '#0024d7',
    gradientTo: '#010726'
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.pilar === activeFilter);

  return (
    <main className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-container">
          <h1 className="projects-title">
            Nuestros <span className="projects-title-accent">Proyectos</span>
          </h1>
          <p className="projects-subtitle">
            Descubre las iniciativas que estamos desarrollando para transformar el futuro de nuestros estudiantes.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="projects-filters">
        <div className="filters-container">
          {pilaresFilter.map((pilar) => (
            <button
              key={pilar.id}
              className={`filter-btn ${activeFilter === pilar.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(pilar.id)}
              style={{ 
                '--filter-color': pilar.color,
                borderColor: activeFilter === pilar.id ? pilar.color : 'transparent',
                background: activeFilter === pilar.id ? `${pilar.color}20` : 'transparent'
              } as React.CSSProperties}
            >
              {pilar.name}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="projects-grid-container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div 
                  className="project-image"
                  style={{
                    background: `linear-gradient(to bottom, ${project.gradientFrom}, ${project.gradientTo})`
                  }}
                >
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <span 
                    className="project-badge"
                    style={{ backgroundColor: project.gradientFrom }}
                  >
                    {pilaresFilter.find(p => p.id === project.pilar)?.name}
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <button className="project-btn">Ver más</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
