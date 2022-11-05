import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionAndroidGPS.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const AplicacionAndroidGps = () => {

  // Setting title
  useEffect(() => {
    document.title = "Aplicación Android + GPS | Desarrollo de software para plataformas móviles";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
      <Header />
      <Menu />

      <Container className="mt-4 px-5" fluid>
        <h1 className="h1 text-dark">
          Aplicación Android + GPS
        </h1>

        <div>
          <p>
            En esta práctica se mostrará como conectar una aplicación Android con el API de localización con
            el fin de generar una aplicación más robusta que permita utilizar datos en tiempo real de movimiento
            de los usuarios.
          </p>
        </div>
      </Container>
    </div>
  )};

AplicacionAndroidGps.propTypes = {};

AplicacionAndroidGps.defaultProps = {};

export default AplicacionAndroidGps;
