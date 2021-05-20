import { Button } from "react-bootstrap";

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
        <Button
          type="button"
          className="sort-button"
          onClick={handleClickNameAscend}
        >
          &#5123;
        </Button>
        <Button
          type="button"
          className="sort-button"
          onClick={handleClickNameDescend}
        >
          &#5121;
        </Button>
      </div>
      <div className="col-4 text-center">
        <span>По началу работы</span>
        <Button
          type="button"
          className="sort-button"
          onClick={handleClickDateAscend}
        >
          &#5123;
        </Button>
        <Button
          type="button"
          className="sort-button"
          onClick={handleClickDateDescend}
        >
          &#5121;
        </Button>
      </div>
      <div className="col-4 text-right">
        <span>По зарплате</span>
        <Button
          type="button"
          className="sort-button"
          onClick={handleClickSalaryAscend}
        >
          &#5123;
        </Button>
        <Button
          type="button"
          className="sort-button"
          onClick={handleClickSalaryDescend}
        >
          &#5121;
        </Button>
      </div>
    </div>
  );
}

export default WorkersSort;
