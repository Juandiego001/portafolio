import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Calculadoras.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Calculadoras = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Calculadoras | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Contactarse con Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          calculadoras,
          calculadoras jdcc,
          calculadoras juan diego cobo cabal,
          calculadoras juan diego cobo,
          calculadoras juan diego,
          calculadoras juan,
          Calculadoras JDCC,
          Calculadoras Juan Diego Cobo Cabal,
          Calculadoras Juan Diego Cobo,
          Calculadoras Juan Diego,
          Calculadoras Juan," />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Calculadoras
          </h1>

        </div>

        <Footer />
      </div>
    </>
  )
};

Calculadoras.propTypes = {};

Calculadoras.defaultProps = {};

export default Calculadoras;
