import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './HackingEtico.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
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

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Hacking ético
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
}

HackingEtico.propTypes = {};

HackingEtico.defaultProps = {};

export default HackingEtico;
