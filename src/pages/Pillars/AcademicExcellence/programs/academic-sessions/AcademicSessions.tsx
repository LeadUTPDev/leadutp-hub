import { useEffect, useState, useMemo } from 'react';
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
  MapPin,
  Search,
  X,
  Filter,
  ChevronDown as ChevronDownSmall,
} from 'lucide-react';
import './AcademicSessions.css';
import type { Session, ProjectStatus } from './academic-sessions.type';
import { projectsData } from './academic-sessions.data';

// ── AÑOS DISPONIBLES ─────────────────────────────────────────────────────────
const availableYears = [...new Set(projectsData.map(p => p.year))].sort((a, b) => b - a);

const STATUS_LABELS: Record<ProjectStatus, string> = {
  activo: 'Activo',
  próximo: 'Próximo',
  finalizado: 'Finalizado',
};

// ── SUBCOMPONENTE SessionItem ─────────────────────────────────────────────────
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

// ── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────
const AcademicSessions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeProjectId, setActiveProjectId] = useState(projectsData[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterYear, setFilterYear] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState<ProjectStatus | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // ── Filtrado reactivo ──────────────────────────────────────────────────────
  const filteredProjects = useMemo(() => {
    return projectsData.filter(p => {
      const matchSearch = searchQuery.trim() === '' || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchYear = filterYear === null || p.year === filterYear;
      const matchStatus = filterStatus === null || p.status === filterStatus;
      return matchSearch && matchYear && matchStatus;
    });
  }, [searchQuery, filterYear, filterStatus]);

  // Si el proyecto activo ya no está en resultados, selecciona el primero visible
  useEffect(() => {
    if (filteredProjects.length > 0 && !filteredProjects.find(p => p.id === activeProjectId)) {
      setActiveProjectId(filteredProjects[0].id);
    }
  }, [filteredProjects, activeProjectId]);

  const activeProject = projectsData.find(p => p.id === activeProjectId) || projectsData[0];

  const hasActiveFilters = filterYear !== null || filterStatus !== null;

  const clearFilters = () => {
    setFilterYear(null);
    setFilterStatus(null);
    setSearchQuery('');
  };

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

          {/* Search + Filter bar */}
          <div className="sidebar-search-area">
            {/* Search Input */}
            <div className="search-input-wrapper">
              <Search size={15} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Buscar proyecto..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="search-clear" onClick={() => setSearchQuery('')} aria-label="Limpiar búsqueda">
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Filter toggle button */}
            <button 
              className={`filter-toggle-btn ${isFilterOpen ? 'is-open' : ''} ${hasActiveFilters ? 'has-filters' : ''}`}
              onClick={() => setIsFilterOpen(v => !v)}
              aria-label="Abrir filtros"
            >
              <Filter size={14} />
              {hasActiveFilters && <span className="filter-badge" />}
              <ChevronDownSmall size={13} className="filter-chevron" />
            </button>
          </div>

          {/* Filter Panel (collapsible) */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                className="filter-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <div className="filter-panel-inner">
                  {/* Year filter */}
                  <div className="filter-group">
                    <span className="filter-group-label">Año</span>
                    <div className="filter-chips">
                      <button
                        className={`filter-chip ${filterYear === null ? 'is-active' : ''}`}
                        onClick={() => setFilterYear(null)}
                      >Todos</button>
                      {availableYears.map(year => (
                        <button
                          key={year}
                          className={`filter-chip ${filterYear === year ? 'is-active' : ''}`}
                          onClick={() => setFilterYear(year)}
                        >{year}</button>
                      ))}
                    </div>
                  </div>

                  {/* Status filter */}
                  <div className="filter-group">
                    <span className="filter-group-label">Estado</span>
                    <div className="filter-chips">
                      <button
                        className={`filter-chip ${filterStatus === null ? 'is-active' : ''}`}
                        onClick={() => setFilterStatus(null)}
                      >Todos</button>
                      {(Object.keys(STATUS_LABELS) as ProjectStatus[]).map(s => (
                        <button
                          key={s}
                          className={`filter-chip filter-chip-${s} ${filterStatus === s ? 'is-active' : ''}`}
                          onClick={() => setFilterStatus(s)}
                        >{STATUS_LABELS[s]}</button>
                      ))}
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <button className="clear-filters-btn" onClick={clearFilters}>
                      <X size={12} /> Limpiar filtros
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Project Navigation */}
          <nav className="project-nav">
            <div className="nav-label-row">
              <span className="nav-label">Proyectos</span>
              <span className="nav-count">{filteredProjects.length}</span>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="nav-empty">
                <Search size={24} />
                <span>Sin resultados</span>
                <button className="clear-filters-btn" onClick={clearFilters}>Limpiar filtros</button>
              </div>
            ) : (
              <div className="nav-items">
                {filteredProjects.map((project) => (
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
                    <span className={`nav-item-status status-${project.status}`}>
                      {STATUS_LABELS[project.status]}
                    </span>
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
            )}
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
                    <span className={`badge badge-status status-badge-${activeProject.status}`}>
                      {STATUS_LABELS[activeProject.status]}
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