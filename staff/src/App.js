import "./App.css";

import WorkerCard from "./components/WorkerCard.js";
import WorkersSearch from "./components/WorkersSearch.js";
import WorkersByStatus from "./components/WorkersByStatus.js";
import WorkersSort from "./components/WorkersSort.js";
import PriceRange from "./components/PriceRange.js";

import { useHistory } from "react-router-dom";
import Button from "./components/Button";

import { asyncGetStaff } from "./actions/";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import swal from "sweetalert";

function App() {
  const searchWorkers = useSelector((state) => state.searchWorkers);
  const statusWorkers = useSelector((state) => state.statusWorkers);
  const minSalary = useSelector((state) => state.salaryWorkers.minSalary);
  const maxSalary = useSelector((state) => state.salaryWorkers.maxSalary);
  const staff = useSelector((state) =>
    state.staff
      .filter((worker) =>
        worker.name.toLowerCase().includes(searchWorkers.toLowerCase())
      )

      .filter((worker) => statusWorkers.indexOf(worker.status) !== -1)

      .filter((worker) => {
        return minSalary <= worker.salary && worker.salary <= maxSalary;
      })
  );
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
    if (minSalary && maxSalary && staff.length === 0)
      swal(
        "Сотрудников с такой зарплатой не найдено",
        "Повторите попытку!",
        "error"
      );
  }, [searchWorkers, staff]);

  let history = useHistory();
  function handleClickAdd() {
    history.push("/add");
  }

  return (
    <div className="App">
      <section className="container">
        <div className="row">
          <div className="col-12">
            <WorkersSearch />
          </div>
        </div>

        <div className="row mt-4 align-items-center">
          <div className="col-md-3">
            <Button
              handleClick={handleClickAdd}
              label="Добавить нового сотрудника"
            />
          </div>
          <div className="col-md-5">
            <PriceRange />
          </div>
          <div className="col-md-4 d-flex flex-wrap md-justify-content-end">
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
