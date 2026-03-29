import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Users, 
  Target, 
  ExternalLink, 
  Clock, 
  CalendarDays, 
  ChevronDown, 
  FolderDot,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import './AcademicSessions.css';
import type { Session } from './academic-sessions.type';
import { projectsData } from './academic-sessions.data';

// --- SUBCOMPONENTE PARA LAS SESIONES EXPANDIBLES ---
const SessionItem = ({ session, index }: { session: Session; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className={`session-card ${isOpen ? 'is-open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="session-card-main" onClick={() => setIsOpen(!isOpen)}>
        <div className="session-number">
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        
        <div className="session-content">
          <span className="session-week-badge">{session.week}</span>
          <h4 className="session-title">{session.title}</h4>
          <p className="session-desc">{session.desc}</p>
          
          <div className="session-meta">
            <div className="meta-item">
              <CalendarDays size={14} />
              <span>{session.date}</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <Clock size={14} />
              <span>{session.time}</span>
            </div>
          </div>
        </div>
        
        <button className="session-expand-btn" aria-label="Expandir detalles">
          <ChevronDown size={20} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="session-instructor"
          >
            <div className="instructor-content">
              <div className="instructor-avatar">
                <span>{session.instructor.initials}</span>
                <div className="avatar-ring" />
              </div>
              <div className="instructor-details">
                <span className="instructor-label">Instructor</span>
                <h5 className="instructor-name">{session.instructor.name}</h5>
                <span className="instructor-role">{session.instructor.role}</span>
                <p className="instructor-bio">{session.instructor.bio}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- COMPONENTE PRINCIPAL ---
const AcademicSessions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id);
  const activeProject = projectsData.find(p => p.id === activeProjectId) || projectsData[0];

  return (
    <motion.main
      className="academic-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Background Effects */}
      <div className="page-bg-effects">
        <div className="bg-gradient-orb bg-orb-1" />
        <div className="bg-gradient-orb bg-orb-2" />
        <div className="bg-noise-overlay" />
      </div>

      <div className="academic-container">
        
        {/* === SIDEBAR === */}
        <aside className="academic-sidebar">
          {/* Hero Section */}
          <div className="sidebar-hero">
            <div className="hero-icon-wrapper">
              <div className="hero-icon-glow" />
              <motion.div 
                className="hero-icon"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <BookOpen size={28} strokeWidth={1.5} />
              </motion.div>
            </div>
            
            <div className="hero-text">
              <h1 className="hero-title">
                Academic
                <span className="title-highlight">Sessions</span>
              </h1>
              <p className="hero-tagline">
                Impulsado por estudiantes, motivado por la excelencia
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="sidebar-divider">
            <Sparkles size={14} />
          </div>

          {/* Project Navigation */}
          <nav className="project-nav">
            <span className="nav-label">Descubre nuestros Proyectos</span>
            <div className="nav-items">
              {projectsData.map((project) => (
                <button
                  key={project.id}
                  className={`nav-item ${activeProjectId === project.id ? 'is-active' : ''}`}
                  onClick={() => setActiveProjectId(project.id)}
                >
                  <div className="nav-item-icon">
                    <FolderDot size={18} />
                  </div>
                  <div className="nav-item-content">
                    <span className="nav-item-title">{project.title}</span>
                    <span className="nav-item-sessions">{project.sessions.length} sesiones</span>
                  </div>
                  {activeProjectId === project.id && (
                    <motion.div 
                      layoutId="nav-indicator" 
                      className="nav-indicator"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Stats Mini */}
          <div className="sidebar-stats">
            <div className="stat-item">
              <GraduationCap size={16} />
              <span>+200 estudiantes</span>
            </div>
            <div className="stat-item">
              <CheckCircle2 size={16} />
              <span>95% satisfacción</span>
            </div>
          </div>
        </aside>

        {/* === MAIN CONTENT === */}
        <section className="academic-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="project-detail"
            >
              {/* Project Header */}
              <header className="project-header">
                <div className="header-content">
                  <div className="header-badges">
                    <span className="badge badge-primary">
                      <Users size={12} /> {activeProject.capacity}
                    </span>
                    <span className="badge badge-secondary">
                      <MapPin size={12} /> {activeProject.modality}
                    </span>
                  </div>
                  <h2 className="project-title">{activeProject.title}</h2>
                  <p className="project-description">{activeProject.description}</p>
                </div>
                
                <a 
                  href={activeProject.lumaUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="cta-button"
                >
                  <span>Inscribirme Ahora</span>
                  <ExternalLink size={16} />
                </a>
              </header>

              {/* Info Cards Grid */}
              <div className="info-grid">
                <div className="info-card glass-card">
                  <div className="info-card-icon">
                    <Target size={20} />
                  </div>
                  <div className="info-card-content">
                    <span className="info-label">Objetivo</span>
                    <p className="info-value">{activeProject.objective}</p>
                  </div>
                </div>

                <div className="info-card glass-card">
                  <div className="info-card-icon">
                    <Users size={20} />
                  </div>
                  <div className="info-card-content">
                    <span className="info-label">Dirigido a</span>
                    <p className="info-value">{activeProject.audience}</p>
                  </div>
                </div>
              </div>
              <div className="info-card glass-card highlight-card">
                  <div className="highlight-header">
                    <Sparkles size={16} />
                    <span>Lo que obtendrás</span>
                  </div>
                  <ul className="highlight-list">
                    {activeProject.highlights.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              {/* Schedule Section */}
              <div className="schedule-section">
                <div className="schedule-header">
                  <div className="schedule-title-group">
                    <Calendar size={20} />
                    <h3>{activeProject.scheduleTitle}</h3>
                  </div>
                  <span className="sessions-count">
                    {activeProject.sessions.length} {activeProject.sessions.length === 1 ? 'sesión' : 'sesiones'}
                  </span>
                </div>

                <div className="sessions-list">
                  {activeProject.sessions.map((session, index) => (
                    <SessionItem key={session.id} session={session} index={index} />
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </motion.main>
  );
};

export default AcademicSessions;