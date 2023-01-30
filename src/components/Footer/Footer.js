import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid row m-0 p-0 g-0">

      <div className="row g-0 gx-3 px-5 py-4 m-0 bg-dark justify-content-md-center">
        <div className="col-md-3 ">
          <div className="row g-0 m-0">
            <Link className="col py-2 nav-link text-light text-center" to="/" rel="index,follow">
              Home
            </Link>

            <Link className="col py-2 nav-link text-light text-center" to="/cursos" rel="index,follow">
              Cursos
            </Link>

            <Link className="col py-2 nav-link text-light text-center" to="/evaluaciones" rel="index,follow">
              Evaluaciones
            </Link>
          </div>
        </div>

        <div className="col-md-3">
          <div className="row g-0 m-0">
            <Link className="col py-2 nav-link text-light text-center" to="/contacto" rel="index,follow">
              Calculadoras
            </Link>

            <Link className="col py-2 nav-link text-light text-center" to="/acercade" rel="index,follow">
              Acerca de
            </Link>

            <Link className="col py-2 nav-link text-light text-center" to="/contacto" rel="index,follow">
              Contacto
            </Link>
          </div>
        </div>
      </div>

      <div className="m-0 p-0 bg-dark border-top border-light">
        <p className="text-center py-3 text-light p-0 m-0">
          Todos los derechos reservados &#169;
        </p>
      </div>

    </div >
  )
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
