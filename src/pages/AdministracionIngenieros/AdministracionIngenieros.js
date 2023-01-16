import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AdministracionIngenieros.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AdministracionIngenieros = () => {

  return (
    <>
      <Helmet>
        <title>Administración para ingenieros | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Administración para ingenieros en la universidad autónoma
          de occidente por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          administracion para ingenieros,
          admin ingenieros,
          admin ingeniera,
          administracion para ingenieros juan diego cobo cabal,
          administracion para ingenieros juan diego cobo,
          administracion para ingenieros juan diego,
          administracion para ingenieros juan,
          Administración para ingenieros JDCC,
          Administracion para ingenieros JDCC,
          Admin ingenieros Juan Diego Cobo Cabal,
          Admin ingenieros Juan Diego Cobo,
          Admin ingenieros Juan Diego,
          Admin ingenieros Juan,
          Administración para ingenieros Juan Diego Cobo Cabal,
          Administración para ingenieros Juan Diego Cobo,
          Administración para ingenieros Juan Diego,
          Administración para ingenieros Juan,
          Administracion para ingenieros Juan Diego Cobo Cabal,
          Administracion para ingenieros Juan Diego Cobo,
          Administracion para ingenieros Juan Diego,
          Administracion para ingenieros Juan" />
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Administración para ingenieros
          </h1>

        </div>

        <Footer />
      </div>
    </>
  );
}

AdministracionIngenieros.propTypes = {};

AdministracionIngenieros.defaultProps = {};

export default AdministracionIngenieros;
