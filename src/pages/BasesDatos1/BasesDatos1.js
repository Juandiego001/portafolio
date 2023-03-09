import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './BasesDatos1.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const BasesDatos1 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bases de datos 1 | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Normalización, modelación de bases de datos, MER, algebra relacional, JDBC, MySQL y demás."></meta>
        <meta name="keywords" content="
          bases de datos juan diego cobo cabal,
          bases de datos jdcc,
          bases de datos,
          bases de datos 1,
          Bases de datos jdcc,
          Bases de datos juan diego cobo cabal,
          bases de datos 1 jdcc,
          bases de datos 1 juan diego cobo cabal,
          Bases de datos 1 JDCC,
          Bases de datos 1 Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5">
          <h1 className="h1 text-dark text-center">
            Bases de datos 1
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

BasesDatos1.propTypes = {};

BasesDatos1.defaultProps = {};

export default BasesDatos1;
