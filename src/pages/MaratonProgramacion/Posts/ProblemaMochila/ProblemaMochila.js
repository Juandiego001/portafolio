import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProblemaMochila.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const ProblemaMochila = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Problema de la mochila | Maratón de programación</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Ejercicio de programación competitiva 
          denominado 'Problema de la mochila' 
          utilizando la técnica de algoritmos 
          voraces para Maratón de programación."></meta>
        <meta name="keywords" content="
          problema mochila,
          Problema de la mochila Maratón,
          Problema de la mochila Maratón de programación,
          Problema de la mochila Maraton de programacion,
          Problema de la mochila Maratón de programación,
          Problema de la mochila Maraton de programacion,
          Problema de la mochila Maratón,
          Problema de la mochila Maratón de programación,
          Problema de la mochila Maraton de programacion,
          Problema de la mochila Maratón de programación,
          Problema de la mochila Maraton de programacion,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            El problema de la mochila
          </h1>

          <h2 className="h2 text-dark mt-5">
            Contexto
          </h2>

          <p>
            Un excursionista debe decidir, entre <code>n</code> objetos, cuales de ellos va a llevarse en su
            mochila. Cada objeto supone para el excursionista un beneficio <code>c<sub>j</sub></code> y ocupa una capacidad de <code>a<sub>j</sub></code>.
            La mochila tiene una capacidad máxima <code>b.</code>
          </p>

          <h2 className="h2 text-dark mt-5">
            Solución del problema
          </h2>

          <p>
            El código de la solución del ejercicio se encuentra <a href="https://replit.com/@JUANDIEGODIEG45/Geometria#main.cpp" target="_blank">aqui.</a>
          </p>
        </div>

        <Footer />
      </div>
    </>
  )
};

ProblemaMochila.propTypes = {};

ProblemaMochila.defaultProps = {};

export default ProblemaMochila;
