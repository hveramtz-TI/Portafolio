import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Box, Chip, Avatar, Grow } from '@mui/material';
import './certificados.css';
import Footer from '../footer/footer';

function Certificados({data}) {
  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='certificados'>
      <Grow in={true} timeout={1000}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Certificados
        </Typography>
      </Grow>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', height: '80%' }}>
        {data.map((certificado) => (
          <Grow in={true} timeout={1000} key={certificado.id}>
            <Card 
              sx={{ minWidth: '20vh !important', maxWidth: '40vh !important', margin: 2 }}
              onClick={() => handleCardClick(certificado.link)}
              style={{ cursor: 'pointer' }}
            >
              <CardMedia
                component="img"
                height="140"
                image={certificado.imagen}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {certificado.titulo}
                </Typography>
                <Chip
                  avatar={<Avatar src={certificado.iconoEntidad} sx={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }} />}
                  label={certificado.entidad}
                />
              </CardContent>
            </Card>
          </Grow>
        ))}
      </Box>
      <Footer />
    </div>
  );
}

export default Certificados;