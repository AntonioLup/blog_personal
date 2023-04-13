import React from 'react';
import "./styles/Loading.scss"

const LoadingComponent = () => {
  return (
    <div className="loading-container"> {/* Contenedor del componente de carga */}
      <div className="loading-spinner"></div> {/* Animación de carga */}
      <p className="loading-text">Loading...</p> {/* Texto de carga */}
    </div>
  );
};

export default LoadingComponent;