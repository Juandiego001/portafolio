import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ArquitecturaComputadores.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ArquitecturaComputadores = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Arquitectura de computadores | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Conceptos de electrónica, pulsos, diagramas de tiempo, codificadores, multiplexores, demultiplexores y demás."></meta>
        <meta name="keywords" content="
          arquitectura de computadores juan diego cobo cabal,
          arquitectura de computadores jdcc,
          arquitectura de computadores,
          arquitectura,
          arquitectura computadores jdcc,
          arquitectura computadores juan diego cobo cabal,
          Arquitectura de computadores JDCC,
          Arquitectura de computadores Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5">
          <h1 className="h1 text-dark text-center">
            Arquitectura de computadores
          </h1>

          <h2 className="mt-5">
            Entradas
          </h2>

          <h2 className="mt-5">
            Evaluaciones
          </h2>
        </div>

        <Footer />
      </div>
    </>
  )
};

ArquitecturaComputadores.propTypes = {};

ArquitecturaComputadores.defaultProps = {};

export default ArquitecturaComputadores;
