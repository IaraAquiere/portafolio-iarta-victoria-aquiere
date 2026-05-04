export default function SobreMi({ data }) {
  return (
    <section id="sobre" className="pf-section">
      <div className="container">
        <p className="pf-label">Sobre mí</p>
        <h2 className="pf-title">Quién soy</h2>
        <div className="pf-divider" />

        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <p className="pf-quote">
              "Diseño y comunico — dos caras de la misma pasión."
            </p>
          </div>

          <div className="col-lg-7">
            <p className="pf-about-text">{data.sobreMi}</p>
          </div>
        </div>
      </div>
    </section>
  );
}