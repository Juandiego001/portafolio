import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './IdeasOportunidades.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const IdeasOportunidades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ideas y oportunidades de negocio | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Ideas y oportunidades de negocio, canvas, metodologías de investigación de mercados, 
          validación, viabilidad financiera de proyectos y 
          demás conceptos."></meta>
        <meta name="keywords" content="
          Ideas de negocio JDCC,
          Ideas de negocio Juan,
          Ideas de negocio Juan Diego,
          Ideas de negocio Juan Diego Cobo
          Ideas de negocio Juan Diego Cobo Cabal,
          Ideas y oportunidades JDCC,
          Ideas y oportunidades Juan,
          Ideas y oportunidades Juan Diego,
          Ideas y oportunidades Juan Diego Cobo
          Ideas y oportunidades Juan Diego Cobo Cabal,
          Ideas y oportunidades de negocio JDCC,
          Ideas y oportunidades de negocio Juan,
          Ideas y oportunidades de negocio Juan Diego,
          Ideas y oportunidades de negocio Juan Diego Cobo,
          Ideas y oportunidades de negocio Juan Diego Cobo Cabal,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5">
          <h1 className="text-dark">
            Ideas y oportunidades de negocio
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

IdeasOportunidades.propTypes = {};

IdeasOportunidades.defaultProps = {};

export default IdeasOportunidades;
