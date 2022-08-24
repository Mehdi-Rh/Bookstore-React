import combineReducers from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  checkStatus: checkStatusReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
