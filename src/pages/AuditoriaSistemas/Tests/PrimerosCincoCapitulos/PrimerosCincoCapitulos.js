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
      "La gestión de los programas de auditoría.",
      "El principio de integridad de los auditores."
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
