import "./index.css";

function Checkbox(props) {
  let checkboxClass = "input-check";
  return (
    <label className="label-check">
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        className={checkboxClass}
        onChange={props.handleChange}
      />
      {props.children}
    </label>
  );
}
export default Checkbox;
