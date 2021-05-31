import "./style.css";
function Button(props) {
  let btnClass = "btn";
  if (props.smallSize) btnClass += " btn--small";
  if (props.warning) btnClass += " btn--warning";
  if (props.error) btnClass += " btn--error";
  if (props.add) btnClass += " btn--add";
  if (props.formBtn) btnClass += " btn--form";
  if (props.modalBtn) btnClass += " btn--modal";
  if (props.menuBtn) btnClass += " btn--menu";
  if (props.back) btnClass += " btn--back";
  if (props.mobileNone) btnClass += " d-none d-md-block";
  if (props.disabled) btnClass += " btn--disabled";
  return (
    <button
      type={props.submit ? "submit" : "button"}
      className={btnClass}
      onClick={props.handleClick}
      // disabled={props.disabled && "disabled"}
    >
      {props.children}
    </button>
  );
}

export default Button;
