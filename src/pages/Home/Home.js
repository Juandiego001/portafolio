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

        <div className="container my-5 px-5">
          <h1 className="text-center">Entradas recientes</h1>

          <div className="card my-5">
            <div className="card-body">
              <h5 className="card-title">React + TypeScript + MySQL + Imgs</h5>
              <p className="card-text">
                Desarrollo de una aplicación web
                con React, utilizando el lenguaje Typescript que
                garantice la subida de imágenes a una base de datos.
              </p>
              <Link className="btn btn-dark" to="/cursos/proyecto-informatico-2/entradas/react-typescript-mysql-imgs">Ver entrada</Link>
            </div>
          </div>


          <div className="card my-5">
            <div className="card-body">
              <h5 className="card-title">Aplicación Android + GPS</h5>
              <p className="card-text">
                Desarrollo de práctica para generar una aplicación Android que
                permita hacer uso de la API de localización mediante GPS.
              </p>
              <Link className="btn btn-dark" to="/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-gps">Ver entrada</Link>
            </div>
          </div>

          <div className="card my-5">
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

          <div className="card my-5">
            <div className="card-body">
              <h5 className="card-title">IoT Ubidots</h5>
              <p className="card-text">
                Desarrollo de una práctica que simula el envío de datos
                a la plataforma de IoT Ubidots usando el API Rest
                que provee la plataforma misma.
              </p>
              <Link className="btn btn-dark" to="/cursos/servicios-telematicos/entradas/iot-ubidots">Ver entrada</Link>
            </div>
          </div>

          <div className="card my-5">
            <div className="card-body">
              <h5 className="card-title">JSON Placeholder  + Apache + Centos 8</h5>
              <p className="card-text">
                Desarrollo de práctica para crear un aplicativo
                en una máquina virtual Centos 8 utilizando JSON Placeholder y
                desplegando el servicio en Apache.
              </p>
              <Link className="btn btn-dark" to="/cursos/servicios-telematicos/entradas/json-placeholder-centos">Ver entrada</Link>
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
