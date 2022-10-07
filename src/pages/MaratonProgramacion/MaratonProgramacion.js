import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MaratonProgramacion.module.css';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MaratonProgramacion = () => {

  useEffect(() => {
    document.title = "Maraton de programación";
  }, []);

  return (
    <div>
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>
      <h1 className="h1 text-dark">
        Maratón de programación
      </h1>

      <Card className="mt-3">
        <Card.Body>
          <Card.Title>El problema de la mochila</Card.Title>
          <Card.Text>
            Análisis y solución de uno de los problemas más
            famosos de la programación dinámica
          </Card.Text>
          <Button variant="dark" href="/cursos/maraton-de-programacion/entradas/el-problema-de-la-mochila">Ver entrada</Button>
        </Card.Body>
      </Card>
    </Container>
  </div>
  )
};

MaratonProgramacion.propTypes = {};

MaratonProgramacion.defaultProps = {};

export default MaratonProgramacion;
