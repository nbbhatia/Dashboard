import { combineReducers } from "redux";
import {
  SignUpReducer,
  LoginReducer,
  authCheckReducer,
  openVacancy,
} from "./signUpreducer";
const rootReducer = combineReducers({
  SignUpReducer,
  LoginReducer,
  authCheckReducer,
  openVacancy,
});

export default rootReducer;
