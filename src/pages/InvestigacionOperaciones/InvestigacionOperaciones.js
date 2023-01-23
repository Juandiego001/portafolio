import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './InvestigacionOperaciones.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const InvestigacionOperaciones = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Investigación de operaciones | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Método simplex, AMPL, algoritmo de transporte, algoritmos de grafos, algoritmos de árboles y demás."></meta>
        <meta name="keywords" content="
          investigacion de operaciones juan diego cobo cabal,
          investigacion de operaciones jdcc,
          investigacion de operaciones,
          investigacion operaciones jdcc,
          investigacion operaciones juan diego cobo cabal,
          investigación de operaciones jdcc,
          investigación de operaciones juan diego cobo cabal,
          Investigación de operaciones JDCC,
          Investigación de operaciones Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Investigación de operaciones
          </h1>
        </div>

        <Footer />
      </div>
    </>
  )
};

InvestigacionOperaciones.propTypes = {};

InvestigacionOperaciones.defaultProps = {};

export default InvestigacionOperaciones;
