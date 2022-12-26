import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './JsonPlaceHolderCentos.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const JsonPlaceHolderCentos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Json Placeholder + Centos 8 | Servicios telemáticos</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Desarrollo de una API Rest utilizando 
          el framework de python Flask utilizando 
          los datos que provee la plataforma de 
          JSONPlaceholder con CentOS 8."></meta>
        <meta name="keywords" content="
          jsonplaceholder centos,
          jsonplaceholder centos 8,
          JSONPlaceholder CentOS 8,
          JSONPlaceholder en CentOS 8 Servicios,
          JSONPlaceholder en CentOS 8 Servicios telemáticos,
          JSONPlaceholder en CentOS 8 Servicios telematicos,
          JSONPlaceholder en CentOS 8 Servicios telemáticos,
          JSONPlaceholder en CentOS 8 Servicios telematicos,
          JSONPlaceholder + CentOS 8 Servicios,
          JSONPlaceholder + CentOS 8 Servicios telemáticos,
          JSONPlaceholder + CentOS 8 Servicios telematicos,
          JSONPlaceholder + CentOS 8 Servicios telemáticos,
          JSONPlaceholder + CentOS 8 Servicios telematicos,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div className="mb-4">
        <Header />

        <div className="container-fluid my-5 px-5">
          <p>
            Para agregar en el <code>httpd.conf</code>:
          </p>

          <pre>
            <code>
              {
                '<VirtualHost *>\n' +
                '  DocumentRoot "/var/www/jsonplaceholdertest"\n' +
                '  ServerName www.servicios.com\n' +
                '  <Directory "/var/www/jsonplaceholdertest">\n' +
                '      Order deny,allow\n' +
                '      Allow from all\n' +
                '  </Directory>\n' +
                '</VirtualHost>\n'
              }
            </code>
          </pre>

          <p>
            Para modificar el <code>user.js:</code>
          </p>

          <pre>
            <code>
              {
                "const API_URL = 'https://jsonplaceholder.typicode.com';\n\n" +

                "const xhr = new XMLHttpRequest();\n\n" +

                "//Función manejadora\n" +
                "function onRequestHandler() {\n" +
                "    if(this.readyState == 4 && this.status == 200){\n" +
                "        // 0 = Unset, no se ha llamado al método open\n" +
                "        //1 = Opened, se ha llamado al método open. del objeto xhr\n" +
                "        //2 = HEADERS_RECEIVED, se esta llamando al metodo send ()\n" +
                "        //3 = LOADING, se esta cargando, es decir, esta recibinedo la respuesta.\n" +
                "        //4 = DONE, se ha completado la operación.\n" +
                "        const data = JSON.parse(this.response);\n" +
                "        const HTMLResponse = document.querySelector('#app');\n" +
                "\n" +
                "        const tpl = data.map(post => `<li>User id: ${post.userId} Post id:  ${post.id} Post title: ${post.title} Post body: ${post.body}</li>  `);\n" +
                "        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`\n" +
                "    }\n" +
                "}\n" +
                "\n" +
                'xhr.addEventListener("load", onRequestHandler);\n' +
                'xhr.open("GET", `${API_URL}/posts`);\n' +
                "xhr.send();\n"
              }
            </code>
          </pre>
        </div>

        <Footer />
      </div>
    </>
  )
};

JsonPlaceHolderCentos.propTypes = {};

JsonPlaceHolderCentos.defaultProps = {};

export default JsonPlaceHolderCentos;
