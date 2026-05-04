const NAV_ITEMS = [
  { id: "sobre", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar({ activeSection, scrollTo }) {
  return (
    <nav className="pf-nav">
      <a href="#inicio" className="pf-nav-brand" onClick={e => { e.preventDefault(); scrollTo("inicio"); }}>
        IVA
      </a>
      <ul className="pf-nav-links d-none d-md-flex">
        {NAV_ITEMS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={e => { e.preventDefault(); scrollTo(id); }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}