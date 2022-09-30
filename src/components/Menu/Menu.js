import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';

// Bootstrap components
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Menu = () => (
  <Nav>
    <Nav.Item>
      <Nav.Link className="text-dark" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Desarrollo de software para plataformas móviles</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-dark" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Seguridad informática</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-dark" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Servicios telemáticos</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-dark" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Formulación y evaluación de proyectos</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-dark" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Gestión de la innovación</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-dark" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Ideas y oportunidades de negocio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="text-dark" href="/cursos/desarrollo-de-software-para-plataformas-moviles">Maratón de programación</Nav.Link>
    </Nav.Item>
  </Nav>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
