import imgEdit from "../../images/edit.svg";
import imgDelete from "../../images/delete.svg";
import "./index.css";

import Button from "../Button";
import Tag from "../Tag";
import Modal from "../Modal";

import { useState } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { asyncDeleteWorker } from "../../actions";

import moment from "moment";
import "moment/locale/ru";

function WorkerCard({ worker }) {
  let history = useHistory();

  const dispatch = useDispatch();
  const [flagBg, setFlagBg] = useState(false);
  const [flagModal, setFlagModal] = useState(false);

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
  function handleClickDelete(e) {
    e.stopPropagation();
    setFlagModal(true);
  }
  function handleClickDeleteYes(id, worker) {
    dispatch(asyncDeleteWorker(id, worker));
    setFlagModal(false);
  }
  function handleClickDeleteNo() {
    setFlagModal(false);
  }
  return (
    <div className="worker col-md-6 col-xl-4 mb-4">
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
          <div
            style={{ backgroundImage: `url(${worker?.url})` }}
            className="card__img"
          ></div>
          <div className="card__name">{worker?.firstName}</div>
          <div className="card__lastname">{worker?.lastName}</div>
          <div className="card__position">{worker?.position}</div>
          <div className="card__salary">{worker?.salary} $</div>
          <Tag type={worker?.status}>{worker?.status}</Tag>
          <div className="card__date">
            {moment(`Date(${worker?.date})`)
              .locale("ru")
              .format("DD MMMM YYYY")}
          </div>
        </div>
      </div>
      <Modal visible={flagModal}>
        <h3>Вы уверены что хотите удалить сотрудника?</h3>
        <p className="mt-5 mb-4">
          После нажатия на кнопку удалить вы не сможете востановить сотрудника.
          Эта операция безвозвратна
        </p>
        <div className="d-flex justify-content-center">
          <Button
            modalBtn
            handleClick={() => handleClickDeleteYes(worker?.id, worker)}
          >
            Подтвердить
          </Button>
          <Button modalBtn error handleClick={handleClickDeleteNo}>
            Отменить
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default WorkerCard;
