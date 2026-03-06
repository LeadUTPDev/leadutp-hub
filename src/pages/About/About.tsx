import './About.css'
import { valoresData, leadLetters, aboutContent } from './about.data'

const About = () => {
  return (
    <main className="about">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-title">
              {aboutContent.hero.title.split(" ")[0]}{" "}
              <span className="about-title-accent">
                {aboutContent.hero.title.split(" ")[1]}
              </span>
            </h1>

            <p className="about-subtitle">
              {aboutContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* LEAD Meaning Section */}
      <section className="about-lead">
        <div className="about-lead-container">
          <h2 className="lead-title">¿Qué significa LEAD?</h2>

          <div className="lead-acronym">
            {leadLetters.map((item) => (
              <div key={item.letter} className="lead-letter">
                <span className="letter">{item.letter}</span>
                <span className="word">{item.word}</span>
                <span className="meaning">{item.meaning}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-container">

          <div className="mission-card">
            <h2 className="mission-title">Nuestra Misión</h2>
            <p className="mission-text">
              {aboutContent.mission}
            </p>
          </div>

          <div className="vision-card">
            <h2 className="vision-title">Nuestra Visión</h2>
            <p className="vision-text">
              {aboutContent.vision}
            </p>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-container">

          <h2 className="values-title">Nuestros Valores</h2>
          <p className="values-subtitle">
            Los principios que guían nuestras acciones
          </p>

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
  )
}

export default About