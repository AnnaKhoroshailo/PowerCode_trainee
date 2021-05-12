const initialState=[]; 

export default function staff(state=initialState, action) {  
  switch (action.type) {
    case "ADD_WORKER":
      return [
        ...state,
        action.payload
      ]
    case "DELETE_WORKER":
      return state.filter(worker=>worker.id !== action.payload);
    case "FETCH_LIST_STAFF":
      return action.payload;
    case "UPDATE_LIST_STAFF":
      return [
        ...state.filter(worker=>worker.id !== action.payload.id),
        action.payload
      ]
    default:
      return state;
  }
}