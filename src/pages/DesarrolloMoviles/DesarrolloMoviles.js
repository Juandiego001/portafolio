import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './DesarrolloMoviles.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const DesarrolloMoviles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Desarrollo de software para plataformas móviles | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Android, Android Nativo, Ionic, Angular, Angular Framework, 
          Typescript, CRUD con Android, Geoposición con Android, 
          Bases de datos con Android y demás."></meta>
        <meta name="keywords" content="
          Desarrollo para plaformas moviles JDCC,
          Desarrollo para plaformas moviles Juan,
          Desarrollo para plaformas moviles Juan Diego,
          Desarrollo para plaformas moviles Juan Diego Cobo,
          Desarrollo para plaformas moviles Juan Diego Cobo Cabal,
          Desarrollo moviles JDCC,
          Desarrollo moviles Juan,
          Desarrollo moviles Juan Diego,
          Desarrollo moviles Juan Diego Cobo,
          Desarrollo moviles Juan Diego Cobo Cabal,
          Desarrollo de software JDCC,
          Desarrollo de software Juan,
          Desarrollo de software Juan Diego,
          Desarrollo de software Juan Diego Cobo,
          Desarrollo de software Juan Diego Cobo Cabal,
          Desarrollo de software para plataformas moviles JDCC,
          Desarrollo de software para plataformas moviles Juan,
          Desarrollo de software para plataformas moviles Juan Diego,
          Desarrollo de software para plataformas moviles Juan Diego Cobo,
          Desarrollo de software para plataformas moviles Juan Diego Cobo Cabal,
          Juan Diego Cobo Cabal, 
          Inicio | Juan Diego Cobo Cabal, 
          Inicio - Juan Diego Cobo Cabal, 
          JDCC, 
          Juan Cobo, 
          Juan Cabal, 
          Juan Diego" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Desarrollo de software para plataformas móviles
          </h1>

          <h2 className="mt-5">
            Entradas
          </h2>

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

          <h2 className="mt-5">
            Evaluaciones
          </h2>
        </div>

        <Footer />
      </div>
    </>
  )
};

DesarrolloMoviles.propTypes = {};

DesarrolloMoviles.defaultProps = {};

export default DesarrolloMoviles;
