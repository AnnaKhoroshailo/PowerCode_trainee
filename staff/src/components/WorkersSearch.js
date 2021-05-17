import { Button, Form, Navbar, FormControl } from 'react-bootstrap';

import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

function WorkersSearch() {
  const dispatch = useDispatch();
  const searchInput = useRef(null);

  function handleClick() {
    dispatch({type: "SEARCH_WORKERS", payload: searchInput.current.value});
  }
  function handleClickReset() {
    dispatch({type: "SEARCH_WORKERS", payload: ''});
  }

  return (
    <div>
      <Navbar>
        <Form className="d-flex">
          <FormControl type="text" className="search-input" placeholder="Имя сотрудника" ref={searchInput} />
          <Button type="button" onClick={handleClick}>Поиск</Button>
          <Button type="button" className="search-reset" onClick={handleClickReset}>Отмена</Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default WorkersSearch;