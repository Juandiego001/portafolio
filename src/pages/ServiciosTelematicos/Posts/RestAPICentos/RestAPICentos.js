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

      <div className="mb-4">
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Rest API + CentOS 8
          </h1>

          <p>
            En la presente entrada se explicará cómo desarrollar una Rest API con diferentes lenguajes de programación.
            Por un lado, utilizaremos python con el framework de Flask. Para esto clonaremos el repositorio
            del docente Oscar Mondragón. Por otro lado,
            utilizaremos JavaScript con Node.js empleando el framework de express, proyecto que podrá ser clonado
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
                'npm --version'
              }
            </code>
          </pre>



          <p>
            A continuación, ejecute desde el usuario <code>root</code> (seguramente ya se encuentre con dicho usuario) el siguiente comando
            para copiar el repositorio:
          </p>

          <pre>
            <code>
              {
                'git clone https://github.com/omondragon/APIRestFlask'
              }
            </code>
          </pre>

          <p>
            Luego para correr el proyecto:
          </p>

          <pre>
            <code className="language-cmd">
              {
                'cd APIRestFlask'
              }
            </code>
          </pre>

          <p>
            Luego para ejecutar el código:
          </p>

          <pre>
            <code className="language-cmd">
              {
                'export FLASK_APP=apirest.py\n' +
                'export FLASK_ENV=development\n' +
                'python3 -m flask run --host=0.0.0.0'
              }
            </code>
          </pre>

          <p>
            Finalmente, para probar que efectivamente está corriendo el aplicativo busque
            desde el navegador chrome de su máquina anfitrión:
          </p>

          <pre>
            <code className="language-cmd">
              {
                'http://192.168.56.3:5000/books'
              }
            </code>
          </pre>

          <p>
            Para el siguiente punto (probando el comando <code>curl</code> desde otra máquina), devuelvase
            a su máquina y ejecute:
          </p>

          <pre>
            <code className="language-cmd">
              {
                'vagrant up client\n' +
                'vagrant ssh client'
              }
            </code>
          </pre>

          <p>
            Una vez haya iniciado la máquina <code>client</code> ejecute:
          </p>

          <pre>
            <code>
              {
                'curl 192.168.56.3:5000/books'
              }
            </code>
          </pre>

          <div className="bg-warning p-3">
            <b>Atención.</b>
            <br /><br />
            <span>La máquina <code>server</code> deberá seguir corriendo el el proyecto.</span>
          </div>

          <p className="mt-3">
            Si todo lo anterior retorna:
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

          <p>
            Es porque se ha terminado de configurar correctamente.
          </p>
        </div>

        <div className="mt-5">
          <h2>Desarrollo expres - Nodejs</h2>
          <p>
            Continuando con Nodejs tendremos que realizar primero la instalación de <code>nodejs</code> desde
            la máquina de server:
          </p>

          <pre>
            <code className="language-cmd">
              {
                'curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -\n' +
                'sudo yum install -y nodejs'
              }
            </code>
          </pre>

          <p>
            Para verificar que <code>nodejs</code> fue correctamente instalado digite:
          </p>

          <pre>
            <code className="language-cmd">
              {
                'node -version\n' +
                'npm -version'
              }
            </code>
          </pre>

          <p>
            Luego, proceda a copiar el siguiente repositorio ejecutando:
          </p>

          <pre>
            <code className="language-cmd">
              {
                'git clone https://github.com/Juandiego001/rest-api-nodejs-servicios-telematicos'
              }
            </code>
          </pre>

          <p>
            Ejecute posteriormente:
          </p>

          <pre>
            <code className="language-cmd">
              {
                'cd rest-api-nodejs-servicios-telematicos\n' +
                'node index.js'
              }
            </code>
          </pre>

          <p>
            Realice la misma prueba que mencionada en la sección anterior
            para comprobar que todo está funcionando correctamente.
          </p>
        </div>

        <div className="bg-info p-5 my-5">
          <h2>Para hacer diferentes peticiones</h2>
          <p>
            Desde la máquina de Windows es posible comprobar si el proyecto está corriendo
            correctamente. Para ello deberá instalar <a href="https://www.postman.com/downloads/" target="_blank">postman</a>.
            <br /><br />
            Este es un aplicativo que permite ejecutar todas las peticiones posibles sin la necesidad de registrarse
            o iniciar sesión. Para ello, una vez ha finalizado la descarga y ha abierto el programa deberá seleccionar
            la parte de <b>skip</b> para utilizar postman <b>sin cuenta alguna</b>.
          </p>

          <img className="my-2 w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/servicios-telematicos/rest-api/instalacion-postman.png"} />

          <p className="mt-3">
            Luego para empezar a hacer las peticiones se da click en el <code>+</code> del aplicativo y
            se define la petición, ruta y contenido en el body (se debe establecer que será un JSON).
          </p>

          <img className="my-2 w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/servicios-telematicos/rest-api/utilizacion-postman.png"} />

        </div>

        <Footer />
      </div>
    </>
  )
};

RestApiCentOS.propTypes = {};

RestApiCentOS.defaultProps = {};

export default RestApiCentOS;

