import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import staff from "./workers";
import searchWorkers from "./searchWorkers";
import statusWorkers from "./statusWorkers";
import salaryWorkers from "./salaryWorkers";

export default combineReducers({
  routing: routerReducer,
  staff,
  searchWorkers,
  statusWorkers,
  salaryWorkers,
});
