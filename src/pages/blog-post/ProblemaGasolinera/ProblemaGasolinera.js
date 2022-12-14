import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProblemaGasolinera.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const ProblemaGasolinera = () => {

  // Setting title
  useEffect(() => {
    document.title = "Problema de la gasolinera | Maratón de programación";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="h1 text-dark">
          El problema de la gasolinera
        </h1>

        <h2 className="h2 text-dark mt-5">
          Contexto
        </h2>

        <p>
          Una persona está planeando realizar un viaje en su coche. Para ello, debe determinar
          en qué estaciones de gasolina debe parar para rellenar su tanque. Tomando los datos
          de la capacidad máxima que se puede almacenar en el tanque y las distancias de cada
          una de las estaciones con respecto al origen, determine en qué estaciones debe parar
          la persona para poder pasar por todas las estaciones sin quedarse sin combustible.
          De ser imposible, muestre un mensaje que indique <code>IMPOSIBLE.</code>
        </p>

        <h2 className="h2 text-dark mt-5">
          Solución del problema
        </h2>

        <p>
          El código de la solución del ejercicio se encuentra <a href="https://replit.com/@JUANDIEGODIEG45/Algoritmos-Voraces-I-Problema-de-la-gasolinera#main.cpp" target="_blank">aqui.</a>
        </p>
      </div>

      <Footer />
    </div>
  )
};

ProblemaGasolinera.propTypes = {};

ProblemaGasolinera.defaultProps = {};

export default ProblemaGasolinera;
