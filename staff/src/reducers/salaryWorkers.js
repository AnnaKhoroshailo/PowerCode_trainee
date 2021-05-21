const initialState = {
  minSalary: 0,
  maxSalary: Infinity,
};

export default function searchWorkers(state = initialState, action) {
  switch (action.type) {
    case "SALARY_WORKERS":
      return action.payload;
    default:
      return state;
  }
}
