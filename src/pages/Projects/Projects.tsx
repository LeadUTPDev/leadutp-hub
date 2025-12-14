import { useState } from 'react';
import './Projects.css';

// Data de pilares para filtros
const pilaresFilter = [
  { id: 'all', name: 'Todos', color: '#7856ee' },
  { id: 'desarrollo-profesional', name: 'Desarrollo Profesional', color: '#d93340' },
  { id: 'liderazgo', name: 'Liderazgo', color: '#7856ee' },
  { id: 'excelencia-femenina', name: 'Excelencia Femenina', color: '#a6249d' },
  { id: 'desarrollo-capitulo', name: 'Desarrollo de Capítulo', color: '#0024d7' },
  { id: 'excelencia-academica', name: 'Excelencia Académica', color: '#b74515' },
  { id: 'lead-academia', name: 'LEAD Academia', color: '#c90fcf' },
];

// Data de proyectos
const projectsData = [
  {
    id: 1,
    title: 'Día de Integración de LEAD UTP en GLOBANT',
    description: 'Tarde que permitió conectar, compartir experiencias y fortalecer el liderazgo entre los miembros de la comunidad.',
    pilar: 'desarrollo-capitulo',
    image: '/images/pilares/desarrollo-capitulo-card.png',
    gradientFrom: '#0024d7',
    gradientTo: '#010726'
  },
  {
    id: 2,
    title: 'Cómo convertir tu MVP en una startup financiada',
    description: 'Charla que explicó cómo transformar un MVP en una empresa de alto impacto y con financiamiento.',
    pilar: 'excelencia-academica',
    image: '/images/pilares/excelencia-academica-card.png',
    gradientFrom: '#b74515',
    gradientTo: '#322100'
  },
  {
    id: 3,
    title: 'First Gen Day Perú',
    description: 'Evento que conmemoró a la primera generación universitaria, resaltando su esfuerzo y trayectoria académica.',
    pilar: 'desarrollo-capitulo',
    image: '/images/pilares/desarrollo-capitulo-card.png',
    gradientFrom: '#0024d7',
    gradientTo: '#010726'
  },
  {
    id: 4,
    title: 'Charla de n8n',
    description: 'Sesión informativa que mostró cómo n8n está revolucionando la automatización de procesos empresariales.',
    pilar: 'excelencia-academica',
    image: '/images/pilares/excelencia-academica-card.png',
    gradientFrom: '#b74515',
    gradientTo: '#322100'
  },
  {
    id: 5,
    title: 'Conecta con el Futuro – SJL',
    description: 'Evento de presentación de LEAD UTP realizado en el campus San Juan de Lurigancho.',
    pilar: 'lead-academia',
    image: '/images/pilares/lead-academia-card.png',
    gradientFrom: '#c90fcf',
    gradientTo: '#410043'
  },
  {
    id: 6,
    title: 'Torneo de Debate "DeepTech & IA"',
    description: 'Espacio de debate tecnológico que reunió a los distintos capítulos de LEAD para intercambiar ideas y perspectivas.',
    pilar: 'liderazgo',
    image: '/images/pilares/liderazgo-card.png',
    gradientFrom: '#7856ee',
    gradientTo: '#0b0033'
  },
  {
    id: 7,
    title: 'Teacher\'s AI',
    description: 'Capacitación dirigida a docentes escolares que fortaleció el uso de inteligencia artificial en la creación de sesiones de aprendizaje.',
    pilar: 'lead-academia',
    image: '/images/pilares/lead-academia-card.png',
    gradientFrom: '#c90fcf',
    gradientTo: '#410043'
  },
  {
    id: 8,
    title: 'Introducción a MicroPython para Machine Learning',
    description: 'Programa intensivo de dos días que permitió aprender MicroPython aplicado a soluciones de machine learning.',
    pilar: 'excelencia-academica',
    image: '/images/pilares/excelencia-academica-card.png',
    gradientFrom: '#b74515',
    gradientTo: '#322100'
  },
  {
    id: 9,
    title: 'Career Path',
    description: 'Programa de mentorías personalizadas que fortaleció la empleabilidad y el desarrollo profesional de los participantes.',
    pilar: 'desarrollo-profesional',
    image: '/images/pilares/desarrollo-profesional-card.png',
    gradientFrom: '#d93340',
    gradientTo: '#5a040b'
  },
  {
    id: 10,
    title: 'Data & IA Innovation Summit',
    description: 'Evento que promovió la transformación del mundo a través de la innovación y la inteligencia artificial junto a líderes tecnológicos.',
    pilar: 'desarrollo-capitulo',
    image: '/images/pilares/desarrollo-capitulo-card.png',
    gradientFrom: '#0024d7',
    gradientTo: '#010726'
  },
  {
    id: 11,
    title: 'Campamento STEAM "Campeonas"',
    description: 'Espacio formativo donde las participantes demostraron su talento mediante proyectos inspiradores.',
    pilar: 'excelencia-femenina',
    image: '/images/pilares/excelencia-femenina-card.png',
    gradientFrom: '#a6249d',
    gradientTo: '#370033'
  },
  {
    id: 12,
    title: 'Webinar "Becas que transforman"',
    description: 'Charla en la que becarias compartieron sus experiencias, procesos y oportunidades académicas internacionales.',
    pilar: 'excelencia-femenina',
    image: '/images/pilares/excelencia-femenina-card.png',
    gradientFrom: '#a6249d',
    gradientTo: '#370033'
  },
  {
    id: 13,
    title: 'Presentes en "Discovery Day"',
    description: 'Experiencia en la que estudiantes de secundaria conectaron con líderes universitarios para descubrir su potencial académico y profesional.',
    pilar: 'lead-academia',
    image: '/images/pilares/lead-academia-card.png',
    gradientFrom: '#c90fcf',
    gradientTo: '#410043'
  },
  {
    id: 14,
    title: 'LATAM Ready for Hackathons',
    description: 'Bootcamp intensivo de 5 meses que brindó mentoría especializada de empresas líderes de la región.',
    pilar: 'excelencia-academica',
    image: '/images/pilares/excelencia-academica-card.png',
    gradientFrom: '#b74515',
    gradientTo: '#322100'
  },
  {
    id: 15,
    title: 'Pequeños Einstein en "Ciudad de los Niños"',
    description: 'Bootcamp intensivo que introdujo a estudiantes escolares en programación e inteligencia artificial.',
    pilar: 'lead-academia',
    image: '/images/pilares/lead-academia-card.png',
    gradientFrom: '#c90fcf',
    gradientTo: '#410043'
  },
  {
    id: 16,
    title: 'Lidera los datos con empatía',
    description: 'Sesión que impulsó el desarrollo de perfiles que integran analítica de datos con habilidades humanas.',
    pilar: 'desarrollo-profesional',
    image: '/images/pilares/desarrollo-profesional-card.png',
    gradientFrom: '#d93340',
    gradientTo: '#5a040b'
  },
  {
    id: 17,
    title: 'Debate Tecnológico LEAD',
    description: 'Encuentro que fomentó la argumentación, el pensamiento crítico y el aprendizaje en comunidad.',
    pilar: 'liderazgo',
    image: '/images/pilares/liderazgo-card.png',
    gradientFrom: '#7856ee',
    gradientTo: '#0b0033'
  },
  {
    id: 18,
    title: 'Pasaporte Aprendly',
    description: 'Evento que orientó a los participantes sobre el acceso a becas, empleos remotos y oportunidades internacionales.',
    pilar: 'desarrollo-capitulo',
    image: '/images/pilares/desarrollo-capitulo-card.png',
    gradientFrom: '#0024d7',
    gradientTo: '#010726'
  },
  {
    id: 19,
    title: 'Cómo posicionarte como ingeniero en el mundo digital',
    description: 'Taller que enseñó a construir un perfil atractivo en LinkedIn y a realizar networking estratégico.',
    pilar: 'desarrollo-profesional',
    image: '/images/pilares/desarrollo-profesional-card.png',
    gradientFrom: '#d93340',
    gradientTo: '#5a040b'
  },
  {
    id: 20,
    title: 'Inglés + Tecnología: Impulsa tu futuro',
    description: 'Curso gratuito que brindó formación en inglés básico con enfoque tecnológico.',
    pilar: 'desarrollo-capitulo',
    image: '/images/pilares/desarrollo-capitulo-card.png',
    gradientFrom: '#0024d7',
    gradientTo: '#010726'
  },
  {
    id: 21,
    title: 'Evento de Presentación "LEAD UTP"',
    description: 'Primer evento oficial de la comunidad que sirvió como espacio para conectar y compartir experiencias.',
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
