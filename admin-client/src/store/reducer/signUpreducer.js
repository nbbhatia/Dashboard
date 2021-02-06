import * as types from "../action.type";
export const SignUpReducer = (state = {}, action) => {
  const response = action.data;

  switch (action.type) {
    case types.SIGN_UP_SUCCESS:
      return response;
    case types.SIGN_UP_ERROR:
      return state;
    default:
      return state;
  }
};
export const LoginReducer = (state = {}, action) => {
  const response = action.data;

  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return response;
    case types.LOGIN_ERROR:
      return state;
    default:
      return state;
  }
};

export const authCheckReducer = (state = {}, action) => {
  const response = action.data;

  switch (action.type) {
    case types.AUTH_CHECK_SUCCESS:
      return response;
    case types.AUTH_CHECK_ERROR:
      return state;
    default:
      return state;
  }
};
