const initialState = null;

export default function authorize(state = initialState, action) {
  switch (action.type) {
    case "AUTHORIZE":
      return action.payload;
    default:
      return state;
  }
}
