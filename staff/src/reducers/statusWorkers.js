import {STATUS} from '../constants/workerStatus.js';

const initialState=[STATUS.work, STATUS.vacation, STATUS.fired]; 

export default function statusWorkers(state=initialState, action) {  
	switch (action.type) {
    case "FILTER_WORKERS_BY_STATUS":
      return action.payload;
    default:
      return state;
  }
}