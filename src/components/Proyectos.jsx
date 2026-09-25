import React from "react";

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
    <div>
      <h2>Proyectos</h2>
    </div>
  );
};

export default Proyectos;
