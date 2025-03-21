import React, { useState } from 'react';
import { Avatar, Card, CardHeader, Chip, CardContent, Box, Snackbar, Alert } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import imgPerfil from '/img/foto-perfil.webp'; // Reemplaza con la ruta correcta a tu foto de perfil
import contactos from '../../assets/json/contacto.json';
import './quienSoy.css'; // Importa el archivo CSS

const iconMap = {
  Email: <Email />,
  Github: <GitHub />,
  Linkedin: <LinkedIn />
};

const classMap = {
  Email: 'chip-email',
  Github: 'chip-github',
  Linkedin: 'chip-linkedin'
};

function QuienSoy() {
  const [open, setOpen] = useState(false);
  const handleDownloadCV = () => {
    const linkES = document.createElement('a');
    linkES.href = '/CV-Hector-Vera-ES.pdf'; // Reemplaza con la ruta correcta a tu archivo PDF en español
    linkES.download = 'CV-Hector-Vera-ES.pdf';
    linkES.click();

    const linkEN = document.createElement('a');
    linkEN.href = '/CV-Hector-Vera-EN.pdf'; // Reemplaza con la ruta correcta a tu archivo PDF en inglés
    linkEN.download = 'CV-Hector-Vera-EN.pdf';
    linkEN.click();
  };

  const handleClick = (contacto) => {
    if (contacto.tipo === 'Email') {
      navigator.clipboard.writeText(contacto.valor);
      setOpen(true);
    } else {
      window.open(contacto.valor, '_blank');
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <div className='quien-soy' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '2vh', gap: '1rem' }}>
      <Card className="card-hover" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',padding:'2vh', backgroundColor: 'var(--primary-color)', border: '1px solid var(--border-color)', borderRadius: '20px' }}>
        <Avatar className="foto-perfil" src={imgPerfil} alt="Foto de perfil" sx={{ width: '25vh', height: '25vh', loading: 'lazy' }} />
        <CardHeader title="Hector Vera Martinez" subheader="Ingeniero de Ejecucion en Informatica" />
        <CardContent sx={{ padding: '0px !important' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mt: 0 }}>
            {contactos.contactos.map((contacto, index) => (
              <Chip
                key={index}
                label={contacto.tipo}
                component="a"
                onClick={() => handleClick(contacto)}
                clickable
                icon={iconMap[contacto.tipo]}
                className={classMap[contacto.tipo]}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
      <Card className="card-hover" sx={{ width: '700px', height:'fit-content', padding:'2vh', backgroundColor: 'var(--primary-color)', border: '1px solid var(--border-color)', borderRadius: '20px' }}>
        <p className='parrafo' style={{ margin: 0, padding: '1rem', fontSize: '2.3vh', lineHeight: '1.5', color: 'var(--text-color)' }}>
          Me apasiona resolver problemas reales a través del desarrollo de software, enfocándome en comprender las necesidades de los usuarios y diseñar soluciones tecnológicas que brinden valor y mejoren la vida de las personas. Disfruto del desarrollo web y móvil, y siempre busco mejorar mis habilidades y conocimientos.
        </p>
        <Chip className='chip-cv' label="CV" onClick={handleDownloadCV} sx={{ width:'100%'}} />
      </Card>
      <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Email copiado correctamente!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default QuienSoy;