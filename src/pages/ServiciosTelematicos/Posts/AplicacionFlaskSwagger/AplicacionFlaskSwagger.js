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
          aplicación flask mysql swagger apache centos,
          aplicación flask mysql swagger apache centos 8,
          Aplicación Flask MySQL Swagger Apache CentOS 8,
          Aplicación Flask con MySQL y Swagger con Apache en CentOS 8 Servicios,
          Aplicacion Flask con MySQL y Swagger con Apache en CentOS 8 Servicios telemáticos,
          Aplicacion Flask con MySQL y Swagger con Apache en CentOS 8 Servicios telematicos,
          Aplicación Flask con MySQL y Swagger con Apache en CentOS 8 Servicios telemáticos,
          Aplicación Flask con MySQL y Swagger con Apache en CentOS 8 Servicios telematicos,
          Aplicación Flask + MySQL + Swagger + Apache + CentOS 8 Servicios,
          Aplicacion Flask + MySQL + Swagger + Apache + CentOS 8 Servicios telemáticos,
          Aplicacion Flask + MySQL + Swagger + Apache + CentOS 8 Servicios telematicos,
          Aplicación Flask + MySQL + Swagger + Apache + CentOS 8 Servicios telemáticos,
          Aplicación Flask + MySQL + Swagger + Apache + CentOS 8 Servicios telematicos,
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
            Aplicación Flask + Swagger + Centos 8
          </h1>

          <p className="mt-3">
            En la presente entrada se explicará como crear una aplicación web con Flask en una máquina virtual de Centos 8
            con la suite de herramientas para analizar API's denominada <span className="badge text-dark m-0 p-0 text-wrap">Swagger.</span>{' '}
            Para ello, se utilizará el repositorio del profesor Oscar Mondragón que contiene un proyecto con Swagger
            ya implementado. Además, configuraremos el servidor <span className="badge text-dark m-0 p-0 text-wrap">Apache</span>{' '}
            para ejecutar el proyecto.
          </p>

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
                "# Instalación del editor VIM\n" +
                "sudo yum install vim -y\n" +
                "# Instalación de net-tools (opcional)\n" +
                "sudo yum install net-tools -y\n" +
                "# Con este módulo podremos recordar nuestra ip utilizando el comando ifconfig"
              }
            </code>
          </pre>

          <p>
            Posteriormente, tendremos que instalar ciertos módulos de python, ejecutando los siguientes comandos:
          </p>

          <pre>
            <code className="language-console">
              {
                "pip3 install -U apispec\n" +
                "pip3 install marshmallow\n" +
                "pip3 install apispec-webframeworks"
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
            <code className="nohighlight">/swagger-example/app/</code>)
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
            Donde se visualiza el mensaje de advertencia, se debe reemplazar la dirección IP por la dirección de la máquina del lector.
            Por ejemplo, en mi caso, la URL quedaría tal que:{' '}
            <code>http://192.168.56.3:5000/api/swagger.json.</code>
          </p>

          <h2 className="h2 text-dark mt-5">
            Modificación del <code>views.py</code>
          </h2>

          <p>
            Hasta el momento el proyecto ha de funcionar con normalidad. Para visualizarlo,
            ejecútelo con el comando mencionado anteriormente y
            acceda a la ruta <code>/docs</code> en el navegador. Sin embargo,
            solo podremos contemplar dos libros que vienen con el repositorio
            del docente. Por ello, lo que haremos a continuación es modificar
            medianamente el código para poder agregar libros a una función y que
            se retornen en la función al momento de visualizar los resultados. Para
            esto se crea un archivo llamado <code>articles.py</code> en la carpeta
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">/app</span>{' '}
            donde se encuentre su respectivo archivo <code>__init__.py</code> y que contenga
            una función llamada <code>Articles</code> de la siguiente manera:
          </p>

          <pre>
            <code className="language-python">
              {
                'from datetime import date\n\n' +

                'def Articles():\n' +
                '    theArticles = [\n' +
                '                {\n' +
                '                    "id": 1,\n' +
                '                    "title": "Libro 1",\n' +
                '                    "body": "Descripcion libro 1",\n' +
                '                    "author": "Autor 1",\n' +
                '                    "create_date": date(2023,1,5)\n' +
                '                }\n' +
                '            ]\n\n' +

                '    return theArticles\n'
              }
            </code>
          </pre>

          <p>
            Luego, regresamos a nuestro archivo <code>views.py</code>,
            importamos la función Articles del archivo
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">articles.py</span>{' '}
            y modificamos la función de <code>article</code> aludiendo a la función
            que hemos creado:
          </p>

          <pre>
            <code className="language-python">
              {
                'from app.articles import Articles\n' +
                '# ...\n' +
                '@app.route("/articles")\n' +
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
                '    """\n' +
                "    articles = Articles() # Aqui se agrega la función creada\n" +
                "    return ArticleListResponseSchema().dump({'article_list':articles})\n\n" +

                "with app.test_request_context():\n" +
                "  spec.path(view=article)\n" +
                "# ..."
              }
            </code>
          </pre>

          <p>
            Una vez hecho esto se podrá ejecutar el proyecto debidamente (es posible
            agregar más libros a la función creada sencillamente creando nuevos
            objetos tal y como se configuró el primer libro).
          </p>

          <pre>
            <code className="language-console">
              {
                "# Ejecutar el proyecto\n" +
                "python3 -m flask run --host=0.0.0.0\n" +
                "# Recordar visualizar en la URL 192.168.56.3:5000"
              }
            </code>
          </pre>

          <p>
            En caso de que no se pueda visualizar puede deberse a configuraciones del firewall. En ese caso
            hay dos posibles sugerencias:
          </p>

          <ol>
            <li>Deshabilitar el firewall.</li>
            <li>Agregar reglas al firewall.</li>
          </ol>

          <p>
            Para
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">deshabilitar el firewall</span>{' '}
            lo único que se debe hacer es ejecutar la siguiente instrucción:
          </p>

          <pre>
            <code className="language-console">
              {
                "# Detenimiento del servicio de firewall\n" +
                "service firewalld stop\n" +
                "# Verificación del detenimiento\n" +
                "service firewalld status"
              }
            </code>
          </pre>

          <p>
            Para
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">agregar reglas al firewall</span>{' '}
            correspondientes a los servicios web se sugiere ejecutar:
          </p>

          <pre>
            <code className="language-console">
              {
                "# Activación de firewall-cmd\n" +
                "service firewalld start\n" +
                "# Permitir peticiones al puerto 80\n" +
                "firewall-cmd --add-port=80/tcp --permanent\n" +
                "# Permitir peticiones al puerto 22\n" +
                "firewall-cmd --add-port=22/tcp --permanent\n" +
                "# Recargar el firewall luego de añadir las reglas\n" +
                "firewall-cmd --reload\n" +
                "# Verificacion de las reglas añadidas\n" +
                "# (Generalmente siempre es de la zona por defecto o sea la zona pública)\n" +
                "firewall-cmd --zone=public --list-all\n" +
                "# Si aparece:\n" +
                "# ports: 80/tcp 22/tcp\n" +
                "# es porque se han añadido los puertos correctamente"
              }
            </code>
          </pre>

          <h2 className="h2 text-dark mt-5">
            Configuración del servidor Apache
          </h2>

          <h3 className="text-dark mt-3">
            Instalación de módulos adicionales
          </h3>

          <p>
            Antes de configurar el servidor apache tendremos que instalar los siguientes modulos:
          </p>

          <pre>
            <code className="language-console">
              {
                "# Instalación del servidor apache\n" +
                "sudo yum install httpd -y\n" +
                "# Instalación del módulo mod_wsgi\n" +
                "# (permite desplegar Flask en Apache)\n" +
                "sudo yum install python3-mod_wsgi -y\n" +
                "# Instalación de flask_cors\n" +
                "# (en nuestro caso, permitirá visualizar la página desde otra máquina)\n" +
                "pip3 install -U flask-cors\n"
              }
            </code>
          </pre>

          <h3 className="text-dark mt-3">
            Copia del proyecto y archivo <code>application.wsgi</code>
          </h3>

          <p>
            Posteriormente, lo que tendremos que hacer es copiar la carpeta de nuestro
            proyecto y dirigirla a los archivos de Apache para poder indicarle al
            servidor que queremos desplegar nuestro proyecto. Para esto hacemos
            lo siguiente:
          </p>

          <pre>
            <code className="language-console">
              {
                "# Copia del proyecto a /var/www/\n" +
                "cp -r swagger-example/ /var/www/"
              }
            </code>
          </pre>

          <p>
            Luego de ello tendremos que crear un archivo denominado
            {' '}<code>application.wsgi</code>{' '}
            el cual servirá para definir el path
            donde construiremos la aplicación. Este archivo
            debe ser creado en la carpeta
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">/var/www/swagger-example/</span>{' '}
            y deberá contener lo siguiente:
          </p>

          <pre>
            <code>
              {
                '#!/usr/bin/python\n' +
                'import sys\n' +
                'sys.path.insert(0,"/var/www/swagger-example/")\n' +
                'from app import app as application'
              }
            </code>
          </pre>

          <h3 className="text-dark mt-3">
            Configuración del <code>VirtualHost</code>
          </h3>

          <p>
            Finalmente tendremos que modificar el archivo de configuración
            de apache ubicado en
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">/etc/httpd/conf/httpd.conf</span>{' '}
            y agregar nuestro
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">VirtualHost:</span>
          </p>

          <pre>
            <code className="language-html">
              {
                "...\n" +
                "WSGIScriptAlias / /var/www/swagger-example/application.wsgi\n\n" +

                "<VirtualHost *>\n" +
                "        ServerName www.flask-swagger.com\n" +
                "        <Directory /var/www/swagger-example/>\n" +
                "                Order deny,allow\n" +
                "                Allow from all\n" +
                "        </Directory>\n" +
                "</VirtualHost>\n" +
                "..."
              }
            </code>
          </pre>

          <p>
            Finalmente, reiniciamos el servicio
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">httpd</span>{' '}
            y si todo sale bien podremos visualizar la página en el navegador.
          </p>

          <pre>
            <code className="language-console">
              {
                "# Para reiniciar el servicio httpd\n" +
                "service httpd restart\n" +
                "# Para visualizar en su navegador digita solamente la url de su máquina + /docs\n" +
                "# En mi caso: 192.168.56.3/docs"
              }
            </code>
          </pre>

          <p>
            Si <b>NO</b> aparece este mensaje:
          </p>

          <pre>
            <code className="language-console">
              {
                "# Mensaje de error al reiniciar el servicio\n" +
                "Job for httpd.service failed because the control process exited with error code.\n" +
                'See "systemctl status httpd.service" and "journalctl -xe" for details.\n' +
                "# Para verificar cual pudo haber sido el error\n" +
                "systemctl status httpd"
              }
            </code>
          </pre>

          <p>
            Es porque el proyecto se ha cargado correctamente en Apache. De lo contrario,
            observe el error con el comando mostrado y corriga en los archivos
            como corresponde.
          </p>

          <h2 className="text-dark mt-5">
            Modificación de archivos
          </h2>

          <p>
            Con el proyecto en Apache configurado correctamente nos quedan los últimos pasos.
            En primer lugar, se debe importar la función <code>CORS</code> de la librería
            de python instalada en pasos previos en el archivo <code>views.py</code>.
            Esta función debe tomar como parámetro la variable
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">app</span>.
            Luego de ello, se debe modificar el archivo
            {' '}<code>index.html</code>{' '}
            similar a como se modificó anteriormente,
            solo que en este caso eliminando de la URL el puerto
            {' '}<code>:5000.</code>
            {' '}<b>Importante:</b>{' '}
            ambos cambios deben efectuarse en el directorio
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">/var/www/swagger-example/.</span>
          </p>

          <pre>
            <code className="language-python">
              {
                "# EN EL ARCHIVO views.py\n" +
                "...\n" +
                "from flask_cors import CORS\n" +
                "...\n" +
                "CORS(app)\n\n" +

                "# EN EL ARCHIVO index.html (ubicado en la carpeta de templates)\n" +
                "...\n" +
                'url: "http://192.168.56.3/api/swagger.json",\n' +
                "..."
              }
            </code>
          </pre>

          <p>
            Finalmente, tenderemos que reiniciar el servicio apache:
          </p>

          <pre>
            <code className="language-console">
              {
                "# Reiniciar servicio apache\n" +
                "service httpd restart\n" +
                "# Verificar estado del servicio\n" +
                "service httpd status"
              }
            </code>
          </pre>

          <p>
            El mensaje
            {' '}<i>Redirecting to /bin/systemctl status httpd.service</i>{' '}
            indica que el servicio se ha reiniciado correctamente.
          </p>

          <h2 className="h2 text-dark mt-5">
            Finalización
          </h2>

          <p>
            Esta ha sido una explicación detallada del proceso
            para desplegar una aplicación que funcione con la herramienta
            de Swagger utilizando python con Flask, en el sistema
            operativo CentoOS 8 y utilizando el servidor Apache.<br /><br />

            Cualquier duda, queja, recomendación o donación que deseen realizar me pueden
            contactar por telegram:
            {' '}<a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>.
            Espero les haya sido de gran ayuda :)
          </p>

          <p>
            Fecha de publicación: 01-02-2023.
            <br />
            Autor: Juan Diego Cobo Cabal.
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
