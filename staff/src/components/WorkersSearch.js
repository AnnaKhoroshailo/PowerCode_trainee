import { Button, Form, Navbar, FormControl } from "react-bootstrap";

import { useRef } from "react";
import debounce from "lodash.debounce";

import { useDispatch } from "react-redux";

function WorkersSearch() {
  const dispatch = useDispatch();
  const searchInput = useRef(null);

  // function handleClick() {
  //   dispatch({type: "SEARCH_WORKERS", payload: searchInput.current.value});
  // }
  const handleChange = debounce(() => {
    dispatch({ type: "SEARCH_WORKERS", payload: searchInput.current.value });
  }, 1000);

  function handleClickReset() {
    searchInput.current.value = "";
    dispatch({ type: "SEARCH_WORKERS", payload: "" });
  }

  return (
    <div>
      <Navbar>
        <Form className="d-flex">
          <FormControl
            type="text"
            className="search-input"
            placeholder="Имя сотрудника"
            ref={searchInput}
            onChange={handleChange}
          />
          {/* <Button type="button" onClick={handleClick}>Поиск</Button> */}
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

export default WorkersSearch;
