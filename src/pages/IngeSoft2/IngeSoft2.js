import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './IngeSoft2.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const IngeSoft2 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ingeniería de software 2 | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Riesgos, tipos clasificion de clientes, usuarios y clientes, requerimientos, restricciones, analisis de valor limite y demás."></meta>
        <meta name="keywords" content="
          ingenieria de software juan diego cobo cabal,
          ingenieria de software jdcc,
          ingeniería de software,
          ingenieria de software 2,
          ingeniería de software 2,
          ingeniería de software jdcc,
          ingeniería de software juan diego cobo cabal,
          ingeniería de software 2 jdcc,
          ingeniería de software 2 juan diego cobo cabal,
          Ingeniería de software JDCC,
          Ingeniería de software Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Ingeniería de software 2
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

IngeSoft2.propTypes = {};

IngeSoft2.defaultProps = {};

export default IngeSoft2;
