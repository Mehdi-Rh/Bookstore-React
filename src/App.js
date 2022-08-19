import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './containers/navbar/Navbar';
import BookPage from './pages/books/BookPage';
import AuthorsPage from './pages/authors/AuthorsPage';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<BookPage />} />
      <Route path="/author" element={<AuthorsPage />} />
    </Routes>
  </Router>
);

export default App;
