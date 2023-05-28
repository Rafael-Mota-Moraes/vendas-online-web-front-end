import FirstScreen from ".";
import PageNotFound from "./screens/PageNotFound";

export enum FirstScreenRoutesEnum {
  FIRST_SCREEN = "/"
}

export const firstScreenRoutes = [
  {
    path: FirstScreenRoutesEnum.FIRST_SCREEN,
    element: <FirstScreen />,
    errorElement: <PageNotFound />
  }
];
