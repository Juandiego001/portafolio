import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionFlaskMySQL.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Menu from '../../../../components/Menu/Menu';
import Footer from '../../../../components/Footer/Footer';

const AplicacionFlaskMySql = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Aplicación Flask + MySQL + CentOS 8 | Servicios telemáticos</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Desarrollo de una aplicación 
          en python utilizando el 
          framework Flask para crear un servicio que se 
          comunique con MySQL desplegado 
          en una máquina CentOS 8."></meta>
        <meta name="keywords" content="
          aplicación flask mysql centos,
          aplicación flask mysql centos 8,
          Aplicación Flask MySQL CentOS 8,
          Aplicación Flask con MySQL en CentOS 8 Servicios,
          Aplicacion Flask con MySQL en CentOS 8 Servicios telemáticos,
          Aplicacion Flask con MySQL en CentOS 8 Servicios telematicos,
          Aplicación Flask con MySQL en CentOS 8 Servicios telemáticos,
          Aplicación Flask con MySQL en CentOS 8 Servicios telematicos,
          Aplicación Flask + MySQL + CentOS 8 Servicios,
          Aplicacion Flask + MySQL + CentOS 8 Servicios telemáticos,
          Aplicacion Flask + MySQL + CentOS 8 Servicios telematicos,
          Aplicación Flask + MySQL + CentOS 8 Servicios telemáticos,
          Aplicación Flask + MySQL + CentOS 8 Servicios telematicos,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div className="all-pages">
        <Header />

        <div className="the-page">
          <Menu />

          <div className="container my-5 px-5">
            <h1 className="h1 text-dark text-center">
              Aplicación Flask + MySQL + CentOS 8
            </h1>

            <p className="mt-3">
              En la presente entrada se explicará cómo crear una aplicación web con Flask y MySQL en una máquina virtual CentOS 8.
            </p>

            <div className="bg-warning p-3">
              <h6>¡Atención!</h6>

              <p>
                Para poder ejecutar el proyecto de Flask con MySQL se deben instalar todos los módulos que se presentan en la guía.
                Sin embargo, el código de python se puede desarrollar desde la máquina anfitrión para que sea
                más cómodo, pues podría utilizarse un IDE como <code>Visual Studio Code</code> en vez de únicamente <b>vim.</b>{' '}
                Por mi parte utilizaré Code y por ello se deben tener <b>todos los módulos de python</b> y el manejador
                de MySQL instalado. Los módulos de python se pueden instalar en la máquina local ejecutando:
              </p>

              <pre>
                <code className="bg-warning language-cmd">
                  {
                    "pip3 install Flask\n" +
                    "pip3 install flask-mysqldb"
                  }
                </code>
              </pre>
            </div>


            <h2 className="h2 text-dark mt-5">
              Introducción
            </h2>

            <p>
              Para iniciar creamos una carpeta llamada <code>flask-mysql</code> en la cual tendremos nuestro <code>Vagrantfile.</code>{' '}
              Para ello ejecutamos los siguientes comandos desde la consola:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  "mkdir flask-mysql\n" +
                  "cd flask-mysql\n" +
                  "vagrant init\n"
                }
              </code>
            </pre>

            <p>
              Una vez hemos ejecutado <code>vagrant init</code> tendremos un <code>Vagrantfile</code> que lo modificamos para
              establecer una máquina CentOS 8 con un hostname denominado como <code>server</code> (aunque puede definirse como se desee).
              También, se debe establecer una ip para poder visualizar los cambios desde nuestro pc anfitrión con la opción <code>network</code>{' '}
              de Vagrant.<br /><br />
              Esta <code>Vagrantfile</code> deberá lucir:
            </p>

            <pre>
              <code className="language-ruby">
                {
                  "# -*- mode: ruby -*-\n" +
                  "# vi: set ft=ruby :\n\n" +

                  'Vagrant.configure("2") do |config|\n' +
                  "  config.vm.define :server do |server|\n" +
                  '    server.vm.box = "centos/8"\n' +
                  '    server.vm.network "private_network", ip: "192.168.56.3"\n' +
                  '    server.vm.hostname = "server"\n' +
                  '  end\n' +
                  "end\n"
                }
              </code>
            </pre>

            <p>
              Luego de esto deberemos ejecutar:
            </p>

            <pre className="d-inline m-0">
              <code className="language-cmd">
                vagrant up server
              </code>
            </pre>

            <p>
              y deberá empezar a correr nuestra máquina virtual.
            </p>

            <h2 className="h2 text-dark mt-5">
              Instalación de módulos necesarios
            </h2>

            <p>
              A continuación, accedemos a la máquina utilizando el comando: <code>vagrant ssh server.</code>{' '}
              Si la máquina se encuentra apagada, ejecutar primero: <code>vagrant up server</code>{' '}
              y luego sí el comando anterior.

              Una vez nos encontramos en la máquina accedemos como <code>root</code> ejecutando <code>sudo -i</code> y
              ejecutamos los siguientes comandos para instalar las librerías necesarias:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  'sudo sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-*\n' +
                  "sudo yum update -y\n" +
                  "sudo yum install epel-release -y\n" +
                  "# En caso de que se desee utilizar Git\n" +
                  "sudo yum install git -y\n" +
                  "sudo yum install python3-pip -y\n" +
                  "pip3 --version\n" +
                  "sudo pip3 install Flask\n" +
                  "pip3 freeze | grep Flask\n"
                }
              </code>
            </pre>

            <p>
              Los comandos anteriores correspondían a la instalación de Flask. Ahora para la instalación de MySQL
              se deben ejecutar los siguientes comandos:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  "sudo yum install wget -y\n" +
                  "sudo wget https://dev.mysql.com/get/mysql80-community-release-el7-1.noarch.rpm\n" +
                  "sudo rpm -Uvh mysql80-community-release-el7-1.noarch.rpm\n" +
                  "sudo yum install mysql-server -y\n" +
                  "sudo systemctl start mysqld\n" +
                  "sudo systemctl status mysqld\n"
                }
              </code>
            </pre>

            <p>
              Si al finalizar, el comando que retorna el estado del servicio aparece como <span className="text-success fw-bold">active</span> es porque toda la instalación
              se efectuó correctamente. Posteriormente, tendremos que instalar las librerías necesarias para que Flask se comunique con MySQL de la siguiente manera:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  "sudo yum install mysql-devel -y\n" +
                  "sudo yum install python3-devel -y\n" +
                  "sudo yum install gcc -y\n" +
                  "sudo pip3 install flask-mysqldb\n"
                }
              </code>
            </pre>

            <h2 className="h2 text-dark mt-5">
              Cambio de la contraseña de MySQL
            </h2>

            <p>
              Cuando se inicia MySQL, el usuario root no suele tener contraseña. Por ello se puede iniciar sesión en
              MySQL utilizando el siguiente comando: <code>mysql -u root.</code> Ahora bien, si al ejecutar el comando
              se solicita una contraseña, se deberá visualizar en los logs de mysql. Para visualizar los logs se puede ejecutar
              el siguiente comando:

            </p>

            <pre>
              <code className="language-cmd">
                sudo cat /var/log/mysql/mysqld.log
              </code>
            </pre>

            <p>
              Este comando nos arrojará información acerca del servicio. Aquí podemos ver si se ha generado una contraseña random
              por defecto:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  "2022-10-12T21:50:08.795229Z 0 [System] [MY-013169] [Server] /usr/libexec/mysqld (mysqld 8.0.26) initializing of server in progress as process 36553\n" +
                  "2022-10-12T21:50:08.803942Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.\n" +
                  "2022-10-12T21:50:09.585654Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.\n" +
                  "2022-10-12T21:50:10.245691Z 0 [Warning] [MY-013746] [Server] A deprecated TLS version TLSv1 is enabled for channel mysql_main\n" +
                  "2022-10-12T21:50:10.245897Z 0 [Warning] [MY-013746] [Server] A deprecated TLS version TLSv1.1 is enabled for channel mysql_main\n" +
                  "2022-10-12T21:50:10.279980Z 6 [Warning] [MY-010453] [Server] root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option.\n" +
                  "2022-10-12T21:50:12.831739Z 0 [System] [MY-010116] [Server] /usr/libexec/mysqld (mysqld 8.0.26) starting as process 36596\n" +
                  "2022-10-12T21:50:12.852659Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.\n" +
                  "2022-10-12T21:50:13.459178Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.\n" +
                  "2022-10-12T21:50:14.108367Z 0 [Warning] [MY-013746] [Server] A deprecated TLS version TLSv1 is enabled for channel mysql_main\n" +
                  "2022-10-12T21:50:14.108643Z 0 [Warning] [MY-013746] [Server] A deprecated TLS version TLSv1.1 is enabled for channel mysql_main\n" +
                  "2022-10-12T21:50:14.112215Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.\n" +
                  "2022-10-12T21:50:14.112345Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.\n" +
                  "2022-10-12T21:50:14.134993Z 0 [System] [MY-010931] [Server] /usr/libexec/mysqld: ready for connections. Version: '8.0.26'  socket: '/var/lib/mysql/mysql.sock'  port: 3306  Source distribution.\n" +
                  "2022-10-12T21:50:14.135064Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060, socket: /var/lib/mysql/mysqlx.sock\n"
                }
              </code>
            </pre>

            <p>
              Así pues, cuando observamos el log, vemos que, en nuestro caso, se generó una contraseña vacía por lo que tendremos que cambiarla accediendo a MySQL. Para esto
              se deben ejecutar los siguientes comandos:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  "mysql -u root\n" +
                  "ALTER USER 'root'@'localhost' IDENTIFIED BY 'Autonoma123*';"
                }
              </code>
            </pre>

            <p>
              Si los comandos anteriores nos resultan en:
            </p>

            <pre className="m-0">
              <code className="p-3 language-cmd">
                Query OK, 0 rows affected (0.01 sec)
              </code>
            </pre>

            <p>
              es porque todo se ha ejecutado correctamente y nuestra nueva contraseña para iniciar sesión será la que hayamos establecido (en este caso <code>Autonoma123*</code>).
              Ahora, cuando vayamos a iniciar en MySQL tendremos que agregar siempre la flag <code>-p</code> y digitar
              la contraseña adecuada, es decir:
            </p>

            <pre className="m-0">
              <code className="p-3 language-cmd">
                mysql -u root -p
              </code>
            </pre>

            <p>
              y luego digitar la contraseña.
            </p>

            <p className="bg-info p-3">
              Para salir de MySQL basta con ejecutar <code className="bg-info language-cmd">exit.</code>
            </p>

            <h2 className="h2 text-dark mt-5">
              Instalación de herramientas de forma
            </h2>

            <p>
              Para la instalación de las herramientas adicionales de Flask se deben ejecutar los siguientes comandos:
            </p>

            <pre className="m-0">
              <code className="p-3 language-cmd">
                {
                  "sudo pip3 install Flask-WTF\n" +
                  "sudo pip3 install passlib"
                }
              </code>
            </pre>

            <p>
              En este punto ya habremos finalizado la instalación de los módulos necesarios. A continuación, lo que debemos hacer iniciar
              la programación del aplicativo web.
            </p>

            <h2 className="h2 text-dark mt-5">
              Desarrollo del aplicativo
            </h2>

            <p>
              Para iniciar el proyecto de Flask, crearé una carpeta que se llamará <code>app-flask-mysql</code> dentro de la cual incluiré
              toda la configuración correspondiente. La configuración básica luce así:
            </p>

            <pre className="m-0">
              <code className="p-3 language-cmd">
                {
                  "app-flask-mysql/\n" +
                  "  app/\n" +
                  "    __init__.py\n" +
                  "    views.py\n" +
                  "    templates/\n" +
                  "    static/\n" +
                  "  config.py\n" +
                  "  run.py\n"
                }
              </code>
            </pre>

            <p>
              El primer archivo que se aconseja modificar es el <code>__init__.py</code> donde se inicializará el servidor Flask,
              se agregará el archivo de las rutas (<code>views.py</code>) y la configuración adicional que se desee agregar (<code>config.py</code>). Este archivo
              deberá quedar de la siguiente manera:
            </p>

            <pre>
              <code className="language-python">
                {
                  '# app/__init__.py\n' +
                  'from flask import Flask\n' +
                  'app = Flask(__name__, instance_relative_config=True)\n\n' +

                  'from app import views\n' +
                  'app.config.from_object("config")'
                }
              </code>
            </pre>

            <p>
              Posteriormente, modificamos el archivo de <code>config.py</code> para personalizar la configuración del servidor. En este caso,
              nada más añadiremos que la opción <code>DEBUG</code> se encuentre activa para no tener que reiniciar la consola manualmente,
              sino que se haga automáticamente. Este archivo deberá lucir así:
            </p>

            <pre>
              <code className="language-python">
                {
                  '# config.py\n' +
                  'DEBUG=True'
                }
              </code>
            </pre>

            <p>
              Luego el <code>run.py</code> se debe encargar de correr el servidor cuando lo ejecutemos. Por ello debe importar la declaración del <code>__init__.py</code>
              {' '} e iniciarlo de la siguiente manera:
            </p>

            <pre>
              <code className="language-python">
                {
                  "# run.py\n" +
                  "from app import app\n\n" +

                  "if __name__ == '__main__':\n" +
                  "    app.run()\n"
                }
              </code>
            </pre>

            <p>
              En este punto ya se puede iniciar el servidor ejecutando el comando <code>python run.py</code> (recordar ubicarse en la consola donde se encuentre el archivo).
              Si todo funciona correctamente, se deben visualizar las siguientes líneas en la consola:
            </p>

            <pre>
              <code className="language-python">
                {
                  " * Serving Flask app 'app'\n" +
                  " * Debug mode: on\n" +
                  "WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.\n" +
                  " * Running on http://127.0.0.1:5000\n" +
                  "Press CTRL+C to quit\n" +
                  " * Restarting with stat\n" +
                  " * Debugger is active!\n" +
                  " * Debugger PIN: 496-576-666\n"
                }
              </code>
            </pre>

            <p>
              Esto indica que el servidor estará corriendo en el <code>localhost</code> en el puerto 5000.
            </p>

            <div className="p-3 bg-info">
              <p>
                Si usted se encuentra realizando todo este proceso en la máquina de CentOS, bastará con colocar:
                {' '}<code>http://ip-del-centos:5000</code> para verificar el funcionamiento del proyecto. Pero,
                si se encuentra desarrollándolo localmente: <code>http://localhost:5000</code>. Si está,
                funcionando correctamente se deberá visualizar el mensaje en pantalla:
              </p>

              <pre>
                <code className="bg-info language-cmd">
                  {
                    "Not Found\n" +
                    "The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.\n"
                  }
                </code>
              </pre>
            </div>

            <p>
              Ahora lo que debemos hacer es agregar las rutas correspondientes. Para esto modificaremos
              el archivo <code>views.py</code> de la siguiente manera:
            </p>

            <pre>
              <code className="language-python">
                {
                  '# app/views.py\n' +
                  'from app import app\n' +
                  'from flask import render_template\n\n' +

                  '@app.route("/")\n' +
                  'def index():\n' +
                  '    return "This is the route /"\n\n' +

                  '@app.route("/about")\n' +
                  'def about():\n' +
                  '    return "This is the route /about"\n\n' +

                  '@app.route("/contact")\n' +
                  'def contact():\n' +
                  '    return "This is the route /contact"\n\n' +

                  '@app.route("/articles")\n' +
                  'def articles():\n' +
                  '    return "This is the route /articles"'
                }
              </code>
            </pre>

            <p>
              Esta es una configuración inicial para verificar que estén funcionando las rutas. Así, cuando accedemos a:
            </p>

            <pre>
              <code>
                {
                  'http://localhost:5000 -> Mensaje: This is the route /\n' +
                  'http://localhost:5000/about -> Mensaje: This is the route /about\n' +
                  'http://localhost:5000/contact -> Mensaje: This is the route /contact\n' +
                  'http://localhost:5000/articles -> Mensaje: This is the route /articles'
                }
              </code>
            </pre>

            <p>
              Si los mensajes se retornan correctamente, podemos iniciar con la creación de los templates.
            </p>

            <h2 className="h2 text-dark mt-5">
              Desarrollo de <code>templates</code>
            </h2>

            <p>
              Para comenzar el desarrollo de <code>templates</code> iniciamos creando un archivo
              {' '}<code>index.html</code> que nos servirá como plantilla. Este archivo tendrá que
              ser creado dentro de la carpeta <code>templates</code> que definimos anteriormente.
              Ahora bien, en este archivo plantilla definiré que utilizaremos bootstrap y
              nos valdremos de algunos componentes (<code>header</code> y <code>footer</code>) ya
              creados que se pueden obtener en la sección de {' '}
              <a href="https://getbootstrap.com/docs/5.2/examples/" target="_blank">examples</a> de bootstrap.
              Este archivo ha de lucir así:
            </p>

            <pre>
              <code className="language-html">
                {
                  '<!DOCTYPE html>\n' +
                  '<html lang="es">\n' +
                  '<head>\n' +
                  '    <meta charset="UTF-8">\n' +
                  '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
                  '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
                  '    <title>Página principal</title>\n' +
                  '    <!-- CSS only -->\n' +
                  '    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">\n' +
                  '</head>\n' +
                  '<body>\n' +
                  '    <!-- SI LO DESEA REEMPLAZE ESTE HEADER -->\n' +
                  '    <div class="container">\n' +
                  '        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">\n' +
                  '          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">\n' +
                  '            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>\n' +
                  '            <span class="fs-4">Simple header</span>\n' +
                  '          </a>\n\n' +

                  '          <ul class="nav nav-pills">\n' +
                  '            <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>\n' +
                  '            <li class="nav-item"><a href="/about" class="nav-link">About</a></li>\n' +
                  '            <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>\n' +
                  '            <li class="nav-item"><a href="/articles" class="nav-link">Articles</a></li>\n' +
                  '          </ul>\n' +
                  '        </header>\n' +
                  '    </div>\n' +
                  '    <!-- ************************************** -->\n\n' +

                  '    <!-- NO ELIMINAR -->\n' +
                  '    <div id="content" class="container-fluid text-center vh-100">\n' +
                  '            {% block content %}\n' +
                  '            {% endblock %}\n' +
                  '    </div>\n' +
                  '    <!-- ************************************** -->\n\n' +

                  '    <!-- SI LO DESEA REEMPLAZA ESTE FOOTER -->\n' +
                  '    <div class="container">\n' +
                  '    <footer class="py-3 my-4">\n' +
                  '                <ul class="nav justify-content-center border-bottom pb-3 mb-3">\n' +
                  '                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>\n' +
                  '                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>\n' +
                  '                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>\n' +
                  '                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>\n' +
                  '                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>\n' +
                  '                </ul>\n' +
                  '            <p class="text-center text-muted">© 2022 Company, Inc</p>\n' +
                  '    </footer>\n' +
                  '  </div>\n' +
                  '  <!-- ************************************** -->\n' +
                  '</body>\n' +
                  '</html>\n'
                }
              </code>
            </pre>

            <div className="bg-info p-3 p">
              <h4 className="my-3">¿Cómo agregar componentes <code>examples</code> de bootstrap?</h4>

              <ol>
                <li>Ir a la página de <a href="https://getbootstrap.com/docs/5.2/examples/" target="_blank">examples</a> de bootstrap.</li>
                <li>Seleccionar algún elemento deseado (snippets, custom components, frameworks, etc.).</li>
                <li>Abrir el inspeccionador de la página y seleccionar.</li>
                <img className="my-2 w-75" src={process.env.PUBLIC_URL + "/septimo-semestre/servicios-telematicos/aplicacion-flask-mysql/parte-1-examples.png"} />
                <li>Luego hacer clic derecho y en la parte de <code>copy</code> seleccionar <code>Copy element</code>.</li>
                <img className="my-2 w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/servicios-telematicos/aplicacion-flask-mysql/parte-2-examples.png"} />
              </ol>
            </div>

            <p className="mt-3">
              El contenedor <code>{'<div id="content">'}</code> es el que utilizaremos como referencia para agregar
              todo el contenido de las demás páginas ya que solo cambiará el contenido, pero el <code>header</code>{' '}
              y el <code>footer</code> permanecerán igual (por esto le llamamos plantilla). Ahora, procederemos agregando algo
              sencillo en el <code>about.html</code> y en el <code>contact.html</code>:
            </p>

            <pre>
              <code className="language-html">
                {
                  '<!-- about.html -->\n' +
                  '{% extends "index.html" %}\n' +
                  '{% block content %}\n' +
                  '<h2>About</h2>\n' +
                  '<p>\n' +
                  '    My name is su-nombre.\n' +
                  '</p>\n' +
                  '{% endblock %}\n\n' +

                  '<!-- contact.html -->\n' +
                  '{% extends "index.html" %}\n' +
                  '{% block content %}\n' +
                  '<h2>Contact</h2>\n' +
                  '<p>\n' +
                  '    My telegram <a href="https://t.me/Juan0_1" target="_blank">https://t.me/Juan0_1</a>\n' +
                  '</p>\n' +
                  '{% endblock %}\n'
                }
              </code>
            </pre>

            <p>
              Ahora para renderizar el contenido en el navegador se debe utilizar la función <code>render_template</code> de flask.
              Para utilizar esta función en el <code>views.py</code> hacemos:
            </p>

            <pre>
              <code className="language-python">
                {
                  "@app.route('/')\n" +
                  'def index():\n' +
                  '    return render_template("index.html")\n' +

                  "@app.route('/about')\n" +
                  'def about():\n' +
                  '    return render_template("about.html")\n' +

                  "@app.route('/contact')\n" +
                  'def contact():\n' +
                  '    return render_template("contact.html")\n'
                }
              </code>
            </pre>

            <p>
              Posteriormente, procedemos a configurar la sección de <code>articles.html</code>.
            </p>

            <h2 className="h2 text-dark mt-5">
              Desarrollo de <code>articles.html</code>
            </h2>

            <p>
              El contenido de <code>articles.html</code> hereda igualmente el menú de navegación y el footer. El contenido principal de esta página
              será una tabla que contenga cada una de las columnas del artículo con tres botones para agregar, editar o borrar.
              La tabla fue copiada de los <code>examples</code> de bootstrap y su código es el siguiente:
            </p>

            <pre>
              <code className="language-html">
                {
                  '<div class="row text-center mx-5">\n' +
                  '  <div class="col p-3 border">\n' +
                  '     <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addArticle">\n' +
                  '        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">\n' +
                  '            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>\n' +
                  '        </svg>\n' +
                  '     </button>\n' +
                  '  </div>\n' +
                  '  <div class="col p-3 border d-flex justify-content-center align-items-center">id</div>\n' +
                  '  <div class="col p-3 border d-flex justify-content-center align-items-center">title</div>\n' +
                  '  <div class="col p-3 border d-flex justify-content-center align-items-center">body</div>\n' +
                  '  <div class="col p-3 border d-flex justify-content-center align-items-center">author</div>\n' +
                  '  <div class="col p-3 border d-flex justify-content-center align-items-center">date</div>\n' +
                  '</div>'
                }
              </code>
            </pre>

            <p>
              El código anterior ha de lucir así:
            </p>

            <div className="row text-center mx-5">
              <div className="col p-3 border">
                <button type="button" className="btn btn-success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
              </div>
              <div className="col p-3 border d-flex justify-content-center align-items-center">id</div>
              <div className="col p-3 border d-flex justify-content-center align-items-center">title</div>
              <div className="col p-3 border d-flex justify-content-center align-items-center">body</div>
              <div className="col p-3 border d-flex justify-content-center align-items-center">author</div>
            </div>

            <p className="mt-5">
              El funcionamiento de la tabla para agregar, editar y borrar se hará mediante ventas de confirmación. Estas ventanas de confirmación
              se denominan en Bootstrap como <code>Modals.</code> En este{' '}
              <a href="https://getbootstrap.com/docs/5.2/components/modal/" target="_blank">link</a> podrán acceder a la guía de los modales.
            </p>

            <div>
              <p>
                Ahora bien, es importante tener en cuenta que el motor de renderizados de plantillas se denomina <code>jinja.</code> Este
                nos permite ejecutar código python inmerso en html. Similar a lo vendría siendo <code>Handlebars</code>, <code>Java NET</code>, entre otros.
                Con lo anterior, podemos, por ejemplo, ejecutar ciclos que nos permitan renderizar múltiples elementos HTML enviados a través un arreglo.
                En nuestro caso, lo que queremos es enviar un arreglo de todos los artículos que se obtienen a partir de la consulta a la base de
                datos. Por ello, desde el archivo <code>views.py</code> tenemos que establecer la ruta inicial de los artículos de esta manera:
              </p>

              <pre>
                <code className="language-python">
                  {
                    '# views.py\n' +
                    '# Route to get articles\n' +
                    "@app.route('/articles', methods=['GET', 'POST'])\n" +
                    'def articlesGet():\n' +
                    '    cur = mysql.connection.cursor()\n' +
                    '    cur.execute("SELECT * FROM `the_article`")\n' +
                    '    the_articles = cur.fetchall()\n\n' +

                    '    return render_template("articles.html", the_articles=the_articles)\n'
                  }
                </code>
              </pre>

              <p>
                Lo que se hace en esta función es simplemente conectar Flask con MySQL, ejecutar la consulta de los artículos en la
                base de datos y posteriormente retornarlos a la vista de <code>articles.hmtl.</code> Sin embargo, seguramente quede
                la pregunta de ¿cómo conectar MySQL con Flask? Para ello, proseguiré explicando esta parte y luego continuaré
                explicando articles.
              </p>
            </div>

            <div className="p-3 bg-info">
              <h4 className="my-3">¿Cómo conectar Flask con MySQL?</h4>
              <p>
                Para conectar Flask con MySQL primero deberemos especificar en el archivo <code>config.py</code> el usuario,
                la contraseña y la base de datos a la que nos conectaremos de esta manera:
              </p>

              <pre>
                <code className="bg-info language-python">
                  {
                    '# config.py\n' +
                    '...\n' +
                    'MYSQL_USER="root"\n' +
                    'MYSQL_PASSWORD="root"\n' +
                    'MYSQL_DB="app_flask_db"'
                  }
                </code>
              </pre>

              <p>
                Claro está, se deben establecer la contraseña y los usuarios correspondientes a los de su máquina.
                Posteriormente lo que se debe hacer es importar dichas configuraciones en el <code>__init__.py</code>
                {' '}utilizando la librería que se instaló en un principio:
              </p>

              <pre>
                <code className="bg-info language-python">
                  {
                    'from flask_mysqldb import MySQL\n\n' +
                    'app = Flask(__name__, instance_relative_config=True)\n' +
                    'app.config.from_object("config")'
                  }
                </code>
              </pre>

              <p>
                Luego, se le debe indicar a MySQL que utilice dicha configuración del app:
              </p>

              <pre>
                <code className="bg-info language-python">
                  {
                    '...\n' +
                    'mysql = MySQL(app)'
                  }
                </code>
              </pre>

              <p>
                Y ya estaría. Ahora para utilizar constantemente los llamados a MySQL se debe importar, crear el cursor y ejecutar los querys:
              </p>

              <pre>
                <code className="bg-info language-python">
                  {
                    'from app import ..., mysql\n' +
                    'cur = mysql.connection.cursor()\n' +
                    'cur.execute("SELECT * FROM `the_article`")'
                  }
                </code>
              </pre>

              <p>
                <b>Recordar</b> que cuando se estén realizando inserciones o actualizaciones se debe hacer un commit en la base de datos:
              </p>

              <pre>
                <code className="bg-info language-python">
                  {
                    '...\n' +
                    'mysql.connection.commit()'
                  }
                </code>
              </pre>
            </div>

            <h2 className="h2 text-dark mt-5">
              Continuación de <code>articles.html</code>
            </h2>

            <p>
              Continuando con el código del template, tenemos que indicarle al HTML que renderizaremos una fila por cada artículo que se encuentre en la base de datos.
              Esto se hace de la siguiente manera:
            </p>

            <pre>
              <code className="language-html">
                {
                  '{% for article in the_articles %}\n' +
                  '<div class="row text-center mx-5">\n' +
                  '    <div class="col p-3 border">\n' +
                  '        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updateArticle{{ article[0] }}">\n' +
                  '            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">\n' +
                  '                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>\n' +
                  '            </svg>\n' +
                  '        </button>\n\n' +

                  '        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteArticle{{ article[0] }}">\n' +
                  '            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">\n' +
                  '                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>\n' +
                  '            </svg>\n' +
                  '        </button>\n' +
                  '    </div>\n\n' +

                  '    <div class="col p-3 border d-flex justify-content-center align-items-center">{{ article[0] }}</div>\n' +
                  '    <div class="col p-3 border d-flex justify-content-center align-items-center">{{ article[1] }}</div>\n' +
                  '    <div class="col p-3 border d-flex justify-content-center align-items-center">{{ article[2] }}</div>\n' +
                  '    <div class="col p-3 border d-flex justify-content-center align-items-center">{{ article[3] }}</div>\n' +
                  '    <div class="col p-3 border d-flex justify-content-center align-items-center">{{ article[4] }}</div>\n' +
                  '</div>\n' +
                  '...\n' +
                  '{% endfor %}'
                }
              </code>
            </pre>

            <p>
              Ahora bien, como se puede observar, empleamos código de python para indicarle que por cada dato del <code>article</code> queremos obtener el dato 1
              {' '}(<code>article[0]</code>) el dato 2 (<code>article[1]</code>) y así sucesivamente.
            </p>

            <h2 className="mt-5">
              Actualización de cada artículo
            </h2>

            <p>
              Para actualizar cada artículo, podemos agregar un botón que despliegue un <b>modal</b> para digitar los nuevos datos deseados.
              Esto se puede conseguir con el siguiente código:
            </p>

            <pre>
              <code className="language-html">
                {
                  '{% for article in the_articles %}\n' +
                  '...\n' +
                  '<!-- Modal for updating articles -->\n' +
                  '<div class="modal fade" id="updateArticle{{ article[0] }}" tabindex="-1" aria-labelledby="updateArticle{{ article[0] }}" aria-hidden="true">\n' +
                  '  <div class="modal-dialog">\n' +
                  '    <div class="modal-content">\n' +
                  '      <div class="modal-header">\n' +
                  '        <h1 class="modal-title fs-5" id="exampleModalLabel">Update article</h1>\n' +
                  '        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n' +
                  '      </div>\n' +
                  '      <div class="modal-body text-start">\n' +
                  '          <form class="w-75 mx-auto" method="POST" action="{{ url_for(' + "'articlesPut'" + ', id=article[0]) }}">\n' +
                  '              <div class="mb-3">\n' +
                  '                  <label for="exampleFormControlInput1" class="form-label">Id</label>\n' +
                  '                  <input id="id" name="id" class="form-control" type="text" placeholder="Default input" aria-label="default input example" value="{{ article[0] }}">\n' +
                  '              </div>\n\n' +

                  '              <div class="mb-3">\n' +
                  '                  <label for="exampleFormControlInput1" class="form-label">Title</label>\n' +
                  '                  <input id="title" name="title" class="form-control" type="text" placeholder="Default input" aria-label="default input example" value="{{ article[1] }}">\n' +
                  '              </div>\n\n' +

                  '              <div class="mb-3">\n' +
                  '                  <label for="exampleFormControlInput1" class="form-label">Body</label>\n' +
                  '                  <textarea id="body" name="body" class="form-control" id="exampleFormControlTextarea1" rows="3">{{ article[2] }}</textarea>\n' +
                  '              </div>\n\n' +

                  '              <div class="mb-3">\n' +
                  '                  <label for="exampleFormControlInput1" class="form-label">Author </label>\n' +
                  '                  <input id="author" name="author" class="form-control" type="text" placeholder="Default input" aria-label="default input example" value="{{ article[3] }}">\n' +
                  '              </div>\n\n' +

                  '              <div class="mb-3">\n' +
                  '                  <label for="exampleFormControlInput1" class="form-label">Created at </label><br />\n' +
                  '                  <input id="createdat" name="createdat" type="date" id="datetime-local" value="{{ article[4] }}" >\n' +
                  '              </div>\n' +
                  '              <div class="modal-footer">\n' +
                  '                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n' +
                  '                <button type="submit" class="btn btn-primary">Update</button>\n' +
                  '              </div>\n' +
                  '          </form>\n' +
                  '      </div>\n' +
                  '    </div>\n' +
                  '  </div>\n' +
                  '</div>\n' +
                  '...\n' +
                  '{% endfor %}'
                }
              </code>
            </pre>

            <p>
              Tenemos que tener en cuenta que la clave está en el identificador de cada artículo. Cuando se renderizan los botones,
              cada uno queda con el valor del identificador del artículo. Así, cuando sean llamados, se modificarán solamente
              los valores del artículo con dicho identificador.
            </p>

            <h2 className="mt-5">
              Eliminación de cada artículo
            </h2>

            <p>
              Para agregar un botón que permita eliminar cada artículo, se implementa un código muy similar al anterior.
              No obstante, la diferencia de este radica en que se despliega un mensaje de confirmación
              que pregunta al usuario si está de acuerdo con eliminar el artículo en cuestión.
            </p>

            <pre>
              <code className="language-html">
                {
                  '{% for article in the_articles %}\n' +
                  '...\n' +
                  '<!-- Modal for deleting articles -->\n' +
                  '<div class="modal" id="deleteArticle{{ article[0] }}" tabindex="-1" aria-labelledby="deleteArticle{{ article[0] }}" aria-hidden="true">\n' +
                  '    <div class="modal-dialog">\n' +
                  '      <div class="modal-content">\n' +
                  '        <div class="modal-header">\n' +
                  '          <h5 class="modal-title">Ventana de confirmación</h5>\n' +
                  '          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n' +
                  '        </div>\n' +
                  '        <div class="modal-body">\n' +
                  '          <p>¿Segur@ que deseas eliminar el artículo con id {{ article[0] }}?</p>\n' +
                  '        </div>\n' +
                  '        <div class="modal-footer">\n' +
                  '            <form method="POST" action="{{ url_for(' + "'articlesDelete'" + ', id=article[0]) }}">\n' +
                  '                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>\n' +
                  '                <button type="submit" class="btn btn-primary">Aceptar</button>\n' +
                  '            </form>\n' +
                  '        </div>\n' +
                  '      </div>\n' +
                  '    </div>\n' +
                  '</div>\n' +
                  '{% endfor %}'
                }
              </code>
            </pre>

            <p>
              En este punto oficialmente se se han colocado todos los elementos necesarios dentro del <code>for.</code>{' '}
              El siguiente componente para completar el CRUD, que es agregar, se debe crear por fuera del ciclo actuando
              como otra opción en la columna de acciones.
            </p>

            <h2 className="mt-5">Agregar un artículo</h2>

            <p>
              El modal para agregar un artículo consiste básicamente en un formulario y luce de la siguiente manera:
            </p>

            <pre>
              <code>
                {
                  '...\n' +
                  '<!-- Modal for adding articles -->\n' +
                  '<div class="modal fade" id="addArticle" tabindex="-1" aria-labelledby="addArticle" aria-hidden="true">\n' +
                  '  <div class="modal-dialog">\n' +
                  '    <div class="modal-content">\n' +
                  '      <div class="modal-header">\n' +
                  '        <h1 class="modal-title fs-5" id="exampleModalLabel">Add article</h1>\n' +
                  '        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n' +
                  '      </div>\n' +
                  '      <div class="modal-body text-start">\n' +
                  '          <form class="w-75 mx-auto" method="POST" action="{{ url_for(' + "'articlesPost'" + ') }}">\n' +
                  '              <div class="mb-3">\n' +
                  '                  <label for="exampleFormControlInput1" class="form-label">Id</label>\n' +
                  '                  <input id="id" name="id" class="form-control" type="text" placeholder="Default input" aria-label="default input example">\n' +
                  '              </div>\n\n' +

                  '              <div class="mb-3">\n' +
                  '                  <label for="exampleFormControlInput1" class="form-label">Title</label>\n' +
                  '                  <input id="title" name="title" class="form-control" type="text" placeholder="Default input" aria-label="default input example">\n' +
                  '              </div>\n\n' +

                  '              <div class="mb-3">\n' +
                  '                  <label for="exampleFormControlInput1" class="form-label">Body</label>\n' +
                  '                  <textarea id="body" name="body" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>\n' +
                  '              </div>\n\n' +

                  '              <div class="mb-3">\n' +
                  '                  <label for="exampleFormControlInput1" class="form-label">Author </label>\n' +
                  '                  <input id="author" name="author" class="form-control" type="text" placeholder="Default input" aria-label="default input example">\n' +
                  '              </div>\n\n' +

                  '              <div class="mb-3">\n' +
                  '                  <label for="exampleFormControlInput1" class="form-label">Created at </label><br />\n' +
                  '                  <input id="createdat" name="createdat" type="date" id="datetime-local">\n' +
                  '              </div>\n' +
                  '              <div class="modal-footer">\n' +
                  '                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n' +
                  '                  <button type="submit" class="btn btn-primary">Add</button>\n' +
                  '              </div>\n' +
                  '          </form>\n' +
                  '      </div>\n' +
                  '    </div>\n' +
                  '  </div>\n' +
                  '</div>\n' +
                  '{% endblock %}'
                }
              </code>
            </pre>

            <h2 className="mt-5">
              Rutas adicionales para los procesos de CRUD
            </h2>

            <p>
              Una vez hemos completado toda la parte del diseño frontend, procedemos a la configuración de rutas adicionales para
              el correcto funcionamiento del aplicativo. Para ello, en el archivo de <code>views.py</code>{' '}
              tendremos que crear las diferentes funciones o rutas que nos permitan insertar, eliminar, editar y leer artículos
              de la base de datos. Estas funciones son las siguientes y han sido configuradas contemplando exclusivamente
              los métodos <code>POST</code> y <code>GET</code> y es por ello que en una misma
              ruta no se tienen los métodos <code>PUT</code> y <code>DELETE</code>{' '}
              por lo que se consideró necesario crear más rutas.
            </p>

            <pre>
              <code className="language-python">
                {
                  '# Route to get articles\n' +
                  "@app.route('/articles', methods=['GET', 'POST'])\n" +
                  'def articlesGet():\n' +
                  '    cur = mysql.connection.cursor()\n' +
                  '    cur.execute("SELECT * FROM `the_article`")\n' +
                  '    the_articles = cur.fetchall()\n\n' +

                  '    return render_template("articles.html", the_articles=the_articles)\n\n' +

                  '# Route to add articles\n' +
                  "@app.route('/add-articles', methods=['GET', 'POST'])\n" +
                  'def articlesPost():\n' +
                  '    form = request.form\n\n' +

                  "    id = form['id']\n" +
                  "    title = form['title']\n" +
                  "    body = form['body']\n" +
                  "    author = form['author']\n" +
                  "    created_at = form['createdat']\n\n" +

                  '    cur = mysql.connection.cursor()\n' +
                  "    query = " + '"INSERT INTO ' + "`the_article` VALUES(%s, '%s', '%s', '%s', '%s')" + '" % (id, title, body, author, created_at)\n' +
                  '    results = cur.execute(query)\n' +
                  '    mysql.connection.commit()\n\n' +

                  "    return redirect('/articles')\n\n" +

                  '# Route to update artcles\n' +
                  "@app.route('/edit-articles/<id>', methods=['GET', 'POST'])\n" +
                  'def articlesPut(id):\n' +
                  '    form = request.form\n\n' +

                  "    idNueva = form['id']\n" +
                  "    title = form['title']\n" +
                  "    body = form['body']\n" +
                  "    author = form['author']\n" +
                  "    created_at = form['createdat']\n\n" +

                  '    cur = mysql.connection.cursor()\n' +
                  '    query = "UPDATE `the_article` SET id = %s, title = ' + "'%s', body = '%s', author = '%s', created_date = '%s' WHERE id = %s" + '" % (idNueva, title, body, author, created_at, id)\n' +
                  '    results = cur.execute(query)\n' +
                  '    mysql.connection.commit()\n' +

                  "    return redirect('/articles')\n\n" +

                  '# Route to delete artcles\n' +
                  "@app.route('/articles/<id>', methods=['GET', 'POST'])\n" +
                  'def articlesDelete(id):\n' +
                  '    cur = mysql.connection.cursor()\n' +
                  '    query = "DELETE FROM `the_article` WHERE id = %s" % (id)\n' +
                  '    results = cur.execute(query)\n' +
                  '    mysql.connection.commit()\n\n' +

                  "    return redirect('/articles')\n"
                }
              </code>
            </pre>

            <h2 className="mt-5">Script de creación de base de datos y tabla</h2>

            <p>
              Finalmente, antes de probar todas las funcionalidades de nuestro aplicativo, nos queda
              crear la base de datos y la tabla dentro de nuestra máquina CentOS. Este es
              un script de ayuda:
            </p>

            <pre>
              <code className="language-sql">
                {
                  '-- Database creation\n' +
                  'CREATE DATABASE app_flask_db;\n' +
                  'use app_flask_db;\n\n' +

                  '-- Table creation\n' +
                  'CREATE TABLE the_article(\n' +
                  '    id INTEGER PRIMARY KEY,\n' +
                  '    title VARCHAR(50),\n' +
                  '    body VARCHAR(600),\n' +
                  '    author VARCHAR(50),\n' +
                  '    created_date DATE\n' +
                  ');\n'
                }
              </code>
            </pre>

            <p>
              Luego de esto, se puede subir todo el código a github y traerlo desde la máquina CentOS
              o también mediante el directorio compartido se puede pasar el proyecto. Para pasar el proyecto
              mediante la carpeta compartida, basta simplemente con copiar la carpeta y pegarla
              donde se encuentra ubicado nuestro <code>.Vagrantfile.</code>
            </p>

            <h2 className="mt-5">
              Probar el aplicativo
            </h2>

            <p>
              Para probar el aplicativo se debe realizar lo siguiente:
            </p>

            <ol>
              <li>Encender la máquina con <code className="text-dark">vagrant up server</code>.</li>
              <li>Acceder a la máquina con <code className="text-dark">vagrant ssh server</code>.</li>
              <li>Iniciar como <code>root</code>, ejecutando: <code className="text-dark">sudo -i</code>.</li>
              <li>Iniciar el servicio de <code>mysqld</code> con <code className="text-dark">systemctl start mysqld</code>.</li>
              <li>Asegurarse de que están creadas la base de datos y la tabla (de lo contrario ejecutar el script otorgado anteriormente).</li>
              <li>Dirgirse al proyecto y ejecutar <code>export FLASK_APP=run.py</code> para especficar el archivo de iniciación del servidor.</li>
              <li>Posteriormente, ejecutar <code>python3 -m flask run --host=0.0.0.0</code>.</li>
              <li>Verificar en el navegador empleando la IP de la máquina CentOS junto con el puerto 5000.</li>
            </ol>

            <h2 className="h2 text-dark mt-5">
              Finalización
            </h2>

            <p>
              Esta ha sido una explicación detallada del proceso
              para desplegar una aplicación web que emplee una base de datos
              MySQL y sea desplegada utilizando Flask en el sistema operativo
              de CentOS 8. Si se desea obtener el proyecto del Autor
              se pueden dirigir
              {' '}<a href="https://github.com/Juandiego001/app-flask-mysql-servicios-telematicos" target="_blank" rel="noindex,nofollow">aqui.</a><br /><br />

              Cualquier duda, queja, recomendación o donación que deseen realizar me pueden
              contactar por telegram:
              {' '}<a href="https://t.me/Juan0_1" target="_blank">https://t.me/Juan0_1</a>.
              Espero les haya sido de gran ayuda :)
            </p>

            <p>
              Fecha de publicación: 07-02-2023.
              <br />
              Autor: Juan Diego Cobo Cabal.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
};

AplicacionFlaskMySql.propTypes = {};

AplicacionFlaskMySql.defaultProps = {};

export default AplicacionFlaskMySql;
