import { takeLatest } from "redux-saga/effects";
import * as types from "../action.type";
import {
  signUpSaga,
  loginSaga,
  authCheckSaga,
  jobApplySaga,
} from "./signup.saga";
function* watcher() {
  yield takeLatest(types.SIGN_UP, signUpSaga);
  yield takeLatest(types.LOGIN, loginSaga);
  yield takeLatest(types.AUTH_CHECK, authCheckSaga);
  yield takeLatest(types.APPLY, jobApplySaga);
}

export default watcher;
