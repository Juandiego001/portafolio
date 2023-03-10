import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProbabilidadEstadistica.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProbabilidadEstadistica = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Probabilidad y estadística | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Variables de estudio, escalas de medición,
          tipos de variables, distribuciones de frecuencias,
          distribuciones de probabilidad y demás."></meta>
        <meta name="keywords" content="
          probabilidad estadistica juan diego cobo cabal,
          probabilidad estadistica jdcc,
          probabilidad estadistica,
          probabilidad y estadistica jdcc,
          probabilidad y estadistica juan diego cobo cabal,
          probabilidad y estadística jdcc,
          probabilidad y estadística juan diego cobo cabal,
          Probabilidad y estadística JDCC,
          Probabilidad y estadística Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5">
          <h1 className="h1 text-dark text-center">
            Probabilidad y estadística
          </h1>

          <h2 className="mt-5">
            Entradas
          </h2>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Teoría inicial de la estadística</h5>
              <p className="card-text">
                Desarrollo de conceptos básicos iniciales de la probabilidad y estadística.
              </p>
              <Link className="btn btn-dark" 
              to="/cursos/probabilidad-y-estadistica/entradas/teoria-inicial-de-la-estadistica">Ver entrada</Link>
            </div>
          </div>

          <h2 className="mt-5">
            Evaluaciones
          </h2>
        </div>

        <Footer />
      </div>
    </>
  )
};

ProbabilidadEstadistica.propTypes = {};

ProbabilidadEstadistica.defaultProps = {};

export default ProbabilidadEstadistica;
