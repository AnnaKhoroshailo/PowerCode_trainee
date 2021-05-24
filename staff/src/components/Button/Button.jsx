import "./style.css";
function Button(props) {
  let btnClass = "btn";
  if (props.smallSize) btnClass += " btn--small";
  if (props.warning) btnClass += " btn--warning";
  if (props.error) btnClass += " btn--error";
  return (
    <button
      className={btnClass}
      onClick={props.handleClick}
      disabled={props.disabled ? "true" : ""}
    >
      {props.label}
    </button>
  );
}

export default Button;
