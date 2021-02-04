import * as types from "../action.type";

export const signUp = (data) => {
  return {
    type: types.SIGN_UP,
    data,
  };
};

export const signUpSuccess = (data) => {
  console.log("datasignUpSuccess", data);
  return {
    type: types.SIGN_UP_SUCCESS,
    data,
  };
};

export const signUpError = (data) => {
  return {
    type: types.SIGN_UP_ERROR,
    data,
  };
};

export const login = (data) => {
  return {
    type: types.LOGIN,
    data,
  };
};
export const loginSucess = (data) => {
  return {
    type: types.LOGIN_SUCCESS,
    data,
  };
};

export const loginError = (data) => {
  return {
    type: types.LOGIN_ERROR,
    data,
  };
};
// auth check
export const authCheck = (data) => {
  console.log("data", data);
  return {
    type: types.AUTH_CHECK,
    data,
  };
};
export const authCheckSucess = (data) => {
  return {
    type: types.AUTH_CHECK_SUCCESS,
    data,
  };
};

export const authCheckError = (data) => {
  return {
    type: types.AUTH_CHECK_ERROR,
    data,
  };
};
