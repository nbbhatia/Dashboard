import { combineReducers } from "redux";
import { SignUpReducer, LoginReducer, authCheckReducer } from "./signUpreducer";
const rootReducer = combineReducers({
  SignUpReducer,
  LoginReducer,
  authCheckReducer,
});

export default rootReducer;
