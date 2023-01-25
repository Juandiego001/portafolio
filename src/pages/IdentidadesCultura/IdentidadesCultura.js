import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './IdentidadesCultura.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const IdentidadesCultura = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Identidades y cultura | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Variables de estudio, escalas de medición, tipos de variables, distribuciones de frecuencias, distribuciones de probabilidad y demás."></meta>
        <meta name="keywords" content="
          identidades y cultura juan diego cobo cabal,
          identidades y cultura jdcc,
          identidades y cultura,
          identidades cultura,
          identidades cultura jdcc,
          identidades cultura juan diego cobo cabal,
          Identidades y cultura JDCC,
          Identidades y cultura Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Identidades y cultura
          </h1>
        </div>

        <Footer />
      </div>
    </>
  )
};

IdentidadesCultura.propTypes = {};

IdentidadesCultura.defaultProps = {};

export default IdentidadesCultura;