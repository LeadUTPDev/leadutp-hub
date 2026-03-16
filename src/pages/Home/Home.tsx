import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

import {
  heroContent,
  heroImages,
  alianzasData,
  alianzasSectionContent,
  pilaresData,
  pilaresSectionContent,
} from './Homedata';

const CAROUSEL_SCROLL_AMOUNT = 376; // card width + gap
const HERO_INTERVAL_MS       = 5000;

const Home = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeImage,    setActiveImage]    = useState(0);

  // ── Auto-rotate hero carousel ─────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, HERO_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  // ── Scroll Reveal (IntersectionObserver) ──────
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '.sr, .sr-left, .sr-right, .sr-scale'
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ── Pilares carousel helpers ──────────────────
  const checkScrollButtons = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollTo({
      left: carouselRef.current.scrollLeft +
            (direction === 'left' ? -CAROUSEL_SCROLL_AMOUNT : CAROUSEL_SCROLL_AMOUNT),
      behavior: 'smooth',
    });
    setTimeout(checkScrollButtons, 300);
  };

  return (
    <main className="home">

      {/* ── Hero ──────────────────────────────── */}
      <section className="hero">
        <div className="hero-container">

          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                {heroContent.title}{' '}
                <span className="hero-title-accent">{heroContent.titleAccent}</span>
              </h1>
              <p className="hero-subtitle">{heroContent.subtitle}</p>
            </div>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate(heroContent.ctaPath)}
              >
                {heroContent.ctaLabel}
              </button>
            </div>
          </div>

          <div
            className="hero-image-carousel"
            role="region"
            aria-label="Galería de imágenes LEAD UTP"
          >
            {heroImages.map((img, idx) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                className={`hero-carousel-slide ${idx === activeImage ? 'active' : ''}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            ))}
            <div className="hero-carousel-indicators">
              {heroImages.map((img, idx) => (
                <button
                  key={img.id}
                  className={`hero-carousel-indicator ${idx === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(idx)}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Alianzas ──────────────────────────── */}
      <section className="alianzas">
        <div className="alianzas-container">

          <h2 className="alianzas-title sr">
            {alianzasSectionContent.title}
          </h2>
          <p className="alianzas-subtitle sr sr-d1">
            {alianzasSectionContent.subtitle}
          </p>

          <div className="alianzas-marquee sr sr-d2">
            <div className="alianzas-track">
              {alianzasData.map((alianza) => (
                <div key={alianza.id} className="alianza-item">
                  <img src={alianza.logo} alt={alianza.name} />
                </div>
              ))}
              {/* Segunda copia para loop infinito */}
              {alianzasData.map((alianza) => (
                <div key={`dup-${alianza.id}`} className="alianza-item">
                  <img src={alianza.logo} alt={alianza.name} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Pilares ───────────────────────────── */}
      <section className="pilares">
        <div className="pilares-container">

          <h2 className="pilares-title sr">
            {pilaresSectionContent.title}
          </h2>
          <p className="pilares-subtitle sr sr-d1">
            {pilaresSectionContent.subtitle}
          </p>

          <div className="pilares-carousel-wrapper">
            {canScrollLeft && (
              <button
                className="carousel-btn carousel-btn-left"
                onClick={() => scrollCarousel('left')}
                aria-label="Ver pilares anteriores"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}

            <div
              className="pilares-carousel sr sr-d2"
              ref={carouselRef}
              onScroll={checkScrollButtons}
            >
              {pilaresData.map((pilar, idx) => (
                <div
                  key={pilar.id}
                  className={`pilar-card sr sr-d${Math.min(idx + 1, 6)}`}
                >
                  <div
                    className="pilar-image"
                    style={{
                      background: `linear-gradient(to bottom, ${pilar.gradientFrom}, ${pilar.gradientTo})`,
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
                  <polyline points="9 18 15 12 9 6" />
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