import React from 'react';
import { PropTypes } from 'prop-types';
import './SelectAuthor.css';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectAuthor = (props) => {
  const { handleChangeAuthor } = props;
  return (
  // <Dropdown onSelect={handleChangeAuthor}>
  //   <Dropdown.Toggle variant="Info" id="lessonPanel">
  //     <span id="titleCategory">{newAuthor}</span>
  //   </Dropdown.Toggle>

    //   <Dropdown.Menu>
    //     <Dropdown.Item href="#/action-1">Author_1</Dropdown.Item>
    //     <Dropdown.Item href="#/action-2">Author_2</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3">Author_3</Dropdown.Item>
    //   </Dropdown.Menu>
    // </Dropdown>
    <div>
      <select
        id="fruits"
        defaultValue="Select fruit"
        onChange={handleChangeAuthor}
      >
        <option value="Author_1">Author_1</option>
        <option value="Author_2">Author_2</option>
        <option value="Author_3">Author_3</option>
      </select>
    </div>
  );
};

export default SelectAuthor;

SelectAuthor.propTypes = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  handleChangeAuthor: PropTypes.func,
  // newAuthor: PropTypes.string,
};

SelectAuthor.defaultProps = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  handleChangeAuthor: () => { },
  // newAuthor: 'Select Author',

};
