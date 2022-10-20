import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './RestAPICentos.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const RestApiCentos = () => {

  // Setting title
  useEffect(() => {
    document.title = "Rest API + Centos 8 | Servicios telemáticos";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>
        <h1 className="h1 text-dark">
          Rest API + Centos 8
        </h1>

        <p>
          En la presente entrada se explicará como desarrollar una Rest API utilizando el framework
          de python llamado flask y nodejs. Esta práctica la estaremos desarrollando desde una máquina local
          y finalmente la desplegaremos en una máquina virtual Centos 8.
        </p>

        <div className="mt-5">
          <h2>
            Desarrollo express
          </h2>

          <p>
            A continuación se listarán una serie de comandos y archivos que se deben ejecutar y crear 
            con el objetivo de probar de manera rápida el aplicativo y hacer las modificaciones deseadas.
          </p>

        </div>

    </Container>
  </div>
  )
};

RestApiCentos.propTypes = {};

RestApiCentos.defaultProps = {};

export default RestApiCentos;
