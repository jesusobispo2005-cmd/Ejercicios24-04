import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Bienvenido al Club de Fútbol Estrella</h1>
        <p>Únete a nosotros y vive la pasión del fútbol. Entrenamientos, partidos y comunidad para todos los niveles.</p>
        <Link to="/contact" className="button-link">Únete Ahora</Link>
      </section>
      <section className="features">
        <h2>Lo que Ofrecemos</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Entrenamientos Profesionales</h3>
            <p>Sesiones de entrenamiento guiadas por coaches expertos para mejorar tus habilidades.</p>
          </div>
          <div className="card">
            <h3>Partidos y Torneos</h3>
            <p>Participa en emocionantes partidos y torneos locales e internacionales.</p>
          </div>
          <div className="card">
            <h3>Comunidad</h3>
            <p>Forma parte de una comunidad apasionada por el fútbol, con eventos y actividades sociales.</p>
          </div>
        </div>
      </section>
      <section className="about">
        <h2>Sobre Nuestro Club</h2>
        <p>El Club de Fútbol Estrella es un lugar donde el fútbol se vive con intensidad. Desde principiantes hasta profesionales, todos son bienvenidos a desarrollar su talento y disfrutar del deporte rey.</p>
      </section>
    </main>
  )
}

export default Home