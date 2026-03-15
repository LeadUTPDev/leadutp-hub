import './About.css'
import { valoresData, leadLetters, aboutContent } from './about.data'
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const About = () => {
  return (
    <main className="about">

      {/* Hero Section */}
      <motion.section
        className="about-hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="about-hero-container">

          <motion.div
            className="about-hero-content"
            variants={fadeUp}
          >
            <h1 className="about-title">
              {aboutContent.hero.title.split(" ")[0]}{" "}
              <span className="about-title-accent">
                {aboutContent.hero.title.split(" ")[1]}
              </span>
            </h1>

            <p className="about-subtitle">
              {aboutContent.hero.subtitle}
            </p>

          </motion.div>

        </div>
      </motion.section>

      {/* LEAD Meaning Section */}
      <section className="about-lead">
        <div className="about-lead-container">
          <h2 className="lead-title">¿Qué significa LEAD?</h2>

          <motion.div
            className="lead-acronym"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leadLetters.map((item) => (
              <motion.div
                key={item.letter}
                className="lead-letter"
                variants={fadeUp}
                whileHover={{ scale: 1.1 }}
              >
                <span className="letter">{item.letter}</span>
                <span className="word">{item.word}</span>
                <span className="meaning">{item.meaning}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-container">

          <motion.div
            className="mission-card"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="mission-title">Nuestra Misión</h2>
            <p className="mission-text">
              {aboutContent.mission}
            </p>
          </motion.div>

          <motion.div
            className="vision-card"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="vision-title">Nuestra Visión</h2>
            <p className="vision-text">
              {aboutContent.vision}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-container">

          <h2 className="values-title">Nuestros Valores</h2>
          <p className="values-subtitle">
            Los principios que guían nuestras acciones
          </p>

          <motion.div
            className="values-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {valoresData.map((valor) => (
              <motion.div
                key={valor.id}
                className="value-card"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="value-icon">{valor.icon}</span>
                <h3 className="value-title">{valor.title}</h3>
                <p className="value-description">{valor.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </main>
  )
}

export default About