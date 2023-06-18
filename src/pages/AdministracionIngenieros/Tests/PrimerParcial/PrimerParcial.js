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
    pregunta: "Corresponde a las tendencias que se presentan en las características  como la edad, " +
    "la raza, el género, el nivel educativo, la ubicación geográfica, el ingreso y la composición " +
    " familiar:",
    opciones: [
      "Demográfico.",
      "Económico.",
      "Legal.",
      "Tecnológico.",
      "Social."
    ],
    correcta: 0
  },
  {
    pregunta: "Es el componente que engloba factores como las tasas de interés, la inflación, los cambios " +
    " en el ingreso, las fluctuaciones del mercado bursátil:",
    opciones: [
      "Legal.",
      "Demográfico.",
      "Tecnológico.",
      "Económico.",
      "Social."
    ],
    correcta: 3
  },
  {
    pregunta: "Variables que tienen relación con las leyes federales, estatales y locales de cada país, " +
    "así como con las legislaciones globales:",
    opciones: [
      "Legal.",
      "Tecnológico.",
      "Demográfico.",
      "Social.",
      "Económico."
    ],
    correcta: 0
  },
  {
    pregunta: "Variables que se centran en las en las innovaciones científicas o industriales:",
    opciones: [
      "Demográfico.",
      "Legal.",
      "Social.",
      "Económico.",
      "Tecnológico."
    ],
    correcta: 4
  },
  {
    pregunta: "Comprende variables  culturales, como los valores, las actitudes, las tendencias, " + 
    "las tradiciones, los estilos de vida, las creencias, los gustos y los patrones de comportamiento:",
    opciones: [
      "Demográfico.",
      "Social.",
      "Legal.",
      "Tecnológico.",
      "Económico."
    ],
    correcta: 1
  },
  {
    pregunta: "Hoy en la industria de los restaurantes, la situación económica ha afectado a muchos " +
    "de ellos, y en general, ha provocado una descapitalización, disminución tanto de los clientes " +
    "como de la rentabilidad. En este caso, para mejorar esta situación, muchos restaurantes se han " +
    "visto obligados a bajar los precios o lanzar nuevas ofertas impensables años atrás. A " +
    "continuación se plantean acciones claves para ser eficientes en la gestión de restaurantes, y " +
    "aunque  no se pueda asegurar el éxito, en muchos casos, pueden ayudar a mantener la actividad " +
    "del negocio. De las siguientes opciones, ¿cuál es la menos recomendada para hacer mejor uso de " +
    "los recursos que se disponen?",
    opciones: [
      "Calcular los costos de todos los alimentos y bebidas, para calcular a partir de éstos los " +
      "precios finales.",
      "Pagar de estricto contado.",
      "Gestionar las compras aplicando la filosofía just in time.",
      "Negociar con los proveedores precio y tiempo de abastecimiento.",
    ],
    correcta: 1
  },
  {
    pregunta: "Cuando la empresa busca satisfacer altos estándares de calidad y servicio mediante una " +
    "revisión consistente en cada uno de sus puntos de venta y poniendo en práctica un estricto " +
    "proceso de medición. Se está basando en:",
    opciones: [
      "La organización sin fronteras.",
      "Liderazgo en términos de marketing.",
      "La excelencia operativa.",
      "Plan de talento humano."
    ],
    correcta: 2
  },
  {
    pregunta: "Los gerentes deben escanear el entorno de la organización para detectar tendencias " +
    "emergentes entre los competidores y poder anticiparse a las acciones de estos antes que solo " +
    "reaccionar a ellas. Este escaneo se conoce como inteligencia competitiva, la cual consiste en " +
    "recopilar información precisa, confiable, y validada acerca de los competidores para actuar " + 
    "proactivamente. ¿Cuál de las siguientes medios de información es el más efectivo para recopilar " +
    "información precisa y validada de la competencia y poder aplicar la inteligencia competitiva?",
    opciones: [
      "Comunicados de prensa y estudios sobre la industria.",
      "Materiales promocionales, publicidad, Wikipedia, e información en internet.",
      "Investigaciónes  publicadas en  base de datos en la Internet o impresa sobre las tendencias " +
      "de la competencia y el entorno.",
      "Informes anuales."
    ],
    correcta: 2
  },
  {
    pregunta: "Hoy el mercado POS-COIVD19, ha generado un entorno muy complejo donde las empresas " +
    "deben identificar diferentes acciones estratégicas para sostenerse. De las siguientes " +
    "acciones, ¿Cuál es la más recomendable para realizar una estrategia de integración hacia atrás?",
    opciones: [
      "Cuando los proveedores actuales de una empresa no son costosos, confiables y capaces " +
      "de satisfacer las necesidades de materias primas para la empresa.",

      "Cuando una empresa cuenta con capital y recursos humanos para dirigir la nueva empresa " +
      "distribuidora de sus propias materias primas.",

      "Cuando las provisiones actuales obtienen márgenes de rendimiento elevados; lo que sugiere " +
      "que la empresa proveedora de productos o servicios en esa industria representa una " +
      "operación valiosa.",

      "Cuando una empresa adquiere características de monopolio en una área o región específica " +
      "sin que la súper intendencia del gobierno cuestione su “tendencia importante” a reducir " +
      "la competencia."
    ],
    correcta: 2
  },
  {
    pregunta: "A nivel de administración de empresas, los cambios en el entorno, la necesidad de " +
    "establecer estándares para facilitar el control, ofrecer un rumbo, reducir el impacto del " +
    "cambio, y minimizar el desperdicio y la redundancia, son razones para realizar principalmente la " + 
    "función de: ",
    opciones: [
      "Control.",
      "Organización.",
      "Dirección.",
      "Planeación."
    ],
    correcta: 3
  },
  {
    pregunta: "En la labor administrativa o gerencial siempre se deben tomar ciertas decisiones que " + 
    "se van asociadas a las funciones o a un proceso administrativo. De acuerdo a esto, cuando el " +
    "gerente piensa qué tanta autonomía debe otorgarse a los empleados y  si las tareas deben " +
    "ser ejecutadas por individuos o equipos, está analizando una decisión que afecta al proceso de:",
    opciones: [
      "Planeación.",
      "Organización.",
      "Dirección.",
      "Control."
    ],
    correcta: 1
  },
  {
    pregunta: "Un objetivo único es capaz de definir apropiadamente el éxito de una organización.",
    opciones: [
      "Verdadero.",
      "Falso."
    ],
    correcta: 1
  },
  {
    pregunta: "De acuerdo a la introducción del capítulo 2, en cuanto al caso del Hotel Monbay,  " +
    "se pude decir que este tiene una cultura:",
    opciones: [
      "Inversa.",
      "Fuerte.",
      "Débil.",
      "Plana."
    ],
    correcta: 1
  },
  {
    pregunta: "El gerente es quien se encarga de dirigir el trabajo de los subordinados e intentar que " +
    "los objetivos de la compañía se cumplan. Normalmente también se le denomina jefe y es al que " +
    "todo el mundo acude cuando se necesita dirección o apoyo para alguna determinada labor. En esta " +
    "caso, la función de autoridad que desempeña el gerente es:",
    opciones: [
      "Línea.",
      "Activo.",
      "Enganche.",
      "Staff."
    ],
    correcta: 0
  },
  {
    pregunta: "Cuando en una investigación usted considera las variables como la edad, la raza, " + 
    "el género, el nivel educativo, la ubicación geográfica, el " +
    "ingreso y la composición familiar, estas hacen parte del entorno:",
    opciones: [
      "Demográfico.",
      "Social.",
      "Ambiental.",
      "Político."
    ],
    correcta: 0
  },
  {
    pregunta: "Señale la mejor combinación. La rivalidad en el mercado aumenta también, cuando los " +
    "consumidores cambian de marca con facilidad, cuando las barreras para salir al mercado son _____, " +
    "cuando los costos fijos son _______, cuando el producto es perecedero, cuando las empresas rivales " +
    "tienen diversas estrategias, orígenes y cultura, así como  cuando las fusiones y adquisiciones son " +
    "comunes en la industria.",
    opciones: [
      "Bajas y elevados.",
      "Bajas y reducidos.",
      "Altas y elevados.",
      "Altas y reducidos."
    ],
    correcta: 3
  },
  {
    pregunta: "Usted como dueño de un restaurante compra unas pechugas, las cuales se reciben crudas " +
    "y estuvieron congeladas, lo que las lleva a retener hasta 40% solo de agua. O sea que por cada 10 kg " +
    "de producto que compró, ha adquirido 4 litros de agua. En este caso, para usted y el manejo del " +
    "negocio, se le está presentando un problema de:",
    opciones: [
      "Vigilancia.",
      "Eficacia.",
      "Eficiencia.",
      "Efectividad."
    ],
    correcta: 2
  },
  {
    pregunta: "Señale la mejor combinación. En una industria, los productores de acetaminofén compiten " +
    "con otros productores de medicamentos contra el dolor de cabeza y los dolores en general. Las " +
    "presiones competitivas que surgen de los productos sustitutos disminuye conforme el precio " +
    "relativo de estos productos __________ y conforme el costo de cambio de los clientes se " +
    "________. De acuerdo a lo anterior escoja la combinación correcta",
    opciones: [
      "Sube y reduce.",
      "Sube y aumenta.",
      "Baja y reduce.",
      "Baja y aumenta."
    ],
    correcta: 1
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
        <title>Primer parcial de Administración para ingenieros | Evaluaciones | Administración para ingenieros</title>
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="container text-center px-5 my-5">
          <h1 className={"text-center " + (iniciar == 1 ? "d-none" : "")}>Primer parcial de Administración para ingenieros</h1>

          <p className={"text-center " + (iniciar == 1 ? "d-none" : "")}>
            En esta evaluación se contemplarán las preguntas
            realizadas en el primer parcial de Administración para ingenieros
            en el periodo 2023-01 con el profesor Juan Carlos Aguilar.
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
