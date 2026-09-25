import React from "react";
import "../css/hero.css";

const Hero = ({ titulo, descripcion }) => {
  return (
    <section id="inicio" className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h1>{titulo}</h1>

          <p className="lead">{descripcion}</p>

          <a href="#proyectos" className="btn btn-dark">
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
