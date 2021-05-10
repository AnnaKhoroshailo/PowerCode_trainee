import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from "moment";

function WorkerCard(props) {
  const {worker}=props;
  return (
    <div className="col-sm-6 col-md-3 mb-2">
      <Card bg="primary" text="white">
        <Card.Header>
          <div className="d-flex align-items-center justify-content-between">
            <Link to={`/workers/${worker.id}`} className="card-link">{worker.name}</Link>
            <div>
              <Button variant="secondary" className="card-button card-button-edit">&#9998;</Button>
              <Button variant="danger" className="card-button">&#10006;</Button>
            </div>
          </div>
          <Card.Img variant="top" src={worker.url} />
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Должность: {worker.position}
          </Card.Text>
          <Card.Text>
            Зарплата: {worker.salary} $
          </Card.Text>
          <Card.Text>
            Статус: {worker.status}
          </Card.Text>
          <Card.Text>
            Дата начала работы: {moment(`Date(${worker.date})`).locale('ru').format('L')}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WorkerCard;