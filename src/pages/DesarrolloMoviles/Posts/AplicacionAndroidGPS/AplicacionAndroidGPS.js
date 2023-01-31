import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionAndroidGPS.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const AplicacionAndroidGps = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Aplicación Android + GPS | Desarrollo de software para plataformas móviles</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          ¿Cómo utilizar el componente de GPS de los dispositivos Android 
          para realizar mapas, rutas y direcciones con 
          las coordenadas brindadas?"></meta>
        <meta name="keywords" content="
          Aplicación Android con GPS JDCC,
          Aplicación Android con GPS Juan,
          Aplicación Android con GPS Juan Diego,
          Aplicación Android con GPS Juan Diego Cobo,
          Aplicación Android con GPS Juan Diego Cobo Cabal,
          Aplicación Android + GPS desarrollo móviles,
          Aplicación Android + GPS desarrollo de software,
          Aplicación Android + GPS desarrollo de software para plataformas,
          Aplicación Android + GPS desarrollo de software para plataformas móviles,
          Aplicación Android + GPS Desarrollo móviles,
          Aplicación Android + GPS Desarrollo de software,
          Aplicación Android + GPS Desarrollo de software para plataformas,
          Aplicación Android + GPS Desarrollo de software para plataformas móviles,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div className="mb-4">
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Aplicación Android + GPS
          </h1>

          <div>
            <p>
              En esta práctica se mostrará como conectar una aplicación Android con el API de localización con
              el fin de generar una aplicación más robusta que permita utilizar datos en tiempo real de movimiento
              de los usuarios.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
};

AplicacionAndroidGps.propTypes = {};

AplicacionAndroidGps.defaultProps = {};

export default AplicacionAndroidGps;
