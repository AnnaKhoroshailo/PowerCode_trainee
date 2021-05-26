import imgEdit from "../images/edit.svg";
import imgDelete from "../images/delete.svg";

import Button from "./Button";
import Tag from "./Tag";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { asyncDeleteWorker } from "../actions/";

import moment from "moment";
import swal from "sweetalert";

function WorkerCard({ worker }) {
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
    <div className="col-sm-6 col-lg-4 mb-2">
      <div className="card">
        <div className="d-flex align-items-center justify-content-between">
          <Button
            warning
            smallSize
            handleClick={() => handleClickEdit(worker?.id)}
          >
            <img src={imgEdit} alt="Редактировать" />
          </Button>
          <Button
            error
            smallSize
            handleClick={() => handleClickDelete(worker?.id, worker)}
          >
            <img src={imgDelete} alt="Удалить" />
          </Button>
        </div>
        <img src={worker?.url} className="card__img" />
        <Link to={`/workers/${worker?.id}`} className="card__name">
          {worker?.firstName}
        </Link>
        <div className="card__lastname">{worker?.lastName}</div>
        <div className="card__position">{worker?.position}</div>
        <div className="card__salary">{worker?.salary} $</div>
        <Tag type={worker?.status}>{worker?.status}</Tag>
        <div className="card__date">
          {moment(`Date(${worker?.date})`).locale("ru").format("DD/MM/YYYY")}
        </div>
      </div>
    </div>
  );
}

export default WorkerCard;
