import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ReactTypeScriptMySQL.module.css';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { Helmet } from 'react-helmet';

// Custom components
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const ReactTypeScriptMySql = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    hljs.highlightAll();
  }, []);


  return (
    <>
      <Helmet>
        <title>React + TypeScript + MySQL + Imgs | Proyecto informático 2</title>
        <meta name="author" content="Juan Diego Cobo Cabal"></meta>
        <meta name="description" content="
          Desarrollo de un aplicativo utilizando 
          React con el lenguaje de Typescript y 
          empleando MySQL junto con el manejo 
          de subida y descarga de imagenes."></meta>
        <meta name="keywords" content="
          react typescript mysql imgs,
          React Typescript MySQL Imgs,
          React con Typescript y MySQL controlando imagenes Proyecto,
          React con Typescript y MySQL controlando imagenes Proyecto informático 2,
          React con Typescript y MySQL controlando imagenes Proyecto informatico 2,
          React con Typescript y MySQL controlando imagenes Proyecto informático 2,
          React con Typescript y MySQL controlando imagenes Proyecto informatico 2,
          React + Typescript + MySQL + Imgs Proyecto,
          React + Typescript + MySQL + Imgs Proyecto informático 2,
          React + Typescript + MySQL + Imgs Proyecto informatico 2,
          React + Typescript + MySQL + Imgs Proyecto informático 2,
          React + Typescript + MySQL + Imgs Proyecto informatico 2,
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
            React + TypeScript + MySQL + Imgs
          </h1>

          <p className="mt-3">
            En la presente entrada se explicará como desarrollar un mini proyecto full stack utilizando
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">React</span>{' '}
            con
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">Typescript</span>{' '}
            en el frontend y
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">Node.js</span>{' '}
            con
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">Javascript</span>{' '}
            en el backend. La idea es hacer un registro de usuarios con imágenes las cuales serán almacenadas
            en la carpeta
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">public</span>{' '}
            del proyecto frontend.
          </p>

          <p>
            El código del proyecto lo pueden encontrar en el siguiente repositorio
            de
            {' '}<a href="https://github.com/Juandiego001/react-typescript-mysql-imgs" rel="nofolow, noindex">github.</a>{' '}
          </p>

          <h2 className="mt-5">
            Introducción
          </h2>

          <p>
            Para comenzar se deberán crear las carpetas frontend y backend para
            tener una estructura de proyecto similar a la siguiente:
          </p>

          <pre>
            <code className="language-html">
              {
                "el-proyecto/\n" +
                ">> backend/\n" +
                ">> frontend/"
              }
            </code>
          </pre>

          <p>
            Posteriormente, la carpeta frontend deberá ser generada con el comando create-react-app ejecutando:
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">npx create-react-app frontend --template typescript</span>{' '}
            en la carpeta raíz, es decir, ubicado en el nivel de
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">el-proyecto.</span>{' '}
            Con esto ya podremos utilizar Typescript con react. A su vez, para generar la parte del
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">backend,</span>{' '}
            nos tendremos dirigimos a la carpeta y ejecutamos
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">npm init -y</span>{' '}
            así, se nos generará el
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">package.json</span>{' '}
            que necesitaremos para importar los módulos correspondientes.
          </p>

          <h2 className="mt-5">
            En el frontend
          </h2>

          <p>
            Ahora bien, nuestro frontend será muy sencillo ya que lo que más nos importa es
            tener el control de usuarios e imágenes. Por lo tanto, se constituirá
            por un título, un formulario y una tabla para visualizar, en caso de que existan,
            los usuarios correspondientes. También, utilizaremos diferentes librerías y funciones
            tales como
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">react-bootstrap</span>{' '}
            para ahorrar el proceso de los estilos;
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">useState</span>{' '}
            y
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">useEffect</span>{' '}
            para controlar los usuarios registrados y los campos a completar; y
            un servicio que crearemos para los llamados al servidor. Para todo esto,
            crearemos un componente llamado
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">Home,</span>{' '}
            el cual contendrá en principio, los siguientes llamados a librerías:
          </p>

          <pre>
            <code className="language-javascript">
              {
                "import React, { useState, FC, useEffect } from 'react';\n" +
                "import styles from './Home.module.css';\n\n" +

                "// Bootstrap components\n" +
                "import Button from 'react-bootstrap/Button';\n" +
                "import Container from 'react-bootstrap/Container';\n" +
                "import Form from 'react-bootstrap/Form';\n\n" +

                "// Services\n" +
                "import UserService from '../../services/UserService';\n"
              }
            </code>
          </pre>

          <p>
            Posteriormente, tendremos que agregar ciertas variables/estados
            para el control de los campos. Para esto tenemos que tener en cuenta que
            la función de
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">useState</span>{' '}
            lo que hace es establecer un valor inicial a una variable que en caso de que se
            modifique, se reflejará en todo el documento. Es algo así como decir
            que sus cambios serán escuchados. Así, las variables creadas son:
          </p>

          <pre>
            <code className="language-javascript">
              {
                'const [email, setEmail] = useState("");\n' +
                'const [password, setPassword] = useState("");\n' +
                'const [photo, setPhoto] = useState<File>();\n' +
                'const [theUsers, setTheUsers] = useState([]);\n'
              }
            </code>
          </pre>

          <p>
            Luego, por cada variable creada tendremos que contemplar
            su función de manejo o generalmente denominada
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">handle.</span>{' '}
          </p>

          <pre>
            <code className="language-javascript">
              {
                'function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {\n' +
                '  setEmail(e.target.value);\n' +
                '}\n\n' +

                'function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {\n' +
                '  setPassword(e.target.value);\n' +
                '}\n\n' +

                'function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {\n' +
                '  if (!e.target.files) return;\n' +
                '  setPhoto(e.target.files[0]);\n' +
                '}\n\n' +

                'function handleTheUsers() {\n' +
                '  let allUsers: any = [...theUsers];\n' +
                '  let theFile = photo;\n' +
                '  \n' +
                '  if (theFile) {\n' +
                '    let suffix_photo = theFile.name.split(".")[1];\n' +
                '    allUsers.push({\n' +
                '      "email": email,\n' +
                '      "password": password,\n' +
                '      "user_photo": 1,\n' +
                '      "suffix_photo": suffix_photo\n' +
                '    })\n' +
                '  } else {\n' +
                '    allUsers.push({\n' +
                '      "email": email,\n' +
                '      "password": password,\n' +
                '      "user_photo": 0\n' +
                '    })\n' +
                '  }\n\n' +

                '  setTheUsers(allUsers);\n' +
                '}\n'
              }
            </code>
          </pre>

          <div className="mb-3 p-3 bg-info">
            <h6>Nota</h6>

            <p>
              Es importante destacar que la variable que se encargará de gestionar las imágenes
              es la denominada
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">photo</span>{' '}
              la cual, en caso de que en cierto
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">input</span>{' '}
              que se observará posteriormente, se agregue una foto,
              esta variable tomará el valor de esa foto.
            </p>
          </div>

          <p>
            Después llamaremos al hook
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">useEffect</span>{' '}
            para solicitar los usuarios registrados. Estos, serán almcenados en la variable
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">theUsers</span>{' '}
            de la siguiente manera:
          </p>

          <pre>
            <code className="language-javascript">
              {
                "useEffect(() => {\n" +
                "  UserService.getUsers()\n" +
                "    .then((res: any) => {\n" +
                "      setTheUsers(res.data);\n" +
                "    })\n" +
                "    .catch(err => {\n" +
                '      console.log("err");\n' +
                "      console.log(err);\n" +
                "    })\n" +
                "}, [])\n"
              }
            </code>
          </pre>

          <p>
            Finalmente, toda nuestra vista se compondrá de lo siguiente:
          </p>

          <pre>
            <code className="language-javascript">
              {
                'return (\n' +
                '  <Container className="p-0" fluid>\n' +
                '    <h1 className="p-3 bg-primary text-light m-0 text-center">\n' +
                '      Registro de usuarios con fotos\n' +
                '    </h1>\n\n' +

                '    <Form className="pt-5 px-5">\n' +
                '      <Form.Group className="mb-3" controlId="formBasicEmail">\n' +
                '        <Form.Label>Email address</Form.Label>\n' +
                '        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmail} />\n' +
                '      </Form.Group>\n\n' +

                '      <Form.Group className="mb-3" controlId="formBasicPassword">\n' +
                '        <Form.Label>Password</Form.Label>\n' +
                '        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword} />\n' +
                '      </Form.Group>\n' +
                '      <Form.Group controlId="formFile" className="mb-3">\n' +
                '        <Form.Label>User photo</Form.Label>\n' +
                '        <Form.Control type="file" onChange={handlePhoto} />\n' +
                '      </Form.Group>\n' +
                '    </Form>\n\n' +

                '    <Button className="ms-5" variant="primary" onClick={createUser}>\n' +
                '      Register\n' +
                '    </Button>\n\n' +

                '    {\n' +
                '      theUsers.length > 0 ?\n' +
                '        <div className="px-5 mt-2 mb-5 container-fluid m-0 p-0 g-0 tex-center">\n' +
                '          <h2 className="text-center mt-2 mb-5">Tabla de usuarios</h2>\n' +
                '          {\n' +
                '            theUsers.map((i, e) => {\n' +
                '              return (\n' +
                '                <div key={"users" + e} className="row m-0 p-0 g-0 bg-light justify-content-center border border-dark">\n' +
                '                  <div className="col-4 d-flex justify-content-center align-items-center text-center">\n' +
                '                    {\n' +
                '                      i["user_photo"] == 1 ?\n' +
                '                        <img width="100%" src={"/userImages/" + i["email"]  + "." + i["suffix_photo"]} />\n' +
                '                      :\n' +
                '                        <p className="m-0 p-0">No photo</p>\n' +
                '                    }\n' +
                '                  </div>\n' +
                '                  <div className="col-4 d-flex justify-content-center align-items-center text-center">\n' +
                '                    <p className="m-0 p-0">{i["email"]}</p>\n' +
                '                  </div>\n' +
                '                  <div className="col-4 d-flex justify-content-center align-items-center text-center">\n' +
                '                    <p className="m-0 p-0">{i["password"]}</p>\n' +
                '                  </div>\n' +
                '                </div>\n' +
                '              )\n' +
                '            })\n' +
                '          }\n' +
                '        </div>\n' +
                '        :\n' +
                '        <p className="ms-5 mt-4">No hay usuarios registrados en la base de datos.</p>\n' +
                '    }\n\n' +

                '  </Container>\n' +
                ');\n'
              }
            </code>
          </pre>

          <p>
            Ahora bien, en la sección de código donde se abren llaves, lo que se está
            realizando es una verificación para comprobar si
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">theUsers</span>{' '}
            cuenta con usuarios almacenados. Si ese es el caso,
            por cada usuario encontrado se mostrará su información en forma de tabla.
            Esto es lo sucede cuando se llama la función
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">.map</span>{' '}
            de los arreglos en
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">Javascript.</span>{' '}
          </p>

          <p>
            Lo que hace esta función es iterar por cada elemento encontrado, tomando
            el valor de dicho elemento y su índice. En nuestro caso, lo que hacemos es retornar
            ciertos elementos en HTML con la información especificada para cada usuario. Así,
            en caso de que se tenga por ejemplo:
          </p>

          <pre>
            <code className="language-json">
              {
                "[\n" +
                "  {\n" +
                "    email: juan@gmail.com,\n" +
                "    password: 123456789,\n" +
                "    photo: 2.png,\n" +
                "  },\n" +
                "  {\n" +
                "    email: jorgen@gmail.com,\n" +
                "    password: 987654321,\n" +
                "    photo: 1.png,\n" +
                "  }\n" +
                "]"
              }
            </code>
          </pre>

          <p>
            Lo que sucederá es que se renderizará el contenido contemplando ambos usuarios.
          </p>

          <h2>
            Servicio de registro
          </h2>

          <p>
            Ahora bien, lo que nos queda es configurar un servicio que permita
            tomar los datos del
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">frontend</span>{' '}
            y enviarlos al
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">backend</span>{' '}
            para poder guardar la información de los usuarios. Para esto,
            utilizaremos la librería
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">axios</span>{' '}
            con la cual el código quedaría de la siguiente manera:
          </p>

          <pre>
            <code className="language-javascript">
              {
                'import axios from "axios";\n\n' +

                'class UserService {\n\n' +

                '    async postUsers(userData: Object): Promise<Object> {\n' +
                '        let response = await axios.post("http://localhost:3002/users", userData, { // Recordar establecer el puerto que se haya indicado en el backend\n' +
                '            headers: {\n' +
                '                "Content-Type": "multipart/form-data"\n' +
                '            }\n' +
                '        });\n\n' +

                '        return response.data;\n' +
                '    }\n\n' +

                '    async getUsers(): Promise<Object> {\n' +
                "        let response = await axios.get('http://localhost:3002/users'); // Recordar establecer el puerto que se haya indicado en el backend\n" +
                '        return response.data;\n' +
                '    };\n' +
                '}\n\n' +

                'export default new UserService();\n'
              }
            </code>
          </pre>

          <div className="p-3 bg-info">
            <h6>Nota</h6>

            <p>
              Es importante tener en cuenta que la clave para el registro de usuarios con fotos,
              está en la especificación en el headers del
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">"Content-Type": "multipart/form-data"</span>{' '}
              el cual permite hacer entender al servidor que se envía un formulario
              con archivos.
            </p>
          </div>

          <h2 className="mt-5">
            Script de creación de la DB
          </h2>

          <p>
            Teniendo en cuenta que almacenaremos: correo, nombre y foto,
            el
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">script</span>{' '}
            de creación de la base de datos se compone de:
          </p>

          <pre>
            <code className="language-sql">
              {
                "-- Creación de la base de datos\n" +
                "CREATE DATABASE users_db;\n" +
                "\n" +
                "-- Usar la base de datos\n" +
                "USE users_db;\n" +
                "\n" +
                "-- Creación de la tabla de usuarios\n" +
                "CREATE TABLE users(\n" +
                "    email VARCHAR(100) NOT NULL PRIMARY KEY,\n" +
                "    password VARCHAR(100) NOT NULL,\n" +
                "    user_photo INTEGER NOT NULL DEFAULT 0,\n" +
                "    suffix_photo VARCHAR(10) NULL\n" +
                ");\n"
              }
            </code>
          </pre>

          <p>
            El atributo de
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">suffix_photo</span>{' '}
            es utilizado para manejar los distintos tipos de archivos,
            es decir, pueden recibirse JPG, PNG, etc.
          </p>

          <h2 className="mt-5">
            En el backend
          </h2>

          <p>
            Ahora bien, debido a que el
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">backend</span>{' '}
            lo desarrollaremos utilizando
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">Node.js</span>{' '}
            con el framework de
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">express,</span>{' '}
            tendremos que instalar cuatro librerías fundamentales para el desarrollo
            las cuales son:
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">cors,</span>{' '}
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">mysql,</span>{' '}
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">dotenv,</span>{' '}
            y
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">multer.</span>{' '}
            También utilizaremos la librería de gestión de archivos propia de
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">node</span>{' '}
            denominada
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">fs.</span>{' '}
          </p>

          <p>
            Estas librerías pueden ser instaladas desde una consola ubicada dentro
            de la carpeta de
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">backend</span>{' '}
            de la siguiente manera:
          </p>

          <pre>
            <code className="language-cmd">
              {
                "npm i express multer cors mysql dotenv"
              }
            </code>
          </pre>

          <p>
            Luego de esto, crearemos un archivo llamado
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">index.js</span>{' '}
            que será el encargado de las configuraciones de nuestro servidor. Así,
            lo primero que tendremos que hacer es importar las librerías necesarias:
          </p>

          <pre>
            <code className="language-javascript">
              {
                "const fs = require('fs');\n" +
                "require('dotenv').config();\n" +
                "const mysql = require('mysql');\n" +
                "const express = require('express');\n" +
                "const cors = require('cors');\n" +
                "const multer = require('multer');\n"
              }
            </code>
          </pre>

          <p>
            La explicación de cada librería se puede resumir de la siguiente forma:
          </p>

          <ul>
            <li>
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">fs.</span>{' '}
              Es una librería con la que se pueden gestionar archivos y carpetas, verificar
              la existencia, crear alguno nuevo, modificar nombres, etc.
            </li>
            <li>
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">dotenv.</span>{' '}
              Es una librería opcional que nos permite utilizar un archivo de
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">environment</span>{' '}
              el cual no es subido a un repositorio lo que permite guardar contraseñas, rutas
              y demás aspectos que no quisieramos mostrar al público.
            </li>
            <li>
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">mysql.</span>{' '}
              Es una librería que nos permite comunicar
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">node</span>{' '}
              con un motor de
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">MySQL.</span>{' '}
            </li>
            <li>
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">express.</span>{' '}
              Es una librería que nos permite configurar un servidor Rest API
              ya sea para servir contenido estático, renderizar web,
              utilizar middlewares, etc.
            </li>
            <li>
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">cors.</span>{' '}
              Es un middleware que generalmente ha sido instalado en diferentes proyectos
              junto con express para poder recibir y enviar peticiones desde diferentes
              orígenes.
            </li>
            <li>
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">multer.</span>{' '}
              Es una librería que nos permite recibir archivos y guardarlos en una dirección
              especificada y con un nombre determinado.
            </li>
          </ul>

          <p>
            Una vez importadas las librerías tendremos que configurar una función
            para indicarle a
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">multer,</span>{' '}
            donde y con qué nombre tendrá que guardar nuestras imágenes. Para esto,
            utilizamos la función
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">diskStorage</span>{' '}
            y le específicamos dos funciones anónimas correspondientes a cada
            parámetro
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">destination</span>{' '}
            y
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">filename,</span>{' '}
            de la siguiente forma:
          </p>

          <pre>
            <code className="language-javascript">
              {
                "const storage = multer.diskStorage({\n" +
                "  destination: async (req, file, cb) => {\n" +
                "      let theDir = '../frontend/public/userImages';\n" +
                "      let existsDir = fs.existsSync(theDir);\n\n" +

                "      function createDir() {\n" +
                "          return new Promise(resolve => {\n" +
                "              fs.mkdir(theDir, err => {\n" +
                "                  if (!err) {\n" +
                "                      resolve(true);\n" +
                "                  } else {\n" +
                '                      throw new Error("No se logró crear la carpeta");\n' +
                "                  }\n" +
                "              });\n" +
                "          })\n" +
                "      }\n\n" +

                "      if (!existsDir) {\n" +
                "          await createDir();\n" +
                "      }\n\n" +

                "      cb(null, '../frontend/public/userImages')\n" +
                "  },\n" +
                "  filename: (req, file, cb) => {\n" +
                "      let theFile = file.originalname;\n" +
                '      let splitName = theFile.split(".");\n' +
                "      let suffix = splitName[splitName.length - 1];\n" +
                "      let { email } = req.body;\n" +
                '      cb(null, email + "." + suffix);\n' +
                "  }\n" +
                "})\n"
              }
            </code>
          </pre>

          <div className="p-3 mb-3 bg-info">
            <h6>Destination</h6>

            <p>
              Tenemos que recordar que los archivos, para efectos prácticos y
              evitar servir las imágenes como contenido estático en el servidor,
              las almacenaremos directamente en la carpeta
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">public</span>{' '}
              del
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">frontend.</span>{' '}
            </p>

            <p>
              Para esto, lo que hacemos en primera instancia en la parte de
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">destination</span>{' '}
              es determinar si existe una carpeta denominada
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">userImages,</span>{' '}
              en caso de no existir la crearemos, como se puede observar,
              utilizando las funciones de la librería mencionada
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">fs.</span>{' '}
            </p>

            <h6>Filename</h6>

            <p>
              Posteriormente, en
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">filename</span>{' '}
              lo que hacemos es extraer el tipo de archivo haciendo un
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">split</span>{' '}
              del nombre original en el punto. Así, si el nombre del archivo es
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">imagen.png</span>{' '}
              por el campo
              {' '}<span className="badge text-dark m-0 p-0 text-wrap">email</span>{' '}
              y con el sufijo extraido, ya tendremos nuestro nombre de archivo final.
              La idea es guardar la imagen con el correo correspondiente
              independiente del tipo de archivo que sea.
            </p>
          </div>

          <p>
            Posteriormente, le indicamos a multer que utilice la función
            de
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">storage</span>{' '}
            que acabamos de crear.
          </p>

          <p>
            Luego, tendremos que crear la conexión con la base de datos
            para la cual tomaremos el puerto tanto de la base de datos
            como del servidor, el usuario, la contraseña y el nombre de la
            base de datos (recordar que es un ejercicio realizado para una base de datos
            local). También, asignaremos a una variable
            el llamado de
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">express</span>{' '}
            con el fin de iniciar el servidor. Lo anterior se efectúa de la siguiente manera:
          </p>

          <pre>
            <code className="language-javascript">
              {
                'const upload = multer({ storage: storage });\n\n' +

                'const app = express();\n\n' +

                'const PORT = process.env.PORT;\n' +
                'const DB_USER = process.env.DB_USER;\n' +
                'const DB_PASS = process.env.DB_PASS;\n' +
                'const DB_PORT = process.env.DB_PORT;\n' +
                'const DB_NAME = process.env.DB_NAME;\n' +
                'const connection = mysql.createConnection({\n' +
                '    "host": "localhost",\n' +
                '    "port": DB_PORT,\n' +
                '    "user": DB_PASS,\n' +
                '    "password": DB_USER,\n' +
                '    "database": DB_NAME\n' +
                '})\n'
              }
            </code>
          </pre>

          <p>
            Después, intentaremos efectuar la conexión con nuestra base de datos
            y estableceremos los
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">middlewares</span>{' '}
            necesarios.
          </p>

          <pre>
            <code className="language-javascript">
              {
                'connection.connect(async err => {\n' +
                '  if (err) {\n' +
                '      console.log("Ocurrió un error al intentar conectar la base de datos");\n' +
                '      return;\n' +
                '  }\n\n' +

                '  console.log("¡La base de datos se ha conectado exitosamente!");\n' +
                '})\n\n' +

                '// Middlewares\n' +
                'app.use(cors());\n' +
                'app.use(express.json());\n'
              }
            </code>
          </pre>

          <p>
            Luego definiremos una ruta
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">/users</span>{' '}
            para la cual crearemos dos métodos:
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">get</span>{' '}
            y
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">post.</span>{' '}
            Estos métodos se encargarán de retornar todos los usuarios
            y permitir su inserción al
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">frontend</span>{' '}
            respectivamente. Así, nuestro método
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">get</span>{' '}
            se contiene lo siguiente:
          </p>

          <pre>
            <code className="language-javascript">
              {
                'app.route("/users")\n' +
                '// Para obtener los usuarios\n' +
                '.get(async (req, res) => {\n' +
                '    function callQueryUsers() {\n' +
                '        return new Promise(resolve => {\n' +
                '            connection.query("SELECT * FROM users", (err, results, fields) => {\n' +
                '                if (err) resolve([]);\n' +
                '                else resolve(results);\n' +
                '            })\n' +
                '        })\n' +
                '    }\n\n' +

                '    let theUsers = await callQueryUsers();\n\n' +

                '    if (theUsers.length > 0) {\n' +
                '        res.json({\n' +
                '            "code": 200,\n' +
                '            "message": "¡Se han obtenido los usuarios con éxito!",\n' +
                '            "data": theUsers\n' +
                '        })\n' +
                '    } else {\n' +
                '        res.json({\n' +
                '            "code": 201,\n' +
                '            "message": "Al parecer, no han habido usuarios registrados",\n' +
                '            "data": []\n' +
                '        })\n' +
                '    }\n' +
                '})\n'
              }
            </code>
          </pre>

          <p>
            Lo que hacemos es definir una función asíncrona que tomara
            la petición
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">(request)</span>{' '}
            y la respuesta
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">(response).</span>{' '}
            Dentro de la función, definimos una nueva función con la que se hará el llamado a la base
            de datos y le indicamos al método que espere hasta que se obtenga una
            respuesta, ya sea positiva o negativa en el intento
            de obtener los usuarios. Luego, dependiendo de lo que obtengamos,
            retornamos un mensaje al
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">frontend</span>{' '}
            indicando éxito
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">código 200</span>{' '}
            o fracaso
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">código 201</span>{' '}
            (es una estructura de respuesta que he acostumbrado mas quien lo desee puede
            estructurar sus respuestas a conveniencia).
          </p>

          <p>
            Posteriormente, nuestro método
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">post</span>{' '}
            contará con una estructura similar a la del
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">get</span>{' '}
            con la diferencia de que se utilizará el
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">middleware</span>{' '}
            de
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">multer</span>{' '}
            para poder agregar la foto correspondiente.
          </p>

          <p>
            Para agregar un
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">middleware</span>{' '}
            adicional previo a la petición y respuesta, se especifica la/s función/es
            correspondientes necesarias antes de la última que deberá ser la del procesamiento
            de petición y respuesta final.
          </p>

          <p>
            Lo explicado anteriormente se constituye así:
          </p>

          <pre>
            <code className="language-javascript">
              {
                '// Para insertar usuarios\n' +
                ".post(upload.single('user_photo'), async (req, res) => {\n" +
                '  let { email, password } = req.body;\n\n' +

                '  let theFile = req.file;\n' +
                '  let user_photo = theFile ? 1 : 0;\n' +
                '  let suffix_photo = theFile ? theFile.originalname.split(".")[1] : null;\n\n' +

                '  /*\n' +
                '      0 -> Not finished yet\n' +
                '      1 -> Finished\n' +
                '      2 -> Finished but with errors\n' +
                '  */\n' +
                '  let finishedQuery = 0;\n\n' +

                '  function makeQuery() {\n' +
                '      return new Promise(resolve => {\n' +
                '          connection.query("INSERT INTO users VALUES(?, ?, ?, ?)", [email, password, user_photo, suffix_photo], \n' +
                '              (err, results, fields) => {\n' +
                '                  console.log("err");\n' +
                '                  console.log(err);\n' +
                '              \n' +
                '                  if (err) {\n' +
                '                      resolve(2);\n' +
                '                  } else {\n' +
                '                      resolve(1);\n' +
                '                  }\n' +
                '              });\n' +
                '      })\n' +
                '  }\n\n' +

                '  finishedQuery = await makeQuery();\n\n' +

                '  if (finishedQuery == 1) {\n' +
                '      res.json({\n' +
                '          "code": 200,\n' +
                '          "message": "¡El usuario se ha creado con éxito!",\n' +
                '      })\n' +
                '  } else {\n' +
                '      res.json({\n' +
                '          "code": 300,\n' +
                '          "message": "Hubo un error al intentar crear el usuario",\n' +
                '      })\n' +
                '  }\n' +
                '})\n'
              }
            </code>
          </pre>

          <p>
            También, las condiciones en línea son las que se observan
            cuando se acompaña una expresión de un signo de interrogación.
            Lo que se está haciendo en el código anterior, es verificar
            si al hacer el registro de usuarios se ha agregado el archivo,
            en caso de que no se haya agregado, se indica al momento
            de hacer el registro en la base de datos. Por su parte,
            cabe destacar que los
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">console.log</span>{' '}
            son simple y llanamente utilizados para verificar errores
            o estados de alguna variable en específico (por ende, pueden ser omitidos).
          </p>

          <p>
            Finalmente, le indicamos al servidor que inicie la escucha
            en el puerto especificado anteriormente:
          </p>

          <pre>
            <code className="language-javascript">
              {
                "app.listen(PORT, () => {\n" +
                "  console.log(`Server listening on port ${PORT}`);\n" +
                "})\n"
              }
            </code>
          </pre>

          <h2 className="mt-5">
            Evidencias de funcionamiento
          </h2>

          <p>
            El aplicativo final se puede observar de la siguiente manera:
          </p>

          <div className={"w-100 " + styles.DivImg}>
            <img className="w-100" src={process.env.PUBLIC_URL + "/noveno-semestre/proyecto-informatico-2/1.JPG"} />
          </div>


          <h2 className="mt-5">
            Finalización
          </h2>

          <p>
            Esta ha sido una guía para construir un aplicativo utilizando
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">React</span>{' '}
            con
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">Typescript</span>{' '}
            en el
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">frontend,</span>{' '}
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">Node.js</span>{' '}
            con
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">express</span>{' '}
            en el
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">backend</span>{' '}
            y
            {' '}<span className="badge text-dark m-0 p-0 text-wrap">MySQL</span>{' '}
            como base de datos.
            El código del proyecto lo pueden encontrar en el siguiente repositorio
            de
            {' '}<a href="https://github.com/Juandiego001/react-typescript-mysql-imgs" rel="nofolow, noindex">github.</a>{' '}
            Cualquier duda, queja, recomendación o donación que deseen realizar me pueden contactar por telegram:
            {' '}<a href="https://t.me/Juan_0_0_1" target="_blank">https://t.me/Juan_0_0_1</a>.
            Espero les haya sido de gran ayuda :)
          </p>

          <p>
            Fecha de publicación: 10-03-2023.
            <br />
            Autor: Juan Diego Cobo Cabal.
          </p>

        </div>

        <Footer />
      </div>
    </>
  )
};

ReactTypeScriptMySql.propTypes = {};

ReactTypeScriptMySql.defaultProps = {};

export default ReactTypeScriptMySql;
