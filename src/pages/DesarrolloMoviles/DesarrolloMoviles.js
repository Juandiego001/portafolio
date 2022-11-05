import { React, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './DesarrolloMoviles.module.css';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DesarrolloMoviles = () => {

  // Setting title
  useEffect(() => {
    document.title = "Desarrollo de software para plataformas móviles";
  }, []);

  return (
  <div>
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>
      <h1 className="h1 text-dark">
        Desarrollo de software para plataformas móviles
      </h1>

      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Aplicación Android + GPS</Card.Title>
          <Card.Text>
            Desarrollo de práctica para generar una aplicación Android que
            permita hacer uso de la API de localización mediante GPS.
          </Card.Text>
          <Button variant="dark" href="/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-gps">Ver entrada</Button>
        </Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Aplicación Android + Firebase</Card.Title>
          <Card.Text>
            Desarrollo de práctica para conectar una aplicación Android
            con el servicio de Google denominado Firebase para el 
            control de usuarios.
          </Card.Text>
          <Button variant="dark" href="/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-firebase">Ver entrada</Button>
        </Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Aplicación Android + Node.js + MySQL</Card.Title>
          <Card.Text>
            Desarrollo de práctica para conectar una aplicación Android
            con un servidor Node.js que a su vez se comunica con una base de 
            datos MySQL.
          </Card.Text>
          <Button variant="dark" href="/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-nodejs-mysql">Ver entrada</Button>
        </Card.Body>
      </Card>
    </Container>
  </div>
  )
};

DesarrolloMoviles.propTypes = {};

DesarrolloMoviles.defaultProps = {};

export default DesarrolloMoviles;
