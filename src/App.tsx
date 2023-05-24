import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loginRoutes } from "./modules/login/routes.tsx";
import { useNotification } from "./shared/hooks/useNotification.ts";
import { firstScreenRoutes } from "./modules/firstScreen/routes.tsx";
import { productScreens } from "./modules/product/routes.tsx";

const router = createBrowserRouter([
  ...loginRoutes,
  ...firstScreenRoutes,
  ...productScreens
]);

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
