import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from "moment";

import { useHistory } from 'react-router-dom';

function WorkerCard(props) {
  const {worker}=props;

  let history=useHistory();
  function handleClickEdit(id) {
    history.push(`/workers/${id}/edit`);
  }
  return (
    <div className="col-sm-6 col-md-3 mb-2">
      <Card bg="primary" text="white">
        <Card.Header>
          <div className="d-flex align-items-center justify-content-between">
            <Link to={`/workers/${worker?.id}`} className="card-link">{worker?.name}</Link>
            <div>
              <Button variant="secondary" className="card-button card-button-edit" onClick={()=>handleClickEdit(worker?.id)}>&#9998;</Button>
              <Button variant="danger" className="card-button">&#10006;</Button>
            </div>
          </div>
          <Card.Img variant="top" src={worker?.url} />
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Должность: <span className="worker-text">{worker?.position}</span>
          </Card.Text>
          <Card.Text>
            Зарплата: <span className="worker-text">{worker?.salary} $</span>
          </Card.Text>
          <Card.Text>
            Статус: <span className="worker-text">{worker?.status}</span>
          </Card.Text>
          <Card.Text>
            Дата начала работы: <span className="worker-text">{moment(`Date(${worker?.date})`).locale('ru').format('DD/MM/YYYY')}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WorkerCard;