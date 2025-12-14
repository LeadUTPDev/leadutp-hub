import './Events.css';

// Data de eventos (ejemplo)
const eventsData = [
  {
    id: 1,
    title: 'Chocolatada LEAD',
    date: '19 Dic 2025',
    time: '18:00 - 20:00',
    location: 'Auditorio UTP - Torre Arequipa',
    description: 'Chocolatada de integración.',
    pilar: 'Excelencia Académica',
    pilarColor: '#b74515',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Día de Integración de LEAD UTP en GLOBANT',
    date: '20 Dic 2025',
    time: '17:00 - 20:00',
    location: 'GLOBANT - San Isidro',
    description: 'Tarde que permitió conectar, compartir experiencias y fortalecer el liderazgo entre los miembros de la comunidad.',
    pilar: 'Desarrollo de Capitulo',
    pilarColor: '#7856ee',
    status: 'past'
  },
  {
    id: 3,
    title: 'Cómo convertir tu MVP en una startup financiada',
    date: '8 Nov 2025',
    time: '18:00 - 19:00',
    location: 'Online - Zoom',
    description: 'Charla que explicó cómo transformar un MVP en una empresa de alto impacto y con financiamiento.',
    pilar: 'Excelencia Académica',
    pilarColor: '#7856ee',
    status: 'past'
  },
  {
    id: 4,
    title: 'First Gen Day Perú',
    date: '8 Nov 2025',
    time: '15:00 - 19:00',
    location: 'Auditorio UTP - Torre Arequipa',
    description: 'Evento que conmemoró a la primera generación universitaria, resaltando su esfuerzo y trayectoria académica.',
    pilar: 'Desarrollo de Capitulo',
    pilarColor: '#d93340',
    status: 'past'
  },
  {
    id: 5,
    title: 'Charla de n8n',
    date: '18 Oct 2025',
    time: '15:00 - 19:00',
    location: 'Auditorio Central UTP',
    description: 'Sesión informativa que mostró cómo n8n está revolucionando la automatización de procesos empresariales.',
    pilar: 'Excelencia Académica',
    pilarColor: '#c90fcf',
    status: 'past'
  },
];

const Events = () => {
  const upcomingEvents = eventsData.filter(event => event.status === 'upcoming');
  const pastEvents = eventsData.filter(event => event.status === 'past');

  return (
    <main className="events">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-container">
          <h1 className="events-title">
            Nuestros <span className="events-title-accent">Eventos</span>
          </h1>
          <p className="events-subtitle">
            Participa en nuestras actividades y sé parte de la comunidad LEAD UTP.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section events-upcoming">
        <div className="events-section-container">
          <h2 className="events-section-title">Próximos Eventos</h2>
          <div className="events-list">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-date-box" style={{ borderColor: event.pilarColor }}>
                  <span className="event-day">{event.date.split(' ')[0]}</span>
                  <span className="event-month">{event.date.split(' ')[1]}</span>
                </div>
                <div className="event-content">
                  <div className="event-header">
                    <span 
                      className="event-pilar-badge" 
                      style={{ backgroundColor: event.pilarColor }}
                    >
                      {event.pilar}
                    </span>
                    <h3 className="event-title">{event.title}</h3>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <div className="event-details">
                    <span className="event-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-8.414V7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
                      </svg>
                      {event.time}
                    </span>
                    <span className="event-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {event.location}
                    </span>
                  </div>
                </div>
                <button className="event-register-btn">Registrarse</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="events-section events-past">
        <div className="events-section-container">
          <h2 className="events-section-title">Eventos Pasados</h2>
          <div className="events-list">
            {pastEvents.map((event) => (
              <div key={event.id} className="event-card past">
                <div className="event-date-box" style={{ borderColor: event.pilarColor }}>
                  <span className="event-day">{event.date.split(' ')[0]}</span>
                  <span className="event-month">{event.date.split(' ')[1]}</span>
                </div>
                <div className="event-content">
                  <div className="event-header">
                    <span 
                      className="event-pilar-badge" 
                      style={{ backgroundColor: event.pilarColor }}
                    >
                      {event.pilar}
                    </span>
                    <h3 className="event-title">{event.title}</h3>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <div className="event-details">
                    <span className="event-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-8.414V7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
                      </svg>
                      {event.time}
                    </span>
                    <span className="event-detail">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {event.location}
                    </span>
                  </div>
                </div>
                <span className="event-completed-badge">Completado</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
