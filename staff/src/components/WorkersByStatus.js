import { Form } from 'react-bootstrap';

import {STATUS} from '../constants/workerStatus.js';

import { useDispatch } from 'react-redux';

import { useRef } from 'react';

function WorkersByStatus() {
  const dispatch = useDispatch();
  const statusForm = useRef(null);

  function handleChange() {
    const checkboxs = statusForm.current.status;
    const checkboxArray=Array.prototype.slice.call(checkboxs);
    const uncheckedCheckboxes = checkboxArray.filter(input => input.checked===false);
    const uncheckedCheckboxesValues = uncheckedCheckboxes.map(input => input.value);
    const checkedCheckboxes = checkboxArray.filter(input => input.checked);
    const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value);
    if(checkedCheckboxes.length>0) dispatch({type: "FILTER_WORKERS_BY_STATUS", payload:  checkedCheckboxesValues})
    else dispatch({type: "FILTER_WORKERS_BY_STATUS", payload:  uncheckedCheckboxesValues})
  }

  return (
    <Form ref={statusForm}>
      <Form.Check inline label={STATUS.work} name="status" value={STATUS.work} onChange={handleChange} />
      <Form.Check inline label={STATUS.vacation} name="status" value={STATUS.vacation} onChange={handleChange} />
      <Form.Check inline label={STATUS.fired} name="status" value={STATUS.fired} onChange={handleChange} />
    </Form>
  )
}

export default WorkersByStatus;