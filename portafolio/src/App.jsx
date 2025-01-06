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
  const [proyectosData, setProyectosData] = useState([]);
  const [certificadosData, setCertificadosData] = useState([]);
  const [experenciaData, setExperenciaData] = useState([]);
  const [activeSection, setActiveSection] = useState('home');
  const videoRefs = {
    home: useRef(null),
    quiensoy: useRef(null),
    experiencia: useRef(null),
    proyectos: useRef(null),
    certificados: useRef(null),
  };

  useEffect(() => {
    // Carga los datos desde los archivos JSON
    setProyectosData(proyectosDataJson);
    setCertificadosData(certificadosDataJson);
    setExperenciaData(experienciaDataJson);
  }, []);

  useEffect(() => {
    Object.keys(videoRefs).forEach((key) => {
      if (videoRefs[key].current) {
        videoRefs[key].current.classList.add('hidden');
      }
    });
    if (videoRefs[activeSection] && videoRefs[activeSection].current) {
      videoRefs[activeSection].current.classList.remove('hidden');
    }
  }, [activeSection]);

  return (
    <Box className="App" id="home">
      <HeaderHamburguesa setActiveSection={setActiveSection} />
      <div className="video-container">
        <video
          ref={videoRefs.quiensoy}
          className="video-background hidden"
          autoPlay
          loop
          muted
          playsInline
          poster="/img/posterVideo/shangai.webp"
        >
          <source src="/video/Shangai.webm" type="video/webm" />
        </video>
        <video
          ref={videoRefs.experiencia}
          className="video-background hidden"
          autoPlay
          loop
          muted
          playsInline
          poster="/img/posterVideo/aeropuerto.webp"
        >
          <source src="/video/Aeropuerto.webm" type="video/webm" />
        </video>
        <video
          ref={videoRefs.proyectos}
          className="video-background hidden"
          autoPlay
          loop
          muted
          playsInline
          poster="/img/posterVideo/portaviones.webp"
        >
          <source src="/video/Naval.webm" type="video/webm" />
        </video>
        <video
          ref={videoRefs.certificados}
          className="video-background hidden"
          autoPlay
          loop
          muted
          playsInline
          poster="/img/posterVideo/edificios.webp"
        >
          <source src="/video/Edificio.webm" type="video/webm" />
        </video>
      </div>
      <div className="quienSoy" id='quiensoy' onMouseEnter={() => setActiveSection('quiensoy')}>
        <QuienSoy />
        <Tecnologias />
      </div>
      <div id="experiencia" className="experiencia-container" onMouseEnter={() => setActiveSection('experiencia')}>
        <Experencia data={experenciaData} />
      </div>
      <div id="proyectos" className="proyectos-container" onMouseEnter={() => setActiveSection('proyectos')}>
        <Proyectos data={proyectosData} />
      </div>
      <div id="certificados" className="certificados-container" onMouseEnter={() => setActiveSection('certificados')}>
        <Certificados data={certificadosData} />
      </div>
    </Box>
  );
}

export default App;