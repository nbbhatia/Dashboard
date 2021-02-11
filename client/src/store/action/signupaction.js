import * as types from "../action.type";

export const signUp = (data) => {
  return {
    type: types.SIGN_UP,
    data,
  };
};

export const signUpSuccess = (data) => {
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

export const jobApplyAction = (data) => {
  return {
    type: types.APPLY,
    data,
  };
};

export const jobApplySuccessAction = (data) => {
  return {
    type: types.APPLY_SUCCESS,
    data,
  };
};
export const jobApplyErrorAction = (data) => {
  return {
    type: types.APPLY_ERROR,
    data,
  };
};
export const getAllVacancy = (data) => {
  return {
    type: types.GETVACANCY,
    data,
  };
};
export const getAllVacancySuccess = (data) => {
  console.log("data", data);
  return {
    type: types.GETVACANCY_SUCCESS,
    data,
  };
};

export const getAllVacancyError = (data) => {
  return {
    type: types.GETVACANCY_ERROR,
    data,
  };
};
