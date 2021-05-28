import "./style.css";
function Button(props) {
  let btnClass = "btn";
  if (props.smallSize) btnClass += " btn--small";
  if (props.warning) btnClass += " btn--warning";
  if (props.error) btnClass += " btn--error";
  if (props.add) btnClass += " btn--add";
  if (props.formBtn) btnClass += " btn--form";
  if (props.back) btnClass += " btn--back";
  if (props.mobileNone) btnClass += " d-none d-md-block";
  return (
    <button
      type={props.type}
      className={btnClass}
      onClick={props.handleClick}
      disabled={props.disabled && "disabled"}
    >
      {props.children}
    </button>
  );
}

export default Button;
