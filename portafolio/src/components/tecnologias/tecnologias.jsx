import React, { useEffect, useRef } from 'react';
import tecnologias from '../../assets/json/tecnologias.json';
import './tecnologias.css';

function Tecnologias() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    let animationFrame;
    const scrollSpeed = 1.5; // Velocidad del scroll

    // Función para manejar el scroll infinito
    const scrollStep = () => {
      if (carousel) {
        carousel.scrollLeft += scrollSpeed;
        // Reinicia el scroll cuando llegue al final
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0; // Vuelve al inicio del contenido duplicado
        }
        animationFrame = requestAnimationFrame(scrollStep);
      }
    };

    const startScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(scrollStep);
    };

    startScroll();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const handleItemClick = (link) => {
    window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
  };

  return (
    <div className="carousel" ref={carouselRef}>
      {/* Contenido duplicado para lograr el efecto de scroll infinito */}
      {[...tecnologias, ...tecnologias].map((tecnologia, index) => (
        <div
          key={index}
          className="carousel-item"
          onClick={() => handleItemClick(tecnologia.link)}
          style={{ cursor: 'pointer' }}
        >
          <img src={tecnologia.icono} alt={tecnologia.nombre} />
        </div>
      ))}
    </div>
  );
}

export default Tecnologias;
