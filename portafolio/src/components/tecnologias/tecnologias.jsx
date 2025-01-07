import React, { useEffect, useRef } from 'react';
import tecnologias from '../../assets/json/tecnologias.json';
import './tecnologias.css';

function Tecnologias() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    let animationFrame;

    const scrollStep = () => {
      if (carousel) {
        const speed = window.innerWidth <= 768 ? 1.5 : 1.5; // Velocidad móvil/desktop ajustada
        carousel.scrollLeft += speed;
        if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
          carousel.scrollLeft = 0;
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

  return (
    <div className="carousel" ref={carouselRef}>
      {tecnologias.map((tecnologia, index) => (
        <div key={index} className="carousel-item">
          <img src={tecnologia.icono} alt={tecnologia.nombre} />
        </div>
      ))}
    </div>
  );
}

export default Tecnologias;