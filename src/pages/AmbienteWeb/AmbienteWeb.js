import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AmbienteWeb.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AmbienteWeb = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Programación en ambiente web | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="HTML, CSS, Javascript, Nodejs, MongoDB y demás."></meta>
        <meta name="keywords" content="
          programacion web juan diego cobo cabal,
          programacion web jdcc,
          programacion web,
          programación web jdcc,
          programación web juan diego cobo cabal,
          programación en ambiente web jdcc,
          programación en ambiente web juan diego cobo cabal,
          Programación en ambiente web JDCC,
          Programación en ambiente web Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Programación en ambiente web
          </h1>
        </div>

        <Footer />
      </div>
    </>
  )
};

AmbienteWeb.propTypes = {};

AmbienteWeb.defaultProps = {};

export default AmbienteWeb;
