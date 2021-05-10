import './App.css';
import WorkerCard from './components/WorkerCard.js';

import { connect } from "react-redux";
import { asyncGetStaff } from "./actions/"; 

import { useEffect } from 'react';

function App(props) {
  useEffect(() => {
    if(props.staff.length===0) props.onLoadStaff();
  });
  return (
    <div className="App">
      <section className="container">
        <h1>Сотрудники</h1>
        <div className="row">
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