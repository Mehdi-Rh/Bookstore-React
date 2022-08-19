import React from 'react';
import AddNewBook from '../../components/addNBInput/AddNBInput';
import SelectAuthor from '../../components/selectAuthor/SelectAuthor';
import AddNBButton from '../../components/addNBButton/AddNBButton';
import './NBContainer.css';

const NBContainer = () => (
  <div id="newBook">
    <h1 className="addBookH1">ADD NEW BOOK</h1>
    <div id="addBook">
      <AddNewBook />

      <SelectAuthor />
      <AddNBButton />
    </div>
  </div>
);

export default NBContainer;
