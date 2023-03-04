import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Evaluaciones.module.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Evaluaciones = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Evaluaciones | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Evaluaciones de los diferentes cursos de la
          carrera de ingeniería informática de la
          Universidad Autónoma de Occidente
          por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          evaluaciones,
          evaluaciones jdcc,
          evaluaciones juan diego cobo cabal,
          evaluaciones juan diego cobo,
          evaluaciones juan diego,
          evaluaciones juan,
          Evaluaciones JDCC,
          Evaluaciones Juan Diego Cobo Cabal,
          Evaluaciones Juan Diego Cobo,
          Evaluaciones Juan Diego,
          Evaluaciones Juan" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Evaluaciones
          </h1>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Primer parcial de auditoría de sistemas</h5>
              <p className="card-text">
                En esta evaluación se contemplarán las preguntas
                realizadas en el primer parcial de Auditoría de Sistemas
                en el periodo 2023-01 con el profesor Miguel Jose Navas Jaime.
              </p>
              <Link className="btn btn-dark" to="/evaluaciones/auditoria-de-sistemas/primer-parcial-de-auditoria-de-sistemas">Tomar evaluación</Link>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Primeros cinco capítulos de la norma ISO 19011</h5>
              <p className="card-text">
                Evaluación para comprobar los conocimientos del primer corte de 
                la materia de Auditoría de Sistemas en los que se contemplaron los primeros
                cinco capítulos de la norma ISO 19011.
              </p>
              <Link className="btn btn-dark" to="/evaluaciones/auditoria-de-sistemas/primeros-cinco-capitulos">Tomar evaluación</Link>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  )
}

Evaluaciones.propTypes = {};

Evaluaciones.defaultProps = {};

export default Evaluaciones;
