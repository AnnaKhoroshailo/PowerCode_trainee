import {asyncGetWorker} from "../actions/";

import moment from "moment";

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function WorkerInfo() {
  const { id }=useParams();
  let worker = useSelector(state => state.staff.find(worker=>worker.id===Number(id)));
  const dispatch=useDispatch();

  useEffect(() => {
    if(!worker) dispatch(asyncGetWorker(id));
  });
  return (
    <div className="Worker">
      <section className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h1>{worker?.name}</h1>
            <p>Должность: <span className="worker-text">{worker?.position}</span> </p>
            <p>Зарплата: <span className="worker-text">{worker?.salary} $</span></p>
            <p>Статус:  <span className="worker-text">{worker?.status}</span></p>
            <p>Дата начала работы: <span className="worker-text">{moment(`Date(${worker?.date})`).locale('ru').format('DD/MM/YYYY')}</span></p>
          </div>
          <div className="col-sm-6">
            <img src={worker?.url} alt={worker?.name} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkerInfo;