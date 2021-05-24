import imgEdit from "../images/edit.svg";
import imgDelete from "../images/delete.svg";

import Button from "./Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { asyncDeleteWorker } from "../actions/";
import { STATUS } from "../constants/workerStatus.js";

import moment from "moment";
import swal from "sweetalert";

function WorkerCard({ worker }) {
  let colorStatus = "";

  switch (worker?.status) {
    case STATUS.work:
      colorStatus = "#73B469";
      break;
    case STATUS.vacation:
      colorStatus = "#E4A648";
      break;
    case STATUS.fired:
      colorStatus = "#C05E5E";
      break;
    default:
      colorStatus = "";
  }

  const dispatch = useDispatch();

  let history = useHistory();
  function handleClickEdit(id) {
    history.push(`/workers/${id}/edit`);
  }
  function handleClickDelete(id, worker) {
    swal({
      title: "Вы уверены, что хотите удалить?",
      text: "Сотрудник удалится!",
      icon: "warning",
      buttons: ["Отмена", "Удалить"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(asyncDeleteWorker(id, worker));
      }
    });
  }
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-2">
      <div className="card">
        <div className="d-flex align-items-center justify-content-between">
          <Button
            warning
            smallSize
            label={<img src={imgEdit} alt="Редактировать" />}
            handleClick={() => handleClickEdit(worker?.id)}
          />
          <Button
            error
            smallSize
            label={<img src={imgDelete} alt="Удалить" />}
            handleClick={() => handleClickDelete(worker?.id, worker)}
          />
        </div>
        <img src={worker?.url} className="card__img" />
        <Link to={`/workers/${worker?.id}`} className="card__name">
          {worker?.firstName}
        </Link>
        <div className="card__lastname">{worker?.lastName}</div>
        <div className="card__position">{worker?.position}</div>
        <div className="card__salary">{worker?.salary} $</div>
        <div className="card__status" style={{ background: colorStatus }}>
          {worker?.status}
        </div>
        <div className="card__date">
          {moment(`Date(${worker?.date})`).locale("ru").format("DD/MM/YYYY")}
        </div>
      </div>
    </div>
  );
}

export default WorkerCard;
