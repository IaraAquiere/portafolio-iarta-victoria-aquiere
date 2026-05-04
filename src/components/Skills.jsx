export default function Skills({ data }) {
  return (
    <section id="skills" className="pf-section">
      <div className="container">
        <p className="pf-label">- Habilidades</p>
        <h2 className="pf-title">Tecnologías</h2>
        <div className="row g-5">
          {Object.entries(data.skills).map(([grupo, lista]) => (
            <div className="col-md-6" key={grupo}>
              <p className="pf-group-label">{grupo}</p>
              <div>
                {lista.map(skill => (
                  <span key={skill} className="pf-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 