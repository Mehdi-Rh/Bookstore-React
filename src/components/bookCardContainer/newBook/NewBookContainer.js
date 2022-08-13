import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewBookContainer = () => (
  <div id="newBook">
    <h1 className="addBookH1">ADD NEW BOOK</h1>
    <div id="addBook">
      <input className="inputNewBook" placeholder="Book title" />
      <Dropdown className="bg-light shadow-5 text-dark">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <button type="button" className="addBook">ADD BOOK</button>
    </div>
  </div>
);

export default NewBookContainer;
