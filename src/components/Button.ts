import { styled } from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: #4cabff;
  border: none;
  transition: all 0.3s;

  &:hover {
    background-color: #2d689c;
  }
`;
