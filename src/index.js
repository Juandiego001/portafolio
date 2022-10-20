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

// Entradas
import AplicacionAndroidNodejsMysql from './pages/blog-post/AplicacionAndroidNodejsMysql/AplicacionAndroidNodejsMysql';
import ProblemaMochila from './pages/blog-post/ProblemaMochila/ProblemaMochila';
import AplicacionFlaskCentos from './pages/blog-post/AplicacionFlaskCentos/AplicacionFlaskCentos';
import AplicacionFlaskSwagger from './pages/blog-post/AplicacionFlaskSwagger/AplicacionFlaskSwagger';
import AplicacionFlaskMySql from './pages/blog-post/AplicacionFlaskMySQL/AplicacionFlaskMySQL';
import MetasploitKaliWindowsXp from './pages/blog-post/MetasploitKaliWindowsXP/MetasploitKaliWindowsXP';
import RestApiCentos from './pages/blog-post/RestAPICentos/RestAPICentos';

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
  }
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
