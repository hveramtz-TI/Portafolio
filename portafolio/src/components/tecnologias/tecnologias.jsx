import React, { useEffect, useRef } from 'react';
import tecnologias from '../../assets/json/tecnologias.json';
import './tecnologias.css';

function Tecnologias() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    // Duplica el contenido al cargar
    const cloneContent = () => {
      const items = Array.from(carousel.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
      });
    };

    cloneContent();

    let animationFrameId;

    const scrollStep = () => {
      carousel.scrollLeft += 1;

      // Reiniciar cuando se alcanza el final de la duplicación
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    // Limpieza del intervalo al desmontar
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      {tecnologias.map((tecnologia, index) => (
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