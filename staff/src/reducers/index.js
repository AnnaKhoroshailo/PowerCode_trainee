import {combineReducers} from "redux"; 
import {routerReducer} from 'react-router-redux'; 
import staff from "./workers";
import searchWorkers from "./searchWorkers";

export default combineReducers({
	routing: routerReducer,
	staff,
	searchWorkers
})