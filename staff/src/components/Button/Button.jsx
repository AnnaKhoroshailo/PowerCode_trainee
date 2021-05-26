import "./style.css";
function Button(props) {
  let btnClass = "btn";
  if (props.smallSize) btnClass += " btn--small";
  if (props.warning) btnClass += " btn--warning";
  if (props.error) btnClass += " btn--error";
  if (props.add) btnClass += " btn--add";
  return (
    <button
      className={btnClass}
      onClick={props.handleClick}
      disabled={props.disabled ? "true" : ""}
    >
      {props.children}
    </button>
  );
}

export default Button;
