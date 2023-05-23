import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loginRoutes } from "./modules/login/routes.tsx";
import { GlobalProvider } from "./shared/hooks/useGlobalContext.tsx";
import { useNotification } from "./shared/hooks/useNotification.ts";

const mainRoutes = [
  {
    path: "/",
    element: <div>Tela Principal</div>,
    errorElement: <div>Página não encontrada</div>
  }
];

const router = createBrowserRouter([...loginRoutes, ...mainRoutes]);

function App() {
  const { contextHolder } = useNotification();

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
