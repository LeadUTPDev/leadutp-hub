import "./Events.css"
import { eventsData, eventsContent } from "./events.data"

const Events = () => {
  const upcomingEvents = eventsData.filter(
    (event) => event.status === "upcoming"
  )

  const pastEvents = eventsData.filter(
    (event) => event.status === "past"
  )

  return (
    <main className="events">

      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-container">
          <h1 className="events-title">
            {eventsContent.hero.title.split(" ")[0]}{" "}
            <span className="events-title-accent">
              {eventsContent.hero.title.split(" ")[1]}
            </span>
          </h1>

          <p className="events-subtitle">
            {eventsContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section events-upcoming">
        <div className="events-section-container">
          <h2 className="events-section-title">Próximos Eventos</h2>

          <div className="events-list">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">

                <div
                  className="event-date-box"
                  style={{ borderColor: event.pilarColor }}
                >
                  <span className="event-day">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="event-month">
                    {event.date.split(" ")[1]}
                  </span>
                </div>

                <div className="event-content">
                  <div className="event-header">
                    <span
                      className="event-pilar-badge"
                      style={{ backgroundColor: event.pilarColor }}
                    >
                      {event.pilar}
                    </span>

                    <h3 className="event-title">
                      {event.title}
                    </h3>
                  </div>

                  <p className="event-description">
                    {event.description}
                  </p>

                  <div className="event-details">
                    <span className="event-detail">
                      {event.time}
                    </span>

                    <span className="event-detail">
                      {event.location}
                    </span>
                  </div>
                </div>

                <button className="event-register-btn">
                  Registrarse
                </button>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="events-section events-past">
        <div className="events-section-container">
          <h2 className="events-section-title">Eventos Pasados</h2>

          <div className="events-list">
            {pastEvents.map((event) => (
              <div key={event.id} className="event-card past">

                <div
                  className="event-date-box"
                  style={{ borderColor: event.pilarColor }}
                >
                  <span className="event-day">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="event-month">
                    {event.date.split(" ")[1]}
                  </span>
                </div>

                <div className="event-content">
                  <div className="event-header">
                    <span
                      className="event-pilar-badge"
                      style={{ backgroundColor: event.pilarColor }}
                    >
                      {event.pilar}
                    </span>

                    <h3 className="event-title">
                      {event.title}
                    </h3>
                  </div>

                  <p className="event-description">
                    {event.description}
                  </p>

                  <div className="event-details">
                    <span className="event-detail">
                      {event.time}
                    </span>

                    <span className="event-detail">
                      {event.location}
                    </span>
                  </div>
                </div>

                <span className="event-completed-badge">
                  Completado
                </span>

              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default Events