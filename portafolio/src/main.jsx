import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import videoLoading from '/video/coalscence.mp4';
import { LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from './App.jsx';

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      setBuffer((prevBuffer) => (prevBuffer >= 100 ? 10 : prevBuffer + 10));
    }, 500); // Ajusta la velocidad del progreso

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="loading-screen">
      <video autoPlay muted loop className="background-video">
        <source src={videoLoading} type="video/mp4" />
      </video>
      <div className="loading-bar-container">
        <LinearProgress
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
          className="loading-bar"
        />
      </div>
    </div>
  );
}

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500); // Simula una carga de 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="app-content transition">
          <App />
        </div>
      )}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);
