import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Menu from '../Menu/Menu.js';

const Header = () => {

  return (
    <div className={"container-fluid p-0 m-0 bg-dark d-flex align-items-center position-relative"}>
      <Link to="/" className="nav-link h1 py-3 m-0 text-light w-100 d-flex justify-content-center">
        <h1 className={"p-0 m-0 w-50 text-center " + styles.FontGoogle}>
          Juan Diego Cobo Cabal
        </h1>
      </Link>

      <Menu />
    </div>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
