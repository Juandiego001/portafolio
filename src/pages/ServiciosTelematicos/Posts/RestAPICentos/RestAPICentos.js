import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './RestAPICentos.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const RestApiCentOS = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Rest API + CentOS 8 | Servicios telemáticos</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Desarrollo de aplicación web en python utilizando Flask 
          y desplegando el servicio en una máquina CentOS 7."></meta>
        <meta name="keywords" content="
          rest api CentOS,
          rest api CentOS 8,
          Rest API CentOS 8,
          Rest API con CentOS 8 Servicios,
          Rest API con CentOS 8 Servicios telemáticos,
          Rest API con CentOS 8 Servicios telematicos,
          Rest API con CentOS 8 Servicios telemáticos,
          Rest API con CentOS 8 Servicios telematicos,
          Rest API + CentOS 8 Servicios,
          Rest API + CentOS 8 Servicios telemáticos,
          Rest API + CentOS 8 Servicios telematicos,
          Rest API + CentOS 8 Servicios telemáticos,
          Rest API + CentOS 8 Servicios telematicos,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div>
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Rest API + CentOS 8
          </h1>

          <p>
            En la presente entrada se explicará cómo desarrollar una Rest API con diferentes lenguajes de programación.
            Por un lado, utilizaremos python con el framework de Flask. Para esto clonaremos el repositorio
            del docente Oscar Mondragón. Por otro lado,
            utilizaremos Javascript con Node.js empleando el framework de express, proyecto que podrá ser clonado
            desde el repositorio que se adjunta al final de la entrada, o construirse desde cero.
            Los servicios mencionados serán configurados en un sistema operativo CentOS 8.
            Posteriormente, utilizaremos
            {' '}<span className="badge text-dark m-0 p-0">Postman</span>{' '}
            para procesar las peticiones.
          </p>


          <h2 className="mt-5">
            Inicialización de la máquina e instalación de módulos necesarios
          </h2>

          <p>
            Para comenzar con el proyecto inicializaremos la máquina virtual de CentOS 8.
            Para esto, crearemos una carpeta y un
            {' '}<span className="badge text-dark m-0 p-0">Vagrantfile</span>{' '}
            de la siguiente manera:
          </p>

          <pre>
            <code className="language-cmd">
              {
                'mkdir rest-api\n' +
                'cd rest-api\n' +
                'vagrant init\n' +
                'notepad Vagrantfile'
              }
            </code>
          </pre>

          <p>
            Posteriormente, modificamos el
            {' '}<span className="badge text-dark m-0 p-0">Vagrantfile</span>{' '}
            para declarar la máquina CentOS 8 con las siguientes características:
          </p>

          <pre>
            <code className="language-ruby">
              {
                '# -*- mode: ruby -*-\n' +
                '# vi: set ft=ruby :\n\n' +

                'Vagrant.configure("2") do |config|\n' +
                '  config.vm.define :server do |server|\n' +
                '    server.vm.box = "CentOS/8"\n' +
                '    server.vm.network "private_network", ip: "192.168.56.3"\n' +
                '    server.vm.hostname = "server"\n' +
                '  end\n' +
                'end\n'
              }
            </code>
          </pre>

          <p>
            Una vez hemos definido la máquina, procederemos a encenderla, acceder
            a ella mediante
            {' '}<span className="badge text-dark m-0 p-0">SSH</span>{' '}
            e iniciar como
            {' '}<span className="badge text-dark m-0 p-0">root</span>{' '}
            para proceder a instalar los módulos necesarios. Esto se hace
            ejecutando los siguientes pasos:
          </p>

          <pre>
            <code className="language-console">
              {
                '# Encender la máquina\n' +
                'vagrant up server\n' +
                '# Iniciar sesión en la máquina\n' +
                'vagrant ssh server\n' +
                '# Escalar privilegios a root\n' +
                'sudo -i\n\n' +

                '# Instalación de los módulos necesarios\n' +
                'sudo sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-*\n' +
                'sudo yum update -y\n' +
                'sudo yum install epel-release -y\n' +
                '# En caso de que se necesite utilizar git\n' +
                'sudo yum install git -y\n\n' +

                '# Instalación de python\n' +
                'sudo yum install python3-pip -y\n' +
                '# Instalación del flask\n' +
                'sudo pip3 install Flask\n' +
                '# Verificación de instalación de python\n' +
                'python3 --version\n' +
                '# Verificación de instalación de pip (manejador de librerías)\n' +
                'pip3 --version\n\n' +

                '# Instalación de Javascript\n' +
                'curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -\n' +
                'sudo yum install -y nodejs\n' +
                '# Verficación de instalación de node\n' +
                'node --version\n' +
                'npm --version\n' +
                '# Instalación de framework express\n' +
                'npm i express'
              }
            </code>
          </pre>

          <h2 className="mt-5">
            Clonación, ejecución y testeo del proyecto (REST API con Python)
          </h2>

          <p>
            Ahora bien, desde la máquina CentOS 8, lo que haremos será clonar el repositorio del docente Oscar Mondragón,
            ejecutarlo y verificar que está funcionando correctamente. Para esto, realizamos lo siguiente:
          </p>

          <pre>
            <code className="language-console">
              {
                '# Para clonar el proyecto\n' +
                'sudo git clone https://github.com/omondragon/APIRestFlask\n\n' +

                '# Para ejecutar el proyecto\n' +
                'cd APIRestFlask\n' +
                'export FLASK_APP=apirest.py\n' +
                'export FLASK_ENV=development\n' +
                'python3 -m flask run --host=0.0.0.0'
              }
            </code>
          </pre>

          <p>
            Finalmente, para comprobar que el aplicativo está funcionando correctamente,
            desde su navegador de preferencia digite:
            {' '}<span className="badge text-dark m-0 p-0">http://192.168.56.3:5000/books</span>.
            Si visualizamos lo siguiente, es porque el proceso se ha hecho correctamente.
          </p>

          <pre>
            <code className="language-json">
              {
                '"books": [\n' +
                '  {\n' +
                '    "author": "Gabo", \n' +
                '    "description": "Good one", \n' +
                '    "id": 1, \n' +
                '    "title": "La hojarasca"\n' +
                '  }, \n' +
                '  {\n' +
                '    "author": "Gabo", \n' +
                '    "description": "Interesting", \n' +
                '    "id": 2, \n' +
                '    "title": "El coronel no tiene quien le escriba"\n' +
                '  }\n' +
                ']\n'
              }
            </code>
          </pre>

          <h2 className="mt-5">
            Clonación, ejecución y testeo del proyecto (REST API con Javascript)
          </h2>

          <p>
            Ahora bien, similar a como hicimos con el proyecto de Flask,
            lo que haremos será copiar el repositorio del autor y empezar
            a correrlo desde la máquina CentOS. Con esto, el lector
            podrá realizar modificaciones a su antojo del proyecto y
            tener la base de una REST API en Javascript con Node.js. Para esto,
            ejecutamos:
          </p>

          <pre>
            <code className="language-console">
              {
                '# Clonación del repositorio\n' +
                'git clone https://github.com/Juandiego001/rest-api-nodejs-servicios-telematicos rest-api\n' +
                'cd rest-api\n' +
                '# Ejecución del servidor\n' +
                'node index.js\n' +
                '# Si aparece un mensaje indicando que se está escuchando en el puerto 3000,\n' +
                '# será porque la API estará funcionando correctamente.'
              }
            </code>
          </pre>

          <p>
            Para comprobar que el aplicativo está funcionando correctamente,
            desde su navegador de preferencia digite:
            {' '}<span className="badge text-dark m-0 p-0">http://192.168.56.3:3000/books</span>.
            Si visualizamos lo siguiente, es porque el proceso se ha hecho correctamente.
          </p>

          <pre>
            <code className="language-json">
              {
                '"books":[\n' +
                '    {\n' +
                '      "author":"Gabo",\n' +
                '      "description":"Good one",\n' +
                '      "id":1,\n' +
                '      "title":"La hojarasca"\n' +
                '    },\n' +
                '    {\n' +
                '      "author":"Gabo",\n' +
                '      "description":"Interesting",\n' +
                '      "id":2,\n' +
                '      "title":"El coronel no tiene quien le escriba"\n' +
                '    }\n' +
                ']\n'
              }
            </code>
          </pre>

          <div className="bg-info p-5 my-5">
            <h2>
              Peticiones con postman
            </h2>

            <p>
              {/* Desde la máquina de Windows es posible comprobar si el proyecto está corriendo
              correctamente. Para ello deberá instalar 
              {' '}<a href="https://www.postman.com/downloads/" target="_blank">postman</a>. */}

              <b>Postman</b> es un aplicativo que permite ejecutar todas los tipos de peticiones con una interfaz gráfica
              más cómoda y eficaz que las consolas de comandos de Windows. Para iniciar, basta con abrir el aplicativo
              y omitir el registro como se ha señalado en la parte roja de la imagen inferior.
            </p>

            <div className="text-center">
              <img className="my-2 w-50 mx-auto" src={process.env.PUBLIC_URL + "/septimo-semestre/servicios-telematicos/rest-api/instalacion-postman.png"} />
            </div>

            <p className="mt-5">
              Luego, para definir la petición se da click en el <b>+</b> del aplicativo y
              se define la petición, ruta y contenido en el body (se debe establecer que será un JSON si se desean crear datos).
              En el ejemplo de la imagen, se observa cómo efectuar la creación de un libro enviando un JSON. A su vez,
              es posible eliminar un libro o editarlo.
            </p>

            <div className="text-center">
              <img className="my-2 w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/servicios-telematicos/rest-api/utilizacion-postman.png"} />
            </div>
          </div>

          <h2 className="mt-5">
            Aclaraciones
          </h2>

          <p>
            La idea de una REST API es permitir insertar, eliminar, editar y leer ciertos datos en específico.
            Así pues, tanto con el proyecto implementado en Python como el implementado en Javascript,
            se podrán efectuar las mismas operaciones CRUD. Por otra parte, si se utilizará solo
            Postman, no habrá nada de que preocuparse, más si de lo contrario se utilizarán
            los comandos <code>curl</code> de linux, tendrá que investigarse cómo efectuar
            los comandos correctamente para enviar JSON's y objetos por el estilo.
          </p>

          <h2 className="mt-5">
            Finalización
          </h2>

          <p>
            Esta ha sido una explicación general para desplegar
            una REST API en un sistema operativo CentOS 8.
            Cualquier duda, queja, recomendación o donación que deseen realizar me pueden
            contactar por telegram:
            {' '}<a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>.
            Espero les haya sido de gran ayuda :)
          </p>

          <p>
            Fecha de publicación: 07-02-2023.
            <br />
            Autor: Juan Diego Cobo Cabal.
          </p>
        </div>


        <Footer />
      </div>
    </>
  )
};

RestApiCentOS.propTypes = {};

RestApiCentOS.defaultProps = {};

export default RestApiCentOS;

