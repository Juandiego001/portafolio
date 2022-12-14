import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionFlaskCentos.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const AplicacionFlaskCentos = () => {

  // Setting title
  useEffect(() => {
    document.title = "Aplicación Flask + Centos 7 | Servicios telemáticos";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="h1 text-dark">
          Aplicación Flask + Centos 7
        </h1>

        <p>
          En la presente entrada se explicará como crear una aplicación web con Flask en una máquina virtual de Centos 7.
          La diferencia a tener en cuenta con otras versiones de Centos tales como la 8 es la instalación del módulo  <code>mod_wsgi.</code>
        </p>

        <h2 className="h2 text-dark mt-5">
          Introducción
        </h2>

        <p>
          Para iniciar tendremos en cuenta el siguiente Vagrantfile:
        </p>

        <pre>
          <code>

          </code>
        </pre>

      </div>

      <Footer />
    </div>
  )
};

AplicacionFlaskCentos.propTypes = {};

AplicacionFlaskCentos.defaultProps = {};

export default AplicacionFlaskCentos;
