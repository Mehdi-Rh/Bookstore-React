import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  checkStatus: checkStatusReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
