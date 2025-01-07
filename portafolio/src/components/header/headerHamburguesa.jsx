import React, { useState } from 'react';
import './headerHamburguesa.css'; // Importa el archivo CSS
import logo from '/img/logos/Hv.webp';

function HeaderHamburguesa() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <img className='logo' style={{height:'100px', width:'170px',loading:'lazy'}} src={logo} alt="Logo" onClick={() => scrollToSection('quiensoy')} />
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li className='secciones' onClick={() => { scrollToSection('proyectos'); setMenuOpen(false); }}>Proyectos</li>
          <li className='secciones' onClick={() => { scrollToSection('certificados'); setMenuOpen(false); }}>Certificados</li>
          <li className='secciones' onClick={() => { scrollToSection('experiencia'); setMenuOpen(false); }}>Experiencia laboral</li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderHamburguesa;