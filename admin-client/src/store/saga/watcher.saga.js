import { takeLatest } from "redux-saga/effects";
import * as types from "../action.type";
import {
  signUpSaga,
  loginSaga,
  authCheckSaga,
  openVacancySaga,
  getVacancySaga,
  getApplicationSaga,
} from "./signup.saga";
function* watcher() {
  yield takeLatest(types.SIGN_UP, signUpSaga);
  yield takeLatest(types.LOGIN, loginSaga);
  yield takeLatest(types.AUTH_CHECK, authCheckSaga);
  yield takeLatest(types.OPENVACANCY, openVacancySaga);
  yield takeLatest(types.GETVACANCY, getVacancySaga);
  yield takeLatest(types.GET_APLICATION, getApplicationSaga);
}

export default watcher;
