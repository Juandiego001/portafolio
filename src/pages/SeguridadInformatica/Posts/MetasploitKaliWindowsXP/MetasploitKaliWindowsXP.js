import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MetasploitKaliWindowsXP.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const MetasploitKaliWindowsXp = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Metasploit Kali + Windows XP | Seguridad informática</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Práctica para atacar una máquina Windows XP 
          utilizando el frammework de Metasploit 
          por medio de una máquina Kali Linux 
          y tomar control de la shell atacada."></meta>
        <meta name="keywords" content="
          metasploit kali windows xp,
          metasploit kali linux windows xp,
          Metasploit Kali Windows XP,
          Metasploit con Kali Linux atacando Windows XP Seguridad,
          Metasploit con Kali Linux atacando Windows XP Seguridad informática,
          Metasploit con Kali Linux atacando Windows XP Seguridad informatica,
          Metasploit con Kali Linux atacando Windows XP Seguridad informática,
          Metasploit con Kali Linux atacando Windows XP Seguridad informatica,
          Metasploit Kali + Windows XP Seguridad,
          Metasploit Kali + Windows XP Seguridad informática,
          Metasploit Kali + Windows XP Seguridad informatica,
          Metasploit Kali + Windows XP Seguridad informática,
          Metasploit Kali + Windows XP Seguridad informatica,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Metasploit Kali + Windows XP
          </h1>

          <p className="mt-3">
            En el día de hoy estaremos desarrollando el laboratorio para explotar una vulnerabilidad de Windows XP
            a través del sistema operativo Kali Linux.
          </p>

          <div className="mt-5">
            <h2>Actualización del <code>apt</code></h2>
          </div>

        </div>

        <Footer />
      </div>
    </>
  )
};

MetasploitKaliWindowsXp.propTypes = {};

MetasploitKaliWindowsXp.defaultProps = {};

export default MetasploitKaliWindowsXp;
