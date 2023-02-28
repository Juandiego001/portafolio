import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionAndroidGPS.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const AplicacionAndroidGps = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Aplicación Android + GPS | Desarrollo de software para plataformas móviles</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          ¿Cómo utilizar el componente de GPS de los dispositivos Android 
          para realizar mapas, rutas y direcciones con 
          las coordenadas brindadas?"></meta>
        <meta name="keywords" content="
          Aplicación Android con GPS JDCC,
          Aplicación Android con GPS Juan,
          Aplicación Android con GPS Juan Diego,
          Aplicación Android con GPS Juan Diego Cobo,
          Aplicación Android con GPS Juan Diego Cobo Cabal,
          Aplicación Android + GPS desarrollo móviles,
          Aplicación Android + GPS desarrollo de software,
          Aplicación Android + GPS desarrollo de software para plataformas,
          Aplicación Android + GPS desarrollo de software para plataformas móviles,
          Aplicación Android + GPS Desarrollo móviles,
          Aplicación Android + GPS Desarrollo de software,
          Aplicación Android + GPS Desarrollo de software para plataformas,
          Aplicación Android + GPS Desarrollo de software para plataformas móviles,
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
            Aplicación Android + GPS
          </h1>

          <p>
            En esta práctica se mostrará como conectar una aplicación Android con el API de localización logrando
            obtener tanto ubicación actual, como dadas las coordenadas de latitud y longitud. Además
            se dejará la explicación del código para obtener la ubicación en tiempo real.
          </p>

          <h2 className="mt-5">Introducción</h2>

          <p>
            El IDE que se utilizará para desarrollar el proyecto es
            {' '}<span className="badge text-dark m-0 p-0">Android Studio.</span>{' '}
            Por lo cual, una vez creado el proyecto con esta herramienta se tendrá que configurar:
          </p>

          <ul>
            <li>El {' '}<span className="badge text-dark m-0 p-0">build.gradle</span>{' '} (del módulo).</li>
            <li>El {' '}<span className="badge text-dark m-0 p-0">AndroidManifest.xml.</span>{' '}</li>
            <li>El {' '}<span className="badge text-dark m-0 p-0">layout activity_main.xml.</span>{' '}</li>
            <li>Las clases {' '}<span className="badge text-dark m-0 p-0">.java.</span>{' '}</li>
          </ul>

          <h2 className="mt-5">Configuración del <code>build.gradle</code></h2>

          <p>
            Existen dos archivos
            {' '}<span className="badge text-dark m-0 p-0">build.gradle.</span>{' '}
            Ambos tienen el mismo nombre, pero si se visualizan desde el IDE de Android Studio,
            uno de ellos hará referencia a todos los proyectos en general y usualmente contiene
            algo similar a:
          </p>

          <pre className="language-gradle">
            <code>
              {
                "/* build.gradle (Project: nombre-del-proyecto) */\n" +
                "/* Este archivo puede cambiar de acuerdo a su versión de Android Studio */\n" +
                "// El mensaje inferior demuestra que es una configuración aplicada a todos los proyectos\n" +
                "// Top-level build file where you can add configuration options common to all sub-projects/modules.\n" +
                "plugins {\n" +
                "  id 'com.android.application' version '7.2.2' apply false\n" +
                "  id 'com.android.library' version '7.2.2' apply false\n" +
                "}\n" +
                "\n" +
                "task clean(type: Delete) {\n" +
                "  delete rootProject.buildDir\n" +
                "}\n"
              }
            </code>
          </pre>

          <p>
            Así, el que tendremos que modificar es el segundo
            {' '}<span className="badge text-dark m-0 p-0">build.gradle,</span>{' '}
            que generalmente se identifica por denominarse
            {' '}<span className="badge text-dark m-0 p-0">build.gradle (Module: nombre-del-proyecto.app)</span>{' '}
            y este es el que deberá contener lo siguiente:
          </p>

          <pre className="language-gradle">
            <code>
              {
                "plugins {\n" +
                "    id 'com.android.application'\n" +
                "}\n\n" +

                "android {\n" +
                "    compileSdk 32\n" +
                "\n" +
                "    defaultConfig {\n" +
                '        applicationId "com.example.nombre_del_proyecto"\n' +
                "        minSdk 30\n" +
                "        targetSdk 32\n" +
                "        versionCode 1\n" +
                '        versionName "1.0"\n\n' +

                '        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"\n' +
                "    }\n" +
                "  \n" +
                "    buildTypes {\n" +
                "        release {\n" +
                "            minifyEnabled false\n" +
                "            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'\n" +
                "        }\n" +
                "    }\n" +
                "    compileOptions {\n" +
                "        sourceCompatibility JavaVersion.VERSION_1_8\n" +
                "        targetCompatibility JavaVersion.VERSION_1_8\n" +
                "    }\n" +
                "}\n\n" +

                "dependencies {\n" +
                "    implementation 'androidx.appcompat:appcompat:1.5.1'\n" +
                "    implementation 'com.google.android.material:material:1.7.0'\n" +
                "    implementation 'androidx.constraintlayout:constraintlayout:2.1.4'\n" +
                "    testImplementation 'junit:junit:4.13.2'\n" +
                "    androidTestImplementation 'androidx.test.ext:junit:1.1.3'\n" +
                "    androidTestImplementation 'androidx.test.espresso:espresso-core:3.4.0'\n" +
                "}\n"
              }
            </code>
          </pre>

          <p>
            Del código mostrado anteriormente se debe tener en cuenta la propiedad
            {' '}<span className="badge text-dark m-0 p-0">minSdk 30,</span>{' '}
            ya que el método de la API de localización que utilizaremos para obtener
            la posición actual, solo acepta versiones del
            {' '}<span className="badge text-dark m-0 p-0">Sdk</span>{' '}
            mayores a 29.
          </p>

          <h2 className="mt-5">Configuración del <code>AndroidManifest.xml</code></h2>

          <p>
            Ahora bien, en cuanto al
            {' '}<span className="badge text-dark m-0 p-0">AndroidManifest.xml</span>{' '}
            se le debe informar al dispositivo que se utilizarán los siguientes permisos:
          </p>

          <ul>
            <li><span className="badge text-dark m-0 p-0">ACCESS_FINE_LOCATION.</span></li>
            <li><span className="badge text-dark m-0 p-0">ACCESS_COARSE_LOCATION.</span></li>
            <li><span className="badge text-dark m-0 p-0">ACCESS_LOCATION_EXTRA_COMMANDS.</span></li>
            <li><span className="badge text-dark m-0 p-0">INTERNET.</span></li>
            <li><span className="badge text-dark m-0 p-0">ACCESS_BACKGROUND_LOCATION.</span></li>
            <li><span className="badge text-dark m-0 p-0">READ_LOGS.</span></li>
          </ul>

          <p>
            Tanto
            {' '}<span className="badge text-dark m-0 p-0">ACCESS_FINE_LOCATION</span>{' '}
            como
            {' '}<span className="badge text-dark m-0 p-0">ACCESS_COARSE_LOCATION</span>{' '}
            son permisos primordiales para poder obtener la ubicación por GPS. Los demás, son
            permisos secundarios que nos permitirán obtener la ubicación por
            {' '}<span className="badge text-dark m-0 p-0">network (internet),</span>{' '}
            verificar constantemente los cambios de ubicación
            {' '}<span className="badge text-dark m-0 p-0">(ACCESS_BACKGROUND_LOCATION)</span>{' '}
            y, en caso de ser necesario, acceder a la consola y leer y enviar información
            a la aplicación
            {' '}<span className="badge text-dark m-0 p-0">(READ_LOGS).</span>{' '}
            Por ello, el
            {' '}<span className="badge text-dark m-0 p-0">manifest</span>{' '}
            debe ser similar a:
          </p>

          <pre className="language-xml">
            <code>
              {
                '<?xml version="1.0" encoding="utf-8"?>\n' +
                '<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n' +
                '    xmlns:tools="http://schemas.android.com/tools"\n' +
                '    package="com.example.nombre_del_proyecto">\n' +
                '\n' +
                '    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n' +
                '    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />\n' +
                '    <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />\n' +
                '    <uses-permission android:name="android.permission.INTERNET" />\n' +
                '    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />\n' +
                '    <uses-permission android:name="android.permission.READ_LOGS"\n' +
                '        tools:ignore="ProtectedPermissions" />\n' +
                '\n' +
                '    <application\n' +
                '        android:allowBackup="true"\n' +
                '        android:dataExtractionRules="@xml/data_extraction_rules"\n' +
                '        android:fullBackupContent="@xml/backup_rules"\n' +
                '        android:icon="@mipmap/ic_launcher"\n' +
                '        android:label="@string/nombre-del-proyecto"\n' +
                '        android:roundIcon="@mipmap/ic_launcher_round"\n' +
                '        android:supportsRtl="true"\n' +
                '        android:theme="@style/Theme.NombreDelProyecto"\n' +
                '        tools:targetApi="31">\n' +
                '\n' +
                '        <activity\n' +
                '            android:name=".MainActivity"\n' +
                '            android:exported="true">\n' +
                '            <intent-filter>\n' +
                '                <action android:name="android.intent.action.MAIN" />\n' +
                '\n' +
                '                <category android:name="android.intent.category.LAUNCHER" />\n' +
                '            </intent-filter>\n' +
                '        </activity>\n' +
                '    </application>\n' +
                '\n' +
                '</manifest>\n'
              }
            </code>
          </pre>

          <h2 className="mt-5">Configuración del <code>layout activity_main.xml</code></h2>

          <p>
            Ahora en cuanto a la configuración del diseño tendremos algo muy simple: una única
            vista o
            {' '}<span className="badge text-dark m-0 p-0">layout</span>{' '}
            que será la principal y lucirá similar a:
          </p>

          {/* Creando una forma similar a la del layout activity_main */}
          <div className="d-flex justify-content-center">
            <div className="rounded-5 shadow-lg py-5">
              <div className="mb-3 px-5">
                <input className="form-control" type="text" placeholder="Ingresa la latitud" />
              </div>

              <div className="mb-3 px-5">
                <input className="form-control" type="text" placeholder="Ingresa la longitud" />
              </div>

              <div className={"rounded-1 text-center text-light fw-bold mb-5 mx-5 py-3 " + styles.BtnAndroid}>OBTENER DIRECCIÓN</div>

              <div className="ps-3">
                <p className="text-start">
                  La dirección es:
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5">
            Así, el código del
            {' '}<span className="badge text-dark m-0 p-0">layout activity_main</span>{' '}
            será el siguiente:
          </p>

          <pre className="language-xml">
            <code>
              {
                '<?xml version="1.0" encoding="utf-8"?>\n' +
                '<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"\n' +
                '    xmlns:app="http://schemas.android.com/apk/res-auto"\n' +
                '    xmlns:tools="http://schemas.android.com/tools"\n' +
                '    android:layout_width="match_parent"\n' +
                '    android:layout_height="match_parent"\n' +
                '    tools:context=".MainActivity">\n\n' +

                '    <EditText\n' +
                '        android:id="@+id/editTextLongitud"\n' +
                '        android:layout_width="0dp"\n' +
                '        android:layout_height="60dp"\n' +
                '        android:layout_marginStart="80dp"\n' +
                '        android:layout_marginTop="20dp"\n' +
                '        android:layout_marginEnd="80dp"\n' +
                '        android:layout_marginBottom="20dp"\n' +
                '        android:ems="10"\n' +
                '        android:hint="Ingresa la longitud"\n' +
                '        android:inputType="textPersonName"\n' +
                '        app:layout_constraintBottom_toTopOf="@+id/button"\n' +
                '        app:layout_constraintEnd_toEndOf="parent"\n' +
                '        app:layout_constraintHorizontal_bias="0.0"\n' +
                '        app:layout_constraintStart_toStartOf="parent"\n' +
                '        app:layout_constraintTop_toBottomOf="@+id/editTextLatitud" />\n\n' +

                '    <EditText\n' +
                '        android:id="@+id/editTextLatitud"\n' +
                '        android:layout_width="0dp"\n' +
                '        android:layout_height="60dp"\n' +
                '        android:layout_marginStart="80dp"\n' +
                '        android:layout_marginTop="10dp"\n' +
                '        android:layout_marginEnd="80dp"\n' +
                '        android:layout_marginBottom="432dp"\n' +
                '        android:ems="10"\n' +
                '        android:hint="Ingresa la latitud"\n' +
                '        android:inputType="textPersonName"\n' +
                '        app:layout_constraintBottom_toBottomOf="parent"\n' +
                '        app:layout_constraintEnd_toEndOf="parent"\n' +
                '        app:layout_constraintHorizontal_bias="0.0"\n' +
                '        app:layout_constraintStart_toStartOf="parent"\n' +
                '        app:layout_constraintTop_toTopOf="parent"\n' +
                '        app:layout_constraintVertical_bias="0.794" />\n\n' +

                '    <Button\n' +
                '        android:id="@+id/button"\n' +
                '        android:layout_width="wrap_content"\n' +
                '        android:layout_height="wrap_content"\n' +
                '        android:layout_marginStart="118dp"\n' +
                '        android:layout_marginEnd="118dp"\n' +
                '        android:layout_marginBottom="332dp"\n' +
                '        android:onClick="obtenerDireccion"\n' +
                '        android:text="Obtener dirección"\n' +
                '        app:layout_constraintBottom_toBottomOf="parent"\n' +
                '        app:layout_constraintEnd_toEndOf="parent"\n' +
                '        app:layout_constraintHorizontal_bias="0.533"\n' +
                '        app:layout_constraintStart_toStartOf="parent"\n' +
                '        app:layout_constraintTop_toBottomOf="@+id/editTextLongitud"\n' +
                '        app:layout_constraintVertical_bias="1.0" />\n\n' +

                '    <TextView\n' +
                '        android:id="@+id/textViewAddress"\n' +
                '        android:layout_width="0dp"\n' +
                '        android:layout_height="0dp"\n' +
                '        android:layout_marginStart="20dp"\n' +
                '        android:layout_marginTop="36dp"\n' +
                '        android:layout_marginEnd="20dp"\n' +
                '        android:layout_marginBottom="50dp"\n' +
                '        android:text="La dirección es:"\n' +
                '        app:layout_constraintBottom_toBottomOf="parent"\n' +
                '        app:layout_constraintEnd_toEndOf="parent"\n' +
                '        app:layout_constraintStart_toStartOf="parent"\n' +
                '        app:layout_constraintTop_toBottomOf="@+id/button" />\n' +
                '</androidx.constraintlayout.widget.ConstraintLayout>\n'
              }
            </code>
          </pre>

          <div className="bg-info p-3 m-0">
            <p className="fw-bold">Nota.</p>
            <p>
              Tal y como se visualiza en el código anterior, en la definición del botón,
              se ha establecido un método denominado
              {' '}<span className="badge text-dark m-0 p-0">obtenerDireccion</span>{' '}
              el cual será ejecutado una vez se presione el mismo. Sin embargo,
              se puede denominar como el usuario lo considere adecuado siempre
              y cuando se modifique en su respectiva clase
              {' '}<span className="badge text-dark m-0 p-0">.java.</span>{' '}
            </p>
          </div>

          <h2 className="mt-5">Configuración de la clase <code>MainActivity.java</code></h2>

          <p>
            En términos generales, las principales librerías que se utilizarán son las siguientes
            (todas las clases que incluye la API de localización de Android 
            se pueden encontrar su página
            {' '}<a href="https://developer.android.com/reference/android/location/package-summary"
              rel="nofollow,noindex"
              className="badge text-dark m-0 p-0">
              oficial
            </a>):
          </p>

          <ul>
            <li>
              <a href="https://developer.android.com/reference/android/location/Address"
                className="badge text-dark m-0 p-0"
                rel="nofollow,noindex">
                android.location.Address.
              </a>
            </li>

            <li>
              <a href="https://developer.android.com/reference/android/location/Geocoder"
                className="badge text-dark m-0 p-0"
                rel="nofollow,noindex">
                android.location.Geocoder.
              </a>
            </li>

            <li>
              <a href="https://developer.android.com/reference/android/location/Location"
                className="badge text-dark m-0 p-0"
                rel="nofollow,noindex">
                android.location.Location.
              </a>
            </li>

            <li>
              <a href="https://developer.android.com/reference/android/location/LocationListener"
                className="badge text-dark m-0 p-0"
                rel="nofollow,noindex">
                android.location.LocationListener.
              </a>
            </li>

            <li>
              <a href="https://developer.android.com/reference/android/location/LocationManager"
                className="badge text-dark m-0 p-0"
                rel="nofollow,noindex">
                android.location.LocationManager.
              </a>
            </li>
          </ul>

          <p>
            Teniendo en cuenta lo anterior, las librerías que tendremos que importar son las siguientes:
          </p>

          <pre className="language-java">
            <code>
              {
                "/* Librerías a utilizar en el proyecto */\n" +
                "import androidx.annotation.NonNull;\n" +
                "import androidx.appcompat.app.AppCompatActivity;\n" +
                "import androidx.core.app.ActivityCompat;\n\n" +

                "import android.Manifest;\n" +
                "import android.content.Context;\n" +
                "import android.content.pm.PackageManager;\n" +
                "import android.location.Address;\n" +
                "import android.location.Geocoder;\n" +
                "import android.location.Location;\n" +
                "import android.location.LocationListener;\n" +
                "import android.location.LocationManager;\n" +
                "import android.os.Bundle;\n\n" +

                "import android.os.CancellationSignal;\n" +
                "import android.util.Log;\n" +
                "import android.view.View;\n" +
                "import android.widget.EditText;\n" +
                "import android.widget.TextView;\n" +
                "import android.widget.Toast;\n\n" +

                "import java.util.List;\n" +
                "import java.util.Locale;\n" +
                "import java.util.concurrent.Executor;\n" +
                "import java.util.concurrent.FutureTask;\n" +
                "import java.util.function.Consumer;\n"
              }
            </code>
          </pre>

          <p>
            Ahora bien, tendremos que configurar las variables que nos permitirán tomar los datos de las
            cajas de texto y procesarlas con los métodos de localización de la API de Android. Para ello,
            establecemos las variables y configuramos su método 
            {' '}<span className="badge text-dark m-0 p-0">onCreate</span>{' '} 
            de la siguiente manera:
          </p>

          <pre>
            <code className="language-java">
              {
                "public class MainActivity extends AppCompatActivity {\n\n" +
                "  EditText editTextLatitud; // Para obtener los valores ingresados de latitud\n" +
                "  EditText editTextLongitud; // Para obtener los valores ingresados de longitud\n" +
                "  TextView textViewAddress; // Para mostrar la dirección encontrada\n" +
                "  LocationManager mLocManager; // API de localización de Android\n" +
                "  MyLocationListener mLocListener; // Clase personalizada para escuchar los movimientos del usuario en tiempo real\n" +
                "  int PERMISO_FINE = 0; // Para verificar los permisos \n" +
                "  int PERMISO_COARSE = 0; // Para verificar los permisos\n" +
                "  int providerFound; // Para verificar si se ha encontrado alguna dirección\n\n" +

                "  @Override\n" +
                "  protected void onCreate(Bundle savedInstanceState) {\n" +
                "      super.onCreate(savedInstanceState);\n" +
                "      setContentView(R.layout.activity_main);\n" +
                "      editTextLatitud = (EditText) findViewById(R.id.editTextLatitud);\n" +
                "      editTextLongitud = (EditText) findViewById(R.id.editTextLongitud);\n" +
                "      textViewAddress = (TextView) findViewById(R.id.textViewAddress);\n" +
                "      mLocManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);\n" +
                "      mLocListener = new MyLocationListener();\n" +
                "      mLocListener.setMainActivity(this);\n\n" +

                "      askCurrentLocationAndUpdates(); // Método para obtener la posición actual\n" +
                "  }\n"
              }
            </code>
          </pre>

          <p>
            Como se puede observar en el código anterior, hay un método denominado
            {' '}<span className="badge text-dark m-0 p-0">askCurrentLocationAndUpdates()</span>{' '} 
            el cual nos permitirá determinar la posición actual del usuario. En este método
            lo que haremos será:
          </p>

          <ol>
            <li className="mb-3">
              Verificar que los permisos han sido otorgados. En caso de que no hayan sido otorgados
              se solicitarán en tiempo real utilizando el método 
              {' '}<span className="badge text-dark m-0 p-0">requestPermissions</span>{' '} 
              de la clase 
              {' '}<span className="badge text-dark m-0 p-0">ActivityCompat</span>{' '} 
              el cual llamará a su vez a un
              {' '}<span className="badge text-dark m-0 p-0">callback</span>{' '} 
              denominado
              {' '}<span className="badge text-dark m-0 p-0">onRequestPermissionsResult.</span>{' '} 
              A partir de este punto pueden ocurrir dos cosas:

              <ol type="a">
                <li>
                  Que los permisos ya hayan sido previamente otorgados y se omita 
                  la función mencionada anteriormente.
                </li>
                <li>
                  Que se soliciten los permisos en tiempo real donde en caso de que 
                  se otorguen se llama nuevamente a la función
                  {' '}<span className="badge text-dark m-0 p-0">askCurrentLocationAndUpdates.</span>{' '} 
                </li>
                <li>
                  El usuario no otorga ningún permiso y no se continua con el despliegue de
                  la aplicación.
                </li>
              </ol>

            </li>

            <li className="mb-3">
              Si el usuario ha otorgado los permisos previamente o se otorgan en tiempo real
              se procede a tomar todos los
              {' '}<span className="badge text-dark m-0 p-0">providers</span>{' '} 
              que tenga el dispositivo para intentar encontrar la ubicación con alguno de ellos.<br />
              Para que esto se ejecute correctamente, se ha definido previamente una variable denominada
              {' '}<span className="badge text-dark m-0 p-0">ft</span>{' '} 
              de tipo
              {' '}<span className="badge text-dark m-0 p-0">FutureTask</span>{' '} 
              que nos permite esperar hasta que se complete el intento de determinación
              de ubicación. También se definieron otras variables importantes
              para llamar el método de obtener localización.
            </li>

            <li className="mb-3">
              Una vez se han denominado todas las variables importantes y se han encontrado
              todos los
              {' '}<span className="badge text-dark m-0 p-0">providers</span>{' '} 
              se procede a ejecutar un ciclo que intenta la determinación de ubicación
              por cada provider encontrado.
            </li>

            <li>
              El método que se llama para determinar la ubicación actual se denomina
              {' '}<span className="badge text-dark m-0 p-0">getCurrentLocation</span>{' '}
              el cual a su vez llama a un
              {' '}<span className="badge text-dark m-0 p-0">callback</span>{' '}
              que en consecuencia ejecuta la función
              {' '}<span className="badge text-dark m-0 p-0">accept</span>{' '}
              de un objeto de tipo 
              {' '}<span className="badge text-dark m-0 p-0">Consumer,</span>{' '}
              el cual finalmente ejecutará el método encargado de mostrarnos nuestra
              ubicación actual.
            </li>
          </ol>
          
          <p>
            Los pasos descritos anteriormente reflejan el siguiente código:
          </p>

          <pre>
            <code className="language-java">
              {
              "  public void askCurrentLocationAndUpdates() {\n" +
              "    try {\n" +
              "        providerFound = 0;\n" +
              "        int PERMISO_FINE = ActivityCompat.checkSelfPermission(this,\n" +
              "                Manifest.permission.ACCESS_FINE_LOCATION);\n" +
              "        int PERMISO_COARSE = ActivityCompat.checkSelfPermission(this,\n" +
              "                Manifest.permission.ACCESS_COARSE_LOCATION);\n\n" +

              "        if (PERMISO_FINE != PackageManager.PERMISSION_GRANTED || PERMISO_COARSE != PackageManager.PERMISSION_GRANTED) {\n" +
              "            ActivityCompat.requestPermissions(this,\n" +
              "                    new String[]{Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION},\n" +
              "                    1);\n" +
              "        } else {\n" +
              "            mLocManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0,\n" +
              "                    (LocationListener) mLocListener);\n\n" +

              "            final FutureTask<Boolean> ft = new FutureTask<Boolean>(() -> {}, true);\n\n" +

              "            CancellationSignal cs = new CancellationSignal();\n\n" +

              "            Executor ex = new Executor() {\n" +
              "                @Override\n" +
              "                public void execute(Runnable runnable) {\n" +
              '                    Log.d("Callback", "Callback ejecutado");\n' +
              "                    runnable.run();\n" +
              "                }\n" +
              "            };\n\n" +

              "            Consumer c = new Consumer() {\n" +
              "                @Override\n" +
              "                public void accept(Object o) {\n" +
              "                    try {\n" +
              "                        if (o != null) {\n" +
              "                            providerFound++;\n" +
              "                            Location loc = (Location) o;\n" +
              "                            setCurrentLocation(loc);\n" +
              "                        } else {\n" +
              '                            Log.d("Callback consumer", "Null");\n' +
              "                        }\n" +
              "                        ft.run();\n" +
              "                    } catch (Exception e){\n" +
              '                        Log.d("Error on customer", e.toString());\n' +
              "                    }\n" +
              "                }\n" +
              "            };\n\n\n" +


              "            for (String theProvider : mLocManager.getAllProviders()) {\n" +
              '                Log.d("Provider", theProvider);\n' +
              "                mLocManager.getCurrentLocation(theProvider, cs, ex, c);\n" +
              "                ft.get();\n" +
              '                Log.d("providerFound", Integer.toString(providerFound));\n' +
              "                if (providerFound > 0) break;\n" +
              "            }\n" +
              "        }\n" +
              "    } catch (Exception e) {\n" +
              '        Log.d("Error.", e.toString());\n' +
              "    }\n" +
              "}\n"
              }
            </code>
          </pre>

          <p>
            A su vez, como se mencionó anteriormente en el primer paso del desarrollo del método,
            hay una función que tendremos que definir en nuestra clase para poder solicitar
            los datos de la ubicación en caso de que sean modificados. Este método se denomina
            {' '}<span className="badge text-dark m-0 p-0">onRequestPermissionsResult</span>{' '}
            y su código se ha definido de la siguiente manera:
          </p>

          <pre>
            <code className="language-java">
              {
                "@Override\n" +
                "public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {\n" +
                "    switch (requestCode) {\n" +
                "        case 1:\n" +
                "            if (grantResults.length > 0 &&\n" +
                "                    grantResults[0] == PackageManager.PERMISSION_GRANTED) {\n" +
                "                askCurrentLocationAndUpdates();\n" +
                "            } else {\n" +
                '                Toast.makeText(this, "Sin los permisos no se podrá mostrar" +\n' +
                '                         " su localización actual", Toast.LENGTH_LONG).show();\n' +
                "            }\n" +
                "            break;\n\n" +

                "        default:\n" +
                '            Toast.makeText(this, "Sin los permisos no se podrá mostrar" +\n' +
                '                    " su localización actual", Toast.LENGTH_LONG).show();\n' +
                "            break;\n" +
                "    }\n" +
                "    super.onRequestPermissionsResult(requestCode, permissions, grantResults);\n" +
                "}\n"
              }
            </code>
          </pre>

          <p>
            
          </p>

          <h2 className="mt-5">Configuración adicional para ubicación en tiempo real</h2>

          <p>

          </p>

        </div>

        <Footer />
      </div>
    </>
  )
};

AplicacionAndroidGps.propTypes = {};

AplicacionAndroidGps.defaultProps = {};

export default AplicacionAndroidGps;