import { combineReducers } from "redux";
import {
  SignUpReducer,
  LoginReducer,
  authCheckReducer,
  openVacancyReducer,
  getAllVacancyReducer,
} from "./signUpreducer";
const rootReducer = combineReducers({
  SignUpReducer,
  LoginReducer,
  authCheckReducer,
  openVacancyReducer,
  getAllVacancyReducer,
});

export default rootReducer;
