import FirstScreen from ".";
import PageNotFound from "./screens/PageNotFound";

export const firstScreenRoutes = [
  {
    path: "/",
    element: <FirstScreen />,
    errorElement: <PageNotFound />
  }
];
