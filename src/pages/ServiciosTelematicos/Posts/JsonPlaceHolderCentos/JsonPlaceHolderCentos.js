import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './JsonPlaceHolderCentos.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const JsonPlaceHolderCentos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>JSON Placeholder + Centos 8 | Servicios telemáticos</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Desarrollo de una API Rest utilizando 
          el framework de python Flask utilizando 
          los datos que provee la plataforma de 
          JSONPlaceholder con CentOS 8."></meta>
        <meta name="keywords" content="
          json placeholder centos,
          json placeholder centos 8,
          JSON Placeholder CentOS 8,
          JSON Placeholder en CentOS 8 Servicios,
          JSON Placeholder en CentOS 8 Servicios telemáticos,
          JSON Placeholder en CentOS 8 Servicios telematicos,
          JSON Placeholder en CentOS 8 Servicios telemáticos,
          JSON Placeholder en CentOS 8 Servicios telematicos,
          JSON Placeholder + CentOS 8 Servicios,
          JSON Placeholder + CentOS 8 Servicios telemáticos,
          JSON Placeholder + CentOS 8 Servicios telematicos,
          JSON Placeholder + CentOS 8 Servicios telemáticos,
          JSON Placeholder + CentOS 8 Servicios telematicos,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">

          <h1 className="text-center">
            JSON Placeholder + Apache + CentOS 8
          </h1>

          <p className="mt-3">
            En la práctica de hoy se clonará un repositorio del profesor Oscar Mondargón
            con el fin de implementar una especie de aplicativo/función que permita
            interactuar con la fake API de JSON Placeholder.
          </p>

          <h2 className="mt-5">
            Inicialización de la máquina e instalación de los módulos necesarios
          </h2>

          <p>
            Para comenzar, definiremos la máquina y la iniciaremos. Para esto, desde una consola de
            comandos crearemos una carpeta y dentro de ella generaremos el archivo
            <span className="badge text-dark">Vagrantfile.</span>
          </p>

          <pre>
            <code className="language-console">
              {
                '# Creación de carpeta y generación de archivo Vagrantfile\n' +
                'mkdir jsonph-centos\n' +
                'cd jsonph-centos\n' +
                'vagrant init\n\n' +

                '# Para editar el Vagrantfile\n' +
                'notepad Vagrantfile'
              }
            </code>
          </pre>

          <p>
            Luego de esto, lo que haremos será copiar y pegar la siguiente definición
            de máquina CentOS 8.
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
            Posteriormente, ingresaremos a la máquina ejecutando los siguientes comandos:
          </p>

          <pre>
            <code className="language-console">
              {
                '# Para iniciar la máquina server\n' +
                'vagrant up\n' +
                '# Para acceder a la máquina por SSH\n' +
                'vagrant ssh\n' +
                '# Para escalar privilegios como root\n' +
                'sudo -i\n\n' +

                '# Instalación de módulos necesarios\n' +
                'sudo sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-*\n' +
                'sudo yum update -y\n' +
                'sudo yum install epel-release -y\n' +
                'sudo yum install vim -y\n' +
                'sudo yum install httpd -y\n' +
                'sudo yum install git -y\n'
              }
            </code>
          </pre>

          <h2 className="mt-5">
            Clonación del repositorio y configuración del servidor Apache
          </h2>

          <p>
            Cuando vayamos a clonar el repositorio podremos ahorrarnos un
            paso si copiamos el proyecto directamente sobre
            la carpeta <code>www.</code> Para esto, haremos lo siguiente:
          </p>

          <pre>
            <code className="language-console">
              {
                '# Clonación del repositorio directamente sobre los archivos de apache\n' +
                'cd /var/www\n' +
                'git clone https://github.com/omondragon/jsonplacehodertest jsonph\n'
              }
            </code>
          </pre>

          <p>
            En el archivo de configuración de apache <code>httpd.conf</code>{' '}
            ubicado en
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">/etc/httpd/conf</span>{' '}
            tendremos que agregar nuestro
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">Virtualhost:</span>{' '}
          </p>

          <pre>
            <code>
              {
                '<VirtualHost *>\n' +
                '  DocumentRoot "/var/www/jsonph"\n' +
                '  ServerName www.servicios.com\n' +
                '  <Directory "/var/www/jsonph">\n' +
                '      Order deny,allow\n' +
                '      Allow from all\n' +
                '  </Directory>\n' +
                '</VirtualHost>\n'
              }
            </code>
          </pre>

          <p>
            A su vez, tendremos que verificar los permisos
            de la carpeta y de los archivos
            que se encuentran en la clonación del proyecto (
            <span className="badge text-dark m-0 p-0 text-wrap">/var/www/jsonph/</span>
            ). Estos permisos
            se pueden verificar utilizando el comando
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">ls -l</span> y deben
            corresponder a:
          </p>

          <pre>
            <code>
              {
                '# Permisos de la carpetas ubicadas en www\n' +
                'drwxr-xr-x. 2 root root    6 Nov 12  2021 cgi-bin\n' +
                'drwxr-xr-x. 2 root root    6 Feb  7 20:31 html\n' +
                'drwxr-xr-x. 3 root root 52 Feb  7 20:55 jsonph\n\n' +

                '# Permisos de los archivos dentro de la carpeta jsonph/\n' +
                '-rw-r--r-- 1 root apache  437 Feb  7 20:46 index.html\n' +
                '-rw-r--r-- 1 root apache 1004 Feb  7 20:55 users.js'
              }
            </code>
          </pre>

          <p>
            Para asegurarnos que los archivos y la carpeta contengan los permisos correctos
            tendremos que ejecutar:
          </p>

          <pre>
            <code className="language-console">
              {
                '# Permisos de la carpetas ubicadas en www\n' +
                'chmod 755 cgi-bin\n' +
                'chmod 755 html\n' +
                'chmod 755 jsonph\n\n' +

                '# Permisos de los archivos dentro de la carpeta jsonph/\n' +
                'chmod 644 index.html\n' +
                'chmod 644 users.js'
              }
            </code>
          </pre>

          <h2 className="mt-5">
            Deshabilitar SELinux y Firewall
          </h2>

          <p>
            Es posible que aunque los permisos y la configuración de los archivos sea correcta,
            aún no se pueda visualizar la página por ello, lo recomendable es hacer lo siguiente:
          </p>

          <ol>
            <li>
              Editar el archivo denominado de SELinux ejecutando
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">vim /etc/selinux/config</span>{' '}
              y modificando el valor
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">SELINUX=enforcing</span> por
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">SELINUX=disabled.</span>
            </li>

            <li>Luego se debe reiniciar la máquina y volver a ingresar por ssh.</li>
            <li>
              Una vez se ha ingresado se sugiere detener el servicio de firwalld ejecutando
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">systemctl stop firwalld.</span>
            </li>
          </ol>

          <h2 className="mt-5">
            Modificación de archivos e iniciación de apache
          </h2>

          <p>
            Con la configuración actual de los archivos se puede ejecutar el proyecto. Sin
            embargo, se ha optado por una configuración diferente con el objetivo
            de añadir algo de estilos (si se desea, se puede saltar este paso y continuar
            directamente con la ejecución de apache). Así pues, el archivo
            main.html lo he renombrado a
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">index.html</span>{' '}
            y lo he dejado de la siguiente manera:
          </p>

          <pre>
            <code className="language-html">
              {
                '<!DOCTYPE html>\n' +
                '<html>\n' +
                '  <head>\n' +
                '    <!-- Bootstrap -->\n' +
                '    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">\n' +
                '  </head>\n' +
                '  <body>\n\n' +

                '    <h1 class="text-light text-center bg-primary m-0 py-2">Test JsonPlaceholder</h1>\n' +
                '    <div id="app"></div>\n' +
                '    <script src="users.js" type="module"></script>\n' +
                '  </body>\n' +
                '</html>\n'
              }
            </code>
          </pre>

          <p>
            Mientras que al archivo
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">users.js</span>{' '}
            se configuró de la siguiente manera:
          </p>

          <pre>
            <code className="language-javascript">
              {
                "const API_URL = 'https://jsonplaceholder.typicode.com';'\n\n" +

                'const xhr = new XMLHttpRequest();\n\n' +

                '// Función manejadora\n' +
                'function onRequestHandler() {\n' +
                '    if(this.readyState == 4 && this.status == 200){\n' +
                '        // 0 = Unset, no se ha llamado al método open\n' +
                '        //1 = Opened, se ha llamado al método open. del objeto xhr\n' +
                '        //2 = HEADERS_RECEIVED, se esta llamando al metodo send ()\n' +
                '        //3 = LOADING, se esta cargando, es decir, esta recibinedo la respuesta.\n' +
                '        //4 = DONE, se ha completado la operación.\n' +
                '        const data = JSON.parse(this.response);\n' +
                '        const HTMLResponse = document.querySelector(' + "'#app'" + ');\n' +
                '        let theUl = document.createElement(' + "'ul'" + ');\n' +
                '        theUl.className = "bg-primary py-3";\n\n' +

                '        for (let i = 0; i < data.length; i++) {\n' +
                '          let user = data[i];\n' +
                '          let username = user.username;\n' +
                '          let email = user.email;\n' +
                '          let theLi = document.createElement(' + "'li'" + ');\n' +
                '          theLi.className = "text-light py-2";\n' +
                '          theLi.innerHTML = ' + "'Nombre de usuario: ' + username + 'Correo: ' + email;\n" +
                '          theUl.appendChild(theLi);\n\n' +
                '        }\n\n' +

                '        HTMLResponse.appendChild(theUl);\n' +
                '    }\n' +
                '}\n\n' +

                'xhr.addEventListener("load", onRequestHandler);\n' +
                'xhr.open("GET", `${API_URL}/users`);\n' +
                'xhr.send();\n'
              }
            </code>
          </pre>

          <h2 className="mt-5">
            Rutas opcionales
          </h2>

          <p>
            El proyecto se puede configurar para las siguientes rutas:
          </p>

          <ul>
            <li>Albums (/albums).</li>
            <li>Posts (/posts).</li>
            <li>Users (/users - actual).</li>
          </ul>

          <p>
            Basta con decidir con qué rutas o que datos falsos se desea probar
            y ejecutar los llamados correspondientes cambiando la ruta donde se
            visualiza el
            {' '}<span className="badge text-dark p-0 m-0">xhr.open("GET", `${"{API_URL}"}/users`);</span>{' '}
            por una ruta ejemplo
            {' '}<span className="badge text-dark p-0 m-0">xhr.open("GET", `${"{API_URL}"}/posts`);</span>{' '}.
            Luego se deberá cambiar las valores obtenidos de
            {' '}<span className="badge text-dark p-0 m-0">email, username, etc.</span>{' '}
            Para esto se sugiere hacer un
            {' '}<span className="badge text-dark p-0 m-0">console.log(data)</span>{' '}
            para visualizar que datos brinda el llamado a la fake API.
          </p>

          <h2 className="mt-5">
            Finalización
          </h2>

          <p>
            Esta ha sido una explicación general para utilizar
            la Fake API de JSON Placeholder y desplegar su funcionamiento con Apache en CentOS 8.
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

JsonPlaceHolderCentos.propTypes = {};

JsonPlaceHolderCentos.defaultProps = {};

export default JsonPlaceHolderCentos;
