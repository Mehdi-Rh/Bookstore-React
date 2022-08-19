import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './containers/navbar/Navbar';
import BookPage from './pages/books/BookPage';
import CategoriesPage from './pages/categories/CategoriesPage';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<BookPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </Router>
);

export default App;
