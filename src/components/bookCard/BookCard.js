import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './BookCard.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBookAction } from '../../redux/books/books';

const BookCard = (props) => {
  const { book } = props;
  const { item_id: id, title, author } = book;

  const dispatch = useDispatch();
  const handleClickRemove = (e) => {
    e.preventDefault();
    dispatch(removeBookAction(id));
  };

  return (
    <div className="bookCard">
      <div className="bookLeft">
        <div className="bookInfo">
          <span className="schoolOf">Action</span>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </div>
        <div className="bookFunctionality">
          <button type="button">Comment</button>
          <div className="line_2" />
          <button
            type="button"
            onClick={handleClickRemove}
            onKeyDown={handleClickRemove}
          >
            Remove
          </button>
          <div className="line_2" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="bookMiddle">
        <div className="circularProgressbar"><CircularProgressbar value={0} text="0%" /></div>
        <div className="percentComplete">
          <span className="percent">0%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="bookRight">
        <span className="currentChapter">
          CURRENT CHAPTER
        </span>
        <span className="ccValue">Introduction</span>
        <span className="updateProgress">
          UPDATE PROGRESS
        </span>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  item_id: PropTypes.string.isRequired,
  book: PropTypes.func.isRequired,
  // schoolOf: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  // currentChapter: PropTypes.string,
  // percentComplete: PropTypes.number,
};

BookCard.defaultProps = {
  // book: {},
  // schoolOf: 'SchoolOf',
  title: 'Title',
  author: 'Author',
  // currentChapter: 'Introduction',
  // percentComplete: 0,
};

export default BookCard;
