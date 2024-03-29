import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SistemasOperativos.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const SistemasOperativos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sistemas operativos | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Máquinas virtuales, conceptos de sistemas operativos, sistemas de archivos, kernel, CPU, memoria, servidor DNS, servidor FTP, media wiki y demás."></meta>
        <meta name="keywords" content="
          sistemas operativos juan diego cobo cabal,
          sistemas operativos jdcc,
          sistemas operativos,
          sistemas jdcc,
          sistemas juan diego cobo cabal,
          Sistemas operativos JDCC,
          Sistemas opeartivos Juan Diego Cobo Cabal" />
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="the-page">
          <Menu />

          <div className="container my-5 px-5">
            <h1 className="h1 text-dark text-center">
              Sistemas operativos
            </h1>

            <h2 className="mt-5">
              Entradas
            </h2>

            <h2 className="mt-5">
              Evaluaciones
            </h2>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
};

SistemasOperativos.propTypes = {};

SistemasOperativos.defaultProps = {};

export default SistemasOperativos;
