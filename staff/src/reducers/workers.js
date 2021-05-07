const initialState=[]; 

export default function staff(state=initialState, action) {  
  if(action.type==="ADD_WORKER") { 
    return [
      ...state,
      action.payload
    ]
  } else if(action.type==="DELETE_WORKER") { 
    return state.filter(worker=>worker.id !== action.payload)
  } else if(action.type==="FETCH_LIST_STAFF") { 
    return action.payload
  } 
  return state;
}