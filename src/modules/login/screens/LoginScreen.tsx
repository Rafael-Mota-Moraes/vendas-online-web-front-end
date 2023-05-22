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
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin aria-level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="Usuário" />
          <Input title="Senha" />
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
