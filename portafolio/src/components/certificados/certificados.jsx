import React from 'react';
import certificados from '../../assets/json/certificados.json';
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Certificados() {
  return (
    <div>
      <Masonry columns={3} spacing={2}>
        {certificados.map((certificado, index) => (
          <Card key={index} sx={{ maxWidth: 345 , padding: 2, backgroundColor: 'rgb(255,255,255,0.8)', border:'1px solid #060202', borderRadius:'20px' }}>
            <CardMedia
              component="img"
              height="140"
              image={certificado.imagen}
              alt={certificado.titulo}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent sx={{ textAlign: 'center', paddingBottom: '0 !important' }}>
              <Typography variant="h6" component="div">
                {certificado.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {certificado.entidad}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expedición: {certificado.expedicion}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Masonry>
    </div>
  );
}

export default Certificados;