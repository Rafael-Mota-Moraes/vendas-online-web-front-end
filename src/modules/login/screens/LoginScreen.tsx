import React, { useState } from "react";

import Button from "../../../shared/components/buttons/button/Button";
import Input from "../../../shared/components/inputs/input/Input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin
} from "../styles/loginScreen.styles";
import { useRequests } from "../../../shared/hooks/useRequests";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { authRequest, loading } = useRequests();

  const navigate = useNavigate();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    authRequest(navigate, {
      email: email,
      password: password
    });
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
            title="E-Mail"
            margin="32px 0px 0px"
            onChange={handleEmail}
            value={email}
          />
          <Input
            title="Senha"
            margin="32px 0px 0px"
            onChange={handlePassword}
            value={password}
            type="password"
          />
          <Button
            loading={loading}
            type="primary"
            margin="64px 0px 16px"
            onClick={handleLogin}
          >
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>

      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
