import React from 'react';
import { PropTypes } from 'prop-types';
import './SelectAuthor.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const SelectAuthor = (props) => {
  const { handleChangeAuthor } = props;
  return (
    <div>
      <select
        id="fruits"
        placeholder="Select Author"
        onChange={handleChangeAuthor}
      >
        <option value="none" selected disabled hidden>Select Author</option>
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
};

SelectAuthor.defaultProps = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/no-typos
  handleChangeAuthor: () => { },
};
