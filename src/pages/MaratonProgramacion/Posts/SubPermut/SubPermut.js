import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SubPermut.module.css';
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

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
            si modificamos medianamente el código podremos crear un algoritmo que nos permite
            hallar todas las posibles permutaciones independientemente de si son números consecutivos
            o no:
          </p>

          <pre className="language-c++">
            <code>
              {
                "void algoritmoModificado() {\n" +
                "\tif (permutation2.size() == n2) {\n" +
                "\t\tallPermutations2.push_back(permutation2);\n" +
                "\t} else {\n" +
                "\t\tfor (int i = 0; i < n2; i++) {\n" +
                "\t\t\tif (choosen2[i]) continue;\n" +
                "\t\t\tchoosen2[i] = true;\n" +
                "\t\t\tpermutation2.push_back(v[i]);\n" +
                "\t\t\talgoritmoModificado();\n" +
                "\t\t\tchoosen2[i] = false;\n" +
                "\t\t\tpermutation2.pop_back();\n" +
                "\t\t}\n" +
                "\t}\n" +
                "}\n"
              }
            </code>
          </pre>

          <p>
            El código se puede visualizar{' '}
            <a href="https://replit.com/@JUANDIEGODIEG45/Subconjuntos-y-permutaciones-20#main.cpp" 
              target="_blank">aquí.
            </a>
          </p>

          <h2 className="text-dark">Funciones adicionales</h2>

          <p>
            Además de los algoritmos visualizados anteriormente, C++ posee diferentes 
            funciones que facilitan el desarrollo. Dos de estas funciones son:{' '}
            <code>next_permutation</code> y <code>prev_permutation.</code>{' '}
            Ambas funciones toman una permutación o vector y se encargan de hallar la
            permutación siguiente y la permutación anterior respectivamente.
            <br /><br />
            Ambas funciones retornan <code>1</code> si es posible encontrar la permutación
            y <code>0</code> en caso de que no. Además, modifican el vector
            y lo convierten en la permutación deseada.
          </p>
          
          <h5>Código</h5>

          <pre className="language-c++">
            <code>
              {
                "vector<int> v = {1,2,3};\n" +
                'cout << next_permutation(v.begin(), v.end()) << "\\n";\n' +
                'cout << v[0] << " " << v[1] << " " << v[2] << "\\n";'
              }
            </code>
          </pre>

          <h5>Salida</h5>

          <pre className="language-plain">
            <code>
              {
                "1\n" +
                "1 3 2"
              }
            </code>
          </pre>

          <h5>Código</h5>

          <pre className="language-c++">
            <code>
              {
                "vector<int> v = {3,2,1};\n" +
                'cout << prev_permutation(v.begin(), v.end()) << "\\n";\n' +
                'cout << v[0] << " " << v[1] << " " << v[2] << "\\n";'
              }
            </code>
          </pre>

          <h5>Salida</h5>

          <pre className="language-plain">
            <code>
              {
                "1\n" +
                "3 1 2"
              }
            </code>
          </pre>

          <h2 className="h2 text-dark mt-5">
            Finaización
          </h2>

          <p>
            Esta ha sido una guía corta de teoría acerca de la generación de subconjuntos y permutaciones. 
            Después de cada sección de código modificado se dejaró un enlace para visualizar los algoritmos
            en la plataforma <code>Replit</code>{' '} (no es necesario registrarse para ver el código).
            <br /><br />
            Cualquier duda, queja, recomendación o donación que deseen realizar me pueden contactar por telegram: 
            {' '}<a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>.
            Espero les haya sido de gran ayuda :)
          </p>

          <p>
              Fecha de publicación: 22-01-2023.
              <br />
              Autor: Juan Diego Cobo Cabal.
          </p>
        </div>

        <Footer />
      </div>
    </>
  )
};

SubPermut.propTypes = {};

SubPermut.defaultProps = {};

export default SubPermut;
