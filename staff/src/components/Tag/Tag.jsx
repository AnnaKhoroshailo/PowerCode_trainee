import "./style.css";
import { STATUS } from "../../constants/workerStatus.js";

function Tag(props) {
  let statusClass = "status";
  switch (props.type) {
    case STATUS.work:
      statusClass += " status--work";
      break;
    case STATUS.vacation:
      statusClass += " status--vacation";
      break;
    case STATUS.fired:
      statusClass += " status--fired";
      break;
    default:
      statusClass = "";
  }
  return <div className={statusClass}>{props.children}</div>;
}
export default Tag;
