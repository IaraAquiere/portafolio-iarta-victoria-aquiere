export default function Contacto({ data }) {
  return (
    <section id="contacto" className="pf-section">
      <div className="container">
        <p className="pf-label">— Contacto</p>
        <div className="pf-contact-box">
          <p className="pf-contact-title">Trabajemos juntos</p>
          <p className="pf-contact-sub">¿Tenés un proyecto en mente? Escribime y lo hacemos realidad.</p>
          <div>
            <a href={`mailto:${data.contacto.email}`} className="pf-social">✉ {data.contacto.email}</a>
            <a href={data.contacto.linkedin} className="pf-social" target="_blank" rel="noreferrer">in LinkedIn</a>
            <a href={data.contacto.github} className="pf-social" target="_blank" rel="noreferrer">⌥ GitHub</a>
            <a href={data.contacto.whatsapp} className="pf-social" target="_blank" rel="noreferrer">Whatsapp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
 