import "./style.css";
import { useRef } from "react";

import debounce from "lodash.debounce";

import { useDispatch } from "react-redux";

function Input(props) {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  let inputClass = "input-text";
  if (props.search) inputClass += " input-text--search";
  let handleChange = "";
  switch (props.handleChange) {
    case "handleChangeSearch":
      handleChange = debounce(() => {
        dispatch({
          type: "SEARCH_WORKERS",
          payload: inputRef.current.value,
        });
      }, 1000);
      break;
    default:
  }
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      ref={inputRef}
      className={inputClass}
      onChange={handleChange}
    />
  );
}
export default Input;
