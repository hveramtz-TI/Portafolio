import { useState, useEffect, useRef } from 'react';
import './App.css';
import Proyectos from './components/proyectos/proyectos';
import Certificados from './components/certificados/certificados';
import Box from '@mui/material/Box';
import QuienSoy from './components/quienSoy/quienSoy';
import Tecnologias from './components/tecnologias/tecnologias';
import HeaderHamburguesa from './components/header/headerHamburguesa';
import Experencia from './components/experiencia/experencia';

// Importa los datos desde archivos JSON
import proyectosDataJson from './assets/json/proyectos.json';
import certificadosDataJson from './assets/json/certificados.json';
import experienciaDataJson from './assets/json/experencia.json';

function App() {
  const [showProyectos, setShowProyectos] = useState(false);
  const [showCertificados, setShowCertificados] = useState(false);
  const [showExperencia, setShowExperencia] = useState(false);
  const [proyectosData, setProyectosData] = useState([]);
  const [certificadosData, setCertificadosData] = useState([]);
  const [experenciaData, setExperenciaData] = useState([]);
  const proyectosRef = useRef(null);
  const certificadosRef = useRef(null);
  const experienciaRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  useEffect(() => {
    // Carga los datos desde los archivos JSON
    setProyectosData(proyectosDataJson);
    setCertificadosData(certificadosDataJson);
    setExperenciaData(experienciaDataJson);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowProyectos(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
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
        setShowCertificados(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowExperencia(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (experienciaRef.current) {
      observer.observe(experienciaRef.current);
    }

    return () => {
      if (experienciaRef.current) {
        observer.unobserve(experienciaRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showProyectos) {
      videoRef1.current.classList.add('hidden');
      videoRef2.current.classList.remove('hidden');
      videoRef3.current.classList.add('hidden');
      videoRef4.current.classList.add('hidden');
    } else if (showCertificados) {
      videoRef1.current.classList.add('hidden');
      videoRef2.current.classList.add('hidden');
      videoRef3.current.classList.remove('hidden');
      videoRef4.current.classList.add('hidden');
    } else if (showExperencia) {
      videoRef1.current.classList.add('hidden');
      videoRef2.current.classList.add('hidden');
      videoRef3.current.classList.add('hidden');
      videoRef4.current.classList.remove('hidden');
    } else {
      videoRef1.current.classList.remove('hidden');
      videoRef2.current.classList.add('hidden');
      videoRef3.current.classList.add('hidden');
      videoRef4.current.classList.add('hidden');
    }
  }, [showProyectos, showCertificados, showExperencia]);

  return (
    <Box className="App" id="home">
      <HeaderHamburguesa />
      <div className="video-container">
        <video
          ref={videoRef1}
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/img/posterVideo/shangai.webp"
        >
          <source src="/video/battlefieldShangai.mp4" type="video/mp4" />
        </video>
        <video
          ref={videoRef2}
          className="video-background hidden"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/img/posterVideo/aeropuerto.webp"
        >
          <source src="/video/battlefieldAeropuerto.mp4" type="video/mp4" />
        </video>
        <video
          ref={videoRef3}
          className="video-background hidden"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/img/posterVideo/portaviones.webp"
        >
          <source src="/video/battlefieldNaval.mp4" type="video/mp4" />
        </video>
        <video
          ref={videoRef4}
          className="video-background hidden"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/img/posterVideo/edificios.webp"
        >
          <source src="/video/Battlefieldedificio.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="quienSoy" id='quiensoy'>
        <QuienSoy />
        <Tecnologias />
      </div>
      <div
        id="experiencia"
        ref={experienciaRef}
        className={`experiencia-container ${showExperencia ? 'visible' : ''}`}
      >
        {showExperencia && <Experencia data={experenciaData} />}
      </div>
      <div
        id="proyectos"
        ref={proyectosRef}
        className={`proyectos-container ${showProyectos ? 'visible' : ''}`}
      >
        {showProyectos && <Proyectos data={proyectosData} />}
      </div>
      <div
        id="certificados"
        ref={certificadosRef}
        className={`certificados-container ${showCertificados ? 'visible' : ''}`}
      >
        {showCertificados && <Certificados data={certificadosData} />}
      </div>
    </Box>
  );
}

export default App;