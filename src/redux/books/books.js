import { v4 as uuidv4 } from 'uuid';

// Action types
const addBook = 'bookStore/books/addBook';
const removeBook = 'bookStore/books/removeBook';
const initialState = [];

export const addBookAction = (title, author) => ({
  type: addBook,
  payload: {
    id: uuidv4(),
    schoolOf: 'Action',
    title,
    author,
    percentComplete: '0%',
    currentChapter: 'Introduction',
  },
});

export const removeBookAction = (id) => ({
  type: removeBook,
  id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case addBook:
      return [...state, action.payload];
    case removeBook:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
