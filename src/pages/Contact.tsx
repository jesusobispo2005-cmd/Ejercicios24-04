import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Enviado:', form)
  }

  return (
    <main>
      <section className="contact-header">
        <h1>Contacto</h1>
        <p>¿Quieres unirte al Club de Fútbol Estrella o tienes preguntas? ¡Contáctanos!</p>
      </section>
      <section className="contact-info">
        <h2>Información de Contacto</h2>
        <p><strong>Dirección:</strong> Estadio Municipal, Calle Fútbol 456, Ciudad Deportiva</p>
        <p><strong>Teléfono:</strong> +1 234 567 890</p>
        <p><strong>Email:</strong> info@clubestrella.com</p>
        <p><strong>Horario de Oficina:</strong> Lunes a Viernes, 9:00 AM - 7:00 PM</p>
        <p><strong>Horario de Entrenamientos:</strong> Mañana y tarde, consulta calendario</p>
      </section>
      <section className="contact-form">
        <h2>Envíanos un Mensaje</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <textarea name="mensaje" placeholder="Mensaje (ej: interés en unirse, preguntas sobre horarios)" onChange={handleChange} required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  )
}

export default Contact