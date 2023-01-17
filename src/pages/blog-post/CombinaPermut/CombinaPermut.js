import React from 'react';
import PropTypes from 'prop-types';
import styles from './CombinaPermut.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const CombinaPermut = () => {

  return (
    <>
      <Helmet>
        <title>Combinaciones y permutaciones | Maratón de programación</title>
        <meta name="description" content="
          Combinaciones y permutaciones en C++
          por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          combinaciones permutaciones c++,
          combinacion c++,
          permutacion c++,
          combinaciones c++,
          permutaciones c++,
          combinaciones permutaciones,
          combinaciones permutaciones juan diego cobo cabal,
          combinaciones permutaciones juan diego cobo,
          combinaciones permutaciones juan diego,
          combinaciones permutaciones juan,
          combinaciones permutaciones jdcc "/>
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Combinaciones y permutaciones
          </h1>

          <p className="text-start">
            En esta entrada se explicará como funcionan los algoritmos para encontrar todas
            las posibles combinaciones y permutaciones de un arreglo de números 
            (aunque también serviría para cualquier tipo de variable) y 
            qué funciones encontramos en la librería estándar de C++ que nos pueden ayudar a 
            la elaboración de dichos procesos.
          </p>

        </div>

        <Footer />
      </div>
    </>
  )
};

CombinaPermut.propTypes = {};

CombinaPermut.defaultProps = {};

export default CombinaPermut;
