import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './RedesDatos.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const RedesDatos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Redes de datos | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Modelo OSI, IPV4, IPV6, ISP, Subnetting, protocolos de envío de datos, modulación, enrutamiento, paquetes, frecuencias y demás."></meta>
        <meta name="keywords" content="
          redes de datos juan diego cobo cabal,
          redes de datos jdcc,
          redes de datos,
          redes jdcc,
          redes juan diego cobo cabal,
          redes datos jdcc,
          redes datos juan diego cobo cabal,
          Redes de datos JDCC,
          Redes de datos Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Redes de datos
          </h1>
        </div>

        <Footer />
      </div>
    </>
  )
};

RedesDatos.propTypes = {};

RedesDatos.defaultProps = {};

export default RedesDatos;