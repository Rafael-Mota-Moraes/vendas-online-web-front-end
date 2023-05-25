import axios, { AxiosRequestConfig } from "axios";
import { MethodsEnum } from "../../enums/methods.enum";
import {
  ERROR_ACCESS_DENIED,
  ERROR_CONNECTION
} from "../../constants/errorsStatus";
import { getAuthorizationToken } from "./auth";

export type MethodType = "get" | "post" | "put" | "patch" | "delete";

export default class ConnectionApi {
  static async call<T>(
    url: string,
    method: MethodType,
    body: unknown
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: getAuthorizationToken(),
        "Content-Type": "application/json"
      }
    };

    switch (method) {
      case MethodsEnum.POST:
      case MethodsEnum.PUT:
      case MethodsEnum.PATCH:
        return (await axios[method]<T>(url, body, config)).data;
      case MethodsEnum.GET:
      case MethodsEnum.DELETE:
      default:
        return (await axios[method]<T>(url, config)).data;
    }
  }

  static async connect<T>(
    url: string,
    method: MethodType,
    body?: unknown
  ): Promise<T> {
    return ConnectionApi.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 403:
          case 401:
            throw new Error(ERROR_ACCESS_DENIED);
            break;

          default:
            throw new Error(ERROR_CONNECTION);
            break;
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export const connectionApiGet = async <T>(url: string): Promise<T> => {
  return ConnectionApi.connect(url, MethodsEnum.GET);
};

export const connectionApiDelete = async <T>(url: string): Promise<T> => {
  return ConnectionApi.connect(url, MethodsEnum.DELETE);
};

export const connectionApiPost = async <T>(
  url: string,
  body: unknown
): Promise<T> => {
  return ConnectionApi.connect(url, MethodsEnum.POST, body);
};

export const connectionApiPut = async <T>(
  url: string,
  body: unknown
): Promise<T> => {
  return ConnectionApi.connect(url, MethodsEnum.PUT, body);
};

export const connectionApiPatch = async <T>(
  url: string,
  body: unknown
): Promise<T> => {
  return ConnectionApi.connect(url, MethodsEnum.PATCH, body);
};
