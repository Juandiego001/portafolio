import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SeguridadInformatica.module.css';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SeguridadInformatica = () => {

  useEffect(() => {
    document.title = "Seguridad Informática";
  }, []);

  return (
    <div>
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>
      <h1 className="h1 text-dark">
        Seguridad informática
      </h1>

      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Metasploit Kali + Windows XP</Card.Title>
          <Card.Text>
            Desarrollo de laboratorio para explotar una vulnerabilidad de 
            un sistema operativo Windows XP mediante otro sistema operativo
            Kali Linux.
          </Card.Text>
          <Button variant="dark" href="/cursos/seguridad-informatica/entradas/metasploit-kali-windows-xp">Ver entrada</Button>
        </Card.Body>
      </Card>
    </Container>
  </div>
  )
};

SeguridadInformatica.propTypes = {};

SeguridadInformatica.defaultProps = {};

export default SeguridadInformatica;
