import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MaratonProgramacion.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MaratonProgramacion = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Maratón de programación | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Maratón de programación, programación dinámica, 
          árboles y grafos, backtracking, permutaciones y 
          combinaciones, manipulación de caracteres, C++ y demás."></meta>
        <meta name="keywords" content="
          Maratón JDCC
          Maratón Juan,
          Maratón Juan Diego,
          Maratón Juan Diego Cobo,
          Maratón Juan Diego Cobo Cabal,
          Maraton JDCC,
          Maraton Juan,
          Maraton Juan Diego,
          Maraton Juan Diego Cobo,
          Maraton Juan Diego Cobo Cabal,
          Maratón de programación JDCC,
          Maratón de programación Juan,
          Maratón de programación Juan Diego, 
          Maratón de programación Juan Diego Cobo,
          Maratón de programación Juan Diego Cobo Cabal,
          Maraton de programacion JDCC,
          Maraton de programacion Juan,
          Maraton de programacion Juan Diego,
          Maraton de programacion Juan Diego Cobo,
          Maraton de programacion Juan Diego Cobo Cabal,
          JDCC,
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Maratón de programación
          </h1>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Conceptos iniciales de Grafos</h5>
              <p className="card-text">
                Conceptos iniciales de grafos: nodos, caminos, tipos de grafos,
                algoritmos de recorrido de grafos y demás en el lenguaje C++.
              </p>
              <Link className="btn btn-dark" to="/cursos/maraton-de-programacion/entradas/conceptos-inciales-de-grafos">Ver entrada</Link>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Subconjuntos y permutaciones</h5>
              <p className="card-text">
                Explicación de algoritmos utilizando recursividad de subconjuntos
                y permutaciones en el lenguaje C++.
              </p>
              <Link className="btn btn-dark" to="/cursos/maraton-de-programacion/entradas/subconjuntos-y-permutaciones">Ver entrada</Link>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">El problema de la gasolinera</h5>
              <p className="card-text">
                Análisis y solución del problema de la gasolinera.
                Una variante del problema de la mochila.
              </p>
              <Link className="btn btn-dark" to="/cursos/maraton-de-programacion/entradas/el-problema-de-la-gasolinera">Ver entrada</Link>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">El problema de la mochila</h5>
              <p className="card-text">
                Análisis y solución de uno de los problemas más
                famosos de la programación dinámica.
              </p>
              <Link className="btn btn-dark" to="/cursos/maraton-de-programacion/entradas/el-problema-de-la-mochila">Ver entrada</Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
};

MaratonProgramacion.propTypes = {};

MaratonProgramacion.defaultProps = {};

export default MaratonProgramacion;
