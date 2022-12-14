import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProyectoInformatico2.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProyectoInformatico2 = () => {

  // Setting title
  useEffect(() => {
    document.title = "Proyecto informático 2 | Juan Diego Cobo Cabal";
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="text-dark">
          Proyecto Informático 2
        </h1>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">React + TypeScript + MySQL + Imgs</h5>
            <p className="card-text">
              Desarrollo de una aplicación web
              con React, utilizando el lenguaje Typescript que
              garantice la subida de imágenes a una base de datos.
            </p>
            <Link className="btn btn-dark" to="/cursos/proyecto-informatico-2/entradas/react-typescript-mysql-imgs">Ver entrada</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
};

ProyectoInformatico2.propTypes = {};

ProyectoInformatico2.defaultProps = {};

export default ProyectoInformatico2;
