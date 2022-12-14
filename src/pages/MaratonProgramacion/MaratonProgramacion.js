import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MaratonProgramacion.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MaratonProgramacion = () => {

  useEffect(() => {
    document.title = "Maratón de programación | Juan Diego Cobo Cabal";
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="h1 text-dark">
          Maratón de programación
        </h1>

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
  )
};

MaratonProgramacion.propTypes = {};

MaratonProgramacion.defaultProps = {};

export default MaratonProgramacion;
