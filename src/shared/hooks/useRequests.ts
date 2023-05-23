import axios from "axios";
import { useState } from "react";

export const useRequests = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getRequest = async (url: string) => {
    setLoading(true);
    const returnData = await axios({
      method: "get",
      url: url
    })
      .then((result) => result.data)
      .catch((error) => {
        alert("Usuário ou senha inválidos!");
        console.log(error);
      });
    setLoading(false);
    return returnData;
  };

  const postRequest = async (url: string, body: any) => {
    setLoading(true);
    const returnData = await axios({
      method: "post",
      url: url,
      data: body
    })
      .then((result) => result.data)
      .catch((error) => {
        alert("Usuário ou senha inválidos!");
        console.log(error);
      });
    setLoading(false);
    return returnData;
  };

  return { loading, getRequest, postRequest };
};
