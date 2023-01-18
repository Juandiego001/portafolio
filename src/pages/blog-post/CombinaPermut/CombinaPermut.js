import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CombinaPermut.module.css';
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const CombinaPermut = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Subconjuntos y permutaciones | Maratón de programación</title>
        <meta name="description" content="
          Subconjuntos y permutaciones en C++
          por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          subconjuntos permutaciones c++,
          subconjunto c++,
          permutacion c++,
          subconjuntos c++,
          permutaciones c++,
          subconjuntos permutaciones,
          subconjuntos permutaciones juan diego cobo cabal,
          subconjuntos permutaciones juan diego cobo,
          subconjuntos permutaciones juan diego,
          subconjuntos permutaciones juan,
          subconjuntos permutaciones jdcc "/>
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Subconjuntos y permutaciones
          </h1>

          <p className="text-start">
            En esta entrada se explicará como funcionan los algoritmos para encontrar todos
            los posibles subconjuntos y permutaciones de un arreglo de números
            (aunque también serviría para cualquier tipo de variable) y
            qué funciones encontramos en la librería estándar de C++ que nos pueden ayudar a
            la elaboración de dichos procesos.
          </p>

          <h2 className="text-dark">Subconjuntos</h2>

          <p>
            Si tuviesemos un arreglo con los valores: <code>{"{1,2,3},"}</code>{' '} los
            posibles subconjuntos serían {"{1}, {2}, {3}, {1,2}, {1,3}, {2,3}"}. El algoritmo
            que nos permite encontrar todos los posibles subconjuntos, tal y como se plantea
            en el texto <i>Guide to Competitive Programming de Antti Laaksonen</i>{' '} es
            el siguiente:
          </p>

          <pre className="language-c++">
            <code>
              {
                "void search(int k) {\n" +
                "\tif (k == n+1) {\n" +
                "\t\t// se procesa el subconjunto\n" +
                "\t} else {\n" +
                "\t\t// se agrega k al subconjunto\n" +
                "\t\tsubset.push_back(k);\n" +
                "\t\tsearch(k+1);\n" +
                "\t\tsubset.pop_back();\n" +
                "\t\t// se remueve k de los nuevos subconjuntos a agregar\n" +
                "\t\tsearch(k+1);\n" +
                "\t}\n" +
                "}"
              }
            </code>
          </pre>

          <p>
            Básicamente, lo que se hace en el algoritmo es que en los primeros llamados se va a ir agregando
            los primeros subconjuntos que vendrían siendo: {"{1}, {2}, {3}"}{' '}. Luego, el algoritmo
            va removiendo y agregando según corresponda.<br /><br />

            Sin embargo, como se puede observar, este algoritmo solo aplica para valores consecutivos,
            es decir, arreglos con elementos: {"{1,2,3,4... n}"}, por lo que para que se adapte 
            a cualquier elemento, el algoritmo debe ser modificado similar a la siguiente forma:
          </p>

          <pre>
            <code>
              
            </code>
          </pre>

        </div>

        <Footer />
      </div>
    </>
  )
};

CombinaPermut.propTypes = {};

CombinaPermut.defaultProps = {};

export default CombinaPermut;
