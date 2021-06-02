import "./style.css";

function Input(props) {
  let inputClass = "input-text";
  if (props.search) inputClass += " input-text--search";
  if (props.salary) inputClass += " input-text--salary";
  let inputElemClass = "";
  if (props.salary) inputElemClass += " input-elem--salary";
  return (
    <div className={inputElemClass}>
      <label>
        {props.label}
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          className={inputClass}
          onChange={props.handleChange}
        />
      </label>
      {props.children}
    </div>
  );
}
export default Input;
