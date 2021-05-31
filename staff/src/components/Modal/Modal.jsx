import "./style.css";
function Modal(props) {
  let modalClass = "modal";
  if (props.visible) modalClass += " modal--visible";
  return (
    <div className={modalClass}>
      <div className="modal__content">{props.children}</div>
    </div>
  );
}
export default Modal;
