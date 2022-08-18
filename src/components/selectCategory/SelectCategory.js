import React from 'react';
import './SelectCategory.css';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectCategory = () => (

  <Dropdown>
    <Dropdown.Toggle variant="Info" id="lessonPanel">
      <span id="titleCategory">Category</span>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  // <div id="lessonPanel">
  //   <span id="titleCategory">Category</span>
  //   <span id="arrow">▼</span>
  // </div>

);

export default SelectCategory;
