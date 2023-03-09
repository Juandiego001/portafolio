import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './FormulacionProyectos.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const FormulacionProyectos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Formulación y evaluación de proyectos | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Formulación y evaluación de proyectos, 
          matemáticas financieras, 
          evaluaciones sobre viabilidad, estudios financieros, 
          parafiscales de las empresas y demás."></meta>
        <meta name="keywords" content="
          Evaluacion de proyectos JDCC,
          Evaluacion de proyectos Juan,
          Evaluacion de proyectos Juan Diego,
          Evaluacion de proyectos Juan Diego Cobo
          Evaluacion de proyectos Juan Diego Cobo Cabal,
          Formulacion y evaluacion proyectos JDCC,
          Formulacion y evaluacion proyectos Juan,
          Formulacion y evaluacion proyectos Juan Diego,
          Formulacion y evaluacion proyectos Juan Diego Cobo
          Formulacion y evaluacion proyectos Juan Diego Cobo Cabal,
          Formulacion y evaluacion de proyectos JDCC,
          Formulacion y evaluacion de proyectos Juan,
          Formulacion y evaluacion de proyectos Juan Diego,
          Formulacion y evaluacion de proyectos Juan Diego Cobo,
          Formulacion y evaluacion de proyectos Juan Diego Cobo Cabal,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5">
          <h1 className="h1 text-dark text-center">
            Formulación de proyectos
          </h1>

          <h2 className="mt-5">
            Entradas
          </h2>

          <h2 className="mt-5">
            Evaluaciones
          </h2>
        </div>

        <Footer />
      </div>
    </>
  )
};

FormulacionProyectos.propTypes = {};

FormulacionProyectos.defaultProps = {};

export default FormulacionProyectos;
