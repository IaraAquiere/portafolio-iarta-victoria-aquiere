import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  "./estilos/estilos.css";

import DATA from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Skills from "./components/Skills";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

const SECTIONS = ["inicio", "sobre", "skills", "experiencia", "contacto"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <Hero data={DATA} scrollTo={scrollTo} />
      <SobreMi data={DATA} />
      <Skills data={DATA} />
      <Proyectos data={DATA} />
      <Contacto data={DATA} />
      <Footer />
    </>
  );
}