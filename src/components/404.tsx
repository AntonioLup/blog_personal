import React, { ReactNode, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import InfoAside from "./InfoAside";
import "./styles/HomePage.scss";
import Footer from "./Footer";
const Error: React.FC = () => {

 
  const navigation = useNavigate();
 
  return (
    <div className="grid-container">
      <Nav />
        
      
        
      <main className="main-container">
        <section className="content">
        <NavLink  to="#" onClick={() => navigation(-1)}>
            <h1 style={{
                textAlign: "center"
            }}>Volver Home 🧟‍♀️</h1>
        </NavLink>
           
        </section>
        <InfoAside />
      </main>
      <Footer />
    </div>
  );
};

export default Error;
