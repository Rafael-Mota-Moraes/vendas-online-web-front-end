import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import ConnectionApi, {
  MethodType,
  connectionApiPost
} from "../functions/connection/connectionApi";
import { URL_AUTH } from "../constants/urls";
import { ERROR_INVALID_PASSWORD } from "../constants/errorsStatus";
import { NavigateFunction } from "react-router-dom";
import { setAuthorizationToken } from "../functions/connection/auth";
import { AuthType } from "../../modules/login/types/AuthType";
import { FirstScreenRoutesEnum } from "../../modules/firstScreen/routes";

export const useRequests = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setNotification, setUser } = useGlobalContext();
  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown
  ): Promise<T | undefined> => {
    setLoading(true);
    const returnObject: T | undefined = await ConnectionApi.connect<T>(
      url,
      method,
      body
    )
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
        return undefined;
      });
    setLoading(false);
    return returnObject;
  };

  const authRequest = async (
    navigate: NavigateFunction,
    body: unknown
  ): Promise<void> => {
    setLoading(true);
    await connectionApiPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setUser(result.user);
        setAuthorizationToken(result.accessToken);
        navigate(FirstScreenRoutesEnum.FIRST_SCREEN);
        return result;
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, "error");
      });

    setLoading(false);
  };

  return { loading, authRequest, request };
};
