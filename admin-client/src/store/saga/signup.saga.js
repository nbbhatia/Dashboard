import { put, call } from "redux-saga/effects";
import { signUp, LoginService, authCheckService } from "../service/signUp";
import {
  signUpSuccess,
  loginSucess,
  authCheckSucess,
} from "../action/signupaction";
import * as types from "../action.type";
export function* signUpSaga(data) {
  try {
    const response = yield call(signUp, data);

    yield put(signUpSuccess(response.data));
  } catch (error) {
    yield put({ type: types.SIGN_UP_ERROR, error });
  }
}
export function* loginSaga(data) {
  try {
    const response = yield call(LoginService, data);

    yield put(loginSucess(response.data));
  } catch (error) {
    yield put({ type: types.LOGIN_ERROR, error });
  }
}

export function* authCheckSaga(data) {
  const response = yield call(authCheckService, data);
  if (response && !response.error) {
    yield put(authCheckSucess(response.data));
  } else {
    yield put({ type: types.AUTH_CHECK_ERROR, response });
  }
}
