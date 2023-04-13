import React, { useEffect, useState } from "react";
import "./styles/Nav.scss";
import { Link, NavLink } from "react-router-dom";
const Nav: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Obtener el estado del modo oscuro desde el localStorage al cargar la página
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode === "true";
  });

  useEffect(() => {
    // Guardar el estado del modo oscuro en el localStorage al cambiar
    // el estado de isDarkMode
    localStorage.setItem("darkMode", String(isDarkMode));
    // Agregar o quitar la clase 'dark' en el body
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    // Cambiar el estado del modo oscuro
    setIsDarkMode(!isDarkMode);
  };
  return (
    <nav className="navwrapper">
      <ul className="navlist">
      
        <li>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? "🌚" : "🌞"}
          </button>
        </li>
        <li>👨</li>
        <li>🛒</li>
        <li>
          <button className="" onClick={() => null}>
            Menu
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
