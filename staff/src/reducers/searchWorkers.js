const initialState=''; 

export default function searchWorkers(state=initialState, action) {  
	switch (action.type) {
    case "SEARCH_WORKERS":
      return action.payload;
    default:
      return state;
  }
}