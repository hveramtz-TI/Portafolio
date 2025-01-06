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
    videoRef1.current.classList.remove('hidden');
    videoRef2.current.classList.add('hidden');
    videoRef3.current.classList.add('hidden');
    videoRef4.current.classList.add('hidden');
  }, []);

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
          poster="/img/posterVideo/shangai.webp"
        >
          <source src="/video/Shangai.webm" type="video/webm" />
        </video>
        <video
          ref={videoRef2}
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
          ref={videoRef3}
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
          ref={videoRef4}
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
      <div className="quienSoy" id='quiensoy'>
        <QuienSoy />
        <Tecnologias />
      </div>
      <div id="experiencia" className="experiencia-container">
        <Experencia data={experenciaData} />
      </div>
      <div id="proyectos" className="proyectos-container">
        <Proyectos data={proyectosData} />
      </div>
      <div id="certificados" className="certificados-container">
        <Certificados data={certificadosData} />
      </div>
    </Box>
  );
}

export default App;