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

// open vacancy
export const openVacancy = (data) => {
  return {
    type: types.OPENVACANCY,
    data,
  };
};
export const openVacancySucess = (data) => {
  return {
    type: types.OPENVACANCY_SUCCESS,
    data,
  };
};

export const openVacancyError = (data) => {
  return {
    type: types.OPENVACANCY_ERROR,
    data,
  };
};
// get all opening
export const getAllVacancy = (data) => {
  return {
    type: types.GETVACANCY,
    data,
  };
};
export const getAllVacancySuccess = (data) => {
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
// GET ALL APPLICATIONS
export const getAllApplication = (data) => {
  return {
    type: types.GET_APLICATION,
    data,
  };
};
export const getAllApplicationSuccess = (data) => {
  return {
    type: types.GET_APLICATION_SUCCESS,
    data,
  };
};

export const getAllApplicationError = (data) => {
  return {
    type: types.GET_APLICATION_ERROR,
    data,
  };
};
