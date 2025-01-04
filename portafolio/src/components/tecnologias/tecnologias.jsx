import React, { useEffect, useRef } from 'react';
import tecnologias from '../../assets/json/tecnologias.json';
import './tecnologias.css';

function Tecnologias() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const scrollStep = () => {
      carousel.scrollLeft += 1.5;
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }
    };

    let interval = setInterval(scrollStep, 16);

    // Pausar desplazamiento automático en interacción táctil o del ratón
    const stopScroll = () => clearInterval(interval);

    // Reactivar desplazamiento automático al finalizar la interacción
    const startScroll = () => {
      clearInterval(interval); // Asegúrate de limpiar el intervalo anterior
      interval = setInterval(scrollStep, 16); // Reinicia el intervalo
    };

    carousel.addEventListener('touchstart', stopScroll);
    carousel.addEventListener('mousedown', stopScroll);
    carousel.addEventListener('touchend', startScroll);
    carousel.addEventListener('mouseup', startScroll);

    // Limpieza del intervalo y eventos al desmontar el componente
    return () => {
      clearInterval(interval);
      carousel.removeEventListener('touchstart', stopScroll);
      carousel.removeEventListener('mousedown', stopScroll);
      carousel.removeEventListener('touchend', startScroll);
      carousel.removeEventListener('mouseup', startScroll);
    };
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