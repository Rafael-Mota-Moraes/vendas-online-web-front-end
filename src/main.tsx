import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loginRoutes } from "./modules/login/routes.tsx";
import { GlobalProvider } from "./shared/hooks/useGlobalContext.tsx";

const mainRoutes = [
  {
    path: "/",
    element: <div>Tela Principal</div>,
    errorElement: <div>Página não encontrada</div>
  }
];

const router = createBrowserRouter([...loginRoutes, ...mainRoutes]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
