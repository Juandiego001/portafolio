import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PrimerParcial.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import Questions from '../../../../components/Questions/Questions';

const preguntas = [
  {
    pregunta: "El ideal por el cual se ejecutan las auditorías es:",
    opciones: [
      "Directivas de la gerencia en relación a procedimientos y reglas.",
      "Reportar y comunicar.",
      "Revisión de los controles de la organización.",
      "Evaluar adherencia a procedimientos, estándares y políticas."
    ],
    correcta: 2
  },
  {
    pregunta: "Dentro de la planificación de la auditoría, se destacan los siguientes objetivos:",
    opciones: [
      "Conclusiones y recomendaciones a emitir.",
      "Verificar el cumplimiento de las leyes aplicables.",
      "Conocer la estructura organizacional y preparar un plan de trabajo y estimado de tiempo.",
      "Ninguna de las anteriores."
    ],
    correcta: 2
  },
  {
    pregunta: "Si una auditoría se centra en la disponibilidad del SI (Sistema Informático), se está auditando:",
    opciones: [
      "La operatividad.",
      "La eficacia.",
      "La seguridad.",
      "Ninguna de las anteriores."
    ],
    correcta: 2
  },
  {
    pregunta: "El proceso mediante el cual se califica y evalúan los riesgos para determinar la capacidad de la entidad para su aceptación o tratamiento se conoce como:",
    opciones: [
      "Auditoría.",
      "Análisis de riesgos.",
      "Control.",
      "Mapa de riesgo."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuál es la diferencia entre vulnerabilidad y amenaza?",
    opciones: [
      "Amenazas son el resultado de la explotación de una vulnerabilidad.",
      "Amenazas son riesgos que se convierten en vulnerabilidades si llegasen a ocurrir.",
      "Amenazas son los caminos que pudieran causar pérdidas si se descubre la vulnerabilidad.",
      "Las vulnerabilidades generarán pérdidas si llegasen a ocurrir."
    ],
    correcta: 0
  },
  {
    pregunta: "En función de quién audita en una auditoria esta puede ser:",
    opciones: [
      "Auditoría pública y auditoría privada.",
      "Auditoría operativa y de soporte.",
      "Auditoría interna y auditoría externa.",
      "Ninguna de las anteriores."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Quién tiene la responsabilidad de definir el alcance de la auditoría?",
    opciones: [
      "Auditor.",
      "Cliente.",
      "Gerente de la auditoría.",
      "Auditado."
    ],
    correcta: 3
  },
  {
    pregunta: "Es función de la auditoria:",
    opciones: [
      "Escuchar los problemas de una empresa.",
      "Obtener y evaluar evidencia objetivamente.",
      "Calificar o descalificar las actuaciones de un grupo de personas.",
      "Ninguna de las anteriores."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál de las siguientes NO es una técnica a utilizar en la ejecución de una auditoría?",
    opciones: [
      "Entrevistas.",
      "Cuestionarios escritos.",
      "Muestreos.",
      "Simulaciones."
    ],
    correcta: 1
  },
  {
    pregunta: "La optimización del uso de los recursos de un SI (Sistema informático) afecta a la:",
    opciones: [
      "Operatividad.",
      "Eficacia.",
      "Seguridad.",
      "Rentabilidad."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Qué de lo siguiente NO debe hacer un auditor informático?",
    opciones: [
      "Recomendar.",
      "Diagnosticar en función a imposiciones.",
      "Ser objetivo.",
      "Ser competente en AI (Auditorías informáticas)."
    ],
    correcta: 1
  },
  {
    pregunta: "Según en función de qué se audita, la auditoría se clasifica como:",
    opciones: [
      "Auditoría interna y externa.",
      "Auditoría programada.",
      "Auditoría parcial o global.",
      "Auditoría legal, de un proceso o sistema de gestión."
    ],
    correcta: 3
  },
  {
    pregunta: "La entrevista en una auditoría informática debe:",
    opciones: [
      "Seguir un plan predeterminado.",
      "Basarse en un cuestionario específico.",
      "Tomar la forma de una conversación formal.",
      "Buscar una finalidad concreta."
    ],
    correcta: 3
  },
  {
    pregunta: "Dentro de las principales responsabilidades del auditor informático están:",
    opciones: [
      "Revisar e informar a la dirección de la organización sobre el diseño y funcionamiento de los controles implantados y sobre la"
      + " fiabilidad de la información suministrada.",
      "Diseñar e implementar los controles para evitar la materialización de riesgos.",
      "Implementar los cambios requeridos por el área de TI de la organización.",
      "Todas las anteriores."
    ],
    correcta: 0
  },
  {
    pregunta: "En auditoría de sistemas un tipo de prueba es la de cumplimiento la cual consiste en:",
    opciones: [
      "Determinar si los controles se ajustan a las políticas y procedimientos de la organización.",
      "Determinar si los controles se realizan de manera periódica.",
      "Determinar la relación existente entre los controles y riesgos identificados.",
      "Todas las anteriores."
    ],
    correcta: 0
  },
  {
    pregunta: "La auditoría realizada con recursos materiales y personas que pertenecen a la empresa auditada se denomina:",
    opciones: [
      "Auditoría pública.",
      "Auditoría externa.",
      "Auditoría interna.",
      "Auditoría de tercera parte."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál tipo de control intenta reparar el daño causado por el impacto de una vulnerabilidad explotada?",
    opciones: [
      "Preventivo.",
      "Detectivo.",
      "Correctivo.",
      "Desviación."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál de los siguientes NO es un objetivo de una AI (auditoría informática)?",
    opciones: [
      "El mantenimiento de la operatividad.",
      "La mejora de la eficacia.",
      "La mejora de la eficiencia.",
      "La mejora de la seguridad."
    ],
    correcta: 2
  },
  {
    pregunta: "La profesión recomendada para un auditor de sistemas/informático es:",
    opciones: [
      "Contador e ingeniero.",
      "Contador con especialización en auditoría.",
      "Ingeniero de sistemas/informático con especialización en finanzas o auditoría.",
      "Ingeniero con especialización en auditoría."
    ],
    correcta: 3
  },
  {
    pregunta: "Se define un procedimiento de auditoría como:",
    opciones: [
      "Las actividades de auditoría que deben desarrollarse para obtener evidencia.",
      "Conjunto de reglas que le permiten al auditor sacar conclusiones.",
      "Un manual de usuario final.",
      "Ninguna de las anteriores."
    ],
    correcta: 0
  }
];

const PrimerParcial = () => {

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
        <title>Primer parcial de Auditoría de Sistemas | Evaluaciones | Auditoría de Sistemas</title>
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="container text-center px-5 my-5">
          <h1 className={"text-center " + (iniciar == 1 ? "d-none" : "")}>Primer parcial de Auditoría de Sistemas</h1>

          <p className={"text-center " + (iniciar == 1 ? "d-none" : "")}>
            En esta evaluación se contemplarán las preguntas
            realizadas en el primer parcial de Auditoría de Sistemas
            en el periodo 2023-01 con el profesor Miguel Jose Navas Jaime.
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

PrimerParcial.propTypes = {};

PrimerParcial.defaultProps = {};

export default PrimerParcial;
