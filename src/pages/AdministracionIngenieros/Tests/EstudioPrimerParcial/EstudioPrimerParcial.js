import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './EstudioPrimerParcial.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import Questions from '../../../../components/Questions/Questions';

const preguntas = [
  {
    pregunta: "¿Qué es la administración estratégica?",
    opciones: [
      "Son los planes que determinan cómo logrará su propósito comercial, cómo competirá con éxito " +
      "y como atraerá y satisfará a sus clientes para lograr sus objetivos.",
      "Es lo que hacen los gerentes para desarrollar las estrategias de sus organizaciones.",
      "Planear, organizar, dirigir y controlar.",
      "Conjunto de acciones que pone en práctica una compañía para generar ingresos económicos."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuáles son las funciones gerenciales básicas?",
    opciones: [
      "Son los planes que determinan cómo logrará su propósito comercial, cómo competirá con éxito " +
      "y como atraerá y satisfará a sus clientes para lograr sus objetivos.",
      "Es lo que hacen los gerentes para desarrollar las estrategias de sus organizaciones.",
      "Planear, organizar, dirigir y controlar.",
      "Conjunto de acciones que pone en práctica una compañía para generar ingresos económicos."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué son las estrategias de la organización?",
    opciones: [
      "Son los planes que determinan cómo logrará su propósito comercial, cómo competirá con éxito " +
      "y como atraerá y satisfará a sus clientes para lograr sus objetivos.",
      "Es lo que hacen los gerentes para desarrollar las estrategias de sus organizaciones.",
      "Planear, organizar, dirigir y controlar.",
      "Conjunto de acciones que pone en práctica una compañía para generar ingresos económicos."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué es el modelo de negocios?",
    opciones: [
      "Son los planes que determinan cómo logrará su propósito comercial, cómo competirá con éxito " +
      "y como atraerá y satisfará a sus clientes para lograr sus objetivos.",
      "Es lo que hacen los gerentes para desarrollar las estrategias de sus organizaciones.",
      "Planear, organizar, dirigir y controlar.",
      "Conjunto de acciones que pone en práctica una compañía para generar ingresos económicos."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Cuáles son los pasos que abarca la administración estratégica?",
    opciones: [
      "Identificación de misión, objetivos y estrategias actuales de la organización, análisis " +
      "externo, análisis interno, formulación de estrategias, implementación de estrategias y " +
      "evaluación de los resultados.",
      "Análisis externo e interno de la organización, formulación de estrategias, implementación de " +
      "estrategias y evaluación de resultados.",
      "Identificación de misión, objetivos y estrategias actuales de la organización y análisis " +
      "externo e interno.",
      "Ninguna de las anteriores."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuáles son los componentes en la declaración de una misión?",
    opciones: [
      "Clientes.",
      "Mercados.",
      "Rentabilidad.",
      "Todas las anteriores."
    ],
    correcta: 3
  },
  {
    pregunta: "¿En qué consiste el análisis FODA?",
    opciones: [
      "Análisis de las funciones, oportunidades, debilidades y amenazas.",
      "Análisis de fortalezas, oportunidades, determinaciones y amenazas.",
      "Análisis de fortalezas, oportunidades, debilidades y amenazas.",
      "Ninguna de las anteriores."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué se puede identificar a partir de un análisis externo de una organización?",
    opciones: [
      "Oportunidades y amenazas.",
      "Oportunidades y debilidades.",
      "Fortalezas y amenazas.",
      "Fortalezas y debilidades."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué se puede identificar a partir de un análisis interno de una organización?",
    opciones: [
      "Oportunidades y recursos.",
      "Recursos y capacidades.",
      "Fortalezas y recursos.",
      "Fortalezas y capacidades."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuáles son las diferencias entre oportunidades y amenazas a partir de un análisis externo?",
    opciones: [
      "Mientras que las oportunidades son tendencias positivas presentes en el análisis externo, las " +
      "amenazas por su parte son tendencias negativas.",
      "Mientras que las oportunidades son tendencias negativas presentes en el análisis externo, las " +
      "amenazas por su parte son tendencias positivas.",
      "Ambas representan tendencias resultantes del análisis externo, positivas para la empresa.",
      "Ambas representan tendencias resultantes del análisis externo, negativas para la empresa."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuáles son las diferencias entre recursos y capacidades a partir de un análisis interno?",
    opciones: [
      "Mientras que los recursos representan el cómo las empresas desarrollan su trabajo " +
      "las capacidades representan el qué tiene la empresa para desarrollar sus actividades.",
      "Ambas representan el cómo las empresas desarrollan su trabajo.",
      "Ambas representan el cómo las empresas desarrollan sus actividades.",
      "Mientras que los recursos representan qué tiene la empresa para desarrollar sus actividades " +
      "las capacidades representan el cómo las empresas desarrollan su trabajo.",
    ],
    correcta: 3
  },
  {
    pregunta: "¿Qué son las competencias fundamentales de una organización?",
    opciones: [
      "Las competencias fundamentales de una organización son los requisitos generales " +
      "de una empresa para operar en el mercado.",
      "Las competencias fundamentales de una organización son los recursos utilizables de una empresa.",
      "Las competencias fundamentales de una organización son las capacidades principales que tiene la " +
      "empresa para generar valor.",
      "Las competencias fundamentales de una organización son las habilidades generales de una empresa."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué son las fortalezas de una organización?",
    opciones: [
      "Son todas aquellas actividades en las que se destaca la organización o los recursos únicos " +
      "que tienen a su disposición.",
      "Son aquellas actividades que no realiza adecuadamente o son los recursos que requiere pero que carece.",
      "Ninguna de las anteriores"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué son las debilidades de una organización?",
    opciones: [
      "Son todas aquellas actividades en las que se destaca la organización o los recursos únicos " +
      "que tienen a su disposición.",
      "Son aquellas actividades que no realiza adecuadamente o son los recursos que requiere pero que " +
      "carece.",
      "Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuáles son los tres tipos principales de estrategias que los gerentes formulan a partir " +
    "de un análisis FODA?",
    opciones: [
      "De crecimiento, de estabilidad y de renovación. ",
      "Estrategias corporativas, competitivas o funcionales.",
      "De integración vertical hacia adelante, hacia atrás u horizontal",
      "Ninguna de las anteriores"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cómo se dividen los niveles de gerencia los tipos de estrategias a implementar?",
    opciones: [
      "Gerentes de alto nivel -> Estrategias funcionales. Gerentes de mediano nivel -> Estrategias " +
      "competitivas. Gerentes de bajo nivel -> Estrategias corporativas.",
      "Gerentes de alto nivel -> Estrategias competitivas. Gerentes de mediano nivel -> Estrategias " +
      "corporativas. Gerentes de bajo nivel -> Estrategias funcionales.",
      "Gerentes de alto nivel -> Estrategias corporativas. Gerentes de mediano nivel -> Estrategias " +
      "competitivas. Gerentes de bajo nivel -> Estrategias funcionales.",
      "Gerentes de alto nivel -> Estrategias corporativas. Gerentes de mediano nivel -> Estrategias " +
      "funcionales. Gerentes de bajo nivel -> Estrategias competitivas."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué es la estrategia corporativa?",
    opciones: [
      "Las estrategias corporativas determinan en que líneas de negocio opera o desean operar y qué " +
      "desean alcanzar con ellas.",
      "Las estrategias corporativas determinan cómo competirá la organización en las líneas de " +
      "negocio.",
      "Las estrategias corporativas son aquellas que respaldan las estrategias competitivas.",
      "Todas las anteriores."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuáles son los tipos de estrategias corporativas?",
    opciones: [
      "De calidad, de estabilidad y de renovación.",
      "De crecimiento, de calidad y de sostenibilidad.",
      "De calidad, de pensamiento y de sostenibilidad.",
      "De crecimiento, de estabilidad y de renovación."
    ],
    correcta: 3
  },
  {
    pregunta: "¿En qué consiste la estrategia corporativa de crecimiento?",
    opciones: [
      "Se da cuando la organización amplía el número de mercados a los que atiende o el número " +
      "de productos que ofrece ya sea mediante sus líneas de negocios actuales o poniendo en " +
      "marcha otras.",
      "Se da cuando la organización reduce el número de líneas de negocio pero aumenta " + 
      "el número de productos ofrecidos.",
      "Se da cuando la organización reduce el número de líneas de negocio pero disminuye " + 
      "el número de productos ofrecidos.",
      "Ninguna de las anteriores."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuáles son los conceptos que se utilizan para implementar las " + 
    "estrategias corporativas de crecimiento?",
    opciones: [
      "Racionalización y recuperación.",
      "Concentración, integración vertical, integración horizontal y diversificación.",
      "Calidad, diseño y sostenimiento.",
      "Ninguna de las anteriores."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué sucede cuando las empresas utilizan el concepto de concentración para crecer?",
    opciones: [
      "Se enfoca en su principal línea de negocios y aumenta la cantidad de productos que ofrece " +
      "o busca abarcar más mercados con ella.",
      "La empresa busca convertirse en su propio proveedor o distribuidor.",
      "Las compañías crecen combinándose con sus competidores.",
      "Combinación con otras industrias relacionadas o no relacionadas."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Qué sucede cuando las empresas utilizan el concepto de integración vertical para crecer?",
    opciones: [
      "Se enfoca en su principal línea de negocios y aumenta la cantidad de productos que ofrece " +
      "o busca abarcar más mercados con ella.",
      "La empresa busca convertirse en su propio proveedor o distribuidor.",
      "Las compañías crecen combinándose con sus competidores.",
      "Combinación con otras industrias relacionadas o no relacionadas."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué sucede cuando las empresas utilizan el concepto de integración horizontal para crecer?",
    opciones: [
      "Se enfoca en su principal línea de negocios y aumenta la cantidad de productos que ofrece " +
      "o busca abarcar más mercados con ella.",
      "La empresa busca convertirse en su propio proveedor o distribuidor.",
      "Las compañías crecen combinándose con sus competidores.",
      "Combinación con otras industrias relacionadas o no relacionadas."
    ],
    correcta: 2
  },
  {
    pregunta: "¿En qué consiste la estrategia corporativa de estabilidad?",
    opciones: [
      "Son estrategias empleadas para solucionar el debilitamiento del desempeño.",
      "Estrategia corporativa en la que la organización se apega a su actividad actual. La " +
      "organización no crece, pero tampoco se regaza.",
      "Ninguna de las anteriores."
    ],
    correcta: 1
  },
  {
    pregunta: "¿En qué consiste la estrategia corporativa de renovación? ",
    opciones: [
      "Estrategia corporativa en la que la organización se apega a su actividad actual. La " +
      "organización no crece, pero tampoco se regaza.",
      "Son estrategias empleadas para solucionar el debilitamiento del desempeño.",
      "Ninguna de las anteriores."
    ],
    correcta: 0
  }
];

const EstudioPrimerParcial = () => {

  const [iniciar, setIniciar] = useState(0);

  function iniciarEvaluacion() {
    setIniciar(1);
  }

  function finalizarEvaluacion() {
    setIniciar(0);
  }

  return (
    <>
      <Helmet>
        <title>Evaluación de estudio para primer parcial de Administración para ingenieros | Evaluaciones | Administración para ingenieros</title>
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="container text-center px-5 my-5">
          <h1 className={"text-center " + (iniciar == 1 ? "d-none" : "")}>Evaluación de estudio para primer parcial de Administración para ingenieros</h1>

          <p className={"text-center " + (iniciar == 1 ? "d-none" : "")}>
            En esta evaluación se contemplarán algunos conceptos
            de administración para ingenieros con base en las notas de clase. Esta
            evaluación está basada en el capítulo nueve del texto de Administración
            de Robbins y Coulter.
          </p>

          <button className={"text-center btn btn-dark " + (iniciar == 1 ? "d-none" : "")} onClick={iniciarEvaluacion}>Iniciar</button>

          {
            iniciar == 1 ?
              <Questions preguntas={preguntas} finalizarEvaluacion={finalizarEvaluacion} />
              :
              ""
          }
        </div>

        <Footer />
      </div>
    </>
  )
};

EstudioPrimerParcial.propTypes = {};

EstudioPrimerParcial.defaultProps = {};

export default EstudioPrimerParcial;
