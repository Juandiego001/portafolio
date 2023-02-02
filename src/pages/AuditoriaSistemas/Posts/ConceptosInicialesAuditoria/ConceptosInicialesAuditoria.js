import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ConceptosInicialesAuditoria.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const ConceptosInicialesAuditoria = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Conceptos iniciales de la auditoría de sistemas | Bases de datos 2</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="Conceptos o teoría inicial de la materia de auditoría de sistemas por Juan Diego Cobo Cabal."></meta>
        <meta name="keywords" content="
          conceptos iniciales auditoria,
          teoria inicial auditoria,
          conceptos iniciales auditoria de sistemas,
          teoria inicial auditoria de sistemas,
          conceptos iniciales auditoria sistemas,
          teoria inicial auditoria sistemas,
          conceptos iniciales auditoria de sistemas juan diego cobo cabal,
          conceptos iniciales auditoria sistemas juan diego cobo cabal,
          conceptos iniciales auditoria juan diego cobo cabal,
          teoria inicial auditoria de sistemas juan diego cobo cabal,
          teoria inicial auditoria sistemas juan diego cobo cabal,
          teoria inicial auditoria juan diego cobo cabal" />
      </Helmet>


      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Conceptos iniciales de la auditoría de sistemas
          </h1>

          <p>
            A continuación se explicarán los conceptos fundamentales de la auditoría de sistemas,
            las diferencias con los distintos tipos de auditorías, principios de la auditoría de
            sistemas y demás.
          </p>

          <h2 className="text-dark mt-5">
            Definición de auditoría
          </h2>

          <p>
            De acuerdo con el docente Miguel José Navas Jaime, la auditoría se puede definir como
            un proceso sistemático, independiente y documentado para obtener evidencias de auditoría
            y evaluarlas de manera objetiva con el fin de determinar la extensión en que se cumplen
            los criterios de auditoría.
          </p>

          <h2 className="mt-5">
            Evidencia y criterios de auditoría
          </h2>

          <p>
            Son registros, declaraciones de hechos o cualquier otra información que es pertinente
            para los <b>criterios de auditoría.</b> Los criterios de auditoría son un conjunto de
            políticas, procedimientos o requisitos usados como referencia frente a la cual
            se compara la evidencia de la auditoría.
          </p>

          <h2 className="mt-5">
            Auditoría de sistemas vs Auditoría informática
          </h2>

          <h3 className="mt-3">
            Auditoría informática
          </h3>

          <p>
            Es el proceso de recoger, agrupar y evaluar evidencias para determinar si un sistema
            de información salvaguarda el activo empresarial, mantiene la integridad de los datos,
            lleva a cabo eficazmente los fines de la organización y utiliza eficientemente los
            recursos.
          </p>

          <h3 className="mt-3">
            Auditoría de sistemas
          </h3>

          <p>
            Es el examen y evaluación de los procesos del área de sistemas y la utilización de los
            recursos que en ellos intervienen, para llegar a establecer el grado de eficiencia,
            efectividad y economía de los sistemas computarizados en una empresa y presentar
            conclusiones y recomendaciones encaminadas a corregir las deficiencias existentes
            y mejorarlas.
          </p>

          <p>
            Así pues, la diferencia radica en que la auditoría informática pretende analizar el
            sistema entorno a la integridad de la información, mientras que la auditoría de sistemas
            se centra en la eficiencia de los mismos.
          </p>

          <p>
            Ejemplo de las diferencias sustanciales entre un auditor de informática y un auditor
            de sistemas se pueden observar en los casos de
            {' '}<a href="https://cincodias.elpais.com/cincodias/2022/09/16/companias/1663328711_079738.html" rel="nofollow,noindex" target="_blank">Uber</a> y
            {' '}<a href="https://www.youtube.com/watch?v=po5d5Zdzwt0" rel="nofollow,noindex" target="_blank">Netflix.</a>{' '}
            Por un lado, Uber sufrió un ataque cibernético y sus datos se vieron comprometidos.
            En esta situación debe actuar un auditor informático. Mientras que en el
            caso de Netflix se encontró un bug al buscar mejorar la eficiencia en uno de sus microservicios.
          </p>

          <h2 className="mt-5">
            Actores y partes interesadas
          </h2>

          <p>
            Los actores de una auditoría vendrían siendo:
            {' '}<span className="badge text-dark m-0 p-0">el auditor</span>{' '}
            - el cual puede ser interno o externo - y
            {' '}<span className="badge text-dark m-0 p-0">el auditado</span>,
            organización o empresa que se debe auditar. Por otro lado, las partes
            interesadas son múltiples y generalmente corresponden a los grupos de
            interés de la organización tales como proveedores, clientes, etc.
          </p>

          <h2 className="mt-5">
            Tipos de auditoría
          </h2>

          <p>
            Los tipos de auditoría pueden variar en función de:
          </p>

          <ul>
            <li>Quién audita:
              {' '}<span className="badge text-dark m-0 p-0">auditorías internas</span> o
              {' '}<span className="badge text-dark m-0 p-0">auditorías externas.</span>
            </li>

            <li>Qué se audita:
              {' '}<span className="badge text-dark m-0 p-0">auditorías legales</span>,
              {' '}<span className="badge text-dark m-0 p-0">auditorías de procesos</span> o
              {' '}<span className="badge text-dark m-0 p-0">auditorías sistemas de gestión.</span>
            </li>

            <li>El alcance que se audita:
              {' '}<span className="badge text-dark m-0 p-0">auditoría parcial</span> o
              {' '}<span className="badge text-dark m-0 p-0">auditorías global.</span>
            </li>

            <li>Cuándo se audita:
              {' '}<span className="badge text-dark m-0 p-0">auditoría programada</span> o
              {' '}<span className="badge text-dark m-0 p-0">auditoría extraordinaria.</span>
            </li>
          </ul>

          <h2 className="mt-5">
            En función de quién audita
          </h2>

          <h4 className="mt-2">
            Auditorías internas
          </h4>

          <p>
            Se tratan de auditorías realizadas por miembros contratados o de la organización
            y son denominadas auditorias de primera parte.
          </p>

          <h4 className="mt-2">
            Auditorías externas
          </h4>

          <p>
            Conocidas como auditorías de segunda o tercera parte,
            auditorías de cliente a proveedor o auditorías de certificación,
            son aquellas auditorías realizadas por auditores externos a la organización.
            Se denominan de segunda parte cuando aquellos auditores externos
            son solicitados por grupos de interés de la organización y, por otro lado,
            son de tercera parte cuando son auditores independientes externos quienes
            radican una certificación.
          </p>

          <h2 className="mt-5">
            En función de qué se audita
          </h2>

          <h4 className="mt-2">
            Auditorías legales
          </h4>

          <p>
            Buscan detectar riesgos y oportunidades asociados a las áreas:
            {' '}<a href="https://www2.deloitte.com/content/dam/Deloitte/gt/Documents/legal/Newsletter/180905-Legal%20Newsletter-%20septiembre.pdf" target="_blank" rel="noindex,nofollow">(Deloitte, 2018)</a>:
          </p>

          <ul>
            <li>Corporativas.</li>
            <li>Laborales.</li>
            <li>Fiscales.</li>
            <li>De propiedad intelectual.</li>
            <li>Contractuales.</li>
          </ul>

          <h4 className="mt-2">
            Auditorías de procesos
          </h4>

          <p>
            Hace parte del conjunto de auditorías de calidad (productos,
            procesos y sistemas). De acuerdo con la plataforma de Escuela Europea
            de Excelencia: "La auditoría de procesos comprueba que los procesos de una
            organización alcanzan la conformidad con los requisitos de ISO 9001".
            {' '}<a href="https://www.escuelaeuropeaexcelencia.com/2021/06/tipos-de-auditoria-de-calidad-procesos-producto-y-sistema/" target="_blank" rel="nofollow,noindex">(Escuela Europea de Excelencia, 2021).</a>
          </p>

          <h5 className="mt-2">
            ¿Qué es la Norma ISO 9001?
          </h5>

          <p>
            Es la guía de directrices para la estandarización de calidad en los procesos
            de diferentes sistemas de gestión u organizaciones.
          </p>

          <h4 className="mt-2">
            Auditorías de sistemas de gestión
          </h4>

          <p>
            
          </p>

        </div>

        <Footer />
      </div>
    </>
  )
};

ConceptosInicialesAuditoria.propTypes = {};

ConceptosInicialesAuditoria.defaultProps = {};

export default ConceptosInicialesAuditoria;
