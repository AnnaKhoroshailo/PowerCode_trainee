import "./style.css";

import Checkbox from "../Checkbox";

import { STATUS } from "../../constants/workerStatus.js";

import { useDispatch } from "react-redux";

import { useRef } from "react";

function WorkersByStatus() {
  const dispatch = useDispatch();
  const statusForm = useRef(null);

  function handleChangeCheck() {
    const checkboxs = statusForm.current.status;
    const checkboxArray = Array.prototype.slice.call(checkboxs);
    const uncheckedCheckboxes = checkboxArray.filter(
      (input) => input.checked === false
    );
    const uncheckedCheckboxesValues = uncheckedCheckboxes.map(
      (input) => input.value
    );
    const checkedCheckboxes = checkboxArray.filter((input) => input.checked);
    const checkedCheckboxesValues = checkedCheckboxes.map(
      (input) => input.value
    );
    if (checkedCheckboxes.length > 0)
      dispatch({
        type: "FILTER_WORKERS_BY_STATUS",
        payload: checkedCheckboxesValues,
      });
    else
      dispatch({
        type: "FILTER_WORKERS_BY_STATUS",
        payload: uncheckedCheckboxesValues,
      });
  }

  return (
    <div className="status-filter">
      <h3>Статус</h3>
      <form ref={statusForm}>
        <Checkbox
          name="status"
          value={STATUS.work}
          handleChange={handleChangeCheck}
        >
          {STATUS.work}
        </Checkbox>
        <Checkbox
          name="status"
          value={STATUS.vacation}
          handleChange={handleChangeCheck}
        >
          {STATUS.vacation}
        </Checkbox>
        <Checkbox
          name="status"
          value={STATUS.fired}
          handleChange={handleChangeCheck}
        >
          {STATUS.fired}
        </Checkbox>
      </form>
    </div>
  );
}

export default WorkersByStatus;
