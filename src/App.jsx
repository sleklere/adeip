import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/Error";
import Home from "./Pages/Home";
import MainLayout from "./Pages/MainLayout";
import Publicaciones from "./Pages/Publicaciones";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/publicaciones",
        element: <Publicaciones />,
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
