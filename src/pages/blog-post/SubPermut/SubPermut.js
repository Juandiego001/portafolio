import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SubPermut.module.css';
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const SubPermut = () => {

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

          <pre className="language-c++">
            <code>
              {
                "void algoritmoModificado(int k, vector<int> v) {\n" +
                "\tif (k == v.size()){\n" +
                "\t\tsubAllModificado.push_back(subModificado);\n" +
                "\t} else {\n" +
                "\t\tsubModificado.push_back(v[k]);\n" +
                "\t\talgoritmoModificado(k+1, v);\n" +
                "\t\tsubModificado.pop_back();\n" +
                "\t\talgoritmoModificado(k+1, v);\n" +
                "\t}\n" +
                "}\n"
              }
            </code>
          </pre>

          <p>
            La diferencia fundamental de este algoritmo en comparación con el anterior es que
            se toman los elementos directamente con el índice del vector: <code>v[k]</code>{' '}
            por lo que se estará operando directamente sobre los elementos y no con elementos
            consecutivos. A su vez, es importante resaltar que se podría declarar el vector
            de elementos como global (queda a decisión del programador).<br /><br />

            El código contemplando ambos algoritmos puede encontrarse{' '}
            <a href="https://replit.com/@JUANDIEGODIEG45/Subconjuntos-y-permutaciones-10#main.cpp" target="_blank">aqui.</a>
          </p>

          <h2 className="text-dark">Permutaciones</h2>

          <p>
            Ahora bien, similar al vector que teníamos en la parte de subconjuntos ({"{1, 2, 3}"}), si quisieramos
            hallar todas las permutaciones posibles de los elementos, tendríamos que retornar los siguientes valores:
          </p>

          <pre className="language-html">
            <code>
              {
                "{1, 2, 3}\n" +
                "{1, 3, 2}\n" +
                "{2, 1, 3}\n" +
                "{2, 3, 1}\n" +
                "{3, 1, 2}\n" +
                "{3, 2, 1}\n"
              }
            </code>
          </pre>

          <p>
            Para esto, lo que hacemos es construir una función muy similar a la de los subconjuntos
            con la variación de que tendremos un arreglo que irá validando si un valor ha sido
            añadido a la permutación en cuestión. El algoritmo que nos proporciona el libro es:
          </p>

          <pre className="language-c++">
            <code>
              {
                "void search() {\n" +
                "\tif (permutation.size() == n) {\n" +
                "\t\t// se procesa la permutación\n" +
                "\t} else {\n" +
                "\t\tfor (int i = 1; i <= n; i++) {\n" +
                "\t\t\tif (chosen[i]) continue;\n" +
                "\t\t\tchosen[i] = true;\n" +
                "\t\t\tpermutation.push_back(i);\n" +
                "\t\t\tsearch();\n" +
                "\t\t\tchosen[i] = false;\n" +
                "\t\t\tpermutation.pop_back();\n" +
                "\t\t}\n" +
                "\t}\n" +
                "}\n"
              }
            </code>
          </pre>
          
          <p>
            Sin embargo, surge un problema similar al de los subconjuntos, pues este algoritmo
            esta diseñado exclusivamente para elementos consecutivos donde <code>n</code>{' '}
            establece el límite de elementos a los que se les hallará la permutación. Por ello,
            si modificamos medianamente el código podremos resultar con un algoritmo que nos permite
            hallar todas las posibles permutaciones independientemente de si son números consecutivos
            o no:
          </p>

          <pre className="language-c++">
            <code>
              {
                
              }
            </code>
          </pre>
        </div>

        <Footer />
      </div>
    </>
  )
};

SubPermut.propTypes = {};

SubPermut.defaultProps = {};

export default SubPermut;
