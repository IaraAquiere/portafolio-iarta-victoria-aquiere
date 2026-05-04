export default function Proyectos({ data }) {
  return (
    <section id="proyectos" className="pf-section">
      <div className="container">
        <p className="pf-label">— Trabajo</p>
        <h2 className="pf-title">Proyectos</h2>
        <div className="row g-4">
          {data.proyectos.map((p, i) => (
            <div className="col-md-6" key={i}>
              <div className="pf-card">
                <div className="pf-card-num">0{i + 1}</div>
                <h3 className="pf-card-title">{p.nombre}</h3>
                <p className="pf-card-desc">{p.descripcion}</p>
                <div className="mt-2">
                  {p.tecnologias.map(t => <span key={t} className="pf-tag">{t}</span>)}
                </div>
                <a href={p.link} className="pf-card-link" target="_blank" rel="noreferrer">Ver proyecto →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 