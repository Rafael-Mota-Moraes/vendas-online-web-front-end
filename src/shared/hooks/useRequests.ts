import axios from "axios";
import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import { connectionApiPost } from "../functions/connection/connectionApi";

interface ABC {
  accessToken: string;
}

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

  const postRequest = async <T>(
    url: string,
    body: unknown
  ): Promise<T | undefined> => {
    setLoading(true);
    const returnData = await connectionApiPost<T>(url, body)
      .then((result) => {
        setNotification("Entrando...", "success");
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
        return undefined;
      });

    setLoading(false);
    return returnData;
  };

  return { loading, getRequest, postRequest };
};
