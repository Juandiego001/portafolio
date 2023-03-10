import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProyectoInformatico1.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProyectoInformatico1 = () => {
  return (
    <>
      <Helmet>
        <title>Proyecto informático 1 | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Proyecto informático 1 en la universidad autónoma
          de occidente por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          proyecto informatico 1,
          proyecto informatico i,
          proyecto informático 1,
          proyecto informático i,
          proyecto informatico 1 juan diego cobo cabal,
          proyecto informatico 1 juan diego cobo,
          proyecto informatico 1 juan diego,
          proyecto informatico 1 juan,
          Proyecto informático 1 JDCC,
          Proyecto informatico 1 JDCC,
          Proyecto informatico 1 Juan Diego Cobo Cabal,
          Proyecto informatico 1 Juan Diego Cobo,
          Proyecto informatico 1 Juan Diego,
          Proyecto informatico 1 Juan,
          Proyecto informático I Juan Diego Cobo Cabal,
          Proyecto informático I Juan Diego Cobo,
          Proyecto informático I Juan Diego,
          Proyecto informático I Juan,
          Proyecto informatico I Juan Diego Cobo Cabal,
          Proyecto informatico I Juan Diego Cobo,
          Proyecto informatico I Juan Diego,
          Proyecto informatico I Juan" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Proyecto informático 1
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

ProyectoInformatico1.propTypes = {};

ProyectoInformatico1.defaultProps = {};

export default ProyectoInformatico1;
