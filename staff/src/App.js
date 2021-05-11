import './App.css';
import WorkerCard from './components/WorkerCard.js';

import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { connect } from "react-redux";
import { asyncGetStaff } from "./actions/"; 

import { useEffect } from 'react';

function App(props) {
  useEffect(() => {
    if(props.staff.length===0) props.onLoadStaff();
  });

  let history=useHistory();
  function handleClick() {
    history.push("/add");
  }

  return (
    <div className="App">
      <section className="container">
        <h1>Сотрудники</h1>
        <Button onClick={handleClick}>Добавить нового сотрудника</Button>
        <div className="row mt-4">
          {props.staff.map((worker,i)=>(
            <WorkerCard worker={worker} key={i}/>
          ))}
          </div>
      </section>
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
    onLoadStaff: ()=>{dispatch(asyncGetStaff())}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);