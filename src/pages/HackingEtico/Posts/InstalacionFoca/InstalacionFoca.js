import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './InstalacionFoca.module.css';
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const InstalacionFoca = () => {

  useEffect(() => {
    window.scrollTo(0,0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>¿Cómo instalar La FOCA? | Hacking Ético</title>
        <meta name="description" content="Conceptos iniciales de grafos: nodos, caminos, tipos de grafos, algoritmos de recorrido de grafos y demás en el lenguaje C++."></meta>
        <meta name="keywords" content="
          conceptos grafos c++,
          grafos c++,
          listas de adyacencia c++,
          matriz de adyacencia c++,
          grafos ponderados c++,
          grafos de peso,
          grafos,
          conceptos de grafos,
          tipos de grafos juan diego cobo cabal,
          nodos grafos juan diego cobo,
          caminos grafos juan diego,
          bordes grafos juan,
          grafos jdcc,
          grafos juan diego cobo cabal,
          grafos juan diego cobo,
          grafos juan diego,
          grafos juan"/>
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1>
            ¿Cómo instalar La FOCA?
          </h1>

          <p>
            En esta entrada se explicará cómo instalar la herramienta para la extracción y
            análisis de metadatos: La FOCA. En términos generales, su instalación es sencilla
            y lo que más tenemos que tener en cuenta es la instalación y vinculación de SQL Server.
          </p>

          <h2 className="mt-5">Requisitos</h2>

          <p>
            Actualmente, La FOCA solo funciona para sistemas operativos Windows
            y estos son los requerimientos que se deben cumplir:
          </p>

          <ul>
            <li>Microsoft Windows (64 bits). Versiones 7, 8, 8.1 y 10.</li>
            <li>Microsoft .NET Framework 4.7.1.</li>
            <li>Microsoft Visual C++ 2010 x64 o mayor.</li>
            <li>Una instancia de SQL Server 2014 o mayor.</li>
          </ul>

          <h2 className="mt-5">
            Instalación de SQL Server 2022
          </h2>

          <p>
            Debido a que este tutorial se está realizando en el 2023,
            la versión más reciente de SQL Server es la del 2022.
            Para comenzar, tendremos que dirigirnos al siguiente 
            {' '}<a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads">link</a>{' '}
            y bajar hasta la sección que muestre las versiones gratis
            {' '}<span className="badge text-dark m-0 p-0 text-break">developer</span>{' '}
            o
            {' '}<span className="badge text-dark m-0 p-0 text-break">express</span>.{' '}
            En mi caso, he utilizado la versión 
            {' '}<span className="badge text-dark m-0 p-0 text-break">developer</span>{' '}
            por lo que se da click en 
            {' '}<span className="badge text-dark m-0 p-0 text-break">download</span>{' '}
            y se guarda el ejecutable.
          </p>

          <div className="w-100 mt-5">
            <img className="img-fluid" src={process.env.PUBLIC_URL + "/octavo-semestre/hacking-etico/3.png"} />
          </div>

          <p>
            Una vez se ha terminado la descarga,
            abrimos dicho ejecutable, aceptamos los términos y condiciones y, en mi caso,
            seleccionamos la opción básica. Posterior a esto, damos
            {' '}<span className="badge text-dark m-0 p-0 text-break">siguiente</span>{' '}
            en los demás puntos y esperamos a que se efectúe la descarga.
          </p>          

          <div className="w-100 mt-5">
            <img className="w-100" src={process.env.PUBLIC_URL + "/octavo-semestre/hacking-etico/1.png"} />
          </div>

          <h2 className="mt-5">
            Instalación de La FOCA
          </h2>

          <p>
            Para la instalación de la herramienta como tal tendremos que dirigirnos al enlace de
            {' '}<a href="">releases</a>{' '}
            donde descargaremos la versión X.X en el formato 
            {' '}<span className="badge text-dark m-0 p-0 text-break">.zip.</span>{' '}
            Luego, extraemos el comprimido y abrimos el archivo
            {' '}<span className="badge text-dark m-0 p-0 text-break">FOCA.exe.</span>{' '}
            Al iniciar, nos pedirá que establezcamos la instancia de nuestro SQL Server,
            con el cual, nada más agregaremos el nombre del pc y estaría listo.
          </p>
        </div>

        <Footer />
      </div>
    </>
  )
};

InstalacionFoca.propTypes = {};

InstalacionFoca.defaultProps = {};

export default InstalacionFoca;
