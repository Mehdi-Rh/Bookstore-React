import React from 'react';
import './SelectAuthor.css';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectAuthor = () => (

  <Dropdown>
    <Dropdown.Toggle variant="Info" id="lessonPanel">
      <span id="titleCategory">Author</span>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Check status</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default SelectAuthor;
