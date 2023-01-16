import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Evaluaciones.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Evaluaciones = () => {
  return (
    <>
      <Helmet>
        <title>Evaluaciones | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Evaluaciones de los diferentes cursos de la
          carrera de ingeniería informática de la
          Universidad Autónoma de Occidente
          por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          evaluaciones,
          evaluaciones jdcc,
          evaluaciones juan diego cobo cabal,
          evaluaciones juan diego cobo,
          evaluaciones juan diego,
          evaluaciones juan,
          Evaluaciones JDCC,
          Evaluaciones Juan Diego Cobo Cabal,
          Evaluaciones Juan Diego Cobo,
          Evaluaciones Juan Diego,
          Evaluaciones Juan" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Evaluaciones
          </h1>

        </div>

        <Footer />
      </div>
    </>
  )
}

Evaluaciones.propTypes = {};

Evaluaciones.defaultProps = {};

export default Evaluaciones;
