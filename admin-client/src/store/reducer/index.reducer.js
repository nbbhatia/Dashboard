import { combineReducers } from "redux";
import {
  SignUpReducer,
  LoginReducer,
  authCheckReducer,
  openVacancyReducer,
  getAllVacancyReducer,
  getAllApplication,
} from "./signUpreducer";
const rootReducer = combineReducers({
  SignUpReducer,
  LoginReducer,
  authCheckReducer,
  openVacancyReducer,
  getAllVacancyReducer,
  getAllApplication,
});

export default rootReducer;
