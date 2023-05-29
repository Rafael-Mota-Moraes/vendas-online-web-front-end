import { useState } from "react";

export const useInsertCategory = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const insertCategory = () => {
    setLoading(true);
    console.log();
  };

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return {
    name,
    setName,
    handleOnChangeName,
    insertCategory,
    loading
  };
};
