import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/images/logos/lead-utp-logo-default.png" alt="Lead UTP" />
        </Link>
        
        {/* Hamburger Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/about" className="nav-link" onClick={closeMenu}>Sobre nosotros</Link>
          <Link to="/projects" className="nav-link" onClick={closeMenu}>Proyectos</Link>
          <Link to="/events" className="nav-link" onClick={closeMenu}>Eventos</Link>
          <div className="nav-cta">
            <button className="btn-contact">Contáctanos</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
