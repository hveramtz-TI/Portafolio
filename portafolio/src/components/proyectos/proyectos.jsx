import React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2'; // Asegúrate de importar desde @mui/material/Grid
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import './Proyectos.css'; // Importa el archivo CSS

import proyectos from '../../assets/json/proyectos.json';

function Proyectos() {
  return (
    <div>
        <Box sx={{ flexGrow: 1, padding:{xs:4,sm:3,md:4} }}>
            <Fade in={true} timeout={1500}>
                <Typography variant="h4" component="h2" gutterBottom align="center" sx={{paddingBottom:2}}>
                    Proyectos Destacados
                </Typography>
            </Fade>
        <Grow in={true} timeout={1000}>
        <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {proyectos.map((proyecto) => (
            <Grid2 item xs={2} sm={4} md={3} key={proyecto.id}>
                <Card className="card">
                    <CardMedia
                        component="img"
                        height="300px"
                        image="https://via.placeholder.com/200"
                        alt={proyecto.nombre}
                        className="card-media"
                    />
                    <Typography gutterBottom variant="h5" component="div" className="card-title">
                        {proyecto.nombre}
                    </Typography>
                    <CardContent className="card-content">
                        <Typography variant="body2" color="text">
                            {proyecto.descripcion}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
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
                                                    objectFit: 'contain' // Asegura que la imagen se ajuste sin recortarse
                                                }
                                            }}
                                        />
                                    }
                                    className={
                                        tecnologia.nombre === 'React' ? 'chip-react' : 
                                        tecnologia.nombre === 'Angular' ? 'chip-angular' : 
                                        ''
                                    } 
                                    sx={{
                                        border: '1px solid #f2f2f2', color:'white',  // Añade un borde de 1px de color negro
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