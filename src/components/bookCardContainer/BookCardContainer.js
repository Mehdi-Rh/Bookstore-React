import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookCard from './bookCard/BookCard';
import NewBookContainer from './newBook/NewBookContainer';

const BookCardContainer = () => {
  const mockBookList = [
    {
      id: uuidv4(),
      schoolOf: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      percentComplete: '50',
      currentChapter: 'Chapter 9',
    },
    {
      id: uuidv4(),
      schoolOf: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      percentComplete: '1',
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
      <NewBookContainer />
    </div>

  );
};

export default BookCardContainer;
