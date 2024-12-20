import { useState, useEffect, useRef } from 'react';
import './App.css';
import Proyectos from './components/proyectos/proyectos';
import Certificados from './components/certificados/certificados';
import Box from '@mui/material/Box';
import QuienSoy from './components/quienSoy/quienSoy';
import Tecnologias from './components/tecnologias/tecnologias';

function App() {
  const [showProyectos, setShowProyectos] = useState(false); // Controla la visibilidad de Proyectos
  const [showCertificados, setShowCertificados] = useState(false); // Controla la visibilidad de Certificados
  const proyectosRef = useRef(null); // Referencia para el componente Proyectos
  const certificadosRef = useRef(null); // Referencia para el componente Certificados
  const videoRef1 = useRef(null); // Referencia para el primer video de fondo
  const videoRef2 = useRef(null); // Referencia para el segundo video de fondo
  const videoRef3 = useRef(null); // Referencia para el tercer video de fondo

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowProyectos(entry.isIntersecting); // Cambia el estado según la visibilidad
      },
      {
        root: null, // Usa la ventana como contenedor
        rootMargin: '0px', // Sin margen adicional
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
      }
    );

    if (proyectosRef.current) {
      observer.observe(proyectosRef.current);
    }

    return () => {
      if (proyectosRef.current) {
        observer.unobserve(proyectosRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCertificados(entry.isIntersecting); // Cambia el estado según la visibilidad
      },
      {
        root: null, // Usa la ventana como contenedor
        rootMargin: '0px', // Sin margen adicional
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
      }
    );

    if (certificadosRef.current) {
      observer.observe(certificadosRef.current);
    }

    return () => {
      if (certificadosRef.current) {
        observer.unobserve(certificadosRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showProyectos) {
      videoRef1.current.classList.add('hidden');
      videoRef2.current.classList.remove('hidden');
      videoRef3.current.classList.add('hidden');
    } else if (showCertificados) {
      videoRef1.current.classList.add('hidden');
      videoRef2.current.classList.add('hidden');
      videoRef3.current.classList.remove('hidden');
    } else {
      videoRef1.current.classList.remove('hidden');
      videoRef2.current.classList.add('hidden');
      videoRef3.current.classList.add('hidden');
    }
  }, [showProyectos, showCertificados]);

  return (
    <Box className="App">
      <video
        ref={videoRef1}
        className="video-background"
        autoPlay
        loop
        muted
        preload="auto" // Preload para mejorar tiempos de carga
        poster="/path/to/poster1.jpg" // Imagen de poster mientras se carga el video
      >
        <source src="/video/battlefieldShangai.mp4" type="video/mp4" />
      </video>
      <video
        ref={videoRef2}
        className="video-background hidden"
        autoPlay
        loop
        muted
        preload="auto" // Preload para mejorar tiempos de carga
        poster="/path/to/poster2.jpg" // Imagen de poster mientras se carga el video
      >
        <source src="/video/battlefieldAeropuerto.mp4" type="video/mp4" />
      </video>
      <video
        ref={videoRef3}
        className="video-background hidden"
        autoPlay
        loop
        muted
        preload="auto" // Preload para mejorar tiempos de carga
        poster="/path/to/poster3.jpg" // Imagen de poster mientras se carga el video
      >
        <source src="/video/battlefieldNaval.mp4" type="video/mp4" />
      </video>
      <div className="quienSoy">
        <QuienSoy />
        <Tecnologias />
      </div>
      <div
        ref={proyectosRef}
        className={`proyectos-container ${showProyectos ? 'visible' : ''}`}
      >
        {showProyectos && <Proyectos />}
      </div>
      <div
        ref={certificadosRef}
        className={`certificados-container ${showCertificados ? 'visible' : ''}`}
      >
        {showCertificados && <Certificados />}
      </div>
    </Box>
  );
}

export default App;