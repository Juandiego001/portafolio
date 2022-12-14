import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './GestionInnovacion.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const GestionInnovacion = () => {
  // Setting title
  useEffect(() => {
    document.title = "Gestión de la innovación | Juan Diego Cobo Cabal";
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="h1 text-dark">
          Gestión de la innovación
        </h1>
      </div>

      <Footer />
    </div>
  )
};

GestionInnovacion.propTypes = {};

GestionInnovacion.defaultProps = {};

export default GestionInnovacion;
