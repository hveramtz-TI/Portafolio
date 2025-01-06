import React, { useEffect, useRef } from 'react';
import tecnologias from '../../assets/json/tecnologias.json';
import './tecnologias.css';

function Tecnologias() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    let interval;
    let isScrolling = false;

    // Función para desplazar el carrusel
    const scrollStep = () => {
      if (carousel && !isScrolling) {
        carousel.scrollLeft += 2; // Ajusta la velocidad según sea necesario
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0; // Reinicia el desplazamiento al llegar al final
        }
      }
    };

    // Inicia el desplazamiento automático
    const startScroll = () => {
      clearInterval(interval);
      interval = setInterval(scrollStep, 30); // Ajusta el intervalo si es necesario
    };

    // Detiene el desplazamiento automático
    const stopScroll = () => {
      clearInterval(interval);
      isScrolling = true;
    };

    // Reinicia el desplazamiento después de la interacción
    const resumeScroll = () => {
      isScrolling = false;
      startScroll();
    };

    // Agrega eventos de interacción
    carousel.addEventListener('pointerdown', stopScroll);
    carousel.addEventListener('pointerup', resumeScroll);
    carousel.addEventListener('touchstart', stopScroll);
    carousel.addEventListener('touchend', resumeScroll);

    // Inicia el scroll al montar el componente
    startScroll();

    // Limpieza de eventos y el intervalo
    return () => {
      clearInterval(interval);
      if (carousel) {
        carousel.removeEventListener('pointerdown', stopScroll);
        carousel.removeEventListener('pointerup', resumeScroll);
        carousel.removeEventListener('touchstart', stopScroll);
        carousel.removeEventListener('touchend', resumeScroll);
      }
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      {tecnologias.map((tecnologia, index) => (
        <div key={index} className="carousel-item">
          <a href={tecnologia.link} target="_blank" rel="noopener noreferrer">
            <img
              src={tecnologia.icono}
              alt={tecnologia.nombre}
              style={{ cursor: 'pointer', width: '8vh', height: '8vh', objectFit: 'contain' }} 
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Tecnologias;