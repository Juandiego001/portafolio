import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './IngeSoft1.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const IngeSoft1 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ingeniería de software 1 | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Modelos de desarrollo, levantamiento de requerimientos, clientes y usuarios, heurísticas de calidad, patrones de diseño y demás."></meta>
        <meta name="keywords" content="
          ingenieria de software juan diego cobo cabal,
          ingenieria de software jdcc,
          ingenieria de software,
          ingeniería de software 1,
          ingeniería de software jdcc,
          ingeniería de software juan diego cobo cabal,
          ingeniería de software 1 jdcc,
          ingeniería de software 1 juan diego cobo cabal,
          Ingeniería de software JDCC,
          Ingeniería de software Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Ingeniería de software 1
          </h1>
        </div>

        <Footer />
      </div>
    </>
  )
};

IngeSoft1.propTypes = {};

IngeSoft1.defaultProps = {};

export default IngeSoft1;
