import "./index.css";

import WorkerCard from "../../components/WorkerCard";
import WorkersSearch from "../../components/WorkersSearch";
import WorkersByStatus from "../../components/WorkersByStatus";
import WorkersSort from "../../components/WorkersSort";
import SalaryRange from "../../components/SalaryRange";

import { useHistory } from "react-router-dom";
import Button from "../../components/Button";

import { asyncGetStaff } from "../../actions";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import swal from "sweetalert";

function Staff() {
  const searchWorkers = useSelector((state) => state.searchWorkers);
  const statusWorkers = useSelector((state) => state.statusWorkers);
  const minSalary = useSelector((state) => state.salaryWorkers.minSalary);
  const maxSalary = useSelector((state) => state.salaryWorkers.maxSalary);
  const staff = useSelector((state) =>
    state.staff
      .filter((worker) =>
        worker.firstName.toLowerCase().includes(searchWorkers.toLowerCase())
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
      <section>
        <div className="container container--main">
          <div className="row">
            <div className="col-12">
              <WorkersSearch />
            </div>
          </div>

          <div className="row mt-4 align-items-center">
            <div className="col-12">
              <Button add handleClick={handleClickAdd}>
                Добавить сотрудника
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap">
        <div className="container container--main">
          <div className="row mt-4">
            {staff.map((worker, i) => (
              <WorkerCard worker={worker} key={i} />
            ))}
          </div>
        </div>
        <aside className="d-none d-md-block">
          <WorkersSort />
          <WorkersByStatus />
          <SalaryRange />
        </aside>
      </section>
    </div>
  );
}

export default Staff;
