import imgEdit from "../../images/edit.svg";
import imgDelete from "../../images/delete.svg";
import "./index.css";

import Button from "../Button";
import Tag from "../Tag";

import { useState } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { asyncDeleteWorker } from "../../actions";

import moment from "moment";
import swal from "sweetalert";

function WorkerCard({ worker }) {
  let history = useHistory();

  const dispatch = useDispatch();
  //let flagBg = false;
  const [flagBg, setFlagBg] = useState(false);

  function handleClickCard(e) {
    e.stopPropagation();
    setFlagBg(true);
  }
  function handleClickBg() {
    setFlagBg(false);
  }
  function handleClickEdit(e, id) {
    e.stopPropagation();
    history.push(`/workers/${id}/edit`);
  }
  function handleClickDelete(e, id, worker) {
    e.stopPropagation();
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
      <div className={flagBg ? "bg-dark" : ""} onClick={handleClickBg}>
        <div className="card" onClick={handleClickCard}>
          <div className="d-flex align-items-center justify-content-between">
            <Button
              warning
              smallSize
              handleClick={(e) => handleClickEdit(e, worker?.id)}
            >
              <img src={imgEdit} alt="Редактировать" />
            </Button>
            <Button
              error
              smallSize
              handleClick={(e) => handleClickDelete(e, worker?.id, worker)}
            >
              <img src={imgDelete} alt="Удалить" />
            </Button>
          </div>
          <img src={worker?.url} className="card__img" />
          <div className="card__name">{worker?.firstName}</div>
          <div className="card__lastname">{worker?.lastName}</div>
          <div className="card__position">{worker?.position}</div>
          <div className="card__salary">{worker?.salary} $</div>
          <Tag type={worker?.status}>{worker?.status}</Tag>
          <div className="card__date">
            {moment(`Date(${worker?.date})`).locale("ru").format("DD/MM/YYYY")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerCard;
