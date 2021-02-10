import { put, call } from "redux-saga/effects";
import {
  signUp,
  LoginService,
  authCheckService,
  openVacancyService,
} from "../service/signUp";
import {
  signUpSuccess,
  loginSucess,
  authCheckSucess,
  openVacancySucess,
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
    // console.log("response.data", response.data.sucess);
    if (response.data.sucess) {
      window.location.replace("/app/dashboard");
    }
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

export function* openVacancySaga(data) {
  const response = yield call(openVacancyService, data);
  if (response && !response.error) {
    yield put(openVacancySucess(response.data));
  } else {
    yield put({ type: types.OPENVACANCY_ERROR, response });
  }
}
