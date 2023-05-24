import LoginScreen from ".";

export enum LoginRoutesEnum {
  LOGIN = "/login"
}

export const loginRoutes = [
  {
    path: LoginRoutesEnum.LOGIN,
    element: <LoginScreen />,
    errorElement: <div>Ocorreu algum erro</div>
  }
];
