import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Contacto.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contacto = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contacto | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Contactarse con Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          contacto,
          contacto jdcc,
          contacto juan diego cobo cabal,
          contacto juan diego cobo,
          contacto juan diego,
          contacto juan,
          Contacto JDCC,
          Contacto Juan Diego Cobo Cabal,
          Contacto Juan Diego Cobo,
          Contacto Juan Diego,
          Contacto Juan," />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Contacto
          </h1>

        </div>

        <Footer />
      </div>
    </>
  )
}

Contacto.propTypes = {};

Contacto.defaultProps = {};

export default Contacto;
