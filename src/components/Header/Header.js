import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Menu from '../Menu/Menu.js';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  function hideMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className={styles.ContainerHeader}>
      <nav className={styles.NavHeader}>

        <div className={styles.NavContainer}>
          <h4 className="text-light text-start mb-1 me-4">Menú</h4>
          <button className={"btn p-0 m-0 " + styles.BtnCloseMenu } onClick={hideMenu}>
            <div className={!showMenu ? styles.MakeX : ""}></div>
            <div className={!showMenu ? styles.MakeX : ""}></div>
            <div className={!showMenu ? styles.MakeX : ""}></div>
          </button>
        </div>

        <ul className={styles.NavUl + " " + (showMenu ? styles.ShowMenu : "")}>
          <li className="nav-item">
            <Link className={styles.LinkMenu} to="/">
              
            </Link>
          </li>

          <li className="nav-item">
            <div tabIndex={0} className={styles.ContainerCourses}>
              <Link to="/cursos" className={styles.LinkMenu}>Cursos</Link>
              {/* Contenedor row que contendrá las tres filas de submenús. */}
              <div className={styles.SubmenuCourses}>
                {/* Submenu para mostrar las materias de cuarto semestre */}
                <div className="container-fluid">
                  <p>Cuarto semestre</p>
                  <ul className="container-fluid p-0">
                    <li className="nav-item"><Link to="/cursos/fisica-2">Física 2</Link></li>
                    <li className="nav-item"><Link to="/cursos/actividad-complementaria">Actividad complementaria</Link></li>
                    <li className="nav-item"><Link to="/cursos/bases-de-datos-1">Bases de datos 1</Link></li>
                  </ul>
                </div>

                {/* Submenu para mostrar las materias de quinto semestre */}
                <div className="container-fluid">
                  <p>Quinto semestre</p>
                  <ul className="container-fluid p-0">
                    <li className="nav-item"><Link to="/cursos/probabilidad-y-estadistica">Probabilidad y estadística</Link></li>
                    <li className="nav-item"><Link to="/cursos/ingenieria-de-software-1">Ingeniería de software 1</Link></li>
                    <li className="nav-item"><Link to="/cursos/estructuras-de-datos-y-algoritmos-1">Estructuras de datos y algoritmos 1</Link></li>
                    <li className="nav-item"><Link to="/cursos/bases-de-datos-2">Bases de datos 2</Link></li>
                    <li className="nav-item"><Link to="/cursos/pensamiento-sistemico">Pensamiento sistémico</Link></li>
                  </ul>
                </div>

                {/* Submenu para mostrar las materias de sexto semestre */}
                <div className="container-fluid">
                  <p>Sexto semestre</p>
                  <ul className="container-fluid p-0">
                    <li className="nav-item"><Link to="/cursos/arquitectura-de-computadores">Arquitectura de computadores</Link></li>
                    <li className="nav-item"><Link to="/cursos/ingenieria-de-software-2">Ingeniería de software 2</Link></li>
                    <li className="nav-item"><Link to="/cursos/investigacion-de-operaciones">Investigación de operaciones</Link></li>
                    <li className="nav-item"><Link to="/cursos/estructuras-de-datos-y-algoritmos-2">Estructuras de datos y algoritmos 2</Link></li>
                    <li className="nav-item"><Link to="/cursos/identidades-y-cultura">Identidades y cultura</Link></li>
                  </ul>
                </div>

                {/* Submenu para mostrar las materias de séptimo semestre */}
                <div className="container-fluid">
                  <p>Séptimo semestre</p>
                  <ul className="container-fluid p-0">
                    <li className="nav-item"><Link to="/cursos/ambiente-y-desarrollo-sostenible">Ambiente y desarrollo sostenible</Link></li>
                    <li className="nav-item"><Link to="/cursos/redes-de-datos">Redes de datos</Link></li>
                    <li className="nav-item"><Link to="/cursos/sistemas-operativos">Sistemas operativos</Link></li>
                    <li className="nav-item"><Link to="/cursos/proyecto-informatico-1">Proyecto informático 1</Link></li>
                    <li className="nav-item"><Link to="/cursos/administracion-para-ingenieros">Administración para ingenieros</Link></li>
                    <li className="nav-item"><Link to="/cursos/formulacion-y-evaluacion-de-proyectos">Formulación y evaluación de proyectos</Link></li>
                  </ul>
                </div>

                {/* Submenu para mostrar las materias de octavo semestre */}
                <div className="container-fluid">
                  <p>Octavo semestre</p>
                  <ul className="container-fluid p-0">
                    <li className="nav-item"><Link to="/cursos/desarrollo-de-software-para-plataformas-moviles">Desarrollo de software para plataformas móviles</Link ></li>
                    <li className="nav-item"><Link to="/cursos/gestion-de-la-innovacion">Gestión de la innovación</Link ></li>
                    <li className="nav-item"><Link to="/cursos/seguridad-informatica">Seguridad informática</Link ></li>
                    <li className="nav-item"><Link to="/cursos/proyecto-informatico-2">Proyecto informático 2</Link ></li>
                    <li className="nav-item"><Link to="/cursos/servicios-telematicos">Servicios telemáticos</Link ></li>
                  </ul>
                </div>

                {/* Submenu para mostrar las materias de noveno semestre */}
                <div className="container-fluid">
                  <p>Noveno semestre</p>
                  <ul className="container-fluid p-0">
                    <li className="nav-item"><Link to="/cursos/ideas-y-oportunidades-de-negocio">Ideas y oportunidades de negocio</Link></li>
                    <li className="nav-item"><Link to="/cursos/hacking-etico">Hacking ético</Link></li>
                    <li className="nav-item"><Link to="/cursos/seminario-de-ingenieria-informatica">Seminario de ingeniería informática</Link></li>
                    <li className="nav-item"><Link to="/cursos/informatica-forense">Informática forense</Link></li>
                    <li className="nav-item"><Link to="/cursos/auditoria-de-sistemas">Auditoría de sistemas</Link></li>
                  </ul>
                </div>

              </div>
            </div>
          </li>
          <li className="nav-item"><Link className={styles.LinkMenu} to="/evaluaciones">Evaluaciones</Link></li>
          <li className="nav-item"><Link className={styles.LinkMenu} to="/calculadoras">Calculadoras</Link></li>
        </ul>
      </nav>
    </div>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
