import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ConceptosGrafos.module.css';
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const ConceptosGrafos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Conceptos iniciales de grafos | Maratón de programación</title>
        <meta name="description" content="Conceptos iniciales de grafos: nodos, caminos, tipos de grafos, algoritmos de recorrido de grafos y demás en el lenguaje C++."></meta>
        <meta name="keywords" content="
          conceptos grafos c++,
          grafos c++,
          listas de adyacencia c++,
          matriz de adyacencia c++,
          grafos ponderados c++,
          grafos de peso,
          grafos,
          conceptos de grafos,
          tipos de grafos juan diego cobo cabal,
          nodos grafos juan diego cobo,
          caminos grafos juan diego,
          bordes grafos juan,
          grafos jdcc,
          grafos juan diego cobo cabal,
          grafos juan diego cobo,
          grafos juan diego,
          grafos juan"/>
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Conceptos iniciales de grafos
          </h1>

          <p>
            En esta entrada se explicarán algunos de los conceptos más importantes de los grafos.
            Además, se implementarán algunos conceptos en código utilizando el lenguaje de programación
            C++.
          </p>

          <h2>
            ¿Qué es un grafo?
          </h2>

          <p>
            De acuerdo con nuestro texto guía <i>Guide to Competitive Programming de Antti Laaksonen</i>,
            un grafo contiene <b>nodos</b> también llamados <i>vértices</i> que están conectados
            mediante bordes (traducción literal de edges) o mejor dicho <b>caminos.</b>
          </p>

          {/* Dibujo de grafo de ejemplo */}
          <div className={styles.GraphExample}>
            <div className={styles.Node + " " + styles.Node1}>1</div>
            <div className={styles.Arrow12}></div>
            <div className={styles.Arrow13}></div>
            <div className={styles.Node + " " + styles.Node2}>2</div>
            <div className={styles.Arrow24}></div>
            <div className={styles.Arrow25}></div>
            <div className={styles.Node + " " + styles.Node3}>3</div>
            <div className={styles.Arrow34}></div>
            <div className={styles.Node + " " + styles.Node4}>4</div>
          </div>


        </div>

        <Footer />
      </div>
    </>
  )
};

ConceptosGrafos.propTypes = {};

ConceptosGrafos.defaultProps = {};

export default ConceptosGrafos;
