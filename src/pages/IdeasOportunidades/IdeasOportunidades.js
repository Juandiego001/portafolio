import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './IdeasOportunidades.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const IdeasOportunidades = () => {
  // Setting title
  useEffect(() => {
    document.title = "Ideas y oportunidades de negocio | Juan Diego Cobo Cabal";
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="text-dark">
          Ideas y oportunidades de negocio
        </h1>

      </div>

      <Footer />
    </div>
  )
};

IdeasOportunidades.propTypes = {};

IdeasOportunidades.defaultProps = {};

export default IdeasOportunidades;
