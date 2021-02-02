import axios from "axios";
export const signUp = (req) => {
  console.log("req", req);
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  return axios({
    withCredentials: true,
    method: "POST",
    url: "http://localhost:8086/createUser",
    data: req.data,

    headers: headers,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
export const LoginService = (req) => {
  return axios({
    withCredentials: true,
    method: "POST",
    url: "http://localhost:8086/login",
    data: req.data,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
