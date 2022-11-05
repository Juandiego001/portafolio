import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Home from './pages/Home/Home';

// Cursos
import DesarrolloMoviles from './pages/DesarrolloMoviles/DesarrolloMoviles';
import SeguridadInformatica from './pages/SeguridadInformatica/SeguridadInformatica';
import BasesDatos2 from './pages/BasesDatos2/BasesDatos2';
import MaratonProgramacion from './pages/MaratonProgramacion/MaratonProgramacion';
import ServiciosTelematicos from './pages/ServiciosTelematicos/ServiciosTelematicos';
import ProyectoInformatico2 from './pages/ProyectoInformatico2/ProyectoInformatico2';

// Entradas
import AplicacionAndroidNodejsMysql from './pages/blog-post/AplicacionAndroidNodejsMysql/AplicacionAndroidNodejsMysql';
import ProblemaMochila from './pages/blog-post/ProblemaMochila/ProblemaMochila';
import AplicacionFlaskCentos from './pages/blog-post/AplicacionFlaskCentos/AplicacionFlaskCentos';
import AplicacionFlaskSwagger from './pages/blog-post/AplicacionFlaskSwagger/AplicacionFlaskSwagger';
import AplicacionFlaskMySql from './pages/blog-post/AplicacionFlaskMySQL/AplicacionFlaskMySQL';
import MetasploitKaliWindowsXp from './pages/blog-post/MetasploitKaliWindowsXP/MetasploitKaliWindowsXP';
import RestApiCentos from './pages/blog-post/RestAPICentos/RestAPICentos';
import JsonPlaceHolderCentos from './pages/blog-post/JsonPlaceHolderCentos/JsonPlaceHolderCentos';
import ReactTypeScriptMySql from './pages/blog-post/ReactTypeScriptMySQL/ReactTypeScriptMySQL';
import ProblemaGasolinera from './pages/blog-post/ProblemaGasolinera/ProblemaGasolinera';
import IoTUbidots from './pages/blog-post/IoTUbidots/IoTUbidots';
import AplicacionAndroidFirebase from './pages/blog-post/AplicacionAndroidFirebase/AplicacionAndroidFirebase';
import AplicacionAndroidGps from './pages/blog-post/AplicacionAndroidGPS/AplicacionAndroidGPS';

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cursos/desarrollo-de-software-para-plataformas-moviles",
    element: <DesarrolloMoviles />,
  },
  {
    path: "/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-nodejs-mysql",
    element: <AplicacionAndroidNodejsMysql />
  },
  {
    path: "/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-firebase",
    element: <AplicacionAndroidFirebase />
  },
  {
    path: "/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-gps",
    element: <AplicacionAndroidGps />
  },
  {
    path: "/cursos/seguridad-informatica",
    element: <SeguridadInformatica />,
  },
  {
    path: "/cursos/seguridad-informatica/entradas/metasploit-kali-windows-xp",
    element: <MetasploitKaliWindowsXp />,
  },
  {
    path: "/cursos/servicios-telematicos",
    element: <ServiciosTelematicos />,
  },
  {
    path: "/cursos/servicios-telematicos/entradas/aplicacion-flask-centos",
    element: <AplicacionFlaskCentos />,
  },
  {
    path: "/cursos/servicios-telematicos/entradas/aplicacion-flask-swagger",
    element: <AplicacionFlaskSwagger />,
  },
  {
    path: "/cursos/servicios-telematicos/entradas/aplicacion-flask-mysql",
    element: <AplicacionFlaskMySql />,
  },
  {
    path: "/cursos/servicios-telematicos/entradas/rest-api-centos",
    element: <RestApiCentos />,
  },
  {
    path: "/cursos/servicios-telematicos/entradas/json-placeholder-centos",
    element: <JsonPlaceHolderCentos />,
  },
  {
    path: "/cursos/servicios-telematicos/entradas/iot-ubidots",
    element: <IoTUbidots />,
  },
  {
    path: "/cursos/bases-de-datos-2",
    element: <BasesDatos2 />,
  },
  {
    path: "/cursos/maraton-de-programacion",
    element: <MaratonProgramacion />,
  },
  {
    path: "/cursos/maraton-de-programacion/entradas/el-problema-de-la-mochila",
    element: <ProblemaMochila />,
  },
  {
    path: "/cursos/maraton-de-programacion/entradas/el-problema-de-la-gasolinera",
    element: <ProblemaGasolinera />,
  },
  {
    path: "/cursos/proyecto-informatico-2",
    element: <ProyectoInformatico2 />,
  },
  {
    path: "/cursos/proyecto-informatico-2/entradas/react-typescript-mysql-imgs",
    element: <ReactTypeScriptMySql />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
