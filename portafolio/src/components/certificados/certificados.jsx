import React from 'react';
import certificados from '../../assets/json/certificados.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Box, Chip, Avatar } from '@mui/material';
import './certificados.css';

function Certificados() {

  return (
    <div className='certificados'>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Certificados
      </Typography>
      <Box sx={{ display: 'flex', flexWrap:'wrap', gap: 2, justifyContent: 'center' , height: '100%' }}>
        {certificados.map((certificado) => (
          <Card key={certificado.id} sx={{ maxWidth: 300, margin: 2 }}>
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
                label={certificado.entidad} />
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default Certificados;