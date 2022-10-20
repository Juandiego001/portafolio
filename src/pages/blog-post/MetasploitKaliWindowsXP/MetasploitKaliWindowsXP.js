import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MetasploitKaliWindowsXP.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const MetasploitKaliWindowsXp = () => {

  // Setting title
  useEffect(() => {
    document.title = "Metasploit Kali + Windows XP | Servicios telemáticos";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
      <Header />
      <Menu />

      <Container className="mt-4 px-5" fluid>
        <h1 className="h1 text-dark">
          Metasploit Kali + Windows XP
        </h1>

        <p>
          En el día de hoy estaremos desarrollando el laboratorio para explotar una vulnerabilidad de Windows XP
          a través del sistema operativo Kali Linux.
        </p>

        <div className="mt-5">
          <h2>Actualización del <code>apt</code></h2>
        </div>


      </Container>
    </div>
  )
};

MetasploitKaliWindowsXp.propTypes = {};

MetasploitKaliWindowsXp.defaultProps = {};

export default MetasploitKaliWindowsXp;
