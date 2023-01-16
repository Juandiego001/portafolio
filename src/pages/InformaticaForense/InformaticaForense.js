import React from 'react';
import PropTypes from 'prop-types';
import styles from './InformaticaForense.module.css';
import { Helmet } from 'react-helmet';

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

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Informática forense
          </h1>

        </div>

        <Footer />
      </div>
    </>
  )
};

InformaticaForense.propTypes = {};

InformaticaForense.defaultProps = {};

export default InformaticaForense;
