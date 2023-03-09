import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Cursos.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Cursos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cursos | Juan Diego Cobo Cabal</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Cursos/clases/materias/asignaturas compartidas en la plataforma de Juan Diego Cobo Cabal o JDCC."></meta>
        <meta name="keywords" content="
          cursos juan diego cobo cabal,
          cursos jdcc,
          cursos,
          clases,
          materias,
          asignaturas,
          materias jdcc,
          materias juan diego cobo cabal,
          asignaturas jdcc,
          asignaturas juan diego cobo cabal,
          clases JDCC,
          clases Juan Diego Cobo Cabal" />
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center mb-5">
            Cursos
          </h1>

          {/* Los que aparezcan comentados se deben a que posiblemente no tenemos documentación como tal de esas materias */}
          <div className="row container-fluid gx-0 gy-5">

            {/* Cuarto semestre */}
            <div className="col-sm-4 border border-dark">
              <h4 className="border-bottom border-dark text-center d-flex justify-content-center align-items-center py-3 m-0">
                Cuarto semestre
              </h4>

              {/* <Link className="border border-top-0 nav-link border-dark text-center d-flex justify-content-center align-items-center py-3 m-0" 
                to="/cursos/matematicas-fundamentales">
                Matemáticas discretas
              </Link> */}

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.BasicaProfesional}
                to="/cursos/fisica-2">
                Física 2
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.BasicaProfesional}
                to="/cursos/actividad-complementaria">
                Actividad complementaria
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/bases-de-datos-1">
                Bases de datos 1
              </Link>
            </div>

            {/* Quinto semestre */}
            <div className="col-sm-4 border border-dark">
              <h4 className="border-bottom border-dark text-center d-flex justify-content-center align-items-center py-3 m-0">
                Quinto semestre
              </h4>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.BasicaProfesional}
                to="/cursos/probabilidad-y-estadistica">
                Probabilidad y estadística
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/ingenieria-de-software-1">
                Ingeniería de software 1
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/estructuras-de-datos-y-algoritmos-1">
                Estructuras de datos y algoritmos 1
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/bases-de-datos-2">
                Bases de datos 2
              </Link>

              <Link className={"text-light nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/pensamiento-sistemico">
                Pensamiento sistemico
              </Link>
            </div>

            {/* Sexto semestre */}
            <div className="col-sm-4 border border-dark">
              <h4 className="border-bottom border-dark text-center d-flex justify-content-center align-items-center py-3 m-0">
                Sexto semestre
              </h4>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/arquitectura-de-computadores">
                Arquitectura de computadores
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/ingenieria-de-software-2">
                Ingeniería de software 2
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/investigacion-de-operaciones">
                Investigación de operaciones
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/estructuras-de-datos-y-algoritmos-2">
                Estructuras de datos y algoritmos 2
              </Link>

              <Link className={"text-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.ComponenteHumanistica}
                to="/cursos/identidades-y-cultura">
                Identidades y cultura
              </Link>
            </div>

            {/* Séptimo semestre */}
            <div className="col-sm-4 border border-dark">
              <h4 className="border-bottom border-dark text-center d-flex justify-content-center align-items-center py-3 m-0">
                Séptimo semestre
              </h4>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.BasicaProfesional}
                to="/cursos/ambiente-y-desarrollo-sostenible">
                Ambiente y desarrollo sostenible
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/redes-de-datos">
                Redes de datos
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/sistemas-operativos">
                Sistemas operativos
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/proyecto-informatico-1">
                Proyecto informático 1
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/administracion-para-ingenieros">
                Administración para ingenieros
              </Link>

              <Link className={"text-light nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/formulacion-y-evaluacion-de-proyectos">
                Formulación y evaluación de proyectos
              </Link>
            </div>

            {/* Octavo semestre */}
            <div className="col-sm-4 border border-dark">
              <h4 className="border-bottom border-dark text-center d-flex justify-content-center align-items-center py-3 m-0">
                Octavo semestre
              </h4>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/desarrollo-de-software-para-plataformas-moviles">
                Desarrollo de software para plataformas móviles
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.BasicaProfesional}
                to="/cursos/gestion-de-la-innovacion">
                Gestión de la innovación
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/seguridad-informatica">
                Seguridad informática
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/proyecto-informatico-2">
                Proyecto informático 2
              </Link>

              {/* <Link className="border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0" 
                to="/cursos/gestion-de-las-tecnologias-de-la-informacion">
                Gestión de las tecnologías de la información
              </Link> */}

              <Link className={"text-light nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/servicios-telematicos">
                Servicios telemáticos
              </Link>
            </div>

            {/* Noveno semestre */}
            <div className="col-sm-4 border border-dark">
              <h4 className="border-bottom border-dark text-center d-flex justify-content-center align-items-center py-3 m-0">
                Noveno semestre
              </h4>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/ideas-y-oportunidades-de-negocio">
                Ideas y oportunidades de negocio
              </Link>

              <Link className={"text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/hacking-etico">
                Hacking ético
              </Link>

              <Link className={" text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/seminario-de-ingenieria-informatica">
                Seminario de ingeniería informática
              </Link>

              <Link className={" text-light border-bottom border-dark nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/informatica-forense">
                Informática forense
              </Link>

              <Link className={"text-light nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.IngenieriaAplicada}
                to="/cursos/auditoria-de-sistemas">
                Auditoría de sistemas
              </Link>
            </div>

            {/* Formación complementaria */}
            <div className="col-sm-4 border border-dark">
              <h4 className="border-bottom border-dark text-center d-flex justify-content-center align-items-center py-3 m-0">
                Formación complementaria
              </h4>

              <Link className={"text-light nav-link text-center d-flex justify-content-center align-items-center py-3 m-0 " + styles.FormacionComplementaria}
                to="/cursos/maraton-de-programacion">
                Maratón de programación
              </Link>
            </div>


          </div>
        </div>

        <Footer />
      </div>
    </>
  )
};

Cursos.propTypes = {};

Cursos.defaultProps = {};

export default Cursos;
