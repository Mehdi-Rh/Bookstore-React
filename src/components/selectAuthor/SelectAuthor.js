import React from 'react';
import { PropTypes } from 'prop-types';
import './SelectAuthor.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const SelectAuthor = (props) => {
  const { handleChangeAuthor, newAuthor } = props;
  return (
    <input
      id="lessonPanel"
      placeholder="Add author"
      value={newAuthor}
      onChange={handleChangeAuthor}
    />
  );
};

export default SelectAuthor;

SelectAuthor.propTypes = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  newAuthor: PropTypes.string,
  handleChangeAuthor: PropTypes.func,
};

SelectAuthor.defaultProps = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  newAuthor: '',
  handleChangeAuthor: () => { },
};
