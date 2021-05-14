import './App.css';
import WorkerCard from './components/WorkerCard.js';

import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { asyncGetStaff } from "./actions/"; 

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

function App() {
  const staff = useSelector(state => state.staff);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetStaff());
  }, [dispatch]);

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
          {staff.map((worker,i)=>(
            <WorkerCard worker={worker} key={i}/>
          ))}
          </div>
      </section>
    </div>
  );
}

export default App;