import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import BookCard from '../../components/bookCard/BookCard';
import NBContainer from '../newBook/NBContainer';
import './BookCardContainer.css';
import { addBookAction, getBooksAction } from '../../redux/books/books';

const BookCardContainer = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [bookShow, setBookShow] = useState([]);

  const BookList = useSelector((state) => state.books);

  useEffect(() => {
    setBookShow((BookList.books.map((book) => <BookCard key={book.item_id} book={book} />)));
  }, [BookList]);

  const handleChangeTitle = (e) => {
    e.preventDefault();
    setNewTitle(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    e.preventDefault();
    setNewAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (newTitle.trim().length === 0 || newAuthor.trim().length === 0) return;

    const book = {
      item_id: uuidv4(),
      title: newTitle,
      author: newAuthor,
      category: 'Fiction',
    };

    dispatch(addBookAction(book));
    setNewTitle('');
    setNewAuthor('');
    dispatch(getBooksAction);
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
        newTitle={newTitle}
        handleClick={handleClick}
      />
    </div>

  );
};

export default BookCardContainer;
