// import Button from "./Button";
import Input from "./Input";
// import { useRef } from "react";
// import debounce from "lodash.debounce";

// import { useDispatch } from "react-redux";

function WorkersSearch() {
  // const dispatch = useDispatch();
  // const searchInput = useRef(null);

  // function handleClick() {
  //   dispatch({type: "SEARCH_WORKERS", payload: searchInput.current.value});
  // }
  // const handleChangeSearch = debounce(() => {
  //   dispatch({ type: "SEARCH_WORKERS", payload: searchInput.current.value });
  // }, 1000);

  // function handleClickReset() {
  //   searchInput.current.value = "";
  //   dispatch({ type: "SEARCH_WORKERS", payload: "" });
  // }

  return (
    <div>
      <Input
        type="text"
        placeholder="Введите имя сотрудника"
        handleChange="handleChangeSearch"
        search
      />
      {/* <Button type="button" onClick={handleClick}>Поиск</Button> */}
      {/* <Button label="Отмена" handleClick={() => handleClickReset} /> */}
    </div>
  );
}

export default WorkersSearch;
