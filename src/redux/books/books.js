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
        books: state.books.filter((item) => item.id !== action.id),
        status: 'Delete book succeded',
      };
    default:
      return state;
  }
};

// const options = {method: 'GET'};

// fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JUWUUSwLtCmHou4Ag9hk/books', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

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

// const options = {
//   method: 'POST',
//   headers: { 'content-type': 'application/json' },
//   body: '{"item_id":"item2",
// "title":"The Great Mehdi","author":"Martin Adas","category":"Action"}',
// };

// fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JUWUUSwLtCmHou4Ag9hk/books', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const addBookAction = createAsyncThunk(addBook, async (book) => {
  await fetch(`${baseUrl}/apps/${apiId}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return book;
});

/*
{
  "item_id": "item2",
  "title": "The Great Mehdi",
  "author": "Martin Adas",
  "category": "Action"
}
*/

export const removeBookAction = (id) => ({
  type: removeBook,
  id,
});

export const deleteBook = createAsyncThunk(removeBook, async (id) => {
  await fetch(`${baseUrl}/apps/${apiId}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
  });

  return id;
});

export default bookReducer;
