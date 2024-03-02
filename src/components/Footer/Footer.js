import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

// Constants
import menuOptions from '../../constants/menuOptions';

const Footer = () => {
  return (
    <div className={"container-fluid row m-0 p-0 g-0 " + styles.FooterBottom}>
      <div className="row g-0 gx-3 m-0 py-3 bg-dark justify-content-md-center">
        {
          menuOptions.map((option, index) => {
            return (
              <Link key={"opcion-" + index} className="col p-2 nav-link text-light text-center" to={option.to} rel="index,follow">
                {option.nombre}
              </Link>
            )
          })
        }
      </div>

      <div className="m-0 p-0 bg-dark border-top border-light">
        <p className="text-center py-3 text-light p-0 m-0">
          Todos los derechos reservados &#169;
        </p>
      </div>
    </div>
  )
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
