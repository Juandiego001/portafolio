import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SeguridadInformatica.module.css';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const SeguridadInformatica = () => {

  useEffect(() => {
    document.title = "Seguridad Informática | Juan Diego Cobo Cabal";
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid my-5 px-5">
        <h1 className="h1 text-dark">
          Seguridad informática
        </h1>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Metasploit Kali + Windows XP</h5>
            <p className="card-text">
              Desarrollo de laboratorio para explotar una vulnerabilidad de
              un sistema operativo Windows XP mediante otro sistema operativo
              Kali Linux.
            </p>
            <Link className="btn btn-dark" to="/cursos/seguridad-informatica/entradas/metasploit-kali-windows-xp">Ver entrada</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
};

SeguridadInformatica.propTypes = {};

SeguridadInformatica.defaultProps = {};

export default SeguridadInformatica;
