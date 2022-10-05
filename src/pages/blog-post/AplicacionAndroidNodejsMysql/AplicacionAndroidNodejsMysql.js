import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionAndroidNodejsMysql.module.css';

// Custom components
import Header from '../../../components/Header/Header';
import Menu from '../../../components/Menu/Menu';

// Bootstrap components
import Container from 'react-bootstrap/Container';

const AplicacionAndroidNodejsMysql = () => {

  // Setting title
  useEffect(() => {
    document.title = "Aplicación Android + Node.js + MySQL | Desarrollo de software para plataformas móviles"
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
      
      <Container className="text-center" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/carpetas-proyecto.PNG"} />
      </Container>

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

      <Container className="text-center" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/archivos-layouts.PNG"} />
      </Container>

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

      <Container className="text-center" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/text-size.PNG"} />
      </Container>

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
        
        Para comenzar, nos dirigimos a la carpeta desde la consola de comandos y ejecutamos la instrucción
        <i>npm init</i> y establecemos las características del proyecto.
      </p>

      <Container className="text-center" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/npm-init.PNG"} />
      </Container>

      <p className="mt-3">
        Para instalar express ejecutamos:<br />
        <code>
          npm i express
        </code><br/>
        y para el driver de mysql:<br />
        <code>
          npm i mysql
        </code>
      </p>

      <Container className="text-center" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/npm-install.PNG"} />
      </Container>

      <p className="mt-3">
        Posteriormente, creamos el archivo <i>index.js</i> donde estableceremos la conexión y las rutas
        donde se harán las peticiones HTTP. Para ello, en primer lugar debemos importar las 
        librerías instaladas utilizando, para este caso, la palabra reservada <code>require</code> y 
        declarar el puerto donde escuchará nuestra aplicación de esta manera:
      </p>

      <Container className="text-center" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/require-index.PNG"} />
      </Container>

      <p className="mt-3">
        La declaración de la constante <i>app</i> sirve para hacer referencia al servidor en cuestión.
        <br /><br />
        Luego de ello, configuramos la conexión a MySQL:
      </p>

      <Container className="text-center" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/conexion-mysql-index.PNG"} />
      </Container>
      
      <p className="mt-3">
        <b>Nota</b><br />
        Los valores del host, user, password y database deben ser cambiados a como se hayan denominado,
        es decir, en el caso de mi equipo, mi usuario y contraseña son <i>'root'</i> y estaré corriendo
        el servidor de MySQL en el localhost en el <b>puerto 3306</b> (valor que viene por defecto en 
        el conector de mysql). Por tal razón, en caso de tener MySQL corriendo en otro puerto se deberá
        agregar un nuevo par llave-valor que sea:<br /><br />
        <pre>
          <code>
            {
              "port: número del puerto en cuestión"
            }
          </code>
        </pre>
      </p>

      <p className="mt-3">
        Luego de ello, configuramos una ruta de prueba inicial que luego iremos modificando para agregar 
        cada uno de los métodos GET, POST, PUT y DELETE.
      </p>

      <Container className="text-center" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/ruta-inicial.PNG"} />
      </Container>

      <p className="mt-3">
        Finalmente, le indicamos al servidor que se mantenga escuchando en el puerto 3000, de esta manera:
      </p>

      <Container className="text-center" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/escuchando-puerto.PNG"} />
      </Container>

      <p className="mt-3">
        Antes de comprobar que esté funcionando debemos proceder realizar la creación de la base de
        datos.
      </p>
      
      <h2 className="h2 text-dark mt-5">
        Creación de la base de datos
      </h2>
      
      <p className="">
        Para la creación de la base de datos emplearemos la consola de comandos y escribiremos todas las
        instrucciones en un archivo <i>.sql</i> que se guardará en la carpeta de <i>backend</i>.<br/><br/>
        
        Así pues, el archivo deberá especificar la cración de la base de datos, usar dicha base de datos
        y la creación de la tabla de los usuarios, de esta manera:
      </p>

      <Container className="text-center" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/script-database.PNG"} />
      </Container>

      <Container className="text-center mt-3" fluid>
        <img className="w-25" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/results-script.PNG"} />
      </Container>

      <p className="mt-3">
        A su vez, lo que podríamos hacer sería insertar dos usuarios de prueba. Para tales efectos utilizamos
        las siguientes instrucciones dentro de la shell de MySQL:<br />
        <code>INSERT INTO USUARIO VALUES(123, 'juan123', 'Juan', 'C.', '3101234446');</code><br/>
        <code>INSERT INTO USUARIO VALUES(124, 'juan124', 'Diego', 'C.', '3111245556');</code><br/>
      </p>

      <h2 className="h2 text-dark mt-5">
        Pruebas servidor - MySQL
      </h2>

      <p>
        Para empezar a probar el servidor debemos ejecutar el archivo <i>index.js</i> con el comando 
        <i> node index.js</i> dentro de la carpeta de backend. Si no hay ningún error, nos deberá aparecer
        <i> Server listening on port 3000...</i>
      </p>

      <p>
        <b>Nota</b><br/>
        En este punto se puede generar un error ya que se estará intentando correr diferentes aplicaciones
        en el mismo puerto. Para ello, lo que podremos hacer es cambiar la constante del puerto
        en el <i>index.js</i> y colocarlo en el <i>puerto 3001.</i>
      </p>

      <p>
        Así pues, cuando accedemos a la ruta de prueba, debemos visualizar el siguiente mensaje:
      </p>
      
      <Container className="text-center mt-3" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/ruta-prueba.PNG"} />
      </Container>

      <p className="mt-3">
        Una vez comprobado que el servidor funciona, modificamos la ruta get para hacer una consulta a la
        base de datos y retornar los usuarios que tenemos listados. Para ello, utilizamos la constante
        <code> connection</code> que se creó para conectar MySQL con Nodejs y su método <code>query</code>.
        Estas modificaciones quedarían finalmente de la siguiente manera:
      </p>

      <Container className="text-center mt-3" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/modificacion-ruta.PNG"} />
      </Container>

      <p className="mt-3">
        Cuando accedemos a la ruta del servidor, deberíamos visualizar lo siguiente:
      </p>

      <Container className="text-center mt-3" fluid>
        <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/desarrollo-moviles/aplicacion-android-nodejs-mysql/imgs/resultados-ruta-prueba.PNG"} />
      </Container>
      
      <p className="mt-3">
        Si al acceder a la ruta visualizamos el json que se ve en la imagen anterior, podemos concluir
        que todo está funcionando correctamente.
      </p>

      
    </Container>
  </div>
  )
};

AplicacionAndroidNodejsMysql.propTypes = {};

AplicacionAndroidNodejsMysql.defaultProps = {};

export default AplicacionAndroidNodejsMysql;
