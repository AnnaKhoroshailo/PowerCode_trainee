import Button from "./Button";

import { useSelector, useDispatch } from "react-redux";

function WorkersSort() {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff);
  function handleClickNameAscend() {
    dispatch({
      type: "FETCH_LIST_STAFF",
      payload: staff.sort((worker1, worker2) =>
        worker1.name > worker2.name ? 1 : -1
      ),
    });
  }
  function handleClickNameDescend() {
    dispatch({
      type: "FETCH_LIST_STAFF",
      payload: staff.sort((worker1, worker2) =>
        worker1.name < worker2.name ? 1 : -1
      ),
    });
  }

  function handleClickDateAscend() {
    dispatch({
      type: "FETCH_LIST_STAFF",
      payload: staff.sort((worker1, worker2) =>
        worker1.date > worker2.date ? 1 : -1
      ),
    });
  }
  function handleClickDateDescend() {
    dispatch({
      type: "FETCH_LIST_STAFF",
      payload: staff.sort((worker1, worker2) =>
        worker1.date < worker2.date ? 1 : -1
      ),
    });
  }

  function handleClickSalaryAscend() {
    dispatch({
      type: "FETCH_LIST_STAFF",
      payload: staff.sort((worker1, worker2) =>
        worker1.salary > worker2.salary ? 1 : -1
      ),
    });
  }
  function handleClickSalaryDescend() {
    dispatch({
      type: "FETCH_LIST_STAFF",
      payload: staff.sort((worker1, worker2) =>
        worker1.salary < worker2.salary ? 1 : -1
      ),
    });
  }
  return (
    <div className="row mt-4">
      <div className="col-4">
        <span>По имени</span>
        <Button label="&#5123;" handleClick={handleClickNameAscend} />
        <Button label="&#5121;" handleClick={handleClickNameDescend} />
      </div>
      <div className="col-4 text-center">
        <span>По началу работы</span>
        <Button label="&#5123;" handleClick={handleClickDateAscend} />
        <Button label="&#5121;" handleClick={handleClickDateDescend} />
      </div>
      <div className="col-4 text-right">
        <span>По зарплате</span>
        <Button label="&#5123;" handleClick={handleClickSalaryAscend} />
        <Button label="&#5121;" handleClick={handleClickSalaryDescend} />
      </div>
    </div>
  );
}

export default WorkersSort;
