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
  }
  // Quedamos en la 15
];

const PrimerParcial = () => (
  <div className={styles.PrimerParcial}>
    PrimerParcial Component
  </div>
);

PrimerParcial.propTypes = {};

PrimerParcial.defaultProps = {};

export default PrimerParcial;
