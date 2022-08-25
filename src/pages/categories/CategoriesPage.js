import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatusAction } from '../../redux/categories/categories';

const CategoriesPage = () => {
  const status = useSelector((state) => state.checkStatus);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(checkStatusAction());
  };

  return (
    <div>
      <button onClick={handleClick} type="button">Check status</button>
      {status && <h2>{status}</h2>}

    </div>

  );
};

export default CategoriesPage;
