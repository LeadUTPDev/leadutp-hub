import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Events from './pages/Events';
import './styles/global.css';

import ProfessionalDevelopment from './pages/Pillars/ProfessionalDevelopment';
import Leadership from './pages/Pillars/Leadership/Leadership';
import FemaleExcellence from './pages/Pillars/FemaleExcellence';
import ChapterDevelopment from './pages/Pillars/ChapterDevelopment';
import AcademicExcellence from './pages/Pillars/AcademicExcellence';
import LeadAcademy from './pages/Pillars/LeadAcademy';
import AcademicSessions from './pages/Pillars/AcademicExcellence/programs/academic-sessions';

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          
          {/* Rutas de Pilares */}
          <Route path="/pillars/professional-development" element={<ProfessionalDevelopment />} />
          <Route path="/pillars/leadership" element={<Leadership />} />
          <Route path="/pillars/female-excellence" element={<FemaleExcellence />} />
          <Route path="/pillars/chapter-development" element={<ChapterDevelopment />} />
          <Route path="/pillars/academic-excellence" element={<AcademicExcellence />} />
          <Route 
            path="/pillars/academic-excellence/programs/academic-sessions" 
            element={<AcademicSessions />} 
          />
          <Route path="/pillars/lead-academy" element={<LeadAcademy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
