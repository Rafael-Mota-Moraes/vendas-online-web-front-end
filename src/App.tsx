import "./App.css";
import { styled } from "styled-components";
import { Button, Space } from "antd";

const StyledDiv = styled.div`
  background-color: #ddd;
  color: #333;
  padding: 1rem;
  border-radius: 0.75rem;
`;

function App() {
  return (
    <>
      <StyledDiv>
        <h1>TESTANDO</h1>
        <Space wrap>
          <Button type="primary">Primary Button</Button>
        </Space>
      </StyledDiv>
    </>
  );
}

export default App;
