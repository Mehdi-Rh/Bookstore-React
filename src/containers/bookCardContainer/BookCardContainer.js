import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookCard from '../../components/bookCard/BookCard';
import NBContainer from '../newBook/NBContainer';
import './BookCardContainer.css';

const BookCardContainer = () => {
  const mockBookList = [
    {
      id: uuidv4(),
      schoolOf: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      percentComplete: '64',
      currentChapter: 'Chapter 17',
    },
    {
      id: uuidv4(),
      schoolOf: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      percentComplete: '8',
      currentChapter: 'Chapter 1',
    },
    {
      id: uuidv4(),
      schoolOf: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      percentComplete: '0',
      currentChapter: 'Introduction',
    },
  ];

  // const [bookList, setBookList] = useState([

  // ]);

  // // Progress
  // const [percentComplete, setPercentComplete] = useState({

  // });

  // const [currentChapter, setCurrentChapter] = useState({

  // });
  const bookShow = mockBookList.map((book) => <BookCard key={book.id} mockBook={book} />);

  return (
    <div>
      <div>
        { bookShow }
      </div>
      <div className="line" />
      <NBContainer />
    </div>

  );
};

export default BookCardContainer;
