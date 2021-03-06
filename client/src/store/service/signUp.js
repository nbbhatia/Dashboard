import axios from "axios";
export const signUp = (req) => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  return axios({
    withCredentials: true,
    method: "POST",
    url: "http://localhost:8000/api/auth/AdminRegistartion",
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
    url: "http://localhost:8000/api/auth/login",
    data: req.data,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const authCheckService = (req) => {
  return axios({
    withCredentials: true,
    method: "GET",
    url: "http://localhost:8000/api/auth/authCheck",
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const jobApply = (req) => {
  console.log("req", req);
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "*");

  return axios({
    withCredentials: true,
    method: "POST",
    url: "http://localhost:8000/api/career/apply",
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

export const getAllVacancy = (req) => {
  return axios({
    withCredentials: true,
    method: "GET",
    url: "http://localhost:8000/api/career/allVacancy",
    data: req.data,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
