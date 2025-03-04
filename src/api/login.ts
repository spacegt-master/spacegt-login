import axios from "../axios/accounts-service";

export const LoginApi = {
  login(username: string, password: string) {
    return axios({
      url: "/api/login",
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {
        username,
        password,
      },
    });
  },
};
