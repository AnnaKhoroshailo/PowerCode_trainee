import "./index.css";
import imgMenu from "../../images/menu.svg";

import WorkerCard from "../../components/WorkerCard";
import WorkersSearch from "../../components/WorkersSearch";
import WorkersByStatus from "../../components/WorkersByStatus";
import WorkersSort from "../../components/WorkersSort";
import SalaryRange from "../../components/SalaryRange";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

import { useHistory } from "react-router-dom";

import { asyncGetStaff } from "../../actions";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function Staff() {
  const searchWorkers = useSelector((state) => state.searchWorkers);
  const statusWorkers = useSelector((state) => state.statusWorkers);
  const minSalary = useSelector((state) => state.salaryWorkers.minSalary);
  const maxSalary = useSelector((state) => state.salaryWorkers.maxSalary);
  const dispatch = useDispatch();
  const [flagModal, setFlagModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

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

  useEffect(() => {
    dispatch(asyncGetStaff());
  }, [dispatch]);

  useEffect(() => {
    if (searchWorkers && staff.length === 0) setFlagModal(true);
    if (minSalary && maxSalary && staff.length === 0) setFlagModal(true);
  }, [searchWorkers, staff]);

  function handleClickClose() {
    setFlagModal(false);
  }

  function handleClickMenu() {
    setOpenMenu(!openMenu);
  }

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

          <div className="d-md-none row mt-4 pos-relative top-line">
            <div className="col-9">
              <WorkersSort />
            </div>
            <div className="col-3 text-right">
              <Button menuBtn handleClick={handleClickMenu}>
                <img src={imgMenu} alt="Меню" />
              </Button>
            </div>
            <div className={openMenu ? "menu menu--open" : "menu"}>
              <Button type="button" add handleClick={handleClickAdd}>
                Добавить сотрудника
              </Button>
              <WorkersByStatus />
              <SalaryRange />
            </div>
          </div>

          <div className="d-none d-md-flex row mt-4">
            <div className="col-12">
              <Button type="button" add handleClick={handleClickAdd}>
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
        <aside className="d-none d-md-block aside-panel">
          <div className="aside-panel__block">
            <WorkersSort />
            <WorkersByStatus />
            <SalaryRange />
          </div>
        </aside>
      </section>
      <Modal visible={flagModal}>
        <h3>Сотрудников не найдено</h3>
        <p className="mt-5 mb-4">
          Сотрудников, удовлетворяющих условиям, не найдено. Проверьте данные и
          аовторите попытку
        </p>
        <div className="d-flex justify-content-center">
          <Button modalBtn error handleClick={handleClickClose}>
            Закрыть
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Staff;
