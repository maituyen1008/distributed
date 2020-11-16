import { apiAxios, setHeaders } from "../../../services/axios";

export const login = (body) =>
  apiAxios.post("login", body).then((res) => {
    if (res.data.status === "successful") {
      setHeaders({ token: res.data.result.api_token });
      return res.data;
    }

    return res.data;
  });

export const register = (body) =>
  apiAxios.post("register", body).then((res) => {
    if (res.data.status === "successful") {
      setHeaders({ token: res.data.result.api_token });
      return res.data;
    }

    return res.data;
  });

export const forgotPassword = (body) =>
  apiAxios.post("", body).then((res) => {
    if (res.data.status === "successful") {
      setHeaders({ token: res.data.result.api_token });
      return res.data;
    }

    return res.data;
  });

export const changePassword = (body) =>
  apiAxios.post("change-password", body).then((res) => {
    if (res.data.status === "successful") {
      return res.data;
    }

    return res.data;
  });
export const getUser = (body) =>
  apiAxios.get("user", body).then((res) => {
    if (res.data.status === "successful") {
      return res.data;
    }

    return res.data;
  });
