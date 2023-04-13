import React from "react";
import "./styles/Grid.scss";
import "./styles/HomePage.scss";
import Nav from "./Nav";
import InfoAside from "./InfoAside";
import Footer from "./Footer";
import Logo from "../assets/react.svg";
import Articles from "./Articles";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="grid-container">
        <Nav />
        <main className="main-container">
          <section className="content">
            <picture className="logocontainer">
              <img className="logo" src={Logo}  alt="Logo de React"/>
            </picture>
            <div className="wrapper">
              <h1>Hola 👋, Soy un <span className="span">Indie Creator</span> </h1>
              <p className="desc">Me apasiona escribir sobre codificación, startups y mi camino 
                como creador de tiempo completo en React JS.</p>
            <div>
              <h2>Ultimos Articulos</h2>
              {/* Agrega aquí la lista de los últimos artículos */}
              <Articles/>
            </div>
            </div>
           
          </section>
          
          
          
          <InfoAside />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
