import axios from "axios";
import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";

export const useRequests = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);
    const returnData = await axios({
      method: "get",
      url: url
    })
      .then((result) => result.data)
      .catch(() => {
        console.log("Get error");
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
      .then((result) => {
        setNotification("Entrando...", "success");
        return result.data;
      })
      .catch(() => {
        setNotification("Usuário ou senha inválidos!", "error");
        return null;
      });

    setLoading(false);
    return returnData;
  };

  return { loading, getRequest, postRequest };
};
