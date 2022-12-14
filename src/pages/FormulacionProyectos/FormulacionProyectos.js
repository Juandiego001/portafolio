import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './FormulacionProyectos.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const FormulacionProyectos = () => {
  // Setting title
  useEffect(() => {
    document.title = "Formulación y evaluación de proyectos | Juan Diego Cobo Cabal";
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="h1 text-dark">
          Formulación de proyectos
        </h1>
      </div>

      <Footer />
    </div>
  )
};

FormulacionProyectos.propTypes = {};

FormulacionProyectos.defaultProps = {};

export default FormulacionProyectos;
