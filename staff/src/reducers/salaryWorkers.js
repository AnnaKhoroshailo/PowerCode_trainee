const initialState = {
  minSalary: null,
  maxSalary: Infinity,
};

export default function salaryWorkers(state = initialState, action) {
  switch (action.type) {
    case "SALARY_WORKERS":
      return action.payload;
    default:
      return state;
  }
}
