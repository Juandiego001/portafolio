import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

// Components of bootstrap
import Container from 'react-bootstrap/Container';


const Header = () => (
  <Container className="bg-dark text-light text-center py-3" fluid>
    <a className="nav-link text-light" href="/">
      <h1>
      Juan Diego Cobo Cabal
      </h1>
    </a>
  </Container>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
