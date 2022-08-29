import React from 'react';
import { PropTypes } from 'prop-types';
import AddNBInput from '../../components/addNBInput/AddNBInput';
import SelectAuthor from '../../components/selectAuthor/SelectAuthor';
import AddNBButton from '../../components/addNBButton/AddNBButton';
import './NBContainer.css';

const NBContainer = (props) => {
  const {
    handleChangeTitle, handleChangeAuthor, newAuthor, newTitle, handleClick,
  } = props;

  return (
    <div id="newBook">
      <h1 className="addBookH1">ADD NEW BOOK</h1>
      <div id="addBook">
        <AddNBInput handleChangeTitle={handleChangeTitle} newTitle={newTitle} />
        <SelectAuthor handleChangeAuthor={handleChangeAuthor} newAuthor={newAuthor} />
        <AddNBButton handleClick={handleClick} />
      </div>
    </div>
  );
};

export default NBContainer;

NBContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  handleChangeTitle: PropTypes.func,
  handleChangeAuthor: PropTypes.func,
  handleClick: PropTypes.func,
  newAuthor: PropTypes.string,
  newTitle: PropTypes.string,
};

NBContainer.defaultProps = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  handleChangeTitle: () => { },
  handleChangeAuthor: () => { },
  handleClick: () => { },
  newAuthor: 'Select Author',
  newTitle: '',
};
