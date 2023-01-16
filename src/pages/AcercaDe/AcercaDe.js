import React from 'react';
import PropTypes from 'prop-types';
import styles from './AcercaDe.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AcercaDe = () => {

  return (
    <>
      <Helmet>
        <title>Acerca de | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Página de informaación acerca de Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          acerca de juan diego cobo cabal,
          acerca de juan diego cobo,
          acerca de juan diego,
          acerca de juan,
          acerca de jdcc,
          Acerca de JDCC,
          Acerca de Juan Diego Cobo Cabal,
          Acerca de Juan Diego Cobo,
          Acerca de Juan Diego,
          Acerca de Juan" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Acerca de
          </h1>

        </div>

        <Footer />
      </div>
    </>
  )
};

AcercaDe.propTypes = {};

AcercaDe.defaultProps = {};

export default AcercaDe;
