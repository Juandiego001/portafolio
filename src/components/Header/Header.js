import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Menu from '../Menu/Menu.js';

const Header = () => {

  return (
    <div className={"container-fluid p-0 m-0 bg-dark row position-relative"}>
      <div className="m-0 p-0 col-10">
        <Link to="/" className="nav-link m-0 p-0 py-3 text-light w-100 text-center">
          <h1 className={"p-0 m-0 text-center " + styles.FontGoogle}>
            Juan Diego Cobo Cabal
          </h1>
        </Link>
      </div>

      <div className="m-0 p-0 col-2">
        <Menu />
      </div>
    </div>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
