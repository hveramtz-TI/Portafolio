import React from 'react';
import Slider from 'react-slick'; // Importa el carrusel
import certificados from '../../assets/json/certificados.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Certificados() {
  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ padding: 2 }}>
        Certificados
      </Typography>
      
    </div>
  );
}

export default Certificados;
