import "./style.css";

function Input(props) {
  let inputClass = "input-text";
  if (props.search) inputClass += " input-text--search";
  if (props.salary) inputClass += " input-text--salary";
  return (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      className={inputClass}
      onChange={props.handleChange}
    />
  );
}
export default Input;
