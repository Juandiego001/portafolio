import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AdministracionIngenieros.module.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AdministracionIngenieros = () => {

  return (
    <>
      <Helmet>
        <title>Administración para ingenieros | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Administración para ingenieros en la universidad autónoma
          de occidente por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          administracion para ingenieros,
          admin ingenieros,
          admin ingeniera,
          administracion para ingenieros juan diego cobo cabal,
          administracion para ingenieros juan diego cobo,
          administracion para ingenieros juan diego,
          administracion para ingenieros juan,
          Administración para ingenieros JDCC,
          Administracion para ingenieros JDCC,
          Admin ingenieros Juan Diego Cobo Cabal,
          Admin ingenieros Juan Diego Cobo,
          Admin ingenieros Juan Diego,
          Admin ingenieros Juan,
          Administración para ingenieros Juan Diego Cobo Cabal,
          Administración para ingenieros Juan Diego Cobo,
          Administración para ingenieros Juan Diego,
          Administración para ingenieros Juan,
          Administracion para ingenieros Juan Diego Cobo Cabal,
          Administracion para ingenieros Juan Diego Cobo,
          Administracion para ingenieros Juan Diego,
          Administracion para ingenieros Juan" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Administración para ingenieros
          </h1>

          <h2 className="mt-5">
            Evaluaciones
          </h2>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Estudio primer parcial</h5>
              <p className="card-text">
                Evaluación para comprobar los conocimientos del primer corte de 
                la materia de Administración para ingenieros.
              </p>
              <Link className="btn btn-dark" to="/evaluaciones/administracion-para-ingenieros/estudio-primer-parcial">Tomar evaluación</Link>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Primer parcial</h5>
              <p className="card-text">
                En esta evaluación se contemplarán las preguntas
                realizadas en el primer parcial de Administración para ingenieros
                en el periodo 2023-01 con el profesor Juan Carlos Aguilar.
              </p>
              <Link className="btn btn-dark" to="/evaluaciones/administracion-para-ingenieros/primer-parcial-de-administracion-para-ingenieros">Tomar evaluación</Link>
            </div>
          </div>


        </div>

        <Footer />
      </div>
    </>
  );
}

AdministracionIngenieros.propTypes = {};

AdministracionIngenieros.defaultProps = {};

export default AdministracionIngenieros;
