import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Home from './pages/Home/Home';
import Contacto from './pages/Contacto/Contacto';
import Evaluaciones from './pages/Evaluaciones/Evaluaciones';
import AcercaDe from './pages/AcercaDe/AcercaDe';
import ErrorPage from './pages/ErrorPage/ErrorPage';

// Cursos
import DesarrolloMoviles from './pages/DesarrolloMoviles/DesarrolloMoviles';
import SeguridadInformatica from './pages/SeguridadInformatica/SeguridadInformatica';
import BasesDatos2 from './pages/BasesDatos2/BasesDatos2';
import MaratonProgramacion from './pages/MaratonProgramacion/MaratonProgramacion';
import ServiciosTelematicos from './pages/ServiciosTelematicos/ServiciosTelematicos';
import ProyectoInformatico2 from './pages/ProyectoInformatico2/ProyectoInformatico2';
import FormulacionProyectos from './pages/FormulacionProyectos/FormulacionProyectos';
import GestionInnovacion from './pages/GestionInnovacion/GestionInnovacion';
import IdeasOportunidades from './pages/IdeasOportunidades/IdeasOportunidades';
import AdministracionIngenieros from './pages/AdministracionIngenieros/AdministracionIngenieros';
import AuditoriaSistemas from './pages/AuditoriaSistemas/AuditoriaSistemas';
import HackingEtico from './pages/HackingEtico/HackingEtico';
import InformaticaForense from './pages/InformaticaForense/InformaticaForense';
import ProyectoInformatico1 from './pages/ProyectoInformatico1/ProyectoInformatico1';
import SeminarioInformatica from './pages/SeminarioInformatica/SeminarioInformatica';

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
import InsTrigFuncOracle from './pages/blog-post/InsTrigFuncOracle/InsTrigFuncOracle';
import CombinaPermut from './pages/blog-post/CombinaPermut/CombinaPermut';

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
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
      path: "/cursos/bases-de-datos-2/entradas/inserciones-triggers-funciones-oracle",
      element: <InsTrigFuncOracle />,
    },
  {
    path: "/cursos/maraton-de-programacion",
    element: <MaratonProgramacion />,
  },
    {
      path: "/cursos/maraton-de-programacion/entradas/combinaciones-y-permutaciones",
      element: <CombinaPermut />,
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
  {
    path: "/cursos/ideas-y-oportunidades-de-negocio",
    element: <IdeasOportunidades />,
  },
  {
    path: "/cursos/formulacion-y-evaluacion-de-proyectos",
    element: <FormulacionProyectos />,
  },
  {
    path: "/cursos/gestion-de-la-innovacion",
    element: <GestionInnovacion />,
  },
  {
    path: "/cursos/administracion-para-ingenieros",
    element: <AdministracionIngenieros />
  },
  {
    path: "/cursos/auditoria-de-sistemas",
    element: <AuditoriaSistemas />
  },
  {
    path: "/contacto",
    element: <Contacto />
  },
  {
    path: "/evaluaciones",
    element: <Evaluaciones />
  },
  {
    path: "/cursos/hacking-etico",
    element: <HackingEtico />
  },
  {
    path: "/cursos/informatica-forense",
    element: <InformaticaForense />
  },
  {
    path: "/cursos/proyecto-informatico-1",
    element: <ProyectoInformatico1 />
  },
  {
    path: "/cursos/seminario-de-ingeniera-informatica",
    element: <SeminarioInformatica />
  },
  {
    path: "/acercade",
    element: <AcercaDe />
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
