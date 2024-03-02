import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ServiciosTelematicos.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const ServiciosTelematicos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Servicios telemáticos | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Máquinas virtuales, vagrant, Vagrantfile, 
          Vagrant cloud, servidores FTP, correo, DNS, 
          Firewall, servidor Apache, 
          servidores con Flask, Centos 7 y 8, etc."></meta>
        <meta name="keywords" content="
          Servicios telematicos JDCC,
          Servicios telematicos Juan,
          Servicios telematicos Juan Diego,
          Servicios telematicos Juan Diego Cobo,
          Servicios telematicos Juan Diego Cobo Cabal,
          Servicios telematicos,
          Servicios telemáticos JDCC,
          Servicios telemáticos Juan,
          Servicios telemáticos Juan Diego,
          Servicios telemáticos Juan Diego Cobo,
          Servicios telemáticos Juan Diego Cobo Cabal,
          Servicios telemáticos,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="the-page">
          <Menu />

          <div className="container my-5 px-5">
            <h1 className="h1 text-dark text-center">
              Servicios telemáticos
            </h1>

            <h2 className="mt-5">
              Entradas
            </h2>

            <div className="card mt-3">
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

            <div className="card mt-3">
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

            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Rest API + Centos 8</h5>
                <p className="card-text">
                  Desarrollo de práctica para crear una Rest API
                  en una máquina virtual Centos 8 utilizando el framework
                  de python flask y nodejs.
                </p>
                <Link className="btn btn-dark" to="/cursos/servicios-telematicos/entradas/rest-api-centos">Ver entrada</Link>
              </div>
            </div>

            <div className="card mt-3">
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

            <div className="card mt-3">
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

            <div className="card mt-3">
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

            <h2 className="mt-5">
              Evaluaciones
            </h2>
          </div>
        </div>

      <Footer />
    </div >
    </>
  )
};

ServiciosTelematicos.propTypes = {};

ServiciosTelematicos.defaultProps = {};

export default ServiciosTelematicos;
