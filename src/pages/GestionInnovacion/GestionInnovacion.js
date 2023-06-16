import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './GestionInnovacion.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const GestionInnovacion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gestión de la innovación | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Gestión de la innovación, financiación, emprendimiento, 
          ODS, creatividad, inmersión, análisis a profundidad, 
          propuesta de valor, ideación y demás."></meta>
        <meta name="keywords" content="
          Gestión de la innovación JDCC,
          Gestión de la innovación Juan,
          Gestión de la innovación Juan Diego,
          Gestión de la innovación Juan Diego Cobo,
          Gestión de la innovación Juan Diego Cobo Cabal,
          Gestion JDCC,
          Gestion Juan,
          Gestion Juan Diego,
          Gestion Juan Diego Cobo
          Gestion Juan Diego Cobo Cabal,
          Gestion innovacion JDCC,
          Gestion innovacion Juan,
          Gestion innovacion Juan Diego,
          Gestion innovacion Juan Diego Cobo
          Gestion innovacion Juan Diego Cobo Cabal,
          Gestion de la innovacion JDCC,
          Gestion de la innovacion Juan,
          Gestion de la innovacion Juan Diego,
          Gestion de la innovacion Juan Diego Cobo,
          Gestion de la innovacion Juan Diego Cobo Cabal,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal" />
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Gestión de la innovación
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

GestionInnovacion.propTypes = {};

GestionInnovacion.defaultProps = {};

export default GestionInnovacion;
