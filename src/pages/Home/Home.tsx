import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Data de los pilares
const pilaresData = [
  {
    id: 1,
    title: 'Desarrollo Profesional',
    description: 'Impulsamos las habilidades blandas necesarias que las mejores empresas demandan.',
    image: '/images/pilares/desarrollo-profesional-card.png',
    gradientFrom: '#d93340',
    gradientTo: '#5a040b'
  },
  {
    id: 2,
    title: 'Liderazgo',
    description: 'Creamos oportunidades para pulir habilidades de liderazgo en los estudiantes.',
    image: '/images/pilares/liderazgo-card.png',
    gradientFrom: '#7856ee',
    gradientTo: '#0b0033'
  },
  {
    id: 3,
    title: 'Excelencia Femenina',
    description: 'Empoderamos a mujeres líderes en la industria STEM para cerrar la brecha de género.',
    image: '/images/pilares/excelencia-femenina-card.png',
    gradientFrom: '#a6249d',
    gradientTo: '#370033'
  },
  {
    id: 4,
    title: 'Desarrollo del Capítulo',
    description: 'Desarrollamos actividades y mejoras en el desempeño de nuestros voluntarios.',
    image: '/images/pilares/desarrollo-capitulo-card.png',
    gradientFrom: '#0024d7',
    gradientTo: '#010726'
  },
  {
    id: 5,
    title: 'Excelencia Académica',
    description: 'Generamos oportunidades de aprendizaje continuo de STEM para todos.',
    image: '/images/pilares/excelencia-academica-card.png',
    gradientFrom: '#b74515',
    gradientTo: '#322100'
  },
  {
    id: 6,
    title: 'LEAD Academia',
    description: 'Difundimos conocimiento y pasión por la tecnología con los jóvenes de colegio.',
    image: '/images/pilares/lead-academia-card.png',
    gradientFrom: '#c90fcf',
    gradientTo: '#410043'
  }
];

// Data de las alianzas
const alianzasData = [
  { id: 1, name: 'DSC UTP', logo: '/images/alianzas/logo-dsc-utp.png' },
  { id: 2, name: 'CONEII', logo: '/images/alianzas/logo-coneii.png' },
  { id: 3, name: 'Aeditip', logo: '/images/alianzas/logo-aeditip.png' },
  { id: 4, name: 'Levo Learning', logo: '/images/alianzas/logo-levo-learning.png' },
  { id: 5, name: 'CV Matcher', logo: '/images/alianzas/logo-cv-matcher.png' },
  { id: 6, name: 'IBM Z', logo: '/images/alianzas/logo-ibm-z.png' },
  { id: 7, name: 'Face to Face', logo: '/images/alianzas/logo-face-to-face.png' }
];

const Home = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 376; // card width + gap
      const newScrollLeft = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Donde los sueños <span className="hero-title-accent">se cumplen</span>
              </h1>
              <p className="hero-subtitle">
                La comunidad que impulsa el talento humano para construir un mejor mañana.
              </p>
            </div>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/projects')}>Descubre proyectos</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero-team.png" alt="Equipo Lead UTP en Globant" />
          </div>
        </div>
      </section>

      {/* Alianzas Section */}
      <section className="alianzas">
        <div className="alianzas-container">
          <h2 className="alianzas-title">Alianzas LEAD</h2>
          <p className="alianzas-subtitle">
            Impulsamos el futuro con el apoyo de líderes en tecnología y educación
          </p>
          <div className="alianzas-marquee">
            <div className="alianzas-track">
              {/* Primera copia de logos */}
              {alianzasData.map((alianza) => (
                <div key={alianza.id} className="alianza-item">
                  <img src={alianza.logo} alt={alianza.name} />
                </div>
              ))}
              {/* Segunda copia para efecto infinito */}
              {alianzasData.map((alianza) => (
                <div key={`dup-${alianza.id}`} className="alianza-item">
                  <img src={alianza.logo} alt={alianza.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Section */}
      <section className="pilares">
        <div className="pilares-container">
          <h2 className="pilares-title">Pilares LEAD</h2>
          <p className="pilares-subtitle">
            Nuestra organización que hace posible nuevas oportunidades
          </p>
          
          <div className="pilares-carousel-wrapper">
            {canScrollLeft && (
              <button 
                className="carousel-btn carousel-btn-left"
                onClick={() => scrollCarousel('left')}
                aria-label="Ver pilares anteriores"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}
            
            <div 
              className="pilares-carousel" 
              ref={carouselRef}
              onScroll={checkScrollButtons}
            >
              {pilaresData.map((pilar) => (
                <div key={pilar.id} className="pilar-card">
                  <div 
                    className="pilar-image"
                    style={{
                      background: `linear-gradient(to bottom, ${pilar.gradientFrom}, ${pilar.gradientTo})`
                    }}
                  >
                    <img src={pilar.image} alt={pilar.title} />
                  </div>
                  <div className="pilar-content">
                    <h3 className="pilar-title">{pilar.title}</h3>
                    <p className="pilar-description">{pilar.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {canScrollRight && (
              <button 
                className="carousel-btn carousel-btn-right"
                onClick={() => scrollCarousel('right')}
                aria-label="Ver más pilares"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
