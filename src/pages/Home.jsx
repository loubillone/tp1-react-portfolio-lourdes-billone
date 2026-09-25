import React from "react";
import "../css/home.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SobreMi from "../components/SobreMi";
import Proyectos from "../components/Proyectos";
import Footer from "../components/Footer";
import Habilidades from "../components/Habilidades";

const Home = () => {
  return (
    <div>
      <Header nombre="Lourdes Billone" />
      <h1>Desarrolladora Web Full Stack</h1>
      <p>Mi portfolio</p>
      <Hero
        titulo="Lourdes Billone"
        descripcion="Especializada en crear experiencias web modernas y funcionales utilizando las últimas tecnologías. Transformo ideas en realidad digital."
      />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Footer />
    </div>
  );
};

export default Home;
