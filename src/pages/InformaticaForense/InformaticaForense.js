import React from 'react';
import PropTypes from 'prop-types';
import styles from './InformaticaForense.module.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const InformaticaForense = () => {
  return (
    <>
      <Helmet>
        <title>Informática forense | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Informática forense en la universidad autónoma
          de occidente por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          informatica forense,
          informática forense,
          informática forense juan diego cobo cabal,
          informática forense ingenieros juan diego cobo,
          informática forense ingenieros juan diego,
          informática forense ingenieros juan,
          Informática forense JDCC,
          Informatica forense JDCC,
          Informática forense Juan Diego Cobo Cabal,
          Informática forense Juan Diego Cobo,
          Informática forense Juan Diego,
          Informática forense Juan,
          Informatica forense Juan Diego Cobo Cabal,
          Informatica forense Juan Diego Cobo,
          Informatica forense Juan Diego,
          Informatica forense Juan" />
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Informática forense
          </h1>

          <h2 className="mt-5">
            Entradas
          </h2>

          <h2 className="mt-5">
            Evaluaciones
          </h2>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Evaluación de estudio para primer parcial</h5>
              <p className="card-text">
                Evaluación para comprobar los conocimientos del primer corte de 
                la materia de Informática Forense en los que se contemplaron los primeros
                conceptos de la materia.
              </p>
              <Link className="btn btn-dark" to="/evaluaciones/informatica-forense/estudio-primer-parcial">Tomar evaluación</Link>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  )
};

InformaticaForense.propTypes = {};

InformaticaForense.defaultProps = {};

export default InformaticaForense;
