// import { combineReducers } from "redux";
//将cReducer也immutable
import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../pages/discover/childPages/recommend/store/index";

const cReducer = combineReducers({
  recommend: recommendReducer,
});

export default cReducer;
