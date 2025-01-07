import React, { useState } from 'react';
import { Container, Avatar, Card, CardHeader, Chip, CardContent, Box, Grow, Snackbar, Alert } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import imgPerfil from '/img/the-gigachad-v0-0wlf07gr2wsc1.webp';
import contactos from '../../assets/json/contacto.json';
import './quienSoy.css'; // Importa el archivo CSS

function QuienSoy() {
    const [open, setOpen] = useState(false);

    const handleClick = (contacto) => {
        if (contacto.tipo === 'email') {
            navigator.clipboard.writeText(contacto.valor);
            setOpen(true);
        } else {
            window.open(contacto.valor, '_blank');
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className='quien-soy'>
            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 2, gap: 1 }}>
                <Card className="card-hover" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh', backgroundColor: 'var(--primary-color)', border: '1px solid var(--border-color)', borderRadius: '20px' }}>
                    <Avatar src={imgPerfil} alt="Foto de perfil" sx={{ width: '25vh', height: '25vh', loading:'lazy' }} />
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
                                    icon={
                                        contacto.tipo === 'Email' ? <Email /> :
                                        contacto.tipo === 'Github' ? <GitHub /> :
                                        contacto.tipo === 'Linkedin' ? <LinkedIn /> :
                                        null
                                    }
                                    className={
                                        contacto.tipo === 'Email' ? 'chip-email' :
                                        contacto.tipo === 'Github' ? 'chip-github' :
                                        contacto.tipo === 'Linkedin' ? 'chip-linkedin' :
                                        ''
                                    }
                                />
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </Container>
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