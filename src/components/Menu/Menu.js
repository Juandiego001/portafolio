import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';

// Bootstrap components
import Nav from 'react-bootstrap/Nav';

const Menu = () => (
  <Nav className="bg-dark border-top border-light">
    <Nav.Item>
      <Nav.Link className="text-light" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Desarrollo de software para plataformas móviles</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-light" href="/cursos/seguridad-informatica">Seguridad informática</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-light" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Servicios telemáticos</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-light" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Formulación y evaluación de proyectos</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-light" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Gestión de la innovación</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-light" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Ideas y oportunidades de negocio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-light" href="/cursos/maraton-de-programacion">Maratón de programación</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-light" href="/cursos/bases-de-datos-2">Bases de datos 2</Nav.Link>
    </Nav.Item>
  </Nav>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
