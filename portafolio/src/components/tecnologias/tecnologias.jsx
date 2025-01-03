import React, { useEffect, useRef } from 'react';
import tecnologias from '../../assets/json/tecnologias.json';
import './tecnologias.css';

function Tecnologias() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    // Calcular la cantidad de elementos que caben en el carrusel (asumiendo que son 24)
    const totalItems = 24; // Número total de elementos
    const itemWidth = carousel.children[0]?.offsetWidth || 0; // Ancho de un item
    const carouselWidth = carousel.offsetWidth; // Ancho visible del carrusel
    const itemsInView = Math.floor(carouselWidth / itemWidth); // Cuántos items caben en el carrusel

    // Duplica el contenido al cargar
    const cloneContent = () => {
      const items = Array.from(carousel.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
      });
    };

    cloneContent();

    const scrollStep = () => {
      // Desplazamiento más suave
      carousel.scrollLeft += 1.5;

      // Reiniciar cuando se alcanza el final de la duplicación
      if (carousel.scrollLeft >= carousel.scrollWidth / 1) {
        carousel.scrollLeft = 0;
      }
    };

    const interval = setInterval(scrollStep, 16); // Velocidad optimizada

    // Limpieza del intervalo al desmontar
    return () => clearInterval(interval);
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
