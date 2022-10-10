import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionAndroidNodejsMysql.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const AplicacionAndroidNodejsMysql = () => {

  // Setting title
  useEffect(() => {
    document.title = "Aplicación Android + Node.js + MySQL | Desarrollo de software para plataformas móviles";
    hljs.highlightAll();
  }, []);

  return (
  <div className="mb-4">
    <Header />
    <Menu />

    <Container className="mt-4 px-5" fluid>
      <h1 className="h1 text-dark">
        Aplicación Android + Node.js + MySQL
      </h1>

      <p className="text-start">
        En la presente entrada se explicará como desarrollar una aplicación Android que se comunique con un servidor
        en Node.js y que a su vez este se comunique con una base de datos MySQL. La idea será tener una 
        aplicación que simule el proceso iniciar sesión y registrarse por lo que se trabajará nada más 
        con una sola tabla llamada usuarios.
      </p>

      <h2 className="h2 text-dark mt-5">
        Introducción
      </h2>

      <p>
        Para iniciar, creamos una carpeta donde se almacenará tanto backend (servidor donde se incluirá
        el script de creación de la base de datos) y la aplicacion android.
      </p>

      <pre>
        <code className="language-plaintext">
          {
            "aplicacion-full-stack\n" +
            "  /app\n" +
            "  /backend"
          }
        </code>
      </pre>

      <p className="mt-3">
        Luego, cuando estemos creando el proyecto en Android Studio, haremos referencia a la carpeta que 
        se visualiza en la imagen llamada <i>app-android</i>.
      </p>
      
      <h2 className="h2 text-dark mt-5">
        Desarrollo de la app (Activity main)
      </h2>

      <p>
        Para el desarrollo de la app tendremos un <i>activity</i> simple para el inicio de sesión y otra 
        donde visualizaremos información del perfil. Así pues, tendremos los siguientes archivos en nuestra
        carpeta de <i>layouts:</i>
      </p>

      <pre>
        <code className="language-plaintext">
        {
            "res\n" +
            "  /drawable\n" +
            "  /layout\n" +
            "    ../activity_main.xml\n" +
            "    ../activity_user.xml"
          }
        </code>
      </pre>

      <p className="mt-3">
        En el <i>activity main</i> vamos a crear un inicio de sesión simple con un número de cédula y
        una contraseña de esta manera:
      </p>

      <Container className="text-center" fluid>
        <img className="w-75" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/gui-activity-main.PNG"} />
      </Container>
      
      <p className="mt-3">
          <b>Nota</b><br/>
          Para cambiar el tamaño de la fuente de texto debemos agregar la propiedad en el código
          del activity main de la siguiente manera:
      </p>
      
      <pre>
        <code className="language-xml">
          {
            "<TextView\n" +
            '  android:id="@+id/textView"\n' +
            '  android:layout_width="wrap_content"\n' +
            '  android:layout_height="wrap_content"\n' +
            '  android:text="Cédula"\n' +
            '  android:textSize="30dp"\n' +
            '  app:layout_constraintBottom_toBottomOf="parent"\n' +
            '  app:layout_constraintEnd_toEndOf="parent"\n' +
            '  app:layout_constraintHorizontal_bias="0.047"\n' +
            '  app:layout_constraintStart_toStartOf="parent"\n' +
            '  app:layout_constraintTop_toTopOf="parent"\n' +
            '  app:layout_constraintVertical_bias="0.052" />\n'
          }
        </code>
      </pre>

      <p className="mt-3">
          Para efectos de prueba, el activity de user tendrá un mensaje de bienvenida hasta que se logre
          configurar correctamente el inicio de sesión.
      </p>

      <Container className="text-center" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/activity-temporal-user.PNG"} />
      </Container>

      <h2 className="h2 text-dark mt-5">
        Iniciando el servidor
      </h2>

      <p>
        Para desarrollar el servidor se debe tener instalado en los equipos Node.js. En esta caso, se estará
        trabajando con la versión <b>16.17.0.</b><br />
        El servidor se desarrollará empleando el framework de <i>Express</i> y la librería de mysql para
        conectarse con la base de datos.<br /><br/>
        
        Para comenzar, nos dirigimos a la carpeta desde la consola de comandos y ejecutamos la instrucción <code>npm init</code> y 
        establecemos las características del proyecto.
      </p>

      <p className="mt-3">
        Para instalar express ejecutamos:<br />

        <pre>
        <code className="language-cmd">
          npm i express
        </code>
        </pre>

        y para el driver de mysql:

        <pre>
        <code className="language-cmd">
          npm i mysql
        </code>
        </pre>
        
      </p>

      <p className="mt-3">
        Posteriormente, creamos el archivo <i>index.js</i> donde estableceremos la conexión, las rutas
        donde se harán las peticiones HTTP y características adicionales que necesita el servidor 
        para poder decodificar las peticiones. Para ello, en primer lugar debemos importar las 
        librerías instaladas utilizando, para este caso, la palabra reservada <code>require</code> y 
        declarar el puerto donde escuchará nuestra aplicación. Luego agregamos las características 
        mencionadas:
      </p>

      <pre>
        <code className="language-javascript">
          {
            "const express = require('express')\n" +
            "const mysql = require('mysql')\n" +
            "const app = express()\n" +
            "const port = 3001\n\n" +
            "app.use(express.json())\n" +
            "app.use(express.urlencoded({extended: false}))"
          }
        </code>
      </pre>

      <p className="mt-3">
        La declaración de la constante <i>app</i> sirve para hacer referencia al servidor en cuestión. 
        Luego de ello, configuramos la conexión a MySQL:
      </p>

      <pre>
        <code className="language-javascript">
          {
            "// MySQL connection\n" +
            "const connection = mysql.createConnection({\n" +
            "    host: 'localhost',\n" +
            "    user: 'root',\n" +
            "    password: 'root',\n" +
            "    database: 'app_db'\n" +
            "});\n\n" +

            "// For testing connection\n" +
            "connection.connect();\n"
          }
        </code>
      </pre>
      
      <p>
        <b>Nota</b><br />
        Los valores del host, user, password y database deben ser cambiados a como se hayan denominado,
        es decir, en el caso de mi equipo, mi usuario y contraseña son <i>'root'</i> y estaré corriendo
        el servidor de MySQL en el localhost en el <b>puerto 3306</b> (valor que viene por defecto en 
        el conector de mysql). Por tal razón, en caso de tener MySQL corriendo en otro puerto se deberá
        agregar un nuevo par llave-valor que sea:<br />
        <pre>
          <code className="language-plaintext">
              port: número del puerto en cuestión
          </code>
        </pre>
      </p>

      <p>
        Luego de ello, configuramos una ruta de prueba inicial que luego iremos modificando para agregar 
        cada uno de los métodos GET, POST, PUT y DELETE.
      </p>
      
      <pre>
        <code className="language-javascript">
          {
            "// Routes\n" +
            "app.route('/')\n\n" +

            "  .get((req, res) => {\n" +
            "    res.json({\n" +
            "      'code': 200,\n" +
            "      'message': 'Hello World'\n" +
            "    })\n" +
            "  })\n"
          }
        </code>
      </pre>

      <p>
        Finalmente, le indicamos al servidor que se mantenga escuchando en el puerto 3001, de esta manera:
      </p>

      <pre>
          <code className="language-javascript">
            {
              "// Starting to listen\n" +
              "app.listen(port, () => {\n" +
              "  console.log('Server listen on port 3001...')\n" +
              "})"
            }
          </code>
      </pre>

      <p>
        Antes de comprobar que esté funcionando debemos proceder realizar la creación de la base de
        datos.
      </p>
      
      <h2 className="h2 text-dark mt-5">
        Creación de la base de datos
      </h2>
      
      <p>
        Para la creación de la base de datos emplearemos la consola de comandos y escribiremos todas las
        instrucciones en un archivo <i>.sql</i> que se guardará en la carpeta de <i>backend</i>.<br/><br/>
        
        Así pues, el archivo deberá especificar la cración de la base de datos, usar dicha base de datos
        y la creación de la tabla de los usuarios, de esta manera:
      </p>

      <pre>
        <code className="language-sql">
        {
          "-- Database creation\n" +
          "CREATE DATABASE app_db;\n\n" +
          
          "USE app_db;\n\n" +
          
          "-- Table users creation\n" +
          "CREATE TABLE USUARIO(\n" +
          "    cedula INTEGER PRIMARY KEY,\n" +
          "    contrasena VARCHAR(100),\n" +
          "    nombre VARCHAR(100),\n" +
          "    apellido VARCHAR(100),\n" +
          "    telefono VARCHAR(20),\n" +
          ");\n"
        }
        </code>
      </pre>      

      <p className="mt-3">
        A su vez, lo que podríamos hacer sería insertar dos usuarios de prueba. Para tales efectos utilizamos
        las siguientes instrucciones dentro de la shell de MySQL:<br />
      </p>
      <pre>
        <code className="language-sql">
          {
            "INSERT INTO USUARIO VALUES(123, 'juan123', 'Juan', 'C.', '3101234446');\n" +
            "INSERT INTO USUARIO VALUES(124, 'juan124', 'Diego', 'C.', '3111245556');"
          }
        </code>
      </pre>

      <h2 className="h2 text-dark mt-5">
        Pruebas servidor - MySQL
      </h2>

      <p>
        Para empezar a probar el servidor debemos ejecutar el archivo <i>index.js</i> con el comando 
        <i> node index.js</i> dentro de la carpeta de backend. Si no hay ningún error, nos deberá aparecer
        <i> Server listening on port 3000...</i>
      </p>

      <p>
        Es posible que surga un error acerca de los protocolos de autenticación de MySQL, es decir, nos sale un error simiar a:
        <pre>
          <code className="language-plaintext">
          Client does not support authentication protocol requested by server; consider upgrading MySQL client
          </code>
        </pre>
        
        Para arreglar este error basta con ejecutar el siguiente comando en la terminal de MySQL:
        <pre>
          <code className="language-sql">
            ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
          </code>
        </pre>

        Donde <code>root</code> corresponde al usuario del MySQL, <code>localhost</code> a la direccion IP (se puede dejar como <code>localhost </code> 
        si se está trabajando en una máquina de manera local) y <code>password</code> como la contraseña del usuario de MySQL.
      </p>

      <p>
        Así pues, cuando accedemos a la ruta de prueba, debemos visualizar el siguiente mensaje:
      </p>
      
      <pre>
          <code className="language-json">
            {
              '{"code": 200, "message": "Hello World"}'
            }
          </code>
      </pre>

      <p className="mt-3">
        Una vez comprobado que el servidor funciona, modificamos la ruta get para hacer una consulta a la
        base de datos y retornar los usuarios que tenemos listados. Para ello, utilizamos la constante
        <code> connection</code> que se creó para conectar MySQL con Nodejs y su método <code>query</code>.
        Estas modificaciones quedarían finalmente de la siguiente manera:
      </p>
      
      <pre>
        <code className="language-javascript">
          {
            ".get((req, res) => {\n\n" +

            '    let query_usuarios = "SELECT * FROM USUARIO";\n'+
            "    connection.query(query_usuarios, (err, results, fields) => {\n\n" +
            
            "        if (err) {\n" +
            '            console.log("There was an error");\n' +
            "            console.log(err);\n" +
            "            res.json({\n" +
            "                    'code': 500,\n" +
            "                    'message': 'There was an server error.'\n" +
            "            });\n" +
            "        } else {\n" +
            "            let data = [];\n\n" +
            
            "            for (let i = 0; i < results.length; i++) {\n" +
            "                data.push(results[i]);\n" +
            "            }\n\n" +
            
            "            res.json({\n" +
            "                    'code': 200,\n" +
            "                    'message': 'Values got it with success',\n" +
            "                    'data': data\n" +
            "            });\n" +
            "        }\n" +
            "    })\n" +
            "})"
        }
        </code>
      </pre>      

      <p className="mt-3">
        Cuando accedemos a la ruta del servidor, deberíamos visualizar lo siguiente:
      </p>

      <pre>
        <code className="language-json">
          {
            '{\n' +
            '  "code":200,\n' +
            '  "message":"Values got it with success",\n' +
            '  "data":[\n' +
            '    {\n' +
            '      "cedula":123,\n' +
            '      "contrasena":"juan123",\n' +
            '      "nombre":"Juan",\n' +
            '      "apellido":"C.",\n' +
            '      "telefono":"3101234446"\n' +
            '    },\n' +
            '    {\n' +
            '      "cedula":124,\n' +
            '      "contrasena":"juan124",\n' +
            '      "nombre":"Diego",\n' +
            '      "apellido":"C.",\n' +
            '      "telefono":"3111245556"}\n' +
            '    ]\n' +
            '  }\n'
          }
        </code>
      </pre>
      
      <p className="mt-3">
        Si al acceder a la ruta visualizamos el json que se ve en la imagen anterior, podemos concluir
        que todo está funcionando correctamente.
      </p>

      <h2 className="h2 text-dark mt-5">
        Pruebas Android - Servidor
      </h2>

      <p>
        Una vez que ya tenemos nuestro servidor funcionando y conectado con nuestra base de datos MySQL, lo que nos queda es empezar a hacer las conexiones con nuestro
        Android Studio. Para ello, lo primero que debemos hacer es modificar nuestra clase <code>Main.java</code> y agregar las siguientes librerías:
        <pre>
          <code className="language-java">
            {
              "import java.io.BufferedReader;\n" +
              "import java.io.InputStreamReader;\n" +
              "import java.net.URL;\n" +
              "import java.net.HttpURLConnection;\n"
            }
          </code>
        </pre>
      </p>

      <p>
        Luego de ello creamos un método al que denominaremos <code className="language-plaintext">iniciar sesión</code> que contedrá lo siguiente:

        <pre>
          <code className="language-java">
            {
              "Thread thread = new Thread(new Runnable() {\n\n" +

                  "\t@Override\n" +
                  "\tpublic void run() {\n" +
                      "\t\ttry  {\n" +
                          '\t\t\tURL url = new URL("http://192.168.1.10:3001");\n' +
                          "\t\t\tHttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();\n" +
                          "\t\t\tBufferedReader rd = new BufferedReader(new InputStreamReader(\n" +
                                  "\t\t\t\turlConnection.getInputStream()));\n" +
                          
                          '\t\t\tString allData = "";\n' +
                          "\t\t\tString line;\n" +
                          "\t\t\twhile ((line = rd.readLine()) != null) {\n" +
                              '\t\t\t\tLog.i("data", line);\n' +
                          "\t\t\t}\n\n" +
                        
                      "\t\t} catch (Exception e) {\n" +
                          '\t\t\tLog.d("Error on sign up", "Ocurrió un error al intentar iniciar sesión.");\n' +
                          '\t\t\tLog.d("Error on sign up", e.toString());\n' +
                      "\t\t}\n" +
                  "\t}\n" +
              "});\n\n" +
            
              "thread.start();"
            }
          </code>
        </pre>

        Ahora bien, cuando se esté declarando la URL se debe asignar la URL de la máquina donde estará corriendo el servidor de acuerdo a su interfaz correspondiente.
        Para ello, basta con dirigirse a la consola de comandos y digitar <code className="language-dos">ipconfig (para Windows y MAC) e ifconfig (para Linux). </code>
        Luego de esto, tenemos que dirigirnos al <code className="language-xml">activity main</code> del proyecto y agregar el método
        <code className="langauge-xml"> onClick</code> al botón de <code>iniciar sesión.</code> Hecho esto, nuestro botón de iniciar sesión 
        en el <code>activity main</code> debería lucir de la siguiente manera:
          
        <pre>
          <code className="language-xml">
            {
              "<Button\n" +
            '  android:id="@+id/button"\n' +
            '  android:layout_width="wrap_content"\n' +
            '  android:layout_height="wrap_content"\n' +
            '  android:layout_marginTop="52dp"\n' +
            '  android:text="Iniciar sesión"\n' +
            '  android:onClick="iniciarSesion"\n' +
            '  app:layout_constraintBottom_toBottomOf="parent"\n' +
            '  app:layout_constraintEnd_toEndOf="parent"\n' +
            '  app:layout_constraintHorizontal_bias="0.498"\n' +
            '  app:layout_constraintStart_toStartOf="parent"\n' +
            '  app:layout_constraintTop_toBottomOf="@+id/editTextTextPersonName2"\n' +
            '  app:layout_constraintVertical_bias="0.05" /> \n'
            }
          </code>
        </pre>

        Luego de esto, procedemos a realizar algunas pruebas cargando el aplicativo en nuestro teléfono, o con uno de los emuladores de Android Studio. Para 
        este caso, utilizaré el emulador. Ahora la cuestión sería que cuando hiciesemos click en el botón de iniciar sesión, se debería, por el momento, enviar una petición
        <code> GET</code> al servidor y con esa petición GET obtener la misma respuesta que obtuvimos cuando ejecutamos el servidor
        y accedimos a <code>localhost:3001.</code> En mi caso, cuando hice click en el emulador visualicé el siguiente mensaje: <br /><br /> 
      </p>

      <pre>
        <code className="language-plaintext">
          {
            'I/data: {"code":200,"message":"Values got it with success","data":[{"cedula":123,"contrasena":"juan123","nombre":"Juan","apellido":"C.","telefono":"3101234446"},{"cedula":124,"contrasena":"juan124","nombre":"Diego","apellido":"C.","telefono":"3111245556"}]}'
          }
        </code>
      </pre>

      <p className="mt-5">
        <b>Nota</b><br />
        En caso de que surga un error de conexión y se haya verificado anteriormente la dirección ip, es posible
        que esto se deba a temas de firewall y seguridad de las redes del entorno (por ejemplo en universidades,
        colegios y entidades del gobierno es posible que no funcione por dichas características de la red).<br /><br />

        Con lo anterior podemos concluir que ya está funcionando nuestro proceso de conexión Android - Servidor. Ahora bien,
        tenemos que configurar nuestra clase <code>Main.java</code> para que haga peticiones <code>POST</code> con el objetivo
        de probar el inicio de sesión.
      </p>

      <h2 className="h2 text-dark mt-5">
        Petición <code>POST</code> para iniciar sesión
      </h2>

      <p>
        
      </p>




    </Container>
  </div>
  )
};

AplicacionAndroidNodejsMysql.propTypes = {};

AplicacionAndroidNodejsMysql.defaultProps = {};

export default AplicacionAndroidNodejsMysql;
