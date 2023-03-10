import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProyectoInformatico2.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProyectoInformatico2 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Proyecto informático 2 | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Proyecto informático 2, buenas prácticas de programación, 
          despliegue de servicios y aplicaciones, 
          pruebas de caja blanca y caja negra y 
          demás conceptos."></meta>
        <meta name="keywords" content="
          Proyecto informático 2 JDCC,
          Proyecto informático 2 Juan,
          Proyecto informático 2 Juan Diego,
          Proyecto informático 2 Juan Diego Cobo,
          Proyecto informático 2 Juan Diego Cobo Cabal,
          Proyecto informatico 2 JDCC,
          Proyecto informatico 2 Juan,
          Proyecto informatico 2 Juan Diego,
          Proyecto informatico 2 Juan Diego Cobo,
          Proyecto informatico 2 Juan Diego Cobo Cabal,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1 className="text-dark text-center">
            Proyecto Informático 2
          </h1>

          <h2 className="mt-5">
            Entradas
          </h2>

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

          <h2 className="mt-5">
            Evaluaciones
          </h2>
        </div>

        <Footer />
      </div>
    </>
  )
};

ProyectoInformatico2.propTypes = {};

ProyectoInformatico2.defaultProps = {};

export default ProyectoInformatico2;
