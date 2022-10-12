import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ServiciosTelematicos.module.css';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ServiciosTelematicos = () => {

  // Setting title
  useEffect(() => {
    document.title = "Servicios telemáticos";
  }, []);

  return (
  <div className={styles.ServiciosTelematicos}>
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>
      <h1 className="h1 text-dark">
        Servicios telemáticos
      </h1>

      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Aplicación Flask + Swagger + Centos 8</Card.Title>
          <Card.Text>
            Desarrollo de práctica para construir una aplicación
            web con el framework de python Flask y documentar
            la API con Swagger.
          </Card.Text>
          <Button variant="dark" href="/cursos/servicios-telematicos/entradas/aplicacion-flask-swagger">Ver entrada</Button>
        </Card.Body>
      </Card>
      
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Aplicación Flask + Centos 7</Card.Title>
          <Card.Text>
            Desarrollo de práctica para construir una aplicación
            web con el framework de python Flask en una máquina
            de Centos 7.
          </Card.Text>
          <Button variant="dark" href="/cursos/servicios-telematicos/entradas/aplicacion-flask-centos">Ver entrada</Button>
        </Card.Body>
      </Card>

    </Container>
  </div>
)};

ServiciosTelematicos.propTypes = {};

ServiciosTelematicos.defaultProps = {};

export default ServiciosTelematicos;
