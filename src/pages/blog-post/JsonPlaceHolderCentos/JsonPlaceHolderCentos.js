import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './JsonPlaceHolderCentos.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const JsonPlaceHolderCentos = () => {

  // Setting title
  useEffect(() => {
    document.title = "Json Placeholder + Centos 8 | Servicios telemáticos";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
      <Header />
      <Menu />

      <Container className="mt-4 px-5" fluid>
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
      </Container>
    </div>
  )
};

JsonPlaceHolderCentos.propTypes = {};

JsonPlaceHolderCentos.defaultProps = {};

export default JsonPlaceHolderCentos;
