import { Button } from "./Button";
import { useState, useEffect } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin: 5px 0;
  }
`;

export default function Contador() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("Counter mudou");
  }, [counter]);

  return (
    <Wrapper>
      <h2>Contador</h2>
      <h2>{counter}</h2>
      <ButtonContainer>
        <Button onClick={() => setCounter(counter + 1)}>+</Button>
        <Button onClick={() => setCounter(counter - 1)}>-</Button>
      </ButtonContainer>
    </Wrapper>
  );
}
