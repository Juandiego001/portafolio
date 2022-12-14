import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './DesarrolloMoviles.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const DesarrolloMoviles = () => {

  // Setting title
  useEffect(() => {
    document.title = "Desarrollo de software para plataformas móviles | Juan Diego Cobo Cabal";
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="h1 text-dark">
          Desarrollo de software para plataformas móviles
        </h1>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Aplicación Android + GPS</h5>
            <p className="card-text">
              Desarrollo de práctica para generar una aplicación Android que
              permita hacer uso de la API de localización mediante GPS.
            </p>
            <Link className="btn btn-dark" to="/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-gps">Ver entrada</Link>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Aplicación Android + Firebase</h5>
            <p className="card-text">
              Desarrollo de práctica para conectar una aplicación Android
              con el servicio de Google denominado Firebase para el
              control de usuarios.
            </p>
            <Link className="btn btn-dark" to="/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-firebase">Ver entrada</Link>
          </div>
        </div>

        <div className="card mt-3">
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
  )
};

DesarrolloMoviles.propTypes = {};

DesarrolloMoviles.defaultProps = {};

export default DesarrolloMoviles;
