import React, { useState } from 'react';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Grow } from '@mui/material';
import './experencia.css'; // Importa el archivo CSS

function Experencia({data}) {
    const [activeStep, setActiveStep] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedExp, setSelectedExp] = useState(null);

    const handleToggle = (index) => {
        setActiveStep(activeStep === index ? null : index);
    };

    const handleOpenDialog = (exp) => {
        setSelectedExp(exp);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedExp(null);
    };

    return (
        <Grow in={true} timeout={1000}>
            <Paper elevation={3} className="experiencia-paper">
                <Typography variant="h4" component="h1" gutterBottom>
                    Experiencia
                </Typography>
                <Stepper orientation="vertical" className="experiencia-stepper">
                    {data.map((exp, index) => (
                        <Step key={index} active>
                            <StepLabel>
                                <Typography variant="h6">{exp.titulo}</Typography>
                                <Typography variant="subtitle1">{exp.fecha}</Typography>
                            </StepLabel>
                            <StepContent>
                                <Typography>{exp.descripcion}</Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleOpenDialog(exp)}
                                    className="experiencia-button"
                                >
                                    Ver más
                                </Button>
                            </StepContent>
                        </Step>
                    ))}
                    <Step active>
                        <StepLabel>
                            <Typography variant="h6">Buscando Empleo</Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography>Actualmente en búsqueda de nuevas oportunidades laborales.</Typography>
                        </StepContent>
                    </Step>
                </Stepper>

                {selectedExp && (
                    <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md" TransitionComponent={Grow} transitionDuration={1000}>
                        <DialogTitle>{selectedExp.titulo}</DialogTitle>
                        <DialogContent>
                            <Typography variant="subtitle1">{selectedExp.fecha}</Typography>
                            <Typography variant="body1" paragraph>{selectedExp.descripcion}</Typography>
                            {selectedExp.responsabilidades && (
                                <>
                                    <Typography variant="subtitle2" gutterBottom>Responsabilidades:</Typography>
                                    <ul>
                                        {selectedExp.responsabilidades.map((resp, idx) => (
                                            <li key={idx}><Typography>{resp}</Typography></li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {selectedExp.funciones_clave && (
                                <>
                                    <Typography variant="subtitle2" gutterBottom>Funciones Clave:</Typography>
                                    <ul>
                                        {selectedExp.funciones_clave.map((func, idx) => (
                                            <li key={idx}><Typography>{func}</Typography></li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog} color="primary">
                                Cerrar
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}
            </Paper>
        </Grow>
    );
}

export default Experencia;