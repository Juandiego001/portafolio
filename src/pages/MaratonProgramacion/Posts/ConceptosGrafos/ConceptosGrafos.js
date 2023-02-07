import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ConceptosGrafos.module.css';
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const ConceptosGrafos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Conceptos iniciales de grafos | Maratón de programación</title>
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

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Conceptos iniciales de grafos
          </h1>

          <p>
            En esta entrada se explicarán algunos de los conceptos más importantes de los grafos.
            Además, se implementarán algunos conceptos en código utilizando el lenguaje de programación
            C++.
          </p>

          <h2 className="mt-5">
            ¿Qué es un grafo?
          </h2>

          <p>
            De acuerdo con nuestro texto guía <i>Guide to Competitive Programming de Antti Laaksonen</i>,
            un grafo contiene <b>nodos</b> también llamados <i>vértices</i> que están conectados
            mediante bordes (traducción literal de edges) o como mejor se conocen en español <b>aristas.</b>
          </p>

          {/* Dibujo de grafo de ejemplo */}
          <div className={styles.GraphExample}>
            <div className={styles.Node + " " + styles.Node1}>1</div>
            <div className={styles.Arrow12}></div>
            <div className={styles.Arrow13}></div>
            <div className={styles.Node + " " + styles.Node2}>2</div>
            <div className={styles.Arrow24}></div>
            <div className={styles.Arrow25}></div>
            <div className={styles.Node + " " + styles.Node3}>3</div>
            <div className={styles.Arrow34}></div>
            <div className={styles.Node + " " + styles.Node4}>4</div>
          </div>

          <h2 className="mt-5">
            ¿Qué es un camino en grafos?
          </h2>

          <p>
            Un camino es aquel que conecta un nodo con otro a través de una aristas.
            La longitud de un camino, es el total de aristas recorridas. Por ejemplo,
            en el grafo mostrado en la parte superiror, el camino{' '}
            <code className="text-dark">{"1 - 3 - 4"}</code>{' '}
            tiene una longitud de 2, porque atraviesa 2 aristas.
          </p>

          <h2 className="mt-5">
            ¿Qué es un ciclo en grafos?
          </h2>

          <p>
            Un ciclo es un camino donde el nodo incial es el mismo que el nodo final.
            Por ejemplo, en el grafo mostrado anteriormente, hay un ciclo en el camino,{' '}
            <code className="text-dark">{"1 - 2 - 4 - 3 - 1"}</code>,
            ya que el el nodo incial es el mismo que el nodo final.
          </p>

          <h2 className="mt-5">
            ¿Qué es un grafo conectado?
          </h2>

          <p>
            Se dice que un grafo es conectado si hay un camino entre cualquier
            par de nodos. Las partes conectadas de un grafo son llamadas <b>componenetes.</b>
          </p>

          <h2 className="mt-5">
            ¿Cuándo un grafo es también un árbol?
          </h2>

          <p>
            Un árbol es un grafo conectado que no contiene ciclos.
          </p>

          <h2 className="mt-5">
            ¿Qué es un grafo dirigido?
          </h2>

          <p>
            Un grafo dirigido es aquel en el que las aristas pueden ser atravesadas una
            única vez o en una sola dirección.
          </p>

          <h2 className="mt-5">
            ¿Qué es un grafo ponderado?
          </h2>

          <p>
            En un grafo ponderado, cada borde tiene asignado un peso.
          </p>

          <h2 className="mt-5">
            Representación de grafos en programación
          </h2>

          <p>
            Existen tres principales estructuras que nos permiten representar
            grafos:
          </p>

          <ul>
            <li>Listas de adyacencia.</li>
            <li>Matriz de adyacencia.</li>
            <li>Lista de aristas.</li>
          </ul>

          <h2 className="mt-5">
            Lista de adyacencia
          </h2>

          <p>
            La lista de adyacencia es básicamente un vector de vectores. Sin embargo,
            también se podría contemplar como un hash de vectores. La idea es que
            para cada nodo se almacenará un arreglo que contiene los nodos con los
            que se conecta el nodo clave o el nodo posición x. La lista de adyacencia
            del grafo anterior se puede visualizar de la siguiente manera:
          </p>

          <pre>
            <code className="language-html">
              {
                "  [1]   [2]   [3]   [4]\n" +
                "{ {3,   {1,   {1,   {2, }\n" +
                "   2}    4}    4}    3}"
              }
            </code>
          </pre>

          <p>
            Así pues, para el nodo 1, tendríamos un vector con los elementos:{' '}
            <code className="text-dark">{"{3, 2}"}</code>,
            para el nodo 2: <code className="text-dark">{"{1, 4}"}</code>,
            para el nodo 3: <code className="text-dark">{"{1, 4}"}</code> y
            para el nodo 4: <code className="text-dark">{"{2, 3}"}</code>.
          </p>

          <p>
            En el siguiente{' '}
            <a href="https://replit.com/@JUANDIEGODIEG45/Lista-de-adyacencia#main.cpp" target="_blank">código</a>{' '}
            se puede visualizar cómo quedaría un ejercicio
            donde se lean el número de nodos de un grafo y las aristas o conexiones
            de cada uno. Este código se usa solamente para representar el proceso
            y la estructura de datos de la lista de adyacencia.
          </p>

          <h2 className="mt-5">
            Matriz de adyacencia
          </h2>

          <p>
            La matriz de adyacencia consiste en una matriz de tamaño{' '}
            <code className="text-dark">{"{n x n}"}</code>{' '}
            donde para cada columna corresponde a un nodo y sus filas
            son rellenadas con 1's o 0's dependiendo si tienen conexión
            con los nodos consecuentes o no. Se puede visualizar de
            la siguiente manera:
          </p>

          <pre>
            <code className="language-html">
              {
                "     [1]     [2]     [3]  \n" +
                "[1]{  0       1       1   }\n" +
                "[2]{  1       0       1   }\n" +
                "[3]{  1       1       0   }\n"
              }
            </code>
          </pre>

          <p>
            En caso de que fuera un grafo ponderado, se reemplazaría el 1
            por el peso asignado a la arista. Cabe destacar, que el problema
            con la matriz de adyacencia es que hay muchos 0 dentro de la matriz
            que resultan ocupando un espacio innecesario. Además, el orden
            de complejidad de esta implementación es de O(n<sup>2</sup>). El
            código de implementación sería algo similar a la lista de adyacencia
            por lo que se omitirá su desarrollo.
          </p>

          <h2 className="mt-5">
            Lista de aristas
          </h2>

          <p>
            En esta estructura se almacenan tuplas en un arreglo indicando
            los caminos que se siguen entre nodos correspondientes. Por ejemplo,
            {"{1, 2}"} indica que existe una arista entre los nodos 1 y 2.
            En caso de que sea un grafo ponderado se almacenará un tercer
            valor indicando el peso del camino (e. g. {"{1, 2, 5}"}, indicaría
            que hay una arista entre los nodos 1 y 2 con un peso de 5).
          </p>

          <h2 className="h2 text-dark mt-5">
            Finalización
          </h2>

          <p>
            Esta ha sido una guía corta acerca de los conceptos iniciales de grafos. En posteriores
            entradas, se explicarán conceptos más a profundidad y algoritmos que nos ayudan en
            el proceso de encontrar caminos y demás.
            <br /><br />
            Cualquier duda, queja, recomendación o donación que deseen realizar me pueden contactar por telegram:
            {' '}<a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>.
            Espero les haya sido de gran ayuda :)
          </p>

          <p>
            Fecha de publicación: 30-01-2023.
            <br />
            Autor: Juan Diego Cobo Cabal.
          </p>


        </div>

        <Footer />
      </div>
    </>
  )
};

ConceptosGrafos.propTypes = {};

ConceptosGrafos.defaultProps = {};

export default ConceptosGrafos;
