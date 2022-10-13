import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionFlaskMySQL.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const AplicacionFlaskMySql = () => {

  // Setting title
  useEffect(() => {
    document.title = "Aplicación Flask + MySQL | Servicios telemáticos";
    hljs.highlightAll();
  }, []);

  return (
    <div className="mb-4">
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>

      <h1 className="h1 text-dark">
        Aplicación Flask + MySQL
      </h1>

      <p>
        En la presente entrada se explicará como crear una aplicación web con Flask y MySQL en una máquina virtual Centos 8.
      </p>

      <p className="bg-warning p-3">
        <b>¡Atención!</b><br /><br />
        
        Para poder ejecutar el proyecto de Flask con MySQL se deben instalar todos los módulos que se presentan en la guía.
        Sin embargo, el código de python se puede desarrollar desde la máquina anfitrión para que sea 
        más cómodo, pues podría utilizarse un IDE como <code>Visual Studio Code</code> en vez de únicamente <b>vim.</b>{' '}
        Por mi parte utilizaré Code y por ello se deben tener <b>todos los módulos de python</b> y el manejador
        de MySQL instalado. Los módulos de python se pueden instalar en la máquina local ejecutando:

        <pre>
          <code className="bg-warning pt-3 pb-0 language-cmd">
            {
              "pip3 install Flask\n" +
              "pip3 install flask-mysqldb"
            }
          </code>
        </pre>
      </p>

      <h2 className="h2 text-dark mt-5">
        Introducción
      </h2>

      <p>
        Para iniciar creamos una carpeta llamada <code>flask-mysql</code> en la cual tendremos nuestro <code>Vagrant</code> file.
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
        Una vez hemos ejecutado <code>vagrant init</code> tendremos un <code>Vagrant file</code> que lo modificamos para 
        establecer una máquina Centos 8 con un hostname denominado como <code>server</code> (aunque puede definirse como se desee).
        También, se debe establecer una ip para poder visualizar los cambios desde nuestro pc anfitrión con la opción <code>network</code>{' '}
        de Vagrant.<br /><br />
        Esta <code>Vagrant file</code> deberá lucir:
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
        <pre className="d-inline m-0">
          <code clasName="language-cmd">
            vagrant up server
          </code>
        </pre>
        y deberá empezar a correr nuestra máquina virtual.
      </p>

      <h2 className="h2 text-dark mt-5">
        Instalación de módulos necesarios
      </h2>

      <p>
        A continuación accedemos a la máquina utilizando el comando: <code>vagrant ssh server.</code>{' '}
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

        <pre>
          <code className="language-cmd">
            sudo cat /var/log/mysql/mysqld.log 
          </code>
        </pre>
        
        Este comando nos arrojará información acerca del servicio. Aquí podemos ver si se ha generado una contraseña random
        por defecto:
        

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

        Así pues, cuando observamos el log, vemos que en nuestro caso, se generó una contraseña vacía por lo que tendremos que cambiarla accediendo a MySQL. Para esto
        se deben ejecutar los siguientes comandos:

        <pre>
          <code className="language-cmd">
            {
              "mysql -u root\n" +
              "ALTER USER 'root'@'localhost' IDENTIFIED BY 'Autonoma123*';"
            }
          </code>
        </pre>

        Si los comandos anteriores nos resultan en:

        <pre className="m-0">
          <code className="p-3 language-cmd">
            Query OK, 0 rows affected (0.01 sec)
          </code>
        </pre>

        es porque todo se ha ejecutado correctamente y nuestra nueva contraseña para iniciar sesión será la que hayamos establecido (en este caso <code>Autonoma123*</code>).
        Ahora, cuando vayamos a iniciar en MySQL tendremos que agregar siempre la flag <code>-p</code> y digitar
        la contraseña adecuada, es decir:

        <pre className="m-0">
          <code className="p-3 language-cmd">
            mysql -u root -p
          </code>
        </pre>

        y luego digitar la contraseña.
      </p>

      <p className="bg-info p-3">
        Para salir de MySQL basta con ejecutar<code className="bg-info p-2 language-cmd">exit.</code>
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
      </p>

      <p>
        El primer archivo que se aconseja modificar es el <code>__init__.py</code> donde se inicializará el servidor Flask,
        se agregará el archivo de las rutas (<code>views.py</code>) y la configuración adicional que se desee agregar (<code>config.py</code>). Este archivo
        deberá quedar de la siguiente manera:

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

        Posteriormente, modificamos el archivo de <code>config.py</code> para personalizar la configuración del servidor. En este caso,
        nada más añadiremos que la opción <code>DEBUG</code> se encuentre activa para no tener que reiniciar la consola manualmente
        sino que se haga automáticamente. Este archivo deberá lucir así:

        <pre>
          <code className="language-python">
            {
              '# config.py\n' +
              'DEBUG=True'
            }
          </code>
        </pre>

        Luego el <code>run.py</code> se debe encargar de correr el servidor cuando lo ejecutemos. Por ello debe importar la declaración del <code>__init__.py</code>
        {' '} e iniciarlo de la siguiente manera:

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

        En este punto ya se puede iniciar el servidor ejecutando el comando <code>python run.py</code> (recordar ubicarse en la consola donde se encuentre el archivo).
        Si todo funciona correctamente, se deben visualizar las siguientes líneas en la consola:

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

        Esto indica que el servidor estará corriendo en el <code>localhost</code> en el puerto 5000.
      </p>

      <p className="p-3 bg-info">
        Si usted se encuentra realizando todo este proceso en la máquina de Centos, bastará con colocar:
        {' '}<code>http://ip-del-centos:5000</code> para verificar el funcionamiento del proyecto. Pero,
        si se encuentra desarrollandolo localmente: <code>http://localhost:5000</code>. Si está,
        funcionando correctamente se deberá visualizar el mensaje en pantalla:

        <pre>
            <code className="bg-info pt-3 pb-0 language-cmd">
              {
                "Not Found\n" +
                "The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.\n"
              }
            </code>
        </pre>
      </p>

      <p>
        Ahora lo que debemos hacer es agregar las rutas correspondientes. Para esto modificaremos 
        el archivo <code>views.py</code> de la siguiente manera:

        <pre className="m-0">
            <code className="p-3 language-python">
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

        Esta es una configuración inicial para verificar que estén funcionando las rutas. Así, cuando accedemos a:
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

        Si los mensajes se retornan correctamente, podemos iniciar con la creación de los templates.
      </p>

      <h2 className="h2 text-dark mt-5">
        Desarollo de <code>templates</code>
      </h2>

      <p>
        Para comenzar el desarrollo de <code>templates</code> iniciamos creando un archivo
        {' '}<code>index.html</code> que nos servirá como plantilla. Este archivo tendrá que
        ser creado dentro de la carpeta <code>templates</code> que definimos anteriormente.
        <br /><br />
        Ahora bien, en este archivo plantilla definiré que utilizaremos bootstrap y
        nos valdremos de algunos componentes (<code>header</code> y <code>footer</code>) ya 
        creados que se pueden obtener en la sección de {' '}
        <a href="https://getbootstrap.com/docs/5.2/examples/" target="_blank">examples</a> de bootstrap. 
        Este archivo ha de lucir así:

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
      </p>
      
      <p className="bg-info p-3">
        <h4>¿Cómo agregar componentes <code>examples</code> de bootstrap?</h4>
        <ol>
          <li>Ir a la página de <a href="https://getbootstrap.com/docs/5.2/examples/" target="_blank">examples</a> de bootstrap.</li>
          <li>Seleccionar algún elemento deseado (snippets, custom components, frameworks, etc.).</li>
          <li>Abrir el inspeccionador de la página y seleccionar.</li>
          <img className="my-2 w-75" src={process.env.PUBLIC_URL + "/septimo-semestre/servicios-telematicos/aplicacion-flask-mysql/parte-1-examples.png"} />
          <li>Luego hacer clic derecho y en la parte de <code>copy</code> seleccionar <code>Copy element</code>.</li>
          <img className="my-2 w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/servicios-telematicos/aplicacion-flask-mysql/parte-2-examples.png"} />
        </ol>
      </p>

      <p>
        El contenedor <code>{'<div id="content">'}</code> es el que utilzaremos como referencia para agregar
        todo el contenido de las demás páginas ya que solo cambiará el contenido, pero el <code>header</code>{' '}
        y el <code>footer</code> permanecerán igual (por esto le llamamos plantilla). Ahora, procederemos agregando algo
        sencillo en el <code>about.html</code> y en el <code>contact.html</code>:

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
              '    My telegram <a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>\n' +
              '</p>\n' +
              '{% endblock %}\n'
            }
          </code>
        </pre>

        Ahora para renderizar el contenido en el navegador se debe utilizar la función <code>render_template</code> de flask.
        Para utilizar esta función en el <code>views.py</code> hacemos:

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

        Posteriormente, procedemos a configurar la sección de <code>articles.html</code>.
      </p>

    </Container>
  </div>
)};

AplicacionFlaskMySql.propTypes = {};

AplicacionFlaskMySql.defaultProps = {};

export default AplicacionFlaskMySql;
