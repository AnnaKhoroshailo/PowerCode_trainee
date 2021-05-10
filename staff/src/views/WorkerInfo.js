import {connect} from 'react-redux';
import {asyncGetWorker} from "../actions/";
import moment from "moment";

import { useEffect } from 'react';

function WorkerInfo(props) {
  const {worker}=props;
  useEffect(() => {
    if(!worker) props.onLoadWorker(props.ownProperties.match.params.id);
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
const mapStateToProps=(state, ownProperties)=>{
  return {
    worker: state.staff.find(worker=>worker.id===+ownProperties.match.params.id),
    ownProperties
  };
}

const mapDispatchToProps=(dispatсh)=>{
  return {
    onLoadWorker: (id)=>{
      dispatсh(asyncGetWorker(id));
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerInfo);