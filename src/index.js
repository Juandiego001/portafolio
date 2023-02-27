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
import Cursos from './pages/Cursos/Cursos';
import Calculadoras from './pages/Calculadoras/Calculadoras';

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
import ProbabilidadEstadistica from './pages/ProbabilidadEstadistica/ProbabilidadEstadistica';
import ActividadComplementaria from './pages/ActividadComplementaria/ActividadComplementaria';
import Fisica2 from './pages/Fisica2/Fisica2';
import AmbienteSostenible from './pages/AmbienteSostenible/AmbienteSostenible';
import BasesDatos1 from './pages/BasesDatos1/BasesDatos1';
import Estructuras1 from './pages/Estructuras1/Estructuras1';
import Estructuras2 from './pages/Estructuras2/Estructuras2';
import ArquitecturaComputadores from './pages/ArquitecturaComputadores/ArquitecturaComputadores';
import IngeSoft1 from './pages/IngeSoft1/IngeSoft1';
import IngeSoft2 from './pages/IngeSoft2/IngeSoft2';
import AmbienteWeb from './pages/AmbienteWeb/AmbienteWeb';
import RedesDatos from './pages/RedesDatos/RedesDatos';
import SistemasOperativos from './pages/SistemasOperativos/SistemasOperativos';
import InvestigacionOperaciones from './pages/InvestigacionOperaciones/InvestigacionOperaciones';
import PensamientoSistemico from './pages/PensamientoSistemico/PensamientoSistemico';
import IdentidadesCultura from './pages/IdentidadesCultura/IdentidadesCultura';

// Entradas
// Desarrollo de software para plataformas moviles
import AplicacionAndroidNodejsMysql from './pages/DesarrolloMoviles/Posts/AplicacionAndroidNodejsMysql/AplicacionAndroidNodejsMysql';
import AplicacionAndroidFirebase from './pages/DesarrolloMoviles/Posts/AplicacionAndroidFirebase/AplicacionAndroidFirebase';
import AplicacionAndroidGps from './pages/DesarrolloMoviles/Posts/AplicacionAndroidGPS/AplicacionAndroidGPS';

// Maratón de programación
import ProblemaMochila from './pages/MaratonProgramacion/Posts/ProblemaMochila/ProblemaMochila';
import ProblemaGasolinera from './pages/MaratonProgramacion/Posts/ProblemaGasolinera/ProblemaGasolinera';
import SubPermut from './pages/MaratonProgramacion/Posts/SubPermut/SubPermut';
import ConceptosGrafos from './pages/MaratonProgramacion/Posts/ConceptosGrafos/ConceptosGrafos';

// Probabilidad y estadística
import TeoriaInicialEstadistica from './pages/ProbabilidadEstadistica/Posts/TeoriaInicialEstadistica/TeoriaInicialEstadistica';

// Seguridad Informática
import MetasploitKaliWindowsXp from './pages/SeguridadInformatica/Posts/MetasploitKaliWindowsXP/MetasploitKaliWindowsXP';

// Servicios telemáticos
import AplicacionFlaskCentos from './pages/ServiciosTelematicos/Posts/AplicacionFlaskCentos/AplicacionFlaskCentos';
import AplicacionFlaskSwagger from './pages/ServiciosTelematicos/Posts/AplicacionFlaskSwagger/AplicacionFlaskSwagger';
import AplicacionFlaskMySql from './pages/ServiciosTelematicos/Posts/AplicacionFlaskMySQL/AplicacionFlaskMySQL';
import RestApiCentos from './pages/ServiciosTelematicos/Posts/RestAPICentos/RestAPICentos';
import JsonPlaceHolderCentos from './pages/ServiciosTelematicos/Posts/JsonPlaceHolderCentos/JsonPlaceHolderCentos';
import IoTUbidots from './pages/ServiciosTelematicos/Posts/IoTUbidots/IoTUbidots';

// Proyecto informático 2
import ReactTypeScriptMySql from './pages/ProyectoInformatico2/Posts/ReactTypeScriptMySQL/ReactTypeScriptMySQL';

// Bases de datos 2
import InsTrigFuncOracle from './pages/BasesDatos2/Posts/InsTrigFuncOracle/InsTrigFuncOracle';

// Auditoria de sistemas
import ConceptosInicialesAuditoria from './pages/AuditoriaSistemas/Posts/ConceptosInicialesAuditoria/ConceptosInicialesAuditoria';

// Evaluaciones
// Auditoria de sistemas
import PrimerosCincoCapitulos from './pages/AuditoriaSistemas/Tests/PrimerosCincoCapitulos/PrimerosCincoCapitulos';

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
      path: "/cursos/maraton-de-programacion/entradas/conceptos-inciales-de-grafos",
      element: <ConceptosGrafos />,
    },
    {
      path: "/cursos/maraton-de-programacion/entradas/subconjuntos-y-permutaciones",
      element: <SubPermut />,
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
  // Posts auditoria de sistemas
  {
    path: "/cursos/auditoria-de-sistemas/entradas/conceptos-iniciales-de-la-auditoria-de-sistemas",
    element: <ConceptosInicialesAuditoria />
  },
  // Fin de posts de auditoría de sistemas
  // Evaluaciones auditoría de sistemas
  {
    path: "/evaluaciones/auditoria-de-sistemas/primeros-cinco-capitulos",
    element: <PrimerosCincoCapitulos />
  },
  // Fin de evaluaciones de auditoría de sistemas
  {
    path: "/contacto",
    element: <Contacto />
  },
  {
    path: "/evaluaciones",
    element: <Evaluaciones />
  },
  {
    path: "/calculadoras",
    element: <Calculadoras />
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
    path: "/cursos/seminario-de-ingenieria-informatica",
    element: <SeminarioInformatica />
  },
  {
    path: "/acercade",
    element: <AcercaDe />
  },
  {
    path: "/cursos/probabilidad-y-estadistica",
    element: <ProbabilidadEstadistica />
  },
    {
      path: "/cursos/probabilidad-y-estadistica/entradas/teoria-inicial-de-la-estadistica",
      element: <TeoriaInicialEstadistica />
    },
  {
    path: "/cursos/actividad-complementaria",
    element: <ActividadComplementaria />
  },
  {
    path: "/cursos/fisica-2",
    element: <Fisica2 />
  },
  {
    path: "/cursos/ambiente-y-desarrollo-sostenible",
    element: <AmbienteSostenible />
  },
  {
    path: "/cursos/bases-de-datos-1",
    element: <BasesDatos1 />
  },
  {
    path: "/cursos/estructuras-de-datos-y-algoritmos-1",
    element: <Estructuras1 />
  },
  {
    path: "/cursos/estructuras-de-datos-y-algoritmos-2",
    element: <Estructuras2 />
  },
  {
    path: "/cursos/arquitectura-de-computadores",
    element: <ArquitecturaComputadores />
  },
  {
    path: "/cursos/ingenieria-de-software-1",
    element: <IngeSoft1 />
  },
  {
    path: "/cursos/ingenieria-de-software-2",
    element: <IngeSoft2 />
  },
  {
    path: "/cursos/programacion-en-ambiente-web",
    element: <AmbienteWeb />
  },
  {
    path: "/cursos/redes-de-datos",
    element: <RedesDatos />
  },
  {
    path: "/cursos/sistemas-operativos",
    element: <SistemasOperativos />
  },
  {
    path: "/cursos/investigacion-de-operaciones",
    element: <InvestigacionOperaciones />
  },
  {
    path: "/cursos/pensamiento-sistemico",
    element: <PensamientoSistemico />
  },
  {
    path: "/cursos/identidades-y-cultura",
    element: <IdentidadesCultura />
  },
  {
    path: "/cursos",
    element: <Cursos />
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
