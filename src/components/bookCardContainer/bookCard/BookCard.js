import React from 'react';
import PropTypes, { string } from 'prop-types';
import './BookCard.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BookCard = (props) => {
  console.log('props');
  console.log(props);
  const { mockBook } = props;
  const {
    schoolOf, title, author, percentComplete, currentChapter,
  } = mockBook;

  return (
    <div className="bookCard">
      <div className="bookLeft">
        <div className="bookInfo">
          <span className="schoolOf">{schoolOf}</span>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
        </div>
        <div className="bookFunctionality">
          <span>Comment</span>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </div>
      <div className="bookMiddle">
        <div className="circularProgressbar"><CircularProgressbar value={percentComplete} text={`${percentComplete}%`} /></div>
        <div className="percentComplete">
          <span>{`${percentComplete}%`}</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="bookRight">
        <span className="Current-Chapter">
          Current Chapter
        </span>
        <span className="currentChapter">{currentChapter}</span>
        <span className="updateProgress">
          UPDATE PROGRESS
        </span>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  mockBook: PropTypes.objectOf(string).isRequired,
};
export default BookCard;
