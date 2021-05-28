import "./style.css";

function Select(props) {
  let selectClass = "select-elem";
  if (props.formSelect) selectClass += " select-elem--form";
  return (
    <select
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
      className={selectClass}
    >
      {props.children}
    </select>
  );
}
export default Select;
