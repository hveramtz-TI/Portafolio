import { useState, useEffect, useRef } from 'react';
import './App.css';
import Proyectos from './components/proyectos/proyectos';
import Box from '@mui/material/Box';
import QuienSoy from './components/quienSoy/quienSoy';

function App() {
  const [showProyectos, setShowProyectos] = useState(false); // Controla la visibilidad de Proyectos
  const proyectosRef = useRef(null); // Referencia para el componente Proyectos
  const videoRef1 = useRef(null); // Referencia para el primer video de fondo
  const videoRef2 = useRef(null); // Referencia para el segundo video de fondo

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
    if (showProyectos) {
      videoRef1.current.classList.add('hidden');
      videoRef2.current.classList.remove('hidden');
    } else {
      videoRef1.current.classList.remove('hidden');
      videoRef2.current.classList.add('hidden');
    }
  }, [showProyectos]);

  return (
    <Box className="App">
      <video ref={videoRef1} className="video-background" autoPlay loop muted>
        <source src="/background/battlefieldShangai.mp4" type="video/mp4" />
      </video>
      <video ref={videoRef2} className="video-background hidden" autoPlay loop muted>
        <source src="/background/battlefieldAeropuerto.mp4" type="video/mp4" />
      </video>
      <div className="quienSoy">
        <QuienSoy />
      </div>
      <div
        ref={proyectosRef}
        className={`proyectos-container ${showProyectos ? 'visible' : ''}`}
      >
        {showProyectos && <Proyectos />}
      </div>
    </Box>
  );
}

export default App;