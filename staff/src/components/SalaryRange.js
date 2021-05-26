import Input from "./Input";

import debounce from "lodash.debounce";

import { useDispatch } from "react-redux";

import swal from "sweetalert";

function SalaryRange() {
  const dispatch = useDispatch();
  let min;
  let max;

  const handleChangeMinSalary = (e) => {
    min = e.target.value;
    handleChangeSalary();
  };
  const handleChangeMaxSalary = (e) => {
    max = e.target.value;
    handleChangeSalary();
  };
  const handleChangeSalary = debounce(() => {
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
  }, 1000);

  return (
    <div className="salary-range">
      <h3>Зарплата</h3>
      <div className="d-flex">
        <Input
          type="text"
          placeholder="От"
          handleChange={handleChangeMinSalary}
        />
        <Input
          type="text"
          placeholder="До"
          handleChange={handleChangeMaxSalary}
        />
      </div>
    </div>
  );
}

export default SalaryRange;
