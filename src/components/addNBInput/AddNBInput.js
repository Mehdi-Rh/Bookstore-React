import React from 'react';
import { PropTypes } from 'prop-types';
import './AddNBInput.css';

const AddNBInput = (props) => {
  const { handleChangeTitle, newTitle } = props;
  return (
    <input
      id="inputNewBook"
      value={newTitle}
      placeholder="Book title"
      onChange={handleChangeTitle}
    />
  );
};

export default AddNBInput;

AddNBInput.propTypes = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  newTitle: PropTypes.string,
  handleChangeTitle: PropTypes.func,

};

AddNBInput.defaultProps = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  newTitle: '',
  handleChangeTitle: () => { },
};
