import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AmbienteSostenible.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AmbienteSostenible = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ambiente y desarrollo sostenible | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Objetivos de desarrollo sostenible, tipos de contaminación y su impacto, medios de transmisión de enfermedades y demás."></meta>
        <meta name="keywords" content="
          ambiente y desarrollo sostenible juan diego cobo cabal,
          ambiente y desarrollo sostenible jdcc,
          Ambiente y Desarrollo sostenible,
          Ambiente y Desarrollo sostenible jdcc,
          Ambiente y Desarrollo sostenible juan diego cobo cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Ambiente y desarrollo sostenible
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

AmbienteSostenible.propTypes = {};

AmbienteSostenible.defaultProps = {};

export default AmbienteSostenible;
