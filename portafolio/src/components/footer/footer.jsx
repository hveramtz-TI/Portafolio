import React from 'react';
import './footer.css'; // Importa el archivo CSS

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Héctor Vera. Todos los derechos reservados.</p>
        <div className="footer-links">
          <span onClick={() => scrollToSection('home')}>Inicio</span>
          <span onClick={() => scrollToSection('quiensoy')}>Quién Soy</span>
          <span onClick={() => scrollToSection('experiencia')}>Experiencia</span>
          <span onClick={() => scrollToSection('proyectos')}>Proyectos</span>
          <span onClick={() => scrollToSection('certificados')}>Certificados</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;