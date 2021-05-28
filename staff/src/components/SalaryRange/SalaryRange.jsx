import Input from "../Input";
import "./style.css";

import debounce from "lodash.debounce";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import swal from "sweetalert";

function SalaryRange() {
  const dispatch = useDispatch();
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const handleChangeMinSalary = debounce((e) => setMin(e.target.value), 1000);
  const handleChangeMaxSalary = debounce((e) => setMax(e.target.value), 1000);

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
    } else if (min && max && min > max) {
      swal(
        "Минимальная зарплата превышает максимальную",
        "Повторите попытку!",
        "error"
      );
    }
  };

  return (
    <div className="salary-filter">
      <h3>Зарплата</h3>
      <form className="d-flex justify-content-between">
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
    </div>
  );
}

export default SalaryRange;
