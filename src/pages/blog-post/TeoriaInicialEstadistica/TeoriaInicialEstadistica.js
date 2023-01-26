import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TeoriaInicialEstadistica.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const TeoriaInicialEstadistica = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Teoría inicial de la estadística | Probabilidad y estadística</title>
        <meta name="description" content="
          Conceptos iniciales de la probabilidad y estadística tales como: definición, estadística descriptiva, objetos de estudio y demás."></meta>
        <meta name="keywords" content="
          conceptos probabilidad estadistica,
          conceptos probabilidad,
          conceptos estadistica,
          definicion de poblacion,
          definicion de muestra,
          definicion de estadistica descriptiva,
          definicion de parametros,
          definicion de estadisticos,
          defincion de variables,
          tipos de variables estadistica,
          definciion de escalas de medicion"/>
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Teoría inicial de la estadística
          </h1>

        </div>

        <Footer />
      </div>
    </>
  )
};

TeoriaInicialEstadistica.propTypes = {};

TeoriaInicialEstadistica.defaultProps = {};

export default TeoriaInicialEstadistica;
