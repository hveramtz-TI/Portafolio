import React, { useEffect, useRef } from 'react';
import tecnologias from '../../assets/json/tecnologias.json';
import './tecnologias.css';

function Tecnologias() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const scrollStep = () => {
      // Desplazamiento más suave
      carousel.scrollLeft += 1.5;

      // Reiniciar cuando se alcanza el final
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }
    };

    const interval = setInterval(scrollStep, 16); // Velocidad optimizada

    // Limpieza del intervalo al desmontar
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      {[...tecnologias, ...tecnologias].map((tecnologia, index) => (
        <div key={index} className="carousel-item">
          <a href={tecnologia.link} target="_blank" rel="noopener noreferrer">
            <img
              src={tecnologia.icono}
              alt={tecnologia.nombre}
              style={{ cursor: 'pointer' }}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Tecnologias;