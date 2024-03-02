import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './HackingEtico.module.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const HackingEtico = () => {
  return (
    <>
      <Helmet>
        <title>Hacking ético | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Hacking ético en la universidad autónoma
          de occidente por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          hacking etico,
          hacking,
          hacking ético juan diego cobo cabal,
          hacking ético juan diego cobo,
          hacking ético juan diego,
          hacking ético juan,
          Hacking etico JDCC,
          Hacking ético JDCC,
          Hack ético Juan Diego Cobo Cabal,
          Hack ético Juan Diego Cobo,
          Hack ético Juan Diego,
          Hack ético Juan,
          Hacking ético Juan Diego Cobo Cabal,
          Hacking ético Juan Diego Cobo,
          Hacking ético Juan Diego,
          Hacking ético Juan,
          Hacking etico Juan Diego Cobo Cabal,
          Hacking etico Juan Diego Cobo,
          Hacking etico Juan Diego,
          Hacking etico Juan" />
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="the-page">
          <Menu />

          <div className="container my-5 px-5">
            <h1 className="h1 text-dark text-center">
              Hacking ético
            </h1>

            <h2 className="mt-5">
              Entradas
            </h2>

            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">¿Cómo instalar la FOCA?</h5>
                <p className="card-text">
                  Tutorial corto de cómo instalar la herramienta para la extracción y
                  análisis de metadatos: La FOCA.
                </p>
                <Link className="btn btn-dark" to="/cursos/hacking-etico/entradas/como-instalar-la-foca">Ver entrada</Link>
              </div>
            </div>

            <h2 className="mt-5">
              Evaluaciones
            </h2>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

HackingEtico.propTypes = {};

HackingEtico.defaultProps = {};

export default HackingEtico;
