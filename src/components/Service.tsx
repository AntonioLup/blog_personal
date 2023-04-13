import React from "react";
import Nav from "./Nav";
import "./styles/Grid.scss";
import Footer from "./Footer";
import InfoAside from "./InfoAside";

const ServicePage: React.FC = () => {
  return (
    <div className="grid-container">
      <Nav />
      <main className="main-container">
        <section className="content">
          <h1>service</h1>
        </section>
        <InfoAside />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
