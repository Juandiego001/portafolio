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
        Si la máquina se encuentra apagada, ejecutar primero: <code>vagrant up server</code>
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
        Ahora, cuando vayamos a iniciar en MySQL tendremos siempreque agregar la flag <code>-p</code> y digitar
        la contraseña adecuada.
      </p>

      <p className="bg-info p-3">
        <b>Nota</b><br />
        Para salir de MySQL basta con ejecutar<code className="bg-info p-2 language-cmd">exit;</code>
      </p>



    </Container>
  </div>
)};

AplicacionFlaskMySql.propTypes = {};

AplicacionFlaskMySql.defaultProps = {};

export default AplicacionFlaskMySql;
