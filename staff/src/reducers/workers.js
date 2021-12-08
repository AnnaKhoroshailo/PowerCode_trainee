const initialState = [];

export default function staff(state = initialState, action) {
  switch (action.type) {
    case "ADD_WORKER":
      return [...state, action.payload];
    case "UPDATE_WORKER":
      return [
        ...state.filter((worker) => worker.id !== action.payload.id),
        action.payload,
      ].sort((worker1, worker2) => (worker1.id > worker2.id ? 1 : -1));
    case "DELETE_WORKER":
      return state.filter((worker) => worker.id !== action.payload.id);
    case "FETCH_LIST_STAFF":
      return action.payload;
    default:
      return state;
  }
}
