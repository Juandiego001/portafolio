import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ConceptosInicialesAuditoria.module.css';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import Footer from '../../../../components/Footer/Footer';

const ConceptosInicialesAuditoria = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Conceptos iniciales de la auditoría de sistemas | Auditoría de sistemas</title>
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


      <div className="all-pages">
        <Header />

        <div className="the-page">
          <Menu />

          <div className="container my-5 px-5">
            <h1 className="h1 text-dark text-center">
              Conceptos iniciales de la auditoría de sistemas
            </h1>

            <p className="mt-3">
              A continuación, se explicarán los conceptos fundamentales de la auditoría de sistemas,
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
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">el auditor</span>{' '}
              - el cual puede ser interno o externo - y
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">el auditado</span>,
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
                {' '}<span className="badge text-dark m-0 p-0 text-wrap">auditorías internas</span> o
                {' '}<span className="badge text-dark m-0 p-0 text-wrap">auditorías externas.</span>
              </li>

              <li>Qué se audita:
                {' '}<span className="badge text-dark m-0 p-0 text-wrap">auditorías legales</span>,
                {' '}<span className="badge text-dark m-0 p-0 text-wrap">auditorías de procesos</span> o
                {' '}<span className="badge text-dark m-0 p-0 text-wrap">auditorías sistemas de gestión.</span>
              </li>

              <li>El alcance que se audita:
                {' '}<span className="badge text-dark m-0 p-0 text-wrap">auditoría parcial</span> o
                {' '}<span className="badge text-dark m-0 p-0 text-wrap">auditorías global.</span>
              </li>

              <li>Cuándo se audita:
                {' '}<span className="badge text-dark m-0 p-0 text-wrap">auditoría programada</span> o
                {' '}<span className="badge text-dark m-0 p-0 text-wrap">auditoría extraordinaria.</span>
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
              De acuerdo con la Organización Internacional para la estandarización
              {' '}<a href="" target="_blank" rel="nofollow,noindex">(2017)</a>:
              "Una auditoría a sistemas de gestión se define como un
              proceso sistemático, independiente y documentado para obtener evidencias y
              evaluarlas de manera objetiva con el fin de determinar el grado en que se
              cumplen los criterios de auditoría de acuerdo con la norma ISO 9000 del 2015".
            </p>

            <h2 className="mt-5">
              En función del alcance que se audita
            </h2>

            <h4 className="mt-2">
              Auditorías parciales
            </h4>

            <p>
              Son auditorías en las que se evalúan solamente algunas partes de la empresa
              o algunos procesos.
            </p>

            <h4 className="mt-2">
              Auditorías globales
            </h4>

            <p>
              Son aquellas en las que se evalúan todo el sistema de gestión o de la totalidad
              de la empresa.
            </p>

            <h2 className="mt-5">
              En función de cuándo se audita
            </h2>

            <h4 className="mt-2">
              Auditorías programadas
            </h4>

            <p>
              Son aquellas auditorías que responden a una fecha o actividad planificada.
            </p>

            <h4 className="mt-2">
              Auditorías extraordinarias
            </h4>

            <p>
              Son aquellas que se desarrollan cuando se estimen convenientes o en cualquier momento.
            </p>

            <h2 className="mt-5">
              Principios de auditoría
            </h2>

            <p>
              De acuerdo con el docente Miguel Navas, la auditoría se caracteriza por depender
              de varios principios. Estos principios deberían ayudar a hacer de la auditoría
              una herramienta eficaz y fiable en apoyo de las políticas y controles de gestión,
              proporcionando información sobre la cual una organización puede actuar para mejorar
              su desempeño. Así pues, encontramos siete como los principios de la auditoría, los
              cuales son:
            </p>

            <ol>
              <li>Integridad.</li>
              <li>Presentación imparcial.</li>
              <li>Debido cuidado profesional.</li>
              <li>Confidencialidad.</li>
              <li>Independencia.</li>
              <li>Enfoque basado en la evidencia.</li>
              <li>Enfoque basado en el riesgo.</li>
            </ol>

            <p>
              La integridad, presentación imparcial, debido cuidado profesional y confidencialidad
              aluden a la
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">objetividad</span>{' '} e
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">imparcialidad</span>{' '} del auditor.
              Mientras que la independencia y los enfoques basados en evidencias y
              riesgos corresponden a la objetividad e imparcialidad de la auditoría.
            </p>

            <h4 className="mt-2">
              Integridad
            </h4>

            <p>
              Desempeñar su trabajo con honestidad, diligencia y responsabilidad (demostrar competencia).
            </p>

            <h4 className="mt-2">
              Presentación imparcial
            </h4>

            <p>
              La comunicación debe ser verdadera, precisa, objetiva, oportuna, clara y completa.
            </p>

            <h4 className="mt-2">
              Debido cuidado profesional
            </h4>

            <p>
              Un factor importante al realizar su trabajo con el debido cuidado profesional
              es tener la habilidad para hacer juicios razonables en todas las situaciones
              de la auditoría.
            </p>

            <h4 className="mt-2">
              Confidencialidad
            </h4>

            <p>
              El auditor debe tener discreción en el uso y protección de la información
              a la que tenga acceso en las auditorías.
            </p>

            <h4 className="mt-2">
              Independencia
            </h4>

            <p>
              Basada en la imparcialidad de la auditoría y la objetividad de las conclusiones
              de la auditoría.
            </p>

            <h4 className="mt-2">
              Enfoque basado en evidencia
            </h4>

            <p>
              Método para alcanzar la confianza en las conclusiones fiables y reproducibles (verificable).
            </p>

            <h4 className="mt-2">
              Enfoque basado en riesgos
            </h4>

            <p>
              Identificación de los efectos de las incertidumbres empresariales y a la determinación
              de los riesgos como base para la planificación
              {' '}<a href="https://www.dqsglobal.com/es-cl/blog/el-enfoque-basado-en-riesgos-en-iso-9001#:~:text=El%20enfoque%20basado%20en%20riesgos%20de%20la%20norma%20ISO%209001,calidad%20no%20es%20totalmente%20nuevo." target="_blank" rel="nofollow,noindex">(Dqsglobal, 2022).</a>
            </p>

            <h2 className="mt-5">
              Competencias
            </h2>

            <p>
              Es la habilidad para aplicar los conocimientos y habilidades para alcanzar
              los resultados pretendidos. En las auditorías, las principales competencias
              comprenden:
            </p>

            <ul>
              <li>Conocimientos y habilidades específicos de calidad (SGC).</li>
              <li>Conocimientos y habilidades específicos de seguridad de la información (SGSI).</li>
              <li>Conocimientos y habilidades específicos de medio ambiente (SGA).</li>
            </ul>

            <p>
              Las competencias abarcan educación, experiencia profesional, formación
              como auditor, habilidad en auditorías y aptitud para aplicar los
              conocimientos que permitan alcanzar la objetividad e imparcialidad
              establecidas en los principios de las
              auditorías.
            </p>

            <h2 className="mt-5">
              Conocimiento específico
            </h2>

            <p>
              El docente Miguel Navas establece que, para los auditores de sistemas o informáticos,
              deben existir algunos conocimientos específicos tales como:
            </p>

            <ul>
              <li>
                Gestión de seguridad. Terminología, metodología, riesgo de SI, medición,
                eficacia.
              </li>

              <li>
                Legislación específica. Propiedad intelectual, protección de registros, datos
                personales, comercio electrónico, intercepción de comunicaciones, vigilancia
                en el lugar de trabajo, etc.
              </li>

              <li>
                Técnicas de seguridad. Control de acceso, vulnerabilidad técnica, seguridad de redes,
                continuidad, seguridad física, etc.
              </li>

              <li>
                Tendencias de actualidad. Amenazas, vulnerabilidades, controles, requisitos.
              </li>

              <li>
                Conocimientos en tecnologías de la información (TICs).
              </li>
            </ul>

            <h2 className="h2 text-dark mt-5">
              Finalización
            </h2>

            <p>
              Esta ha sido una introducción a los conceptos fundamentales
              de la auditoría de sistemas, definición, tipos, principios
              y características tanto de auditores como de las auditorías. Si se desea
              profundizar, se sugiere realizar la lectura del libro:

              {' '}<i>Auditoría de Seguridad Informática por Ester Chicano Tejada</i>{' '}
              (centrado en la auditoría de seguridad informática).

              Cualquier duda, queja, recomendación o donación que deseen realizar me pueden
              contactar por telegram:
              {' '}<a href="https://t.me/Juan0_1" target="_blank">https://t.me/Juan0_1</a>.
              Espero les haya sido de gran ayuda :)
            </p>

            <p>
              Fecha de publicación: 03-02-2023.
              <br />
              Autor: Juan Diego Cobo Cabal.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
};

ConceptosInicialesAuditoria.propTypes = {};

ConceptosInicialesAuditoria.defaultProps = {};

export default ConceptosInicialesAuditoria;
