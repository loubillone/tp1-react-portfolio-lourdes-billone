import React from "react";
import "../css/proyectos.css";

const Proyectos = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "Control de Stock",
      descripcion:
        "Sistema desarrollado para registrar productos, sucursales y ventas.",
      tecnologia: "C# y MySQL",
      url: "https://stocksystemutn.netlify.app//",
    },
    {
      id: 2,
      titulo: "PetroServi",
      descripcion:
        "Sitio web desarrollado para presentar información y servicios de una empresa petrolera.",
      tecnologia: "React y Bootstrap",
      url: "https://petroservi.netlify.app/",
    },
    {
      id: 3,
      titulo: "Tito Pizzas",
      descripcion:
        "Sitio web para una pizzería, con presentación de productos, carrito de compras e información del negocio.",
      tecnologia: "HTML, Css y Javascript",
      url: "https://titopizzas.netlify.app/",
    },
    {
      id: 4,
      titulo: "Matafuegos ABC",
      descripcion:
        "Sitio web para una empresa dedicada a la venta y mantenimiento de matafuegos.",
      tecnologia: "React, Framer Motion y Bootstrap",
      url: "https://matafuegosabc.netlify.app/",
    },
    {
      id: 5,
      titulo: "Multiversas",
      descripcion:
        "Sitio web desarrollado para presentar contenido, información y servicios.",
      tecnologia: "React, Framer Motion y Bootstrap",
      url: "https://multiversas.netlify.app/",
    },
    {
      id: 6,
      titulo: "Mudo Cucina",
      descripcion: "Sitio web con catálogo de cuchillos.",
      tecnologia: "React, Framer Motion y Bootstrap",
      url: "https://mudocucina.netlify.app/",
    },
  ];
  return (
    <section id="proyectos" className="proyectos">
      <h2>Mis Proyectos</h2>
      <div className="container">
        <div className="row">
          {proyectos.map((proyecto) => (
            <div className="col-12 col-md-6 col-lg-4" key={proyecto.id}>
              <div className="card proyecto-card">
                <div className="card-body">
                  <h5 className="card-title">{proyecto.titulo}</h5>

                  <p className="card-text">{proyecto.descripcion}</p>

                  <p>
                    <strong>Tecnologías:</strong> {proyecto.tecnologia}
                  </p>

                  <a
                    href={proyecto.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
