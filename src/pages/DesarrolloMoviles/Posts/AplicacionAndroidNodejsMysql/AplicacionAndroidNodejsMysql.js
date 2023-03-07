import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionAndroidNodejsMysql.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';


const AplicacionAndroidNodejsMysql = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Aplicación Android + Node.js + MySQL | Desarrollo de software para plataformas móviles</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Conectar una aplicación Android con un servidor en Node.js 
          utilizando el framework de express que a su vez se 
          comunica con MySQL para realizar un CRUD."></meta>
        <meta name="keywords" content="
          Aplicación Android con Node.js y MySQL JDCC,
          Aplicación Android con Node.js y MySQL Juan,
          Aplicación Android con Node.js y MySQL Juan Diego,
          Aplicación Android con Node.js y MySQL Juan Diego Cobo,
          Aplicación Android con Node.js y MySQL Juan Diego Cobo Cabal,
          Aplicación Android + Node.js + MySQL desarrollo móviles,
          Aplicación Android + Node.js + MySQL desarrollo de software,
          Aplicación Android + Node.js + MySQL desarrollo de software para plataformas,
          Aplicación Android + Node.js + MySQL desarrollo de software para plataformas móviles,
          Aplicación Android + Node.js + MySQL Desarrollo móviles,
          Aplicación Android + Node.js + MySQL Desarrollo de software,
          Aplicación Android + Node.js + MySQL Desarrollo de software para plataformas,
          Aplicación Android + Node.js + MySQL Desarrollo de software para plataformas móviles,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div>
        <Header />

        <div className="container my-5 px-5">
          <h1 className="h1 text-dark text-center">
            Aplicación Android + Node.js + MySQL
          </h1>

          <p className="mt-3">
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
            el script de creación de la base de datos) y la aplicación android.
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
            Luego, crearemos el proyecto en Android Studio donde haremos referencia a la carpeta <i>app</i>.
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

          <div className="container-fluid text-center">
            <img className="w-75" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/gui-activity-main.PNG"} />
          </div>

          <p className="mt-3">
            <b>Nota</b><br />
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

          <div className="container-fluid text-center">
            <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/activity-temporal-user.PNG"} />
          </div>

          <h2 className="h2 text-dark mt-5">
            Iniciando el servidor
          </h2>

          <p>
            Para desarrollar el servidor se debe tener instalado en los equipos Node.js. En esta caso, se estará
            trabajando con la versión <b>16.17.0.</b><br />
            El servidor se desarrollará empleando el framework de <i>Express</i> y la librería de mysql para
            conectarse con la base de datos.<br /><br />

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
            instrucciones en un archivo <i>.sql</i> que se guardará en la carpeta de <i>backend</i>.<br /><br />

            Así pues, el archivo deberá especificar la creación de la base de datos, usar dicha base de datos
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
            <i> Server listening on port 3001...</i>
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

                '    let query_usuarios = "SELECT * FROM USUARIO";\n' +
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
            Si al acceder a la ruta visualizamos el JSON que se ve en la sección de código anterior, podemos concluir
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
            Luego de ello creamos un método al que denominaremos <code className="language-plaintext">iniciarSesion</code> que contedrá lo siguiente:

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
            y accedimos a <code>localhost:3001.</code> En mi caso, cuando hice click en el emulador y visualicé el siguiente mensaje: <br /><br />
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
            Petición <code>GET</code> para iniciar sesión - Android
          </h2>

          <p>
            Si todo lo anterior nos ha funcionado podemos empezar a realizar las configuraciones que de verdad nos atañen. Para comenzar
            con la configuración <code>get</code> de inicio de sesión, debemos tener algo muy similar al código pasado. Lo único que varía
            es que envíaremos los datos como un <code>query</code> en la url de la siguiente manera:

            <pre>
              <code className="language-java">
                {
                  "edCedula = (EditText) findViewById(R.id.edCedula);\n" +
                  "edContrasena = (EditText) findViewById(R.id.edContrasena);\n\n" +

                  "String cedula = edCedula.getText().toString();\n" +
                  "String contrasena = edContrasena.getText().toString();\n\n" +

                  'String query = String.format("?cedula=%s&contrasena=%s",\n' +
                  "  URLEncoder.encode(cedula, charset),\n" +
                  "  URLEncoder.encode(contrasena, charset));\n\n" +

                  'URL url = new URL(String.format("http://%s:3001/%s", ip, query));\n' +
                  "HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();\n" +
                  'urlConnection.setRequestMethod("GET");\n' +
                  'urlConnection.setRequestProperty("Accept-Charset", charset);\n' +
                  'urlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=" + charset);\n' +
                  "..."
                }
              </code>
            </pre>

            En las primeras dos líneas lo que se hace es obtener el <code>EditText</code> por medio del <code>id</code> definido en el
            archivo <code>layout.</code> Luego, lo que se hace es obtener los valores ingresados en cada uno de los EditText
            y se agregan a una variable <code>query.</code> Finalmente, se declara una variable de tipo <code>URL</code> que
            se utilizará para iniciar la conexión configurando algunas características adicionales.
            <br /><br />
            Después debemos buscar obtener la respuesta otorgada por el servidor. El código correspondiente a esta parte
            luce así:

            <pre>
              <code className="language-java">
                {
                  'BufferedReader rd = new BufferedReader(new InputStreamReader(\n' +
                  '                  urlConnection.getInputStream()));\n\n' +

                  'String jsonResponse = rd.readLine();\n\n' +
                  'JSONObject jsonValue = new JSONObject(jsonResponse);\n' +
                  'int code = jsonValue.getInt("code");\n\n' +
                  'if (code == 200) {\n' +
                  '    JSONObject data = jsonValue.getJSONObject("data");\n' +
                  '    String nombre = data.getString("nombre");\n' +
                  '    String apellido = data.getString("apellido");\n' +
                  '    String telefono = data.getString("telefono");\n\n' +

                  '    MainActivity.this.runOnUiThread(new Runnable() {\n' +
                  '        public void run() {\n' +
                  '            Toast toast = Toast.makeText(context, "Welcome!", Toast.LENGTH_SHORT);\n' +
                  '            toast.show();\n' +
                  '        }\n' +
                  '    });\n\n' +

                  '    // Passing data to another Activity\n' +
                  '    Intent i = new Intent(MainActivity.this, UserActivity.class);\n' +
                  '    i.putExtra("cedula", cedula);\n' +
                  '    i.putExtra("contrasena", contrasena);\n' +
                  '    i.putExtra("nombre", nombre);\n' +
                  '    i.putExtra("apellido", apellido);\n' +
                  '    i.putExtra("telefono", telefono);\n' +
                  '    startActivity(i);\n' +
                  '} else {\n' +
                  '    MainActivity.this.runOnUiThread(new Runnable() {\n' +
                  '        public void run() {\n' +
                  '            Toast toast = Toast.makeText(context, "Wrong credentials!", Toast.LENGTH_SHORT);\n' +
                  '            toast.show();\n' +
                  '        }\n' +
                  '    });\n' +
                  '}\n' +
                  '...'
                }
              </code>
            </pre>

            Aquí básicamente creamos un objeto de tipo <code>BufferedReader</code> a partir
            del <code>InputStreamReader</code> del objeto de la conexión. Luego de ello, guardamos lo retornado
            en la variable de tipo <code>String</code> llamada <code>jsonResponse</code>. Luego, esta variable
            se convierte a un objeto de tipo <code>JSONObject</code> del cual obtenemos el parámetro de {' '}
            <code>code</code>{' '} para verificar si es un <span className="text-success fw-bold">200.</span>
            <br /><br />
            Así, obtenemos los demás datos restantes del JSONObject y generamos un <code>Toast</code> para
            informarle al usuario que su inicio de sesión ha sido exitoso.
          </p>

          <p className="bg-warning p-3 my-3">
            <b>¡Atención!</b><br />
            Como se puede ver en el código, el toast se genera en una función denominada <code>runOnUiThread</code> y
            esto se debe a que el método está corriendo en un hilo paralelo (<code>Thread</code>).
          </p>

          <p>
            Lugo de ello, si los datos fueron correctos, se pasará al otro <code>activity</code> con
            los datos correspondientes. El código completo del método de iniciar sesión luce así:

            <pre>
              <code className="language-java">
                {
                  'public void iniciarSesion(View v) {\n' +
                  '    Thread thread = new Thread(new Runnable() {\n\n' +

                  '      @Override\n' +
                  '      public void run() {\n' +
                  '          try {\n' +
                  '              String charset = "UTF-8";\n\n' +

                  '              edCedula = (EditText) findViewById(R.id.edCedula);\n' +
                  '              edContrasena = (EditText) findViewById(R.id.edContrasena);\n\n' +

                  '              String cedula = edCedula.getText().toString();\n' +
                  '              String contrasena = edContrasena.getText().toString();\n\n' +

                  '              String query = String.format("?cedula=%s&contrasena=%s",\n' +
                  '                      URLEncoder.encode(cedula, charset),\n' +
                  '                      URLEncoder.encode(contrasena, charset));\n\n' +

                  '              Context context = getApplicationContext();\n\n' +

                  '              URL url = new URL(String.format("http://%s:3001/%s", ip, query));\n' +
                  '              HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();\n' +
                  '              urlConnection.setRequestMethod("GET");\n' +
                  '              urlConnection.setRequestProperty("Accept-Charset", charset);\n' +
                  '              urlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=" + charset);\n' +

                  '              BufferedReader rd = new BufferedReader(new InputStreamReader(\n' +
                  '                      urlConnection.getInputStream()));\n\n' +

                  '              String jsonResponse = rd.readLine();\n\n' +

                  '              JSONObject jsonValue = new JSONObject(jsonResponse);\n' +
                  '              int code = jsonValue.getInt("code");\n\n' +

                  '              if (code == 200) {\n' +
                  '                  JSONObject data = jsonValue.getJSONObject("data");\n' +
                  '                  String nombre = data.getString("nombre");\n' +
                  '                  String apellido = data.getString("apellido");\n' +
                  '                  String telefono = data.getString("telefono");\n\n' +

                  '                  MainActivity.this.runOnUiThread(new Runnable() {\n' +
                  '                      public void run() {\n' +
                  '                          Toast toast = Toast.makeText(context, "Welcome!", Toast.LENGTH_SHORT);\n' +
                  '                          toast.show();\n' +
                  '                      }\n' +
                  '                  });\n\n' +

                  '                  // Passing data to another Activity\n' +
                  '                  Intent i = new Intent(MainActivity.this, UserActivity.class);\n' +
                  '                  i.putExtra("cedula", cedula);\n' +
                  '                  i.putExtra("contrasena", contrasena);\n' +
                  '                  i.putExtra("nombre", nombre);\n' +
                  '                  i.putExtra("apellido", apellido);\n' +
                  '                  i.putExtra("telefono", telefono);\n' +
                  '                  startActivity(i);\n' +
                  '              } else {\n' +
                  '                  MainActivity.this.runOnUiThread(new Runnable() {\n' +
                  '                      public void run() {\n' +
                  '                          Toast toast = Toast.makeText(context, "Wrong credentials!", Toast.LENGTH_SHORT);\n' +
                  '                          toast.show();\n' +
                  '                      }\n' +
                  '                  });\n' +
                  '              }\n' +
                  '          } catch (Exception e) {\n' +
                  '            Log.d("Error on sign up", "Ocurrió un error al intentar iniciar sesión.");\n' +
                  '            Log.d("Error on sign up", e.toString());\n' +
                  '          }\n' +
                  '      }\n' +
                  '  });\n\n' +

                  '  if (thread.isAlive()) {\n' +
                  '    // Ending thread after there was a successful login\n' +
                  '    thread.interrupt();\n' +
                  '  }\n\n' +

                  '  thread.start();\n' +
                  '}\n'
                }
              </code>
            </pre>
          </p>

          <h2 className="h2 text-dark mt-5">
            Petición <code>GET</code> para iniciar sesión - Nodejs
          </h2>

          <p>
            Ahora bien, para configurar el inicio de sesión del servidor debemos tener un código similar
            a:

            <pre>
              <code className="language-javascript">
                {
                  '// Routes\n' +
                  "app.route('/')\n" +
                  '...\n' +
                  '.get((req, res) => {\n' +
                  '    let cedula = req.query.cedula;\n' +
                  '    let contrasena = req.query.contrasena;\n\n' +

                  '    let query_iniciar = "SELECT * FROM `USUARIO` WHERE `cedula` = ? AND `contrasena` = ?";\n\n' +

                  '    connection.query(query_iniciar, [cedula, contrasena], (err, results, fields) => {\n' +
                  '        if (err) {\n' +
                  '            console.log("There was an error");\n' +
                  '            console.log(err);\n' +
                  '            res.json({\n' +
                  "                    'code': 500,\n" +
                  "                    'message': " + '"There was an server error."\n' +
                  '            });\n' +
                  "        } else {\n\n" +

                  '            if (results.length > 0) {\n' +
                  '                res.json({\n' +
                  "                    'code': 200,\n" +
                  "                    'message': 'Get values with success.',\n" +
                  "                    'data': results[0]\n" +
                  '                });\n' +
                  '            } else {\n' +
                  '                res.json({\n' +
                  "                    'code': 300,\n" +
                  "                    'message': 'There are no users in the database with that values.',\n" +
                  '                });\n' +
                  '            }\n' +
                  '        }\n' +
                  '    })\n' +
                  '})\n'
                }
              </code>
            </pre>

            Básicamente lo que hacemos aquí es recibir los valores que están en el query. Luego, creamos una variable
            que hará referencia a la consulta y se utilizará el método <code>.query</code> para enviar la consulta
            a la base de datos. Posteriormente verificamos si hubo un error o no y retornamos el código
            al cliente android que corresponde.
          </p>

          <p className="bg-info p-3">
            Debido a que se está trabajando con una sola entidad (<code>Usuarios</code>), tenemos una única ruta. Sin embargo,
            si tuviesemos varias entidades, lo más probable es que desearamos varias rutas:
            <ul>
              <li>Clientes {'->'} '/clientes'</li>
              <li>Vehículos {'->'} '/vehiculos'</li>
              <li>Materias {'->'} '/materias'</li>
              <li>Y así sucesivamente...</li>
            </ul>

            Eso sí, teniendo en mente esto, tendríamos que agregar cada petición para cada ruta.
          </p>

          <h2 className="h2 text-dark mt-5">
            Petición <code>POST</code> para registrarse - Android
          </h2>

          <p>
            Para crear un usuario primero debemos agregar un botón de registrarse similar al de iniciar sesión
            que se vio en la parte del inicio. Este botón se deberá configurar para pasar a un nuevo activity
            donde se efectuará dicho registro. En mi caso, he creado un activity llamado <code>activity_register</code>
            {' '}que contiene lo siguiente:

            <pre>
              <code className="language-xml">
                {
                  '<?xml version="1.0" encoding="utf-8"?>\n' +
                  '<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"\n' +
                  '    xmlns:app="http://schemas.android.com/apk/res-auto"\n' +
                  '    xmlns:tools="http://schemas.android.com/tools"\n' +
                  '    android:layout_width="match_parent"\n' +
                  '    android:layout_height="match_parent">\n\n' +

                  '    <TextView\n' +
                  '        android:id="@+id/textView3"\n' +
                  '        android:layout_width="wrap_content"\n' +
                  '        android:layout_height="wrap_content"\n' +
                  '        android:layout_marginStart="15dp"\n' +
                  '        android:layout_marginTop="4dp"\n' +
                  '        android:layout_marginEnd="296dp"\n' +
                  '        android:layout_marginBottom="2dp"\n' +
                  '        android:text="Cédula"\n' +
                  '        android:textSize="32dp"\n' +
                  '        app:layout_constraintBottom_toTopOf="@+id/edCedulaReg"\n' +
                  '        app:layout_constraintEnd_toEndOf="parent"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toTopOf="parent" />\n\n' +

                  '    <EditText\n' +
                  '        android:id="@+id/edCedulaReg"\n' +
                  '        android:layout_width="368dp"\n' +
                  '        android:layout_height="48dp"\n' +
                  '        android:layout_marginStart="15dp"\n' +
                  '        android:layout_marginTop="2dp"\n' +
                  '        android:layout_marginEnd="23dp"\n' +
                  '        android:layout_marginBottom="4dp"\n' +
                  '        android:ems="10"\n' +
                  '        android:inputType="textPersonName"\n' +
                  '        app:layout_constraintBottom_toTopOf="@+id/textView4"\n' +
                  '        app:layout_constraintEnd_toEndOf="parent"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toBottomOf="@+id/textView3" />\n\n' +

                  '    <TextView\n' +
                  '        android:id="@+id/textView4"\n' +
                  '        android:layout_width="wrap_content"\n' +
                  '        android:layout_height="wrap_content"\n' +
                  '        android:layout_marginStart="15dp"\n' +
                  '        android:layout_marginTop="4dp"\n' +
                  '        android:layout_marginEnd="226dp"\n' +
                  '        android:layout_marginBottom="2dp"\n' +
                  '        android:text="Contraseña"\n' +
                  '        android:textSize="32dp"\n' +
                  '        app:layout_constraintBottom_toTopOf="@+id/edContrasenaReg"\n' +
                  '        app:layout_constraintEnd_toEndOf="parent"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toBottomOf="@+id/edCedulaReg" />\n\n' +

                  '    <EditText\n' +
                  '        android:id="@+id/edContrasenaReg"\n' +
                  '        android:layout_width="368dp"\n' +
                  '        android:layout_height="48dp"\n' +
                  '        android:layout_marginStart="15dp"\n' +
                  '        android:layout_marginTop="2dp"\n' +
                  '        android:layout_marginEnd="23dp"\n' +
                  '        android:layout_marginBottom="4dp"\n' +
                  '        android:ems="10"\n' +
                  '        android:inputType="textPersonName"\n' +
                  '        app:layout_constraintBottom_toTopOf="@+id/textView7"\n' +
                  '        app:layout_constraintEnd_toEndOf="parent"\n' +
                  '        app:layout_constraintHorizontal_bias="0.0"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toBottomOf="@+id/textView4" />\n\n' +

                  '    <TextView\n' +
                  '        android:id="@+id/textView7"\n' +
                  '        android:layout_width="wrap_content"\n' +
                  '        android:layout_height="wrap_content"\n' +
                  '        android:layout_marginStart="15dp"\n' +
                  '        android:layout_marginTop="4dp"\n' +
                  '        android:layout_marginEnd="295dp"\n' +
                  '        android:layout_marginBottom="2dp"\n' +
                  '        android:text="Nombre"\n' +
                  '        android:textSize="32dp"\n' +
                  '        app:layout_constraintBottom_toTopOf="@+id/edNombreReg"\n' +
                  '        app:layout_constraintEnd_toEndOf="parent"\n' +
                  '        app:layout_constraintHorizontal_bias="0.0"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toBottomOf="@+id/edContrasenaReg" />\n\n' +

                  '    <EditText\n' +
                  '        android:id="@+id/edNombreReg"\n' +
                  '        android:layout_width="368dp"\n' +
                  '        android:layout_height="48dp"\n' +
                  '        android:layout_marginStart="15dp"\n' +
                  '        android:layout_marginTop="2dp"\n' +
                  '        android:layout_marginEnd="22dp"\n' +
                  '        android:layout_marginBottom="4dp"\n' +
                  '        android:ems="10"\n' +
                  '        android:inputType="textPersonName"\n' +
                  '        app:layout_constraintBottom_toTopOf="@+id/textView11"\n' +
                  '        app:layout_constraintEnd_toEndOf="parent"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toBottomOf="@+id/textView7" />\n\n' +

                  '    <TextView\n' +
                  '        android:id="@+id/textView11"\n' +
                  '        android:layout_width="wrap_content"\n' +
                  '        android:layout_height="wrap_content"\n' +
                  '        android:layout_marginStart="15dp"\n' +
                  '        android:layout_marginTop="4dp"\n' +
                  '        android:layout_marginEnd="272dp"\n' +
                  '        android:layout_marginBottom="2dp"\n' +
                  '        android:text="Apellido"\n' +
                  '        android:textSize="32dp"\n' +
                  '        app:layout_constraintBottom_toTopOf="@+id/edApellidoReg"\n' +
                  '        app:layout_constraintEnd_toEndOf="parent"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toBottomOf="@+id/edNombreReg" />\n\n' +

                  '    <EditText\n' +
                  '        android:id="@+id/edApellidoReg"\n' +
                  '        android:layout_width="368dp"\n' +
                  '        android:layout_height="48dp"\n' +
                  '        android:layout_marginStart="15dp"\n' +
                  '        android:layout_marginTop="2dp"\n' +
                  '        android:layout_marginEnd="23dp"\n' +
                  '        android:layout_marginBottom="4dp"\n' +
                  '        android:ems="10"\n' +
                  '        android:inputType="textPersonName"\n' +
                  '        app:layout_constraintBottom_toTopOf="@+id/textView12"\n' +
                  '        app:layout_constraintEnd_toEndOf="parent"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toBottomOf="@+id/textView11" />\n\n' +

                  '    <TextView\n' +
                  '        android:id="@+id/textView12"\n' +
                  '        android:layout_width="wrap_content"\n' +
                  '        android:layout_height="wrap_content"\n' +
                  '        android:layout_marginStart="15dp"\n' +
                  '        android:layout_marginTop="4dp"\n' +
                  '        android:layout_marginEnd="261dp"\n' +
                  '        android:layout_marginBottom="2dp"\n' +
                  '        android:text="Telefono"\n' +
                  '        android:textSize="32dp"\n' +
                  '        app:layout_constraintBottom_toTopOf="@+id/edTelefonoReg"\n' +
                  '        app:layout_constraintEnd_toEndOf="parent"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toBottomOf="@+id/edApellidoReg" />\n\n' +

                  '    <EditText\n' +
                  '        android:id="@+id/edTelefonoReg"\n' +
                  '        android:layout_width="368dp"\n' +
                  '        android:layout_height="48dp"\n' +
                  '        android:layout_marginStart="15dp"\n' +
                  '        android:layout_marginTop="2dp"\n' +
                  '        android:layout_marginEnd="22dp"\n' +
                  '        android:layout_marginBottom="4dp"\n' +
                  '        android:ems="10"\n' +
                  '        android:inputType="textPersonName"\n' +
                  '        app:layout_constraintBottom_toTopOf="@+id/button5"\n' +
                  '        app:layout_constraintEnd_toEndOf="parent"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toBottomOf="@+id/textView12" />\n' +

                  '    <Button\n' +
                  '        android:id="@+id/button5"\n' +
                  '        android:layout_width="wrap_content"\n' +
                  '        android:layout_height="wrap_content"\n' +
                  '        android:layout_marginStart="300dp"\n' +
                  '        android:layout_marginTop="17dp"\n' +
                  '        android:layout_marginEnd="80dp"\n' +
                  '        android:layout_marginBottom="10dp"\n' +
                  '        android:text="Cancelar"\n' +
                  '        android:onClick="cancelar"\n' +
                  '        app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '        app:layout_constraintEnd_toEndOf="parent"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toBottomOf="@+id/edTelefonoReg" />\n\n' +

                  '    <Button\n' +
                  '        android:id="@+id/button6"\n' +
                  '        android:layout_width="wrap_content"\n' +
                  '        android:layout_height="wrap_content"\n' +
                  '        android:layout_marginStart="50dp"\n' +
                  '        android:layout_marginTop="24dp"\n' +
                  '        android:layout_marginEnd="100dp"\n' +
                  '        android:layout_marginBottom="10dp"\n' +
                  '        android:text="Registrarse"\n' +
                  '        android:onClick="registrarse"\n' +
                  '        app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '        app:layout_constraintEnd_toStartOf="@+id/button5"\n' +
                  '        app:layout_constraintStart_toStartOf="parent"\n' +
                  '        app:layout_constraintTop_toBottomOf="@+id/edTelefonoReg" />\n' +
                  '</androidx.constraintlayout.widget.ConstraintLayout>'
                }
              </code>
            </pre>
          </p>

          <p className="bg-warning p-3">
            Hay que tener en cuenta que para los botones ya se han definido los métodos por lo que en caso de
            cambiar el nombre de los métodos se debe tener en cuenta también cambiar la propiedad <code>onClick</code>
            {' '}del xml.
          </p>

          <p>
            Ahora bien, para pasar del activity_main al acitivty_register se debe crear un método en la clase{' '}
            <code>Main.java</code> que active dicha ejecución, de esta manera:

            <pre className="m-0">
              <code className="m-0 p-3 language-java">
                {
                  'public void irRegistrarse(View v) {\n' +
                  '  // We travel the user to the next activity\n' +
                  '  startActivity(new Intent(MainActivity.this, RegistrarseActivity.class));\n' +
                  '}'
                }
              </code>
            </pre>

          </p>

          <p className="p-3 bg-warning">
            Recordar agregar el método onClick dentro del xml.
          </p>

          <p>
            Una vez nos encontramos en la interfaz de registro, debemos crear un método (que
            en nuestro caso se ha denominado <code>registrarse</code>) y que debe contener lo
            siguiente:

            <pre>
              <code className="language-java">
                {
                  'public void registrarse(View v) {\n' +
                  '  Thread thread = new Thread(new Runnable() {\n' +
                  '      @Override\n' +
                  '      public void run() {\n' +
                  '          try {\n' +
                  '              String cedula = edCedulaReg.getText().toString();\n' +
                  '              String contrasena = edContrasenaReg.getText().toString();\n' +
                  '              String nombre = edNombreReg.getText().toString();\n' +
                  '              String apellido = edApellidoReg.getText().toString();\n' +
                  '              String telefono = edTelefonoReg.getText().toString();\n\n' +

                  '              URL url = new URL(String.format("http://%s:3001", ip));\n' +
                  '              HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();\n' +
                  '              String charset = "UTF-8";\n' +
                  '              urlConnection.setDoOutput(true);\n' +
                  '              urlConnection.setRequestMethod("POST");\n' +
                  '              urlConnection.setRequestProperty("Accept-Charset", charset);\n' +
                  '              urlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=" + charset);\n\n' +

                  '              Context context = getApplicationContext();\n\n' +

                  '              String query = String.format("cedula=%s&" +\n\n' +
                  '                      "contrasena=%s&" +\n' +
                  '                      "nombre=%s&" +\n' +
                  '                      "apellido=%s&" +\n' +
                  '                      "telefono=%s&",\n' +
                  '                      URLEncoder.encode(cedula, charset),\n' +
                  '                      URLEncoder.encode(contrasena, charset),\n' +
                  '                      URLEncoder.encode(nombre, charset),\n' +
                  '                      URLEncoder.encode(apellido, charset),\n' +
                  '                      URLEncoder.encode(telefono, charset));\n\n' +

                  '              OutputStream out = urlConnection.getOutputStream();\n' +
                  '              out.write(query.getBytes());\n\n' +

                  '              BufferedReader rd = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));\n\n' +

                  '              String jsonString = rd.readLine();\n' +
                  '              JSONObject jsonValue = new JSONObject(jsonString);\n\n' +

                  '              int code = jsonValue.getInt("code");\n\n' +

                  '              if (code == 200) {\n' +
                  '                  RegistrarseActivity.this.runOnUiThread(new Runnable() {\n' +
                  '                      @Override\n' +
                  '                      public void run() {\n' +
                  '                          Toast toast = Toast.makeText(context, "Se registrado el usuario con éxito!", Toast.LENGTH_SHORT);\n' +
                  '                          toast.show();\n' +
                  '                      }\n' +
                  '                  });\n\n' +

                  '                  // After sing up we move to the login screen\n' +
                  '                  startActivity(new Intent(RegistrarseActivity.this, MainActivity.class));\n' +
                  '              } else {\n' +
                  '                  RegistrarseActivity.this.runOnUiThread(new Runnable() {\n' +
                  '                      @Override\n' +
                  '                      public void run() {\n' +
                  '                          Toast toast = Toast.makeText(context, "No se logró crear el usuario", Toast.LENGTH_SHORT);\n' +
                  '                          toast.show();\n' +
                  '                      }\n' +
                  '                  });\n' +
                  '              }\n' +
                  '          } catch (Exception e) {\n' +
                  '              Log.d("Error", "Ocurrió un error mientras se intentaba registrar el usuario");\n' +
                  '          }\n' +
                  '      }\n' +
                  '  });\n\n' +

                  '  // Check if the thread have been already created\n' +
                  '  if (thread.isAlive()) {\n' +
                  '      thread.interrupt();\n' +
                  '  }\n\n' +

                  '  thread.start();\n' +
                  '}\n'
                }
              </code>
            </pre>
          </p>

          <p className="bg-info p-3">
            Aquí es importante tener en cuenta que el proceso es muy repetitivo y similar a todos los demás. Básicamente
            lo único que cambia es el método especificado (<code>GET, POST, PUT o DELETE</code>).
            <br /><br />
            Por otro lado, es importante tener en cuenta que se han declarado algunas variables globales. Por ejemplo,
            la variable <code>ip.</code> Con ella lo que se hace es declarar la ip de la máquina donde correrá el servidor.
            Si se utilizará el emulador de Android Studio se puede utilizar <code>localhost</code> aunque siempre
            es más recomendable utilizar la propia dirección ip. En mi caso, mi variable global está declarada de la siguiente manera:

            <pre className="m-0">
              <code className="p-3 bg-info language-java">
                {
                  'public class RegistrarseActivity extends AppCompatActivity {\n' +
                  '    ...\n' +
                  '    String ip = "172.30.96.1";'
                }
              </code>
            </pre>
          </p>

          <p>
            Ahora bien, la diferencia con la petición GET, es que las peticiones POST, PUT y DELETE enviarán
            los datos en el <code>body,</code> y no en el query. Esto implica crear una nueva variable
            denominada de tipo <code>OutputStream</code> con la que se especificará el body de la petición.
          </p>

          <p className="p-3 bg-info">
            También es importante tener en cuenta la parte final del método. Debido a que se están utilizando hilos
            se buscó preveer algún error relacionado a la memoria, pues si creamos múltiples hilos puede
            generar problemas para el dispositivo. Por ello, lo que se hace es que <b>si el hilo existe,</b>{' '}
            que lo detenga y cree uno nuevo.
          </p>

          <h2 className="h2 text-dark mt-5">
            Petición <code>POST</code> para registrarse - Nodejs
          </h2>

          <p>
            Para realizar el registro de usuarios, el código desde el servidor puede ser similar al siguiente:

            <pre>
              <code className="language-javascript">
                {
                  "// Routes\n" +
                  "app.route('/')\n" +
                  '...\n' +
                  '.post((req, res) => {\n' +
                  '  let cedula = req.body.cedula;\n' +
                  '  let contrasena = req.body.contrasena;\n' +
                  '  let nombre = req.body.nombre;\n' +
                  '  let apellido = req.body.apellido;\n' +
                  '  let telefono = req.body.telefono;\n\n' +

                  '  let query_registrarse = "INSERT INTO `USUARIO` VALUES(?, ?, ?, ?, ?)"\n\n' +

                  '  connection.query(query_registrarse, [cedula, contrasena, nombre, apellido, telefono], \n' +
                  '    (err, results, fields) => {\n' +
                  '        if (err) {\n' +
                  '            res.json({\n' +
                  "                'code': 300,\n" +
                  "                'message': 'There was an error while trying to sing up'\n" +
                  '            })\n' +
                  '        } else {\n' +
                  '            res.json({\n' +
                  "                'code': 200,\n" +
                  "                'message': 'Successful sing up'\n" +
                  '            })\n' +
                  '        }\n' +
                  '    });\n' +
                  '})\n'
                }
              </code>
            </pre>

            Como se puede observar, la diferencia radica en que se lee el body. También se cambia el query
            de un <code>SELECT</code> a un <code>INSERT</code> ya que vamos a crear un usuario.
          </p>

          <h2 className="h2 text-dark mt-5">
            Petición <code>PUT</code> para actualizar los datos - Android
          </h2>

          <p>
            Como lo he configurado, tanto la actualización como la eliminación de la cuenta se hará en el mismo layout.
            Este layout lo he denominado <code>activity_user.xml</code> y luce de la siguiente manera:

            <pre>
              <code className="language-xml">
                {
                  '<?xml version="1.0" encoding="utf-8"?>\n' +
                  '  <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"\n' +
                  '      xmlns:app="http://schemas.android.com/apk/res-auto"\n' +
                  '      xmlns:tools="http://schemas.android.com/tools"\n' +
                  '      android:layout_width="match_parent"\n' +
                  '      android:layout_height="match_parent"\n' +
                  '      tools:context=".UserActivity">\n\n' +

                  '      <TextView\n' +
                  '          android:id="@+id/textView"\n' +
                  '          android:layout_width="wrap_content"\n' +
                  '          android:layout_height="wrap_content"\n' +
                  '          android:text="Bienvenido señor/a"\n' +
                  '          android:textSize="30dp"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.088"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toTopOf="parent"\n' +
                  '          app:layout_constraintVertical_bias="0.023" />\n\n' +

                  '      <TextView\n' +
                  '          android:id="@+id/textView5"\n' +
                  '          android:layout_width="wrap_content"\n' +
                  '          android:layout_height="wrap_content"\n' +
                  '          android:text="Cedula"\n' +
                  '          android:textSize="20dp"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.045"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toTopOf="parent"\n' +
                  '          app:layout_constraintVertical_bias="0.092" />\n\n' +

                  '      <EditText\n' +
                  '          android:id="@+id/edTelefonoUser"\n' +
                  '          android:layout_width="0dp"\n' +
                  '          android:layout_height="37dp"\n' +
                  '          android:layout_marginStart="15dp"\n' +
                  '          android:layout_marginTop="20dp"\n' +
                  '          android:layout_marginEnd="15dp"\n' +
                  '          android:ems="10"\n' +
                  '          android:inputType="textPersonName"\n' +
                  '          android:minHeight="48dp"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.0"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toBottomOf="@+id/textView"\n' +
                  '          app:layout_constraintVertical_bias="0.593" />\n\n' +

                  '      <TextView\n' +
                  '          android:id="@+id/textView6"\n' +
                  '          android:layout_width="wrap_content"\n' +
                  '          android:layout_height="wrap_content"\n' +
                  '          android:text="Contraseña"\n' +
                  '          android:textSize="20dp"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.051"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toTopOf="parent"\n' +
                  '          app:layout_constraintVertical_bias="0.218" />\n\n' +

                  '      <EditText\n' +
                  '          android:id="@+id/edApellidoUser"\n' +
                  '          android:layout_width="0dp"\n' +
                  '          android:layout_height="37dp"\n' +
                  '          android:layout_marginStart="15dp"\n' +
                  '          android:layout_marginTop="20dp"\n' +
                  '          android:layout_marginEnd="15dp"\n' +
                  '          android:ems="10"\n' +
                  '          android:inputType="textPersonName"\n' +
                  '          android:minHeight="48dp"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="1.0"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toBottomOf="@+id/textView"\n' +
                  '          app:layout_constraintVertical_bias="0.449" />\n\n' +

                  '      <TextView\n' +
                  '          android:id="@+id/textView8"\n' +
                  '          android:layout_width="wrap_content"\n' +
                  '          android:layout_height="wrap_content"\n' +
                  '          android:text="Nombre"\n' +
                  '          android:textSize="20dp"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.047"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toTopOf="parent"\n' +
                  '          app:layout_constraintVertical_bias="0.343" />\n\n' +

                  '      <EditText\n' +
                  '          android:id="@+id/edNombreUser"\n' +
                  '          android:layout_width="0dp"\n' +
                  '          android:layout_height="37dp"\n' +
                  '          android:layout_marginStart="15dp"\n' +
                  '          android:layout_marginTop="20dp"\n' +
                  '          android:layout_marginEnd="15dp"\n' +
                  '          android:ems="10"\n' +
                  '          android:inputType="textPersonName"\n' +
                  '          android:minHeight="48dp"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.0"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toBottomOf="@+id/textView"\n' +
                  '          app:layout_constraintVertical_bias="0.312" />\n\n' +

                  '      <TextView\n' +
                  '          android:id="@+id/textView9"\n' +
                  '          android:layout_width="wrap_content"\n' +
                  '          android:layout_height="wrap_content"\n' +
                  '          android:text="Apellido"\n' +
                  '          android:textSize="20dp"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.047"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toTopOf="parent"\n' +
                  '          app:layout_constraintVertical_bias="0.464" />\n' +

                  '      <EditText\n' +
                  '          android:id="@+id/edContrasenaUser"\n' +
                  '          android:layout_width="379dp"\n' +
                  '          android:layout_height="37dp"\n' +
                  '          android:layout_marginStart="15dp"\n' +
                  '          android:layout_marginTop="20dp"\n' +
                  '          android:layout_marginEnd="15dp"\n' +
                  '          android:ems="10"\n' +
                  '          android:inputType="textPersonName"\n' +
                  '          android:minHeight="48dp"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.0"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toBottomOf="@+id/textView"\n' +
                  '          app:layout_constraintVertical_bias="0.169" />\n\n' +

                  '      <TextView\n' +
                  '          android:id="@+id/textView10"\n' +
                  '          android:layout_width="wrap_content"\n' +
                  '          android:layout_height="wrap_content"\n' +
                  '          android:text="Telefono"\n' +
                  '          android:textSize="20dp"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.048"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toTopOf="parent"\n' +
                  '          app:layout_constraintVertical_bias="0.59" />\n\n' +

                  '      <EditText\n' +
                  '          android:id="@+id/edCedulaUser"\n' +
                  '          android:layout_width="379dp"\n' +
                  '          android:layout_height="37dp"\n' +
                  '          android:layout_marginStart="15dp"\n' +
                  '          android:layout_marginTop="20dp"\n' +
                  '          android:layout_marginEnd="15dp"\n' +
                  '          android:ems="10"\n' +
                  '          android:inputType="textPersonName"\n' +
                  '          android:minHeight="48dp"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.0"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toBottomOf="@+id/textView"\n' +
                  '          app:layout_constraintVertical_bias="0.025" />\n\n' +

                  '      <Button\n' +
                  '          android:id="@+id/button2"\n' +
                  '          android:layout_width="wrap_content"\n' +
                  '          android:layout_height="wrap_content"\n' +
                  '          android:text="Regresar"\n' +
                  '          android:onClick="regresar"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.103"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toTopOf="parent"\n' +
                  '          app:layout_constraintVertical_bias="0.797" />\n\n' +

                  '      <Button\n' +
                  '          android:id="@+id/button4"\n' +
                  '          android:layout_width="wrap_content"\n' +
                  '          android:layout_height="wrap_content"\n' +
                  '          android:text="Eliminar cuenta"\n' +
                  '          android:onClick="eliminar"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.493"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toTopOf="parent"\n' +
                  '          app:layout_constraintVertical_bias="0.976" />\n\n' +

                  '      <Button\n' +
                  '          android:id="@+id/button3"\n' +
                  '          android:layout_width="wrap_content"\n' +
                  '          android:layout_height="wrap_content"\n' +
                  '          android:text="Actualizar"\n' +
                  '          android:onClick="actualizar"\n' +
                  '          app:layout_constraintBottom_toBottomOf="parent"\n' +
                  '          app:layout_constraintEnd_toEndOf="parent"\n' +
                  '          app:layout_constraintHorizontal_bias="0.875"\n' +
                  '          app:layout_constraintStart_toStartOf="parent"\n' +
                  '          app:layout_constraintTop_toTopOf="parent"\n' +
                  '          app:layout_constraintVertical_bias="0.797" />\n\n' +

                  '  </androidx.constraintlayout.widget.ConstraintLayout>\n'
                }
              </code>
            </pre>

            Ahora bien, el código del método que se ha denominado <code>actualizar</code>  y que se ha creado en el archivo <code>User.java</code>
            {' '} sería así:

            <pre>
              <code className="language-java">
                {
                  "public void actualizar(View v) {\n" +
                  "    Thread thread = new Thread(new Runnable() {\n\n" +

                  "        @Override\n" +
                  "        public void run() {\n" +
                  "            try {\n" +
                  "                edCedulaUser = (EditText) findViewById(R.id.edCedulaUser);\n" +
                  "                edContrasenaUser = (EditText) findViewById(R.id.edContrasenaUser);\n" +
                  "                edNombreUser = (EditText) findViewById(R.id.edNombreUser);\n" +
                  "                edApellidoUser = (EditText) findViewById(R.id.edApellidoUser);\n" +
                  "                edTelefonoUser = (EditText) findViewById(R.id.edTelefonoUser);\n\n" +

                  "                String nuevaCedula = edCedulaUser.getText().toString();\n" +
                  "                String nuevaContrasena = edContrasenaUser.getText().toString();\n" +
                  "                String nuevoNombre = edNombreUser.getText().toString();\n" +
                  "                String nuevoApellido = edApellidoUser.getText().toString();\n" +
                  "                String nuevoTelefono = edTelefonoUser.getText().toString();\n\n" +

                  '                URL url = new URL(String.format("http://%s:3001", ip));\n' +
                  "                HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();\n" +
                  '                String charset = "UTF-8";\n' +
                  "                urlConnection.setDoOutput(true);\n" +
                  '                urlConnection.setRequestMethod("PUT");\n' +
                  '                urlConnection.setRequestProperty("Accept-Charset", charset);\n' +
                  '                urlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=" + charset);\n\n' +

                  "                Context context = getApplicationContext();\n\n" +

                  '                String query = String.format("cedulaOriginal=%s&" +\n' +
                  '                        "nuevaCedula=%s&" +\n' +
                  '                        "nuevaContrasena=%s&" +\n' +
                  '                        "nuevoNombre=%s&" +\n' +
                  '                        "nuevoApellido=%s&" +\n' +
                  '                        "nuevoTelefono=%s&",\n' +
                  "                        URLEncoder.encode(cedulaOriginal, charset),\n" +
                  "                        URLEncoder.encode(nuevaCedula, charset),\n" +
                  "                        URLEncoder.encode(nuevaContrasena, charset),\n" +
                  "                        URLEncoder.encode(nuevoNombre, charset),\n" +
                  "                        URLEncoder.encode(nuevoApellido, charset),\n" +
                  "                        URLEncoder.encode(nuevoTelefono, charset));\n\n" +

                  "                OutputStream output = urlConnection.getOutputStream();\n" +
                  "                output.write(query.getBytes(charset));\n\n" +

                  "                BufferedReader rd = new BufferedReader(new InputStreamReader(\n" +
                  "                        urlConnection.getInputStream()));\n\n" +

                  "                String jsonResponse = rd.readLine();\n\n" +

                  "                JSONObject jsonValue = new JSONObject(jsonResponse);\n" +
                  '                int code = jsonValue.getInt("code");\n\n' +

                  "                if (code == 200) {\n" +
                  "                    // We have to change the values of the editText\n" +
                  "                    edCedulaUser.setText(nuevaCedula);\n" +
                  "                    cedulaOriginal = nuevaCedula;\n" +
                  "                    edContrasenaUser.setText(nuevaContrasena);\n" +
                  "                    edNombreUser.setText(nuevoNombre);\n" +
                  "                    edApellidoUser.setText(nuevoApellido);\n" +
                  "                    edTelefonoUser.setText(nuevoTelefono);\n\n" +

                  "                    UserActivity.this.runOnUiThread(new Runnable() {\n" +
                  "                        public void run() {\n" +
                  '                            Toast toast = Toast.makeText(context, "Se han efectuado los cambios con éxito!", Toast.LENGTH_SHORT);\n' +
                  "                            toast.show();\n" +
                  "                        }\n" +
                  "                    });\n" +
                  "                } else {\n" +
                  "                    // Rollback the data to the original\n" +
                  "                    edCedulaUser.setText(cedulaOriginal);\n" +
                  "                    edContrasenaUser.setText(edContrasenaUser.getText().toString());\n" +
                  "                    edNombreUser.setText(edNombreUser.getText().toString());\n" +
                  "                    edApellidoUser.setText(edApellidoUser.getText().toString());\n" +
                  "                    edTelefonoUser.setText(edTelefonoUser.getText().toString());\n" +

                  "                    UserActivity.this.runOnUiThread(new Runnable() {\n" +
                  "                        public void run() {\n" +
                  '                            Toast toast = Toast.makeText(context, "No se lograron efectuar los cambios.", Toast.LENGTH_SHORT);\n' +
                  "                            toast.show();\n" +
                  "                        }\n" +
                  "                    });\n" +
                  "                }\n" +
                  "            } catch (Exception e) {\n" +
                  '                Log.d("Error", "Ocurrió un error al intentar actualizar los datos del usuario");\n' +
                  '                Log.d("Error", e.toString());\n' +
                  "            }\n" +
                  "        }\n" +
                  "    });\n\n" +

                  "    if (thread.isAlive()) {\n" +
                  "        // Ending thread after there was a successful login\n" +
                  "        thread.interrupt();\n" +
                  "    }\n\n" +

                  "    thread.start();\n" +
                  "}\n"
                }
              </code>
            </pre>
          </p>

          <p className="p-3 bg-warning">
            Un detalle a tener en cuenta es que cuando se inicia sesión, la cédula original con la que se inició sesión se almacena en
            una variable global. Esto se hace para que en caso de que se desee actualizar la cédula, se tenga la referencia
            de la original para cambiarla a la nueva.
          </p>

          <h2 className="h2 text-dark mt-5">
            Petición <code>PUT</code> para actualizar los datos - Nodejs
          </h2>

          <p>
            La petición put para actualizar los datos desde Nodejs sería similar a:

            <pre>
              <code className="language-javascript">
                {
                  "// Routes\n" +
                  "app.route('/')\n" +
                  '...\n' +
                  '.put((req, res) => {\n' +
                  '  let cedulaOriginal = req.body.cedulaOriginal;\n' +
                  '  let nuevaCedula = req.body.nuevaCedula;\n' +
                  '  let nuevaContrasena = req.body.nuevaContrasena;\n' +
                  '  let nuevoNombre = req.body.nuevoNombre;\n' +
                  '  let nuevoApellido = req.body.nuevoApellido;\n' +
                  '  let nuevoTelefono = req.body.nuevoTelefono;\n\n' +

                  '  let query_actualizar = "UPDATE `USUARIO` SET `cedula` = ?, `contrasena` = ?, `nombre` = ?, " +\n' +
                  '      "`apellido` = ?, `telefono` = ? WHERE cedula = ?";\n\n' +

                  '  connection.query(query_actualizar, [nuevaCedula, nuevaContrasena, nuevoNombre, nuevoApellido, \n' +
                  '      nuevoTelefono, cedulaOriginal], (err, results, fields) => {\n' +
                  '          if (err) {\n' +
                  '              res.json({\n' +
                  "                  'code': 300,\n" +
                  "                  'message': 'Failed on update'\n" +
                  '              })\n' +
                  '          } else {\n' +
                  '              res.json({\n' +
                  "                  'code': 200,\n" +
                  "                  'message': 'Successful update'\n" +
                  '              })\n' +
                  '          }\n' +
                  '      })\n' +
                  '})\n'
                }
              </code>
            </pre>
          </p>

          <p className="p-3 bg-info">
            Aquí es importante tener en cuenta que para poder actualizar los datos del usuario
            se tiene que tomar como referencia la llave primaria - que en este caso es la cédula -,
            original.
          </p>

          <h2 className="h2 text-dark mt-5">
            Petición <code>DELETE</code> para eliminar cuenta - Android
          </h2>

          <p>
            Ahora para eliminar la cuenta, muy parecido a los métodos anteriores tenemos:

            <pre>
              <code className="language-java">
                {
                  'public void eliminar(View v) {\n' +
                  '    Thread thread = new Thread(new Runnable() {\n' +
                  '        @Override\n' +
                  '        public void run() {\n' +
                  '            try {\n' +
                  '                URL url = new URL(String.format("http://%s:3001", ip));\n' +
                  '                HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();\n' +
                  '                String charset = "UTF-8";\n' +
                  '                urlConnection.setDoOutput(true);\n' +
                  '                urlConnection.setRequestMethod("DELETE");\n' +
                  '                urlConnection.setRequestProperty("Accept-Charset", charset);\n' +
                  '                urlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=" + charset);\n\n' +

                  '                Context context = getApplicationContext();\n\n' +

                  '                String query = String.format("cedula=%s", cedulaOriginal);\n\n' +

                  '                OutputStream out = urlConnection.getOutputStream();\n' +
                  '                out.write(query.getBytes());\n\n' +

                  '                BufferedReader rd = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));\n\n' +

                  '                String jsonString = rd.readLine();\n\n' +

                  '                JSONObject jsonValue = new JSONObject(jsonString);\n' +
                  '                int code = jsonValue.getInt("code");\n\n' +

                  '                if (code == 200) {\n' +
                  '                    UserActivity.this.runOnUiThread(new Runnable() {\n' +
                  '                        @Override\n' +
                  '                        public void run() {\n' +
                  '                            Toast toast = Toast.makeText(context, "La cuenta fue eliminada con éxito!", Toast.LENGTH_SHORT);\n' +
                  '                            toast.show();\n' +
                  '                        }\n' +
                  '                    });\n\n' +

                  '                    // We have to go back to the login screen\n' +
                  '                    startActivity(new Intent(UserActivity.this, MainActivity.class));\n' +
                  '                } else {\n' +
                  '                    UserActivity.this.runOnUiThread(new Runnable() {\n' +
                  '                        @Override\n' +
                  '                        public void run() {\n' +
                  '                            Toast toast = Toast.makeText(context, "No se puedo eliminar la cuenta!", Toast.LENGTH_SHORT);\n' +
                  '                            toast.show();\n' +
                  '                        }\n' +
                  '                    });\n' +
                  '                }\n\n' +

                  '            } catch (Exception e) {\n' +
                  '                Log.d("Error", "Ocurrió un error al intentar eliminar la cuenta.");\n' +
                  '                Log.d("Error", e.toString());\n' +
                  '            }\n' +
                  '        }\n' +
                  '    });\n\n' +

                  '    if (thread.isAlive()) {\n' +
                  '        thread.interrupt();\n' +
                  '    }\n\n' +

                  '    thread.start();\n' +
                  '}\n'
                }
              </code>
            </pre>
          </p>

          <h2 className="h2 text-dark mt-5">
            Petición <code>DELETE</code> para eliminar cuenta - Nodejs
          </h2>

          <p>
            Finalmente, el código en Nodejs para eliminar la cuenta:

            <pre>
              <code className="language-javascript">
                {
                  ".delete((req, res) => {\n" +
                  "    let cedula = req.body.cedula;\n\n" +

                  '    let query_eliminar = "DELETE FROM `USUARIO` WHERE `cedula` = ?";\n\n' +

                  "    connection.query(query_eliminar, [cedula], (err, results, fields) => {\n" +
                  "        if (err) {\n" +
                  "            res.json({\n" +
                  "                'code': 300,\n" +
                  "                'message': 'Failed on delete user'\n" +
                  "            })\n" +
                  "        } else {\n" +
                  "            res.json({\n" +
                  "                'code': 200,\n" +
                  "                'message': 'User deleted with success'\n" +
                  "            })\n" +
                  "        }\n" +
                  "    })\n" +
                  "})\n"
                }
              </code>
            </pre>
          </p>

          <h2 className="h2 text-dark mt-5">
            Tener en cuenta
          </h2>

          <p>
            <ul>
              <li>
                Es importante agregar los permisos necesarios para el funcionamiento de la app. Para esto agregar en el android manifest:

                <pre>
                  <code className="language-xml">
                    {
                      '<uses-permission android:name="android.permission.INTERNET" />'
                    }
                  </code>
                </pre>
              </li>
              <li>Agregar los métodos con el parámetro de tipo <code>View</code> para poder agregarlos en el <code>onClick</code> del <code>xml</code>.</li>
              <li>Cambiar la ip a la que corresponda.</li>
              <li>Establecer el puerto donde corre el servidor en cada llamado a la <code>URL</code>. En nuestro caso, fue el puerto <code>3001.</code></li>
            </ul>
          </p>

          <h2 className="h2 text-dark mt-5">
            Finalización
          </h2>

          <p>
            Esta ha sido una guía corta para desarrollar una aplicación full stack con Android Studio + Nodejs + MySQL.
            <br /><br />
            El código del proyecto se encontrará en mi repositorio de github. Mi nombre de usuario es <code>Juandiego001</code> y
            el link del proyecto lo pueden encontrar <a href="https://github.com/Juandiego001/aplicacion-full-stack" target="_blank">aquí</a>.
            <br /><br />
            Cualquier duda, queja, recomendación o donación que deseen realizar me pueden contactar por telegram: <a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>.
            <br /><br />
            Espero les haya sido de gran ayuda :)
          </p>
        </div>

        <Footer />
      </div>
    </>
  )
};

AplicacionAndroidNodejsMysql.propTypes = {};

AplicacionAndroidNodejsMysql.defaultProps = {};

export default AplicacionAndroidNodejsMysql;