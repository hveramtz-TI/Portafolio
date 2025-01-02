import React from 'react'
import { Container, Avatar, Card, CardHeader, Chip, CardContent, Box, Grow } from '@mui/material'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import imgPerfil from '/img/the-gigachad-v0-0wlf07gr2wsc1.webp'
import contactos from '../../assets/json/contacto.json'
import './quienSoy.css' // Importa el archivo CSS

function QuienSoy() {
    return (
        <div className='quien-soy'>
            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 2, gap: 1 }}>
                <Card className="card-hover" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh', backgroundColor: '#aba8a8', border:'1px solid #060202', borderRadius:'20px' }}>
                    <Avatar src={imgPerfil} alt="Foto de perfil" sx={{ width: '25vh', height: '25vh' }} />
                    <CardHeader title="Hector Vera Martinez" subheader="Ingeniero de Ejecucion en Informatica" />
                    <CardContent sx={{ padding: '0px !important' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mt: 0 }}>
                            {contactos.contactos.map((contacto, index) => (
                                <Chip
                                    key={index}
                                    label={contacto.tipo}
                                    component="a"
                                    href={contacto.valor}
                                    clickable
                                    icon={
                                        contacto.tipo === 'email' ? <Email /> :
                                        contacto.tipo === 'github' ? <GitHub /> :
                                        contacto.tipo === 'linkedin' ? <LinkedIn /> :
                                        null
                                    }
                                    className={
                                        contacto.tipo === 'email' ? 'chip-email' :
                                        contacto.tipo === 'github' ? 'chip-github' :
                                        contacto.tipo === 'linkedin' ? 'chip-linkedin' :
                                        ''
                                    }
                                />
                            ))}
                        </Box>
                    </CardContent>
                </Card>
                <Grow in={true}>
                    <Card className="card-hover" sx={{ padding: 1 , width:'60vh', height:'auto', backgroundColor: '#aba8a8', border:'1px solid #060202', borderRadius:'20px' }}>
                        <CardContent sx={{paddingBottom:'16px !important'}}>
                            <p className='parrafo'>Me apasiona resolver problemas reales a través del desarrollo de software, enfocándome en comprender las necesidades de los usuarios y diseñar soluciones tecnológicas que brinden valor y mejoren la vida de las personas. Disfruto del desarrollo web y móvil, y siempre busco mejorar mis habilidades y conocimientos.</p>
                        </CardContent>
                    </Card>
                </Grow>
            </Container>
        </div>
    )
}

export default QuienSoy