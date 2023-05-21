import { useState, useMemo } from "react";
import { Button } from "./Button";

export default function TestMemo() {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);

  const calc = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 9 ** 10; i++) {
      sum += value1;
    }

    return sum;
  }, [value1]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        textAlign: "center",
        flexDirection: "column"
      }}
    >
      <h1>useMemo</h1>
      <h2>{calc}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem"
        }}
      >
        <Button onClick={() => setValue1((current) => current + 1)}>
          {value1}
        </Button>
        <Button onClick={() => setValue2((current) => current + 1)}>
          {value2}
        </Button>
      </div>
    </div>
  );
}
