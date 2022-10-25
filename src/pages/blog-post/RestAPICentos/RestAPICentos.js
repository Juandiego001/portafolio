import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './RestAPICentos.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const RestApiCentos = () => {

  // Setting title
  useEffect(() => {
    document.title = "Rest API + Centos 8 | Servicios telemáticos";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>
        <h1 className="h1 text-dark">
          Rest API + Centos 8
        </h1>

        <p>
          En la presente entrada se explicará como desarrollar una Rest API utilizando el framework
          de python llamado flask y nodejs con express. Esta práctica la estaremos desarrollando desde una máquina local
          y finalmente la desplegaremos en una máquina virtual Centos 8.
        </p>

        <div className="mt-5">
          <h2>
            Desarrollo express
          </h2>

          <p>
            A continuación se listarán una serie de comandos y archivos que se deben ejecutar y crear 
            con el objetivo de probar de manera rápida el aplicativo y hacer las modificaciones deseadas. 
            <br /><br />
            Para comenzar, desde su <code>cmd:</code>
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
            Posteriormente, copie lo siguiente y peguelo en su archivo <code>Vagrantfile:</code>
          </p>

          <pre>
            <code className="language-ruby">
              {
                '# -*- mode: ruby -*-\n' +
                '# vi: set ft=ruby :\n\n' +

                'Vagrant.configure("2") do |config|\n' +
                '  config.vm.define :server do |server|\n' +
                '    server.vm.box = "centos/8"\n' +
                '    server.vm.network "private_network", ip: "192.168.56.3"\n' +
                '    server.vm.hostname = "server"\n' +
                '  end\n\n' +

                '  config.vm.define :client do |client|\n' +
                '    client.vm.box = "centos/8"\n' +
                '    client.vm.network "private_network", ip: "192.168.56.4"\n' +
                '    client.vm.hostname = "client"\n' +
                '  end\n' +
                'end\n'
              }
            </code>
          </pre>

          <p>
            Ejecute el siguiente comando desde su <code>cmd</code> ubicandose
            en la misma carpeta donde editó su <code>Vagrantfile</code> anterior:
          </p>

          <pre>
            <code className="language-cmd">
              {
                'vagrant up server'
              }
            </code>
          </pre>

          <p>
            Posteriormente, conectese a su máquina:
          </p>

          <pre>
            <code>
              vagrant ssh server
            </code>
          </pre>

          <p>
            Luego realice lo siguiente desde su máquina centos <code>server:</code>
          </p>

          <pre>
            <code className="language-cmd">
              {
                'sudo -i\n' +
                'sudo sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-*\n' +
                'sudo yum update -y\n' +
                'sudo yum install epel-release -y\n' +
                'sudo yum install vim -y\n' +
                'sudo yum install python3-pip -y\n' +
                'sudo pip3 install Flask\n' +
                'sudo yum install git -y'
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

    </Container>
  </div>
  )
};

RestApiCentos.propTypes = {};

RestApiCentos.defaultProps = {};

export default RestApiCentos;

