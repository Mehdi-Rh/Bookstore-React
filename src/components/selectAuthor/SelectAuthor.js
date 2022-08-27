import React from 'react';
import { PropTypes } from 'prop-types';
import './SelectAuthor.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const SelectAuthor = (props) => {
  const { handleChangeAuthor } = props;
  return (
    <input
      id="lessonPanel"
      placeholder="Add author"
      onChange={handleChangeAuthor}
    />
  );
};

export default SelectAuthor;

SelectAuthor.propTypes = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  handleChangeAuthor: PropTypes.func,
};

SelectAuthor.defaultProps = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  handleChangeAuthor: () => { },
};
