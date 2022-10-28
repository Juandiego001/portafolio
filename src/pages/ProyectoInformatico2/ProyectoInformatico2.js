import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProyectoInformatico2.module.css';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProyectoInformatico2 = () => {

  // Setting title
  useEffect(() => {
    document.title = "Proyecto informático 2";
  }, []);

  return (
    <div>
      <Header />
      <Menu />

      <Container className="mt-4 px-5" fluid>
        <h1 className="h1 text-dark">
            Proyecto Informático 2
        </h1>

        <Card className="mt-3">
        <Card.Body>
          <Card.Title>React + TypeScript + MySQL + Imgs</Card.Title>
          <Card.Text>
            Desarrollo de una aplicación web
            con React, utilizando el lenguaje Typescript que
            garantice la subida de imágenes a una base de datos.
          </Card.Text>
          <Button variant="dark" href="/cursos/proyecto-informatico-2/entradas/react-typescript-mysql-imgs">Ver entrada</Button>
        </Card.Body>
      </Card>

      </Container>
    </div>
  )
};

ProyectoInformatico2.propTypes = {};

ProyectoInformatico2.defaultProps = {};

export default ProyectoInformatico2;
