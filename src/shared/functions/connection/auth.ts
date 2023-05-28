import { UserType } from "../../../modules/login/types/UserType";
import { AUTHORIZATION_KEY } from "../../constants/authorizationConstants";
import {
  getItemStorage,
  removeItemStorage,
  setItemStorage
} from "./storageProxy";
import { connectionApiGet } from "./connectionApi";
import { URL_USER } from "../../constants/urls";

export const unsetAuthorizationToken = () =>
  removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token: string) => {
  if (token) {
    setItemStorage(AUTHORIZATION_KEY, token);
  }
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const verifyLoggedIn = async () => {
  const token = getAuthorizationToken();
  if (!token) {
    location.href = "/login";
  }

  await connectionApiGet<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken();
    location.href = "/login";
  });

  return null;
};

export const logout = () => {
  unsetAuthorizationToken();
  location.href = "/login";
};
