import "./App.css";
import WorkerCard from "./components/WorkerCard.js";
import WorkersSearch from "./components/WorkersSearch.js";
import WorkersByStatus from "./components/WorkersByStatus.js";
import WorkersSort from "./components/WorkersSort.js";

import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import { asyncGetStaff } from "./actions/";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import swal from "sweetalert";

function App() {
  const searchWorkers = useSelector((state) => state.searchWorkers);
  const statusWorkers = useSelector((state) => state.statusWorkers);
  const staff = useSelector((state) =>
    state.staff.filter((worker) =>
      worker.name.toLowerCase().includes(searchWorkers.toLowerCase())
    )
  ).filter((worker) => statusWorkers.indexOf(worker.status) !== -1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetStaff());
  }, [dispatch]);

  useEffect(() => {
    if (searchWorkers && staff.length === 0)
      swal(
        "Сотрудников с таким именем не найдено",
        "Проверьте правильность данных!",
        "error"
      );
  }, [searchWorkers, staff]);

  let history = useHistory();
  function handleClick() {
    history.push("/add");
  }

  return (
    <div className="App">
      <section className="container">
        <h1>Сотрудники</h1>

        <div className="row mt-4 align-items-center">
          <div className="col-md-6">
            <Button onClick={handleClick}>Добавить нового сотрудника</Button>
          </div>
          <div className="col-md-6 d-flex flex-wrap md-justify-content-end">
            <WorkersSearch />
            <WorkersByStatus />
          </div>
        </div>

        <WorkersSort />

        <div className="row mt-4">
          {staff.map((worker, i) => (
            <WorkerCard worker={worker} key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
