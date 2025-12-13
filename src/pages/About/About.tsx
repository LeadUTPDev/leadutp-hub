import './About.css';

const valoresData = [
  {
    id: 1,
    title: 'Liderazgo',
    description: 'Fomentamos el desarrollo de habilidades de liderazgo en todos nuestros miembros.',
    icon: '🎯'
  },
  {
    id: 2,
    title: 'Innovación',
    description: 'Impulsamos la creatividad y la búsqueda de soluciones innovadoras.',
    icon: '💡'
  },
  {
    id: 3,
    title: 'Comunidad',
    description: 'Creemos en el poder de la colaboración y el trabajo en equipo.',
    icon: '🤝'
  },
  {
    id: 4,
    title: 'Excelencia',
    description: 'Buscamos la mejora continua en todo lo que hacemos.',
    icon: '⭐'
  }
];

const About = () => {
  return (
    <main className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-title">Sobre <span className="about-title-accent">Nosotros</span></h1>
            <p className="about-subtitle">
              Somos una comunidad de estudiantes apasionados por la tecnología y el liderazgo, 
              comprometidos con el desarrollo profesional y personal de nuestros miembros.
            </p>
          </div>
        </div>
      </section>

      {/* LEAD Meaning Section */}
      <section className="about-lead">
        <div className="about-lead-container">
          <h2 className="lead-title">¿Qué significa LEAD?</h2>
          <div className="lead-acronym">
            <div className="lead-letter">
              <span className="letter">L</span>
              <span className="word">Learn</span>
              <span className="meaning">Aprender</span>
            </div>
            <div className="lead-letter">
              <span className="letter">E</span>
              <span className="word">Explore</span>
              <span className="meaning">Explorar</span>
            </div>
            <div className="lead-letter">
              <span className="letter">A</span>
              <span className="word">Aspire</span>
              <span className="meaning">Aspirar</span>
            </div>
            <div className="lead-letter">
              <span className="letter">D</span>
              <span className="word">Discover</span>
              <span className="meaning">Descubrir</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-container">
          <div className="mission-card">
            <h2 className="mission-title">Nuestra Misión</h2>
            <p className="mission-text">
              Impulsar el talento humano de los estudiantes de la UTP a través de programas de 
              liderazgo, desarrollo profesional y excelencia académica, creando oportunidades 
              que transformen sus vidas y contribuyan al progreso de la sociedad.
            </p>
          </div>
          <div className="vision-card">
            <h2 className="vision-title">Nuestra Visión</h2>
            <p className="vision-text">
              Ser la comunidad universitaria líder en el desarrollo integral de profesionales 
              capaces de generar impacto positivo en la industria tecnológica y en la sociedad peruana.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-container">
          <h2 className="values-title">Nuestros Valores</h2>
          <p className="values-subtitle">Los principios que guían nuestras acciones</p>
          <div className="values-grid">
            {valoresData.map((valor) => (
              <div key={valor.id} className="value-card">
                <span className="value-icon">{valor.icon}</span>
                <h3 className="value-title">{valor.title}</h3>
                <p className="value-description">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
