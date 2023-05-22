import React, { useState } from "react";

import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/Input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin aria-level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input
            title="Usuário"
            margin="32px 0px 0px"
            onChange={handleUsername}
            value={username}
          />
          <Input
            title="Senha"
            margin="32px 0px 0px"
            onChange={handlePassword}
            value={password}
            type="password"
          />
          <Button type="primary" margin="64px 0px 16px">
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>

      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
