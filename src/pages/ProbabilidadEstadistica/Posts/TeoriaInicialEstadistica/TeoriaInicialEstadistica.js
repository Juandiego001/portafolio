import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TeoriaInicialEstadistica.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const TeoriaInicialEstadistica = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Teoría inicial de la estadística | Probabilidad y estadística</title>
        <meta name="description" content="
          Conceptos iniciales de la probabilidad y estadística tales como: definición, estadística descriptiva, objetos de estudio y demás."></meta>
        <meta name="keywords" content="
          conceptos probabilidad estadistica,
          conceptos probabilidad,
          conceptos estadistica,
          definicion de poblacion,
          definicion de muestra,
          definicion de estadistica descriptiva,
          definicion de parametros,
          definicion de estadisticos,
          defincion de variables,
          tipos de variables estadistica,
          definciion de escalas de medicion"/>
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Teoría inicial de la estadística
          </h1>

          <p className="text-start mt-3">
            En esta entrada se explicarán algunos de los conceptos más fundamentales 
            de la estadística. Además, antes de finalizar se resolverá una actividad
            de clasificación de variables y de escalas de medición.
          </p>

          <h2 className="h2 text-dark mt-5">
            ¿Qué es la estadística y cuál es su importancia?
          </h2>

          <p>
            Ciencia que recoge, organiza, presenta, analiza e interpreta
            datos con el fin de propiciar una toma de decisiones más eficaz{' '}
            <a href="https://www.mindomo.com/es/mindmap/estadistica-ciencia-que-recoge-organiza-presenta-analiza-e-interpreta-datos-con-el-fin-de-propiciar-una-toma-de-decisiones-mas-eficaz-7cb4ab50eaf645e6a413ee018f12bcd1"
              target="_blank">(Cabello, n.d.).</a>{' '}
            Se puede decir que la estadística es de suma importancia,
            ya que tiene múltiples aplicaciones que van desde
            estudios poblacionales de la civilización hasta
            predicciones de compra en mercadeo y probabilidades
            de apariciones de ciertos sucesos aleatorios.
          </p>

          <h2 className="h2 text-dark mt-5">
            ¿Qué es la estadística descriptiva y la estadística inferencial?
          </h2>

          <p>
            La estadística descriptiva incluye técnicas que se relacionan
            con el resumen y la descripción de datos numéricos mientras que
            la estadística inferencial utiliza métodos que se emplean
            para determinar una propiedad de una población con base en
            la información de una parte o muestra de ella.
          </p>

          <h2 className="h2 text-dark mt-5">
            Conceptos fundamentales
          </h2>

          <ul>
            <li>
              Población: conjunto de individuos u objetos de interés o medidas
              que se obtienen a partir de todos los individuos u objetos de interés.
            </li>

            <li>
              Muestra: porción o parte de la población de interés.
            </li>

            <li>
              Parámetro estadístico: número que se obtiene a partir de datos de una muestra estadística.
            </li>

            <li>
              Tipos de variables: cualitativas y cuantitativas.
            </li>

            <li>
              Variables cualitativas: no numéricas
            </li>

            <li>
              Variables cuantitativas: numéricas.
            </li>

            <li>
              Escalas de medición: nominal, ordinal, de intervalo y de razón.
            </li>

            <li>
              Escala nominal: cualitativas. Son simples etiquetas que no representan
              un orden.
            </li>

            <li>
              Escala ordinal: cualitativas. Etiquetas que jerarquizan.
            </li>

            <li>
              Escala de intervalo: cuantitativas.
            </li>

            <li>
              De razón: cuantitativas.
            </li>

            <li>
              Cero arbitrario: en ciertas ocasiones no es posible hablar
              de una cantidad cero o nula.
            </li>

            <li>
              Cero absoluto: en ciertas ocasiones sí es posible hablar
              de cantidad cero o nula.
            </li>
          </ul>

          <h2 className="h2 text-dark mt-5">
            Ejercicio de escalas de medición
          </h2>

          <p>
            A continuación se presentan algunas características de los
            estudiantes de la facultad de Ingeniería en la UAO (Universidad Autónoma de Occidente).
            De acuerdo a los valores que pueden tomar estas variables, menciona si corresponden a
            una variable cuantitativa continua, cuantitativa discreta o cualitativa.
            ¿Cuál es la escala de medición para cada variable? <br />
            <b>Escalas:</b> Nominal (N) – Ordinal (O) – De intervalo (I) – De razón (R).
          </p>

          <ol>
            <li>
              Deporte que practica cada alumno del grupo.<br />
              <b>R/</b> Cualitativa (N).
            </li>

            <li>
              Cantidad de estudiantes que llegan tarde a clases de Teoría de Probabilidad.<br />
              <b>R/</b> Cuantitativa discreta (O).
            </li>

            <li>
              Peso (Kg) de cada alumno del grupo.<br />
              <b>R/</b> Cuantitativa continua (I).
            </li>

            <li>
              Tiempo (minutos) que emplea cada alumno de su casa a la Universidad.<br />
              <b>R/</b> Cuantitativa continua (I).
            </li>

            <li>
              Estado de salud de cada alumno del grupo.<br />
              <b>R/</b> Cualitativa (N).
            </li>

            <li>
              Estatura (centímetros) cada alumno del grupo.<br />
              <b>R/</b> Cuantitativa continua (R).
            </li>

            <li>
              Preferencias políticas de cada alumno del grupo.<br />
              <b>R/</b> Cualitativa (N).
            </li>

            <li>
              Número de personas con las cuales vive cada alumno.<br />
              <b>R/</b> Cuantitativa discreta (O).
            </li>

            <li>
              Marcas de Gaseosa que prefieren los estudiantes de la facultad de Ingeniería.<br />
              <b>R/</b> Cualitativa (I).
            </li>

            <li>
              Clase social a la cual pertenece (baja, media o alta).<br />
              <b>R/</b> Cualitativa (O).
            </li>

            <li>
              Sistema de seguridad social al que está afiliado cada alumno del grupo.<br />
              <b>R/</b> Cualitativa (N).
            </li>

            <li>
              Tipo de música que prefieren los estudiantes de la facultad de Ingeniería.<br />
              <b>R/</b> Cualitativa (N).
            </li>

            <li>
              Número de exámenes perdidos en el semestre de cada alumno del grupo.<br />
              <b>R/</b> Cuantitativa discreta (R).
            </li>
          </ol>

          <h2 className="h2 text-dark mt-5">
            Finalización
          </h2>

          <p>
            Esta ha sido una explicación corta y sencilla de los conceptos fundamentales
            de la estadística<br /><br />
            Cualquier duda, queja, recomendación o donación que deseen realizar me pueden 
            contactar por telegram: 
            {' '}<a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>.
            Espero les haya sido de gran ayuda :)
          </p>

          <p>
              Fecha de publicación: 27-01-2023.
              <br />
              Autor: Juan Diego Cobo Cabal.
          </p>
        </div>

        <Footer />
      </div>
    </>
  )
};

TeoriaInicialEstadistica.propTypes = {};

TeoriaInicialEstadistica.defaultProps = {};

export default TeoriaInicialEstadistica;
