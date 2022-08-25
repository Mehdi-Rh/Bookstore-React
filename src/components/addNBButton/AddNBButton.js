import React from 'react';
import { PropTypes } from 'prop-types';
import './AddNBButton.css';

const AddNBButton = (props) => {
  const { handleClick } = props;
  return (
    <button
      type="button"
      className="addBook"
      onClick={handleClick}
    >
      ADD BOOK
    </button>
  );
};

export default AddNBButton;

AddNBButton.propTypes = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  handleClick: PropTypes.func,
};

AddNBButton.defaultProps = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  handleClick: () => { },
};
