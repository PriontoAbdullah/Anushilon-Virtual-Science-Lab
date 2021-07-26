import { combineReducers } from "redux";
import alert from "./alertReducer";
import auth from "./authReducer";

export default combineReducers({ auth, alert });
