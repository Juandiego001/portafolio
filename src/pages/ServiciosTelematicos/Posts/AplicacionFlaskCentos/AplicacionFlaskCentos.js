import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionFlaskCentos.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

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

      <div className="all-pages">
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Aplicación Flask + CentOS 7
          </h1>

          <p className="mt-3">
            En la presente entrada se explicará cómo crear una aplicación web con Flask en una máquina virtual de CentOS 7.
            La diferencia a tener en cuenta con otras versiones de CentOS tales como la 8 es la instalación del módulo  <code>mod_wsgi.</code>{' '}
            Lo ideal sería que el proyecto en flask ya estuviese probado y desarrollado en el equipo local. Sin embargo,
            se brindará el código del proyecto de Flask realizado por el autor de esta entrada.
          </p>

          <h2 className="h2 text-dark mt-5">
            Introducción
          </h2>

          <p>
            Para iniciar tendremos en cuenta el siguiente <code>Vagrantfile:</code>
          </p>

          <pre>
            <code className="language-ruby">
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

          <h2 className="h2 text-dark">Instalación de módulos necesarios y clonación de repositorio</h2>

          <p>
            Para instalar los módulos necesarios se muestran los comandos a seguir
            en la parte inferior (si lo desea, puede copiar y pegar los comandos).
            Luego de esto, copiaremos el repositorio del proyecto. Para quienes no tengan el código aún,
            pueden observar el aplicativo en el siguiente{' '}
            <a href="https://github.com/Juandiego001/app-flask-servicios-telematicos" target="_blank">link.</a>
          </p>

          <pre>
            <code className="language-console">
              {
                "# Para ingresar como root (contraseña 'vagrant', opcional)\n" +
                "su -\n" +
                "# Para actualizar el repositorio\n" +
                "sudo yum update -y\n" +
                "# Se instala el módulo python en cuestión\n" +
                "sudo yum install -y python3\n" +
                "# Instalación de git\n" +
                "sudo yum install git -y\n" +
                "# Instalación del módulo de flask\n" +
                "sudo pip3 install flask\n" +
                "# Clonación del repositorio\n" +
                "sudo git clone https://github.com/Juandiego001/app-flask-servicios-telematicos app-flask # Cambiar en caso de tener un repo propio\n" +
                "# Instalación de net-tools (opcional)\n" +
                "sudo yum install net-tools -y\n" +
                "# Con este módulo podremos recordar nuestra ip utilizando el comando ifconfig"
              }
            </code>
          </pre>

          <h2 className="h2 text-dark">Ejecución del proyecto</h2>

          <p>
            Posteriormente, nos dirigimos a la carpeta del proyecto, generamos una variable
            de entorno correspondiente al nombre del archivo de inicialización del servidor y
            finalmente iniciamos el servidor con un comando propio de flask.
          </p>

          <pre>
            <code className="language-console">
              {
                "# Nos dirigimos a la carpeta del proyecto\n" +
                "cd app-flask\n" +
                "# Exportamos la variable con el nombre del archivo\n" +
                "export FLASK_APP=run.py\n" +
                "# Ejecutamos el proyecto (--host nos permite visualizarlo desde nuestro pc anfitrión)\n" +
                "flask run --host=0.0.0.0"
              }
            </code>
          </pre>

          <p className={"p-3 " + styles.InfoDiv}>
            Para poder visualizar el aplicativo basta con dirigirse al navegador y
            digitar en la barra de búsqueda la dirección IP de la máquina servidor
            - que de acuerdo al{' '}
            <code className="nohighlight">Vagrantfile</code>{' '} 
            es <code>192.168.56.3</code> -
            junto con el puerto <code>5000</code>, es decir,{' '}
            <code className="nohighlight">192.168.56.3:5000.</code>
          </p>

          <h2 className="h2 text-dark mt-5">
            Finalización
          </h2>

          <p>
            Esta ha sido una guía para implementar un aplicativo con python utilizando Flask. 
            En próximas entradas, se explicará el proceso para ejecutar el servicio mediante un servidor Apache.
            <br /><br />
            Cualquier duda, queja, recomendación o donación que deseen realizar me pueden contactar por telegram:
            {' '}<a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>.
            Espero les haya sido de gran ayuda :)
          </p>

          <p>
            Fecha de publicación: 25-01-2023.
            <br />
            Autor: Juan Diego Cobo Cabal.
          </p>

        </div>

        <Footer />
      </div>
    </>
  )
};

AplicacionFlaskCentos.propTypes = {};

AplicacionFlaskCentos.defaultProps = {};

export default AplicacionFlaskCentos;
