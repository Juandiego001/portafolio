import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AplicacionAndroidFirebase.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const AplicacionAndroidFirebase = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Aplicación Android + Firebase | Desarrollo de software para plataformas móviles</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          ¿Cómo conectar una aplicación Android con el servicio 
          de Google: Firebase, para permitir el registro de 
          usuarios y el control de sesiones en la nube?"></meta>
        <meta name="keywords" content="
          Aplicación Android con Firebase JDCC,
          Aplicación Android con Firebase Juan,
          Aplicación Android con Firebase Juan Diego,
          Aplicación Android con Firebase Juan Diego Cobo,
          Aplicación Android con Firebase Juan Diego Cobo Cabal,
          Aplicación Android + Firebase desarrollo móviles,
          Aplicación Android + Firebase desarrollo de software,
          Aplicación Android + Firebase desarrollo de software para plataformas,
          Aplicación Android + Firebase desarrollo de software para plataformas móviles,
          Aplicación Android + Firebase Desarrollo móviles,
          Aplicación Android + Firebase Desarrollo de software,
          Aplicación Android + Firebase Desarrollo de software para plataformas,
          Aplicación Android + Firebase Desarrollo de software para plataformas móviles,
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
            Aplicación Android + Firebase
          </h1>

          <p className="mt-3">
            En esta práctica se mostrará como conectar una aplicación Android con el servicio de Google <code>Firebase</code>{' '}
            para generar un control de usuarios en la nube, con dos interfaces que permitan, iniciar sesión y registrarse y mostrar
            el usuario que ha iniciado sesión.
          </p>

          <h2 className="mt-5">Registro y generalidades de Firebase</h2>

          <p>
            Tal y como lo mencionan en su página Home:

            "Firebase es una plataforma de desarrollo de apps que te ayuda a compilar y
            desarrollar las apps y los juegos que  les encantan a los usuarios. Con el
            respaldo de Google y la confianza de millones de empresas de todo el mundo".

            Ahora bien, para comenzar debemos registrarnos en Firebase.
            Este proceso es muy sencillo ya que si contamos con una cuenta de gmail
            (solamente se puede iniciar sesión con una cuenta de google),
            bastará con dirigirse a este link:
            {' '}<a href="https://firebase.google.com/" target="_blank">https://firebase.google.com/.</a>{' '}
          </p>

          <p>
            En nuestro caso, nos centraremos en la autenticación y registro de usuarios con Firebase.
            Para ello, lo que hacemos es crear un nuevo proyecto donde tendremos que 
            agregar un nombre y luego sí registrar una aplicación. En este punto, cuando nos encontremos
            registrando la aplicación, tendremos que descargar un archivo denominado 
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">google-services.json,</span>{' '}
            el cual nos servirá para confirmar nuestras credenciales de vinculación 
            del proyecto con Firebase.
          </p>

          <h2 className="mt-5">Configuración del Gradle</h2>

          <p>
            Una vez descargado el archivo mencionado anteriormente, tendremos que ubicarlo 
            en la ruta raíz de nuestro proyecto, es decir, donde se encuentran todos los
            archivos de
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">gradle, build</span>{' '}
            y demás. Hecho esto, tendremos que hacerle cambios a nuestro gradle
            para descargar las librerías de autenticación de firebase que necesitamos.
            Para esto, desde Android Studio se deben modificar los archivos:
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">build.gradle (Project: "nombre-de-tu-app")</span>{' '} y
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">build.gradle (Module :app).</span>{' '}
          </p>

          <p>
            La explicación sencilla de ambos archivos es que mientras uno hace referencia al build.gradle de tu
            proyecto raíz, el segundo hace referencia a nivel de raíz del proyecto,
            el otro hace referencia al módulo como tal. Así, el
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">build.gradle (Project: "nombre-de-tu-app")</span>{' '}
            deberá contener lo siguiente:
          </p>

          <pre>
            <code className="language-apache">
              {
                "// Top-level build file where you can add configuration options common to all sub-projects/modules.\n" +
                "buildscript {\n" +
                "  repositories {\n" +
                "      // Make sure that you have the following two repositories\n" +
                "      google()  // Google's Maven repository\n\n" +

                "      mavenCentral()  // Maven Central repository\n\n" +

                "  }\n" +
                "  dependencies {\n" +
                "      // Add the dependency for the Google services Gradle plugin\n" +
                "      classpath 'com.google.gms:google-services:4.3.15'\n" +
                "  }\n" +
                "}\n\n" +

                "plugins {\n" +
                "  id 'com.android.application' version '7.4.1' apply false\n" +
                "  id 'com.android.library' version '7.4.1' apply false\n" +
                "}"
              }
            </code>
          </pre>

          <p>
            Posteriormente, en el archivo
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">build.gradle (Module :app):</span>{' '}
          </p>

          <pre>
            <code className="language-apache">
              {
                "plugins {\n" +
                "  id 'com.android.application'\n" +
                "  // Add the Google services Gradle plugin\n" +
                "  id 'com.google.gms.google-services'\n" +
                "}\n\n" +

                "// ...\n\n" +

                "dependencies {\n" +
                "  // Import the Firebase BoM\n" +
                "  implementation platform('com.google.firebase:firebase-bom:31.2.1')\n\n\n" +
              

                "  // TODO: Add the dependencies for Firebase products you want to use\n" +
                "  // When using the BoM, don't specify versions in Firebase dependencies\n" +
                "  // https://firebase.google.com/docs/android/setup#available-libraries\n" +
                "  implementation 'com.google.firebase:firebase-auth'\n" +
                "  implementation 'com.google.firebase:firebase-firestore'\n\n" +
                "// ...\n" +
                "}"
              }
            </code>
          </pre>

          <p>
            Y luego damos click en el botón que nos aparece en la parte superior del IDE
            denominado {' '}<span className="badge text-dark m-0 p-0 text-wrap">Sync now,</span>{' '}
            para poder empezar a descargar las librerías.
          </p>

          <h2 className="mt-5">Creación del <code>activity_main.xml</code></h2>

          <p>
            Nuestro 
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">activity_main.xml</span>{' '}
            contendrá sencillamente dos campos para agregar texto y dos botones. Ambos campos,
            serán para agregar un usuario y una contraseña y los botones serán para
            iniciar sesión o para registrarse. El código luce de la siguiente manera:
          </p>

          <pre>
            <code className="language-xml">
              {
                '<?xml version="1.0" encoding="utf-8"?>\n' +
                '<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"\n' +
                '    xmlns:app="http://schemas.android.com/apk/res-auto"\n' +
                '    xmlns:tools="http://schemas.android.com/tools"\n' +
                '    android:layout_width="match_parent"\n' +
                '    android:layout_height="match_parent"\n' +
                '    tools:context=".MainActivity">\n\n' +

                '    <EditText\n' +
                '        android:id="@+id/eCorreo"\n' +
                '        android:layout_width="370dp"\n' +
                '        android:layout_height="wrap_content"\n' +
                '        android:ems="10"\n' +
                '        android:hint="Ingrese el correo"\n' +
                '        android:inputType="textPersonName"\n' +
                '        android:minHeight="48dp"\n' +
                '        app:layout_constraintBottom_toBottomOf="parent"\n' +
                '        app:layout_constraintEnd_toEndOf="parent"\n' +
                '        app:layout_constraintStart_toStartOf="parent"\n' +
                '        app:layout_constraintTop_toTopOf="parent"\n' +
                '        app:layout_constraintVertical_bias="0.3" />\n\n' +

                '    <EditText\n' +
                '        android:id="@+id/eContrasena"\n' +
                '        android:layout_width="370dp"\n' +
                '        android:layout_height="wrap_content"\n' +
                '        android:ems="10"\n' +
                '        android:hint="Ingrese la contraseña"\n' +
                '        android:inputType="textPersonName"\n' +
                '        android:minHeight="48dp"\n' +
                '        app:layout_constraintBottom_toBottomOf="parent"\n' +
                '        app:layout_constraintEnd_toEndOf="parent"\n' +
                '        app:layout_constraintStart_toStartOf="parent"\n' +
                '        app:layout_constraintTop_toTopOf="parent"\n' +
                '        app:layout_constraintVertical_bias="0.402" />\n\n' +

                '    <Button\n' +
                '        android:id="@+id/btnRegistrarse"\n' +
                '        android:layout_width="350dp"\n' +
                '        android:layout_height="wrap_content"\n' +
                '        android:text="Registrarse"\n' +
                '        android:onClick="registrarse"\n' +
                '        app:layout_constraintBottom_toBottomOf="parent"\n' +
                '        app:layout_constraintEnd_toEndOf="parent"\n' +
                '        app:layout_constraintStart_toStartOf="parent"\n' +
                '        app:layout_constraintTop_toTopOf="parent" />\n\n' +

                '    <Button\n' +
                '        android:id="@+id/btnIniciar"\n' +
                '        android:layout_width="350dp"\n' +
                '        android:layout_height="wrap_content"\n' +
                '        android:text="Iniciar sesión"\n' +
                '        android:onClick="iniciarSesion"\n' +
                '        app:layout_constraintBottom_toBottomOf="parent"\n' +
                '        app:layout_constraintEnd_toEndOf="parent"\n' +
                '        app:layout_constraintHorizontal_bias="0.508"\n' +
                '        app:layout_constraintStart_toStartOf="parent"\n' +
                '        app:layout_constraintTop_toTopOf="parent"\n' +
                '        app:layout_constraintVertical_bias="0.59" />\n' +
                '</androidx.constraintlayout.widget.ConstraintLayout>\n'
              }
            </code>
          </pre>

          <h2 className="mt-5">Creación del <code>activity_welcome.xml</code></h2>

          <p>
            En este 
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">activity_welcome.xml</span>{' '}
            lo que haremos será recibir el nombre de usuario de quien ha iniciado sesión
            y mostrarlo en la interfaz. Su código correspondiente es el siguiente:
          </p>

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
                '        android:id="@+id/tWelcome"\n' +
                '        android:layout_width="wrap_content"\n' +
                '        android:layout_height="wrap_content"\n' +
                '        android:text="Bienvenid@!"\n' +
                '        android:textSize="34sp"\n' +
                '        app:layout_constraintBottom_toBottomOf="parent"\n' +
                '        app:layout_constraintEnd_toEndOf="parent"\n' +
                '        app:layout_constraintStart_toStartOf="parent"\n' +
                '        app:layout_constraintTop_toTopOf="parent" />\n' +
                '</androidx.constraintlayout.widget.ConstraintLayout>\n'
              }
            </code>
          </pre>

          <p>
            A su vez, tendremos que crear un archivo 
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">WelcomeActivity.java</span>{' '}
            que funcione con el 
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">layout</span>{' '}
            que acabamos de crear y declarar dicho layout en el
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">AndroidManifest.xml,</span>{' '}
            de la siguiente manera:
          </p>

          <pre>
            <code className="language-java">
              {
                "// Código del archivo WelcomeActivity.java\n" +
                "package com.example.app_firebase;\n\n" +

                "import android.os.Bundle;\n" +
                "import android.widget.TextView;\n\n" +

                "import androidx.annotation.Nullable;\n" +
                "import androidx.appcompat.app.AppCompatActivity;\n\n" +

                "public class WelcomeActivity extends AppCompatActivity {\n\n" +

                "    private TextView tWelcome;\n\n" +

                "    @Override\n" +
                "    protected void onCreate(@Nullable Bundle savedInstanceState) {\n" +
                "        super.onCreate(savedInstanceState);\n" +
                "        setContentView(R.layout.activity_welcome);\n" +
                "        tWelcome = (TextView) findViewById(R.id.tWelcome);\n" +
                '        String theUser = getIntent().getExtras().get("WelcomeUser").toString();\n' +
                '        tWelcome.setText("Bienvenid@ %s".format(theUser));\n' +
                "    }\n" +
                "}\n"
              }
            </code>
          </pre>

          <pre>
            <code>
              {
                "<!-- ... -->\n" +
                "<!-- Declaración de acitity_main.xml y activity_welcome.xml -->\n" +
                '<activity\n' +
                '  android:name=".MainActivity"\n' +
                '  android:exported="true">\n' +
                '    <intent-filter>\n' +
                '        <action android:name="android.intent.action.MAIN" />\n\n' +

                '        <category android:name="android.intent.category.LAUNCHER" />\n' +
                '    </intent-filter>\n' +
                '</activity>\n' +
                '<activity android:name=".WelcomeActivity"></activity>\n' +
                "<!-- ... -->"
              }
            </code>
          </pre>
          
          <h2>Configuración del archivo <code>MainActivity.java</code></h2>

          <p>
            En el
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">MainActivity.java</span>{' '}
            será donde configuremos las principales características de Firebase.
            En primer lugar, lo que haremos será importar las librerías necesarias
            las cuales son:
          </p>

          <pre>
            <code className="language-java">
              {
                'import androidx.annotation.NonNull;\n' +
                'import androidx.appcompat.app.AppCompatActivity;\n\n' +

                'import android.content.Intent;\n' +
                'import android.os.Bundle;\n' +
                'import android.view.View;\n' +
                'import android.widget.Button;\n' +
                'import android.widget.EditText;\n' +
                'import android.widget.Toast;\n' +
                'import android.app.ProgressDialog;\n\n' +

                'import com.google.android.gms.tasks.OnCompleteListener;\n' +
                'import com.google.android.gms.tasks.Task;\n' +
                'import com.google.firebase.auth.AuthResult;\n' +
                'import com.google.firebase.auth.FirebaseAuth;\n' +
                'import com.google.firebase.auth.FirebaseAuthUserCollisionException;\n'
              }
            </code>
          </pre>

          <p>
            Luego, se sugiere declarar como variables globales los componentes
            de la interfaz y dos componentes adicionales correspondientes a
            las alertas y a la autenticación de Firebase de la siguiente manera:
          </p>

          <pre>
            <code className="language-java">
              {
                "public class MainActivity extends AppCompatActivity {\n" +

                "  private EditText eCorreo, eContrasena;\n" +
                "  private Button btnRegistrarse, btnIniciar;\n" +
                "  private FirebaseAuth firebaseAuth;\n" +
                "  private ProgressDialog progressDialog;\n"
              }
            </code>
          </pre>

          <p>
            Después, en el método
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">onCreate</span>{' '}
            tendremos que asignar el
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">layout activity_main.xml</span>{' '}
            y asignar los valores a las variables
            anteriormente declaradas:
          </p>

          <pre>
            <code className="language-java">
              {
                "@Override\n" +
                "protected void onCreate(Bundle savedInstanceState) {\n" +
                "    super.onCreate(savedInstanceState);\n" +
                "    setContentView(R.layout.activity_main);\n\n" +

                "    eCorreo = (EditText) findViewById(R.id.eCorreo);\n" +
                "    eContrasena = (EditText) findViewById(R.id.eContrasena);\n" +
                "    firebaseAuth = FirebaseAuth.getInstance();\n" +
                "    btnRegistrarse = findViewById(R.id.btnRegistrarse);\n" +
                "    btnIniciar = findViewById(R.id.btnIniciar);\n" +
                "    progressDialog = new ProgressDialog(this);\n" +
                "}\n"
              }
            </code>
          </pre>

          <p>
            Posteriormente, crearemos el método
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">registrarse</span>{' '}
            el cual tendrá como parámetro
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">View v</span>{' '}
            para poder recibir el evento click. A su vez,
            se validará que se hayan digitado valores en los campos de texto;
            con el método
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">createUserWithEmailAndPassword</span>{' '}
            se iniciará el proceso de registro del usuario; con el método 
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">onComplete</span>{' '}
            y el parámetro
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">task</span>{' '}
            se verificará cómo ha culminado el proceso;
            y finalmente se omitirá el mensaje de progreso de creación del usuario.
          </p>

          <pre>
            <code className="language-java">
              {
                'public void registrarse(View v) {\n' +
                '  String correo = eCorreo.getText().toString();\n' +
                '  String contrasena = eContrasena.getText().toString();\n\n' +

                '  if (correo.equals("") || contrasena.equals("") ) {\n' +
                '    Toast.makeText(this, "Debe ingresar un correo y una contraseña.", Toast.LENGTH_SHORT).show();\n' +
                '  } else {\n' +
                '    progressDialog.setMessage("Registrando usuario en línea...");\n' +
                '    progressDialog.show();\n\n' +

                '    firebaseAuth.createUserWithEmailAndPassword(correo, contrasena)\n' +
                '      .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {\n' +
                '        @Override\n' +
                '          public void onComplete(@NonNull Task<AuthResult> task) {\n' +
                '            if (task.isSuccessful()) {\n' +
                '              Toast.makeText(MainActivity.this, "¡El usuario se ha registrado con éxito!", Toast.LENGTH_LONG).show();\n' +
                '            } else if (task.getException() instanceof FirebaseAuthUserCollisionException) {\n' +
                '              Toast.makeText(MainActivity.this, "Error. El usuario ya existe.", Toast.LENGTH_LONG).show();\n' +
                '            } else {\n' +
                '              Toast.makeText(MainActivity.this, "Ocurrió un error al intentar registrar el usuario", Toast.LENGTH_LONG).show();\n' +
                '            }\n\n' +

                '            progressDialog.dismiss();\n' +
                '          }\n' +
                '        });\n' +
                '      }\n' +
                '}\n'
              }
            </code>
          </pre>

          <p>
            Luego, creamos otro método denominado
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">iniciarSesion</span>{' '}
            similar al método
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">registrarse</span>{' '}
            con el que, dependiendo si los datos son correctos de acuerdo a la 
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">task</span>{' '}
            se direccionará al usuario al layout de bienvenida.
          </p>

          <pre>
            <code className="language-java">
              {
                'public void iniciarSesion(View v) {\n' +
                '  String correo = eCorreo.getText().toString();\n' +
                '  String contrasena = eContrasena.getText().toString();\n\n' +

                '  if (correo.equals("") || contrasena.equals("") ) {\n' +
                '      Toast.makeText(this, "Debe ingresar un correo y una contraseña.", Toast.LENGTH_SHORT).show();\n' +
                '  } else {\n' +
                '      progressDialog.setMessage("Iniciando sesión...");\n' +
                '      progressDialog.show();\n\n' +

                '      firebaseAuth.signInWithEmailAndPassword(correo, contrasena)\n' +
                '              .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {\n' +
                '                  @Override\n' +
                '                  public void onComplete(@NonNull Task<AuthResult> task) {\n' +
                '                      if (task.isSuccessful()) {\n' +
                '                          String user = correo.substring(0, correo.indexOf("@"));\n' +
                '                          Toast.makeText(MainActivity.this, "Bienvenid@ %s".format(user), Toast.LENGTH_LONG).show();\n\n' +

                '                          Intent intent = new Intent(MainActivity.this, WelcomeActivity.class);\n' +
                '                          intent.putExtra("WelcomeUser", user);\n' +
                '                          startActivity(intent);\n\n' +

                '                      } else if (task.getException() instanceof FirebaseAuthUserCollisionException) {\n' +
                '                          Toast.makeText(MainActivity.this, "Error. El usuario ya existe.", Toast.LENGTH_LONG).show();\n' +
                '                      } else {\n' +
                '                          Toast.makeText(MainActivity.this, "Ocurrió un error al intentar registrar el usuario", Toast.LENGTH_LONG).show();\n' +
                '                      }\n\n' +

                '                      progressDialog.dismiss();\n' +
                '                  }\n' +
                '              });\n' +
                '  }\n' +
                '}\n'
              }
            </code>
          </pre>

          <p>
            Una vez hecho todo el proceso podremos realizar las pruebas y visualizar en Firebase el apartado de
            {' '}<code>Authentication</code>{' '}
            para ver los usuarios registrados. A su vez, es importante destacar
            que cuando se registra un usuario no se podrá visualizar la contraseña.
          </p>

          <h2 className="mt-5">
            Finalización
          </h2>

          <p>
            Esta ha sido una explicación algo detallada para desarrollar un aplicativo móvil
            que maneje autenticación de usuarios en Android Studio utilizando el servicio de google Firebase.
            El repositorio del proyecto lo pueden visualizar
            {' '}<a href="https://github.com/Juandiego001/android-firebase">aquí.</a>{' '}
            Cualquier duda, queja, recomendación o donación que deseen realizar me pueden
            contactar por telegram:
            {' '}<a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>.
            Espero les haya sido de gran ayuda :)
          </p>

          <p>
            Fecha de publicación: 14-02-2023.
            <br />
            Autor: Juan Diego Cobo Cabal.
          </p>
        </div>

        <Footer />
      </div>
    </>
  )
};


AplicacionAndroidFirebase.propTypes = {};

AplicacionAndroidFirebase.defaultProps = {};

export default AplicacionAndroidFirebase;
