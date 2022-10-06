import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SeguridadInformatica.module.css';

// Custom components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SeguridadInformatica = () => {

  useEffect(() => {
    document.title = "Seguridad Informática";
  }, [])

  return (
    <div>
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>
      <h1 className="h1 text-dark">
        Seguridad informática
      </h1>
    </Container>
  </div>
  )
};

SeguridadInformatica.propTypes = {};

SeguridadInformatica.defaultProps = {};

export default SeguridadInformatica;
