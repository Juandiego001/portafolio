import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ServiciosTelematicos.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ServiciosTelematicos = () => {

  // Setting title
  useEffect(() => {
    document.title = "Servicios telemáticos | Juan Diego Cobo Cabal";
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="h1 text-dark">
          Servicios telemáticos
        </h1>

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
            <h5 className="card-title">Json Placeholder + Centos 8</h5>
            <p className="card-text">
              Desarrollo de práctica para crear una Rest API
              en una máquina virtual Centos 8 utilizando JSON Placeholder.
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
      </div>

      <Footer />
    </div>
  )
};

ServiciosTelematicos.propTypes = {};

ServiciosTelematicos.defaultProps = {};

export default ServiciosTelematicos;
