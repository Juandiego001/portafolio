import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionFlaskSwagger.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';


const AplicacionFlaskSwagger = () => {

  // Setting title
  useEffect(() => {
    document.title = "Aplicación Flask + Swagger + Centos 8 | Servicios telemáticos";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>
      <h1 className="h1 text-dark">
        Aplicación Flask + Swagger + Centos 8
      </h1>

      <p>
        En la presente entrada se explicará como crear una aplicación web con Flask en una máquina virtual de Centos 8
        con swagger.
      </p>

      <p className="p-3 bg-warning">
        <b>Atención.</b> Se asume que ya se tiene el proyecto inicial configurado, es decir, que ya está funcionando el tema de apache
        con flask y en general la parte inicial (incluyendo la instalación de los módulos necesarios).
      </p>

      <h2 className="h2 text-dark mt-5">
        Introducción
      </h2>

      <p>
        En primer lugar lo que se debe hacer es copiar la carpeta de static del proyecto del profesor Oscar del siguiente <a href="https://github.com/omondragon/swagger-example" target="_blank">repo.</a> 
        {' '}Para ello, se utiliza el comando:
      </p>

      <pre>
        <code className="language-cmd">
          git clone https://github.com/omondragon/swagger-example
        </code>
      </pre>

      <p>
        El proyecto clonado se puede probar ejecutando los siguientes comandos:
      </p>

      <pre>
        <code className="language-cmd">
        {
          "cd swagger-example\n" +
          "export FLASK_APP=run.py\n" +
          "python3 -m flask run --host=0.0.0.0"
        }
        </code>
      </pre>

      <p>
        Si el proyecto está cargando correctamente en la ruta <code>/docs</code> se puede continuar con los pasos siguientes.
      </p>
      
      <h2 className="h2 text-dark mt-5">
        Copia de archivos
      </h2>

      <p>
        Los archivos más importantes para implementar swagger (además de sus instalaciones previamente hechas con <code>npm install</code>)
        son el <i>views.py</i> y la carpeta de <i>static.</i> Lo que se debe hacer a continuación es dirigirse a la carpeta donde se encuentra
        la carpeta <i>static</i> <code>(/swagger-example/app/)</code> y copiar esa carpeta ejecutando la siguiente instrucción:
      </p>

      <pre>
        <code className="language-cmd">
          cp -r static/ ../../myproject/app
        </code>
      </pre>

      <p>
        Donde <b>myproject</b> corresponde a como se ha nombrado su proyecto anteriormente.
      </p>

      <h2 className="h2 text-dark mt-5">
        Modificación del <code>views.py</code>
      </h2>

      <p>
        El <code>views.py</code> del proyecto del profesor contiene lo siguiente:
      </p>

      <pre>
        <code className="language-python">
        {
          "from flask import render_template\n" +
          "from app import app\n\n" +

          "from apispec import APISpec\n" +
          "from apispec.ext.marshmallow import MarshmallowPlugin\n" +
          "from apispec_webframeworks.flask import FlaskPlugin\n" +
          "from flask import Flask,jsonify,send_from_directory\n" +
          "from marshmallow import Schema, fields\n" +
          "from datetime import date\n\n" +
               
          "spec = APISpec(\n" +
          "    title='Flask-api-swagger-doc',\n" +
          "    version='1.0.0.',\n" +
          "    openapi_version='3.0.2',\n" +
          "    plugins=[FlaskPlugin(),MarshmallowPlugin()]\n" +
          ")\n\n" +

          "@app.route('/api/swagger.json')\n" +
          "def create_swagger_spec():\n" +
          "        return jsonify(spec.to_dict())\n\n" +

          "class ArticleResponseSchema(Schema):\n" +
          "        id = fields.Int()\n" +
          "        title = fields.Str()\n" +
          "        body = fields.Str()\n" +
          "        author = fields.Str()\n" +
          "        create_date = fields.Date()\n" +

          "class ArticleListResponseSchema(Schema):\n" +
          "        article_list = fields.List(fields.Nested(ArticleResponseSchema))\n" +

          "@app.route('/articles')\n" +
          "def article():\n" +
          '    """Get List of Articles\n' +
          "        ---\n" +
          "        get:\n" +
          "            description: Get List of Articles\n" +
          "            responses:\n" +
          "                200:\n" +
          "                    description: Return an article list\n" +
          "                    content:\n" +
          "                        application/json:\n" +
          "                            schema: ArticleListResponseSchema\n" +
          '    """"\n\n' +

          "    articles = [\n" +
          "        {\n" +
          "            'id': 1,\n" +
          "            'title': 'Article one',\n" +
          "            'body': 'Lorem ipsum',\n" +
          "            'author': 'Gabo',\n" +
          "            'create_date': date(2021,10,4)\n" +
          "        },\n" +
          "        {\n" +
          "            'id': 2,\n" +
          "            'title': 'Article two',\n" +
          "            'body': 'Lorem ipsum',\n" +
          "            'author': 'Perez',\n" +
          "            'create_date': date(2021,10,12)\n" +
          "        }\n" +
          "    ]\n\n" +

          "    return ArticleListResponseSchema().dump({'article_list':articles})\n\n" +

          "with app.test_request_context():\n" +
          "    spec.path(view=article)\n\n" +

          "@app.route('/docs')\n" +
          "@app.route('/docs/<path:path>')\n" +
          "def swagger_docs(path=None):\n" +
          "    if not path or path == 'index.html':\n" +
          "        return render_template('index.html',base_url='/docs')\n" +
          "    else:\n" +
          "        return send_from_directory('static',path)\n"
        }
        </code>
      </pre>

        <p>
          Así, la modificación que le hacemos a nuestro <code>views.py</code> es agregarle todo este archivo pero sin reemplazar lo 
          que se tenía anteriormente. Lo único que debemos revisar es la función <code>article</code> que el profesor
          declaró en su archivo.
        </p>

        <p>
          Es decir, esta función se toma y se le puede cambiar para dejarla de la siguiente manera:
        </p>

        <pre>
          <code className="language-python">
            {
              '@app.route("/articles-api")\n' +
              "def articles_api():\n" +
              '    """Get List of Articles\n' +
              "        ---\n" +
              "        get:\n" +
              "            description: Get List of Articles\n" +
              "            responses:\n" +
              "                200:\n" +
              "                    description: Return an article list\n" +
              "                    content:\n" +
              "                        application/json:\n" +
              "                            schema: ArticleListResponseSchema\n" +
              '    """\n' +
              "    articles = Articles()\n" +
              "    return ArticleListResponseSchema().dump({'article_list':articles})\n\n" +
              "# Posteriormente esta funcion se le debe modificar el view=como-se-llama-su-funcion\n" +
              "with app.test_request_context():\n" +
              "  spec.path(view=articles_api)\n"
            }
          </code>
        </pre>

        <p>
          Cuando se modifique esta función y se haga referencia en la última función mencionada,
          ya se debe poder visualizar los datos en la ruta de <code>/docs.</code> Se puede
          probar con el comando:
        </p>

        <pre>
          <code className="langauge-cmd">
            python3 -m flask run --host=0.0.0.0 
          </code>
        </pre>

        <p>
          Finalmente, lo que queda configurar es el apache.
        </p>
    </Container>
  </div>
)};

AplicacionFlaskSwagger.propTypes = {};

AplicacionFlaskSwagger.defaultProps = {};

export default AplicacionFlaskSwagger;
