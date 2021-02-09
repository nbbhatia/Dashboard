import { combineReducers } from "redux";
import {
  SignUpReducer,
  LoginReducer,
  authCheckReducer,
  jobApplyReducer,
} from "./signUpreducer";
const rootReducer = combineReducers({
  SignUpReducer,
  LoginReducer,
  authCheckReducer,
  jobApplyReducer,
});

export default rootReducer;
