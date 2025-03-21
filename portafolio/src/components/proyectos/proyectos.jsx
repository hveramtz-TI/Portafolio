import React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid'; // Asegúrate de importar desde @mui/material/Grid
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import './proyectos.css'; // Importa el archivo CSS

function Proyectos({ data }) {
  return (
    <div className='proyectos'>
      <Box sx={{ flexGrow: 1, padding: { xs: 1, sm: 2, md: 3 } }}>
        <Fade in={true} timeout={1500}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ paddingBottom: 2, color: 'white' }}>
            Proyectos Destacados
          </Typography>
        </Fade>
        <Grow in={true} timeout={1000}>
          <Grid2 container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 2, md: 3, lg: 11,xl:14 }} justifyContent="center">
            {data.map((proyecto) => (
              <Grid2 item xs={4} sm={4} md={3} key={proyecto.id}>
                <Card className="card" sx={{width:'100%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#000000', color: 'white' }}>
                  <CardMedia
                    component="img"
                    image={proyecto.imagen ? proyecto.imagen : "https://via.placeholder.com/200"}
                    alt={proyecto.nombre}
                    className="card-media"
                    loading="lazy" // Añade carga diferida
                    sx={{ height: '100%' }} // Ajusta la altura de la imagen
                  />
                  <Typography gutterBottom variant="h5" component="div" className="card-title" sx={{ color: 'white', backgroundColor: '#000000', translateY: '-50% '}}>
                    {proyecto.nombre}
                  </Typography>
                  <CardContent className="card-content">
                    <Typography variant="body2" color="text">
                      {proyecto.descripcion}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1, justifyContent: 'center' }}>
                      {proyecto.tecnologias.map((tecnologia, index) => (
                        <Chip
                          key={index}
                          label={tecnologia.nombre}
                          avatar={
                            <Avatar
                              src={tecnologia.icono}
                              imgProps={{
                                style: {
                                  width: '100%', // Ajusta el ancho de la imagen
                                  height: '100%', // Ajusta la altura de la imagen
                                  objectFit: 'contain', // Asegura que la imagen se ajuste sin recortarse
                                  loading: 'lazy', // Añade carga diferida
                                }
                              }}
                              sx={{
                                width: '24px !important',
                                height: '24px !important',
                                transition: 'border-color 0.3s ease, transform 0.3s ease',
                              }} // Ajusta el tamaño del avatar
                            />
                          }
                          className="chip" // Aplica la clase base
                          sx={{
                            color: 'white',
                            loading: 'lazy',
                            border: `1px solid ${tecnologia.color}`, // Usa el color del JSON
                            '&:hover': {
                              backgroundColor: tecnologia.colorHover, // Usa el colorHover del JSON
                              boxShadow: `0 0 10px ${tecnologia.color}, 0 0 20px ${tecnologia.color}, 0 0 30px ${tecnologia.color}`, // Efecto de iluminación
                              '& .MuiAvatar-root': {
                                border: `2px solid ${tecnologia.color}`, // Usa el colorHover del JSON para el borde en hover
                                transform: 'scale(1.1)', // Efecto de zoom en hover
                              }
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Grow>
      </Box>
    </div>
  );
}

export default Proyectos;