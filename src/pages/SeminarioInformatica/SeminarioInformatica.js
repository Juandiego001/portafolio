import React from 'react';
import PropTypes from 'prop-types';
import styles from './SeminarioInformatica.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const SeminarioInformatica = () => {
  return (
    <>
      <Helmet>
        <title>Seminario de ingeniería informática | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Seminario de ingeniería informática en la universidad autónoma
          de occidente por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          seminario de ingeniera informatica,
          seminario ingeniera informatica,
          seminario informatica,
          seminario de ingenieria informatica juan diego cobo cabal,
          seminario de ingenieria informatica juan diego cobo,
          seminario de ingenieria informatica juan diego,
          seminario de ingenieria informatica juan,
          Seminario de ingeniería informática JDCC,
          Seminario de ingenieria informatica JDCC,
          Seminario informática Juan Diego Cobo Cabal,
          Seminario informática Juan Diego Cobo,
          Seminario informática Juan Diego,
          Seminario informática Juan,
          Seminario de ingeniería informática Juan Diego Cobo Cabal,
          Seminario de ingeniería informática Juan Diego Cobo,
          Seminario de ingeniería informática Juan Diego,
          Seminario de ingeniería informática Juan,
          Seminario de ingenieria informatica Juan Diego Cobo Cabal,
          Seminario de ingenieria informatica Juan Diego Cobo,
          Seminario de ingenieria informatica Juan Diego,
          Seminario de ingenieria informatica Juan" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Seminario de ingeniería informática
          </h1>

        </div>

        <Footer />
      </div>
    </>
  )
}

SeminarioInformatica.propTypes = {};

SeminarioInformatica.defaultProps = {};

export default SeminarioInformatica;
