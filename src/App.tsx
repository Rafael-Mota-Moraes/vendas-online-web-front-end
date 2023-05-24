import "./index.css";

import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  useNavigate
} from "react-router-dom";
import { loginRoutes } from "./modules/login/routes.tsx";
import { useNotification } from "./shared/hooks/useNotification.ts";
import { firstScreenRoutes } from "./modules/firstScreen/routes.tsx";
import { productScreens } from "./modules/product/routes.tsx";
import { useGlobalContext } from "./shared/hooks/useGlobalContext.tsx";
import { verifyLoggedIn } from "./shared/functions/connection/auth.ts";

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();

  const routes = [...loginRoutes];
  const routesLoggedIn: RouteObject[] = [
    ...productScreens,
    ...firstScreenRoutes
  ].map((route) => ({
    ...route,
    loader: () => verifyLoggedIn(setUser, user)
  }));

  const router = createBrowserRouter([...routes, ...routesLoggedIn]);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
