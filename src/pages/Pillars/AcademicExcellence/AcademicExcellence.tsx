import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, easeOut } from 'framer-motion';
import {
  Target, Users, BookOpen, Globe,
  ArrowRight, ChevronDown, Code2, CheckCircle2
} from 'lucide-react';
import './AcademicExcellence.css';
import { programs, principles, metrics } from './academic-excellence.data';

const GrainOverlay = () => <div className="ae-grain" aria-hidden="true" />;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: easeOut }
};

const AcademicExcellence = () => {
  const navigate = useNavigate();
  const programsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const scrollToPrograms = () => {
    programsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProgramClick = (path: string) => {
    navigate(path);
  };

  return (
    <main className="ae-main">
      <GrainOverlay />

      {/* Background Effects - Homologado con AcademicSessions */}
      <div className="ae-bg-effects">
        <div className="ae-orb ae-orb-1" />
        <div className="ae-orb ae-orb-2" />
        <div className="ae-orb ae-orb-3" />
      </div>

      {/* === HERO === */}
      <section className="ae-hero" ref={heroRef}>
        <div className="ae-scanlines" />

        <motion.div className="ae-hero-inner container" style={{ y: heroY, opacity: heroOpacity }}>

          <motion.div
            className="ae-eyebrow"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <span className="ae-eyebrow-dot" />
            Pilar de Excelencia Academica
          </motion.div>

          <div className="ae-hero-headline">
            <motion.h1
              initial={{ opacity: 0, y: 50, skewY: 2 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            >
              <span className="ae-word-light">Excelencia</span>
              <span className="ae-word-accent">Academica</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.6 }}
            >
              <p className="ae-hero-desc">
                No es un programa de tutorias. Es un ecosistema de alto rendimiento disenado para convertir el esfuerzo individual en ventaja colectiva. Construimos los lideres tecnicos que el mercado exige.
              </p>
              <div className="ae-hero-actions">
                <button className="ae-btn-primary" onClick={scrollToPrograms}>
                  Ver Programas <ArrowRight size={16} />
                </button>
                <button className="ae-btn-ghost">
                  Nuestro Proposito
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="ae-hero-metrics"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.95 }}
          >
            {metrics.map((m, i) => (
              <div key={i} className="ae-metric-item">
                <span className="ae-metric-value">{m.value}</span>
                <div className="ae-metric-text">
                  <span className="ae-metric-label">{m.label}</span>
                  <span className="ae-metric-sub">{m.sub}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="ae-scroll-cue"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToPrograms}
        >
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* === LEADERSHIP === */}
      <section className="ae-leadership container">
        <motion.div {...fadeUp}>
          <span className="ae-section-tag">Direccion</span>
          <h2>Quienes lo lideran</h2>
        </motion.div>
        <div className="ae-leaders-row">
          {[
            { name: 'Carlos Gamonal', role: 'Director de Pilar', initials: 'CG' },
            { name: 'Shay Guzman', role: 'Sub-director de Pilar', initials: 'SF' }
          ].map((l, i) => (
            <motion.div
              key={i}
              className="ae-leader glass-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
            >
              <div className="ae-leader-avatar">
                <span className="ae-leader-initials">{l.initials}</span>
                <div className="ae-avatar-ring" />
              </div>
              <div className="ae-leader-info">
                <h4>{l.name}</h4>
                <span className="ae-leader-role">{l.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === ABOUT === */}
      <section className="ae-about container">
        <div className="ae-about-grid">

          <motion.div
            className="ae-image-block"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="ae-img-placeholder glass-card">
              <div className="ae-img-placeholder-inner">
                <Code2 size={28} className="ae-img-icon" />
                <span>Imagen del Pilar</span>
              </div>
              <div className="ae-img-corner ae-img-corner-tl" />
              <div className="ae-img-corner ae-img-corner-br" />
            </div>
            <div className="ae-float-badge">
              <Target size={13} />
              <span>Pilar Top</span>
            </div>
          </motion.div>

          <div className="ae-about-content">
            <motion.span className="ae-section-tag" {...fadeUp}>
              Que es el Pilar?
            </motion.span>

            <motion.h2 {...fadeUp} transition={{ duration: 0.65, delay: 0.1 }}>
              Un acelerador de talento disfrazado de programa academico
            </motion.h2>

            <motion.p {...fadeUp} transition={{ duration: 0.65, delay: 0.15 }}>
              El Pilar de Excelencia Academica nacio de una conviccion simple: la excelencia no es un esfuerzo solitario. Es un ecosistema. Aqui, estudiantes de todos los ciclos encuentran los recursos, las personas y las estructuras para alcanzar su maximo potencial tecnico y academico.
            </motion.p>

            <motion.p {...fadeUp} transition={{ duration: 0.65, delay: 0.2 }}>
              No nos interesa que simplemente aprueben. Nos interesa que <em>dominen</em>. Que puedan caminar a una entrevista tecnica con confianza, enfrentar proyectos complejos sin miedo y construir cosas que importen.
            </motion.p>

            <motion.div
              className="ae-principles"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {principles.map((p, i) => (
                <span key={i} className="ae-principle-pill">
                  <span className="ae-principle-icon">{p.icon}</span>
                  {p.label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* === OBJECTIVE === */}
      <section className="ae-objective">
        <div className="ae-obj-bg" />
        <div className="container ae-obj-inner">
          <div className="ae-obj-label">Objetivo General</div>
          <motion.blockquote
            className="ae-obj-quote"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Desarrollar y fortalecer las competencias academicas y tecnicas de los estudiantes de LEAD UTP, elevando su rendimiento en al menos un <mark>20%</mark> y preparandolos para sobresalir en el mercado laboral tecnologico.
          </motion.blockquote>
          <motion.div
            className="ae-obj-targets"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            {[
              { icon: <Target size={15} />, text: 'Mejora de rendimiento cuantificable' },
              { icon: <Code2 size={15} />, text: 'Habilidades tecnicas de industria' },
              { icon: <Users size={15} />, text: 'Red de mentoria estudiantil' },
              { icon: <Globe size={15} />, text: 'Competencias nacionales e internacionales' },
            ].map((t, i) => (
              <div key={i} className="ae-obj-target-item glass-card">
                {t.icon}
                <span>{t.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === AUDIENCE === */}
      <section className="ae-audience container">
        <div className="ae-audience-grid">
          <motion.div className="ae-audience-text" {...fadeUp}>
            <span className="ae-section-tag">Para quien es?</span>
            <h2>Todos los ciclos. Sin excusas.</h2>
            <p>
            Sin importar en que ciclo estes, aqui encontraras un espacio para ti. Puedes unirte para recibir apoyo en tu aprendizaje, compartir tu experiencia guiando a otros o dedicarte a construir proyectos reales.
            </p>
          </motion.div>
          <div className="ae-audience-cards">
            {[
              { title: 'Ciclos iniciales', desc: 'Tutorias en cursos criticos, guias de estudio y acompanamiento constante para que la transicion universitaria no sea un obstaculo.', num: '1-4' },
              { title: 'Ciclos intermedios', desc: 'Talleres tecnicos, workshops de herramientas de industria y preparacion para tus primeras practicas profesionales.', num: '5-7' },
              { title: 'Ciclos avanzados', desc: 'Investigacion aplicada, mentorias outbound y participacion en hackathons y competencias que construyen tu portfolio.', num: '8+' },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="ae-audience-card glass-card"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
              >
                <span className="ae-aud-num">{card.num}</span>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROGRAMS === */}
      <section className="ae-programs" ref={programsRef}>
        <div className="container">
          <motion.div className="ae-programs-header" {...fadeUp}>
            <span className="ae-section-tag">Programas</span>
            <h2>6 frentes de accion. Un solo objetivo.</h2>
            <p className="ae-programs-sub">
              Cada programa es un engranaje del sistema. Juntos conforman el ecosistema de excelencia.
            </p>
          </motion.div>

          <div className="ae-prog-grid">
            {programs.map((prog, i) => (
              <motion.article
                key={prog.id}
                className="ae-prog-card glass-card"
                onClick={() => handleProgramClick(prog.path)}
                style={{ '--prog-accent': prog.accent } as CSSProperties}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.55 }}
              >
                <div className="ae-prog-glow" />
                
                <div className="ae-prog-header">
                  <span className="ae-prog-num">{prog.num}</span>
                  <span className="ae-prog-tag">{prog.tag}</span>
                </div>

                <div className="ae-prog-icon-wrapper">
                  <div className="ae-prog-icon">
                    {prog.icon}
                  </div>
                </div>

                <div className="ae-prog-body">
                  <h3>{prog.title}</h3>
                  <p>{prog.desc}</p>
                </div>

                <div className="ae-prog-chips">
                  {prog.projects.map(t => (
                    <span key={t} className="ae-prog-chip">{t}</span>
                  ))}
                </div>

                <div className="ae-prog-action">
                  <span>Explorar programa</span>
                  <ArrowRight size={14} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* === IMPACT === */}
      <section className="ae-impact container">
        <motion.div className="ae-impact-header" {...fadeUp}>
          <span className="ae-section-tag">Impacto esperado</span>
          <h2>Lo que cambia cuando entras.</h2>
        </motion.div>

        <div className="ae-impact-grid">
          {[
            {
              area: 'Academico',
              icon: <BookOpen size={20} />,
              points: ['Promedio ponderado en alza', 'Menos cursos desaprobados', 'Pensamiento critico real', 'Habitos de estudio sostenibles']
            },
            {
              area: 'Tecnico',
              icon: <Code2 size={20} />,
              points: ['Frameworks de industria', 'Portfolio de proyectos reales', 'Preparacion para entrevistas', 'Adaptabilidad tecnologica']
            },
            {
              area: 'Profesional',
              icon: <Target size={20} />,
              points: ['Red de contactos de calidad', 'Participacion en hackathons', 'Confianza en tus capacidades', 'Listo para el mercado laboral']
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="ae-impact-card glass-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
            >
              <div className="ae-impact-header-card">
                <div className="ae-impact-icon">
                  {item.icon}
                </div>
                <span className="ae-impact-area-label">{item.area}</span>
              </div>
              <ul className="ae-impact-list">
                {item.points.map((pt, j) => (
                  <li key={j}>
                    <CheckCircle2 size={14} className="ae-impact-check" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === CTA === */}
      <section className="ae-cta">
        <div className="ae-cta-bg" />
        <div className="container ae-cta-inner">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <span className="ae-section-tag ae-section-tag--light">Te animas?</span>
            <h2>El conocimiento crece<br />cuando se comparte.</h2>
            <p>Unete a LEAD UTP y construye el futuro de la tecnologia junto a quienes piensan como tu.</p>
            <button className="ae-btn-primary ae-btn-large">
              Unirme a LEAD <ArrowRight size={17} />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AcademicExcellence;