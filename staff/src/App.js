import './App.css';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import {connect} from "react-redux";
import {asyncGetStaff} from "./actions/"; 

function App(props) {
  return (
    <div className="App">
      <header className="container">
        <div className="row">
          {props.staff.map((worker,i)=>(
            <div className="col-md-3 mb-2" key={i}>
              <Card bg="primary" text="white">
                <Card.Header>
                  <Link to={`/workers/${worker.id}`} className="card-link">{worker.name}</Link>
                  <Card.Img variant="top" src={worker.url} />
                </Card.Header>
                <Card.Body>
                  <Card.Text className="d-flex justify-content-between">
                    Должность: {worker.position}
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-between">
                    Зарплата: {worker.salary} $
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-between">
                    Статус: {worker.status}
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-between">
                    Дата начала работы: {worker.date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
          </div>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    staff: state.staff
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLoadStaff: dispatch(asyncGetStaff())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);