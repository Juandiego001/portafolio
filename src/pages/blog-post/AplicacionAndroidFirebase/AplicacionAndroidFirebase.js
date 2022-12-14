import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionAndroidFirebase.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const AplicacionAndroidFirebase = () => {

  // Setting title
  useEffect(() => {
    document.title = "Aplicación Android + Firebase | Desarrollo de software para plataformas móviles";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="h1 text-dark">
          Aplicación Android + Firebase
        </h1>

        <div>
          <p>
            En esta práctica se mostrará como conectar una aplicación Android con el servicio de Google <code>Firebase</code>{' '}
            para generar un control de usuarios en la nube.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
};


AplicacionAndroidFirebase.propTypes = {};

AplicacionAndroidFirebase.defaultProps = {};

export default AplicacionAndroidFirebase;
