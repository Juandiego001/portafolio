import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Estructuras2.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Estructuras2 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Estructuras de datos y algoritmos 2 | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Grafos, árboles, conceptos de grafos, tipos de grafos, grafos en java, tipos de árboles, conceptos de árboles y demás."></meta>
        <meta name="keywords" content="
          estructuras de datos 2 juan diego cobo cabal,
          estructuras de datos 2 jdcc,
          estructuras de datos 2,
          estructuras de datos y algoritmos jdcc,
          estructuras de datos y algoritmos juan diego cobo cabal,
          estructuras de datos y algoritmos 2 jdcc,
          estructuras de datos y algoritmos 2 juan diego cobo cabal,
          Estructuras de datos y algoritmos JDCC,
          Estructuras de datos y algoritmos Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5">
          <h1 className="h1 text-dark text-center">
            Estructuras de datos y algoritmos 2
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

Estructuras2.propTypes = {};

Estructuras2.defaultProps = {};

export default Estructuras2;
