import axios from 'axios';
import {API} from '../constants/api.js';
export const asyncGetStaff=()=>dispatсh=> {
  axios(API).then(response=>{
    dispatсh({type: "FETCH_LIST_STAFF", payload: response.data}); 
  })
}