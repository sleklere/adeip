import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
