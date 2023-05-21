import { useCallback, useState } from "react";

export default function TestCallback() {
  const [name, setName] = useState<string>("Rafael");

  const handleChangeName = useCallback(() => {
    if (name === "Rafael") {
      setName("José");
    } else {
      setName("Rafael");
    }
  }, [name]);

  return (
    <div>
      <h1 onClick={handleChangeName}>{name}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit corporis
        quaerat asperiores molestias, tenetur temporibus cumque pariatur quia
        eligendi, nihil aut magni reiciendis alias consequuntur. Nulla deserunt
        provident ducimus sequi.
      </p>
    </div>
  );
}
