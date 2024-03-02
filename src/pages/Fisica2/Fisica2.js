import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Fisica2.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const Fisica2 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Física 2 | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Temperatura y calor, propiedades térmicas
          de la materia, leyes de la termodinámica,
          mecánica de fluidos, ondas mecánicas y demás."></meta>
        <meta name="keywords" content="
          física 2 juan diego cobo cabal,
          física 2 jdcc,
          física ii,
          física 2,
          física ii jdcc,
          física ii juan diego cobo cabal,
          fisica 2 jdcc,
          fisica 2 juan diego cobo cabal " />
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="the-page">
          <Menu />

          <div className="container px-5 my-5">
            <h1 className="h1 text-dark text-center">
              Física 2
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

Fisica2.propTypes = {};

Fisica2.defaultProps = {};

export default Fisica2;
