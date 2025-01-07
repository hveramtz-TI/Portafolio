import React, { useEffect, useRef } from 'react';
import tecnologias from '../../assets/json/tecnologias.json';
import './tecnologias.css';

function Tecnologias() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    let interval;
    let isScrolling = false;

    const scrollStep = () => {
      if (carousel && !isScrolling) {
        const speed = window.innerWidth <= 768 ? 4 : 2; // Velocidad móvil/desktop
        carousel.scrollLeft += speed;
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
          carousel.scrollLeft = 0;
        }
      }
    };

    const startScroll = () => {
      clearInterval(interval);
      interval = setInterval(scrollStep, 16); // Más suave (16ms ≈ 60FPS)
    };

    const stopScroll = () => {
      clearInterval(interval);
      isScrolling = true;
      setTimeout(() => {
        isScrolling = false;
        startScroll();
      }, 3000); // Pausa 3 segundos tras interacción
    };

    // Eventos de interacción
    carousel.addEventListener('pointerdown', stopScroll);
    carousel.addEventListener('pointerup', startScroll);
    carousel.addEventListener('touchstart', stopScroll);
    carousel.addEventListener('touchend', startScroll);

    startScroll(); // Inicia el scroll al montar

    return () => {
      clearInterval(interval);
      if (carousel) {
        carousel.removeEventListener('pointerdown', stopScroll);
        carousel.removeEventListener('pointerup', startScroll);
        carousel.removeEventListener('touchstart', stopScroll);
        carousel.removeEventListener('touchend', startScroll);
      }
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      {tecnologias.concat(tecnologias).map((tecnologia, index) => (
        <div key={index} className="carousel-item">
          <a href={tecnologia.link} target="_blank" rel="noopener noreferrer">
            <img
              src={tecnologia.icono}
              alt={tecnologia.nombre}
              style={{
                cursor: 'pointer',
                width: '8vh',
                height: '8vh',
                objectFit: 'contain',
              }}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Tecnologias;
