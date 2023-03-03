import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PrimerosCincoCapitulos.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import Questions from '../../../../components/Questions/Questions';

const preguntas = [
  {
    pregunta: "¿Qué es la ISO?",
    opciones: [
      "Es la coordinación global de enrutamiento de DNS, direccionamiento IP y otros protocolos de internet.",
      "Es una organización científica y profesional representante de la psicología en los estados unidos.",
      "Organización privada sin ánimo de lucro con amplia cobertura internacional.",
      "Es una federación mundial de organismos nacionales de normalización (organismos miembros de ISO)."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Cuál es el cambio principal que tuvo la 3era edición en comparación con la segunda?",
    opciones: [
      "Adición del enfoque basado en riesgos a los principios de auditoría.",
      "Adición del enfoque basado en evidencias a los principios de auditoría.",
      "Eliminación de algunos conceptos de auditoría.",
      "Adición de anexo de requisitos de competencias específicas para auditar disciplinas específicas."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Con relación a qué debe realizarse una auditoría?",
    opciones: [
      "La auditoría debe realizarse con relación a una serie de criterios, de manera separada o combinada.",
      "Los requisitos definidos en uno o más sistemas de gestión.",
      "Las políticas y los requisitos definidos por las partes interesadas pertinentes.",
      "Los requisitos legales y reglamentarios."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuáles son los tipos de auditorías de primera parte?",
    opciones: [
      "Auditorías externas (de proveedores u otras partes interesadas).",
      "Auditorías internas.",
      "Auditorías de certificación/acreditación.",
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuáles son los tipos de auditorías de segunda parte?",
    opciones: [
      "Auditorías internas.",
      "Auditorías de certificación/acreditación.",
      "Auditorías externas (de proveedores u otras partes interesadas).",
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuáles son los tipos de auditorías de tercera parte?",
    opciones: [
      "Auditorías internas.",
      "Auditorías de certificación/acreditación.",
      "Auditorías externas (de proveedores u otras partes interesadas).",
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué es una auditoría?",
    opciones: [
      "Datos que respaldan la existencia o veracidad de algo.",
      "Es un proceso sistemático, independiente y documentado utilizado para obtener evidencias " +
      "y evaluarlas de manera objetiva con el fin de determinar los grados en que se cumplen los " +
      "criterios de auditoría.",
      "Conjunto de requisitos usados como referencia frente a la cual se compara la evidencia objetiva.",
      "Registros, declaraciones de hechos o cualquier otra información que es pertinente para los criterios "+
      "de auditoría y que es verificable. "
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué es una auditoría combinada?",
    opciones: [
      "Datos que respaldan la existencia o veracidad de algo.",
      "Es un proceso sistemático, independiente y documentado utilizado para obtener evidencias " +
      "y evaluarlas de manera objetiva con el fin de determinar los grados en que se cumplen los " +
      "criterios de auditoría.",
      "Conjunto de requisitos usados como referencia frente a la cual se compara la evidencia objetiva.",
      "Auditoría llevada a cabo conjuntamente a un único auditado en dos o más sistemas de gestión."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Qué es una auditoría conjunta?",
    opciones: [
      "Llevada a cabo a un único auditado con dos o más organizaciones auditoras.",
      "Es un proceso sistemático, independiente y documentado utilizado para obtener evidencias " +
      "y evaluarlas de manera objetiva con el fin de determinar los grados en que se cumplen los " +
      "criterios de auditoría.",
      "Conjunto de requisitos usados como referencia frente a la cual se compara la evidencia objetiva.",
      "Auditoría llevada a cabo conjuntamente a un único auditado en dos o más sistemas de gestión."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué es un programa de auditorías?",
    opciones: [
      "Llevada a cabo a un único auditado con dos o más organizaciones auditoras.",
      "Acuerdos para un conjunto de una o más auditorías planificadas para un periodo de tiempo determinado " +
       "y dirigidas hacia un propósito en específico.",
      "Conjunto de requisitos usados como referencia frente a la cual se compara la evidencia objetiva.",
      "Auditoría llevada a cabo conjuntamente a un único auditado en dos o más sistemas de gestión."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué es el alcance de la auditoría?",
    opciones: [
      "Llevada a cabo a un único auditado con dos o más organizaciones auditoras.",
      "Acuerdos para un conjunto de una o más auditorías planificadas para un periodo de tiempo determinado " +
       "y dirigidas hacia un propósito en específico.",
      "Extensión y límites de una auditoría.",
      "Auditoría llevada a cabo conjuntamente a un único auditado en dos o más sistemas de gestión."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué es el plan de auditoría?",
    opciones: [
      "Es la descripción de actividades y de los detalles acordados de una auditoría.",
      "Acuerdos para un conjunto de una o más auditorías planificadas para un periodo de tiempo determinado " +
       "y dirigidas hacia un propósito en específico.",
      "Extensión y límites de una auditoría.",
      "Auditoría llevada a cabo conjuntamente a un único auditado en dos o más sistemas de gestión."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué son los criterios de auditoría?",
    opciones: [
      "Es la descripción de actividades y de los detalles acordados de una auditoría.",
      "Acuerdos para un conjunto de una o más auditorías planificadas para un periodo de tiempo determinado " +
      "y dirigidas hacia un propósito en específico.",
      "Conjunto de requisitos usados como referencia frente a la cual se compara la evidencia objetiva.",
      "Auditoría llevada a cabo conjuntamente a un único auditado en dos o más sistemas de gestión."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué es la evidencia objetiva?",
    opciones: [
      "Es la descripción de actividades y de los detalles acordados de una auditoría.",
      "Registros, declaraciones de hechos o cualquier otra información que es pertinente para los criterios " +
      "de auditoría y que es verificable.",
      "Conjunto de requisitos usados como referencia frente a la cual se compara la evidencia objetiva.",
      "Datos que respaldan la existencia o veracidad de algo."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Qué es la evidencia de auditoría?",
    opciones: [
      "Es la descripción de actividades y de los detalles acordados de una auditoría.",
      "Registros, declaraciones de hechos o cualquier otra información que es pertinente para los criterios " +
      "de auditoría y que es verificable.",
      "Conjunto de requisitos usados como referencia frente a la cual se compara la evidencia objetiva.",
      "Datos que respaldan la existencia o veracidad de algo."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué son los hallazgos de la auditoría?",
    opciones: [
      "Es la descripción de actividades y de los detalles acordados de una auditoría.",
      "Registros, declaraciones de hechos o cualquier otra información que es pertinente para los criterios " +
      "de auditoría y que es verificable.",
      "Resultados de la evaluación de la evidencia de la auditoría recopilada frente a los criterios " +
      "de auditoría.",
      "Resultado de una auditoría tras considerar todos los objetivos de la auditoría y todos los hallazgos " +
      "de la auditoría."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué son las conclusiones de auditoría?",
    opciones: [
      "Es la descripción de actividades y de los detalles acordados de una auditoría.",
      "Registros, declaraciones de hechos o cualquier otra información que es pertinente para los criterios " +
      "de auditoría y que es verificable.",
      "Resultados de la evaluación de la evidencia de la auditoría recopilada frente a los criterios " +
      "de auditoría.",
      "Resultado de una auditoría tras considerar todos los objetivos de la auditoría y todos los hallazgos " +
      "de la auditoría."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Quién es el cliente de una auditoría?",
    opciones: [
      "Organización que es auditada en su totalidad o partes.",
      "Registros, declaraciones de hechos o cualquier otra información que es pertinente para los criterios " +
      "de auditoría y que es verificable.",
      "Organización o persona que solicita una auditoría.",
      "Resultado de una auditoría tras considerar todos los objetivos de la auditoría y todos los hallazgos " +
      "de la auditoría."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Quién es el auditado de una auditoría?",
    opciones: [
      "Organización que es auditada en su totalidad o partes.",
      "Registros, declaraciones de hechos o cualquier otra información que es pertinente para los criterios " +
      "de auditoría y que es verificable.",
      "Organización o persona que solicita una auditoría.",
      "Resultado de una auditoría tras considerar todos los objetivos de la auditoría y todos los hallazgos " +
      "de la auditoría."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué es un equipo auditor?",
    opciones: [
      "Persona que lleva a cabo una auditoría.",
      "Es la persona que aporta conocimientos o experiencia específicos al equipo auditor.",
      "Es una persona que acompaña al equipo auditor, pero no actúa como auditor.",
      "Una o más personas que llevan a cabo una auditoría con el apoyo, si es necesario, de expertos técnicos."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Quién es el auditor?",
    opciones: [
      "Persona que lleva a cabo una auditoría.",
      "Es la persona que aporta conocimientos o experiencia específicos al equipo auditor.",
      "Es una persona que acompaña al equipo auditor, pero no actúa como auditor.",
      "Una o más personas que llevan a cabo una auditoría con el apoyo, si es necesario, de expertos técnicos."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Quién es el experto técnico en una auditoría?",
    opciones: [
      "Persona que lleva a cabo una auditoría.",
      "Es la persona que aporta conocimientos o experiencia específicos al equipo auditor.",
      "Es una persona que acompaña al equipo auditor, pero no actúa como auditor.",
      "Una o más personas que llevan a cabo una auditoría con el apoyo, si es necesario, de expertos técnicos."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué es un observador?",
    opciones: [
      "Persona que lleva a cabo una auditoría.",
      "Es la persona que aporta conocimientos o experiencia específicos al equipo auditor.",
      "Es una persona que acompaña al equipo auditor, pero no actúa como auditor.",
      "Una o más personas que llevan a cabo una auditoría con el apoyo, si es necesario, de expertos técnicos."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué es un sistema de gestión?",
    opciones: [
      "Conjunto de elementos de una organización interrelacionados o que interactúan para establecer políticas, " +
      "objetivos y procesos para lograr estos objetivos.",
      "Efecto de la incertidumbre.",
      "Cumplimiento e incumplimiento de un requisito.",
      "Capacidad para aplicar conocimientos y habilidades con el fin de generar los resultados previstos."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué es un riesgo en una auditoría?",
    opciones: [
      "Conjunto de elementos de una organización interrelacionados o que interactúan para establecer políticas, " +
      "objetivos y procesos para lograr estos objetivos.",
      "Efecto de la incertidumbre.",
      "Cumplimiento e incumplimiento de un requisito.",
      "Capacidad para aplicar conocimientos y habilidades con el fin de generar los resultados previstos."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué es conformidad y no conformidad en una auditoría?",
    opciones: [
      "Conjunto de elementos de una organización interrelacionados o que interactúan para establecer políticas, " +
      "objetivos y procesos para lograr estos objetivos.",
      "Cumplimiento e incumplimiento de un requisito.",
      "Efecto de la incertidumbre.",
      "Capacidad para aplicar conocimientos y habilidades con el fin de generar los resultados previstos."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué es una competencia en auditoría?",
    opciones: [
      "Conjunto de elementos de una organización interrelacionados o que interactúan para establecer políticas, " +
      "objetivos y procesos para lograr estos objetivos.",
      "Cumplimiento e incumplimiento de un requisito.",
      "Efecto de la incertidumbre.",
      "Capacidad para aplicar conocimientos y habilidades con el fin de generar los resultados previstos."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Qué es un requisito en auditoría?",
    opciones: [
      "Conjunto de elementos de una organización interrelacionados o que interactúan para establecer políticas, " +
      "objetivos y procesos para lograr estos objetivos.",
      "Necesidad o expectativa establecida, generalmente implícita u obligatoria.",
      "Efecto de la incertidumbre.",
      "Ninguna de las anteriores."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuántos principios caracterizan la realización de una auditoría?",
    opciones: [
      "6",
      "5.",
      "8.",
      "7."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Qué establece el principio de integridad?",
    opciones: [
      "La aplicación de diligencia y juicio al auditar.",
      "La obligación de informar con exactitud y veracidad.",
      "El fundamento de la profesionalidad.",
      "Seguridad de la información."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué establece el principio de presentación imparcial?",
    opciones: [
      "La aplicación de diligencia y juicio al auditar.",
      "La obligación de informar con exactitud y veracidad.",
      "El fundamento de la profesionalidad.",
      "Seguridad de la información."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué establece el principio de debido cuidado profesional?",
    opciones: [
      "La aplicación de diligencia y juicio al auditar.",
      "La obligación de informar con exactitud y veracidad.",
      "El fundamento de la profesionalidad.",
      "Seguridad de la información."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué establece el principio de confidencialidad?",
    opciones: [
      "La aplicación de diligencia y juicio al auditar.",
      "La obligación de informar con exactitud y veracidad.",
      "El fundamento de la profesionalidad.",
      "Seguridad de la información."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Qué establece el principio de independencia?",
    opciones: [
      "La base para la imparcialidad de la auditoría y la objetividad de las conclusiones de la auditoría.",
      "El método racional para alcanzar las conclusiones de la auditoría fiables y reproducibles en un proceso " +
      "de auditoría sistemático.",
      "Un enfoque de la auditoría que considera los riesgos y las oportunidades.",
      "Ninguna de las anteriores."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué establece el enfoque basado en la evidencia?",
    opciones: [
      "La base para la imparcialidad de la auditoría y la objetividad de las conclusiones de la auditoría.",
      "El método racional para alcanzar las conclusiones de la auditoría fiables y reproducibles en un proceso " +
      "de auditoría sistemático.",
      "Un enfoque de la auditoría que considera los riesgos y las oportunidades.",
      "Ninguna de las anteriores."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué establece el enfoque basado en riesgos?",
    opciones: [
      "La base para la imparcialidad de la auditoría y la objetividad de las conclusiones de la auditoría.",
      "El método racional para alcanzar las conclusiones de la auditoría fiables y reproducibles en un proceso " +
      "de auditoría sistemático.",
      "Un enfoque de la auditoría que considera los riesgos y las oportunidades.",
      "Ninguna de las anteriores."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué debería tener en cuenta los programas de auditoría de los auditados?",
    opciones: [
      "Los objetivos organizacionales.",
      "Todas las anteriores.",
      "Las cuestiones externas e internas pertinentes.",
      "Las necesidades y expectativas de los auditados.",
      "Los requisitos de seguridad y confidencialidad."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué debería contener los programas de auditoría?",
    opciones: [
      "Objetivos para el programa de auditoría." ,
      "Riesgos y oportunidades asociados con el programa de auditoría y las acciones para abordarlos.",
      "Alcance (extensión, límites, ubicaciones) de cada auditoría dentro del programa de auditoría.",
      "Todas las anteriores."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Qué pasos comprende el flujo de procesos para la gestión de un programa de auditoría?",
    opciones: [
      "Planear -> Analizar -> Verificar -> Actuar." ,
      "Planear -> Hacer -> Verificar -> Actuar.",
      "Reconocimiento -> Explotación -> Ganar acceso -> Mantener acceso -> Borrar huellas.",
      "Ninguna de las anteriores."
    ],
    correcta: 1
  },
  {
    pregunta: "En cuanto a riesgos y desempeño, ¿a qué sistemas debería dar prioridad la auditoría?",
    opciones: [
      "Sistemas de gestión con riesgos inherentes altos y niveles de desempeño bajos." ,
      "Sistemas de gestión con riesgos inherentes bajos y niveles de desempeño altos.",
      "Sistemas de gestión con riesgos inherentes altos y niveles de desempeño altos.",
      "Sistemas de gestión con riesgos inherentes bajos y niveles de desempeño bajos."
    ],
    correcta: 0
  }
];

const PrimerosCincoCapitulos = () => {

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
        <title>Primeros cinco capítulos de la norma ISO 19011 | Evaluaciones</title>
      </Helmet>

      <div>
        <Header />

        <div className="text-center px-3 my-5">
          <h1 className={"text-center " + (iniciar == 1 ? "d-none" : "")}>Primeros cinco capítulos de la norma ISO 19011</h1>

          <p className={"text-center " + (iniciar == 1 ? "d-none" : "")}>
            En esta evaluación se contemplarán los primeros cinco capítulos de
            la norma ISO 19011 del 2018.
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

PrimerosCincoCapitulos.propTypes = {};

PrimerosCincoCapitulos.defaultProps = {};

export default PrimerosCincoCapitulos;
