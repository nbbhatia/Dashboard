import { combineReducers } from "redux";
import {
  SignUpReducer,
  LoginReducer,
  authCheckReducer,
  jobApplyReducer,
  getAllVacancyReducer,
} from "./signUpreducer";
const rootReducer = combineReducers({
  SignUpReducer,
  LoginReducer,
  authCheckReducer,
  jobApplyReducer,
  getAllVacancyReducer,
});

export default rootReducer;
