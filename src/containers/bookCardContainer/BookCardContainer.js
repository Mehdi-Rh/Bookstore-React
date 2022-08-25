import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from '../../components/bookCard/BookCard';
import NBContainer from '../newBook/NBContainer';
import './BookCardContainer.css';
import { addBookAction } from '../../redux/books/books';

const BookCardContainer = () => {
  const mockBookList = useSelector((state) => state.books);

  const bookShow = mockBookList.map((book) => <BookCard key={book.id} book={book} />);

  let newTitle; let newAuthor;
  const handleChangeTitle = (e) => {
    e.preventDefault();
    newTitle = e.target.value;
  };
  const handleChangeAuthor = (e) => {
    e.preventDefault();
    newAuthor = e.target.value;
  };

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addBookAction(newTitle, newAuthor));
  };

  return (
    <div>
      <div>
        { bookShow }
      </div>
      <div className="line" />
      <NBContainer
        handleChangeTitle={handleChangeTitle}
        handleChangeAuthor={handleChangeAuthor}
        newAuthor={newAuthor}
        handleClick={handleClick}
      />
    </div>

  );
};

export default BookCardContainer;
