import {combineReducers} from "redux"; 
import {routerReducer} from 'react-router-redux'; 
import staff from "./workers";

export default combineReducers({
	routing: routerReducer,
	staff
})