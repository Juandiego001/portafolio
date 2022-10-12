import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionFlaskMySQL.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const AplicacionFlaskMySql = () => {

  // Setting title
  useEffect(() => {
    document.title = "Aplicación Flask + MySQL | Servicios telemáticos";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>
      <h1 className="h1 text-dark">
        Aplicación Flask + MySQL
      </h1>

      <p>
        En la presente entrada se explicará como crear una aplicación web con Flask y MySQL en una máquina virtual Centos 8.
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

      

    </Container>
  </div>
)};

AplicacionFlaskMySql.propTypes = {};

AplicacionFlaskMySql.defaultProps = {};

export default AplicacionFlaskMySql;
