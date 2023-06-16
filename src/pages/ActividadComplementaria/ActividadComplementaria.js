import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ActividadComplementaria.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ActividadComplementaria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Actividad complementaria | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Curso de desarrollo de aprendizaje automático
          con Sckiti Learn por Juan Diego Cobo Cabal
          en la Universidad Autónoma de Occidente."></meta>
        <meta name="keywords" content="
          actividad complementaria juan diego cobo cabal,
          actividad complementaria jdcc,
          actividad complementaria" />
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Actividad complementaria
          </h1>

          <h2 className="mt-5">
            Entradas
          </h2>
        </div>

        <Footer />
      </div>
    </>
  )
};

ActividadComplementaria.propTypes = {};

ActividadComplementaria.defaultProps = {};

export default ActividadComplementaria;
