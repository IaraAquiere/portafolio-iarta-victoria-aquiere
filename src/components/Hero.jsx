export default function Hero({ scrollTo }) {
  return (
    <section id="inicio" className="pf-hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="pf-eyebrow">Portafolio 2026</div>
            <h1 className="pf-hero-name">
              Iara<br /><em>Victoria Aquiere</em>
            </h1>
            <span className="pf-hero-script">Community Manager & Front End Developer</span>
            <div className="d-flex flex-wrap gap-3">
              <button className="pf-btn" onClick={() => scrollTo("proyectos")}>Ver proyectos →</button>
              <button className="pf-btn ghost" onClick={() => scrollTo("contacto")}>Contacto</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 