import axios from 'axios';

export const asyncGetStaff=()=>dispatсh=> {
  axios('https://my-json-server.typicode.com/AnnaKhoroshailo/PowerCode_trainee/staff').then(response=>{
    dispatсh({type: "FETCH_LIST_STAFF", payload: response.data}); 
  })
}