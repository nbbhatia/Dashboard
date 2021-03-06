import { put, call } from "redux-saga/effects";
import {
  signUp,
  LoginService,
  authCheckService,
  jobApply,
  getAllVacancy,
} from "../service/signUp";
import {
  signUpSuccess,
  loginSucess,
  authCheckSucess,
  jobApplySuccessAction,
  getAllVacancySuccess,
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
export function* jobApplySaga(data) {
  console.log("datasaga", data);
  try {
    const response = yield call(jobApply, data);

    yield put(jobApplySuccessAction(response.data));
  } catch (error) {
    yield put({ type: types.APPLY_ERROR, error });
  }
}

export function* getVacancySaga(data) {
  const response = yield call(getAllVacancy, data);
  if (response && !response.error) {
    yield put(getAllVacancySuccess(response.data));
  } else {
    yield put({ type: types.GETVACANCY_ERROR, response });
  }
}
