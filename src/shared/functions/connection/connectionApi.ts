import axios from "axios";
import { MethodsEnum } from "../../enums/methods.enum";
import {
  ERROR_ACCESS_DENIED,
  ERROR_CONNECTION
} from "../../constants/errorsStatus";

export default class ConnectionApi {
  static async call<T>(url: string, method: string, body: unknown) {
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;
      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;
      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;
      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;
    }
  }

  static async connect<T>(url: string, method: string, body?: unknown) {
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
    });
  }
}

export const connectionApiGet = async <T>(url: string) => {
  return ConnectionApi.connect(url, MethodsEnum.GET);
};

export const connectionApiDelete = async <T>(url: string) => {
  return ConnectionApi.connect(url, MethodsEnum.DELETE);
};

export const connectionApiPost = async <T>(url: string, body: unknown) => {
  return ConnectionApi.connect(url, MethodsEnum.POST, body);
};

export const connectionApiPut = async <T>(url: string, body: unknown) => {
  return ConnectionApi.connect(url, MethodsEnum.PUT, body);
};

export const connectionApiPatch = async <T>(url: string, body: unknown) => {
  return ConnectionApi.connect(url, MethodsEnum.PATCH, body);
};
