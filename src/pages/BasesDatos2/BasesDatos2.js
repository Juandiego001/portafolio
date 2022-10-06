import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasesDatos2.module.css';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BasesDatos2 = () => {
  return (
    <div>
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>
      <h1 className="h1 text-dark">
        Bases de datos 2
      </h1>

      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Inserciones, triggers y funciones en Oracle</Card.Title>
          <Card.Text>
            Solución de actividad de bases de datos 2 en la que se plantean 
            la creación de inserciones, triggers y funciones en el manejador
            de bases de datos Oracle.
          </Card.Text>
          <Button variant="dark" href="/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-nodejs-mysql">Ver entrada</Button>
        </Card.Body>
      </Card>
    </Container>
  </div>
  )
};

BasesDatos2.propTypes = {};

BasesDatos2.defaultProps = {};

export default BasesDatos2;
