import React from "react";
import { useState } from "react";

const SobreMi = () => {
  const [mostrarMas, setMostrarMas] = useState(false);
  return (
    <div>
      <section id="sobre-mi" className="container py-5"></section>
      <h2>Sobre mí</h2>
      <p>
        Soy una desarrolladora web apasionada por crear soluciones digitales
        innovadoras y funcionales. Mi experiencia abarca el desarrollo frontend
        con tecnologías modernas para crear aplicaciones web dinámicas. Me
        especializo en transformar ideas complejas en aplicaciones web elegantes
        y eficientes. Disfruto trabajando con React para crear interfaces de
        usuario dinámicas y responsivas. Mi objetivo es seguir aprendiendo y
        creciendo en el mundo del desarrollo, siempre buscando nuevas
        tecnologías y mejores prácticas para ofrecer soluciones de calidad.
      </p>

      {mostrarMas && (
        <p>
          Además de mi experiencia en desarrollo web, tengo un fuerte interés en
          mantenerme actualizada con las últimas tendencias y tecnologías del
          sector. Creo firmemente en el aprendizaje continuo y en la mejora
          constante de mis habilidades para ofrecer siempre lo mejor en cada
          proyecto en el que trabajo.
        </p>
      )}

      <button
        className="btn btn-outline-dark"
        onClick={() => setMostrarMas(!mostrarMas)}
      >
        {mostrarMas ? "Mostrar menos" : "Mostrar más"}
      </button>
    </div>
  );
};

export default SobreMi;
