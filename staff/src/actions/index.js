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
export const asyncUpdateWorker=(id, worker)=>dispatсh=> {
  axios.put(`${API}/${id}`, worker)
  .then((response)=>{
    dispatсh({type: "UPDATE_WORKER", payload: response.data}); 
  })
  .catch(error => {
    console.log(error.response);
    dispatсh({type: "UPDATE_WORKER", payload: {id:+id,...worker}}); 
  })
}
export const asyncDeleteWorker=(id, worker)=>dispatсh=> {
  axios.delete(`${API}/${id}`)
  .then((response)=>{
    dispatсh({type: "DELETE_WORKER", payload: worker}); 
  })
  .catch(error => {
    console.log(error.response);
    dispatсh({type: "DELETE_WORKER", payload: worker}); 
  })
}