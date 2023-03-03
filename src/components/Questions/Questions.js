import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Questions.module.css';


const Questions = (props) => {
  const [lasPreguntas, setLasPreguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [pregunta, setPregunta] = useState({});
  const [respuestas, setRespuestas] = useState([]);

  const [indiceR, setIndiceR] = useState(-1);
  const [showResults, setShowResults] = useState(0);
  const [resultado, setResultado] = useState(0);

  let letrasOpciones = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  useEffect(() => {
    let allPreguntas = props["preguntas"];
    setLasPreguntas(allPreguntas);
    setPregunta(allPreguntas[0]);
    setRespuestas(new Array(allPreguntas.length));
  }, []);

  function seleccionarOpcion(e) {
    let allRespuestas = [...respuestas];
    if (allRespuestas[indice] == e) allRespuestas[indice] = undefined;
    else allRespuestas[indice] = e;
    setRespuestas(allRespuestas);
  }

  function siguientePregunta() {
    let cambioIndice = indice + 1;
    if (cambioIndice < lasPreguntas.length) {
      setIndice(cambioIndice);
      setPregunta(lasPreguntas[cambioIndice]);
    }
  }

  function anteriorPregunta() {
    let cambioIndice = indice - 1;
    if (cambioIndice >= 0) {
      setIndice(cambioIndice);
      setPregunta(lasPreguntas[cambioIndice]);
    }
  }

  function siguienteRevision() {
    let cambioIndice = indiceR + 1;
    if (cambioIndice < lasPreguntas.length) {
      setIndiceR(cambioIndice);
      setPregunta(lasPreguntas[cambioIndice]);
    }
  }

  function anteriorRevision() {
    let cambioIndice = indiceR - 1;
    if (cambioIndice >= 0) {
      setIndiceR(cambioIndice);
      setPregunta(lasPreguntas[cambioIndice]);
    }
  }

  function terminarEvaluacion() {
    let cantidadBuenas = 0;
    for (let i = 0; i < lasPreguntas.length; i++) {
      if (lasPreguntas[i]["correcta"] == respuestas[i]) cantidadBuenas++;
    }

    setResultado(cantidadBuenas);
    setPregunta(lasPreguntas[0]);
    setIndiceR(0);
  }

  function terminarRevision() {
    setShowResults(1);
  }

  function finalizarTodo() {
    props.finalizarEvaluacion();
  }

  return (
    <>

      <div className="px-5">
        <h3 className="text-center mb-5">{indiceR < 0 ? indice + 1 : indiceR + 1}. {pregunta["pregunta"]}</h3>
        {
          // Para evitar errores al cargar
          lasPreguntas.length > 0 ?
            indiceR < 0 ?
              pregunta["opciones"].map((i, e) => {
                return (
                  <button key={"btnRes" + indice + "" + i}
                    className={"btn btn-outline-dark mb-3 w-100 " + (respuestas[indice] == e ? "bg-dark text-light" : "")}
                    onClick={() => seleccionarOpcion(e)}>
                    {letrasOpciones[e]}. {i}
                  </button>
                )
              })
              :
              pregunta["opciones"].map((i, e) => {
                return (
                  <span key={"spanRev" + indice + "" + i}
                    className={"border rounded-2 p-2 d-block mb-3 w-100 " +
                      (respuestas[indiceR] == e && e != pregunta["correcta"] ? "bg-danger text-light"
                        :
                        respuestas[indiceR] == e && e == pregunta["correcta"] ? "bg-success text-light"
                          :
                          e == pregunta["correcta"] ? "bg-success text-light"
                            :
                            "border-dark")}>
                    {letrasOpciones[e]}. {i}
                  </span>
                )
              })
            :
            ""
        }

        {
          indiceR < 0 ?
            <div className="mt-4 text-center">
              <button className={"btn btn-dark mb-2 " + (indice == lasPreguntas.length - 1 ? "d-none" : "")} onClick={siguientePregunta}>Siguiente</button>
              <button className={"btn btn-dark mx-2 mb-2 " + (indice == 0 ? "d-none" : "")} onClick={anteriorPregunta}>Anterior</button>
              <button className={"btn btn-outline-dark mb-2 " + (indice == lasPreguntas.length - 1 ? "" : "d-none")} onClick={terminarEvaluacion}>Terminar evaluación</button>
            </div>
            :
            <div className="mt-4 text-center">
              <button className={"btn btn-dark mb-2 " + (indiceR == lasPreguntas.length - 1 ? "d-none" : "")} onClick={siguienteRevision}>Siguiente</button>
              <button className={"btn btn-dark mx-2 mb-2 " + (indiceR == 0 ? "d-none" : "")} onClick={anteriorRevision}>Anterior</button>
              <button className={"btn btn-outline-dark mb-2 " + (indiceR == lasPreguntas.length - 1 ? "" : "d-none")} onClick={terminarRevision}>Terminar revisión</button>
            </div>
        }


      </div>

      {/* Para mostrar los resultados */}
      <div 
        className={"position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100 " + styles.BgTransparent + " " + (showResults == 1 ? "d-block" : "d-none")}>
        <div className="rounded-5 p-5 shadow-lg bg-light text-center">
          <h6>Resultado</h6>
          <h2 className="mb-3">{resultado}/{lasPreguntas.length}</h2>
          <button className="btn btn-dark" onClick={finalizarTodo}>Finalizar</button>
        </div>
      </div>
    </>
  )
};

Questions.propTypes = {
  preguntas: PropTypes.array
};

Questions.defaultProps = {
  preguntas: []
};

export default Questions;
