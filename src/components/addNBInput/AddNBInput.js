import React from 'react';
import { PropTypes } from 'prop-types';
import './AddNBInput.css';

const AddNBInput = (props) => {
  const { handleChangeTitle } = props;
  return (
    <input
      id="inputNewBook"
      placeholder="Book title"
      onChange={handleChangeTitle}
    />
  );
};

export default AddNBInput;

AddNBInput.propTypes = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  handleChangeTitle: PropTypes.func,

};

AddNBInput.defaultProps = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  handleChangeTitle: () => { },
};
