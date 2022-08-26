import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './BookCard.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBookAction } from '../../redux/books/books';

const BookCard = (props) => {
  const { book } = props;
  const {
    schoolOf, title, author, percentComplete, currentChapter,
  } = book;

  const dispatch = useDispatch();
  const handleClickRemove = (e) => {
    e.preventDefault();
    dispatch(removeBookAction(book.id));
  };

  return (
    <div className="bookCard">
      <div className="bookLeft">
        <div className="bookInfo">
          <span className="schoolOf">{schoolOf}</span>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </div>
        <div className="bookFunctionality">
          <button type="button">Comment</button>
          <button
            type="button"
            onClick={handleClickRemove}
            onKeyDown={handleClickRemove}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="bookMiddle">
        <div className="circularProgressbar"><CircularProgressbar value={percentComplete} text={`${percentComplete}%`} /></div>
        <div className="percentComplete">
          <span className="percent">{`${percentComplete}%`}</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="bookRight">
        <span className="currentChapter">
          CURRENT CHAPTER
        </span>
        <span className="ccValue">{currentChapter}</span>
        <span className="updateProgress">
          UPDATE PROGRESS
        </span>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.func,
  schoolOf: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  currentChapter: PropTypes.string,
  percentComplete: PropTypes.number,
};

BookCard.defaultProps = {
  book: {},
  schoolOf: 'SchoolOf',
  title: 'Title',
  author: 'Author',
  currentChapter: 'Introduction',
  percentComplete: 0,
};

export default BookCard;
