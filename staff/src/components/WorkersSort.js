import Select from "./Select";

import { useSelector, useDispatch } from "react-redux";

function WorkersSort() {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff);
  function handleChangeSort(e) {
    if (e.target.value == "NameAscend") {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.name > worker2.name ? 1 : -1
        ),
      });
    }
    if (e.target.value == "NameDescend") {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.name < worker2.name ? 1 : -1
        ),
      });
    }
    if (e.target.value == "DateAscend") {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.date > worker2.date ? 1 : -1
        ),
      });
    }
    if (e.target.value == "DateDescend") {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.date < worker2.date ? 1 : -1
        ),
      });
    }
    if (e.target.value == "SalaryAscend") {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.salary > worker2.salary ? 1 : -1
        ),
      });
    }
    if (e.target.value == "SalaryDescend") {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.salary < worker2.salary ? 1 : -1
        ),
      });
    }
  }

  return (
    <div className="row mt-4">
      <Select name="sort" handleChange={handleChangeSort}>
        <option value="NameAscend">От А до Я</option>
        <option value="NameDescend">От Я до А</option>
        <option value="DateAscend">Давно в компании</option>
        <option value="DateDescend">Недавно в компании</option>
        <option value="SalaryAscend">Маленькая зарплата</option>
        <option value="SalaryDescend">Большая зарплата</option>
      </Select>
    </div>
  );
}

export default WorkersSort;
