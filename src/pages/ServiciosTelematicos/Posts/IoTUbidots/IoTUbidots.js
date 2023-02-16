import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './IoTUbidots.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const IoTUbidots = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>IoT Ubidots | Servicios telemáticos</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Ejercicio de internet de las cosas (IoT) 
          utilizando la plataforma de Ubidots y 
          el API Rest en python con el framework 
          de Flask para el envío de datos."></meta>
        <meta name="keywords" content="
          iot ubidots,
          Iot Ubidots,
          Iot con Ubidots,
          Iot con Ubidots Servicios,
          Iot con Ubidots Servicios telemáticos,
          Iot con Ubidots Servicios telematicos,
          Iot con Ubidots Servicios telemáticos,
          Iot con Ubidots Servicios telematicos,
          Iot Ubidots Servicios,
          Iot Ubidots Servicios telemáticos,
          Iot Ubidots Servicios telematicos,
          Iot Ubidots Servicios telemáticos,
          Iot Ubidots Servicios telematicos,
          JDCC, 
          Juan, 
          Juan Diego, 
          Juan Diego Cobo, 
          Juan Diego Cobo Cabal"></meta>
      </Helmet>

      <div className="mb-4">
        <Header />

        <div className="container-fluid my-5 px-5">
          <h1 className="h1 text-dark">
            Iot Ubidots
          </h1>

          <p>
            La presente entrada es una práctica para aproximarse al tema de internet de las cosas. Utilizaremos el lenguaje de programación 
            python para construir una API que permita hacer peticiones
            a la plataforma de Ubidots. El proyecto en cuestión estará desplegado en una máquina CentOS 8 y, cuando lo ejecutemos,
            se enviarán los valores a la plataforma mencionada. También, utilizaremos el repositorio del profesor Oscar
            Mondragón para facilitar el proceso.
          </p>


          <div className="mt-5">
            <h2>
              Creación de cuenta en Ubidots
            </h2>

            <p>
              Para comenzar, tendremos que crear una cuenta en Ubidots. Para ello, nos dirigimos a su{' '}
              <a href="https://ubidots.com/" target="_blank">home.</a>{' '}
              Posterior a ello, tendremos que completar las experiencias de bienvenida para la cual solo tendremos que leer y completar un campo que hace
              referencia a nuestro número de teléfono. Una vez hemos completado eso, ya podremos empezar a operar con Ubidots.
            </p>
          </div>

          <div className="mt-5">
            <h2>
              Inicialización del vagrant
            </h2>

            <p>
              Una vez nos hemos registrado, podremos proceder con la creación de la máquina. Para ello, en su consola ejecute:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  'mkdir ubidots\n' +
                  'cd ubidots\n' +
                  'vagrant init'
                }
              </code>
            </pre>

            <p>
              Cuando se haya finalizado el proceso del <code>vagrant init</code> abrimos el archivo <code>Vagrantfile.</code>{' '}
              Esto en <code>Windows</code> lo hacemos con:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  'notepad Vagrantfile'
                }
              </code>
            </pre>

            <p>
              El contenido del archivo lo modificamos con:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  '# -*- mode: ruby -*-\n' +
                  '# vi: set ft=ruby :\n\n' +

                  'Vagrant.configure("2") do |config|\n' +
                  '  config.vm.define :server do |server|\n' +
                  '    server.vm.box = "centos/8"\n' +
                  '    server.vm.network "private_network", ip: "192.168.56.3"\n' +
                  '    server.vm.hostname = "server"\n' +
                  '  end\n' +
                  'end\n'
                }
              </code>
            </pre>

            <p>
              Posteriormente, inicializamos el servidor con:
            </p>

            <pre>
              <code>
                {
                  'vagrant up server'
                }
              </code>
            </pre>

            <p>
              Y luego de ello nos conectamos a la máquina con:
            </p>

            <pre>
              <code>
                {
                  'vagrant ssh server'
                }
              </code>
            </pre>

            <p>
              Y así ya estaremos conectados a nuestra máquina Centos.<br />
              <i>Se recomienda realizar <code>sudo -i</code> para iniciar como <code>root</code>.</i>
            </p>
          </div>

          <div className="mt-5">
            <h2>
              Instalación de librerías y módulos necesarios
            </h2>

            <p>
              Posterior a la incialización de la máquina, procedemos a instalar las librerías necesarias para correr
              todos los módulos necesarios.
            </p>

            <pre>
              <code className="language-cmd">
                {
                  'sudo -i\n' +
                  'sudo sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-*\n' +
                  'sudo yum update -y\n' +
                  'sudo yum install epel-release -y\n' +
                  'sudo yum install vim -y\n' +
                  'sudo yum install python3-pip -y\n' +
                  'sudo yum install git -y'
                }
              </code>
            </pre>

            <p>
              Luego, tendremos que instalar una librería adicional para el funcionamiento del repositorio del profesor:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  'sudo pip3 install requests'
                }
              </code>
            </pre>
          </div>

          <div className="mt-5">
            <h2>
              Clonación del repo
            </h2>

            <p>
              Después clonamos el repositorio del profesor Oscar Mondragón:{' '}
              <a href="https://github.com/omondragon/UbidotsClient" target="_blank">https://github.com/omondragon/UbidotsClient.</a>{' '}
              Para ello, ejecutamos en nuestra máquina Centos:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  'git clone https://github.com/omondragon/UbidotsClient'
                }
              </code>
            </pre>
          </div>

          <div className="mt-5">
            <h2>
              Modificación del código
            </h2>

            <p>
              Una vez hemos clonado el repositorio del profesor, tendremos que modificar el valor
              de la variable <code>TOKEN.</code> Para ello, ejecutamos lo siguiente:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  'cd UbidotsClient\n' +
                  'vim testUbidots.py'
                }
              </code>
            </pre>

            <p>
              Luego de ello, modificamos el valor de <code>TOKEN</code> por el que tengamos en nuestro perfil de Ubidots.
            </p>
          </div>

          <div className="mt-5 bg-info p-4">
            <h2>
              ¿Cómo encontrar nuestro <code>TOKEN</code>?
            </h2>

            <p>
              El token se puede encontrar en la página de Ubidots, una vez hemos iniciado sesión, haciendo click
              en nuestro ícono de usuario y posteriormente haciendo click en <code>My Profile</code> y luego
              dirigiendose a <code>API Credentials.</code> También, haciendo click en el ícono de usuario y 
              posteriormente haciendo click en <code>API Credentials</code>{' '}directamente.
            </p>
          </div>

          <div className="mt-5">
            <h2>
              Verificación de funcionamiento
            </h2>

            <p>
              Para verificar que todo está funcionando correctamente debemos ejecutar:
            </p>

            <pre>
              <code className="language-cmd">
                {
                  'python3 testUbidots.py'
                }
              </code>
            </pre>

            <p>
              Si recibimos un mensaje que nos indique que el dispositivo ha sido actualizado, podremos dirigirnos a <code>devices</code>{' '}
              en nuestro Ubidots y verificar que efectivamente tenemos un nuevo dispositivo de nombre <code>machine</code>.
            </p>
          </div>

          <div className="mt-5">
            <h2>
              Variables adicionales
            </h2>

            <p>
              Para agregar variables adicionales se sigue el proceso que se visualiza en el código:
            </p>

            <pre>
              <code className="language-python">
                {
                  'vim testUbidots.py\n' +
                  '...\n' +
                  'VARIABLE_LABEL_4 = "speed"  # Put your fourth variable label here\n' +
                  'VARIABLE_LABEL_5 = "height"  # Put your fifth variable label here\n' +
                  '...\n\n' +

                  'value_1 = random.randint(-10, 50)\n' +
                  'value_2 = random.randint(0, 85)\n\n' +

                  '# Creates a random gps coordinates\n' +
                  'lat = random.randrange(34, 36, 1) + \n' +
                  '    random.randrange(1, 1000, 1) / 1000.0\n' +
                  'lng = random.randrange(-83, -87, -1) + \n' +
                  '    random.randrange(1, 1000, 1) / 1000.0\n\n' +

                  'value_4 = random.randint(-100, 100)\n' +
                  'value_5 = random.randint(0, 60)\n\n' +

                  '...\n' +
                  'variable_3: {"value": 1, "context": {"lat": lat, "lng": lng}},\n' +
                  'variable_4: value_4,\n' +
                  'variable_5: value_5\n' +
                  '...'
                }
              </code>
            </pre>

            <p>
              Finalmente, ejecute <code>python3 testUbidots.py</code> para verificar el funcionamiento.
            </p>
          </div>

          <div className="mt-5">
            <h2>
              Pruebas con <code>CURL</code> y Postman
            </h2>

            <p>
              Para hacer las pruebas con <code>curl</code> ejecute desde una máquina centos lo siguiente (reemplazando los valores de <code>your-token</code> y
              {' '}<code>your-device</code> por los que les corresponde):
            </p>

            <pre>
              <code className="language-cmd">
                {
                  "curl -d " + "'{" + '"temperature":"32","humidity":"40","speed":"30", "height":"55"}' + "' -H " + '"Content-Type: application/json" -X POST http://things.ubidots.com/api/v1.6/devices/your-device/?token=your-token'
                }
              </code>
            </pre>

            <p>
              Aquí lo que se está haciendo es enviar nuevos valores a <code>machine.</code>
              <br /><br />
              Ahora bien, para probar con <code>postman</code> se debe:
            </p>

              <ol>
                <li>Colocar la url: <code>http://things.ubidots.com/api/v1.6/devices/your-device-label/?token=your-token</code> en <code>postman.</code></li>
                <li>Seleccionar el método <code>POST</code>.</li>
                <li>Dirigirse a: <code>Body {'->'} Raw {'->'} Json.</code></li>
                <li>
                  Agregar:

                  <pre>
                    <code>
                      {
                        '{\n' +
                        ' "temperature": "32",\n' +
                        ' "humidity": "40",\n' +
                        ' "speed": "30",\n' +
                        ' "height": "55"\n' +
                        '}'
                      }
                    </code>
                  </pre>
                </li>
              </ol>

            <p>
              Si para todos los datos enviados se retorna un valor de <code>201</code> es porque todo habrá funcionado correctamente.
            </p>
          </div>

          <div className="mt-5">
            <h2>
              Generación de alertas
            </h2>

            <p>
              Ahora bien, para agregar una alerta nos tendremos que dirigir a la sección de <code>devices,</code> seleccionar nuestro dispositivo
              y luego seleccionar <code>data.</code>{' '} Ahí, seleccionar <code>events</code> y  seleccionar el dispositivo, variable y método
              de alerta que deseemos obtener.
            </p>

            <div className="text-center my-5">
              <img className="w-50" src={process.env.PUBLIC_URL + "/septimo-semestre/servicios-telematicos/iot-ubidots/events.PNG"} />
            </div>
          </div>

          <div className="mt-5">
            <h2>
              Finalziación
            </h2>

            <p>
              Esta ha sido una explicación corta de cómo conectar un proyecto hecho en Python con la plataforma de 
              IoT Ubidots. Ante cualquier duda, queja, recomendación o donación que deseen realizar me pueden contactar 
              por telegram: <a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>.
              Espero les haya sido de gran ayuda :)
            </p>

            <p>
            Fecha de publicación: 14-02-2023.
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

IoTUbidots.propTypes = {};

IoTUbidots.defaultProps = {};

export default IoTUbidots;
