import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Inicio | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Página principal del blog de Juan Diego Cobo Cabal
          enseñando lo aprendido a lo largo de la carrera
          de ingeniería informática."></meta>
        <meta name="keywords" content="
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5">
          <h1 className="m-5">Entradas recientes</h1>

          <div className="card mx-5 my-4">
            <div className="card-body">
              <h5 className="card-title">Conceptos iniciales de Grafos</h5>
              <p className="card-text">
                Conceptos iniciales de grafos: nodos, caminos, tipos de grafos,
                algoritmos de recorrido de grafos y demás en el lenguaje C++.
              </p>
              <Link className="btn btn-dark" to="/cursos/maraton-de-programacion/entradas/conceptos-inciales-de-grafos">Ver entrada</Link>
            </div>
          </div>

          <div className="card mx-5 my-4">
            <div className="card-body">
              <h5 className="card-title">Teoría inicial de la estadística</h5>
              <p className="card-text">
                Desarrollo de conceptos básicos iniciales de la probabilidad y estadística.
              </p>
              <Link className="btn btn-dark" 
              to="/cursos/probabilidad-y-estadistica/entradas/teoria-inicial-de-la-estadistica">Ver entrada</Link>
            </div>
          </div>

          <div className="card mx-5 my-4">
            <div className="card-body">
              <h5 className="card-title">Aplicación Flask + Centos 7</h5>
              <p className="card-text">
                Desarrollo de práctica para construir una aplicación
                web con el framework de python Flask en una máquina
                de Centos 7.
              </p>
              <Link className="btn btn-dark" to="/cursos/servicios-telematicos/entradas/aplicacion-flask-centos">Ver entrada</Link>
            </div>
          </div>

          <div className="card mx-5 my-4">
            <div className="card-body">
              <h5 className="card-title">Subconjuntos y permutaciones</h5>
              <p className="card-text">
                Explicación de algoritmos utilizando recursividad de subconjuntos
                y permutaciones en el lenguaje C++.
              </p>
              <Link className="btn btn-dark" to="/cursos/maraton-de-programacion/entradas/subconjuntos-y-permutaciones">Ver entrada</Link>
            </div>
          </div>

          <div className="card mx-5 my-4">
            <div className="card-body">
              <h5 className="card-title">Aplicación Android + Node.js + MySQL</h5>
              <p className="card-text">
                Desarrollo de práctica para conectar una aplicación Android
                con un servidor Node.js que a su vez se comunica con una base de
                datos MySQL.
              </p>
              <Link className="btn btn-dark" to="/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-nodejs-mysql">Ver entrada</Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
