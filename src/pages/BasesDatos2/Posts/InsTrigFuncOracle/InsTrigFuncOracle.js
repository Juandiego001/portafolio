import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './InsTrigFuncOracle.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const InsTrigFuncOracle = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Inserciones, triggers y funciones en Oracle | Bases de datos 2</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Inserciones, triggers y funciones en Oracle
          por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          inserciones oracle,
          triggers oracle,
          funciones oracle,
          base de datos oracle juan diego cobo cabal,
          como hacer un trigger oracle juan diego cobo cabal,
          como hacer una funcion oracle juan diego cobo cabal,
          como hacer una insercion oracle juan diego cobo cabal,
          trigger oracle juan diego cobo cabal,
          funcion oracle juan diego cobo cabal,
          insercion oracle juan diego cobo cabal
          " />
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="container my-5">
          <h1 className="h1 text-dark text-center">
            Inserciones, triggers y funciones en Oracle
          </h1>
        </div>

        <Footer />
      </div>
    </>
  )
};

InsTrigFuncOracle.propTypes = {};

InsTrigFuncOracle.defaultProps = {};

export default InsTrigFuncOracle;
