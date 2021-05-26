import "./style.css";

function Input(props) {
  let inputClass = "input-text";
  if (props.search) inputClass += " input-text--search";
  return (
    <input
      type="text"
      name={props.name}
      placeholder={props.placeholder}
      className={inputClass}
      onChange={props.handleChange}
    />
  );
}
export default Input;
