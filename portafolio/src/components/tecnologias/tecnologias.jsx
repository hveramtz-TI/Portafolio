import React, { useEffect, useRef } from 'react';
import tecnologias from '../../assets/json/tecnologias.json';
import './tecnologias.css';

function Tecnologias() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    let animationFrame;
    let isScrolling = false;

    const scrollStep = () => {
      if (carousel && !isScrolling) {
        const speed = window.innerWidth <= 768 ? 2 : 2; // Velocidad móvil/desktop
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

    const stopScroll = () => {
      cancelAnimationFrame(animationFrame);
      isScrolling = true;
      setTimeout(() => {
        isScrolling = false;
      }, 200);
    };

    // Agrega eventos
    carousel.addEventListener('mouseenter', stopScroll);
    carousel.addEventListener('mouseleave', startScroll);
    carousel.addEventListener('touchstart', stopScroll);
    carousel.addEventListener('touchend', startScroll);

    startScroll();

    return () => {
      cancelAnimationFrame(animationFrame);
      carousel.removeEventListener('mouseenter', stopScroll);
      carousel.removeEventListener('mouseleave', startScroll);
      carousel.removeEventListener('touchstart', stopScroll);
      carousel.removeEventListener('touchend', startScroll);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      {tecnologias.map((tecnologia, index) => (
        <div key={index} className="carousel-item">
          <img className="carousel-img" src={tecnologia.icono} alt={tecnologia.nombre} />
        </div>
      ))}
    </div>
  );
}

export default Tecnologias;
