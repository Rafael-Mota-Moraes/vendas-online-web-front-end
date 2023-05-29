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
import {
  getAuthorizationToken,
  verifyLoggedIn
} from "./shared/functions/connection/auth.ts";
import { useRequests } from "./shared/hooks/useRequests.ts";
import { useEffect } from "react";
import { URL_USER } from "./shared/constants/urls.ts";
import { MethodsEnum } from "./shared/enums/methods.enum.ts";
import { categoryScreens } from "./modules/category/routes.tsx";
import { useGlobalReducer } from "./store/globalReducer/useGlobalReducer.ts";

const routes = [...loginRoutes];
const routesLoggedIn: RouteObject[] = [
  ...productScreens,
  ...categoryScreens,
  ...firstScreenRoutes
].map((route) => ({
  ...route,
  loader: verifyLoggedIn
}));

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalReducer();
  const { request } = useRequests();

  const router = createBrowserRouter([...routes, ...routesLoggedIn]);

  useEffect(() => {
    const token = getAuthorizationToken();

    if (token) {
      request(URL_USER, MethodsEnum.GET, setUser);
    }
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
