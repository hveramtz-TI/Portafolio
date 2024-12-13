import React from 'react'
import { Container, Grid2, Avatar, Card, CardHeader, Chip, CardContent, Box } from '@mui/material'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import contactos from '../../assets/json/contacto.json'
import './quienSoy.css' // Importa el archivo CSS

function QuienSoy() {
    return (
        <div>
            <Container sx={{ alignContent: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                <Grid2 container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid2 item xs={2} sm={4} md={3}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 350 }}>
                            <Avatar src="https://via.placeholder.com/200" alt="Foto de perfil" sx={{ width: 200, height: 200 }} />
                            <CardHeader title="Hector Vera Martinez" subheader="Ingeniero de Ejecucion en Informatica" />
                            <CardContent sx={{ padding: '0px', paddingBottom: '0px !important' }}>
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
                    <Grid2 item xs={2} sm={4} md={3}>
                        <Card sx={{ padding: 2 }}>
                            <h1>¿Quién soy?</h1>
                            <p>Primero que nada. Hola,¿Como estas? :D</p>
                            <p>En la actualidad tengo 23 años</p>
                            <p>Desse </p>
                        </Card>
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    )
}

export default QuienSoy