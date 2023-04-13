import React from "react";
import Nav from "./Nav";
import "./styles/Grid.scss";
import Footer from "./Footer";
import InfoAside from "./InfoAside";
import "./styles/HomePage.scss";
import perfil from "../assets/aest.jpg";

const AboutPage: React.FC = () => {
  return (
    <div className="grid-container">
      <Nav />
      <main className="main-container">
        <section className="content">
          <div className="wrapper">
            <h1>
              Me llamo <span className="span">@antoniolup1</span> 🤟
            </h1>
            <picture className="picwrapper">
              <img src={perfil} alt="perfil" />
            </picture>
            <div>
              <h2>Bio.</h2>
              <p>
                Soy un apasionado desarrollador junior con experiencia en el
                desarrollo de aplicaciones web utilizando la biblioteca de
                JavaScript React.
              </p>
              <h2>Stack.</h2>
              <p>
                Lenguajes de programación: JavaScript, HTML, CSS Bibliotecas y
                frameworks: React, Redux Herramientas de construcción y gestión
                de paquetes:
              </p>
              <p>
                Webpack, npm Estilos y preprocesadores: CSS3, Sass Experiencia
                con control de versiones: Git Metodologías de desarrollo:
              </p>
              <p>
                Agile/Scrum Experiencia en la integración con APIs y servicios
                web Conocimientos en diseño responsivo y usabilidad web
              </p>
            </div>
          </div>
     
        </section>
        <InfoAside />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
