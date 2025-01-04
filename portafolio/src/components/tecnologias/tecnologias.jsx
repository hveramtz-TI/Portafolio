import React, { useEffect, useRef } from 'react';
import tecnologias from '../../assets/json/tecnologias.json';
import './tecnologias.css';

function Tecnologias() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    // Función para desplazar el carrusel
    const scrollStep = () => {
      if (carousel) {
        carousel.scrollLeft += 1.5; // Ajusta la velocidad según sea necesario
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0; // Reinicia el desplazamiento al llegar al final
        }
      }
    };

    // Inicia el desplazamiento automático
    let interval = setInterval(scrollStep, 16);

    // Funciones para pausar y reanudar el desplazamiento
    const stopScroll = () => clearInterval(interval);
    const startScroll = () => {
      clearInterval(interval);
      interval = setInterval(scrollStep, 16);
    };

    // Agrega los eventos de interacción
    carousel.addEventListener('touchstart', stopScroll);
    carousel.addEventListener('mousedown', stopScroll);
    carousel.addEventListener('touchend', startScroll);
    carousel.addEventListener('mouseup', startScroll);

    // Limpieza de eventos y el intervalo
    return () => {
      clearInterval(interval);
      if (carousel) {
        carousel.removeEventListener('touchstart', stopScroll);
        carousel.removeEventListener('mousedown', stopScroll);
        carousel.removeEventListener('touchend', startScroll);
        carousel.removeEventListener('mouseup', startScroll);
      }
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
