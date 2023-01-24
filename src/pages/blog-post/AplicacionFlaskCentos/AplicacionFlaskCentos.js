import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionFlaskCentos.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const AplicacionFlaskCentos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Aplicación Flask + CentOS 7 | Servicios telemáticos</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Desarrollo de aplicación web en python utilizando Flask 
          y desplegando el servicio en una máquina CentOS 7."></meta>
        <meta name="keywords" content="
          aplicación flask centos,
          aplicación flask centos 7,
          Aplicación Flask CentOS 7,
          Aplicación Flask con CentOS 7 Servicios,
          Aplicacion Flask con CentOS 7 Servicios telemáticos,
          Aplicacion Flask con CentOS 7 Servicios telematicos,
          Aplicación Flask con CentOS 7 Servicios telemáticos,
          Aplicación Flask con CentOS 7 Servicios telematicos,
          Aplicación Flask + CentOS 7 Servicios,
          Aplicacion Flask + CentOS 7 Servicios telemáticos,
          Aplicacion Flask + CentOS 7 Servicios telematicos,
          Aplicación Flask + CentOS 7 Servicios telemáticos,
          Aplicación Flask + CentOS 7 Servicios telematicos,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div className="mb-4">
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Aplicación Flask + CentOS 7
          </h1>

          <p>
            En la presente entrada se explicará como crear una aplicación web con Flask en una máquina virtual de CentOS 7.
            La diferencia a tener en cuenta con otras versiones de CentOS tales como la 8 es la instalación del módulo  <code>mod_wsgi.</code>
          </p>

          <h2 className="h2 text-dark mt-5">
            Introducción
          </h2>

          <p>
            Para iniciar tendremos en cuenta el siguiente Vagrantfile:
          </p>

          <pre className="language-ruby">
            <code>
              {
                "# -*- mode: ruby -*-\n" +
                "# vi: set ft=ruby :\n\n" +
               
                'Vagrant.configure("2") do |config|\n' +
                "  config.vm.define :server do |server|\n" +
                '    server.vm.box = "centos/7"\n' +
                '    server.vm.network "private_network", ip: "192.168.56.3"\n' +
                '    server.vm.hostname = "server"\n' +
                '  end\n' +
                'end\n'
              }
            </code>
          </pre>

        </div>

        <Footer />
      </div>
    </>
  )
};

AplicacionFlaskCentos.propTypes = {};

AplicacionFlaskCentos.defaultProps = {};

export default AplicacionFlaskCentos;
