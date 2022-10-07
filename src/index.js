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

// Entradas
import AplicacionAndroidNodejsMysql from './pages/blog-post/AplicacionAndroidNodejsMysql/AplicacionAndroidNodejsMysql';
import ProblemaMochila from './pages/blog-post/ProblemaMochila/ProblemaMochila';

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
    path: "/cursos/seguridad-informatica",
    element: <SeguridadInformatica />,
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
    path: "/cursos/desarrollo-de-software-para-plataformas-moviles/entradas/aplicacion-android-nodejs-mysql",
    element: <AplicacionAndroidNodejsMysql />,
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
