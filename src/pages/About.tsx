function About() {
  return (
    <main>
      <section className="about-header">
        <h1>Acerca del Club de Fútbol Estrella</h1>
        <p>Un club dedicado a fomentar el amor por el fútbol y desarrollar el talento de jóvenes y adultos apasionados por el deporte.</p>
      </section>
      <section className="mission">
        <h2>Nuestra Misión</h2>
        <p>Promover el fútbol como herramienta de desarrollo personal, social y deportivo, creando campeones en la cancha y en la vida.</p>
      </section>
      <section className="vision">
        <h2>Nuestra Visión</h2>
        <p>Ser el club de referencia en la comunidad, reconocido por nuestra excelencia, espíritu deportivo y logros en competiciones.</p>
      </section>
      <section className="team">
        <h2>Nuestro Equipo</h2>
        <p>Contamos con entrenadores certificados, exjugadores profesionales y un staff dedicado a hacer que cada sesión sea inolvidable.</p>
        <div className="team-members">
          <div className="member">
            <h3>Carlos Mendoza</h3>
            <p>Director Técnico</p>
          </div>
          <div className="member">
            <h3>Ana López</h3>
            <p>Entrenadora de Porteros</p>
          </div>
          <div className="member">
            <h3>Javier Ruiz</h3>
            <p>Coordinador de Juveniles</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About