import React from 'react'
import { Container, Grid2, Avatar, Card, CardHeader, Chip, CardContent, Box, Grow } from '@mui/material'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import contactos from '../../assets/json/contacto.json'
import './quienSoy.css' // Importa el archivo CSS

function QuienSoy() {
    return (
        <div>
            <Container sx={{ alignContent: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 7 }}>
                <Grid2 container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid2 item xs={2} sm={4} md={3}>
                        <Card className="card-hover" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '380px', backgroundColor: '#aba8a8', border:'1px solid #060202', borderRadius:'20px' }}>
                            <Avatar src="https://via.placeholder.com/200" alt="Foto de perfil" sx={{ width: 200, height: 200 }} />
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
                    </Grid2>
                    <Grid2 item xs={2} sm={4} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Grow in={true}>
                            <Card className="card-hover" sx={{ padding: 2 , width:'500px', heigh:'auto', backgroundColor: '#aba8a8', border:'1px solid #060202', borderRadius:'20px' }}>
                                <CardContent sx={{paddingBottom:'16px !important'}}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <p className='parrafo'>Para mí, el desarrollo de software no solo se trata de escribir código; se trata de resolver problemas reales. Mi filosofía se centra en comprender a fondo las necesidades de los usuarios y diseñar soluciones tecnológicas que no solo sean funcionales, sino que también brinden valor y mejoren la vida de las personas.</p>
                                        <p className='parrafo'>Me apasiona el desarrollo web y móvil, y disfruto trabajando con tecnologías modernas y herramientas de vanguardia. Me considero un aprendiz constante y siempre estoy buscando mejorar mis habilidades y conocimientos.</p>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grow>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    )
}

export default QuienSoy