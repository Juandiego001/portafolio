import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionAndroidFirebase.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const AplicacionAndroidFirebase = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Aplicación Android + Firebase | Desarrollo de software para plataformas móviles</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          ¿Cómo conectar una aplicación Android con el servicio 
          de Google: Firebase, para permitir el registro de 
          usuarios y el control de sesiones en la nube?"></meta>
        <meta name="keywords" content="
          Aplicación Android con Firebase JDCC,
          Aplicación Android con Firebase Juan,
          Aplicación Android con Firebase Juan Diego,
          Aplicación Android con Firebase Juan Diego Cobo,
          Aplicación Android con Firebase Juan Diego Cobo Cabal,
          Aplicación Android + Firebase desarrollo móviles,
          Aplicación Android + Firebase desarrollo de software,
          Aplicación Android + Firebase desarrollo de software para plataformas,
          Aplicación Android + Firebase desarrollo de software para plataformas móviles,
          Aplicación Android + Firebase Desarrollo móviles,
          Aplicación Android + Firebase Desarrollo de software,
          Aplicación Android + Firebase Desarrollo de software para plataformas,
          Aplicación Android + Firebase Desarrollo de software para plataformas móviles,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div className="mb-4">
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Aplicación Android + Firebase
          </h1>

          <p>
            En esta práctica se mostrará como conectar una aplicación Android con el servicio de Google <code>Firebase</code>{' '}
            para generar un control de usuarios en la nube.
          </p>

          <h2 className="mt-5">Registro e información acerca de Firebase</h2>

          <p>
            Tal y como lo mencionan en su página Home:

            "Firebase es una plataforma de desarrollo de apps que te ayuda a compilar y
            desarrollar las apps y los juegos que  les encantan a los usuarios. Con el
            respaldo de Google y la confianza de millones de empresas de todo el mundo".

            Ahora bien, para comenzar debemos registrarnos en Firebase.
            Este proceso es muy sencillo ya que si contamos con una cuenta de gmail
            (creo que no es posible iniciar sesión si no se cuenta con una cuenta de gmail),
            bastará con dirigirse a este link:
            {' '}<a href="https://firebase.google.com/" target="_blank">https://firebase.google.com/.</a>{' '}
          </p>

          <h2 className="mt-5">Configuración del Gradle</h2>

          <p>

          </p>

        </div>

        <Footer />
      </div>
    </>
  )
};


AplicacionAndroidFirebase.propTypes = {};

AplicacionAndroidFirebase.defaultProps = {};

export default AplicacionAndroidFirebase;
