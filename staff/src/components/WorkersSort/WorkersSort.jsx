import Select from "../Select";
import "./style.css";

import { SORT } from "../../constants/sort";

import { asyncGetStaff } from "../../actions";

import { useSelector, useDispatch } from "react-redux";

function WorkersSort() {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff);

  function handleChangeSort(e) {
    if (e.target.value == SORT.default) {
      dispatch(asyncGetStaff());
    }
    if (e.target.value == SORT.nameAscend) {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.firstName > worker2.firstName ? 1 : -1
        ),
      });
    }
    if (e.target.value == SORT.nameDescend) {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.firstName < worker2.firstName ? 1 : -1
        ),
      });
    }
    if (e.target.value == SORT.dateAscend) {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.date > worker2.date ? 1 : -1
        ),
      });
    }
    if (e.target.value == SORT.dateDescend) {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.date < worker2.date ? 1 : -1
        ),
      });
    }
    if (e.target.value == SORT.salaryAscend) {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.salary > worker2.salary ? 1 : -1
        ),
      });
    }
    if (e.target.value == SORT.salaryDescend) {
      dispatch({
        type: "FETCH_LIST_STAFF",
        payload: staff.sort((worker1, worker2) =>
          worker1.salary < worker2.salary ? 1 : -1
        ),
      });
    }
  }

  return (
    <div className="sort-filter">
      <Select name="sort" handleChange={handleChangeSort}>
        <option value="По умолчанию">По умолчанию</option>
        <option value="Имя по возростанию">От А до Я</option>
        <option value="Имя по убыванию">От Я до А</option>
        <option value="Дата по возростанию">Давно в компании</option>
        <option value="Дата по убыванию">Недавно в компании</option>
        <option value="Зарплата по возростанию">Маленькая зарплата</option>
        <option value="Зарплата по убыванию">Большая зарплата</option>
      </Select>
    </div>
  );
}

export default WorkersSort;
