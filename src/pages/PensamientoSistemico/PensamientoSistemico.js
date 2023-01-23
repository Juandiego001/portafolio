import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './PensamientoSistemico.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PensamientoSistemico = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Pensamiento sistémico | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Pensamiento sistémico en la Universidad Autónoma de Occidente por Juan Diego Cobo Cabal y demás."></meta>
        <meta name="keywords" content="
          pensamiento sistemico juan diego cobo cabal,
          pensamiento sistemico jdcc,
          pensamiento sistemico,
          pensamiento sistémico,
          pensamiento sistémico jdcc,
          pensamiento sistémico juan diego cobo cabal,
          Pensamiento sistémico JDCC,
          Pensamiento sistémico Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Pensamiento sistémico
          </h1>
        </div>

        <Footer />
      </div>
    </>
  )
};

PensamientoSistemico.propTypes = {};

PensamientoSistemico.defaultProps = {};

export default PensamientoSistemico;
