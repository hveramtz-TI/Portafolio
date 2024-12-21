import React from 'react';
import './header.css'; // Importa el archivo CSS
import logo from '/img/logos/Hv.webp';

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <img className='logo' src={logo} alt="Logo" onClick={() => scrollToSection('quiensoy')} />
          </li>
          <li className='secciones' onClick={() => scrollToSection('proyectos')}>Proyectos</li>
          <li className='secciones' onClick={() => scrollToSection('certificados')}>Certificados</li>
          <li className='secciones' onClick={() => scrollToSection('section3')}>Experiencia laboral</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;