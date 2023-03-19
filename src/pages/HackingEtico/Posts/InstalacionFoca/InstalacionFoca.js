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
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>¿Cómo instalar La FOCA? | Hacking Ético</title>
        <meta name="description" content="Instalar la herramienta de análisis y extracción La FOCA con SQL Server de la compañía Eleven Paths."></meta>
        <meta name="keywords" content="
          instalacion foca,
          como instalar la foca,
          foca install,
          foca download,
          sql server foca,
          como vincular sql server con la foca,
          como descargar sql server para la foca,
          foca sql server,
          sql server la foca,
          descargar la foca"/>
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1>
            ¿Cómo instalar La FOCA?
          </h1>

          <p>
            En esta entrada se explicará cómo instalar la herramienta para la extracción y
            análisis de metadatos: La FOCA versión 3.4.7.1. En términos generales, su instalación es sencilla
            y lo que más tenemos que tener en cuenta es la instalación y vinculación de SQL Server.
          </p>

          <h2 className="mt-5">Requisitos</h2>

          <p>
            Actualmente (19 de Marzo del 2023), La FOCA solo funciona para sistemas operativos Windows
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

          <div className="w-100 mt-5 text-center">
            <img className="img-fluid" src={process.env.PUBLIC_URL + "/octavo-semestre/hacking-etico/3.png"} />
          </div>

          <p className="mt-5">
            Una vez se ha terminado la descarga,
            abrimos dicho ejecutable, aceptamos los términos y condiciones y, en mi caso,
            seleccionamos la opción básica. Posterior a esto, damos
            {' '}<span className="badge text-dark m-0 p-0 text-break">siguiente</span>{' '}
            en los demás puntos y esperamos a que se efectúe la descarga.
          </p>

          <div className="w-100 mt-5 text-center">
            <img className="img-fluid" src={process.env.PUBLIC_URL + "/octavo-semestre/hacking-etico/1.png"} />
          </div>

          <p className="mt-5">
            Finalizada la descarga, nos mostrará una serie de características. En esta pantalla final,
            haremos click en el botón
            {' '}<span className="badge text-dark m-0 p-0 text-break">Conectarse ahora.</span>{' '}
          </p>

          <div className="w-100 mt-5 text-center">
            <img className="img-fluid" src={process.env.PUBLIC_URL + "/octavo-semestre/hacking-etico/4.png"} />
          </div>

          <p className="mt-5">
            El botón nos abrirá una consola de comandos donde estaremos gestionando la base de datos.
            En caso de haber cerrado esta pestaña, desde una consola de comandos se podrá abrir
            digitando el comando:
            {' '}<span className="badge text-dark m-0 p-0 text-break">sqlcmd.</span>{' '}
          </p>

          <p>
            Una vez nos encontramos en la base de datos realizaremos dos operaciones:
          </p>

          <ol>
            <li>Determinar el nombre del servidor SQL Server.</li>
            <li>Agregar una base de datos de nombre:
              {' '}<span className="badge text-dark m-0 p-0 text-break">Foca.</span>{' '}
            </li>
          </ol>

          <div className="p-3 bg-info my-5">
            <h6>Nota</h6>

            <p>
              Generalmente, no es necesario hacer el paso 2 ya que una vez el programa
              se conecta con el servidor, este crea la base de datos. Sin embargo,
              existen otras ocasiones en donde, si se está reinstalando el servidor,
              sí nos pedirá que creemos la base de datos previamente.
            </p>
          </div>

          <p>
            Para determinar el nombre del servidor bastara con digitar el comando:
          </p>

          <pre>
            <code className="language-sql">
              {
                "SELECT @@SQLSERVER;\n" +
                "go"
              }
            </code>
          </pre>

          <p>
            Posteriormente, para crear la base de datos digitaremos:
          </p>

          <pre>
            <code className="language-sql">
              {
                "CREATE DATABASE Foca;\n" +
                "go"
              }
            </code>
          </pre>

          <p>
            Y ya tendremos nuestro servidor SQL Server, correctamente configurado.
          </p>

          <h2 className="mt-5">
            Instalación de requisitos adicionales
          </h2>

          <p>
            Para la instalación de los demás requisitos basta con dirigirse a las
            páginas que se mostrarán a continuación, descargar los ejecutables
            y dar click en siguiente en cada paso:
          </p>

          <ul>
            <li><a href="https://dotnet.microsoft.com/en-us/download/dotnet-framework">Microsoft .NET Framework.</a></li>
            <li><a href="https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170">Microsoft Visual C++.</a></li>
          </ul>

          <h2 className="mt-5">
            Instalación de La FOCA
          </h2>

          <p>
            Para la instalación de la herramienta como tal tendremos que dirigirnos al enlace de
            {' '}<a href="">releases</a>{' '}
            donde descargaremos la versión 3.4.7.1 en el formato
            {' '}<span className="badge text-dark m-0 p-0 text-break">.zip.</span>{' '}
            Luego, extraemos el comprimido y abrimos el archivo
            {' '}<span className="badge text-dark m-0 p-0 text-break">FOCA.exe</span>{' '}
            que aparece con el ícono del programa.
            Al iniciar, nos pedirá que establezcamos la instancia de nuestro SQL Server,
            para el cual digitaremos el nombre que hallamos en los pasos anteriores
            y, si la base de datos fue creada anteriormente con éxito, nos debe
            dejar ingresar con normalidad.
          </p>

          <div className="text-center w-100 mt-5">
            <img className="img-fluid" src={process.env.PUBLIC_URL + "/octavo-semestre/hacking-etico/5.png"} />
          </div>

          <h2 className="h2 text-dark mt-5">
            Finalización
          </h2>

          <p>
            Esta ha sido una guía corta para instalar la herramienta de extracción y
            análisis de metadatos: La Foca.
            <br /><br />
            Cualquier duda, queja, recomendación o donación que deseen realizar me pueden contactar por telegram:
            {' '}<a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>.
            Espero les haya sido de gran ayuda :)
          </p>

          <p>
            Fecha de publicación: 19-03-2023.
            <br />
            Autor: Juan Diego Cobo Cabal.
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
