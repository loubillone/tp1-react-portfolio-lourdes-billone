import React from "react";
import "../css/header.css";

const Header = ({ nombre }) => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container-header">
        <h2 className="m-3">{nombre}</h2>

        <nav>
          <a href="#inicio" className="text-white text-decoration-none me-3">
            Inicio
          </a>

          <a href="#sobre-mi" className="text-white text-decoration-none me-3">
            Sobre mí
          </a>

          <a href="#proyectos" className="text-white text-decoration-none m-3">
            Proyectos
          </a>

          <a href="#footer" className="text-white text-decoration-none m-3">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
