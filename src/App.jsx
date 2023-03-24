import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/Error";
import Inicio from "./Pages/Inicio";
import MainLayout from "./Pages/MainLayout";
import SobreAdeip from "./Pages/SobreAdeip";
import ConsejoDirectivo from "./Pages/ConsejoDirectivo";
import Publicaciones from "./Pages/Publicaciones";
import Biblioteca from "./Pages/Biblioteca";
import ActividadesAcademicas from "./Pages/ActividadesAcademicas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/sobre-adeip",
        element: <SobreAdeip />,
      },
      {
        path: "/consejo-directivo",
        element: <ConsejoDirectivo />,
      },
      {
        path: "/publicaciones",
        element: <Publicaciones />,
      },
      {
        path: "/biblioteca",
        element: <Biblioteca />,
      },
      {
        path: "/actividades-academicas",
        element: <ActividadesAcademicas />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
