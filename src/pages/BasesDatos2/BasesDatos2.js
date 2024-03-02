import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './BasesDatos2.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const BasesDatos2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bases de datos 2 | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          MySQL, Oracle, SQL, queries, SELECTs, 
          INSERTs, DELETEs, UPDATEs, procedures, 
          triggers, arquitectura de Oracle, 
          manejadores de bases de datos y demás."></meta>
        <meta name="keywords" content="
          Bases de datos II Juan Diego Cobo Cabal,
          Bases de datos 2 JDCC,
          Bases de datos 2 Juan,
          Bases de datos 2 Juan Diego,
          Bases de datos 2 Juan Diego Cobo,
          Bases de datos 2 Juan Diego Cobo Cabal,
          Bases de datos | Juan Diego
          Bases | Juan Diego
          Bd2 | JDCC,
          Bases de datos 2 | JDCC,
          Bases de datos 2 | Juan Diego Cobo Cabal,
          Bases de datos 2,
          Juan Diego Cobo Cabal, Inicio | Juan Diego Cobo Cabal, 
          Inicio - Juan Diego Cobo Cabal, 
          JDCC, Juan Cobo, Juan Cabal, Juan Diego"></meta>
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="the-page">
          <Menu />

          <div className="container my-5 px-5">
            <h1 className="h1 text-dark text-center">
              Bases de datos 2
            </h1>

            <h2 className="mt-5">
              Entradas
            </h2>

            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Inserciones, triggers y funciones en Oracle</h5>
                <p className="card-text">
                  Solución de actividad de bases de datos 2 en la que se plantean
                  la creación de inserciones, triggers y funciones en el manejador
                  de bases de datos Oracle.
                </p>
                <Link className="btn btn-dark" to="/cursos/bases-de-datos-2/entradas/inserciones-triggers-funciones-oracle">Ver entrada</Link>
              </div>
            </div>

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

BasesDatos2.propTypes = {};

BasesDatos2.defaultProps = {};

export default BasesDatos2;
