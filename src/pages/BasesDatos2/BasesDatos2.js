import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './BasesDatos2.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const BasesDatos2 = () => {

  // Setting title
  useEffect(() => {
    document.title = "Bases de datos 2 | Juan Diego Cobo Cabal";
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="h1 text-dark">
          Bases de datos 2
        </h1>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Inserciones, triggers y funciones en Oracle</h5>
            <p className="card-text">
              Solución de actividad de bases de datos 2 en la que se plantean
              la creación de inserciones, triggers y funciones en el manejador
              de bases de datos Oracle.
            </p>
            <Link className="btn btn-dark" to="/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-nodejs-mysql">Ver entrada</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
};

BasesDatos2.propTypes = {};

BasesDatos2.defaultProps = {};

export default BasesDatos2;
