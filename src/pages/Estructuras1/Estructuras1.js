import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Estructuras1.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Estructuras1 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Estructuras de datos y algoritmos 1 | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Búsqueda binaria, tipos de ordenamiento, órdenes de complejidad, arreglos dinámicos y demás."></meta>
        <meta name="keywords" content="
          estructuras de datos 1 juan diego cobo cabal,
          estructuras de datos 1 jdcc,
          estructuras de datos,
          estructuras de datos 1,
          estructuras de datos y algoritmos jdcc,
          estructuras de datos y algoritmos juan diego cobo cabal,
          estructuras de datos algoritmos 1 jdcc,
          estructuras de datos y algoritmos 1 juan diego cobo cabal,
          Estructuras de datos JDCC,
          Estructuras de datos Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5">
          <h1 className="h1 text-dark text-center">
            Estructuras de datos y algoritmos 1
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

Estructuras1.propTypes = {};

Estructuras1.defaultProps = {};

export default Estructuras1;
