import Input from "../Input";
import "./style.css";

import debounce from "lodash.debounce";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Modal from "../../components/Modal";
import Button from "../../components/Button";

function SalaryRange() {
  const dispatch = useDispatch();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [flagModal, setFlagModal] = useState(false);

  const handleChangeMinSalary = debounce((e) => {
    if (e.target.value !== "") setMin(parseInt(e.target.value));
    else setMin(e.target.value);
  }, 1000);
  const handleChangeMaxSalary = debounce((e) => {
    if (e.target.value !== "") setMax(parseInt(e.target.value));
    else setMax(e.target.value);
  }, 1000);

  useEffect(() => {
    handleChangeSalary();
  }, [min, max]);
  const handleChangeSalary = () => {
    if (min && max && min <= max) {
      dispatch({
        type: "SALARY_WORKERS",
        payload: {
          minSalary: min,
          maxSalary: max,
        },
      });
    } else if (min == "" && max == "") {
      dispatch({
        type: "SALARY_WORKERS",
        payload: {
          minSalary: 0,
          maxSalary: Infinity,
        },
      });
    } else if (min && max && min > max) setFlagModal(true);
  };

  function handleClickClose() {
    setFlagModal(false);
  }

  return (
    <div className="salary-filter">
      <h3>Зарплата</h3>
      <form className="d-flex">
        <Input
          salary
          type="text"
          placeholder="От"
          handleChange={handleChangeMinSalary}
        />
        <Input
          salary
          type="text"
          placeholder="До"
          handleChange={handleChangeMaxSalary}
        />
      </form>
      <Modal visible={flagModal}>
        <h3>Сотрудников не найдено</h3>
        <p className="mt-5 mb-4">
          Минимальная зарплата превышает максимальную. Проверьте данные и
          повторите попытку
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

export default SalaryRange;
