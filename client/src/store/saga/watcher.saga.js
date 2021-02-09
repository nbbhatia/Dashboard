import { takeLatest } from "redux-saga/effects";
import * as types from "../action.type";
import { signUpSaga, loginSaga, authCheckSaga } from "./signup.saga";
function* watcher() {
  yield takeLatest(types.SIGN_UP, signUpSaga);
  yield takeLatest(types.LOGIN, loginSaga);
  yield takeLatest(types.AUTH_CHECK, authCheckSaga);
}

export default watcher;