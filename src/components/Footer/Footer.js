import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid row m-0 p-0 g-0">
      <div className="col display-flex d-flex justify-content-center align-items-center m-0 p-0">
        <Link to="/" className="btn">
          <h1 className={"display-1 text-light d-flex justify-content-center align-items-center p-0 m-0 pb-3 " + styles.FontGoogle}>
            J
          </h1>
        </Link>
      </div>

      <div className="col m-0 p-0 bg-dark text-light d-flex">
        <div className="m-0 p-0 w-100 h-100 row g-0">
          <div className="col m-0 p-0 d-flex justify-content-center align-items-center">
            <ul className="nav flex-column">
              <li className="nav-item border-bottom border-light">
                <Link className="nav-link text-light text-center" to="/cursos">
                  Cursos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light text-center" to="/evaluaciones">
                  Evaluaciones
                </Link>
              </li>
            </ul>
          </div>
          <div className="col m-0 p-0 d-flex justify-content-center align-items-center">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link text-light text-center" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item border-bottom border-top border-light">
                <Link className="nav-link text-light text-center" to="/acercade">
                  Acerca de
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light text-center" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-lg-12 m-0 p-0 bg-dark border-top border-light">
        <h5 className="text-center py-3 text-light p-0 m-0">
          Todos los derechos reservados &#169;
        </h5>
      </div>

    </div >
  )
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
