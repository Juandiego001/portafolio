import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Menu = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [drpDwnObl, setDrpDwnObl] = useState(false);
  const [drpDwnElc1, setDrpDwnElc1] = useState(false);
  const [drpDwnElc2, setDrpDwnElc2] = useState(false);

  const [caret1, setCaret1] = useState(true);
  const [caret2, setCaret2] = useState(true);
  const [caret3, setCaret3] = useState(true);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  function handleDrpDwnObl() {
    setDrpDwnObl(!drpDwnObl);
    setCaret1(!caret1);
  }

  function handleDrpDwnElc1() {
    setDrpDwnElc1(!drpDwnElc1);
    setCaret2(!caret2);
  }

  function handleDrpDwnElc2() {
    setDrpDwnElc2(!drpDwnElc2);
    setCaret3(!caret3);
  }

  return (
    <div className={"bg-dark " +  styles.MenuPosition}>
      <button className={"btn border-0 bg-dark text-light m-0 p-0 h-100 " + styles.OffCanvasMenu} onClick={handleShowMenu}>
        <h1 className="bg-dark m-0 p-0 h-100 border-start border-light d-flex justify-content-center align-items-center px-4">
          <FontAwesomeIcon icon={faBars} />
        </h1>
      </button>

      <div className={"offcanvas offcanvas-start bg-dark overflow-auto " + (showMenu == true ? "show" : "")}>
        <div className="offcanvas-header m-0 p-0">
          <div className="w-100 row g-0">
            <h4 className="m-0 p-0 col-10 text-light py-3 text-start ps-3">
              Menú
            </h4>
            <button className="btn border-0 col-2 d-flex justify-content-center align-items-center" onClick={handleShowMenu}>
              <h4 className="m-0 p-0 text-light text-center">
                <FontAwesomeIcon icon={faClose} />
              </h4>
            </button>
          </div>
        </div>

        <div className="offcanvas-body m-0 p-0">
          <ul className="nav flex-column text-start">
            <li className={"nav-item p-3 " + styles.DropDownObligatorias} onClick={handleDrpDwnObl}>
              <button className="btn border-0 text-light w-100 text-start p-0 m-0">
                <h6 className="border-bottom border-light pb-3 w-100">
                  Básica profesional{' '}
                  <FontAwesomeIcon icon={caret1 ? faCaretDown : faCaretUp} />
                </h6>
              </button>

              <ul className={"nav flex-column text-start " + (drpDwnObl ? "d-block" : "d-none")}>
                <li>
                  <Link to="/cursos/bases-de-datos-2" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Bases de datos 2
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/gestion-de-la-innovacion" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Gestión de la innovación
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item p-3" onClick={handleDrpDwnElc1}>
              <button className="btn border-0 text-light w-100 text-start p-0 m-0">
                <h6 className="border-bottom border-light pb-3">
                  Formación complementaria{' '}
                  <FontAwesomeIcon icon={caret2 ? faCaretDown : faCaretUp} />
                </h6>
              </button>

              <ul className={"nav flex-column text-start " + (drpDwnElc1 ? "d-block" : "d-none")}>
                <li>
                  <Link to="/cursos/maraton-de-programacion" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Maratón de programación
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item p-3" onClick={handleDrpDwnElc2}>
              <button className="btn border-0 text-light w-100 text-start p-0 m-0">
                <h6 className="border-bottom border-light pb-3">
                  Ingeniería aplicada{' '}
                  <FontAwesomeIcon icon={caret3 ? faCaretDown : faCaretUp} />
                </h6>
              </button>

              <ul className={"nav flex-column text-start " + (drpDwnElc2 ? "d-block" : "d-none")}>
                <li>
                  <Link to="/cursos/desarrollo-de-software-para-plataformas-moviles" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Desarrollo de software para plataformas móviles
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/hacking-etico" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Hacking ético
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/seguridad-informatica" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Seguridad informatica
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/ideas-y-oportunidades-de-negocio" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Ideas y oportunidades de negocio
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/formulacion-y-evaluacion-de-proyectos" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Formulación y evaluación de proyectos
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/servicios-telematicos" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Servicios telemáticos
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/proyecto-informatico-1" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Proyecto informático 1
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/proyecto-informatico-2" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Proyecto informático 2
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/administracion-para-ingenieros" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Administración para ingenieros
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/informatica-forense" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Informática forense
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/auditoria-de-sistemas" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Auditoría de sistemas
                  </Link>
                </li>

                <li>
                  <Link to="/cursos/seminario-de-ingeniera-informatica" className="nav-link text-start btn btn-dark text-light p-3" rel="index,follow">
                    Seminario de ingeniería informática
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
