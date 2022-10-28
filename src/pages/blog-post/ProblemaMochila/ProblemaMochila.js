import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProblemaMochila.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const ProblemaMochila = () => {

  // Setting title
  useEffect(() => {
    document.title = "Problema de la mochila | Maratón de programación";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
      <Header />
      <Menu />

      <Container className="mt-4 px-5" fluid>
        <h1 className="h1 text-dark">
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
      </Container>
    </div>
  )
};

ProblemaMochila.propTypes = {};

ProblemaMochila.defaultProps = {};

export default ProblemaMochila;
