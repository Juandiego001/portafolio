import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionFlaskSwagger.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const AplicacionFlaskSwagger = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Aplicación Flask + Swagger + CentOS 8 | Servicios telemáticos</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Desarrollo de una API Rest con python utilizando 
          el framework Flask y empleando el aplicativo 
          de documentación de API Swagger."></meta>
        <meta name="keywords" content="
          aplicación flask mysql swagger centos,
          aplicación flask mysql swagger centos 8,
          Aplicación Flask MySQL Swagger CentOS 8,
          Aplicación Flask con MySQL y Swagger en CentOS 8 Servicios,
          Aplicacion Flask con MySQL y Swagger en CentOS 8 Servicios telemáticos,
          Aplicacion Flask con MySQL y Swagger en CentOS 8 Servicios telematicos,
          Aplicación Flask con MySQL y Swagger en CentOS 8 Servicios telemáticos,
          Aplicación Flask con MySQL y Swagger en CentOS 8 Servicios telematicos,
          Aplicación Flask + MySQL + Swagger + CentOS 8 Servicios,
          Aplicacion Flask + MySQL + Swagger + CentOS 8 Servicios telemáticos,
          Aplicacion Flask + MySQL + Swagger + CentOS 8 Servicios telematicos,
          Aplicación Flask + MySQL + Swagger + CentOS 8 Servicios telemáticos,
          Aplicación Flask + MySQL + Swagger + CentOS 8 Servicios telematicos,
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
            Aplicación Flask + Swagger + Centos 8
          </h1>

          <p>
            En la presente entrada se explicará como crear una aplicación web con Flask en una máquina virtual de Centos 8
            con la suite de herramientas para analizar API's denominada <span className="badge text-dark m-0 p-0">Swagger.</span>{' '}
            Para ello, se utilizará el repositorio del profesor Oscar Mondragón que contiene un proyecto con Swagger
            ya implementado.
          </p>

          {/* TENER EN CUENTA ESTO */}
          {/* <p className={"p-3 " + styles.BgWarning}>
            <b>Atención.</b> Se asume que ya se tiene el proyecto inicial configurado, es decir, que ya está funcionando el tema de apache
            con flask y en general la parte inicial (incluyendo la instalación de los módulos necesarios).
          </p> */}

          <h2 className="h2 text-dark mt-5">
            Definición de máquinas en Vagrantfile
          </h2>

          <p>
            Para comenzar, tendremos que tener en cuenta el siguiente <code>Vagrantfile:</code>
          </p>

          <pre>
            <code className="language-ruby">
              {
                '# -*- mode: ruby -*-\n' +
                '# vi: set ft=ruby :\n' +

                'Vagrant.configure("2") do |config|\n' +
                '  config.vm.define :server do |server|\n' +
                '    server.vm.box = "centos/8"\n' +
                '    server.vm.network "private_network", ip: "192.168.56.3"\n' +
                '    server.vm.hostname = "server"\n' +
                '  end\n' +
                'end'
              }
            </code>
          </pre>

          <p>
            Posteriormente desde una consola de comandos nos dirigiremos a la carpeta del Vagrantfile e
            incializaremos la máquina y accederemos a ella con los comandos:
          </p>

          <pre>
            <code className="language-console">
              {
                "vagrant up\n" +
                "vagrant ssh server"
              }
            </code>
          </pre>

          <h2 className="h2 text-dark">
            Instalación de modulos necesarios
          </h2>

          <p>
            Para instalar los módulos necesarios se muestran los comandos a seguir
            en la parte inferior (si lo desea, puede copiar y pegar los comandos).
            Luego, copiamos el repositorio del profesor Oscar. El repositorio puede ser
            encontrado en el siguiente{' '}
            <a href="https://github.com/omondragon/swagger-example" target="_blank">link.</a>
          </p>

          <pre>
            <code className="language-console">
              {
                "# Para inciar como root (contraseña 'vagrant', opcional)\n" +
                "su -\n" +
                "# ¡Importante! Se debe actualizar el mirror, de lo contrario no se podrá actualizar el repositrio\n" +
                'sudo sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-*\n' +
                "# Para actualizar el repositorio\n" +
                "sudo yum update -y\n" +
                "# Instalación de python\n" +
                "sudo yum install -y python3\n" +
                "# Instalación de git\n" +
                "sudo yum install git -y\n" +
                "# Instalación del módulo de flask\n" +
                "sudo pip3 install flask\n" +
                "# Instalación de net-tools (opcional)\n" +
                "sudo yum install net-tools -y\n" +
                "# Clonación del repositorio\n" +
                "git clone https://github.com/omondragon/swagger-example\n" +
                "# Instalación de net-tools (opcional)\n" +
                "sudo yum install net-tools -y\n" +
                "# Con este módulo podremos recordar nuestra ip utilizando el comando ifconfig"
              }
            </code>
          </pre>

          <h2 className="h2 text-dark">
            Probar el proyecto
          </h2>

          <p>
            El proyecto clonado se puede probar dirigiendose a la carpeta donde
            se clonó el repo y ejecutando los siguientes comandos:
          </p>

          <pre>
            <code className="language-console">
              {
                "# (Dirigirse a la carpeta del proyecto clonado)\n" +
                "cd swagger-example\n\n" +
                "export FLASK_APP=run.py\n" +
                "python3 -m flask run --host=0.0.0.0"
              }
            </code>
          </pre>

          <p>
            Si el proyecto está funcionando correctamente,
            podemos verificarlo digitando en el navegador:
            {' '}<code>192.168.56.3:5000/docs.</code>{' '}
            Confirmado esto, se puede continuar con los
            siguientes pasos.
          </p>

          <h2 className="h2 text-dark mt-5">
            Copia de archivos
          </h2>

          <p>
            Los archivos más importantes para implementar la API de Swagger son el{' '}
            <code>views.py</code> y la carpeta de <code>static.</code> Lo que hacemos
            es copiar  la carpeta static (que se encuentra en{' '}
            <pre className="d-inline"><code className="nohighlight">/swagger-example/app/</code></pre>)
            ejecutando la siguiente instrucción:
          </p>

          <pre>
            <code className="language-console">
              {
                "# Dependiendo de donde se ha clonado el repo\n" +
                "# 'myproject' corresponde a la carpeta de su proyecto\n" +
                'cp -r static/ ../../myproject/app'
              }
            </code>
          </pre>

          <h2 className="text-dark mt-5">
            Modificación del <code>index.html</code>
          </h2>

          <p>
            Luego de copiar los archivos necesarios, tendremos que dirigirnos a la carpeta de{' '}
            <code>templates</code>{' '} y modificar el <code>index.html.</code>{' '}
            Lo que se observará es que hay una sección del código de <code>scripts</code>{' '}
            donde se establece una dirección IP. Algo similar a:
          </p>

          <pre>
            <code className="language-javascript">
              {
                '// Begin Swagger UI call region\n' +
                'const ui = SwaggerUIBundle({\n' +
                '  url: "http://192.168.50.3:5000/api/swagger.json", /* AQUI DEBE CAMBIAR LA DIRECCIÓN POR LA DE SU MÁQUINA */\n' +
                "  dom_id: '#swagger-ui',\n" +
                '  deepLinking: true,\n' +
                '  presets: [\n' +
                '    SwaggerUIBundle.presets.apis,\n' +
                '    SwaggerUIStandalonePreset\n' +
                '  ],\n' +
                '  plugins: [\n' +
                '    SwaggerUIBundle.plugins.DownloadUrl\n' +
                '  ],\n' +
                '  layout: "StandaloneLayout"\n' +
                '});\n' +
                '// End Swagger UI call region'
              }
            </code>
          </pre>

          <p>
              Donde se visualiza el mensaje de advertencia, se debe reemplazar la dirección IP por la irección de la máquina del lector.
              Por ejemplo, en mi caso, la url quedaría tal que:{' '}
              <code>http://192.168.56.3:5000/api/swagger.json.</code>
          </p>

          <h2 className="h2 text-dark mt-5">
            Modificación del <code>views.py</code>
          </h2>

          <p>
            Hasta el momento el proyecto ha de funcionar con normalidad. Para visualizarlo, 
            ejecutelo con el comando mencionado anteriormente y 
            acceda a la ruta <code>/docs</code> en el navegador. Sin embargo,
            solo podremos contemplar dos libros que vienen con el repositorio
            del docente. Por ello, lo que haremos a continuación es modificar
            medianamente el código para poder agregar libros a una función y que 
            se retornen en la función al momento de visualizar los resultados. Para
            esto se crea un archivo llamado <code>articles.py</code> que contenga
            una función llamada <code>Articles</code> de la siguiente manera:
          </p>

          <pre>
            <code>
              {
                
              }
            </code>
          </pre>

          {/* <pre>
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
                "        create_date = fields.Date()\n\n" +

                "class ArticleListResponseSchema(Schema):\n" +
                "        article_list = fields.List(fields.Nested(ArticleResponseSchema))\n\n" +

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
                "        return send_from_directory('static', path)\n"
              }
            </code>
          </pre> */}

          <p>
            Así, la modificación que le hacemos a nuestro <code>views.py</code> es agregarle todo este archivo pero sin reemplazar lo
            que se tenía anteriormente. Lo único que debemos revisar es la función <code>article</code> que el profesor
            declaró en su archivo. Es decir, esta función se toma y se le puede cambiar para dejarla de la siguiente manera:
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
        </div>

        <Footer />
      </div>
    </>
  )
};

AplicacionFlaskSwagger.propTypes = {};

AplicacionFlaskSwagger.defaultProps = {};

export default AplicacionFlaskSwagger;
