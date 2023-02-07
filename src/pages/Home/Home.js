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
              <h5 className="card-title">Aplicación Flask + MySQL + Centos 8</h5>
              <p className="card-text">
                Desarrollo de práctica para construir una aplicación
                web con el framework de python Flask y MySQL en
                una máquina Centos 8.
              </p>
              <Link className="btn btn-dark" to="/cursos/servicios-telematicos/entradas/aplicacion-flask-mysql">Ver entrada</Link>
            </div>
          </div>

          <div className="card mx-5 my-4">
            <div className="card-body">
              <h5 className="card-title">Conceptos iniciales de la auditoría de sistemas</h5>
              <p className="card-text">
                Conceptos o teoría inicial de la materia de auditoría de sistemas por Juan Diego Cobo Cabal.
              </p>
              <Link className="btn btn-dark" to="/cursos/auditoria-de-sistemas/entradas/conceptos-iniciales-de-la-auditoria-de-sistemas">Ver entrada</Link>
            </div>
          </div>

          <div className="card mx-5 my-4">
            <div className="card-body">
              <h5 className="card-title">Aplicación Flask + Swagger + Centos 8</h5>
              <p className="card-text">
                Desarrollo de práctica para construir una aplicación
                web con el framework de python Flask y documentar
                la API con Swagger.
              </p>
              <Link className="btn btn-dark" to="/cursos/servicios-telematicos/entradas/aplicacion-flask-swagger">Ver entrada</Link>
            </div>
          </div>

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

        </div>

        <Footer />
      </div>
    </>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
