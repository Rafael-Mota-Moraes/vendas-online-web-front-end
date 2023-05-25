import "./index.css";

import {
  RouteObject,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { loginRoutes } from "./modules/login/routes.tsx";
import { useNotification } from "./shared/hooks/useNotification.ts";
import { firstScreenRoutes } from "./modules/firstScreen/routes.tsx";
import { productScreens } from "./modules/product/routes.tsx";
import { verifyLoggedIn } from "./shared/functions/connection/auth.ts";
import { useRequests } from "./shared/hooks/useRequests.ts";
import { useEffect } from "react";
import { URL_USER } from "./shared/constants/urls.ts";
import { MethodsEnum } from "./shared/enums/methods.enum.ts";
import { useGlobalContext } from "./shared/hooks/useGlobalContext.tsx";

const routes = [...loginRoutes];
const routesLoggedIn: RouteObject[] = [
  ...productScreens,
  ...firstScreenRoutes
].map((route) => ({
  ...route,
  loader: verifyLoggedIn
}));

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalContext();
  const { request } = useRequests();

  const router = createBrowserRouter([...routes, ...routesLoggedIn]);

  useEffect(() => {
    request(URL_USER, MethodsEnum.GET, setUser);
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
