import React from "react";
import { Link } from "react-router-dom";
import "./styles/Aside.scss";

function Aside() {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <li className="navitem">
            <Link to="/">
              <span>🏠</span>
             Home</Link>
            </li>
            <li className="navitem">
            <Link to="/about">
            <span>🐱‍👤</span>
             About</Link>
            </li>
            <li className="navitem">
            <Link to="/service">
              <span> 🕵️‍♀️</span>
             Service</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Aside;
