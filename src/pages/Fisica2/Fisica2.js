import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Fisica2.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
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

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Física 2
          </h1>
        </div>

        <Footer />
      </div>
    </>
  )
};

Fisica2.propTypes = {};

Fisica2.defaultProps = {};

export default Fisica2;
