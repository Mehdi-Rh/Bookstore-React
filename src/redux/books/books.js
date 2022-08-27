import { createAsyncThunk } from '@reduxjs/toolkit';

// Action types
const addBook = 'bookStore/books/addBook';
const removeBook = 'bookStore/books/removeBook';
const getBooks = 'bookStore/books/getBooks';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiId = 'JUWUUSwLtCmHou4Ag9hk';

const initialState = {
  books: [],
  status: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'bookStore/books/getBooks/fulfilled':
      console.log(action.payload);
      return {
        books: action.payload,
        status: 'Fetch book list succeded',
      };
    case 'bookStore/books/addBook/fulfilled':
      return {
        books: [...state.books, action.payload],
        status: 'Add book succeded',
      };

    case 'bookStore/books/removeBook/fulfilled':
      return {
        books: state.books.filter((item) => item.item_id !== action.payload),
        status: 'Delete book succeded',
      };
    default:
      return state;
  }
};

export const getBooksAction = createAsyncThunk(getBooks, async () => {
  const response = await fetch(`${baseUrl}/apps/${apiId}/books`);
  const data = await response.json();
  const keys = Object.keys(data);
  const arrayData = [];
  keys.map((key) => arrayData.push({
    item_id: key,
    title: data[key][0].title,
    author: data[key][0].author,
    category: data[key][0].category,
  }));
  return arrayData || [];
});

export const addBookAction = createAsyncThunk(addBook, async (book) => {
  await fetch(`${baseUrl}/apps/${apiId}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return book;
});

export const removeBookAction = createAsyncThunk(removeBook, async (id) => {
  await fetch(`${baseUrl}/apps/${apiId}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
  });

  return id;
});

export default bookReducer;
