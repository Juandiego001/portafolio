import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AcercaDe.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AcercaDe = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Acerca de | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Página de informaación acerca de Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          acerca de juan diego cobo cabal,
          acerca de juan diego cobo,
          acerca de juan diego,
          acerca de juan,
          acerca de jdcc,
          Acerca de JDCC,
          Acerca de Juan Diego Cobo Cabal,
          Acerca de Juan Diego Cobo,
          Acerca de Juan Diego,
          Acerca de Juan" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Acerca de
          </h1>

          <p>
            Mi nombre es Juan Diego Cobo Cabal y soy estudiante de Ingeniería Informática
            de la Universidad Autónoma de Occidente en la ciudad de Cali, Colombia. El motivo
            por el que desarrollé está plataforma tiene sencillamente dos fines:
          </p>

          <ol>
            <li>
              Dar a conocer tanto para mis compañeros de estudio
              como para cualquier persona interesada, lo que
              vayamos aprendiendo a lo largo de la carrera.
            </li>

            <li>
              Dar a conocer los proyectos que he desarrollado
              para presentarme ante las empresas.
            </li>
          </ol>

          <p>
            También, debo destacar que no cuento con múltiples redes sociales
            y con las que cuento suelen ser más personales. Por lo que
            suelo utilizar como contacto mi{' '}
            <a href="https://t.me/Juan_0_0_1" target="_blank" rel="noindex,nofollow">telegram.</a>
          </p>

        </div>

        <Footer />
      </div>
    </>
  )
};

AcercaDe.propTypes = {};

AcercaDe.defaultProps = {};

export default AcercaDe;
