import axios from "axios";
import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import { connectionApiPost } from "../functions/connection/connectionApi";
import { URL_AUTH } from "../constants/urls";
import { ERROR_INVALID_PASSWORD } from "../constants/errorsStatus";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../../modules/product/routes";
import { setAuthorizationToken } from "../functions/connection/auth";
import { AuthType } from "../../modules/login/types/AuthType";

export const useRequests = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
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

  const authRequest = async <T>(body: unknown): Promise<void> => {
    setLoading(true);
    await connectionApiPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setAuthorizationToken(result.accessToken);
        navigate(ProductRoutesEnum.PRODUCT);
        return result;
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, "error");
      });

    setLoading(false);
  };

  return { loading, authRequest, getRequest, postRequest };
};
