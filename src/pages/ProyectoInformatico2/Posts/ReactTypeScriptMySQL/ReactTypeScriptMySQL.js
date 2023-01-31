import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ReactTypeScriptMySQL.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const ReactTypeScriptMySql = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);


  return (
    <>
      <Helmet>
        <title>React + TypeScript + MySQL + Imgs | Proyecto informático 2</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Desarrollo de un aplicativo utilizando 
          React con el lenguaje de Typescript y 
          empleando MySQL junto con el manejo 
          de subida y descarga de imagenes."></meta>
        <meta name="keywords" content="
          react typescript mysql imgs,
          React Typescript MySQL Imgs,
          React con Typescript y MySQL controlando imagenes Proyecto,
          React con Typescript y MySQL controlando imagenes Proyecto informático 2,
          React con Typescript y MySQL controlando imagenes Proyecto informatico 2,
          React con Typescript y MySQL controlando imagenes Proyecto informático 2,
          React con Typescript y MySQL controlando imagenes Proyecto informatico 2,
          React + Typescript + MySQL + Imgs Proyecto,
          React + Typescript + MySQL + Imgs Proyecto informático 2,
          React + Typescript + MySQL + Imgs Proyecto informatico 2,
          React + Typescript + MySQL + Imgs Proyecto informático 2,
          React + Typescript + MySQL + Imgs Proyecto informatico 2,
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
            React + TypeScript + MySQL + Imgs
          </h1>
        </div>

        <Footer />
      </div>
    </>
  )
};

ReactTypeScriptMySql.propTypes = {};

ReactTypeScriptMySql.defaultProps = {};

export default ReactTypeScriptMySql;
