import axios from 'axios';
import {API} from '../constants/api.js';
export const asyncGetStaff=()=>dispatсh=> {
  axios(API).then(response=>{
    dispatсh({type: "FETCH_LIST_STAFF", payload: response.data}); 
  })
}
export const asyncGetWorker=(id)=>dispatсh=> {
  axios(`${API}/${id}`).then(response=>{
    dispatсh({type: "ADD_WORKER", payload: response.data}); 
  })
}
export const asyncAddWorker=(worker)=>dispatсh=> {
  axios.post(API, worker).then(response=>{
    dispatсh({type: "ADD_WORKER", payload: response.data}); 
  })
}
