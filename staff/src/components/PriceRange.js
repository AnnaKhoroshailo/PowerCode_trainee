import { Button, Form, Navbar, FormControl } from "react-bootstrap";

import { useRef } from "react";
import debounce from "lodash.debounce";

import { useDispatch } from "react-redux";

import swal from "sweetalert";

function PriceRange() {
  const dispatch = useDispatch();
  const minInput = useRef(null);
  const maxInput = useRef(null);
  const handleChange = debounce(() => {
    if (
      minInput.current.value &&
      maxInput.current.value &&
      minInput.current.value <= maxInput.current.value
    ) {
      dispatch({
        type: "SALARY_WORKERS",
        payload: {
          minSalary: minInput.current.value,
          maxSalary: maxInput.current.value,
        },
      });
    } else if (
      minInput.current.value &&
      maxInput.current.value &&
      minInput.current.value > maxInput.current.value
    )
      swal(
        "Минимальная зарплата превышает максимальную",
        "Повторите попытку!",
        "error"
      );
  }, 1000);

  function handleClickReset() {
    minInput.current.value = "";
    maxInput.current.value = "";
    dispatch({
      type: "SALARY_WORKERS",
      payload: {
        minSalary: 0,
        maxSalary: Infinity,
      },
    });
  }

  return (
    <div>
      <Navbar className="w-100">
        <Form className="d-flex w-100">
          <FormControl
            type="text"
            className="search-input"
            placeholder="Мин. зарплата"
            ref={minInput}
            onChange={handleChange}
          />
          <FormControl
            type="text"
            className="search-input"
            placeholder="Макс. зарплата"
            ref={maxInput}
            onChange={handleChange}
          />
          <Button
            type="button"
            className="search-reset"
            onClick={handleClickReset}
          >
            Отмена
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default PriceRange;
