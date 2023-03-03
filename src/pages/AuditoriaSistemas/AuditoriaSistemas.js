import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AuditoriaSistemas.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AuditoriaSistemas = () => {
  return (
    <>
      <Helmet>
        <title>Auditoría de sistemas | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Auditoría de sistemas en la universidad autónoma
          de occidente por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          auditoría de sistemas,
          auditoria sistemas,
          auditoría de sistemas juan diego cobo cabal,
          auditoría de sistemas juan diego cobo,
          auditoría de sistemas juan diego,
          auditoría de sistemas juan,
          Auditoría de sistemas JDCC,
          Auditoria de sistemas JDCC,
          Auditoría sistemas Juan Diego Cobo Cabal,
          Auditoría sistemas Juan Diego Cobo,
          Auditoría sistemas Juan Diego,
          Auditoría sistemas Juan,
          Auditoría de sistemas Juan Diego Cobo Cabal,
          Auditoría de sistemas Juan Diego Cobo,
          Auditoría de sistemas Juan Diego,
          Auditoría de sistemas Juan,
          Auditoria de sistemas Juan Diego Cobo Cabal,
          Auditoria de sistemas Juan Diego Cobo,
          Auditoria de sistemas Juan Diego,
          Auditoria de sistemas Juan" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Auditoría de sistemas
          </h1>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Conceptos iniciales de la auditoría de sistemas</h5>
              <p className="card-text">
                Conceptos o teoría inicial de la materia de auditoría de sistemas por Juan Diego Cobo Cabal.
              </p>
              <Link className="btn btn-dark" to="/cursos/auditoria-de-sistemas/entradas/conceptos-iniciales-de-la-auditoria-de-sistemas">Ver entrada</Link>
            </div>
          </div>

          <h2 className="mt-5">
            Evaluaciones
          </h2>

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

        </div>

        <Footer />

      </div>
    </>
  )
}

AuditoriaSistemas.propTypes = {};

AuditoriaSistemas.defaultProps = {};

export default AuditoriaSistemas;
