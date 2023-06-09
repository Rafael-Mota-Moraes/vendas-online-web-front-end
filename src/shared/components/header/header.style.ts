import styled from "styled-components";
import { LogoutOutlined } from "@ant-design/icons";

export const HeaderContainer = styled.header`
  height: 72px;
  width: calc(100% - 240px);
  margin-left: auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 32px;

  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.47);
`;

export const IconExit = styled(LogoutOutlined)`
  font-size: 24px;
  color: tomato;
`;
