import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SeguridadInformatica.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const SeguridadInformatica = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
      <title>Seguridad Informática | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Seguridad informática, vulnerabilidad, riesgo, amenaza, 
          conceptos de criptografía, conceptos de metasploit y redes, 
          Kali Linux, simetría y asimetría, etc."></meta>
        <meta name="keywords" content="
          Seguridad informática JDCC,
          Seguridad informática Juan,
          Seguridad informática Juan Diego,
          Seguridad informática Juan Diego Cobo,
          Seguridad informática Juan Diego Cobo Cabal,
          Seguridad informática,
          Seguridad informatica JDCC,
          Seguridad informatica Juan,
          Seguridad informatica Juan Diego,
          Seguridad informatica Juan Diego Cobo,
          Seguridad informatica Juan Diego Cobo Cabal,
          Seguridad informatica,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Seguridad informática
          </h1>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Metasploit Kali + Windows XP</h5>
              <p className="card-text">
                Desarrollo de laboratorio para explotar una vulnerabilidad de
                un sistema operativo Windows XP mediante otro sistema operativo
                Kali Linux.
              </p>
              <Link className="btn btn-dark" to="/cursos/seguridad-informatica/entradas/metasploit-kali-windows-xp">Ver entrada</Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
};

SeguridadInformatica.propTypes = {};

SeguridadInformatica.defaultProps = {};

export default SeguridadInformatica;
