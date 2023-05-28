import styled from "styled-components";
import { LogoImage } from "../../../modules/login/styles/loginScreen.styles";
import { Typography } from "antd";

const { Text } = Typography;

export const ContainerMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #001529;

  width: 240px;
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
`;

export const ContainerLogoName = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;

  box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
`;

export const LogoMenu = styled(LogoImage)`
  width: 50px;
  /* height: 50px; */
  margin: 0px 16px;
`;

export const NameCompany = styled(Text)`
  color: white;
  text-align: center;
  font-size: 18px;
  width: 100%;
`;
