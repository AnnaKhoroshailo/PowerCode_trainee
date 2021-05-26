import imgSearch from "../../images/search.svg";
import "./style.css";

import Input from "../Input";
import debounce from "lodash.debounce";

import { useDispatch } from "react-redux";

function WorkersSearch() {
  const dispatch = useDispatch();
  const handleChangeSearch = debounce((e) => {
    dispatch({ type: "SEARCH_WORKERS", payload: e.target.value });
  }, 1000);

  return (
    <div className="search">
      <Input
        type="text"
        placeholder="Введите имя сотрудника"
        search
        handleChange={handleChangeSearch}
      />
      <img src={imgSearch} className="search__img" />
    </div>
  );
}

export default WorkersSearch;
